// ══════════════════════════════════════════════════════════
//  ENGINE  — shared canvas engine, IIFE global
// ══════════════════════════════════════════════════════════
const Engine = (function () {
  'use strict';

  // ── state ──────────────────────────────────────────────
  let _cv, _ctx, _W, _H;
  let _topOffset  = 94;   // nav (58) + desc strip (36) — nodes never render behind header
  let _bottomPad  = 24;   // breathing room at bottom
  let _rightPad   = 0;    // set dynamically to avoid info panel overlap
  let _nodes    = [];
  let _edges    = [];
  let _particles= [];
  let _stars    = [];
  let _clusters = [];
  let _accent   = '#7b9acb';
  let _rafId    = null;
  let _callbacks= {};

  const TRAVEL   = 950;
  const COOLDOWN = 3200;
  const DEPTH    = 2;

  // ── colour helper ──────────────────────────────────────
  function rgba(hex, a) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  // ── resize ─────────────────────────────────────────────
  function resize() {
    _W = _cv.width  = window.innerWidth;
    _H = _cv.height = window.innerHeight;
  }

  // ── stars ──────────────────────────────────────────────
  function buildStars() {
    _stars = Array.from({ length: 150 }, function () {
      return {
        x:  Math.random(),
        y:  Math.random(),
        r:  Math.random() * 1.3 + .2,
        a:  Math.random() * .18 + .02,
        tw: Math.random() * Math.PI * 2,
        sp: .3 + Math.random() * .7
      };
    });
  }

  // ── graph ──────────────────────────────────────────────
  function buildGraph(ND, ED) {
    var mobile = _W <= 640;
    var R = Math.max(Math.min(_W, _H) * (mobile ? .052 : .037), mobile ? 28 : 22);
    var usableW = _W - _rightPad;
    var usableH = _H - _topOffset - _bottomPad;
    _nodes = ND.map(function (d) {
      return Object.assign({}, d, {
        x:         d.rx * usableW,
        y:         d.ry * usableH + _topOffset,
        radius:    R,
        active:    false,
        fireAt:    -Infinity,
        lastFired: -Infinity,
        pulse:     Math.random() * Math.PI * 2,
        outgoing:  []
      });
    });
    _edges = ED
      .map(function (pair) {
        return {
          from: _nodes.find(function (n) { return n.id === pair[0]; }),
          to:   _nodes.find(function (n) { return n.id === pair[1]; })
        };
      })
      .filter(function (e) { return e.from && e.to; });
    _edges.forEach(function (e) { e.from.outgoing.push(e.to); });
  }

  // ── bezier helpers ─────────────────────────────────────
  function cp(ax, ay, bx, by) {
    var mx  = (ax + bx) / 2, my = (ay + by) / 2;
    var dx  = bx - ax,       dy = by - ay;
    var len = Math.hypot(dx, dy) || 1;
    var c   = Math.min(len * .21, 52);
    return { x: mx + (-dy / len) * c, y: my + (dx / len) * c };
  }
  function bpt(ax, ay, cpx, cpy, bx, by, t) {
    var m = 1 - t;
    return { x: m*m*ax + 2*m*t*cpx + t*t*bx, y: m*m*ay + 2*m*t*cpy + t*t*by };
  }

  // ── particles ──────────────────────────────────────────
  function spawnParticles(fn, tn, count) {
    count = count || 5;
    for (var i = 0; i < count; i++) {
      (function (delay) {
        setTimeout(function () {
          _particles.push({
            from:  fn, to: tn,
            color: fn.color,
            t:     0,
            speed: .017 + Math.random() * .006,
            size:  2.8  + Math.random() * 1.8,
            trail: [],
            done:  false
          });
        }, delay);
      })(i * 85);
    }
  }

  function tickParticle(p) {
    p.t += p.speed;
    if (p.t >= 1) { p.done = true; return; }
    var a   = p.from, b = p.to;
    var cpt = cp(a.x, a.y, b.x, b.y);
    var pos = bpt(a.x, a.y, cpt.x, cpt.y, b.x, b.y, p.t);
    p.trail.push({ x: pos.x, y: pos.y });
    if (p.trail.length > 15) p.trail.shift();
  }

  function drawParticle(p) {
    var n = p.trail.length;
    if (n < 2) return;
    for (var i = 1; i < n; i++) {
      var f = i / n;
      _ctx.beginPath();
      _ctx.moveTo(p.trail[i-1].x, p.trail[i-1].y);
      _ctx.lineTo(p.trail[i].x,   p.trail[i].y);
      _ctx.strokeStyle = rgba(p.color, f * .75);
      _ctx.lineWidth   = p.size * f;
      _ctx.lineCap     = 'round';
      _ctx.stroke();
    }
    var h = p.trail[n - 1];
    var g = _ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, p.size * 4);
    g.addColorStop(0, rgba(p.color, .95));
    g.addColorStop(1, rgba(p.color, 0));
    _ctx.beginPath(); _ctx.arc(h.x, h.y, p.size * 4, 0, Math.PI * 2);
    _ctx.fillStyle = g; _ctx.fill();
    _ctx.beginPath(); _ctx.arc(h.x, h.y, p.size * .7, 0, Math.PI * 2);
    _ctx.fillStyle = 'rgba(255,255,255,.95)'; _ctx.fill();
  }

  // ── fire cascade ───────────────────────────────────────
  function fireNode(node, depth, now) {
    if (now - node.lastFired < COOLDOWN) return;
    node.lastFired = now;
    node.active    = true;
    node.fireAt    = now;

    node.outgoing.forEach(function (target, i) {
      var delay = i * 130;
      (function (tgt, dl) {
        setTimeout(function () { spawnParticles(node, tgt, 5); }, dl);
        setTimeout(function () {
          if (depth < DEPTH) {
            fireNode(tgt, depth + 1, performance.now());
          } else {
            var pn = performance.now();
            if (pn - tgt.lastFired >= COOLDOWN) {
              tgt.active    = true;
              tgt.fireAt    = pn;
              tgt.lastFired = pn;
            }
          }
        }, dl + TRAVEL);
      })(target, delay);
    });
  }

  // ── draw edge ──────────────────────────────────────────
  function drawEdge(e) {
    var a = e.from, b = e.to;
    var cpt    = cp(a.x, a.y, b.x, b.y);
    var active = a.active || b.active;
    var alpha  = active ? .52 : .15;
    var col    = _accent;

    _ctx.beginPath();
    _ctx.moveTo(a.x, a.y);
    _ctx.quadraticCurveTo(cpt.x, cpt.y, b.x, b.y);
    _ctx.strokeStyle = rgba(col, alpha);
    _ctx.lineWidth   = active ? 1.4 : .7;
    _ctx.setLineDash([4, 9]);
    _ctx.stroke();
    _ctx.setLineDash([]);

    var tp  = bpt(a.x, a.y, cpt.x, cpt.y, b.x, b.y, .96);
    var ang = Math.atan2(b.y - tp.y, b.x - tp.x);
    var ar  = 9, sp = .38;
    var tx  = b.x - Math.cos(ang) * (b.radius + 3);
    var ty  = b.y - Math.sin(ang) * (b.radius + 3);
    _ctx.beginPath();
    _ctx.moveTo(tx, ty);
    _ctx.lineTo(tx - Math.cos(ang - sp) * ar, ty - Math.sin(ang - sp) * ar);
    _ctx.moveTo(tx, ty);
    _ctx.lineTo(tx - Math.cos(ang + sp) * ar, ty - Math.sin(ang + sp) * ar);
    _ctx.strokeStyle = rgba(col, alpha * 1.5);
    _ctx.lineWidth   = active ? 1.4 : .7;
    _ctx.stroke();
  }

  // ── draw node ──────────────────────────────────────────
  function drawNode(node, now) {
    var x = node.x, y = node.y, R = node.radius;
    var color  = node.color;
    var active = node.active;
    var age    = now - node.fireAt;
    var t      = now * .001;

    // glow
    var ga   = active ? .28 : .06 + .025 * Math.sin(t + node.pulse);
    var gr   = active ? R * 3.4 : R * 2.4;
    var gOut = _ctx.createRadialGradient(x, y, R * .3, x, y, gr);
    gOut.addColorStop(0, rgba(color, ga * 2.2));
    gOut.addColorStop(1, rgba(color, 0));
    _ctx.beginPath(); _ctx.arc(x, y, gr, 0, Math.PI * 2);
    _ctx.fillStyle = gOut; _ctx.fill();

    // ripple rings
    if (active && age < 2000) {
      for (var ri = 0; ri < 3; ri++) {
        var ph = (age / 2000 + ri / 3) % 1;
        var rr = R + ph * R * 2.8;
        var ra = (1 - ph) * .5;
        _ctx.beginPath(); _ctx.arc(x, y, rr, 0, Math.PI * 2);
        _ctx.strokeStyle = rgba(color, ra);
        _ctx.lineWidth   = 2 * (1 - ph) + .4;
        _ctx.stroke();
      }
    }

    // fill
    var gf = _ctx.createRadialGradient(x - R*.32, y - R*.35, 1, x, y, R);
    gf.addColorStop(0,  rgba(color, active ? 1   : .9));
    gf.addColorStop(.5, rgba(color, active ? .6  : .32));
    gf.addColorStop(1,  rgba(color, active ? .28 : .1));
    _ctx.beginPath(); _ctx.arc(x, y, R, 0, Math.PI * 2);
    _ctx.fillStyle = gf; _ctx.fill();

    // ring
    _ctx.beginPath(); _ctx.arc(x, y, R, 0, Math.PI * 2);
    _ctx.strokeStyle = rgba(color, active ? 1 : .55);
    _ctx.lineWidth   = active ? 2.8 : 1.5;
    _ctx.stroke();

    // label
    var lines  = node.label.split('\n');
    var fs     = Math.round(R * (lines.length > 1 ? .28 : .32));
    _ctx.font         = (active ? '600' : '400') + ' ' + fs + "px 'Cinzel', serif";
    _ctx.textAlign    = 'center';
    _ctx.textBaseline = 'middle';
    _ctx.fillStyle    = active ? '#ffffff' : rgba('#c8d8e8', .92);
    var lh     = fs * 1.3;
    var startY = y - (lines.length - 1) * lh * .5;
    lines.forEach(function (ln, idx) {
      _ctx.fillText(ln, x, startY + idx * lh);
    });
  }

  // ── draw background ────────────────────────────────────
  function drawBG(now) {
    var gs = Math.min(_W, _H) * .09;
    _ctx.strokeStyle = rgba('#0a1220', .9);
    _ctx.lineWidth = .5;
    for (var x = 0; x < _W; x += gs) {
      _ctx.beginPath(); _ctx.moveTo(x, 0); _ctx.lineTo(x, _H); _ctx.stroke();
    }
    for (var y = 0; y < _H; y += gs) {
      _ctx.beginPath(); _ctx.moveTo(0, y); _ctx.lineTo(_W, y); _ctx.stroke();
    }

    var vg = _ctx.createRadialGradient(_W*.5, _H*.5, Math.min(_W,_H)*.12, _W*.5, _H*.5, Math.min(_W,_H)*.78);
    vg.addColorStop(0, rgba('#060f22', .0));
    vg.addColorStop(1, rgba('#02040a', .72));
    _ctx.fillStyle = vg;
    _ctx.fillRect(0, 0, _W, _H);

    _stars.forEach(function (s) {
      var a = s.a * (0.6 + 0.4 * Math.sin(now * .0006 * s.sp + s.tw));
      _ctx.beginPath();
      _ctx.arc(s.x * _W, s.y * _H, s.r, 0, Math.PI * 2);
      _ctx.fillStyle = rgba('#88b0ee', a);
      _ctx.fill();
    });

    // cluster labels
    _ctx.font         = "400 11px 'Cinzel', serif";
    _ctx.textAlign    = 'center';
    _ctx.fillStyle    = rgba('#c8d8e8', .12);
    _ctx.textBaseline = 'top';
    var usableW = _W - _rightPad;
    var usableH = _H - _topOffset - _bottomPad;
    _clusters.forEach(function (cl) {
      _ctx.fillText(cl.label, cl.x * usableW, cl.y * usableH + _topOffset);
    });
  }

  // ── render loop ────────────────────────────────────────
  function render(now) {
    _ctx.clearRect(0, 0, _W, _H);
    drawBG(now);

    _nodes.forEach(function (n) {
      if (n.active && now - n.fireAt > 2400) n.active = false;
    });

    _edges.forEach(drawEdge);

    _particles.forEach(tickParticle);
    _particles.forEach(drawParticle);
    _particles = _particles.filter(function (p) { return !p.done; });

    _nodes.forEach(function (n) { drawNode(n, now); });

    _rafId = requestAnimationFrame(render);
  }

  // ── hit test ───────────────────────────────────────────
  function hitTest(mx, my) {
    var extra = _W <= 640 ? 14 : 7;  // bigger tap target on mobile
    return _nodes.find(function (n) {
      return Math.hypot(mx - n.x, my - n.y) < n.radius + extra;
    });
  }

  // ── event handlers (stored refs for removeEventListener) ─
  function _handleClick(e) {
    var hit = hitTest(e.clientX, e.clientY);
    if (hit) {
      fireNode(hit, 0, performance.now());
      if (_callbacks.onClick) _callbacks.onClick(hit);
    }
  }
  function _handleMove(e) {
    var hit = hitTest(e.clientX, e.clientY);
    _cv.style.cursor = hit ? 'pointer' : 'default';
    if (hit && _callbacks.onHover) _callbacks.onHover(hit);
  }
  function _handleTouch(e) {
    var t   = e.touches[0];
    var hit = hitTest(t.clientX, t.clientY);
    if (hit) {
      fireNode(hit, 0, performance.now());
      if (_callbacks.onClick) _callbacks.onClick(hit);
      e.preventDefault();
    }
  }
  function _handleResize() {
    resize();
    var usableW = _W - _rightPad;
    var usableH = _H - _topOffset - _bottomPad;
    _nodes.forEach(function (n) {
      n.x = n.rx * usableW;
      n.y = n.ry * usableH + _topOffset;
    });
  }

  // ── public API ─────────────────────────────────────────
  function init(canvasEl, ND, ED, clusterDefs, accentHex, callbacks, topOffset, rightPad) {
    _cv         = canvasEl;
    _ctx        = canvasEl.getContext('2d');
    _clusters   = clusterDefs  || [];
    _accent     = accentHex    || '#7b9acb';
    _callbacks  = callbacks    || {};
    _topOffset  = topOffset !== undefined ? topOffset : 94;
    _rightPad   = rightPad  !== undefined ? rightPad  : 0;

    resize();
    buildStars();
    buildGraph(ND, ED);

    _cv.addEventListener('click',      _handleClick);
    _cv.addEventListener('mousemove',  _handleMove);
    _cv.addEventListener('touchstart', _handleTouch, { passive: false });
    window.addEventListener('resize',  _handleResize);

    _rafId = requestAnimationFrame(render);
  }

  function destroy() {
    if (_rafId) { cancelAnimationFrame(_rafId); _rafId = null; }
    if (_cv) {
      _cv.removeEventListener('click',      _handleClick);
      _cv.removeEventListener('mousemove',  _handleMove);
      _cv.removeEventListener('touchstart', _handleTouch);
    }
    window.removeEventListener('resize', _handleResize);
    _nodes = []; _edges = []; _particles = [];
  }

  function fireById(id) {
    var node = _nodes.find(function (n) { return n.id === id; });
    if (node) fireNode(node, 0, performance.now());
  }

  function showInfoById(id) {
    var node = _nodes.find(function (n) { return n.id === id; });
    if (node && _callbacks.onHover) _callbacks.onHover(node);
  }

  return { init: init, destroy: destroy, fireById: fireById, showInfoById: showInfoById };

})();
