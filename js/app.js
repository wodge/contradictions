// ══════════════════════════════════════════════════════════
//  APP — orchestration, intro, navigation, info panel
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  var currentView = null;

  // ── DOM refs ───────────────────────────────────────────
  var intro       = document.getElementById('intro');
  var app         = document.getElementById('app');
  var canvas      = document.getElementById('c');
  var curtain     = document.getElementById('curtain');
  var viewDesc    = document.getElementById('view-desc-text');
  var info        = document.getElementById('info');
  var infoToggle  = document.getElementById('info-toggle');
  var iType       = document.getElementById('i-type');
  var iCluster    = document.getElementById('i-cluster');
  var iName       = document.getElementById('i-name');
  var iDesc       = document.getElementById('i-desc');
  var iRel        = document.getElementById('i-rel');
  var legThesis   = document.getElementById('leg-thesis');
  var legAnti     = document.getElementById('leg-anti');
  var legSynth    = document.getElementById('leg-synth');
  var tabs        = document.querySelectorAll('.tab');
  var introBtns   = document.querySelectorAll('.icard');
  var homeBtn     = document.getElementById('nav-home-btn');

  // Panel width for engine right-padding — keeps nodes clear of the panel
  var panelOpen   = true;

  function isMobile() { return window.innerWidth <= 640; }

  function getTopOffset() {
    // Mobile: no desc strip (48px nav only)
    // Desktop: nav (58px) + desc strip (36px)
    return isMobile() ? 48 : 94;
  }

  function getRightPad() {
    // Mobile: panel is bottom sheet — no right pad needed
    if (isMobile()) return 0;
    return panelOpen ? 300 : 0;
  }

  // ── info panel ─────────────────────────────────────────
  function showInfo(node) {
    iType.textContent           = node.type.toUpperCase();
    iType.style.color           = node.color;
    iCluster.textContent        = node.cluster || '';
    iName.textContent           = node.label.replace(/\n/g, ' ');
    iDesc.textContent           = node.desc || '';
    iRel.textContent            = node.relates ? '\u21b3 ' + node.relates : '';
    info.style.borderLeftColor  = node.color;
    info.classList.add('show');
    // auto-expand if collapsed when a node is selected
    if (info.classList.contains('collapsed')) {
      info.classList.remove('collapsed');
      panelOpen = true;
    }
  }

  // ── legend colours ─────────────────────────────────────
  function updateLegend(dataset) {
    var tc = dataset.thesisColor;
    legThesis.style.background  = tc;
    legThesis.style.boxShadow   = '0 0 7px ' + tc;
    legAnti.style.background    = '#ff6b35';
    legAnti.style.boxShadow     = '0 0 7px #e8304a';
    legSynth.style.background   = '#18c97c';
    legSynth.style.boxShadow    = '0 0 7px #18c97c';
  }

  // ── switch view ────────────────────────────────────────
  function switchView(viewKey) {
    if (viewKey === currentView) return;
    var dataset = DATA[viewKey];
    if (!dataset) return;

    // update active tab
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.dataset.view === viewKey);
    });

    // pull curtain
    curtain.classList.add('show');

    setTimeout(function () {
      // stop old engine
      Engine.destroy();

      // hide info panel
      info.classList.remove('show');

      // update view metadata
      currentView = viewKey;
      app.dataset.view = viewKey;
      viewDesc.textContent = dataset.desc;
      updateLegend(dataset);

      // init engine
      Engine.init(
        canvas,
        dataset.nodes,
        dataset.edges,
        dataset.clusters,
        dataset.accentColor,
        { onHover: showInfo, onClick: showInfo },
        getTopOffset(),
        getRightPad()
      );

      // fire intro node after short delay
      setTimeout(function () {
        var first = dataset.nodes[0];
        if (first) {
          Engine.fireById(first.id);
          Engine.showInfoById(first.id);
        }
      }, 700);

      // lift curtain
      curtain.classList.remove('show');

    }, 340);
  }

  // ── enter app ──────────────────────────────────────────
  function enterApp(viewKey) {
    intro.classList.add('fade-out');
    setTimeout(function () {
      intro.style.display = 'none';
      app.classList.remove('hidden');
      app.classList.add('visible');
      switchView(viewKey);
    }, 700);
  }

  // ── return to intro ────────────────────────────────────
  function returnToIntro() {
    Engine.destroy();
    currentView = null;
    app.classList.remove('visible');
    app.classList.add('hidden');
    intro.style.display = '';
    intro.classList.remove('fade-out');
    // reset intro animation by re-triggering
    intro.style.opacity = '0';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        intro.style.transition = 'opacity .5s ease';
        intro.style.opacity = '1';
      });
    });
  }

  // ── event listeners ────────────────────────────────────

  // Info panel toggle
  infoToggle.addEventListener('click', function () {
    if (isMobile()) {
      // On mobile the toggle/handle dismisses the sheet
      info.classList.remove('show');
      panelOpen = false;
    } else {
      panelOpen = !panelOpen;
      info.classList.toggle('collapsed', !panelOpen);
    }
  });

  // Mobile: tap canvas closes bottom sheet
  canvas.addEventListener('click', function (e) {
    if (isMobile() && info.classList.contains('show')) {
      var hit = false;
      // Only close if we didn't tap a node (engine handles node taps)
      // We close after a short delay so node tap can open it first
      setTimeout(function () {
        // if panel re-opened by a node tap this won't run
      }, 50);
    }
  });

  introBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      enterApp(btn.dataset.view);
    });
  });

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      switchView(tab.dataset.view);
    });
  });

  homeBtn.addEventListener('click', returnToIntro);

  // ── keyboard shortcut (1/2/3) ──────────────────────────
  document.addEventListener('keydown', function (e) {
    if (app.classList.contains('hidden')) return;
    if (e.key === '1') switchView('classical');
    if (e.key === '2') switchView('modern');
    if (e.key === '3') switchView('bridge');
    if (e.key === '4') switchView('rochdale');
    if (e.key === '5') switchView('culture');
    if (e.key === '6') switchView('gender');
    if (e.key === '7') switchView('nation');
    if (e.key === '8') switchView('postindustrial');
    if (e.key === '9') switchView('democracy');
  });

})();
