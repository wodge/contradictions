// ══════════════════════════════════════════════════════════
//  DATA  — three view datasets, all strings in double quotes
// ══════════════════════════════════════════════════════════
var DATA = {};

// ══════════════════════════════════════════════════════════
//  I. CLASSICAL THEORY
//  Hegel through Marx, Engels, Lenin
// ══════════════════════════════════════════════════════════
DATA.classical = {
  label: "Classical Theory",
  desc:  "Hegel's dialectic of Being grounds the materialist analysis of history. Follow the internal contradictions of each mode of production through to their necessary negation — from primitive accumulation to the threshold of socialism.",
  accentColor: '#f5a623',
  thesisColor: '#f5a623',

  clusters: [
    { label: "I. Pure Logic",               x: .10,  y: .07 },
    { label: "II. Modes of Production",     x: .34,  y: .04 },
    { label: "III. Value Theory",           x: .60,  y: .04 },
    { label: "IV. Class Consciousness",     x: .42,  y: .54 },
    { label: "V. Historical Resolution",    x: .25,  y: .72 },
    { label: "VI. Alienation",              x: .84,  y: .05 },
    { label: "VII. Base & Superstructure",  x: .83,  y: .38 },
    { label: "VIII. Imperialism",           x: .66,  y: .69 }
  ],

  nodes: [
    // ── I. Pure Logic ──────────────────────────────────
    { id:"being",    type:"thesis",     color:"#f5a623", label:"Being",              rx:.07, ry:.22, cluster:"I. Pure Logic",
      desc:"Pure, immediate existence — the most abstract category of all thought. Being is simply that something IS, without further determination. Hegel's starting point for the whole dialectical movement.",
      relates:"Negated by Nothing, preserved in Becoming" },
    { id:"nothing",  type:"antithesis", color:"#ff6b35", label:"Nothing",            rx:.185,ry:.22, cluster:"I. Pure Logic",
      desc:"The negation of being. Pure nothing is entirely empty — yet indistinguishable from pure being, which is equally empty of determination. The contradiction is absolute and unavoidable.",
      relates:"Negates Being, sublated into Becoming" },
    { id:"becoming", type:"synthesis",  color:"#18c97c", label:"Becoming",           rx:.13, ry:.38, cluster:"I. Pure Logic",
      desc:"The first concrete category: the unity of being and nothing in motion. Reality is ceaseless coming-to-be and passing-away. Becoming is what being and nothing truly are when thought through.",
      relates:"Aufhebung of Being & Nothing — grounds History" },

    // ── II. Modes of Production ────────────────────────
    { id:"feudalism",  type:"thesis",     color:"#f5a623", label:"Feudalism",         rx:.28, ry:.12, cluster:"II. Modes of Production",
      desc:"Lords own the land; serfs provide labour and tribute. Fixed social hierarchy with religious legitimation. Within it grows a fatal contradiction: merchant wealth that owes nothing to the feudal order and corrodes it from within.",
      relates:"Thesis of the historical sequence" },
    { id:"merchant",   type:"antithesis", color:"#ff6b35", label:"Merchant\nCapital", rx:.40, ry:.12, cluster:"II. Modes of Production",
      desc:"Trade and money dissolve feudal personal bonds into impersonal market relations. The bourgeoisie accumulates outside feudal law, demanding legal equality — property over lineage. The negation gathering force.",
      relates:"Negates feudal relations of production" },
    { id:"capitalism", type:"synthesis",  color:"#18c97c", label:"Industrial\nCapitalism", rx:.34, ry:.28, cluster:"II. Modes of Production",
      desc:"Wage labour replaces serfdom. Workers are doubly free — free from the land, free to sell labour-power as a commodity. Old contradictions resolved; new, deeper ones immediately generated. The synthesis becomes a new thesis.",
      relates:"Synthesis — generates Value and Class contradictions" },

    // ── III. Value Theory ──────────────────────────────
    { id:"use_value",      type:"thesis",     color:"#f5a623", label:"Use Value",      rx:.54, ry:.12, cluster:"III. Value Theory",
      desc:"Things have worth through their concrete usefulness. A hammer hammers; bread feeds. Use value expresses the qualitative relation between human need and the natural world. It cannot be compared or accumulated as such.",
      relates:"Thesis within the commodity form" },
    { id:"exchange_value", type:"antithesis", color:"#ff6b35", label:"Exchange\nValue",rx:.66, ry:.12, cluster:"III. Value Theory",
      desc:"Things become measurable through abstract labour time. The market strips away qualitative difference — so many hours, so many pounds. Quality dissolves into quantity. The great abstraction of capital.",
      relates:"Negates use value — subsumes it under equivalence" },
    { id:"surplus_value",  type:"synthesis",  color:"#18c97c", label:"Surplus\nValue", rx:.60, ry:.27, cluster:"III. Value Theory",
      desc:"Labour-power produces more value than it costs to reproduce. This surplus — unpaid labour appropriated by capital — is the secret of profit, rent, and interest. The hidden engine of accumulation and crisis.",
      relates:"Reveals exploitation at the heart of exchange" },

    // ── IV. Class Consciousness ────────────────────────
    { id:"class_in_itself",  type:"thesis",     color:"#f5a623", label:"Class\nin-Itself",  rx:.25, ry:.58, cluster:"IV. Class Consciousness",
      desc:"Workers share objective conditions — wage labour, dispossession, market dependency — but lack common identity. Competition and atomisation divide them. The class exists as an economic fact; it does not yet know itself.",
      relates:"Objective class position without subjective awareness" },
    { id:"class_struggle",   type:"antithesis", color:"#ff6b35", label:"Class\nStruggle",   rx:.42, ry:.64, cluster:"IV. Class Consciousness",
      desc:"Material conflict sharpens the contradiction into consciousness. Strikes, trade unions, Chartism, political organisation emerge from shared experience of exploitation. The history of all hitherto existing society is the history of class struggles.",
      relates:"The engine of historical change" },
    { id:"class_for_itself", type:"synthesis",  color:"#18c97c", label:"Class\nfor-Itself", rx:.58, ry:.58, cluster:"IV. Class Consciousness",
      desc:"The working class becomes conscious of its historical role. No longer merely an object acted upon by history — it becomes its subject and agent. From thing to actor: this is the dialectic of liberation.",
      relates:"Subjective force for historical transformation" },

    // ── V. Historical Resolution ───────────────────────
    { id:"proletariat", type:"antithesis", color:"#ff6b35", label:"Proletariat", rx:.20, ry:.80, cluster:"V. Historical Resolution",
      desc:"The class created by capital, whose collective labour produces all value, yet who own nothing but their labour-power. Social production increasingly contradicts private ownership — the fundamental contradiction that cannot be resolved within capitalism itself.",
      relates:"The negation capital carries within itself" },
    { id:"socialism",   type:"synthesis",  color:"#18c97c", label:"Socialism",   rx:.42, ry:.89, cluster:"V. Historical Resolution",
      desc:"Social ownership of the means of production resolves the contradiction between social labour and private appropriation. Not the end of history — but a new stage of the dialectic, with its own contradictions to work through.",
      relates:"Aufhebung of capitalist contradictions" },

    // ── VI. Alienation ─────────────────────────────────
    { id:"unalienated_labour", type:"thesis",     color:"#f5a623", label:"Free\nLabour",       rx:.78, ry:.12, cluster:"VI. Alienation",
      desc:"Labour as creative, self-realising activity — the free expression of human powers. For Marx, the capacity for conscious, purposive transformation of nature is what defines humanity as a species. This is our species-being in its undistorted form.",
      relates:"The human potential capitalism suppresses" },
    { id:"alienated_labour",   type:"antithesis", color:"#ff6b35", label:"Alienated\nLabour",  rx:.90, ry:.20, cluster:"VI. Alienation",
      desc:"Under capitalism, labour confronts the worker as something alien and hostile. The worker is estranged from the product, from the act of production, from fellow workers, and from their own species-being. The four-fold estrangement of wage labour.",
      relates:"The four-fold estrangement produced by wage labour" },
    { id:"species_being",      type:"synthesis",  color:"#18c97c", label:"Species-\nBeing",    rx:.84, ry:.33, cluster:"VI. Alienation",
      desc:"The overcoming of alienation through the conscious recovery of human creative power. Not a return to a primitive past, but a higher unity — free individuals consciously shaping their collective life. The full realisation of human potential.",
      relates:"Aufhebung of alienation — human emancipation" },

    // ── VII. Base & Superstructure ─────────────────────
    { id:"material_base",      type:"thesis",     color:"#f5a623", label:"Material\nBase",       rx:.76, ry:.46, cluster:"VII. Base & Superstructure",
      desc:"The forces and relations of production — technology, raw materials, how labour is organised, who owns the means of production. For historical materialism, this economic foundation is the real basis upon which legal, political, and cultural forms are built.",
      relates:"Determines the character of the superstructure" },
    { id:"superstructure",     type:"antithesis", color:"#ff6b35", label:"Super-\nstructure",    rx:.90, ry:.46, cluster:"VII. Base & Superstructure",
      desc:"Law, the state, religion, philosophy, art, education — all the institutions and ideas that arise upon the economic base. The superstructure actively reproduces and legitimates the relations of production, but is ultimately constrained by them.",
      relates:"Reflects and reinforces the material base" },
    { id:"false_consciousness",type:"synthesis",  color:"#18c97c", label:"False\nConsciousness", rx:.83, ry:.60, cluster:"VII. Base & Superstructure",
      desc:"When the ideas of the ruling class become the ruling ideas, workers understand their exploitation through the categories that serve their exploiters. The contradiction between lived experience and ruling ideology is itself a material force.",
      relates:"Ideological mystification that class struggle dissolves" },

    // ── VIII. Imperialism ──────────────────────────────
    { id:"monopoly_capital",    type:"thesis",     color:"#f5a623", label:"Monopoly\nCapital",    rx:.58, ry:.76, cluster:"VIII. Imperialism",
      desc:"Free competition drives concentration. Small capitals are absorbed; surviving firms grow vast, and finance capital fuses with industrial capital. The competitive capitalism of the 19th century gives way to the monopoly stage.",
      relates:"The highest stage of capitalist development" },
    { id:"imperialism",         type:"antithesis", color:"#ff6b35", label:"Imperialism",           rx:.73, ry:.82, cluster:"VIII. Imperialism",
      desc:"Monopoly capital exports itself in search of higher profit rates. The world is divided among great powers and corporations. War between imperialist blocs becomes structural. The periphery is locked into dependency and underdevelopment.",
      relates:"Capitalism's global contradictions laid bare" },
    { id:"national_liberation", type:"synthesis",  color:"#18c97c", label:"National\nLiberation",  rx:.65, ry:.92, cluster:"VIII. Imperialism",
      desc:"Imperialism generates its own negation: colonised peoples organise for liberation. Anti-colonial movements fuse national and class contradictions. The world revolution is widened beyond the industrial working class of the metropolis.",
      relates:"Dialectical negation of imperial domination" }
  ],

  edges: [
    ["being","nothing"], ["nothing","becoming"], ["becoming","being"],
    ["feudalism","merchant"], ["merchant","capitalism"],
    ["use_value","exchange_value"], ["exchange_value","surplus_value"],
    ["class_in_itself","class_struggle"], ["class_struggle","class_for_itself"],
    ["becoming","feudalism"],
    ["capitalism","use_value"], ["capitalism","class_in_itself"],
    ["capitalism","proletariat"], ["capitalism","material_base"],
    ["capitalism","unalienated_labour"],
    ["surplus_value","capitalism"], ["surplus_value","proletariat"],
    ["surplus_value","alienated_labour"], ["surplus_value","monopoly_capital"],
    ["class_for_itself","socialism"], ["proletariat","socialism"],
    ["unalienated_labour","alienated_labour"],
    ["alienated_labour","species_being"], ["species_being","socialism"],
    ["material_base","superstructure"],
    ["superstructure","false_consciousness"],
    ["false_consciousness","class_in_itself"],
    ["class_struggle","false_consciousness"],
    ["monopoly_capital","imperialism"],
    ["imperialism","national_liberation"],
    ["national_liberation","socialism"],
    ["class_for_itself","national_liberation"],
    ["material_base","capitalism"],
    ["species_being","class_for_itself"]
  ]
};

// ══════════════════════════════════════════════════════════
//  II. MODERN CONTRADICTIONS
//  Contemporary expressions of capital's fundamental crises
// ══════════════════════════════════════════════════════════
DATA.modern = {
  label: "Modern Contradictions",
  desc:  "The contemporary expressions of capital's fundamental contradictions: the free market myth, fractional reserve finance, petrodollar hegemony, structural adjustment, neoliberal labour discipline, fossil capital, surveillance enclosure, and imperial extraction.",
  accentColor: '#3b9eff',
  thesisColor: '#3b9eff',

  clusters: [
    { label: 'I. The "Free Market"',           x: .115, y: .06 },
    { label: "II. Fractional Reserve Banking", x: .34,  y: .04 },
    { label: "III. The Petrodollar System",     x: .53,  y: .04 },
    { label: "IV. Hegemony & Global South",     x: .73,  y: .04 },
    { label: "V. Labour & Neoliberalism",       x: .115, y: .46 },
    { label: "VI. Climate & Capital",           x: .885, y: .34 },
    { label: "VII. Surveillance & Control",     x: .37,  y: .52 },
    { label: "VIII. Extraction & Neo-colonialism", x: .69, y: .50 }
  ],

  nodes: [
    // ── I. Free Market ─────────────────────────────────
    { id:"free_market",           type:"thesis",     color:"#3b9eff", label:"Free Market\nIdeology",    rx:.06, ry:.18, cluster:'I. The "Free Market"',
      desc:"The dominant ideology since Thatcher and Reagan: markets self-regulate, prices aggregate information perfectly, state interference distorts efficiency. Deregulation, privatisation and free trade presented as natural laws rather than political choices.",
      relates:"The ideological legitimation of capital" },
    { id:"market_failure",        type:"antithesis", color:"#ff6b35", label:"Market\nFailure",           rx:.17, ry:.18, cluster:'I. The "Free Market"',
      desc:"Monopoly, oligopoly, systemic risk, negative externalities, information asymmetry — the market does not self-correct. The 2008 crash exposed the fiction: banks too big to fail, losses socialised, gains privatised. The invisible hand is a fist.",
      relates:"The empirical negation of market ideology" },
    { id:"state_corporate_nexus", type:"synthesis",  color:"#18c97c", label:"State-Corporate\nNexus",  rx:.115,ry:.34, cluster:'I. The "Free Market"',
      desc:"The real operating system: regulatory capture, revolving doors, subsidies, bailouts, and intellectual property regimes. The state does not oppose capital — it constitutes and reproduces it. Free markets discipline workers; the state protects capital.",
      relates:"The hidden unity of market and state power" },

    // ── II. Fractional Reserve Banking ────────────────
    { id:"credit_money",       type:"thesis",     color:"#3b9eff", label:"Credit\nMoney",          rx:.28, ry:.13, cluster:"II. Fractional Reserve Banking",
      desc:"Commercial banks create money as interest-bearing debt — not by lending deposits, but by issuing new credit. Over 97% of money in circulation is created this way. Money is not a neutral medium of exchange; it is a claim on future labour, with interest.",
      relates:"The private creation of the social medium of exchange" },
    { id:"financialisation",   type:"antithesis", color:"#ff6b35", label:"Financiali-\nsation",    rx:.40, ry:.13, cluster:"II. Fractional Reserve Banking",
      desc:"As productive profit rates fall, capital floods into financial instruments: derivatives, asset speculation, leveraged buyouts. The FIRE sector (Finance, Insurance, Real Estate) comes to dominate GDP. The economy produces financial claims, not things.",
      relates:"Production displaced by speculation" },
    { id:"quantitative_easing",type:"synthesis",  color:"#18c97c", label:"Quantitative\nEasing",   rx:.34, ry:.30, cluster:"II. Fractional Reserve Banking",
      desc:"After 2008, central banks created trillions to recapitalise insolvent banks and inflate asset prices. QE transferred wealth upward — those who owned assets got richer; wages stagnated. The synthesis: socialise debt, privatise assets. Then repeat.",
      relates:"State rescues finance — inequality deepens" },

    // ── III. Petrodollar ───────────────────────────────
    { id:"dollar_hegemony",    type:"thesis",     color:"#3b9eff", label:"Dollar\nHegemony",       rx:.47, ry:.13, cluster:"III. The Petrodollar System",
      desc:"Since the 1973 Nixon-Saudi deal, oil is priced globally in dollars. Every nation must accumulate dollar reserves to buy energy. The US extracts an exorbitant privilege — printing the world reserve currency allows it to run permanent deficits and project power.",
      relates:"The monetary foundation of US imperial power" },
    { id:"resource_nationalism",type:"antithesis",color:"#ff6b35", label:"Resource\nNationalism",  rx:.59, ry:.13, cluster:"III. The Petrodollar System",
      desc:"Oil-producing nations assert sovereignty over their own resources: OPEC embargoes, Venezuelan nationalisation, Iranian revolution, Libyan independence. Each assertion of resource sovereignty triggers sanctions, coups, or regime change to defend dollar primacy.",
      relates:"Sovereignty as negation of dollar dependence" },
    { id:"dedollarisation",    type:"synthesis",  color:"#18c97c", label:"De-\ndollarisation",     rx:.53, ry:.30, cluster:"III. The Petrodollar System",
      desc:"Russia-China energy trade in yuan and roubles, BRICS payment systems, Saudi Arabia considering yuan pricing for oil. Sanctions weaponising the dollar have accelerated the search for alternatives. The petrodollar system faces its deepest structural challenge since 1973.",
      relates:"The dollar system generates its own replacement" },

    // ── IV. Liberal World Order ────────────────────────
    { id:"liberal_world_order",  type:"thesis",     color:"#3b9eff", label:"Liberal\nWorld Order",     rx:.67, ry:.13, cluster:"IV. Hegemony & Global South",
      desc:"The US-led institutional architecture: IMF, World Bank, WTO, NATO, SWIFT. The rules-based international order presents Western geopolitical interests as universal values — democracy, free trade, human rights — enforced selectively by the powerful.",
      relates:"Western interests universalised as global norms" },
    { id:"structural_adjustment",type:"antithesis", color:"#ff6b35", label:"Structural\nAdjustment",    rx:.79, ry:.13, cluster:"IV. Hegemony & Global South",
      desc:"IMF and World Bank loans conditioned on privatisation, austerity, deregulation and trade liberalisation — imposed on indebted Global South nations. Debt replaces the colonial administrator. Wealth flows from periphery to core through voluntary market mechanisms.",
      relates:"Debt as the new colonial chain" },
    { id:"multipolarity",        type:"synthesis",  color:"#18c97c", label:"Multi-\npolarity",          rx:.73, ry:.30, cluster:"IV. Hegemony & Global South",
      desc:"BRICS+, the Shanghai Cooperation Organisation, African Union asserting sovereignty. China's Belt and Road offers infrastructure without IMF conditionality. The rules-based order is challenged by those who never made the rules and bear their costs.",
      relates:"The Global South builds its own institutions" },

    // ── V. Labour ──────────────────────────────────────
    { id:"keynesian_settlement",type:"thesis",     color:"#3b9eff", label:"Keynesian\nSettlement",  rx:.06, ry:.54, cluster:"V. Labour & Neoliberalism",
      desc:"The post-war class compromise: full employment, welfare state, social democratic parties, powerful trade unions. Capital accepted redistribution in exchange for political stability and consumer demand. A historically exceptional period — now systematically dismantled.",
      relates:"The moment capital made concessions to labour" },
    { id:"neoliberal_assault",  type:"antithesis", color:"#ff6b35", label:"Neoliberal\nAssault",     rx:.17, ry:.62, cluster:"V. Labour & Neoliberalism",
      desc:"Thatcher, Reagan, Pinochet (via coup): union-busting, privatisation, deregulation, outsourcing, the reserve army of the unemployed deployed as discipline. The working class atomised, wages decoupled from productivity. A class war waged from above.",
      relates:"Capital takes back the concessions of 1945" },
    { id:"precariat",           type:"synthesis",  color:"#18c97c", label:"The\nPrecariat",          rx:.115,ry:.78, cluster:"V. Labour & Neoliberalism",
      desc:"Zero-hours contracts, gig economy, platform capitalism, portfolio careers. Workers stripped of security, benefits and collective power — yet more educated, connected and globally aware than any previous generation. A class in formation whose contradictions are yet to explode.",
      relates:"The new working class — atomised but connected" },

    // ── VI. Climate ────────────────────────────────────
    { id:"fossil_capital",       type:"thesis",     color:"#3b9eff", label:"Fossil\nCapital",          rx:.84, ry:.42, cluster:"VI. Climate & Capital",
      desc:"Modern capitalism is built on cheap fossil energy. Coal, oil and gas underpin every commodity chain, logistics network and food system. Petrostates and energy corporations hold immense political power. Decarbonisation threatens the entire structure of accumulation.",
      relates:"The energy foundation of capitalist production" },
    { id:"ecological_breakdown", type:"antithesis", color:"#ff6b35", label:"Ecological\nBreakdown",    rx:.93, ry:.50, cluster:"VI. Climate & Capital",
      desc:"Climate crisis, biodiversity collapse, ocean acidification, freshwater depletion. The material limits of infinite growth on a finite planet. Capitalism produces its own conditions of impossibility — the contradiction between endless accumulation and a bounded ecosphere.",
      relates:"Nature as the ultimate limit of capital" },
    { id:"green_capitalism",     type:"synthesis",  color:"#18c97c", label:"Green\nCapitalism",        rx:.885,ry:.60, cluster:"VI. Climate & Capital",
      desc:"Carbon markets, ESG ratings, net-zero pledges, green bonds, carbon capture promises. Capital attempts to commodify the crisis it created — a new round of enclosure and accumulation masquerading as solution. The negation of the negation remains to be achieved.",
      relates:"Commodifying the crisis without resolving it" },

    // ── VII. Surveillance ──────────────────────────────
    { id:"open_information",       type:"thesis",     color:"#3b9eff", label:"Open\nInformation",        rx:.30, ry:.60, cluster:"VII. Surveillance & Control",
      desc:"The early internet as commons: free information, decentralised networks, democratic potential. Wikipedia, open-source software, the dream of knowledge as public good. An unrealised utopia that Capital immediately moved to enclose.",
      relates:"The internet as commons — before enclosure" },
    { id:"surveillance_capitalism",type:"antithesis", color:"#ff6b35", label:"Surveillance\nCapitalism",  rx:.44, ry:.68, cluster:"VII. Surveillance & Control",
      desc:"Google, Meta, Amazon: human behaviour is the raw material, prediction and modification of behaviour is the product, sold to advertisers and states. Attention extracted, privacy abolished, the user is the commodity. The commons enclosed into a profit machine.",
      relates:"Behaviour as raw material for capital" },
    { id:"digital_enclosure",      type:"synthesis",  color:"#18c97c", label:"Digital\nEnclosure",        rx:.37, ry:.83, cluster:"VII. Surveillance & Control",
      desc:"Platform monopolies, algorithmic censorship, AI surveillance systems, social credit infrastructure. States and corporations converge in the control of information flows. The dream of the open internet becomes the most comprehensive apparatus of social control ever built.",
      relates:"The internet becomes infrastructure of domination" },

    // ── VIII. Extraction ───────────────────────────────
    { id:"foreign_investment",   type:"thesis",     color:"#3b9eff", label:"Foreign\nInvestment",      rx:.62, ry:.58, cluster:"VIII. Extraction & Neo-colonialism",
      desc:"Capital flows to resource-rich nations — mining, oil, cash crops, cheap labour. Development discourse promises prosperity through integration into the global market. Foreign direct investment presented as benevolent modernisation and technology transfer.",
      relates:"Capital enters — on its own terms" },
    { id:"neo_colonialism",      type:"antithesis", color:"#ff6b35", label:"Neo-\ncolonialism",         rx:.76, ry:.66, cluster:"VIII. Extraction & Neo-colonialism",
      desc:"Profits extracted, not reinvested. Infrastructure serves export corridors, not domestic development. Comprador elites capture resource rents. The resource curse — richest lands, poorest people. Structural dependency reproduced through voluntary market participation.",
      relates:"The resource curse as structural, not accidental" },
    { id:"sovereignty_movements",type:"synthesis",  color:"#18c97c", label:"Sovereignty\nMovements",    rx:.69, ry:.85, cluster:"VIII. Extraction & Neo-colonialism",
      desc:"Nationalisation, expulsion of foreign corporations, land reform, reparations demands, commodity cartels. From Lumumba to Morales, Sankara to Chavez — resource sovereignty as anti-imperialist practice. Each movement generates counter-revolution; each martyrdom generates successors.",
      relates:"Resource sovereignty as anti-imperialist negation" }
  ],

  edges: [
    ["free_market","market_failure"], ["market_failure","state_corporate_nexus"], ["state_corporate_nexus","free_market"],
    ["credit_money","financialisation"], ["financialisation","quantitative_easing"], ["quantitative_easing","financialisation"],
    ["dollar_hegemony","resource_nationalism"], ["resource_nationalism","dedollarisation"], ["dedollarisation","multipolarity"],
    ["liberal_world_order","structural_adjustment"], ["structural_adjustment","multipolarity"],
    ["keynesian_settlement","neoliberal_assault"], ["neoliberal_assault","precariat"],
    ["fossil_capital","ecological_breakdown"], ["ecological_breakdown","green_capitalism"],
    ["open_information","surveillance_capitalism"], ["surveillance_capitalism","digital_enclosure"],
    ["foreign_investment","neo_colonialism"], ["neo_colonialism","sovereignty_movements"],
    ["free_market","neoliberal_assault"],
    ["state_corporate_nexus","quantitative_easing"],
    ["fossil_capital","dollar_hegemony"],
    ["dollar_hegemony","structural_adjustment"],
    ["structural_adjustment","neo_colonialism"],
    ["resource_nationalism","dedollarisation"],
    ["sovereignty_movements","multipolarity"],
    ["surveillance_capitalism","state_corporate_nexus"],
    ["neoliberal_assault","surveillance_capitalism"],
    ["neo_colonialism","ecological_breakdown"],
    ["market_failure","ecological_breakdown"],
    ["financialisation","fossil_capital"],
    ["precariat","open_information"],
    ["digital_enclosure","sovereignty_movements"],
    ["green_capitalism","financialisation"]
  ]
};

// ══════════════════════════════════════════════════════════
//  III. THE BRIDGE
//  How classical categories generate contemporary crises
//  Three columns: Classical Roots | Mechanisms | Modern Expressions
// ══════════════════════════════════════════════════════════
DATA.bridge = {
  label: "The Bridge",
  desc:  "The classical Marxist categories do not merely describe the past — they generate the present. Each mechanism in the centre column is the historical transmission belt converting 19th-century contradictions into 21st-century crises.",
  accentColor: '#c66aff',
  thesisColor: '#c66aff',

  clusters: [
    { label: "Classical Foundations",     x: .10, y: .05 },
    { label: "Historical Mechanisms",     x: .47, y: .05 },
    { label: "Contemporary Expressions",  x: .83, y: .05 }
  ],

  nodes: [
    // ── LEFT: Classical Roots ──────────────────────────
    { id:"b_surplus_value",       type:"thesis",     color:"#f5a623", label:"Surplus\nValue",          rx:.07, ry:.15, cluster:"Classical Foundations",
      desc:"Labour produces more value than it costs to reproduce. This unpaid surplus, appropriated by capital, is the root of profit. As surplus accumulates, the rate of profit on total capital invested tends to fall — generating the crises that drive financialisation and imperialism.",
      relates:"Root source — the extraction of unpaid labour" },
    { id:"b_alienated_labour",    type:"antithesis", color:"#ff6b35", label:"Alienated\nLabour",        rx:.07, ry:.28, cluster:"Classical Foundations",
      desc:"The worker is estranged from the product of labour, from the act of production, from fellow workers, and from their own species-being. This estrangement — intrinsic to wage labour — becomes the raw material for a new form of enclosure: the commodification of attention itself.",
      relates:"The estrangement that surveillance capitalism harvests" },
    { id:"b_false_consciousness", type:"synthesis",  color:"#18c97c", label:"False\nConsciousness",     rx:.07, ry:.41, cluster:"Classical Foundations",
      desc:"The ideas of the ruling class become the ruling ideas. Workers understand their exploitation through ideological categories that serve their exploiters. In the neoliberal era, this takes the form of market subjectivity — understanding oneself as a competitive individual, not a member of a class.",
      relates:"The ideological basis of market naturalism" },
    { id:"b_imperialism",         type:"antithesis", color:"#ff6b35", label:"Imperialism",               rx:.07, ry:.54, cluster:"Classical Foundations",
      desc:"Monopoly capital exports itself in search of higher profit rates. The world is divided among great powers. Lenin's analysis of imperialism as the highest stage of capitalism describes the structural logic that evolved into the Bretton Woods system, the petrodollar, and structural adjustment.",
      relates:"Imperial logic that generates structural dependency" },
    { id:"b_class_struggle",      type:"antithesis", color:"#ff6b35", label:"Class\nStruggle",           rx:.07, ry:.67, cluster:"Classical Foundations",
      desc:"The material conflict between labour and capital is a permanent structural feature of capitalism, not an anomaly. The post-war welfare state was a temporary truce, won by organised labour. Its dismantling — from Thatcher to gig economy platform capitalism — is the resumption of the permanent war.",
      relates:"The permanent conflict whose suppression creates the precariat" },
    { id:"b_metabolic_rift",      type:"antithesis", color:"#ff6b35", label:"Metabolic\nRift",            rx:.07, ry:.80, cluster:"Classical Foundations",
      desc:"Marx observed that capitalist agriculture breaks the metabolic cycle between humans and nature — nutrients extracted from the soil and shipped to cities are never returned. This insight — the metabolic rift — anticipates the ecological crisis of fossil capitalism: the systematic disruption of planetary systems.",
      relates:"The ecological contradiction at the heart of production" },

    // ── CENTRE: Historical Mechanisms ─────────────────
    { id:"m_trpf",           type:"thesis", color:"#c66aff", label:"Tendency:\nProfit to Fall",  rx:.40, ry:.15, cluster:"Historical Mechanisms",
      desc:"As capital accumulates, investment in machinery (constant capital) rises relative to living labour (variable capital) — the only source of surplus value. The rate of profit on total capital therefore tends to fall over time. This is why competitive capitalism cannot remain competitive: it mutates.",
      relates:"Classical → Financialisation: falling profits drive speculation" },
    { id:"m_commodity_fetishism", type:"thesis", color:"#c66aff", label:"Commodity\nFetishism",  rx:.40, ry:.28, cluster:"Historical Mechanisms",
      desc:"Social relations between people appear as relations between things — commodities seem to have value in themselves, independent of the human labour that created them. In late capitalism, this fetishism is inverted: the personal becomes the commodity, as platform surveillance harvests intimacy for profit.",
      relates:"Classical → Surveillance: intimacy becomes a commodity" },
    { id:"m_ideological_apparatus",type:"thesis",color:"#c66aff", label:"Ideological\nApparatus",rx:.40, ry:.41, cluster:"Historical Mechanisms",
      desc:"Althusser's extension of Marx: the state reproduces capitalist relations not only by force (Repressive State Apparatus) but through ideology embedded in schools, churches, media, legal systems (Ideological State Apparatus). Neoliberalism colonised these institutions to produce market-subject citizens.",
      relates:"Classical → Free Market Ideology: ISA naturalises the market" },
    { id:"m_unequal_exchange",    type:"thesis", color:"#c66aff", label:"Unequal\nExchange",     rx:.40, ry:.54, cluster:"Historical Mechanisms",
      desc:"Arghiri Emmanuel's theory: trade between high-wage and low-wage countries systematically transfers value from periphery to core, even at equal prices. The mechanism connecting Lenin's imperialism to contemporary neo-colonialism — the structural impoverishment of the Global South through market exchange itself.",
      relates:"Classical → Neo-colonialism: trade transfers value upward" },
    { id:"m_labour_flexibilisation",type:"thesis",color:"#c66aff", label:"Labour\nFlexibilisation",rx:.40,ry:.67, cluster:"Historical Mechanisms",
      desc:"The deliberate political dismantling of standard employment relationships through legal changes, union suppression, and ideological shifts. Not a spontaneous market outcome, but a class project: Thatcher's Employment Acts, Reagan's breaking of PATCO, zero-hours contracts as policy choices.",
      relates:"Classical → Precariat: deliberate decomposition of the working class" },
    { id:"m_carbon_capitalism",   type:"thesis", color:"#c66aff", label:"Carbon\nCapitalism",    rx:.40, ry:.80, cluster:"Historical Mechanisms",
      desc:"The political economy of fossil fuel dependency: energy companies funding climate denial, capturing regulatory agencies, lobbying against renewable transitions. The metabolic rift does not produce ecological crisis automatically — it does so through specific class interests defending specific profit streams.",
      relates:"Classical → Ecological Breakdown: fossil interests block the transition" },

    // ── RIGHT: Contemporary Expressions ───────────────
    { id:"r_financialisation",     type:"antithesis", color:"#ff6b35", label:"Financiali-\nsation",        rx:.82, ry:.15, cluster:"Contemporary Expressions",
      desc:"The dominance of financial over productive capital: derivatives, asset bubbles, leveraged buyouts, FIRE sector expansion. A structural response to falling profit rates in production, financialisation does not resolve the underlying crisis — it defers and amplifies it, generating the periodic crashes that socialise losses.",
      relates:"The contemporary form of the profit rate crisis" },
    { id:"r_surveillance_cap",     type:"antithesis", color:"#ff6b35", label:"Surveillance\nCapitalism",    rx:.82, ry:.28, cluster:"Contemporary Expressions",
      desc:"The economic logic of Google, Meta, Amazon: behavioural data extracted at scale, fed into prediction products sold to advertisers and states. A new accumulation logic built on the commodification of attention, intimacy, and prediction — the privatisation of human experience as a business model.",
      relates:"The commodification of human behaviour and attention" },
    { id:"r_free_market_ideology", type:"thesis",     color:"#3b9eff", label:"Free Market\nIdeology",       rx:.82, ry:.41, cluster:"Contemporary Expressions",
      desc:"The dominant political-economic ideology of the last fifty years: TINA (There Is No Alternative), market efficiency doctrine, trickle-down economics. Not a neutral description of economic reality, but the ideological output of the ideological apparatus — naturalising the rule of capital as the rule of reason.",
      relates:"The naturalisation of capitalist social relations" },
    { id:"r_neo_colonialism",      type:"antithesis", color:"#ff6b35", label:"Neo-\ncolonialism",            rx:.82, ry:.54, cluster:"Contemporary Expressions",
      desc:"The perpetuation of colonial extraction through formal independence: debt dependency, structural adjustment, transfer pricing, trade rules favouring the core. The richest lands on earth — the DRC, Nigeria, Bolivia, Venezuela — are among the poorest countries, their wealth systematically transferred to the metropolis.",
      relates:"Structural dependency after formal decolonisation" },
    { id:"r_precariat",            type:"antithesis", color:"#ff6b35", label:"The\nPrecariat",               rx:.82, ry:.67, cluster:"Contemporary Expressions",
      desc:"The new dangerous class, as Guy Standing calls it: globally dispersed, lacking labour security, in chronic anxiety. Not the industrial proletariat, but its successor. The precariat has not yet found its political voice — but its conditions of existence generate the contradictions that will produce one.",
      relates:"The working class reconstituted as precarity" },
    { id:"r_ecological_breakdown", type:"antithesis", color:"#ff6b35", label:"Ecological\nBreakdown",        rx:.82, ry:.80, cluster:"Contemporary Expressions",
      desc:"Climate crisis, biodiversity collapse, ocean acidification — the accumulated ecological debt of 250 years of fossil capitalism. Not an external shock to the economic system, but its internal product: the metabolic rift finally reaching planetary scale. Capital cannot solve a crisis it is constitutively compelled to create.",
      relates:"The metabolic rift at planetary scale" }
  ],

  edges: [
    // Primary left→centre→right chains
    ["b_surplus_value",       "m_trpf"],               ["m_trpf",               "r_financialisation"],
    ["b_alienated_labour",    "m_commodity_fetishism"], ["m_commodity_fetishism","r_surveillance_cap"],
    ["b_false_consciousness", "m_ideological_apparatus"],["m_ideological_apparatus","r_free_market_ideology"],
    ["b_imperialism",         "m_unequal_exchange"],    ["m_unequal_exchange",   "r_neo_colonialism"],
    ["b_class_struggle",      "m_labour_flexibilisation"],["m_labour_flexibilisation","r_precariat"],
    ["b_metabolic_rift",      "m_carbon_capitalism"],   ["m_carbon_capitalism",  "r_ecological_breakdown"],

    // Cross-connections within classical column
    ["b_surplus_value",       "b_metabolic_rift"],      // extraction drives ecological crisis
    ["b_imperialism",         "b_metabolic_rift"],      // imperialism extracts resources
    ["b_class_struggle",      "b_false_consciousness"], // struggle ruptures ideology (loop)

    // Cross-connections mechanism→mechanism
    ["m_trpf",                "m_unequal_exchange"],    // falling profits drive imperial extraction
    ["m_ideological_apparatus","m_labour_flexibilisation"], // ideology enables anti-labour law

    // Cross-connections right column
    ["r_financialisation",    "r_neo_colonialism"],     // finance enforces dependency
    ["r_neo_colonialism",     "r_ecological_breakdown"],// extraction damages periphery ecology
    ["r_surveillance_cap",    "r_free_market_ideology"],// surveillance reproduces ideology
    ["r_precariat",           "r_surveillance_cap"]     // atomised workers tracked by platform capital
  ]
};

// ══════════════════════════════════════════════════════════
//  IV. ROCHDALE & GREATER MANCHESTER
//  How global contradictions land locally —
//  from the Pioneers to Atom Valley
// ══════════════════════════════════════════════════════════
DATA.rochdale = {
  label: "Rochdale & Greater Manchester",
  desc:  "The global contradictions of capital land here: in the ruins of the mills, the College Bank flats, the Co-op Pioneers' Toad Lane, the Atom Valley promise, and the grassroots movements building something else.",
  accentColor: '#c8392a',
  thesisColor: '#c8392a',

  clusters: [
    { label: "I. The Co-operative Movement",     x: .10,  y: .05 },
    { label: "II. The Mill Economy",              x: .34,  y: .05 },
    { label: "III. Housing & Austerity",          x: .60,  y: .05 },
    { label: "IV. Atom Valley & Capital",         x: .84,  y: .05 },
    { label: "V. Political Representation",       x: .28,  y: .54 },
    { label: "VI. River, Land & Environment",     x: .72,  y: .54 }
  ],

  nodes: [

    // ── I. The Co-operative Movement ─────────────────────
    {
      id: "pioneers", type: "thesis", color: "#c8392a",
      label: "Rochdale\nPioneers",
      rx: .06, ry: .18, cluster: "I. The Co-operative Movement",
      desc: "In 1844, twenty-eight flannel weavers opened a shop on Toad Lane with 28 shillings of capital. The Rochdale Equitable Pioneers Society invented the principles that still define the global co-operative movement: democratic governance, open membership, surplus returned to members. Born from the hunger of the hungry forties, it was workers solving their own dispossession through collective ownership.",
      relates: "The original synthesis — workers owning their own supply"
    },
    {
      id: "supermarket_enclosure", type: "antithesis", color: "#e8304a",
      label: "Supermarket\nEnclosure",
      rx: .17, ry: .18, cluster: "I. The Co-operative Movement",
      desc: "Tesco, Asda, Aldi and Lidl use scale, supply chain power and loss-leading to undercut local mutual traders. The Co-op Group itself demutualised in spirit if not in law — the 2013 banking crisis exposed a board disconnected from members, a business model indistinguishable from its competitors. Corporate retail is not just competition; it is the enclosure of mutual space.",
      relates: "Capital recaptures the commons of mutual trade"
    },
    {
      id: "community_wealth", type: "synthesis", color: "#18c97c",
      label: "Community\nWealth Building",
      rx: .115, ry: .34, cluster: "I. The Co-operative Movement",
      desc: "The Preston Model — inspired by Rochdale's own tradition — shows anchor institutions (council, university, hospital) redirecting procurement to local co-operatives and mutuals. Credit unions, community land trusts, worker co-ops, social enterprises. The Pioneers' logic re-emerging in new forms: keep value circulating locally, democratise ownership, rebuild the commons.",
      relates: "The Pioneers' logic returns — ownership matters"
    },

    // ── II. The Mill Economy ──────────────────────────────
    {
      id: "textile_mills", type: "thesis", color: "#c8392a",
      label: "Textile\nProduction",
      rx: .28, ry: .18, cluster: "II. The Mill Economy",
      desc: "Rochdale was the cotton and flannel capital of the world. At its peak, the town and surrounding valleys contained hundreds of mills employing tens of thousands. The River Roch powered the wheels; the canal carried the cloth. This was the thesis of industrial capitalism in the North — concentrated, brutal, productive, and the material basis for both immense wealth and working-class organisation.",
      relates: "The industrial thesis — labour concentrated and organised"
    },
    {
      id: "deindustrialisation", type: "antithesis", color: "#e8304a",
      label: "Deindustri-\nalisation",
      rx: .40, ry: .18, cluster: "II. The Mill Economy",
      desc: "The 1970s and 1980s: cheap imports from newly industrialising countries, high interest rates, the deliberate use of unemployment as a policy instrument under Thatcher. Mill after mill closed. Rochdale lost the economic base that had sustained it for 150 years. Not a natural market outcome but a political choice — the destruction of organised industrial labour as a class force.",
      relates: "Thatcher's class war comes to the mill towns"
    },
    {
      id: "warehouse_precariat", type: "synthesis", color: "#18c97c",
      label: "Warehouse\nPrecariat",
      rx: .34, ry: .34, cluster: "II. The Mill Economy",
      desc: "The same bodies that once worked the looms now pick orders in Amazon fulfilment centres and Sports Direct warehouses on Kingsway Business Park. The jobs returned — but without unions, without security, without the collective power that generations of mill workers built. The synthesis of deindustrialisation is not prosperity but precarity: the working class reconstituted on worse terms.",
      relates: "Same class, same town — worse conditions"
    },

    // ── III. Housing & Austerity ──────────────────────────
    {
      id: "social_housing", type: "thesis", color: "#c8392a",
      label: "Post-War\nSocial Housing",
      rx: .54, ry: .18, cluster: "III. Housing & Austerity",
      desc: "College Bank and the Seven Sisters — the brutalist tower blocks above the town centre — were built with genuine ambition: decent homes for working people, with lifts, heating, indoor bathrooms. The post-war settlement extended to housing: the state would provide what the market never had. At their best, these estates were communities, not warehouses for the poor.",
      relates: "Public provision as the post-war settlement"
    },
    {
      id: "managed_decline", type: "antithesis", color: "#e8304a",
      label: "Managed\nDecline",
      rx: .66, ry: .18, cluster: "III. Housing & Austerity",
      desc: "Austerity slashed housing maintenance budgets; Right to Buy removed the best stock; stock transfer pushed debt onto housing associations with no power to borrow. College Bank fell into disrepair not because brutalism failed but because investment was withdrawn. The Seven Sisters — once homes — became symbols of managed decline: allowed to decay until demolition could be presented as the only option.",
      relates: "Deliberate disinvestment as a policy choice"
    },
    {
      id: "mdc_regeneration", type: "synthesis", color: "#18c97c",
      label: "MDC\nRegeneration",
      rx: .60, ry: .34, cluster: "III. Housing & Austerity",
      desc: "The Rochdale Mayoral Development Corporation promises transformation: new homes, investment, regeneration. But who for? MDC powers bypass local democratic planning. New housing is predominantly market rate. The communities that endured managed decline ask whether regeneration means investment in them, or displacement of them. The synthesis of austerity is not renewal — it is the enclosure of the decayed commons.",
      relates: "Regeneration — for whom, on whose terms?"
    },

    // ── IV. Atom Valley & Capital ─────────────────────────
    {
      id: "enterprise_zone", type: "thesis", color: "#c8392a",
      label: "Enterprise\nZone Promise",
      rx: .78, ry:.18, cluster: "IV. Atom Valley & Capital",
      desc: "Kingsway Business Park, Junction 19 of the M62: enterprise zone designation, tax incentives, infrastructure investment. The promise of post-industrial regeneration through attracting capital. Jobs would come — logistics, manufacturing, technology. The state clears, services and subsidises the land; private capital takes the profit. The thesis of supply-side regional policy.",
      relates: "Public investment, private capture of value"
    },
    {
      id: "atom_valley", type: "antithesis", color: "#e8304a",
      label: "Atom Valley\nMDC",
      rx: .90, ry: .18, cluster: "IV. Atom Valley & Capital",
      desc: "The Atom Valley Mayoral Development Corporation spans Rochdale, Bury and Oldham: 900 hectares, anchor institutions including Royce (materials science), the planned AMRC North West, billions in projected investment. Named after the atom and the valley — physics meets geography. But MDC governance concentrates power in the mayoralty, reducing local democratic input. Who captures the value created by public science investment?",
      relates: "Public science, private benefit — unless otherwise organised"
    },
    {
      id: "knowledge_commons", type: "synthesis", color: "#18c97c",
      label: "Knowledge\nCommons",
      rx: .84, ry: .34, cluster: "IV. Atom Valley & Capital",
      desc: "The contradiction of Atom Valley: public universities, publicly funded research infrastructure, public land — all potentially enclosed for private profit. The synthesis is not guaranteed. Community wealth building, anchor institution procurement, co-operative spinouts, open-access research — these are the forms through which the knowledge economy could be democratised rather than enclosed. The Pioneers asked the same question about flannel in 1844.",
      relates: "Public knowledge as commons — or as enclosure?"
    },

    // ── V. Political Representation ───────────────────────
    {
      id: "labour_heartland", type: "thesis", color: "#c8392a",
      label: "Labour\nHeartland",
      rx: .18, ry: .62, cluster: "V. Political Representation",
      desc: "Rochdale returned Labour MPs for most of the 20th century. The trade union movement, the Co-op, the nonconformist chapel — a dense institutional culture of working-class politics. Cyril Smith before his crimes were exposed; the tradition of radical liberalism and labourism intertwined. A political identity rooted in the material experience of mill work, mutual aid and collective organisation.",
      relates: "The political expression of industrial working-class organisation"
    },
    {
      id: "political_crisis", type: "antithesis", color: "#e8304a",
      label: "Political\nAbandonment",
      rx: .34, ry: .70, cluster: "V. Political Representation",
      desc: "The Rochdale grooming gang scandal and its cover-up by authorities — a catastrophic institutional failure. Brexit exposing a town divided by the very inequalities Labour failed to address. George Galloway winning the 2024 by-election on Gaza — a protest vote against a Labour Party seen as indistinguishable from its opponents. The material base of Labour's support dismantled; the political superstructure collapsing after it.",
      relates: "Deindustrialisation destroys Labour's material base"
    },
    {
      id: "grassroots_organising", type: "synthesis", color: "#18c97c",
      label: "Grassroots\nOrganising",
      rx: .24, ry: .84, cluster: "V. Political Representation",
      desc: "Tenants associations resisting demolition. The Rochdale Boroughwide Housing scrutiny campaigns. Food banks as mutual aid networks — and the political consciousness they generate. Community groups documenting institutional failures. The Wardle and Milnrow community organisations. Trade unions rebuilding in the warehouse sector. The political void left by Labour's retreat is being filled, slowly, from below.",
      relates: "Political vacuum filled from below — the Pioneers' method"
    },

    // ── VI. River, Land & Environment ─────────────────────
    {
      id: "industrial_waterways", type: "thesis", color: "#c8392a",
      label: "Industrial\nWaterways",
      rx: .62, ry: .62, cluster: "VI. River, Land & Environment",
      desc: "The Rochdale Canal — the first trans-Pennine waterway, opened 1804 — and the River Roch were the arteries of the industrial economy. The canal carried coal, cotton, stone. The river powered the mills. The landscape of the Calder and Roch valleys was literally sculpted by industrial production. A material geography that embodies the thesis of industrial capitalism in the North.",
      relates: "Landscape as the material record of production"
    },
    {
      id: "contamination_flooding", type: "antithesis", color: "#e8304a",
      label: "Contamination\n& Flooding",
      rx: .78, ry: .70, cluster: "VI. River, Land & Environment",
      desc: "Centuries of industrial effluent left the River Roch biologically dead for generations. Brownfield contamination across former mill sites creates development barriers and health risks in communities that already bear the highest pollution burden. Boxing Day floods 2015 — Rochdale among the worst hit — show how climate breakdown intersects with the drainage legacy of industrial urbanisation. The ecological debt of 200 years of profit extraction.",
      relates: "The metabolic rift made local and visible"
    },
    {
      id: "environmental_justice", type: "synthesis", color: "#18c97c",
      label: "Environmental\nJustice",
      rx: .70, ry: .84, cluster: "VI. River, Land & Environment",
      desc: "The River Roch is recovering — wildlife returning, community groups monitoring water quality, the canal towpath as a contested public space. Flood defence campaigns connecting climate justice to housing justice. The Pennine landscapes as potential sites of rewilding, peatland restoration, and community-owned renewable energy. The synthesis of contamination is not guaranteed — but the movement for environmental justice in post-industrial towns is real and growing.",
      relates: "Ecological restoration as community commons"
    }

  ],

  edges: [
    // I. Co-op chain
    ["pioneers",            "supermarket_enclosure"],
    ["supermarket_enclosure","community_wealth"],
    ["community_wealth",    "pioneers"],            // circular — the Pioneers inspire the return

    // II. Mill chain
    ["textile_mills",       "deindustrialisation"],
    ["deindustrialisation", "warehouse_precariat"],

    // III. Housing chain
    ["social_housing",      "managed_decline"],
    ["managed_decline",     "mdc_regeneration"],

    // IV. Atom Valley chain
    ["enterprise_zone",     "atom_valley"],
    ["atom_valley",         "knowledge_commons"],

    // V. Political chain
    ["labour_heartland",    "political_crisis"],
    ["political_crisis",    "grassroots_organising"],

    // VI. Environment chain
    ["industrial_waterways","contamination_flooding"],
    ["contamination_flooding","environmental_justice"],

    // ── Cross-cluster wiring ──
    // Deindustrialisation destroyed Labour's base
    ["deindustrialisation", "political_crisis"],

    // Mill closure drove managed decline in housing
    ["deindustrialisation", "managed_decline"],

    // Warehouse precariat connects to grassroots organising
    ["warehouse_precariat", "grassroots_organising"],

    // MDC regeneration is the vehicle for Atom Valley capital
    ["mdc_regeneration",    "atom_valley"],

    // Co-op/community wealth as alternative to MDC enclosure
    ["community_wealth",    "knowledge_commons"],

    // Enterprise zone sits on contaminated brownfield
    ["contamination_flooding","enterprise_zone"],

    // Environmental justice feeds grassroots organising
    ["environmental_justice","grassroots_organising"],

    // Political crisis opens space for community wealth
    ["political_crisis",    "community_wealth"],

    // Supermarket enclosure parallels warehouse precariat
    ["supermarket_enclosure","warehouse_precariat"],

    // Social housing ambition connects to Co-op tradition
    ["pioneers",            "social_housing"]
  ]
};

// ══════════════════════════════════════════════════════════
//  V. CULTURE, BRASS & THE GREAT UNREST
//  Working-class culture as collective self-organisation —
//  from Mechanics' Institutes to syndicalism
// ══════════════════════════════════════════════════════════
DATA.culture = {
  label: "Culture, Brass & The Great Unrest",
  desc:  "Working-class culture is not mere entertainment — it is collective self-organisation in another register. Brass bands, Mechanics' Institutes, morris dancing, Wakes Weeks, and the Great Unrest of 1910-14 are all expressions of the same underlying force: labour refusing to be merely labour.",
  accentColor: '#d4922a',
  thesisColor: '#d4922a',

  clusters: [
    { label: "I. Mechanics' Institutes",     x: .10,  y: .05 },
    { label: "II. Brass Bands",              x: .34,  y: .05 },
    { label: "III. Folk Tradition",          x: .60,  y: .05 },
    { label: "IV. Civic Culture",            x: .84,  y: .05 },
    { label: "V. The Great Unrest",          x: .28,  y: .54 },
    { label: "VI. Wakes Weeks & Leisure",    x: .72,  y: .54 }
  ],

  nodes: [

    // ── I. Mechanics' Institutes ──────────────────────────
    {
      id: "mechanics_institutes", type: "thesis", color: "#d4922a",
      label: "Mechanics'\nInstitutes",
      rx: .06, ry: .18, cluster: "I. Mechanics' Institutes",
      desc: "From the 1820s, workers founded Mechanics' Institutes across the industrial North — Rochdale's opened in 1835, eventually becoming the museum and art gallery on The Esplanade. Working men teaching themselves mathematics, science, literature, political economy. Not waiting for permission to think. The dialectic of self-education: the ruling class wanted literate workers to read instructions; workers used literacy to read everything else.",
      relates: "Workers claiming the means of intellectual production"
    },
    {
      id: "bourgeois_capture", type: "antithesis", color: "#ff6b35",
      label: "Bourgeois\nCapture",
      rx: .17, ry: .18, cluster: "I. Mechanics' Institutes",
      desc: "Middle-class patrons who funded the institutes steadily took over their governance, sanitising curricula and removing political economy, radical history and anything that smelled of Chartism. By the 1860s many institutes had become genteel reading rooms rather than sites of working-class intellectual ferment. Culture offered with one hand; control reasserted with the other.",
      relates: "Philanthropy as the soft form of class power"
    },
    {
      id: "wea_coop_education", type: "synthesis", color: "#18c97c",
      label: "WEA &\nCo-op Education",
      rx: .115, ry: .34, cluster: "I. Mechanics' Institutes",
      desc: "The Workers' Educational Association (1903) and the Co-operative movement's own education departments reclaimed adult learning for labour. Tutorial classes in history, economics, literature — taught in trade union halls and co-op rooms. The tradition runs directly from Rochdale's Mechanics' Institute through the WEA to the university extra-mural tradition. Knowledge as a collective possession, not a credential.",
      relates: "Education returned to working-class control"
    },

    // ── II. Brass Bands ───────────────────────────────────
    {
      id: "colliery_mill_bands", type: "thesis", color: "#d4922a",
      label: "Colliery &\nMill Bands",
      rx: .28, ry: .18, cluster: "II. Brass Bands",
      desc: "The brass band movement emerged from the same communities that built the co-operative movement. Penny collections, self-organised rehearsals in chapel vestries and temperance halls, instruments pooled and shared. Bands like Besses o' th' Barn, Black Dyke, Rochdale Borough — workers making music of extraordinary collective discipline and beauty from their own labour and penny subscriptions. The thesis: culture as collective self-creation.",
      relates: "Collective labour producing collective art"
    },
    {
      id: "paternalist_sponsorship", type: "antithesis", color: "#ff6b35",
      label: "Paternalist\nSponsorship",
      rx: .40, ry: .18, cluster: "II. Brass Bands",
      desc: "Mill and pit owners discovered that sponsoring bands was good for morale, productivity and reputation. Black Dyke Mills Band, Grimethorpe Colliery, Brighouse and Rastrick — employers' names on the bass drum. The same logic as the company store: binding workers' cultural life to the employer's identity. Yet the bands developed fierce autonomous pride that frequently exceeded and outlasted their sponsors.",
      relates: "Capital attempts to own working-class culture"
    },
    {
      id: "contest_culture", type: "synthesis", color: "#18c97c",
      label: "Contest Culture\n& Independence",
      rx: .34, ry: .34, cluster: "II. Brass Bands",
      desc: "Belle Vue Manchester (from 1853) and the National Brass Band Championships gave bands a framework of excellence independent of their sponsors. The contest stage became a site of genuine working-class achievement on working-class terms — not deference, but virtuosity. Today Wardle Community Band, Rochdale Borough, and bands across the region continue this tradition: collective discipline, democratic governance, music as community identity. The synthesis lives.",
      relates: "Working-class excellence on its own terms"
    },

    // ── III. Folk Tradition & Morris Dancing ──────────────
    {
      id: "commons_culture", type: "thesis", color: "#d4922a",
      label: "Commons\nCulture",
      rx: .54, ry: .18, cluster: "III. Folk Tradition",
      desc: "Before enclosure and the factory clock, popular culture was organised around the rhythms of the agricultural year: rush-bearing, wakes, mummers, morris dancing, clog dancing. Not entertainment but communal ritual — marking the seasons, cementing bonds, producing joy collectively. The Bacup Coconut Dancers, the oldest continuously performing morris side in England, trace their roots to Cornish tin miners who settled in the Rossendale Valley near Rochdale. A direct line from pre-enclosure commons to the present.",
      relates: "Pre-industrial communal time — before the clock owned us"
    },
    {
      id: "industrial_suppression", type: "antithesis", color: "#ff6b35",
      label: "Industrial\nSuppression",
      rx: .66, ry: .18, cluster: "III. Folk Tradition",
      desc: "Factory discipline required regular time, sober workers, and the suppression of the irregular rhythms of popular culture. Saint Monday — the traditional workers' holiday — was legislated away. Wakes were shortened and policed. Methodist and evangelical movements, often allied with mill owners, pathologised popular recreations as immoral, drunken, and idle. The commons of time, like the commons of land, was enclosed.",
      relates: "Factory time disciplines the body and suppresses communal culture"
    },
    {
      id: "folk_revival", type: "synthesis", color: "#18c97c",
      label: "Folk Revival\n& Living Tradition",
      rx: .60, ry: .34, cluster: "III. Folk Tradition",
      desc: "The Bacup Coconut Dancers have danced every Easter Saturday without interruption for over a century — through two world wars, deindustrialisation, and pandemic. The folk revival of the 1960s and 70s reconnected urban workers with suppressed traditions. Morris sides, clog dancing, Rushbearing at Sowerby Bridge — not nostalgia but living practice. Culture that survived enclosure by going underground and re-emerging stronger.",
      relates: "Tradition as resistance — the commons that would not die"
    },

    // ── IV. Civic Culture & Public Space ──────────────────
    {
      id: "municipal_socialism", type: "thesis", color: "#d4922a",
      label: "Municipal\nSocialism",
      rx: .78, ry: .18, cluster: "IV. Civic Culture",
      desc: "Victorian municipal socialism — the civic gospel of Chamberlain's Birmingham, but also Rochdale, Oldham, and every mill town that built a free library, a public park, a swimming bath, a mechanics' institute, a town hall of extraordinary ambition. The idea that collective wealth, democratically controlled through the municipality, should provide the conditions for a civilised life. Public goods as a material expression of collective pride.",
      relates: "Local democracy providing what the market never would"
    },
    {
      id: "bread_and_circuses", type: "antithesis", color: "#ff6b35",
      label: "Bread &\nCircuses",
      rx: .90, ry: .18, cluster: "IV. Civic Culture",
      desc: "The Roman formula — panem et circenses — has its modern equivalents: professional football detaching working-class loyalty from class interest and attaching it to commercial franchises; reality television offering vicarious drama in place of political agency; the culture industry producing passive consumption rather than active creation. Not a conspiracy but a structural tendency: capital finds it more profitable to sell culture than to allow it to be made collectively for free.",
      relates: "Spectacle substitutes for participation"
    },
    {
      id: "cultural_commons", type: "synthesis", color: "#18c97c",
      label: "Cultural\nCommons",
      rx: .84, ry: .34, cluster: "IV. Civic Culture",
      desc: "The Rochdale Feel Good Festival, free and community-run. The civic brass band concert in the park. The community choir, the amateur dramatic society, the local history group, the community radio station. These are not remnants of a lost past but active contestations of the enclosure of culture. Every free public event, every collectively produced cultural work, is a practical argument that culture belongs to everyone — an argument made in sound and colour rather than words.",
      relates: "Culture as commons — against the culture industry"
    },

    // ── V. The Great Unrest ───────────────────────────────
    {
      id: "industrial_militancy", type: "thesis", color: "#d4922a",
      label: "Industrial\nMilitancy",
      rx: .18, ry: .62, cluster: "V. The Great Unrest",
      desc: "1910-1914: the most sustained and explosive strike wave in British history. South Wales miners, Liverpool dockers, London transport workers, Lancashire cotton weavers, Sheffield cutlers. Over 40 million working days lost in 1912 alone. Women workers in the Lancashire mills were among the most militant. The Great Unrest was not just about wages — it was a civilisational challenge to the right of capital to dispose of human labour at will.",
      relates: "Labour refusing to be merely labour"
    },
    {
      id: "state_repression", type: "antithesis", color: "#ff6b35",
      label: "State\nRepression",
      rx: .34, ry: .70, cluster: "V. The Great Unrest",
      desc: "Churchill as Home Secretary sent troops to Tonypandy in 1910 — a fact South Wales never forgot. The Liberals, who depended on Labour votes in Parliament, deployed the army against striking workers. The state revealed itself not as a neutral arbiter but as the organised power of the capitalist class. Strikers were prosecuted, unions threatened with injunctions, leaders jailed. The velvet glove came off.",
      relates: "The liberal state's class character exposed"
    },
    {
      id: "syndicalism", type: "synthesis", color: "#18c97c",
      label: "Syndicalism &\nGuild Socialism",
      rx: .24, ry: .84, cluster: "V. The Great Unrest",
      desc: "Out of the Great Unrest emerged a new idea: workers should not merely bargain over the price of their labour — they should control production itself. Syndicalism, Guild Socialism, Industrial Unionism. The Miners' Next Step (1912) proposed a single industrial union taking democratic control of the mines. A direct line runs from the Rochdale Pioneers (1844) through the Great Unrest to this conclusion: the question is not wages, it is ownership.",
      relates: "From collective bargaining to collective ownership"
    },

    // ── VI. Wakes Weeks & Collective Time ─────────────────
    {
      id: "wakes_weeks", type: "thesis", color: "#d4922a",
      label: "Wakes Weeks\n& Collective Time",
      rx: .62, ry: .62, cluster: "VI. Wakes Weeks & Leisure",
      desc: "The Wakes Week was the annual collective holiday when the entire mill town shut down together — not staggered individual holidays but a shared cessation. Rochdale Wakes, Oldham Wakes, Bury Wakes — the whole community leaving for Blackpool or Scarborough simultaneously. A residue of the pre-industrial commons transformed into industrial rhythm: collective time, even when subordinated to the factory year, retained a communal character capital could never fully colonise.",
      relates: "Collective time as survival of the commons"
    },
    {
      id: "leisure_industry", type: "antithesis", color: "#ff6b35",
      label: "Leisure\nIndustry",
      rx: .78, ry: .70, cluster: "VI. Wakes Weeks & Leisure",
      desc: "Butlin's holiday camps, package holidays, the Blackpool Pleasure Beach — capital enclosing collective leisure time as a profit opportunity. The Wakes Week persists in form but its content is captured: passive consumption replaces communal celebration. The holiday becomes the reward for labour, and the leisure industry extracts surplus value from rest itself. Even time off belongs to capital.",
      relates: "Capital colonises the time outside work"
    },
    {
      id: "festival_commons", type: "synthesis", color: "#18c97c",
      label: "Festival\nCommons",
      rx: .70, ry: .84, cluster: "VI. Wakes Weeks & Leisure",
      desc: "The brass band contest. The Rushbearing procession. The community festival in the park, free to all. The Bacup Coconut Dancers on Easter Saturday. These are not tourism products — they are the ongoing refusal to let collective time become merely a commodity. Where Wakes Week was the whole town going away together, the festival commons is the whole town staying together. The synthesis: reclaim collective time in place.",
      relates: "Collective celebration as ongoing commons"
    }

  ],

  edges: [
    // I. Self-improvement chain
    ["mechanics_institutes", "bourgeois_capture"],
    ["bourgeois_capture",    "wea_coop_education"],
    ["wea_coop_education",   "mechanics_institutes"], // circular — education renews itself

    // II. Brass chain
    ["colliery_mill_bands",    "paternalist_sponsorship"],
    ["paternalist_sponsorship","contest_culture"],

    // III. Folk chain
    ["commons_culture",       "industrial_suppression"],
    ["industrial_suppression","folk_revival"],

    // IV. Civic chain
    ["municipal_socialism",   "bread_and_circuses"],
    ["bread_and_circuses",    "cultural_commons"],

    // V. Great Unrest chain
    ["industrial_militancy",  "state_repression"],
    ["state_repression",      "syndicalism"],

    // VI. Leisure chain
    ["wakes_weeks",           "leisure_industry"],
    ["leisure_industry",      "festival_commons"],

    // ── Cross-cluster wiring ──────────────────────────────

    // WEA education fed Great Unrest consciousness
    ["wea_coop_education",    "industrial_militancy"],

    // Mechanics' Institutes → Municipal Socialism (same civic impulse)
    ["mechanics_institutes",  "municipal_socialism"],

    // Brass bands played in civic parks — culture and municipality intertwined
    ["colliery_mill_bands",   "municipal_socialism"],
    ["contest_culture",       "cultural_commons"],

    // Commons culture and Wakes share pre-industrial roots
    ["commons_culture",       "wakes_weeks"],

    // Folk revival feeds festival commons
    ["folk_revival",          "festival_commons"],

    // Syndicalism connects back to Co-op tradition (same ownership question)
    ["syndicalism",           "wea_coop_education"],

    // Bread and circuses as antithesis of Great Unrest consciousness
    ["bread_and_circuses",    "state_repression"],  // spectacle helps repress militancy

    // Industrial suppression of folk = same force as state repression
    ["industrial_suppression","state_repression"],

    // Paternalist sponsorship is the cultural form of bread & circuses
    ["paternalist_sponsorship","bread_and_circuses"],

    // Festival commons and cultural commons reinforce each other
    ["festival_commons",      "cultural_commons"],

    // Industrial militancy energises cultural commons (Great Unrest opened civic space)
    ["industrial_militancy",  "cultural_commons"]
  ]
};

// ══════════════════════════════════════════════════════════
//  VI. GENDER, REPRODUCTION & SOCIAL LABOUR
//  The invisible foundation — reproductive labour as the
//  hidden condition of all visible production
// ══════════════════════════════════════════════════════════
DATA.gender = {
  label: "Gender, Reproduction & Social Labour",
  desc:  "All capitalist production rests on a foundation of unpaid reproductive labour — bearing, raising, feeding, caring, emotionally sustaining. This labour is predominantly performed by women, systematically devalued, and structurally invisible to economic measurement. It is not a residue of tradition but an ongoing requirement of capital accumulation.",
  accentColor: '#c44dff',
  thesisColor: '#c44dff',

  clusters: [
    { label: "I. Social Reproduction Theory",  x: .10,  y: .05 },
    { label: "II. Domestic & Care Labour",      x: .34,  y: .05 },
    { label: "III. The Second Shift",           x: .60,  y: .05 },
    { label: "IV. Care Economy & Capital",      x: .84,  y: .05 },
    { label: "V. Feminist Organising",          x: .28,  y: .54 },
    { label: "VI. Body, Control & Resistance",  x: .72,  y: .54 }
  ],

  nodes: [

    // ── I. Social Reproduction Theory ────────────────────
    {
      id: "productive_labour", type: "thesis", color: "#c44dff",
      label: "Productive\nLabour",
      rx: .06, ry: .18, cluster: "I. Social Reproduction Theory",
      desc: "Capital recognises only labour that produces surplus value — wage labour in the formal economy. This is the visible, measured, remunerated half of human work. GDP, productivity statistics, economic growth — all built on this category alone. The thesis: what counts as work is what capital pays for.",
      relates: "The visible economy — built on an invisible foundation"
    },
    {
      id: "reproductive_labour", type: "antithesis", color: "#ff6b35",
      label: "Reproductive\nLabour",
      rx: .17, ry: .18, cluster: "I. Social Reproduction Theory",
      desc: "The labour that reproduces the worker: cooking, cleaning, childcare, eldercare, emotional support, community maintenance. Without it, there are no workers to sell their labour-power tomorrow. Yet capital pays nothing for it, measures nothing of it, and counts it as nothing in national accounts. Predominantly performed by women, it is the hidden subsidy to every hour of paid work.",
      relates: "The unpaid foundation of all paid labour"
    },
    {
      id: "social_reproduction_theory", type: "synthesis", color: "#18c97c",
      label: "Social\nReproduction\nTheory",
      rx: .115, ry: .36, cluster: "I. Social Reproduction Theory",
      desc: "Silvia Federici, Tithi Bhattacharya, Nancy Fraser — the feminist Marxist tradition that insists the boundary between production and reproduction is itself a political construction. Capital accumulation depends on social reproduction; the devaluation of reproductive labour is not incidental but structural. To understand exploitation fully, you must see both sides of the hidden abode.",
      relates: "Federici: the reproduction of labour-power is itself labour"
    },

    // ── II. Domestic & Care Labour ────────────────────────
    {
      id: "housewife_ideal", type: "thesis", color: "#c44dff",
      label: "The Housewife\nIdeal",
      rx: .28, ry: .18, cluster: "II. Domestic & Care Labour",
      desc: "The post-war ideal of the male breadwinner and female homemaker was not a timeless tradition but a historically specific construction of industrial capitalism — and one confined largely to the white middle class. It naturalised women's domestic labour as love, vocation, and biological destiny rather than work, making it invisible as such and therefore unremunerated.",
      relates: "Domestic labour naturalised as love — not work"
    },
    {
      id: "wages_for_housework", type: "antithesis", color: "#ff6b35",
      label: "Wages for\nHousework",
      rx: .40, ry: .18, cluster: "II. Domestic & Care Labour",
      desc: "Silvia Federici and the International Feminist Collective (1972): demand wages for housework not as a utopian goal but as a political strategy to make visible what capital has made invisible. If housework is not work, why does capital need it done? The demand exposes the theft at the heart of the family wage — and the entire architecture of unpaid female labour that sustains it.",
      relates: "Making the invisible labour visible through demand"
    },
    {
      id: "care_deficit", type: "synthesis", color: "#18c97c",
      label: "The\nCare Deficit",
      rx: .34, ry: .34, cluster: "II. Domestic & Care Labour",
      desc: "As women entered the formal workforce in the late 20th century, the domestic labour they had performed did not disappear — it was either commodified (childcare, domestic services, care homes) or simply left undone, producing a structural care deficit. The synthesis of women's liberation within capitalism: freedom to work a second job, still responsible for the first.",
      relates: "Women liberated into double exploitation"
    },

    // ── III. The Second Shift ─────────────────────────────
    {
      id: "formal_equality", type: "thesis", color: "#c44dff",
      label: "Formal\nEquality",
      rx: .54, ry: .18, cluster: "III. The Second Shift",
      desc: "Equal pay legislation, anti-discrimination law, access to education and professions — the real gains of the liberal feminist movement. Women enter the formal economy on formally equal terms. The contradiction: formal equality in the public sphere coexists with structural inequality in the private sphere. Capital grants equality in exploitation; it does not redistribute domestic labour.",
      relates: "Legal equality that leaves the second shift intact"
    },
    {
      id: "second_shift", type: "antithesis", color: "#ff6b35",
      label: "The\nSecond Shift",
      rx: .66, ry: .18, cluster: "III. The Second Shift",
      desc: "Arlie Hochschild's 1989 study: women in paid employment return home to a second unpaid shift of domestic labour. Decades of equal opportunities legislation have not fundamentally redistributed housework, childcare, or emotional labour. The gender pay gap is largely a motherhood penalty. The private sphere remains a site of surplus extraction that formal equality cannot touch.",
      relates: "The domestic sphere as the limit of liberal feminism"
    },
    {
      id: "affective_labour", type: "synthesis", color: "#18c97c",
      label: "Affective\nLabour",
      rx: .60, ry: .34, cluster: "III. The Second Shift",
      desc: "Emotional labour — managing feelings, performing care, maintaining relationships — is extracted in both the workplace (service industries, nursing, teaching) and the home. Arlie Hochschild showed flight attendants are paid to feel. In the home, the same labour is performed for free. The synthesis: emotional labour is commodified in the market, conscripted in the family, and the boundary between them is permeable.",
      relates: "Emotions as labour — commodified and conscripted simultaneously"
    },

    // ── IV. Care Economy & Capital ────────────────────────
    {
      id: "public_care", type: "thesis", color: "#c44dff",
      label: "Public\nCare\nInfrastructure",
      rx: .78, ry: .18, cluster: "IV. Care Economy & Capital",
      desc: "The post-war welfare state socialised some reproductive labour: NHS maternity care, state nurseries, free school meals, social care for the elderly. A partial decommodification of care — collective provision of what previously fell entirely to individual women. The municipal socialist tradition extended to reproduction: what the market will not provide, the collective must.",
      relates: "The welfare state as partial socialisation of reproductive labour"
    },
    {
      id: "care_austerity", type: "antithesis", color: "#ff6b35",
      label: "Austerity &\nCare Cuts",
      rx: .90, ry: .18, cluster: "IV. Care Economy & Capital",
      desc: "Austerity since 2010 has disproportionately cut care infrastructure: Sure Start centres, social care budgets, NHS services, disability benefits. These cuts do not make care disappear — they push it back into the home and onto women. Austerity is a gender issue: the state withdraws from care; women absorb the cost. A transfer of reproductive labour from the public to the private, from the visible to the invisible.",
      relates: "Austerity transfers care costs onto women"
    },
    {
      id: "care_commodification", type: "synthesis", color: "#18c97c",
      label: "Care\nCommodification",
      rx: .84, ry: .34, cluster: "IV. Care Economy & Capital",
      desc: "Where the state withdraws, the market enters: private nurseries, care home chains, agency nurses, domestic cleaning services. Care is commodified — but only for those who can afford it. Those who cannot provide it themselves or go without. The care economy reveals the limits of marketisation with particular clarity: care that is rationed by price is not care at all.",
      relates: "Care as a market — only for those who can pay"
    },

    // ── V. Feminist Organising ────────────────────────────
    {
      id: "first_wave", type: "thesis", color: "#c44dff",
      label: "First Wave\nFeminism",
      rx: .18, ry: .62, cluster: "V. Feminist Organising",
      desc: "The suffrage movement — votes for women, legal personhood, property rights. The demand for inclusion in the existing political and economic order on equal terms with men. A revolutionary demand in its time, achieving real gains. Its limit: it sought entry into a system that was itself built on the exploitation of labour, the enclosure of the commons, and empire.",
      relates: "Inclusion in the existing order — on the order's terms"
    },
    {
      id: "second_wave", type: "antithesis", color: "#ff6b35",
      label: "Second Wave\n& Beyond",
      rx: .34, ry: .70, cluster: "V. Feminist Organising",
      desc: "1960s-80s: the personal is political. Reproductive rights, domestic violence, sexual liberation, wages for housework, socialist feminism. The second wave refused the boundary between public and private — insisting that the home was a site of politics, power and exploitation. Its internal contradictions: race, class and sexuality as fault lines within the movement itself.",
      relates: "The personal is political — the private sphere as contested terrain"
    },
    {
      id: "intersectional_feminism", type: "synthesis", color: "#18c97c",
      label: "Intersectional\nFeminism",
      rx: .24, ry: .84, cluster: "V. Feminist Organising",
      desc: "Kimberle Crenshaw's intersectionality: race, class, gender, sexuality, disability — systems of oppression that cannot be understood in isolation because they are lived simultaneously. Black feminist thought from the Combahee River Collective to Angela Davis insists that the liberation of the most oppressed is the condition of everyone's liberation. Not inclusion in the existing order but transformation of it.",
      relates: "Liberation of the most oppressed as the condition of all liberation"
    },

    // ── VI. Body, Control & Resistance ───────────────────
    {
      id: "body_as_commons", type: "thesis", color: "#c44dff",
      label: "Body as\nCommons",
      rx: .62, ry: .62, cluster: "VI. Body, Control & Resistance",
      desc: "Silvia Federici's Caliban and the Witch: the witch trials of the 16th-17th centuries were not superstition but the violent dispossession of women's control over their own bodies and reproductive knowledge — the original primitive accumulation applied to reproduction. The female body as a common resource to be enclosed, regulated, and put to work for capital's need for labour-power.",
      relates: "The body as the site of the original enclosure"
    },
    {
      id: "reproductive_control", type: "antithesis", color: "#ff6b35",
      label: "Reproductive\nControl",
      rx: .78, ry: .70, cluster: "VI. Body, Control & Resistance",
      desc: "Abortion rights, contraception access, forced sterilisation of disabled and colonised women, criminalisation of miscarriage — the ongoing contest over who controls reproduction. The state and capital have a structural interest in regulating fertility: too many workers, too few, the wrong kind. Reproductive autonomy is not merely a personal freedom but a challenge to the political economy of labour supply.",
      relates: "Reproductive autonomy as a challenge to capital's labour supply"
    },
    {
      id: "reproductive_justice", type: "synthesis", color: "#18c97c",
      label: "Reproductive\nJustice",
      rx: .70, ry: .84, cluster: "VI. Body, Control & Resistance",
      desc: "The reproductive justice framework — developed by Black women in the US in the 1990s — goes beyond abortion rights to demand: the right not to have children, the right to have children, and the right to parent in safe and supportive communities. It connects reproductive autonomy to housing, healthcare, immigration status, and environmental justice — a material, intersectional, and transformative framework.",
      relates: "Beyond choice — the material conditions for reproductive autonomy"
    }

  ],

  edges: [
    // I. Social reproduction chain
    ["productive_labour",        "reproductive_labour"],
    ["reproductive_labour",      "social_reproduction_theory"],
    ["social_reproduction_theory","productive_labour"],   // loop — theory reframes production

    // II. Domestic labour chain
    ["housewife_ideal",          "wages_for_housework"],
    ["wages_for_housework",      "care_deficit"],

    // III. Second shift chain
    ["formal_equality",          "second_shift"],
    ["second_shift",             "affective_labour"],

    // IV. Care economy chain
    ["public_care",              "care_austerity"],
    ["care_austerity",           "care_commodification"],

    // V. Feminist organising chain
    ["first_wave",               "second_wave"],
    ["second_wave",              "intersectional_feminism"],

    // VI. Body chain
    ["body_as_commons",          "reproductive_control"],
    ["reproductive_control",     "reproductive_justice"],

    // ── Cross-cluster wiring ──────────────────────────────

    // Reproductive labour is the basis of social reproduction theory
    ["reproductive_labour",      "housewife_ideal"],

    // Care deficit drives care commodification
    ["care_deficit",             "care_commodification"],

    // Austerity produces the second shift (state withdraws, women absorb)
    ["care_austerity",           "second_shift"],

    // Social reproduction theory grounds intersectional feminism
    ["social_reproduction_theory","intersectional_feminism"],

    // Wages for housework connects to feminist organising
    ["wages_for_housework",      "second_wave"],

    // Affective labour connects to care commodification
    ["affective_labour",         "care_commodification"],

    // Body as commons connects to social reproduction theory
    ["body_as_commons",          "social_reproduction_theory"],

    // Reproductive justice connects to intersectional feminism
    ["reproductive_justice",     "intersectional_feminism"],

    // Formal equality is the achievement of first wave
    ["first_wave",               "formal_equality"],

    // Public care infrastructure is the achievement of second wave demands
    ["second_wave",              "public_care"]
  ]
};

// ══════════════════════════════════════════════════════════
//  VII. THE NATION MYTH, MIGRATION & EXTRACTION
//  The pure nation as ideology — and the material
//  contradictions it conceals and generates
// ══════════════════════════════════════════════════════════
DATA.nation = {
  label: "Nation, Migration & Extraction",
  desc:  "The pure nation is a myth — but a myth with material consequences. Built on invented tradition, sustained by selective amnesia about empire and migration, and deployed to divide the working class against itself. Meanwhile capital extracts wealth from the Global South, destroys the conditions for life there, generates the migration it then criminalises, and profits from the cheap labour it pretends to resist.",
  accentColor: '#2196f3',
  thesisColor: '#2196f3',

  clusters: [
    { label: "I. The Nation Myth",              x: .10,  y: .05 },
    { label: "II. Empire & Amnesia",            x: .34,  y: .05 },
    { label: "III. Migration & Capital",        x: .60,  y: .05 },
    { label: "IV. The Hostile Environment",     x: .84,  y: .05 },
    { label: "V. Extraction & Displacement",    x: .28,  y: .54 },
    { label: "VI. Solidarity & Sanctuary",      x: .72,  y: .54 }
  ],

  nodes: [

    // ── I. The Nation Myth ────────────────────────────────
    {
      id: "pure_nation", type: "thesis", color: "#2196f3",
      label: "The Pure\nNation Myth",
      rx: .06, ry: .18, cluster: "I. The Nation Myth",
      desc: "The nationalist imaginary: a homogeneous people, rooted in an immemorial past, sharing blood, soil, language and culture. Pure, coherent, self-sufficient — until contaminated by outsiders. Benedict Anderson called nations imagined communities; Hobsbawm showed their traditions are invented. The pure nation has never existed — it is always a retrospective projection, constructed to serve present political needs.",
      relates: "The nation as invented tradition — Anderson, Hobsbawm"
    },
    {
      id: "historical_hybridity", type: "antithesis", color: "#ff6b35",
      label: "Historical\nHybridity",
      rx: .17, ry: .18, cluster: "I. The Nation Myth",
      desc: "Britain is Viking, Norman, Huguenot, Jewish, Irish, Caribbean, South Asian, East African — the actual history is one of ceaseless mixture, movement and exchange. The English language is a hybrid of Anglo-Saxon, Norse, Norman French and Latin. Fish and chips is Portuguese Jewish. Chicken tikka masala is Scottish. The nation that claims purity is always the nation that has forgotten its own history.",
      relates: "Every nation is a palimpsest of migrations"
    },
    {
      id: "nationalist_movement", type: "synthesis", color: "#18c97c",
      label: "Nationalist\nMovement",
      rx: .115, ry: .34, cluster: "I. The Nation Myth",
      desc: "Nationalism is not the expression of pre-existing national identity but its construction. The nationalist movement retrospectively invents the purity it claims to restore — selecting, distorting, and suppressing history to produce a usable myth. It offers the working class an identity that cuts across class lines, redirecting resentment from capital to migrants. The synthesis of the myth is the movement that enforces it.",
      relates: "Nationalism constructs the purity it claims to restore"
    },

    // ── II. Empire & Amnesia ──────────────────────────────
    {
      id: "empire", type: "thesis", color: "#2196f3",
      label: "British\nEmpire",
      rx: .28, ry: .18, cluster: "II. Empire & Amnesia",
      desc: "At its peak, the British Empire covered a quarter of the world's land surface and governed a quarter of its population. The wealth extracted — from the slave trade, from Indian textiles, from Caribbean sugar, from African minerals — funded the Industrial Revolution, the City of London, the country houses, and the public schools that educated the ruling class. Empire was not a sideshow to British history; it was its material foundation.",
      relates: "The wealth of the metropolis built on extraction from the periphery"
    },
    {
      id: "imperial_amnesia", type: "antithesis", color: "#ff6b35",
      label: "Imperial\nAmnesia",
      rx: .40, ry: .18, cluster: "II. Empire & Amnesia",
      desc: "The empire on which the sun never set has been almost entirely erased from British public memory and school curricula. Windrush generation invited to rebuild post-war Britain, then told decades later they had no right to be here. The Mau Mau concentration camps, the Bengal famine, the Amritsar massacre — suppressed, denied, or framed as necessary civilising measures. Amnesia is not accidental; it is the condition for the myth of the pure nation.",
      relates: "Forgetting empire is the condition for the purity myth"
    },
    {
      id: "postcolonial_presence", type: "synthesis", color: "#18c97c",
      label: "Postcolonial\nPresence",
      rx: .34, ry: .34, cluster: "II. Empire & Amnesia",
      desc: "The Commonwealth migration of the 1950s-70s was the empire coming home — people from countries Britain had colonised, impoverished and culturally dominated, exercising the right of subjects to settle in the metropolis. Stuart Hall: the postcolonial presence in Britain is the return of the repressed. The migrant body in the former imperial centre is the living refutation of imperial amnesia.",
      relates: "The empire comes home — the repressed returns"
    },

    // ── III. Migration & Capital ──────────────────────────
    {
      id: "gdp_migration", type: "thesis", color: "#2196f3",
      label: "Migration &\nGDP Growth",
      rx: .54, ry: .18, cluster: "III. Migration & Capital",
      desc: "Every mainstream economic analysis confirms: migration increases GDP, fills labour shortages, funds pensions through tax contributions, provides care workers for an ageing population, and starts businesses. The OBR, the Bank of England, the Migration Advisory Committee — all agree. Capital needs migration. The contradiction: the same political forces that serve capital's interests campaign against the migration that capital requires.",
      relates: "Capital needs migration — and campaigns against it"
    },
    {
      id: "cheap_labour_reserve", type: "antithesis", color: "#ff6b35",
      label: "Cheap Labour\nReserve",
      rx: .66, ry: .18, cluster: "III. Migration & Capital",
      desc: "Migrant workers — especially undocumented workers — constitute a hyper-exploitable labour reserve: unable to assert rights without risking deportation, excluded from welfare safety nets, housed in tied accommodation by employers, subject to wage theft and unsafe conditions. The hostile environment does not stop this exploitation; it intensifies it by keeping migrants precarious. Capital benefits from the threat of deportation.",
      relates: "Precarity as a tool of labour discipline"
    },
    {
      id: "migration_contradiction", type: "synthesis", color: "#18c97c",
      label: "The Migration\nContradiction",
      rx: .60, ry: .34, cluster: "III. Migration & Capital",
      desc: "Capital needs migration for growth, uses migrant precarity for super-exploitation, funds the political movements that campaign against migration to discipline the native working class, and then uses those same movements' success to intensify migrant precarity further. The contradiction cannot be resolved within capital — only a politics that unites migrant and non-migrant workers on the basis of shared class interest can cut through it.",
      relates: "Only class unity dissolves the contradiction"
    },

    // ── IV. The Hostile Environment ───────────────────────
    {
      id: "border_ideology", type: "thesis", color: "#2196f3",
      label: "Border\nIdeology",
      rx: .78, ry: .18, cluster: "IV. The Hostile Environment",
      desc: "The ideological construction of the border as a natural, necessary and legitimate division of humanity into those who belong and those who do not. Borders as security, culture, sovereignty. In reality, the current global border regime is historically recent, maintained by enormous state violence, and serves primarily to enforce the global wage hierarchy — keeping cheap labour cheap by preventing its free movement.",
      relates: "Borders enforce the global wage hierarchy"
    },
    {
      id: "hostile_environment", type: "antithesis", color: "#ff6b35",
      label: "The Hostile\nEnvironment",
      rx: .90, ry: .18, cluster: "IV. The Hostile Environment",
      desc: "Theresa May's 2012 policy: make Britain so hostile that undocumented migrants self-deport. The result: the Windrush scandal — British citizens of 50 years deported or denied healthcare because they lacked the right paperwork. A policy that criminalises migrants produces a state apparatus that criminalises Blackness. The hostile environment does not distinguish between undocumented migrants and Black British citizens.",
      relates: "The hostile environment criminalises Blackness itself"
    },
    {
      id: "sanctuary_organising", type: "synthesis", color: "#18c97c",
      label: "Sanctuary &\nStatus for All",
      rx: .84, ry: .34, cluster: "IV. The Hostile Environment",
      desc: "Sanctuary cities, No Borders movements, Status for All campaigns, trade unions organising undocumented workers, the Stand Up to Racism coalition. The practical refusal of the hostile environment from below — communities protecting neighbours, workers demanding rights regardless of status, the argument that human dignity does not depend on a passport. The synthesis that the hostile environment cannot contain.",
      relates: "Dignity does not depend on a passport"
    },

    // ── V. Extraction & Displacement ─────────────────────
    {
      id: "resource_extraction_south", type: "thesis", color: "#2196f3",
      label: "Resource\nExtraction",
      rx: .18, ry: .62, cluster: "V. Extraction & Displacement",
      desc: "The DRC contains minerals worth an estimated $24 trillion — cobalt for our phones, coltan for our laptops, gold for our jewellery. Nigeria has vast oil wealth. Bolivia has lithium. Yet these are among the poorest countries on earth. The resource curse is not bad luck — it is the structural consequence of centuries of extraction: colonial and now neo-colonial, enforced by debt, trade rules, and occasionally military intervention.",
      relates: "The richest lands — the poorest people"
    },
    {
      id: "climate_displacement", type: "antithesis", color: "#ff6b35",
      label: "Climate\nDisplacement",
      rx: .34, ry: .70, cluster: "V. Extraction & Displacement",
      desc: "The countries that contributed least to carbon emissions suffer most from climate breakdown: Bangladesh flooding, Sahel drought, Pacific island submersion, Syrian drought preceding the civil war. Climate displacement is the metabolic rift made human — the ecological debt of 250 years of fossil capitalism is being paid by people who never incurred it. The Global North burns; the Global South moves.",
      relates: "The Global North burns — the Global South moves"
    },
    {
      id: "migration_as_response", type: "synthesis", color: "#18c97c",
      label: "Migration as\nRational Response",
      rx: .24, ry: .84, cluster: "V. Extraction & Displacement",
      desc: "Migration is not a crisis — it is a rational human response to conditions that capital has created: extraction, conflict, climate breakdown, debt. The real crisis is that the same system that destroys the conditions for life in the Global South then criminalises the movement of people responding to that destruction. To stop migration, stop extraction. To stop extraction, change the system.",
      relates: "Stop the extraction — stop the displacement"
    },

    // ── VI. Solidarity & Sanctuary ────────────────────────
    {
      id: "divide_and_rule", type: "thesis", color: "#2196f3",
      label: "Divide\n& Rule",
      rx: .62, ry: .62, cluster: "VI. Solidarity & Sanctuary",
      desc: "The oldest tool of class power: set workers against each other along lines of race, nationality, religion, gender. WEB Du Bois on the psychological wage of whiteness — white workers accepting lower material wages in exchange for the status of not being Black. Enoch Powell, the Sun's front pages, the hostile environment — anti-migrant politics consistently deployed to break working-class solidarity and redirect class anger.",
      relates: "Anti-migrant politics as class warfare from above"
    },
    {
      id: "migrant_worker_organising", type: "antithesis", color: "#ff6b35",
      label: "Migrant Worker\nOrganising",
      rx: .78, ry: .70, cluster: "VI. Solidarity & Sanctuary",
      desc: "The history of trade unionism is also a history of migrant worker militancy: the Jewish garment workers of East London, the Irish navvies who built the railways, the Caribbean bus workers of Bristol who won the right to drive their own buses in 1963. Today, cleaners in universities and hospitals — often migrant women — organising for the London Living Wage through UNISON and the IWGB. The most precarious workers building the most combative unions.",
      relates: "Migrant workers at the forefront of labour organising"
    },
    {
      id: "class_solidarity", type: "synthesis", color: "#18c97c",
      label: "Class\nSolidarity",
      rx: .70, ry: .84, cluster: "VI. Solidarity & Sanctuary",
      desc: "The International Workers of the World slogan: an injury to one is an injury to all. The practical recognition that divide and rule only works if workers accept the division — and that the alternative is a politics of class solidarity that crosses national, racial and gender lines. Not despite difference but through it: the recognition that shared exploitation is the basis for shared liberation. The synthesis capital most fears.",
      relates: "Shared exploitation as the basis for shared liberation"
    }

  ],

  edges: [
    // I. Nation myth chain
    ["pure_nation",              "historical_hybridity"],
    ["historical_hybridity",     "nationalist_movement"],
    ["nationalist_movement",     "pure_nation"],       // circular — myth feeds movement feeds myth

    // II. Empire chain
    ["empire",                   "imperial_amnesia"],
    ["imperial_amnesia",         "postcolonial_presence"],

    // III. Migration chain
    ["gdp_migration",            "cheap_labour_reserve"],
    ["cheap_labour_reserve",     "migration_contradiction"],

    // IV. Hostile environment chain
    ["border_ideology",          "hostile_environment"],
    ["hostile_environment",      "sanctuary_organising"],

    // V. Extraction chain
    ["resource_extraction_south","climate_displacement"],
    ["climate_displacement",     "migration_as_response"],

    // VI. Solidarity chain
    ["divide_and_rule",          "migrant_worker_organising"],
    ["migrant_worker_organising","class_solidarity"],

    // ── Cross-cluster wiring ──────────────────────────────

    // Empire produced the conditions for postcolonial migration
    ["empire",                   "gdp_migration"],

    // Imperial amnesia enables the pure nation myth
    ["imperial_amnesia",         "pure_nation"],

    // Nationalist movement produces hostile environment
    ["nationalist_movement",     "hostile_environment"],
    ["nationalist_movement",     "border_ideology"],

    // Resource extraction causes climate displacement
    ["resource_extraction_south","climate_displacement"],

    // Migration as rational response is criminalised by hostile environment
    ["migration_as_response",    "hostile_environment"],

    // Cheap labour reserve is the product of hostile environment
    ["hostile_environment",      "cheap_labour_reserve"],

    // Divide and rule uses nationalist movement
    ["nationalist_movement",     "divide_and_rule"],

    // Postcolonial presence feeds migrant worker organising
    ["postcolonial_presence",    "migrant_worker_organising"],

    // Class solidarity connects to migration contradiction
    ["class_solidarity",         "migration_contradiction"],

    // Sanctuary organising and class solidarity reinforce each other
    ["sanctuary_organising",     "class_solidarity"],

    // GDP migration contradicts border ideology
    ["gdp_migration",            "border_ideology"]
  ]
};

// ══════════════════════════════════════════════════════════
//  VIII. POST-INDUSTRIAL CAPITALISM
//  Service sectors, debt, low productivity and the
//  challenge of Modern Monetary Theory
// ══════════════════════════════════════════════════════════
DATA.postindustrial = {
  label: "Post-Industrial Capitalism",
  desc:  "Deindustrialisation hollowed out the productive economy and replaced it with services, debt and financialisation. National debt is weaponised to justify austerity. Personal debt disciplines workers as wages once did. Low productivity is structural, not accidental. And MMT reveals that the money was always there — the question was always political, not economic.",
  accentColor: '#00bcd4',
  thesisColor: '#00bcd4',

  clusters: [
    { label: "I. Deindustrialisation & Services",  x: .10,  y: .05 },
    { label: "II. National Debt & Austerity",       x: .34,  y: .05 },
    { label: "III. Personal Debt",                  x: .60,  y: .05 },
    { label: "IV. Low Productivity Trap",           x: .84,  y: .05 },
    { label: "V. Modern Monetary Theory",           x: .28,  y: .54 },
    { label: "VI. Post-Industrial Politics",        x: .72,  y: .54 }
  ],

  nodes: [

    // ── I. Deindustrialisation & Services ─────────────────
    {
      id: "industrial_economy", type: "thesis", color: "#00bcd4",
      label: "Industrial\nEconomy",
      rx: .06, ry: .18, cluster: "I. Deindustrialisation & Services",
      desc: "The post-war industrial economy: high-wage manufacturing jobs, strong trade unions, productivity growth tied to real production. Workers made things — steel, cars, textiles, chemicals — and the value created was broadly shared through collective bargaining. Not without exploitation, but with a material basis for working-class organisation and a clear connection between labour and social wealth.",
      relates: "The productive economy — things made, value shared"
    },
    {
      id: "service_sector", type: "antithesis", color: "#ff6b35",
      label: "The Service\nEconomy",
      rx: .17, ry: .18, cluster: "I. Deindustrialisation & Services",
      desc: "The shift from making things to serving people: retail, hospitality, care, logistics, call centres, gig platforms. Service work is harder to automate, harder to unionise, harder to measure for productivity. Pay is typically lower, conditions worse, hours less predictable. The service economy is not a natural evolution but the political consequence of deindustrialisation — what's left when manufacturing is offshored in search of cheaper labour.",
      relates: "What remains when manufacturing is offshored"
    },
    {
      id: "knowledge_economy_myth", type: "synthesis", color: "#18c97c",
      label: "Knowledge\nEconomy Myth",
      rx: .115, ry: .34, cluster: "I. Deindustrialisation & Services",
      desc: "The promise: deindustrialisation would be offset by high-skill, high-wage knowledge work — finance, tech, creative industries, higher education. The reality: a polarised hourglass economy with a thin layer of high-paid knowledge workers at the top, a gutted middle, and a vast low-wage service sector at the bottom. The knowledge economy is real for some and a broken promise for most.",
      relates: "The hourglass economy — thin top, vast bottom"
    },

    // ── II. National Debt & Austerity ─────────────────────
    {
      id: "keynesian_deficit", type: "thesis", color: "#00bcd4",
      label: "Keynesian\nDeficit Spending",
      rx: .28, ry: .18, cluster: "II. National Debt & Austerity",
      desc: "Keynes: in a recession, private demand collapses and only the state can fill the gap. Government should borrow and spend — on infrastructure, public services, employment — to stimulate the economy. The multiplier effect means a pound of public spending generates more than a pound of economic activity. Deficits in downturns, surpluses in booms. This was the economic orthodoxy from 1945 to 1979.",
      relates: "The state as spender of last resort"
    },
    {
      id: "debt_as_weapon", type: "antithesis", color: "#ff6b35",
      label: "Debt as\nPolitical Weapon",
      rx: .40, ry: .18, cluster: "II. National Debt & Austerity",
      desc: "The national debt is not like a household debt — a currency-issuing government cannot run out of its own money. Yet the household analogy is deployed politically to justify cutting public services: we must live within our means, there is no magic money tree. This is an ideological choice, not an economic necessity. The same governments that said there was no money found trillions for bank bailouts and furlough schemes.",
      relates: "No magic money tree — until there is"
    },
    {
      id: "austerity_economics", type: "synthesis", color: "#18c97c",
      label: "Austerity\nEconomics",
      rx: .34, ry: .34, cluster: "II. National Debt & Austerity",
      desc: "Austerity — cutting public spending to reduce deficits — is the synthesis of the debt weapon. The IMF, which imposed structural adjustment on the Global South for decades, eventually admitted austerity had been oversold and that fiscal multipliers were much larger than assumed. Austerity does not reduce debt — it shrinks the economy, reducing tax revenues, making the debt ratio worse. It succeeds not as economics but as class politics: dismantling public goods, disciplining labour.",
      relates: "Austerity succeeds as class politics — not economics"
    },

    // ── III. Personal Debt ────────────────────────────────
    {
      id: "wage_stagnation", type: "thesis", color: "#00bcd4",
      label: "Wage\nStagnation",
      rx: .54, ry: .18, cluster: "III. Personal Debt",
      desc: "Since the 1980s, productivity growth has decoupled from wage growth across the advanced economies. Workers produce more but take home a shrinking share. The gap between what workers produce and what they are paid has been filled not by higher wages but by cheaper credit — debt as a substitute for wages. Stagnant wages are not a market outcome but a political one: the result of deliberate union-busting, labour market deregulation, and the destruction of collective bargaining.",
      relates: "Debt as a substitute for the wages that were taken"
    },
    {
      id: "personal_debt_explosion", type: "antithesis", color: "#ff6b35",
      label: "Personal\nDebt Explosion",
      rx: .66, ry: .18, cluster: "III. Personal Debt",
      desc: "Credit cards, payday loans, student loans, car finance, buy-now-pay-later, mortgage debt. Household debt in the UK stands at over 130% of household income. Personal debt disciplines workers in a way that low wages alone cannot — a debtor cannot strike, cannot quit, cannot organise. The indebted worker is the ideal neoliberal subject: productive, compliant, and paying interest to the financial sector for the privilege of surviving.",
      relates: "Debt as a disciplinary mechanism — the indebted worker"
    },
    {
      id: "debt_jubilee", type: "synthesis", color: "#18c97c",
      label: "Debt Jubilee\n& Public Banking",
      rx: .60, ry: .34, cluster: "III. Personal Debt",
      desc: "David Graeber's Debt: the First 5000 Years — debt has always been a political relationship, not a natural one, and debt cancellation (jubilee) has historical precedent from Mesopotamia to the post-war German economic miracle. The synthesis: public banking, postal savings banks, credit unions, student debt cancellation, mortgage debt restructuring. Not charity but the recognition that most private debt is a transfer of wealth from the many to the financial sector.",
      relates: "Graeber: debt is political — and can be cancelled"
    },

    // ── IV. Low Productivity Trap ─────────────────────────
    {
      id: "productivity_puzzle", type: "thesis", color: "#00bcd4",
      label: "The\nProductivity\nPuzzle",
      rx: .78, ry: .20, cluster: "IV. Low Productivity Trap",
      desc: "Since 2008, UK productivity growth has been essentially flat — the longest stagnation since the Industrial Revolution. Output per hour worked has barely moved. The mainstream explanation puzzles over this: if labour markets are flexible and capital is mobile, why isn't productivity rising? The productivity puzzle is presented as a mystery. It is not a mystery — it is the predictable consequence of a low-wage, low-investment, financialised economy.",
      relates: "Low productivity as the predictable result of neoliberalism"
    },
    {
      id: "low_investment", type: "antithesis", color: "#ff6b35",
      label: "Low\nInvestment",
      rx: .90, ry: .20, cluster: "IV. Low Productivity Trap",
      desc: "UK business investment as a share of GDP is among the lowest in the G7. Why invest in productivity-enhancing capital when cheap labour is available? Low wages make automation unprofitable — it is cheaper to hire another zero-hours worker than to buy a machine. The hostile environment policy, by creating a hyper-exploitable migrant labour pool, actively suppresses investment in labour-saving technology. Cheap labour is the enemy of productivity.",
      relates: "Cheap labour makes investment unnecessary"
    },
    {
      id: "investment_state", type: "synthesis", color: "#18c97c",
      label: "The\nEntrepreneurial\nState",
      rx: .84, ry: .36, cluster: "IV. Low Productivity Trap",
      desc: "Mariana Mazzucato's The Entrepreneurial State: every technology in your iPhone was publicly funded — the internet, GPS, touchscreen, Siri. Private capital harvests innovation it did not create. The synthesis of low productivity is not more market but more state: public investment in R&D, green infrastructure, industrial strategy. Germany, South Korea, Japan — the high-productivity economies all have active industrial states. The market alone has never solved a productivity crisis.",
      relates: "Mazzucato: public investment creates the innovation capital harvests"
    },

    // ── V. Modern Monetary Theory ─────────────────────────
    {
      id: "commodity_money_myth", type: "thesis", color: "#00bcd4",
      label: "Commodity\nMoney Myth",
      rx: .18, ry: .62, cluster: "V. Modern Monetary Theory",
      desc: "The dominant folk theory of money: it is a commodity (gold, or backed by gold), governments must raise taxes or borrow before they can spend, and the national finances work like a household budget. This theory is wrong as a description of how modern fiat money actually works — but extremely useful as ideology, naturalising austerity as unavoidable and public spending as inherently constrained.",
      relates: "The household budget analogy — wrong but useful"
    },
    {
      id: "mmt", type: "antithesis", color: "#ff6b35",
      label: "Modern\nMonetary\nTheory",
      rx: .34, ry: .70, cluster: "V. Modern Monetary Theory",
      desc: "MMT (Stephanie Kelton, Warren Mosler, Randall Wray): a currency-issuing sovereign government — like the UK, US or Japan — cannot run out of its own currency. It spends money into existence and taxes it back out. The real constraint on public spending is not money but real resources: labour, materials, productive capacity. When there are unemployed workers and idle capacity, deficit spending does not cause inflation — it puts resources to work. The question is never can we afford it — it is always do we have the real resources.",
      relates: "The real constraint is resources — not money"
    },
    {
      id: "green_new_deal", type: "synthesis", color: "#18c97c",
      label: "Green New\nDeal & Job\nGuarantee",
      rx: .24, ry: .84, cluster: "V. Modern Monetary Theory",
      desc: "MMT's policy synthesis: a Job Guarantee — the state as employer of last resort, offering paid work to anyone who wants it, automatically stabilising the economy. Combined with a Green New Deal: public investment in the decarbonisation of the economy, funded not by raising taxes on workers or borrowing from bond markets but by the state spending its own currency into existence. The money was always there. It was always a political choice.",
      relates: "The money was always there — it was always political"
    },

    // ── VI. Post-Industrial Politics ──────────────────────
    {
      id: "post_industrial_identity", type: "thesis", color: "#00bcd4",
      label: "Post-Industrial\nIdentity",
      rx: .62, ry: .62, cluster: "VI. Post-Industrial Politics",
      desc: "Deindustrialisation destroyed not just jobs but the dense institutional culture of the industrial working class — the union branch, the working mens club, the brass band, the co-op, the Labour Party ward. The communities left behind are not merely economically deprived but culturally bereaved. The loss of collective identity produced a political vacuum that nationalism, nostalgia and populism have rushed to fill.",
      relates: "Economic loss produces cultural bereavement"
    },
    {
      id: "left_behind", type: "antithesis", color: "#ff6b35",
      label: "The\n\"Left Behind\"",
      rx: .78, ry: .70, cluster: "VI. Post-Industrial Politics",
      desc: "The political discourse of the left-behind: post-industrial towns voting for Brexit, for Trump, for Farage — against the liberal metropolitan elite. The analysis is partially correct: these communities have been materially abandoned by decades of neoliberalism. But the left-behind framing obscures the class dynamics — directing anger at metropolitan liberals and migrants rather than at the capital and political class that made the abandonment.",
      relates: "Real grievance — misdirected anger"
    },
    {
      id: "post_industrial_politics", type: "synthesis", color: "#18c97c",
      label: "Post-Industrial\nClass Politics",
      rx: .70, ry: .84, cluster: "VI. Post-Industrial Politics",
      desc: "The synthesis is neither nostalgic labourism nor liberal metropolitanism but a new post-industrial class politics: combining the material demands of MMT and the Green New Deal with the cultural recognition of deindustrialised communities, connecting the precariat with the remnants of industrial labour, and building the kind of broad working-class coalition that the neoliberal settlement has deliberately prevented. The Rochdale Pioneers did not mourn the passing of feudalism — they built something new.",
      relates: "Not nostalgia — but building something new"
    }

  ],

  edges: [
    // I. Deindustrialisation chain
    ["industrial_economy",       "service_sector"],
    ["service_sector",           "knowledge_economy_myth"],

    // II. Debt chain
    ["keynesian_deficit",        "debt_as_weapon"],
    ["debt_as_weapon",           "austerity_economics"],

    // III. Personal debt chain
    ["wage_stagnation",          "personal_debt_explosion"],
    ["personal_debt_explosion",  "debt_jubilee"],

    // IV. Productivity chain
    ["productivity_puzzle",      "low_investment"],
    ["low_investment",           "investment_state"],

    // V. MMT chain
    ["commodity_money_myth",     "mmt"],
    ["mmt",                      "green_new_deal"],

    // VI. Politics chain
    ["post_industrial_identity", "left_behind"],
    ["left_behind",              "post_industrial_politics"],

    // ── Cross-cluster wiring ──────────────────────────────

    // Deindustrialisation drives wage stagnation
    ["service_sector",           "wage_stagnation"],

    // Wage stagnation drives productivity puzzle (cheap labour = no investment)
    ["wage_stagnation",          "low_investment"],

    // Austerity drives personal debt (cut services, people borrow to survive)
    ["austerity_economics",      "personal_debt_explosion"],

    // Debt as weapon justification relies on commodity money myth
    ["commodity_money_myth",     "debt_as_weapon"],

    // MMT demolishes debt as weapon
    ["mmt",                      "austerity_economics"],

    // Entrepreneurial state solves low investment
    ["investment_state",         "low_investment"],

    // Green New Deal connects to investment state
    ["investment_state",         "green_new_deal"],

    // Deindustrialisation produces post-industrial identity
    ["industrial_economy",       "post_industrial_identity"],

    // Austerity produces left-behind communities
    ["austerity_economics",      "left_behind"],

    // Post-industrial class politics connects to Green New Deal
    ["green_new_deal",           "post_industrial_politics"],

    // Debt jubilee connects to post-industrial politics
    ["debt_jubilee",             "post_industrial_politics"],

    // Knowledge economy myth produces post-industrial identity
    ["knowledge_economy_myth",   "post_industrial_identity"],

    // Personal debt explosion feeds post-industrial identity (anxiety, resentment)
    ["personal_debt_explosion",  "post_industrial_identity"]
  ]
};

// ══════════════════════════════════════════════════════════
//  IX. FAUX DEMOCRACY & ELITE CONTROL
//  The democratic myth and actually existing power —
//  from the property franchise to colour revolutions
// ══════════════════════════════════════════════════════════
DATA.democracy = {
  label: "Faux Democracy & Elite Control",
  desc:  "Democracy is the legitimating ideology of capitalist states — but actually existing democracy has always been constrained, captured, or overthrown when it threatened elite interests. From the property franchise to the New Jim Crow, from Françafrique to colour revolutions, the pattern is consistent: democracy for the few, managed or removed for the many.",
  accentColor: '#e91e63',
  thesisColor: '#e91e63',

  clusters: [
    { label: "I. The Property Franchise",        x: .10,  y: .05 },
    { label: "II. American Democracy & Race",     x: .34,  y: .05 },
    { label: "III. Françafrique & Neo-colonialism", x: .60, y: .05 },
    { label: "IV. Colour Revolutions & Regime Change", x: .84, y: .05 },
    { label: "V. Corporate Capture",             x: .28,  y: .54 },
    { label: "VI. Democracy from Below",         x: .72,  y: .54 }
  ],

  nodes: [

    // ── I. The Property Franchise ─────────────────────────
    {
      id: "property_franchise", type: "thesis", color: "#e91e63",
      label: "The Property\nFranchise",
      rx: .06, ry: .18, cluster: "I. The Property Franchise",
      desc: "In Britain before 1832, only men owning property worth forty shillings or more could vote — roughly 3% of the population. Parliament was the instrument of the landed gentry: rotten boroughs with no voters returning members, while industrial Manchester had none. The Great Reform Act extended the franchise slightly — but explicitly to exclude the working class. Democracy as the exclusive property of property.",
      relates: "Democracy invented for — and by — those with property to protect"
    },
    {
      id: "suffrage_struggle", type: "antithesis", color: "#ff6b35",
      label: "Suffrage\nStruggle",
      rx: .17, ry: .18, cluster: "I. The Property Franchise",
      desc: "The Chartists demanded universal male suffrage, secret ballot, and annual parliaments — six points that terrified the ruling class precisely because they were moderate and unanswerable. The Suffragettes, arrested, force-fed, and dismissed as hysteria, demanded that democracy mean what it claimed. Each extension of the franchise was won by organised pressure from below and granted reluctantly from above — always too little, always too late.",
      relates: "Every extension of democracy was won from below — never given"
    },
    {
      id: "managed_democracy_uk", type: "synthesis", color: "#18c97c",
      label: "Managed\nDemocracy",
      rx: .115, ry: .34, cluster: "I. The Property Franchise",
      desc: "Universal suffrage arrived — but inside a system designed to manage its consequences. First Past the Post produces parliaments that misrepresent voters. The Lords veto elected legislation. The monarchy provides ideological continuity above democratic challenge. The press — owned by a handful of billionaires — sets the terms of political debate. The BBC manages the Overton window. Democracy formally universal, substantively managed.",
      relates: "The franchise won — but the system absorbs and manages it"
    },

    // ── II. American Democracy & Race ─────────────────────
    {
      id: "founding_myth", type: "thesis", color: "#e91e63",
      label: "The Founding\nMyth",
      rx: .28, ry: .18, cluster: "II. American Democracy & Race",
      desc: "All men are created equal — the Declaration of Independence, 1776. The shining city on a hill. The world's oldest democracy. The land of liberty. The founding myth of American democracy is among the most powerful ideological constructions in history — and was written by slaveholders, for slaveholders, explicitly excluding women, indigenous peoples, and the enslaved. The contradiction was not incidental — it was constitutional.",
      relates: "Democracy declared by slaveholders — for slaveholders"
    },
    {
      id: "jim_crow", type: "antithesis", color: "#ff6b35",
      label: "Jim Crow &\nThe New Jim Crow",
      rx: .40, ry: .18, cluster: "II. American Democracy & Race",
      desc: "After Reconstruction, Jim Crow laws systematically disenfranchised Black Americans through poll taxes, literacy tests, grandfather clauses, and terrorist violence. The Voting Rights Act (1965) was won in blood — and has been systematically dismantled since the Supreme Court's Shelby County decision (2013). Michelle Alexander's The New Jim Crow: mass incarceration is the successor system — felony disenfranchisement, racialised policing, prison labour. The system evolved; the exclusion continues.",
      relates: "The New Jim Crow — disenfranchisement by other means"
    },
    {
      id: "dollar_democracy", type: "synthesis", color: "#18c97c",
      label: "Dollar\nDemocracy",
      rx: .34, ry: .34, cluster: "II. American Democracy & Race",
      desc: "Citizens United (2010): the Supreme Court ruled that corporate political spending is free speech — unlimited dark money in elections. The US Senate is a millionaires' club; the cost of a Senate seat averages $10 million. Princeton's Gilens and Page study (2014): US policy outcomes correlate strongly with elite preferences and weakly with public opinion. America is, empirically, an oligarchy with democratic characteristics — not a democracy with oligarchic tendencies.",
      relates: "Gilens & Page: America is an oligarchy — empirically"
    },

    // ── III. Françafrique ─────────────────────────────────
    {
      id: "formal_decolonisation", type: "thesis", color: "#e91e63",
      label: "Formal\nDecolonisation",
      rx: .54, ry: .18, cluster: "III. Françafrique & Neo-colonialism",
      desc: "The flag comes down, the anthem plays, the new president takes office. Between 1956 and 1966, most of Africa achieved formal independence from European colonial powers. Self-determination, sovereignty, democracy — the promises of decolonisation. France granted independence to seventeen African nations in 1960 alone. The formal transfer of power was real. The informal retention of power was equally real.",
      relates: "Independence on paper — dependence in practice"
    },
    {
      id: "francafrique", type: "antithesis", color: "#ff6b35",
      label: "Françafrique",
      rx: .66, ry: .18, cluster: "III. Françafrique & Neo-colonialism",
      desc: "The system devised by Jacques Foccart: France maintained control of its former colonies through a network of personal relationships between French presidents and African heads of state, French military bases, the CFA franc (a currency controlled by the French Treasury), French corporations holding resource extraction monopolies, and direct intervention — fourteen French military interventions in Africa since 1960. Lumumba, assassinated with Belgian and CIA involvement. Sankara, killed in a coup with French foreknowledge. Gaddafi, destroyed partly to prevent a gold-backed African currency.",
      relates: "Fourteen military interventions since independence"
    },
    {
      id: "africa_rising", type: "synthesis", color: "#18c97c",
      label: "Pan-African\nSovereignty",
      rx: .60, ry: .34, cluster: "III. Françafrique & Neo-colonialism",
      desc: "The Sahel coups of 2021-2023 — Mali, Burkina Faso, Niger — expelled French forces and the Wagner group moved in. Whether this represents genuine sovereignty or a change of patron remains contested. But the pan-African movement from Nkrumah to the African Union's push for a single currency and free movement area represents the ongoing struggle for the material content of the formal independence that was granted. The contradiction between the form of sovereignty and its substance drives history forward.",
      relates: "The Sahel turns — the contradiction between form and content"
    },

    // ── IV. Colour Revolutions & Regime Change ────────────
    {
      id: "democracy_promotion", type: "thesis", color: "#e91e63",
      label: "Democracy\nPromotion",
      rx: .78, ry: .18, cluster: "IV. Colour Revolutions & Regime Change",
      desc: "The National Endowment for Democracy, USAID, the Open Society Foundations, the British Council — a network of institutions funding civil society, media, and political organisations in countries whose governments are unfriendly to Western interests. Presented as democracy promotion: supporting free press, civil society, fair elections. The recipients of funding are not randomly selected — they correlate strongly with strategic and resource interests.",
      relates: "Democracy promotion as geopolitical instrument"
    },
    {
      id: "colour_revolutions", type: "antithesis", color: "#ff6b35",
      label: "Colour\nRevolutions",
      rx: .90, ry: .18, cluster: "IV. Colour Revolutions & Regime Change",
      desc: "Rose Revolution (Georgia 2003), Orange Revolution (Ukraine 2004), Tulip Revolution (Kyrgyzstan 2005), Arab Spring (2010-11). Genuine popular grievances, Western-funded opposition infrastructure, and geopolitical timing combine to produce regime change that installs governments aligned with Western interests. Where colour revolutions fail — Venezuela, Bolivia, Belarus — sanctions, coup attempts, and economic warfare follow. Democracy is supported where it produces the right result.",
      relates: "Democracy supported where it produces the right result"
    },
    {
      id: "regime_change", type: "synthesis", color: "#18c97c",
      label: "Sovereign\nDemocracy",
      rx: .84, ry: .34, cluster: "IV. Colour Revolutions & Regime Change",
      desc: "The backlash to colour revolutions: Russia's concept of sovereign democracy, China's whole-process democracy, the Non-Aligned Movement's assertion that democracy cannot be externally imposed. Flawed as these alternatives often are, they contain a genuine insight: democracy promoted at gunpoint or through foreign funding is not democracy but a new form of colonial administration. The synthesis demands democracy that is genuinely self-determined — which requires freedom from economic coercion as well as military threat.",
      relates: "Democracy cannot be imposed — it must be self-determined"
    },

    // ── V. Corporate Capture of Democracy ────────────────
    {
      id: "electoral_democracy", type: "thesis", color: "#e91e63",
      label: "Electoral\nDemocracy",
      rx: .18, ry: .62, cluster: "V. Corporate Capture",
      desc: "The formal machinery of democracy: elections, parties, parliaments, constitutions, rights of assembly and speech. These are real gains — won by real struggle — and their absence is acutely felt. But formal electoral democracy systematically produces governments that implement policies opposed by majorities: privatisation, austerity, arms exports, tax cuts for the wealthy. The gap between election promises and governing practice is not accidental — it is structural.",
      relates: "Formal democracy — real capture"
    },
    {
      id: "corporate_capture", type: "antithesis", color: "#ff6b35",
      label: "Corporate\nCapture",
      rx: .34, ry: .70, cluster: "V. Corporate Capture",
      desc: "The revolving door between government and industry. Lobbying: in the US, $3.7 billion spent annually. Think tanks funded by fossil fuel, pharmaceutical, and financial interests shaping policy agendas. The capture of regulatory agencies by the industries they regulate. Political parties dependent on donor funding that constrains their programmes. The result: formally democratic states that systematically implement the preferences of concentrated economic power over the preferences of their electorates.",
      relates: "Three billion dollars of lobbying — one direction of policy"
    },
    {
      id: "participatory_democracy", type: "synthesis", color: "#18c97c",
      label: "Participatory\n& Economic\nDemocracy",
      rx: .24, ry: .84, cluster: "V. Corporate Capture",
      desc: "The synthesis of corporate capture is not better regulation of lobbying but a transformation of the economic base that makes capture possible. Workers on boards (Germany's Mitbestimmung), participatory budgeting (Porto Alegre), cooperatives and mutual ownership, Citizens' Assemblies (Ireland's abortion referendum), liquid democracy. Economic democracy as the condition of political democracy — you cannot have one without the other. The Rochdale Pioneers understood this in 1844.",
      relates: "Economic democracy as the condition of political democracy"
    },

    // ── VI. Democracy from Below ──────────────────────────
    {
      id: "commune_tradition", type: "thesis", color: "#e91e63",
      label: "The Commune\nTradition",
      rx: .62, ry: .62, cluster: "VI. Democracy from Below",
      desc: "The Paris Commune (1871): seventy-two days of genuine working-class self-government — delegates instantly recallable, paid workers' wages, separation of church and state, women in public life. Marx called it the political form at last discovered for the emancipation of labour. The Soviets of 1917, before their capture by the party. The Spanish anarchist collectives of 1936. The Zapatista autonomous municipalities. Workers' councils in Hungary 1956. The tradition of democracy from below — not representation but self-governance.",
      relates: "Marx on the Commune: the form of emancipation discovered"
    },
    {
      id: "democratic_suppression", type: "antithesis", color: "#ff6b35",
      label: "Democratic\nSuppression",
      rx: .78, ry: .70, cluster: "VI. Democracy from Below",
      desc: "Every experiment in genuine popular democracy has been suppressed, often violently. The Paris Commune drowned in blood — 30,000 killed in the Bloody Week. The Spanish collectives crushed by Franco with Nazi and fascist support. Allende's democratic socialism ended by Pinochet's coup, with CIA backing, on 11 September 1973. Mosaddegh's democratic Iran, overthrown by CIA and MI6 in 1953 to restore oil concessions. The pattern is consistent: genuine democracy that threatens elite economic interests is crushed.",
      relates: "Every genuine democracy that threatened capital was crushed"
    },
    {
      id: "democracy_to_come", type: "synthesis", color: "#18c97c",
      label: "Democracy\nTo Come",
      rx: .70, ry: .84, cluster: "VI. Democracy from Below",
      desc: "Derrida's democracy to come: democracy not as a achieved state but as an infinite promise — always arriving, never fully present, always exceeding its current instantiation. The practical content: extending democracy from the political to the economic sphere, from the nation state to the global, from representation to participation, from periodic voting to ongoing self-governance. Not utopian — but the recognition that every existing democracy is a partial, contested, and reversible achievement of struggle from below.",
      relates: "Democracy not as destination but as permanent process of struggle"
    }

  ],

  edges: [
    // I. Property franchise chain
    ["property_franchise",    "suffrage_struggle"],
    ["suffrage_struggle",     "managed_democracy_uk"],
    ["managed_democracy_uk",  "property_franchise"],  // managed democracy recreates elite control

    // II. American democracy chain
    ["founding_myth",         "jim_crow"],
    ["jim_crow",              "dollar_democracy"],

    // III. Françafrique chain
    ["formal_decolonisation", "francafrique"],
    ["francafrique",          "africa_rising"],

    // IV. Colour revolution chain
    ["democracy_promotion",   "colour_revolutions"],
    ["colour_revolutions",    "regime_change"],

    // V. Corporate capture chain
    ["electoral_democracy",   "corporate_capture"],
    ["corporate_capture",     "participatory_democracy"],

    // VI. Democracy from below chain
    ["commune_tradition",     "democratic_suppression"],
    ["democratic_suppression","democracy_to_come"],

    // ── Cross-cluster wiring ──────────────────────────────

    // Managed democracy enables corporate capture
    ["managed_democracy_uk",  "corporate_capture"],

    // Dollar democracy is corporate capture in its purest form
    ["dollar_democracy",      "corporate_capture"],

    // Jim Crow connects to democracy promotion (selective application)
    ["jim_crow",              "democracy_promotion"],

    // Françafrique is regime change by another name
    ["francafrique",          "colour_revolutions"],

    // Democratic suppression connects to colour revolutions
    ["democratic_suppression","colour_revolutions"],

    // Commune tradition feeds participatory democracy
    ["commune_tradition",     "participatory_democracy"],

    // Democracy to come connects to participatory democracy
    ["democracy_to_come",     "participatory_democracy"],

    // Africa rising connects to sovereign democracy
    ["africa_rising",         "regime_change"],

    // Suffrage struggle connects to commune tradition
    ["suffrage_struggle",     "commune_tradition"],

    // Property franchise connects to founding myth
    ["property_franchise",    "founding_myth"],

    // Corporate capture suppresses democracy from below
    ["corporate_capture",     "democratic_suppression"]
  ]
};

// ══════════════════════════════════════════════════════════
//  IX. TECHNOLOGY, AI & LABOUR
// ══════════════════════════════════════════════════════════
DATA.technology = {
  label: "Technology, AI & Labour",
  desc:  "Technology is never neutral — it is always developed within specific class relations and deployed in the interests of capital. Automation displaces labour; AI encloses knowledge; platform capitalism creates new forms of extraction. But technology also contains the seeds of abundance, free time, and liberation — if the question of ownership is answered differently.",
  accentColor: '#00e676',
  thesisColor: '#00e676',

  clusters: [
    { label: "I. Automation & Labour",         x: .10,  y: .05 },
    { label: "II. Platform Capitalism",         x: .34,  y: .05 },
    { label: "III. AI & Knowledge Enclosure",   x: .60,  y: .05 },
    { label: "IV. Digital Commons",             x: .84,  y: .05 },
    { label: "V. The Future of Work",           x: .28,  y: .54 },
    { label: "VI. Tech & Democracy",            x: .72,  y: .54 }
  ],

  nodes: [
    // I. Automation & Labour
    {
      id: "tech_productive_promise", type: "thesis", color: "#00e676",
      label: "Technology\nas Liberation",
      rx: .06, ry: .18, cluster: "I. Automation & Labour",
      desc: "The promise of automation: machines do the drudgery, humans are freed for creativity, care, and self-development. Marx in the Grundrisse envisioned the machine displacing necessary labour and expanding free time — the general intellect transforming the basis of production. Keynes in 1930 predicted fifteen-hour working weeks by 2030. The technology to achieve this exists. The question is who owns it and who benefits.",
      relates: "Marx's general intellect — technology as potential liberation"
    },
    {
      id: "automation_displacement", type: "antithesis", color: "#ff6b35",
      label: "Automation\nDisplacement",
      rx: .17, ry: .18, cluster: "I. Automation & Labour",
      desc: "When capital owns the machines, automation means unemployment, not free time. The Oxford Martin School study (2013) estimated 47% of US jobs at high risk of automation within twenty years. Manufacturing, logistics, data entry, customer service — entire occupational categories hollowed out. The gains from automation flow to capital owners; the costs fall on displaced workers. The promise of liberation becomes the reality of precarity.",
      relates: "Automation without ownership change means unemployment not liberation"
    },
    {
      id: "tech_universal_basic", type: "synthesis", color: "#18c97c",
      label: "Universal\nBasic Income\nor Services",
      rx: .115, ry: .34, cluster: "I. Automation & Labour",
      desc: "Two responses to automation displacement: Universal Basic Income (a floor of income for all, regardless of work) or Universal Basic Services (free healthcare, housing, transport, education — decommodified provision). UBI risks becoming a Trojan horse for dismantling public services if pitched too low; UBS builds on the welfare state tradition. Both share the insight that socially produced technological wealth should be socially distributed — not privately accumulated.",
      relates: "Socially produced wealth — socially distributed"
    },

    // II. Platform Capitalism
    {
      id: "sharing_economy_promise", type: "thesis", color: "#00e676",
      label: "Sharing\nEconomy",
      rx: .28, ry: .18, cluster: "II. Platform Capitalism",
      desc: "Uber, Airbnb, TaskRabbit — the sharing economy promised peer-to-peer exchange, flexible work, unused assets put to productive use. A decentralised, democratic economic form enabled by digital technology. The reality: platforms are not peer-to-peer but hub-and-spoke monopolies. The platform owns nothing, extracts a rent from every transaction, and externalises all costs and risks onto workers and communities.",
      relates: "Peer-to-peer promise — monopoly extraction reality"
    },
    {
      id: "platform_monopoly", type: "antithesis", color: "#ff6b35",
      label: "Platform\nMonopoly",
      rx: .40, ry: .18, cluster: "II. Platform Capitalism",
      desc: "Network effects produce natural monopolies: the platform with the most users is most valuable to new users, locking out competition. Amazon, Google, Meta, Apple — five companies with a combined market capitalisation exceeding the GDP of most countries, controlling the digital infrastructure of global commerce, communication, and information. Platform monopolies are the 21st century Standard Oil — but extracting data rent, not oil rent.",
      relates: "Network effects produce monopoly — data is the new oil"
    },
    {
      id: "platform_cooperativism", type: "synthesis", color: "#18c97c",
      label: "Platform\nCooperativism",
      rx: .34, ry: .34, cluster: "II. Platform Capitalism",
      desc: "Trebor Scholz's platform cooperativism: build the platforms as worker and user cooperatives. Up&Go (cleaning workers cooperative), Stocksy (photographer cooperative), drivers cooperatives competing with Uber. The digital infrastructure of the platform economy could be owned by those who use and build it — the Rochdale Pioneers principle applied to the app store. The synthesis: democratic ownership of the digital means of production.",
      relates: "The Pioneers' principle applied to the app store"
    },

    // III. AI & Knowledge Enclosure
    {
      id: "knowledge_commons_ai", type: "thesis", color: "#00e676",
      label: "Knowledge\nas Commons",
      rx: .54, ry: .18, cluster: "III. AI & Knowledge Enclosure",
      desc: "Human knowledge — accumulated over millennia, expressed in books, art, code, science, conversation — is a collective inheritance. The internet made this commons globally accessible for the first time in history. Wikipedia, open-source software, Creative Commons, the open access movement — the knowledge commons in practice. The raw material from which AI systems are trained is this collective inheritance.",
      relates: "Millennia of collective knowledge — the training data of AI"
    },
    {
      id: "ai_enclosure", type: "antithesis", color: "#ff6b35",
      label: "AI Enclosure\nof Knowledge",
      rx: .66, ry: .18, cluster: "III. AI & Knowledge Enclosure",
      desc: "Large language models trained on the collective commons of human knowledge are enclosed as private property by OpenAI, Google, Anthropic, Meta. Writers, artists, coders, academics whose work formed the training data receive nothing. The output — a system that commodifies collective intelligence — is sold back to the public that produced it. The most ambitious enclosure in history: the privatisation of the general intellect itself.",
      relates: "Collective intelligence enclosed — sold back as a subscription"
    },
    {
      id: "open_ai_movement", type: "synthesis", color: "#18c97c",
      label: "Open Source\nAI & Data\nSovereignty",
      rx: .60, ry: .34, cluster: "III. AI & Knowledge Enclosure",
      desc: "The open source AI movement — Llama, Mistral, Stable Diffusion — resists enclosure through open weights and open training data. Data cooperatives where communities own and control their own data. Public AI infrastructure funded as public good. The synthesis: AI developed as public utility, trained on consensually contributed data, governed democratically, serving collective rather than private ends. The question of AI is the question of ownership.",
      relates: "AI as public utility — the question is always ownership"
    },

    // IV. Digital Commons
    {
      id: "open_source", type: "thesis", color: "#00e676",
      label: "Open Source\n& Free Software",
      rx: .78, ry: .18, cluster: "IV. Digital Commons",
      desc: "Richard Stallman's GNU, Linus Torvalds' Linux, the Apache Foundation, Mozilla, Wikipedia — the open source and free software movement built the infrastructure of the internet as a commons. Linux runs 96% of the world's servers. The Apache web server powers half the internet. These were built through voluntary collective labour, shared freely, and improved by millions. A proof of concept: commons-based production works at global scale.",
      relates: "The internet's infrastructure built as commons"
    },
    {
      id: "digital_enclosure_ii", type: "antithesis", color: "#ff6b35",
      label: "Digital\nEnclosure",
      rx: .90, ry: .18, cluster: "IV. Digital Commons",
      desc: "The commons built by open source becomes the foundation on which platform monopolies erect their enclosures. Amazon Web Services runs on Linux but charges rent for access. Google's search is built on academic open PageRank research — the results are sold to advertisers. The digital commons is not protected by its openness — capital can always build enclosures on top of open foundations and extract rent from the traffic.",
      relates: "Open foundations — enclosed superstructure"
    },
    {
      id: "digital_commons_future", type: "synthesis", color: "#18c97c",
      label: "Digital Public\nInfrastructure",
      rx: .84, ry: .34, cluster: "IV. Digital Commons",
      desc: "The synthesis: digital public infrastructure owned and governed as a public utility. A public social media platform with democratic governance. Public cloud computing not subject to shareholder extraction. Municipal broadband. Open standards enforced by regulation. The European Commons approach, the Indian digital public goods stack — models for treating digital infrastructure as the roads and utilities of the 21st century rather than private property.",
      relates: "Digital infrastructure as 21st century public utility"
    },

    // V. The Future of Work
    {
      id: "work_ethic", type: "thesis", color: "#00e676",
      label: "The\nWork Ethic",
      rx: .18, ry: .62, cluster: "V. The Future of Work",
      desc: "Max Weber's Protestant work ethic: the ideology that transforms labour from a curse into a moral imperative and a path to salvation. The good person works hard; poverty is a sign of moral failure; wealth is evidence of virtue. This ideology — secularised into meritocracy, hustle culture, and the gig economy's celebration of being your own boss — makes exploitation feel like self-realisation and precarity feel like freedom.",
      relates: "Weber: work ethic as the spirit of capitalism"
    },
    {
      id: "bullshit_jobs", type: "antithesis", color: "#ff6b35",
      label: "Bullshit\nJobs",
      rx: .34, ry: .70, cluster: "V. The Future of Work",
      desc: "David Graeber's Bullshit Jobs: a large proportion of employment in financialised capitalism consists of jobs that the workers themselves believe serve no useful social purpose — corporate lawyers, PR consultants, financial compliance officers, telemarketing, certain categories of management. Automation has eliminated useful jobs and created useless ones. The work ethic compels people to perform pointless tasks rather than accepting that technology has made their labour unnecessary.",
      relates: "Graeber: technology creates useless jobs to preserve the work ethic"
    },
    {
      id: "right_to_be_lazy", type: "synthesis", color: "#18c97c",
      label: "The Right\nto Be Lazy",
      rx: .24, ry: .84, cluster: "V. The Future of Work",
      desc: "Paul Lafargue's 1883 pamphlet: the right to be lazy — the demand for a three-hour working day — is the condition of genuine human flourishing. The four-day week trials in Iceland, the UK, Japan — productivity maintained or improved, wellbeing dramatically better. The synthesis: as automation makes it possible to meet human needs with less labour, the fruits should be shared as free time, not converted into unemployment for some and overwork for others.",
      relates: "Lafargue 1883 — still waiting for the three-hour day"
    },

    // VI. Tech & Democracy
    {
      id: "tech_democratisation", type: "thesis", color: "#00e676",
      label: "Tech as\nDemocratisation",
      rx: .62, ry: .62, cluster: "VI. Tech & Democracy",
      desc: "The early internet as democratic promise: cheap publishing, global communication, citizen journalism, social movements coordinated across borders. The Arab Spring organised on Twitter. Black Lives Matter amplified on social media. WikiLeaks exposing state secrets. The democratising potential of digital technology was real — and was one reason established powers moved quickly to regulate, surveil, and enclose it.",
      relates: "Digital technology as democratic amplifier — briefly"
    },
    {
      id: "tech_authoritarianism", type: "antithesis", color: "#ff6b35",
      label: "Digital\nAuthoritarianism",
      rx: .78, ry: .70, cluster: "VI. Tech & Democracy",
      desc: "Social media algorithms optimised for engagement produce outrage, polarisation, and conspiracy. Cambridge Analytica harvesting Facebook data for electoral manipulation. China's social credit system. NSA mass surveillance revealed by Snowden. Facial recognition deployed against protesters. The same technology that enabled the Arab Spring enabled the surveillance of its participants. Digital infrastructure in authoritarian hands is the most powerful control apparatus ever built.",
      relates: "The most powerful control apparatus ever built"
    },
    {
      id: "tech_governance", type: "synthesis", color: "#18c97c",
      label: "Democratic\nTech\nGovernance",
      rx: .70, ry: .84, cluster: "VI. Tech & Democracy",
      desc: "The synthesis: technology governance as a democratic question, not a technical one. The EU's GDPR, Digital Markets Act, AI Act — imperfect but real attempts to subject technology to democratic accountability. Taiwan's digital democracy experiments. Algorithmic transparency requirements. Data protection as a collective right. The question is not whether to regulate technology but who governs it — and in whose interest.",
      relates: "Technology governance as democratic question"
    }
  ],

  edges: [
    ["tech_productive_promise", "automation_displacement"],
    ["automation_displacement", "tech_universal_basic"],
    ["sharing_economy_promise", "platform_monopoly"],
    ["platform_monopoly",       "platform_cooperativism"],
    ["knowledge_commons_ai",    "ai_enclosure"],
    ["ai_enclosure",            "open_ai_movement"],
    ["open_source",             "digital_enclosure_ii"],
    ["digital_enclosure_ii",    "digital_commons_future"],
    ["work_ethic",              "bullshit_jobs"],
    ["bullshit_jobs",           "right_to_be_lazy"],
    ["tech_democratisation",    "tech_authoritarianism"],
    ["tech_authoritarianism",   "tech_governance"],
    // Cross-wiring
    ["automation_displacement", "bullshit_jobs"],
    ["platform_monopoly",       "ai_enclosure"],
    ["ai_enclosure",            "tech_authoritarianism"],
    ["open_source",             "knowledge_commons_ai"],
    ["platform_cooperativism",  "digital_commons_future"],
    ["tech_universal_basic",    "right_to_be_lazy"],
    ["digital_commons_future",  "tech_governance"],
    ["open_ai_movement",        "digital_commons_future"],
    ["tech_governance",         "platform_cooperativism"],
    ["automation_displacement", "platform_monopoly"]
  ]
};

// ══════════════════════════════════════════════════════════
//  X. HOUSING & LAND
// ══════════════════════════════════════════════════════════
DATA.housing = {
  label: "Housing & Land",
  desc:  "Land is the original commons — and its enclosure is the original act of capitalist dispossession. Housing has been transformed from a human need into a financial asset. Rent extracts wealth from those who need shelter and transfers it to those who own land. The housing crisis is not a failure of the market — it is the market working exactly as designed.",
  accentColor: '#ff9800',
  thesisColor: '#ff9800',

  clusters: [
    { label: "I. Land & Enclosure",            x: .10,  y: .05 },
    { label: "II. Housing as Financialised Asset", x: .34, y: .05 },
    { label: "III. Rent & Extraction",         x: .60,  y: .05 },
    { label: "IV. The Housing Crisis",         x: .84,  y: .05 },
    { label: "V. Public & Social Housing",     x: .28,  y: .54 },
    { label: "VI. Land Reform & Commons",      x: .72,  y: .54 }
  ],

  nodes: [
    // I. Land & Enclosure
    {
      id: "land_as_commons", type: "thesis", color: "#ff9800",
      label: "Land as\nCommons",
      rx: .06, ry: .18, cluster: "I. Land & Enclosure",
      desc: "Before enclosure, common land was collectively managed — for grazing, gathering, fuel, and building. The commons was not a free-for-all but a complex system of customary rights, managed by communities for communities. It was the material basis of peasant independence: a floor below which no one could fall as long as the commons existed. Its destruction was the precondition for the creation of a workforce with nothing to sell but its labour.",
      relates: "The commons as the floor of peasant independence"
    },
    {
      id: "enclosure_land", type: "antithesis", color: "#ff6b35",
      label: "Enclosure &\nDispossession",
      rx: .17, ry: .18, cluster: "I. Land & Enclosure",
      desc: "Between 1750 and 1850, over six million acres of common land in England were enclosed by Act of Parliament — transferred from collective use to private ownership. The dispossessed peasantry flooded into the new industrial cities: Marx's primitive accumulation. E.P. Thompson: the enclosures were a plain enough case of class robbery. The village commons became the landlord's field; the commoner became the factory worker.",
      relates: "Thompson: the enclosures were class robbery"
    },
    {
      id: "land_value_tax", type: "synthesis", color: "#18c97c",
      label: "Land Value\nTax & Commons",
      rx: .115, ry: .34, cluster: "I. Land & Enclosure",
      desc: "Henry George's Progress and Poverty (1879): land value is socially created — by the community around it, by public investment, by population growth — yet captured privately by landowners who did nothing to create it. The Land Value Tax: tax the unimproved value of land, not labour or capital. This single tax would eliminate land speculation, fund public services from socially created wealth, and restore to the community what the community created. Still the most radical reform that sounds completely reasonable.",
      relates: "George: land value is socially created — socially it should be reclaimed"
    },

    // II. Housing as Financialised Asset
    {
      id: "housing_as_home", type: "thesis", color: "#ff9800",
      label: "Housing\nas Home",
      rx: .28, ry: .18, cluster: "II. Housing as Financialised Asset",
      desc: "The post-war settlement treated housing as a social good — a human need to be met collectively through council housing, rent controls, and housing associations. At its peak, over a third of British households lived in council housing of genuinely good quality: Parker Morris standards, mixed communities, secure tenancies. Housing as home: stable, affordable, a platform for a decent life rather than a source of financial anxiety.",
      relates: "Housing as social good — the post-war settlement"
    },
    {
      id: "housing_financialisation", type: "antithesis", color: "#ff6b35",
      label: "Housing\nFinancialisation",
      rx: .40, ry: .18, cluster: "II. Housing as Financialised Asset",
      desc: "Right to Buy (1980) sold council housing at discount and banned councils from replacing it — transferring public wealth to private ownership and eventually to buy-to-let landlords. Mortgage interest tax relief, planning restrictions, and quantitative easing inflated house prices into the primary vehicle of middle-class wealth accumulation. Housing transformed from home into asset class: something to invest in, speculate on, and extract rent from.",
      relates: "Right to Buy transferred public wealth to private landlords"
    },
    {
      id: "generation_rent", type: "synthesis", color: "#18c97c",
      label: "Generation\nRent",
      rx: .34, ry: .34, cluster: "II. Housing as Financialised Asset",
      desc: "The synthesis of housing financialisation: a generation locked out of ownership, paying ever-rising rents to landlords whose assets appreciate through no effort of their own. The Resolution Foundation: those born in the 1980s are the first generation likely to be worse off than their parents. Housing wealth concentrates with the old and the already-wealthy; housing costs consume an ever-larger share of young workers' wages. The housing ladder has become a housing chasm.",
      relates: "The first generation worse off than their parents"
    },

    // III. Rent & Extraction
    {
      id: "rent_theory", type: "thesis", color: "#ff9800",
      label: "Ricardo's\nRent Theory",
      rx: .54, ry: .18, cluster: "III. Rent & Extraction",
      desc: "David Ricardo: rent is the payment for the use of the original and indestructible powers of the soil. Crucially, rent is not a reward for productive activity — it is extracted from the surplus created by others. The landowner contributes nothing to production; they simply own what others need to use. Classical economics before neoclassicism recognised rent as parasitic extraction — a view conveniently forgotten when land became the primary vehicle of bourgeois wealth.",
      relates: "Ricardo: rent is extraction — not production"
    },
    {
      id: "rent_extraction_modern", type: "antithesis", color: "#ff6b35",
      label: "Modern\nRent Extraction",
      rx: .66, ry: .18, cluster: "III. Rent & Extraction",
      desc: "Private landlords in England received £63 billion in rental income in 2023 — wealth transferred from tenants who work to landlords who own. In London, average private rents consume over 40% of median earnings. Short-term lets (Airbnb) remove housing from residential supply, driving rents higher. The buy-to-let landlord class is a rentier class in the classical sense: living off the surplus created by others without contributing to production.",
      relates: "63 billion in rent — extracted from those who work"
    },
    {
      id: "rent_control", type: "synthesis", color: "#18c97c",
      label: "Rent Control\n& Social\nLandlord",
      rx: .60, ry: .34, cluster: "III. Rent & Extraction",
      desc: "Rent controls — practised in Vienna, Berlin, New York, and post-war Britain — limit rent extraction and stabilise communities. The Vienna model: 60% of residents in social or cooperative housing, rents at a third of market rate, mixed-income communities, maintained for generations. Not a utopia but a proof that housing policy is a political choice. The synthesis: treat rental income as the socially created value it is and return it to the community.",
      relates: "Vienna: 60% social housing — proof that politics determines housing"
    },

    // IV. The Housing Crisis
    {
      id: "planning_system", type: "thesis", color: "#ff9800",
      label: "The Planning\nSystem",
      rx: .78, ry: .18, cluster: "IV. The Housing Crisis",
      desc: "The 1947 Town and Country Planning Act: development rights nationalised, planning permission required, the community given the right to shape its own built environment. A genuine democratic achievement — preventing speculative development, protecting green space, enabling comprehensive redevelopment of bombed cities. The planning system at its best as collective self-determination over the built environment.",
      relates: "Planning as democratic control of the built environment"
    },
    {
      id: "nimbyism_speculation", type: "antithesis", color: "#ff6b35",
      label: "NIMBYism &\nSpeculation",
      rx: .90, ry: .18, cluster: "IV. The Housing Crisis",
      desc: "The planning system captured by existing homeowners who benefit from housing scarcity — NIMBYism as a politics of asset protection. Developers land-banking: buying planning permissions and sitting on them while values rise rather than building. The green belt as a mechanism for excluding the poor from prosperous areas. The planning system simultaneously blocks necessary housing and fails to prevent speculative development that serves no social need.",
      relates: "Planning captured — used to protect existing owners from competition"
    },
    {
      id: "community_land_trust", type: "synthesis", color: "#18c97c",
      label: "Community\nLand Trusts",
      rx: .84, ry: .34, cluster: "IV. The Housing Crisis",
      desc: "Community Land Trusts permanently remove land from the speculative market: the trust owns the land in perpetuity, residents own their homes, resale prices are controlled to maintain affordability for future generations. Granby Four Streets in Liverpool — Assemble Turner Prize. The East London CLT. Coin Street Community Builders on the South Bank. The synthesis: land returned to the commons through democratic ownership, housing permanently decoupled from speculation.",
      relates: "Land returned to the commons — permanently affordable"
    },

    // V. Public & Social Housing
    {
      id: "council_housing_golden_age", type: "thesis", color: "#ff9800",
      label: "Council\nHousing",
      rx: .18, ry: .62, cluster: "V. Public & Social Housing",
      desc: "At its peak (1979), 42% of British households lived in council housing — built to Parker Morris space standards, with gardens, community facilities, and secure lifetime tenancies. Aneurin Bevan insisted on mixed communities: the working man next to the doctor and the teacher. Council housing was not a safety net for the desperate but a universal service for working people — genuinely good homes at genuinely affordable rents.",
      relates: "Bevan: council housing for everyone — not just the poor"
    },
    {
      id: "right_to_buy_destruction", type: "antithesis", color: "#ff6b35",
      label: "Right to Buy\n& Residualisation",
      rx: .34, ry: .70, cluster: "V. Public & Social Housing",
      desc: "Right to Buy sold the best council housing at up to 70% discount; councils were forbidden from using receipts to build replacements. The remaining stock became residualised — concentrated poverty, stigmatised as housing of last resort. Over two million council homes sold since 1980; around 40% now owned by private landlords renting them back to the council at market rates. The public subsidy that built them transferred to private wealth; the public now pays again in housing benefit.",
      relates: "Public housing sold — then rented back at market rates"
    },
    {
      id: "new_social_housing", type: "synthesis", color: "#18c97c",
      label: "New\nSocial Housing\nProgramme",
      rx: .24, ry: .84, cluster: "V. Public & Social Housing",
      desc: "The synthesis of the housing crisis cannot be a market solution — markets built the crisis. A new social housing programme: councils empowered to borrow and build, housing associations returning to genuine social rents, new garden cities on land compulsorily purchased at existing use value (not speculative hope value). Scotland's Housing Act, Wales's Renting Homes Act — the nations showing the way. Housing as a human right, not an asset class.",
      relates: "Housing as human right — not asset class"
    },

    // VI. Land Reform & Commons
    {
      id: "scottish_land_reform", type: "thesis", color: "#ff9800",
      label: "Scottish\nLand Reform",
      rx: .62, ry: .62, cluster: "VI. Land Reform & Commons",
      desc: "Scotland is one of the most unequal land distributions in the developed world: 432 landowners own half of all private land. The Land Reform Acts (2003, 2016) gave communities the right to buy land when it comes to market, and to buy compulsorily where ownership is causing harm. The Eigg Heritage Trust, the Assynt Crofters — communities taking ownership of the land they live on. The most radical land reform in British history — still not radical enough.",
      relates: "432 owners own half of Scotland — land reform begins"
    },
    {
      id: "land_hoarding", type: "antithesis", color: "#ff6b35",
      label: "Land Hoarding\n& Aristocratic\nWealth",
      rx: .78, ry: .70, cluster: "VI. Land Reform & Commons",
      desc: "The Duke of Buccleuch owns 240,000 acres. The Crown Estate owns 360,000 acres of urban land. The Church of England owns 105,000 acres. The aristocratic land settlement of the Norman Conquest persists into the 21st century — land wealth accumulated through conquest, never redistributed, appreciating automatically as the economy grows around it. Planning permission transforms agricultural land worth £10,000 per acre into development land worth £2 million per acre — the landowner captures this entirely.",
      relates: "The Norman Conquest settlement — unchanged after a thousand years"
    },
    {
      id: "land_commons_future", type: "synthesis", color: "#18c97c",
      label: "Land as\nCommons",
      rx: .70, ry: .84, cluster: "VI. Land Reform & Commons",
      desc: "The synthesis returns to the beginning: land as commons. Not private ownership, not state ownership, but community ownership — democratically governed, permanently affordable, the wealth it generates returned to the community that created it. Community Land Trusts, land value taxation, compulsory purchase at use value, right to buy for communities, urban commons. The Norman settlement is not natural or inevitable — it is a political arrangement, and political arrangements can be changed.",
      relates: "Land to the commons — the original demand, still unanswered"
    }
  ],

  edges: [
    ["land_as_commons",           "enclosure_land"],
    ["enclosure_land",            "land_value_tax"],
    ["housing_as_home",           "housing_financialisation"],
    ["housing_financialisation",  "generation_rent"],
    ["rent_theory",               "rent_extraction_modern"],
    ["rent_extraction_modern",    "rent_control"],
    ["planning_system",           "nimbyism_speculation"],
    ["nimbyism_speculation",      "community_land_trust"],
    ["council_housing_golden_age","right_to_buy_destruction"],
    ["right_to_buy_destruction",  "new_social_housing"],
    ["scottish_land_reform",      "land_hoarding"],
    ["land_hoarding",             "land_commons_future"],
    // Cross-wiring
    ["enclosure_land",            "housing_financialisation"],
    ["housing_financialisation",  "rent_extraction_modern"],
    ["right_to_buy_destruction",  "housing_financialisation"],
    ["generation_rent",           "rent_extraction_modern"],
    ["land_value_tax",            "rent_control"],
    ["community_land_trust",      "land_commons_future"],
    ["new_social_housing",        "rent_control"],
    ["land_commons_future",       "community_land_trust"],
    ["nimbyism_speculation",      "land_hoarding"],
    ["scottish_land_reform",      "land_value_tax"],
    ["council_housing_golden_age","housing_as_home"]
  ]
};

// ══════════════════════════════════════════════════════════
//  XI. HEALTH, PHARMA & THE BODY
// ══════════════════════════════════════════════════════════
DATA.health = {
  label: "Health, Pharma & the Body",
  desc:  "Health is not a commodity — it is a human need and a social product. The NHS was built on this insight. But pharmaceutical capital, austerity, and the mental health crisis produced by capitalism itself are steadily recommodifying care. The body is both a site of exploitation and a site of resistance.",
  accentColor: '#f44336',
  thesisColor: '#f44336',

  clusters: [
    { label: "I. The NHS & Decommodified Care", x: .10,  y: .05 },
    { label: "II. Pharmaceutical Capital",      x: .34,  y: .05 },
    { label: "III. Mental Health & Society",    x: .60,  y: .05 },
    { label: "IV. Public Health & Prevention",  x: .84,  y: .05 },
    { label: "V. Austerity & Health",           x: .28,  y: .54 },
    { label: "VI. Health as Commons",           x: .72,  y: .54 }
  ],

  nodes: [
    // I. NHS
    {
      id: "nhs_founding", type: "thesis", color: "#f44336",
      label: "The NHS:\nHealth\nDecommodified",
      rx: .06, ry: .18, cluster: "I. The NHS & Decommodified Care",
      desc: "Aneurin Bevan's NHS (1948): healthcare free at the point of need, funded from taxation, available to all regardless of ability to pay. The most beloved institution in British public life, consistently rated so in surveys. The NHS is not just a health system but a political statement: some things are too important to be rationed by price. The founding principle — universality — remains radical because it is constantly under attack.",
      relates: "Bevan: the NHS is a statement that health is not a commodity"
    },
    {
      id: "nhs_privatisation", type: "antithesis", color: "#ff6b35",
      label: "Creeping\nPrivatisation",
      rx: .17, ry: .18, cluster: "I. The NHS & Decommodified Care",
      desc: "The Health and Social Care Act (2012) mandated competitive tendering for NHS services — opening the door to private providers. PFI hospitals built at ruinous cost, now consuming clinical budgets in repayments. Virgin Care, Circle Health, SERCO — private companies extracting profit from public health. The NHS remains nominally universal but is progressively hollowed out: underfunded, understaffed, with private providers cherry-picking profitable treatments.",
      relates: "Private profit extracted from public health"
    },
    {
      id: "nhs_defence", type: "synthesis", color: "#18c97c",
      label: "NHS Defence\n& Renewal",
      rx: .115, ry: .34, cluster: "I. The NHS & Decommodified Care",
      desc: "The synthesis: not merely defending the existing NHS but renewing it. Bringing privatised services back in-house, cancelling PFI contracts, integrating social care, expanding mental health provision, addressing the racial health gap, building a genuine public health system that tackles the social determinants of health — housing, poverty, environment. The NHS as the foundation of a broader social right to health.",
      relates: "Not just defend but renew — health as a social right"
    },

    // II. Pharmaceutical Capital
    {
      id: "pharmaceutical_innovation", type: "thesis", color: "#f44336",
      label: "Pharma\nInnovation",
      rx: .28, ry: .18, cluster: "II. Pharmaceutical Capital",
      desc: "Pharmaceutical companies invest in research and development, taking enormous financial risks to bring new medicines to market. The patent system rewards this risk-taking with a temporary monopoly, allowing recovery of R&D costs. The result: genuine medical breakthroughs — antibiotics, antiretrovirals, vaccines, cancer treatments. The thesis of pharmaceutical capital: without profit incentive, innovation dries up.",
      relates: "The innovation argument for pharmaceutical patents"
    },
    {
      id: "pharma_monopoly", type: "antithesis", color: "#ff6b35",
      label: "Pharma\nMonopoly &\nPrice Gouging",
      rx: .40, ry: .18, cluster: "II. Pharmaceutical Capital",
      desc: "Most basic pharmaceutical research is publicly funded — by the NIH, the MRC, university laboratories. Companies then patent the results, charge monopoly prices, and spend more on marketing than on R&D. Insulin, discovered in 1921 with public funding, costs $300 per vial in the US and $30 in Canada. Gilead's Sovaldi, developed with public research, cured hepatitis C — at $1,000 per pill. The innovation is socialised; the profit is privatised.",
      relates: "Public research — private patents — monopoly pricing"
    },
    {
      id: "open_pharma", type: "synthesis", color: "#18c97c",
      label: "Open\nPharmaceuticals\n& Public R&D",
      rx: .34, ry: .34, cluster: "II. Pharmaceutical Capital",
      desc: "The synthesis: publicly fund pharmaceutical research, retain public ownership of resulting patents, license generic production globally. The Medicines Patent Pool — already working for HIV, hepatitis C, and COVID treatments in low-income countries. The WHO's proposed Pandemic Treaty provisions. Mariana Mazzucato: the state takes the risk; the state should take the reward. Generic medicines, open formularies, and public pharmaceutical companies are not utopian — they exist and work.",
      relates: "Public risk — public reward — generic medicines for all"
    },

    // III. Mental Health & Society
    {
      id: "mental_health_social", type: "thesis", color: "#f44336",
      label: "Mental Health\nas Social\nProduct",
      rx: .54, ry: .18, cluster: "III. Mental Health & Society",
      desc: "The social determinants of mental health: poverty, insecurity, unemployment, poor housing, debt, discrimination, isolation, trauma. Depression and anxiety are not biochemical malfunctions independent of social context — they are rational responses to irrational social conditions. The epidemic of mental ill health in neoliberal societies is not a mystery: it is the predictable consequence of insecurity, atomisation, overwork, and the destruction of collective life.",
      relates: "Mental illness as rational response to irrational conditions"
    },
    {
      id: "medicalisation", type: "antithesis", color: "#ff6b35",
      label: "Medicalisation\n& the Pill\nIndustry",
      rx: .66, ry: .18, cluster: "III. Mental Health & Society",
      desc: "The pharmaceutical model of mental health: diagnose individual biochemical disorder, prescribe medication. Antidepressant prescriptions in England: 8.3 million people, 89 million items per year. This is not simply bad medicine — it is ideologically convenient medicine. Treating social problems as individual pathologies removes them from political contestation. The depressed worker needs a pill, not a union. The anxious tenant needs CBT, not secure housing.",
      relates: "Social problems depoliticised as individual pathology"
    },
    {
      id: "social_prescribing", type: "synthesis", color: "#18c97c",
      label: "Social\nPrescribing &\nCollective Care",
      rx: .60, ry: .34, cluster: "III. Mental Health & Society",
      desc: "Social prescribing: GPs referring patients to community activities, arts groups, gardening, volunteering, mutual aid networks rather than (or alongside) medication. The evidence base is strong. The deeper implication: health requires community, connection, meaningful activity, economic security. The synthesis of medicalisation is not anti-medicine but a recognition that health is produced collectively — in communities, not just in consulting rooms.",
      relates: "Health produced in communities — not just consulting rooms"
    },

    // IV. Public Health & Prevention
    {
      id: "public_health_tradition", type: "thesis", color: "#f44336",
      label: "Public Health\nTradition",
      rx: .78, ry: .18, cluster: "IV. Public Health & Prevention",
      desc: "The Victorian public health revolution: clean water, sewers, food standards, vaccination, factory safety legislation. John Snow mapping cholera cases in Soho in 1854. Edwin Chadwick's sanitary movement. The life expectancy gains of the 19th and early 20th centuries came not from medicine but from public health infrastructure — clean water, decent housing, adequate nutrition. Prevention is always more effective and cheaper than cure.",
      relates: "Clean water saved more lives than any medicine"
    },
    {
      id: "commercial_determinants", type: "antithesis", color: "#ff6b35",
      label: "Commercial\nDeterminants\nof Health",
      rx: .90, ry: .18, cluster: "IV. Public Health & Prevention",
      desc: "The tobacco industry's playbook — fund doubt, lobby against regulation, target youth — has been adopted by ultra-processed food, alcohol, gambling, and fossil fuel industries. Ultra-processed food is engineered to be addictive and is disproportionately consumed in deprived communities. Obesity, type 2 diabetes, liver disease, gambling addiction — diseases of commerce, systematically produced by industries that then lobby against the public health measures that would reduce their profits.",
      relates: "Industries that produce disease lobby against the cure"
    },
    {
      id: "health_democracy", type: "synthesis", color: "#18c97c",
      label: "Health\nDemocracy &\nPrevention",
      rx: .84, ry: .34, cluster: "IV. Public Health & Prevention",
      desc: "The synthesis: a genuinely preventive public health system that addresses the social and commercial determinants of health — regulating advertising, taxing harmful products, guaranteeing healthy food and housing, funding community health infrastructure. The Marmot Review: reducing health inequalities requires action on the social gradient — income, education, housing, work. Health democracy: communities shaping the conditions that determine their health.",
      relates: "Marmot: health inequality requires social action — not just medicine"
    },

    // V. Austerity & Health
    {
      id: "health_inequality", type: "thesis", color: "#f44336",
      label: "Health\nInequality",
      rx: .18, ry: .62, cluster: "V. Austerity & Health",
      desc: "In Blackpool, male life expectancy is 74. In Kensington and Chelsea, it is 83. A nine-year gap between the most deprived and most affluent areas of England — and it has widened since 2010. Health inequality is not random: it follows the gradient of income, wealth, housing quality, air quality, and access to services. The postcode lottery of health is capitalism's most visible verdict on its own inequalities.",
      relates: "Nine years of life — stolen by inequality"
    },
    {
      id: "austerity_health", type: "antithesis", color: "#ff6b35",
      label: "Austerity\nKills",
      rx: .34, ry: .70, cluster: "V. Austerity & Health",
      desc: "The BMJ, The Lancet, and Public Health England have all documented the mortality consequences of post-2010 austerity: excess deaths from cuts to social care, NHS underfunding, benefit sanctions, air pollution from delayed environmental regulation. Professor Danny Dorling estimated 120,000 excess deaths attributable to austerity between 2010 and 2017. Austerity is not a neutral fiscal policy — it is a political choice with a body count.",
      relates: "Dorling: 120,000 excess deaths from austerity"
    },
    {
      id: "health_commons", type: "synthesis", color: "#18c97c",
      label: "Health\nas Commons",
      rx: .24, ry: .84, cluster: "V. Austerity & Health",
      desc: "The synthesis: health as a commons — collectively produced, collectively maintained, equally available. The NHS was this insight institutionalised. Its renewal requires extending the logic: social care integrated and publicly funded, mental health treated as seriously as physical health, the social determinants addressed through housing, income, and environmental policy. Health is not an individual achievement or a market product — it is what we make together.",
      relates: "Health as commons — produced and maintained collectively"
    },

    // VI. Health as Commons
    {
      id: "mutual_aid_health", type: "thesis", color: "#f44336",
      label: "Mutual Aid\n& Community\nHealth",
      rx: .62, ry: .62, cluster: "VI. Health as Commons",
      desc: "Before the NHS, mutual aid societies — the Rochdale Infirmary, the miners' medical aid societies of South Wales — provided collective healthcare funded by penny contributions. The Black Panther Party's free breakfast programmes and community health clinics. The COVID-19 mutual aid networks of 2020 — 4,000 groups across the UK providing food, medicine, and companionship within weeks. Collective care as the original social technology, preceding and outlasting every state.",
      relates: "Collective care precedes and outlasts the state"
    },
    {
      id: "health_racism", type: "antithesis", color: "#ff6b35",
      label: "Structural\nRacism &\nHealth",
      rx: .78, ry: .70, cluster: "VI. Health as Commons",
      desc: "Black women in the UK are four times more likely to die in childbirth than white women. COVID-19 killed Black, Asian and minority ethnic people at twice the rate of white people — not through biology but through structural racism: occupational exposure, overcrowded housing, distrust of services rooted in historical mistreatment. The Windrush generation denied NHS care they had paid for and built. Structural racism is a public health crisis that public health rarely names.",
      relates: "Structural racism as public health crisis"
    },
    {
      id: "health_justice", type: "synthesis", color: "#18c97c",
      label: "Health\nJustice",
      rx: .70, ry: .84, cluster: "VI. Health as Commons",
      desc: "Health justice: the convergence of health equity, environmental justice, racial justice, and economic justice. You cannot have health without decent housing, clean air, economic security, freedom from discrimination, and democratic control over the conditions of your life. The synthesis connects the NHS to the housing movement, to the climate movement, to anti-racism, to feminism — recognising that health is produced by the whole of social life, and that justice in health requires justice in everything.",
      relates: "Health justice connects every other struggle"
    }
  ],

  edges: [
    ["nhs_founding",             "nhs_privatisation"],
    ["nhs_privatisation",        "nhs_defence"],
    ["pharmaceutical_innovation","pharma_monopoly"],
    ["pharma_monopoly",          "open_pharma"],
    ["mental_health_social",     "medicalisation"],
    ["medicalisation",           "social_prescribing"],
    ["public_health_tradition",  "commercial_determinants"],
    ["commercial_determinants",  "health_democracy"],
    ["health_inequality",        "austerity_health"],
    ["austerity_health",         "health_commons"],
    ["mutual_aid_health",        "health_racism"],
    ["health_racism",            "health_justice"],
    // Cross-wiring
    ["nhs_privatisation",        "pharma_monopoly"],
    ["austerity_health",         "nhs_privatisation"],
    ["mental_health_social",     "health_inequality"],
    ["medicalisation",           "pharma_monopoly"],
    ["commercial_determinants",  "health_inequality"],
    ["social_prescribing",       "mutual_aid_health"],
    ["health_commons",           "health_justice"],
    ["health_racism",            "health_inequality"],
    ["nhs_defence",              "health_commons"],
    ["open_pharma",              "health_justice"],
    ["mutual_aid_health",        "nhs_founding"]
  ]
};

// ══════════════════════════════════════════════════════════
//  XII. EDUCATION & HUMAN CAPITAL
// ══════════════════════════════════════════════════════════
DATA.education = {
  label: "Education & Human Capital",
  desc:  "Education is contested terrain: between knowledge as commons and knowledge as credential, between education for human development and training for labour markets, between the university as critical institution and the university as corporation. The transformation of education into human capital investment is not progress — it is enclosure.",
  accentColor: '#9c27b0',
  thesisColor: '#9c27b0',

  clusters: [
    { label: "I. Education as Commons",         x: .10,  y: .05 },
    { label: "II. Human Capital Theory",         x: .34,  y: .05 },
    { label: "III. The University",              x: .60,  y: .05 },
    { label: "IV. Schools & Marketisation",      x: .84,  y: .05 },
    { label: "V. Student Debt",                  x: .28,  y: .54 },
    { label: "VI. Popular Education",            x: .72,  y: .54 }
  ],

  nodes: [
    // I. Education as Commons
    {
      id: "education_commons", type: "thesis", color: "#9c27b0",
      label: "Education\nas Commons",
      rx: .06, ry: .18, cluster: "I. Education as Commons",
      desc: "The radical tradition: education as the development of the whole person, the cultivation of critical consciousness, the transmission and transformation of collective knowledge. From the Mechanics' Institutes and the WEA to Dewey's democratic education and Freire's pedagogy of the oppressed — education as a practice of freedom, not a production of compliant workers. Knowledge as a collective inheritance, not a private investment.",
      relates: "Freire: education as a practice of freedom"
    },
    {
      id: "education_enclosure", type: "antithesis", color: "#ff6b35",
      label: "Education\nEnclosed",
      rx: .17, ry: .18, cluster: "I. Education as Commons",
      desc: "The progressive enclosure of education: from free grammar schools to grammar school fees, from free universities to tuition fees, from public libraries to closed academic journals behind paywalls, from the WEA to CPD products sold to employers. Knowledge that was collectively produced and should be collectively available is progressively commodified — access priced, credentials monetised, the education commons enclosed as human capital investment.",
      relates: "The knowledge commons progressively enclosed"
    },
    {
      id: "open_education", type: "synthesis", color: "#18c97c",
      label: "Open\nEducation &\nKnowledge\nCommons",
      rx: .115, ry: .34, cluster: "I. Education as Commons",
      desc: "The synthesis: open access publishing, MIT OpenCourseWare, Khan Academy, Wikipedia, Creative Commons — the knowledge commons reasserting itself through digital technology. Free schools of thought in the Gramscian sense: organic intellectuals emerging from working-class communities. The synthesis demands free education at all levels, open access to all publicly funded research, and the recognition that knowledge is produced collectively and belongs to everyone.",
      relates: "Knowledge produced collectively — belongs to everyone"
    },

    // II. Human Capital Theory
    {
      id: "human_capital", type: "thesis", color: "#9c27b0",
      label: "Human\nCapital Theory",
      rx: .28, ry: .18, cluster: "II. Human Capital Theory",
      desc: "Gary Becker's human capital theory (1964): education is an investment in productive capacity. Workers invest in their own skills to increase their future earnings; employers invest in training to increase productivity. The theory reframes education as a private investment with a private return — justifying tuition fees (you benefit, you pay) and narrowing curricula to market-relevant skills. The human being becomes their own portfolio of productive attributes.",
      relates: "Becker: the human being as their own capital investment"
    },
    {
      id: "credential_inflation", type: "antithesis", color: "#ff6b35",
      label: "Credential\nInflation &\nSkills Gap Myth",
      rx: .40, ry: .18, cluster: "II. Human Capital Theory",
      desc: "If human capital theory were correct, more education would reduce inequality as workers invested in higher skills. Instead: credential inflation (jobs that once required GCSEs now require degrees, with no change in the actual work), a skills gap that is actually a wages gap (employers want skills without paying for them), and a graduate labour market where millions of graduates work in non-graduate jobs while carrying student debt. The theory legitimises inequality it claims to dissolve.",
      relates: "Human capital theory legitimises the inequality it claims to solve"
    },
    {
      id: "education_equality", type: "synthesis", color: "#18c97c",
      label: "Education\nfor Equality",
      rx: .34, ry: .34, cluster: "II. Human Capital Theory",
      desc: "The synthesis: education policy oriented not toward producing human capital but toward producing equality. Comprehensive schools, free universities, well-paid teachers, small classes, rich curricula including arts, sport, and civic education — the conditions under which all children can flourish, not just those whose parents can pay. Finland's education system: no private schools, no league tables, high teacher autonomy, high attainment. Equality of outcome, not merely opportunity.",
      relates: "Finland: no private schools — high attainment — proof"
    },

    // III. The University
    {
      id: "university_tradition", type: "thesis", color: "#9c27b0",
      label: "The Critical\nUniversity",
      rx: .54, ry: .18, cluster: "III. The University",
      desc: "The university as a space apart from the immediate demands of the market: where knowledge is pursued for its own sake, where received ideas are subjected to critical scrutiny, where students are initiated into communities of inquiry rather than trained for specific jobs. Newman's idea of a university. Humboldt's research university. The ideal of academic freedom — the right to pursue truth wherever it leads, regardless of its utility or its comfort to power.",
      relates: "Academic freedom — truth regardless of utility"
    },
    {
      id: "university_corporation", type: "antithesis", color: "#ff6b35",
      label: "The University\nas Corporation",
      rx: .66, ry: .18, cluster: "III. The University",
      desc: "Since 1988, British universities have been progressively transformed into corporations competing for students (now customers), research income, and league table positions. Vice chancellors paid more than the Prime Minister. Casualised academic labour: 68% of teaching in UK universities done by staff on insecure contracts. International students as revenue stream. Research assessed by impact and income rather than significance. The critical university hollowed into a credential factory.",
      relates: "68% of teaching on insecure contracts — the university proletariat"
    },
    {
      id: "university_commons", type: "synthesis", color: "#18c97c",
      label: "University\nas Commons",
      rx: .60, ry: .34, cluster: "III. The University",
      desc: "The synthesis: the university returned to public purpose. Abolish tuition fees, restore maintenance grants, end the research excellence framework, reverse casualisation, democratise governance — students, staff and communities on boards. Open access for all publicly funded research. The university as a public institution embedded in its region, contributing to community wealth, training the teachers and doctors and engineers a society needs, and producing the critical thought a democracy requires.",
      relates: "The university embedded in community — not extracting from it"
    },

    // IV. Schools & Marketisation
    {
      id: "comprehensive_ideal", type: "thesis", color: "#9c27b0",
      label: "The\nComprehensive\nIdeal",
      rx: .78, ry: .18, cluster: "IV. Schools & Marketisation",
      desc: "The comprehensive school: every child in the neighbourhood attending the same school, regardless of ability, class, or religion. The ideal of a school as a community institution — reflecting and building the mixed society around it. Where comprehensives succeeded, they produced better outcomes for all pupils, particularly those from disadvantaged backgrounds. Selection benefits the already-advantaged and entrenches inequality.",
      relates: "The comprehensive as community institution"
    },
    {
      id: "academy_free_school", type: "antithesis", color: "#ff6b35",
      label: "Academies,\nFree Schools &\nMarketisation",
      rx: .90, ry: .18, cluster: "IV. Schools & Marketisation",
      desc: "Academies removed from local authority control, governed by chains run like businesses. Free schools funded by the state but run by religious organisations, private companies, and parent groups — fragmenting the school system and enabling selective intake by stealth. Ofsted as market discipline. League tables forcing schools to game metrics rather than educate. The comprehensive ideal replaced by a market in schools that serves middle-class parents who can navigate it.",
      relates: "The school market — navigable only if you know how"
    },
    {
      id: "school_democracy", type: "synthesis", color: "#18c97c",
      label: "Democratic\nLocal Schools",
      rx: .84, ry: .34, cluster: "IV. Schools & Marketisation",
      desc: "The synthesis: schools returned to democratic local governance, accountable to their communities. Abolish academisation, bring free schools back into the local authority family, end Ofsted's punitive inspection regime, fund schools equitably rather than through pupil premium sticking plasters, pay teachers properly. A school system oriented toward every child's flourishing — not toward league table performance or market share.",
      relates: "Schools accountable to communities — not to markets"
    },

    // V. Student Debt
    {
      id: "free_higher_education", type: "thesis", color: "#9c27b0",
      label: "Free Higher\nEducation",
      rx: .18, ry: .62, cluster: "V. Student Debt",
      desc: "Until 1998, higher education in the UK was free, with maintenance grants for living costs. The argument: higher education is a public good — it benefits the whole society, not just the individual graduate. Publicly funded universities produced the doctors, teachers, engineers, and researchers that a society requires. Taxing the graduate cohort through income tax is more progressive and more efficient than front-loading individual debt.",
      relates: "Higher education as public good — funded publicly"
    },
    {
      id: "tuition_fees", type: "antithesis", color: "#ff6b35",
      label: "Tuition Fees\n& Student\nDebt",
      rx: .34, ry: .70, cluster: "V. Student Debt",
      desc: "From £1,000 (1998) to £3,000 (2006) to £9,000 (2012) to £9,250 (2017) — tuition fees transformed higher education from a public good into a private investment with a private price tag. Average student debt in England: £45,000. The Augar Review found the system regressive: low-earning graduates pay more than high earners because interest compounds before they can repay. The graduate tax is more regressive than income tax — and produces the same revenue.",
      relates: "Average student debt: £45,000 — for a public good"
    },
    {
      id: "debt_free_education", type: "synthesis", color: "#18c97c",
      label: "Debt-Free\nEducation",
      rx: .24, ry: .84, cluster: "V. Student Debt",
      desc: "The synthesis: abolish tuition fees, restore maintenance grants, cancel existing student debt. Scotland's model: free tuition at Scottish universities. Germany: free university education including for international students. Norway, Finland, Denmark — free higher education as normal. The objection that we cannot afford it fails the MMT test: the real question is not money but resources — do we have enough universities, academics, and students? We do.",
      relates: "Scotland, Germany, Finland — free universities exist and work"
    },

    // VI. Popular Education
    {
      id: "popular_education_tradition", type: "thesis", color: "#9c27b0",
      label: "Popular\nEducation\nTradition",
      rx: .62, ry: .62, cluster: "VI. Popular Education",
      desc: "The tradition of learning outside formal institutions: the Chartists' reading rooms, the Mechanics' Institutes, the WEA tutorials in trade union halls, the Co-operative College, Ruskin College Oxford (founded for trade union students), the folk high schools of Scandinavia, Highlander Folk School where Rosa Parks and Martin Luther King studied. Education by and for working people, oriented toward understanding and changing the world rather than credentialling for the market.",
      relates: "WEA, Ruskin, Highlander — education that changed the world"
    },
    {
      id: "education_commodified", type: "antithesis", color: "#ff6b35",
      label: "CPD,\nCredentialism\n& the Learning\nMarket",
      rx: .78, ry: .70, cluster: "VI. Popular Education",
      desc: "The WEA is now a commercial training provider competing for government contracts. Continuing Professional Development is a private market of certificates, badges, and LinkedIn endorsements — knowledge as commodity, learning as consumption. The Open University, founded as accessible higher education for working people, charges full tuition fees. The popular education tradition survives in fragments — but the institutions that sustained it have been colonised by the market logic they once resisted.",
      relates: "Popular education institutions colonised by market logic"
    },
    {
      id: "education_liberation", type: "synthesis", color: "#18c97c",
      label: "Freirean\nLiberation\nPedagogy",
      rx: .70, ry: .84, cluster: "VI. Popular Education",
      desc: "Paulo Freire's Pedagogy of the Oppressed: the banking model of education deposits knowledge into passive students; liberation pedagogy starts from the lived experience of learners and develops critical consciousness of the structures that shape their lives. Not education for adjustment to the existing order, but education for its transformation. The synthesis lives wherever working people gather to understand and change their world — in trade union education, community organising, and every conversation like this one.",
      relates: "Freire: every conversation that builds critical consciousness is education"
    }
  ],

  edges: [
    ["education_commons",          "education_enclosure"],
    ["education_enclosure",        "open_education"],
    ["human_capital",              "credential_inflation"],
    ["credential_inflation",       "education_equality"],
    ["university_tradition",       "university_corporation"],
    ["university_corporation",     "university_commons"],
    ["comprehensive_ideal",        "academy_free_school"],
    ["academy_free_school",        "school_democracy"],
    ["free_higher_education",      "tuition_fees"],
    ["tuition_fees",               "debt_free_education"],
    ["popular_education_tradition","education_commodified"],
    ["education_commodified",      "education_liberation"],
    // Cross-wiring
    ["human_capital",              "tuition_fees"],
    ["university_corporation",     "credential_inflation"],
    ["education_enclosure",        "tuition_fees"],
    ["popular_education_tradition","education_commons"],
    ["education_liberation",       "open_education"],
    ["school_democracy",           "education_equality"],
    ["university_commons",         "open_education"],
    ["debt_free_education",        "education_equality"],
    ["academy_free_school",        "credential_inflation"],
    ["education_liberation",       "education_commons"]
  ]
};

// ══════════════════════════════════════════════════════════
//  XIII. WAR & THE MILITARY INDUSTRIAL COMPLEX
// ══════════════════════════════════════════════════════════
DATA.war = {
  label: "War & the Military Industrial Complex",
  desc:  "War is not a breakdown of the international system — it is its normal operation. The military industrial complex profits from conflict it helps create. Arms exports arm the regimes we then condemn. NATO expansion generates the instability it claims to prevent. And the peace movement — from No More War to Stop the War — represents the permanent refusal of those who die in wars to accept their necessity.",
  accentColor: '#607d8b',
  thesisColor: '#607d8b',

  clusters: [
    { label: "I. War & Capital",                 x: .10,  y: .05 },
    { label: "II. The Arms Industry",            x: .34,  y: .05 },
    { label: "III. NATO & Imperial Security",    x: .60,  y: .05 },
    { label: "IV. Proxy Wars & Resource Conflict",x: .84, y: .05 },
    { label: "V. The Peace Movement",            x: .28,  y: .54 },
    { label: "VI. War & Democracy",              x: .72,  y: .54 }
  ],

  nodes: [
    // I. War & Capital
    {
      id: "war_as_policy", type: "thesis", color: "#607d8b",
      label: "War as\nState Policy",
      rx: .06, ry: .18, cluster: "I. War & Capital",
      desc: "Clausewitz: war is the continuation of politics by other means. States use military force to pursue national interests — access to resources, markets, territory, strategic position. The First World War was a war between imperial powers for global dominance; the Second followed the Great Depression and the collapse of the liberal international order. War is not an aberration of normal international relations — it is an instrument of them.",
      relates: "Clausewitz: war as the continuation of politics"
    },
    {
      id: "war_economy", type: "antithesis", color: "#ff6b35",
      label: "Permanent\nWar Economy",
      rx: .17, ry: .18, cluster: "I. War & Capital",
      desc: "Eisenhower's farewell address (1961): beware the military-industrial complex. Defence spending in the US: $886 billion in 2023 — more than the next ten countries combined. The permanent war economy: military spending as Keynesian stimulus without the redistribution, maintaining employment in arms-producing constituencies, generating demand for the financial sector through government borrowing. War is good business — and the business of war requires war.",
      relates: "Eisenhower's warning — still unheeded"
    },
    {
      id: "peace_dividend_lost", type: "synthesis", color: "#18c97c",
      label: "The Peace\nDividend\nNever Came",
      rx: .115, ry: .34, cluster: "I. War & Capital",
      desc: "The end of the Cold War promised a peace dividend: military spending redirected to social investment. It never materialised. NATO expanded eastward, new enemies were found, the War on Terror generated a new permanent emergency. The synthesis: the permanent war economy requires permanent enemies. The question is not how to win the current war but why the system requires that there always be one — and whose interests that serves.",
      relates: "New enemies found — the peace dividend redirected to arms"
    },

    // II. The Arms Industry
    {
      id: "arms_industry", type: "thesis", color: "#607d8b",
      label: "The Arms\nIndustry",
      rx: .28, ry: .18, cluster: "II. The Arms Industry",
      desc: "BAE Systems, Lockheed Martin, Raytheon, Boeing Defence, Thales — the five largest arms companies had combined revenues of $166 billion in 2022. Weapons systems of extraordinary sophistication: stealth aircraft, precision guided munitions, autonomous drones, hypersonic missiles. The arms industry employs hundreds of thousands, funds think tanks and universities, and holds enormous political leverage in constituencies that depend on defence contracts.",
      relates: "The five largest arms companies — $166 billion in revenue"
    },
    {
      id: "arms_exports", type: "antithesis", color: "#ff6b35",
      label: "Arms Exports\n& Complicity",
      rx: .40, ry: .18, cluster: "II. The Arms Industry",
      desc: "The UK sold £23 billion of arms to Saudi Arabia between 2015 and 2023 — used in Yemen, producing the world's worst humanitarian catastrophe. British-made bombs on Yemeni hospitals. American weapons in Gaza. French arms in Libya. The government condemns human rights abuses with one hand and signs export licences with the other. Arms export policy reveals the gap between stated values and actual interests with particular clarity.",
      relates: "British bombs on Yemeni hospitals — arms exports reveal real values"
    },
    {
      id: "arms_conversion", type: "synthesis", color: "#18c97c",
      label: "Arms\nConversion &\nPeace Economy",
      rx: .34, ry: .34, cluster: "II. The Arms Industry",
      desc: "The Lucas Aerospace Alternative Corporate Plan (1976): workers at Lucas Aerospace, facing redundancy, drew up their own plan to convert military production to socially useful products — medical equipment, renewable energy technology, hybrid vehicles. A workers' plan for a peace economy. The synthesis: arms industry workers have the skills to build the green economy; the question is political will to redirect their labour from destruction to construction.",
      relates: "Lucas Plan: arms workers plan their own conversion to useful production"
    },

    // III. NATO & Imperial Security
    {
      id: "nato_founding", type: "thesis", color: "#607d8b",
      label: "NATO &\nCollective\nSecurity",
      rx: .54, ry: .18, cluster: "III. NATO & Imperial Security",
      desc: "NATO was founded in 1949 as a collective defence alliance: an attack on one is an attack on all. In its original conception, a defensive arrangement against Soviet expansionism, providing the security umbrella under which Western European social democracy could develop. The argument: collective security reduces the risk of war by raising the cost of aggression. Small states can shelter behind the alliance rather than maintaining costly independent militaries.",
      relates: "Collective defence — the founding argument"
    },
    {
      id: "nato_expansion", type: "antithesis", color: "#ff6b35",
      label: "NATO\nExpansion &\nProvocation",
      rx: .66, ry: .18, cluster: "III. NATO & Imperial Security",
      desc: "George Kennan in 1997: NATO expansion is a tragic mistake that will inflame Russian nationalism and produce a new Cold War. James Baker promised Gorbachev that NATO would not expand one inch eastward; it expanded through fourteen countries to Russia's border. NATO is not merely a defensive alliance — it is the military arm of Western hegemony, intervening in Yugoslavia, Afghanistan, Libya. The contradiction: an alliance designed to prevent war that generates the conditions for it.",
      relates: "Kennan's 1997 warning — ignored until too late"
    },
    {
      id: "common_security", type: "synthesis", color: "#18c97c",
      label: "Common\nSecurity &\nDisarmament",
      rx: .60, ry: .34, cluster: "III. NATO & Imperial Security",
      desc: "The Palme Commission's common security doctrine (1982): security cannot be achieved against adversaries but only with them. Mutual vulnerability requires mutual negotiation, not unilateral advantage. The synthesis: arms control treaties, nuclear disarmament, regional security architectures that include rather than exclude potential adversaries, and the recognition that military spending is always a diversion from the social investment that produces genuine security — health, housing, education, climate.",
      relates: "Palme: security with adversaries — not against them"
    },

    // IV. Proxy Wars & Resource Conflict
    {
      id: "resource_war", type: "thesis", color: "#607d8b",
      label: "Resource\nWars",
      rx: .78, ry: .18, cluster: "IV. Proxy Wars & Resource Conflict",
      desc: "The Gulf War (1991): oil. Iraq (2003): oil and regional dominance. Libya (2011): oil and Gaddafi's pan-African currency proposal. The Democratic Republic of Congo: cobalt, coltan, gold — a country rich in resources that has been in a state of war for thirty years, with Western mining companies operating throughout. War is rarely about what it says it is about — and the resources beneath the battlefield are rarely coincidental.",
      relates: "Follow the resources — follow the real causes of war"
    },
    {
      id: "proxy_war", type: "antithesis", color: "#ff6b35",
      label: "Proxy Wars\n& Imperial\nCompetition",
      rx: .90, ry: .18, cluster: "IV. Proxy Wars & Resource Conflict",
      desc: "Cold War proxy conflicts from Korea to Vietnam to Angola to Nicaragua — great power competition fought in the bodies of small nations. The War on Terror: a global counterinsurgency generating the jihadism it claimed to combat, destabilising Iraq, Syria, Libya, Yemen, and the Sahel while providing a permanent justification for military spending and domestic surveillance. Ukraine as the proxy battlefield of NATO-Russia rivalry. The populations of proxy war states die for interests that are not their own.",
      relates: "Proxy wars — small nations die for great power interests"
    },
    {
      id: "international_law", type: "synthesis", color: "#18c97c",
      label: "International\nLaw &\nAccountability",
      rx: .84, ry: .34, cluster: "IV. Proxy Wars & Resource Conflict",
      desc: "The International Criminal Court, the ICJ, the UN Charter prohibition on aggressive war — imperfect but real frameworks for subjecting state violence to legal accountability. The ICJ ruling on Gaza. The ICC indictment of Putin. The synthesis: not pacifism but the rule of international law applied consistently — to all states including powerful ones. The contradiction is that the states most committed to the international rules-based order are also most likely to break its rules.",
      relates: "International law applied consistently — including to the powerful"
    },

    // V. The Peace Movement
    {
      id: "anti_war_tradition", type: "thesis", color: "#607d8b",
      label: "The Anti-War\nTradition",
      rx: .18, ry: .62, cluster: "V. The Peace Movement",
      desc: "The oldest internationalist tradition: from the anti-war socialists of 1914 (Keir Hardie, Rosa Luxemburg, Eugene Debs) to the Campaign for Nuclear Disarmament (1957), the Vietnam War movement, the two million who marched against the Iraq War in February 2003. The consistent argument: working-class soldiers die in wars fought for ruling-class interests. No war but the class war. The peace movement as the permanent refusal of those who die in wars to accept their necessity.",
      relates: "Two million marched — and were ignored — in 2003"
    },
    {
      id: "peace_movement_limits", type: "antithesis", color: "#ff6b35",
      label: "The Limits\nof the Peace\nMovement",
      rx: .34, ry: .70, cluster: "V. The Peace Movement",
      desc: "The Iraq War proceeded despite the largest protest in British history. CND failed to achieve nuclear disarmament. The peace movement's limit: moral witness without political power. The deeper tension: pacifism and anti-imperialism can conflict — what is the correct response to fascism, to genocide, to colonial occupation? The peace movement is internally divided between absolute pacifism and selective support for wars of liberation, a tension that armed states exploit.",
      relates: "The largest protest in history — and the war proceeded"
    },
    {
      id: "peace_building", type: "synthesis", color: "#18c97c",
      label: "Peace\nBuilding &\nConflict\nResolution",
      rx: .24, ry: .84, cluster: "V. The Peace Movement",
      desc: "The synthesis: not merely opposing wars but building the conditions for peace. The Good Friday Agreement — thirty years of conflict ended through patient negotiation. Truth and reconciliation commissions. Conflict resolution as a political skill. The recognition that wars end in negotiation and that the sooner negotiations begin the fewer die. And the deeper argument: address the social conditions — poverty, inequality, resource competition, climate displacement — that generate conflict.",
      relates: "Peace is built — not just wished for"
    },

    // VI. War & Democracy
    {
      id: "democratic_peace", type: "thesis", color: "#607d8b",
      label: "The\nDemocratic\nPeace Theory",
      rx: .62, ry: .62, cluster: "VI. War & Democracy",
      desc: "Democratic Peace Theory: liberal democracies do not go to war with each other. Kant's Perpetual Peace — republican constitutions, cosmopolitan law, and free trade as the conditions for lasting peace. The empirical claim has some support: established liberal democracies rarely fight each other directly. The implication drawn: spread democracy and you spread peace. The flaw: the theory does not hold for wars against non-democracies, of which liberal democracies have fought very many.",
      relates: "Democracies peace with each other — war on everyone else"
    },
    {
      id: "war_propaganda", type: "antithesis", color: "#ff6b35",
      label: "War\nPropaganda &\nManufactured\nConsent",
      rx: .78, ry: .70, cluster: "VI. War & Democracy",
      desc: "Chomsky and Herman's Manufacturing Consent: the corporate media system filters war coverage to serve elite interests — embedding journalists, amplifying official narratives, marginalising dissent. Iraqi weapons of mass destruction that did not exist. The Kuwaiti incubator babies that were fabricated. The Gulf of Tonkin incident that was falsified. Each war requires its propaganda moment — the atrocity, real or invented, that provides the necessary emotional justification for military action.",
      relates: "Chomsky: manufacturing consent for wars that serve elite interests"
    },
    {
      id: "war_accountability", type: "synthesis", color: "#18c97c",
      label: "War\nAccountability\n& Media\nFreedom",
      rx: .70, ry: .84, cluster: "VI. War & Democracy",
      desc: "The synthesis: genuine democratic accountability for war. Parliamentary votes with real consequences (not whipped). Independent war powers legislation. Journalism that reports from all sides. Whistleblower protection — Chelsea Manning, Julian Assange, Daniel Ellsberg served truth and were prosecuted for it. An informed public that can hold governments accountable for the wars fought in their name requires a free press, an educated citizenry, and the courage to hear uncomfortable truths.",
      relates: "Whistleblowers serve truth — governments prosecute them for it"
    }
  ],

  edges: [
    ["war_as_policy",          "war_economy"],
    ["war_economy",            "peace_dividend_lost"],
    ["arms_industry",          "arms_exports"],
    ["arms_exports",           "arms_conversion"],
    ["nato_founding",          "nato_expansion"],
    ["nato_expansion",         "common_security"],
    ["resource_war",           "proxy_war"],
    ["proxy_war",              "international_law"],
    ["anti_war_tradition",     "peace_movement_limits"],
    ["peace_movement_limits",  "peace_building"],
    ["democratic_peace",       "war_propaganda"],
    ["war_propaganda",         "war_accountability"],
    // Cross-wiring
    ["war_economy",            "arms_industry"],
    ["arms_exports",           "proxy_war"],
    ["arms_exports",           "resource_war"],
    ["nato_expansion",         "proxy_war"],
    ["peace_dividend_lost",    "arms_industry"],
    ["anti_war_tradition",     "arms_conversion"],
    ["war_propaganda",         "peace_movement_limits"],
    ["international_law",      "war_accountability"],
    ["common_security",        "peace_building"],
    ["resource_war",           "war_economy"],
    ["war_accountability",     "anti_war_tradition"]
  ]
};

// ══════════════════════════════════════════════════════════
//  XIV. RELIGION & LIBERATION THEOLOGY
// ══════════════════════════════════════════════════════════
DATA.religion = {
  label: "Religion & Liberation Theology",
  desc:  "Religion is contradictory terrain: Althusser's ideological state apparatus, but also the base communities of liberation theology; the nonconformist chapel that produced both the co-operative movement and reactionary temperance politics; Christian nationalism that serves power, and Oscar Romero who died opposing it. The question is always: which side is God on — and who gets to say?",
  accentColor: '#795548',
  thesisColor: '#795548',

  clusters: [
    { label: "I. Religion as Ideology",          x: .10,  y: .05 },
    { label: "II. Nonconformism & Radical Politics", x: .34, y: .05 },
    { label: "III. Liberation Theology",         x: .60,  y: .05 },
    { label: "IV. Christian Nationalism",        x: .84,  y: .05 },
    { label: "V. Secularism & the Sacred",       x: .28,  y: .54 },
    { label: "VI. Spiritual Commons",            x: .72,  y: .54 }
  ],

  nodes: [
    // I. Religion as Ideology
    {
      id: "opium_of_people", type: "thesis", color: "#795548",
      label: "Religion\nas Ideology",
      rx: .06, ry: .18, cluster: "I. Religion as Ideology",
      desc: "Marx: religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people — not as dismissal, but as diagnosis. Religion offers consolation for suffering it does not challenge; it promises justice in the next world to those denied it in this one; it legitimates existing hierarchies as divinely ordained. The church that tells the poor to be content with their poverty while blessing the rich is doing ideological work for the ruling class.",
      relates: "Marx: religion as consolation — and as legitimation of power"
    },
    {
      id: "church_state", type: "antithesis", color: "#ff6b35",
      label: "Church &\nState Power",
      rx: .17, ry: .18, cluster: "I. Religion as Ideology",
      desc: "The Established Church as ideological state apparatus: the Church of England with its bishops in the House of Lords, its role in the coronation ceremony, its schools. The Catholic Church's alliance with Franco, Pinochet, and Salazar. Evangelical Christianity's alignment with Trumpism. When the church blesses the existing order, it performs the precise function Marx described — but the ideological function is not inherent to religion; it is a political choice made by religious institutions.",
      relates: "Bishops in the Lords — the church as pillar of the establishment"
    },
    {
      id: "prophetic_tradition", type: "synthesis", color: "#18c97c",
      label: "The Prophetic\nTradition",
      rx: .115, ry: .34, cluster: "I. Religion as Ideology",
      desc: "But Marx's own text continues: religion is the expression of real distress and a protest against real distress. The prophetic tradition within religion — Amos denouncing those who sell the poor for silver, Jesus overturning the money changers' tables, the Diggers reading the Bible as a manifesto for common land. The same tradition that produced the Peasants' Revolt, the Levellers, the abolitionist movement, the civil rights movement, liberation theology. Religion as protest — not just consolation.",
      relates: "The same Bible that justified slavery abolished it"
    },

    // II. Nonconformism & Radical Politics
    {
      id: "nonconformism", type: "thesis", color: "#795548",
      label: "Nonconformism\n& Dissent",
      rx: .28, ry: .18, cluster: "II. Nonconformism & Radical Politics",
      desc: "The free churches of the industrial North — Methodist, Baptist, Congregationalist, Quaker — were not the Established Church. They grew from below, in communities of working people, and carried a democratic polity: congregational governance, lay preachers, the priesthood of all believers. The nonconformist chapel produced the co-operative movement, the early trade unions, the Labour Party, and some of the most significant working-class intellectual life of the 19th century. A school of collective self-governance.",
      relates: "The chapel as school of collective self-governance"
    },
    {
      id: "nonconformism_limits", type: "antithesis", color: "#ff6b35",
      label: "Temperance,\nRespectability\n& Social Control",
      rx: .40, ry: .18, cluster: "II. Nonconformism & Radical Politics",
      desc: "The same nonconformist tradition that produced the Co-op produced the temperance movement — which allied with mill owners against the pub, demanding sobriety from workers who sought pleasure and solidarity in the alehouse. Respectability politics: the aspiration to middle-class morality as a condition of political recognition. The chapel could discipline as well as liberate, imposing a code of personal conduct that served capital's interest in a sober, punctual, productive workforce.",
      relates: "The chapel that liberated also disciplined"
    },
    {
      id: "radical_christianity", type: "synthesis", color: "#18c97c",
      label: "Radical\nChristianity &\nSocial Gospel",
      rx: .34, ry: .34, cluster: "II. Nonconformism & Radical Politics",
      desc: "The Social Gospel movement: R.H. Tawney's Religion and the Rise of Capitalism, William Temple's Christianity and Social Order (1942) — the blueprint for the welfare state. Keir Hardie's Christian socialism. The Methodist roots of early Labour. The synthesis: a Christianity that took the Sermon on the Mount seriously as social programme — blessed are the poor, the meek shall inherit the earth — and drew radical political consequences from it. Faith as praxis.",
      relates: "Tawney, Temple, Hardie — Christianity as social programme"
    },

    // III. Liberation Theology
    {
      id: "liberation_theology", type: "thesis", color: "#795548",
      label: "Liberation\nTheology",
      rx: .54, ry: .18, cluster: "III. Liberation Theology",
      desc: "Gustavo Gutierrez, Leonardo Boff, Jon Sobrino — the theologians of the Latin American poor who declared the preferential option for the poor: God is on the side of the poor, and the church must be too. Base communities (comunidades de base): small groups of poor Catholics reading the Bible together, connecting scripture to their conditions of life, developing political consciousness and collective action. A grassroots religious movement that threatened the alliance of church and elite power.",
      relates: "Gutierrez: the preferential option for the poor"
    },
    {
      id: "romero", type: "antithesis", color: "#ff6b35",
      label: "Oscar Romero\n& the Martyrs",
      rx: .66, ry: .18, cluster: "III. Liberation Theology",
      desc: "Archbishop Oscar Romero of El Salvador, assassinated at the altar in 1980 by a death squad linked to Roberto D'Aubuisson, trained at the US School of the Americas. The Jesuit martyrs of El Salvador, 1989. Dorothy Day. Steve Biko. The liberation theologians and their communities were targeted precisely because they were effective — connecting religious consciousness to political organisation in communities the state could not otherwise reach.",
      relates: "Romero: shot at the altar for preaching the Gospel to the poor"
    },
    {
      id: "base_communities", type: "synthesis", color: "#18c97c",
      label: "Base\nCommunities\n& Praxis",
      rx: .60, ry: .34, cluster: "III. Liberation Theology",
      desc: "The base community model: small, self-governing communities of practice that combine spiritual life with political education and collective action. The synthesis of liberation theology is not a doctrine but a method — what Freire called praxis, the dialectical unity of reflection and action. The base community reads scripture, analyses its conditions, and acts collectively. The same method as the WEA tutorial class, the trade union branch meeting, the co-operative general meeting.",
      relates: "Praxis: reflection and action — the method of liberation"
    },

    // IV. Christian Nationalism
    {
      id: "christian_nationalism", type: "thesis", color: "#795548",
      label: "Christian\nNationalism",
      rx: .78, ry: .18, cluster: "IV. Christian Nationalism",
      desc: "The fusion of Christianity and nationalist politics: America as a Christian nation, the Bible as the source of law and policy, Christian identity as the basis of citizenship. From the Moral Majority to the Christian Right to MAGA Christianity — a political movement that uses religious language and imagery to mobilise white cultural anxiety against pluralism, secularism, and demographic change. The cross and the flag as interchangeable symbols.",
      relates: "Christianity as identity politics for the threatened majority"
    },
    {
      id: "religious_right_politics", type: "antithesis", color: "#ff6b35",
      label: "Religious\nRight &\nElite Capture",
      rx: .90, ry: .18, cluster: "IV. Christian Nationalism",
      desc: "The religious right was constructed as a political project by Republican strategists in the 1970s — galvanised initially not by abortion (a Catholic concern) but by the IRS's threat to remove tax exemptions from segregated Christian academies. Abortion, gay rights, and school prayer were added as mobilising issues. The rank and file are genuine believers; the leadership uses religious mobilisation to deliver votes for an economic programme — tax cuts for the rich, deregulation, union-busting — that serves capital, not Christianity.",
      relates: "Religious mobilisation in service of economic conservatism"
    },
    {
      id: "religious_pluralism", type: "synthesis", color: "#18c97c",
      label: "Religious\nPluralism &\nSocial Justice",
      rx: .84, ry: .34, cluster: "IV. Christian Nationalism",
      desc: "The synthesis of Christian nationalism is not secularism but religious pluralism as the condition of genuine faith. The interfaith movement — Jewish, Muslim, Christian, Hindu, secular — working together on climate, housing, refugees, poverty. The faith traditions that take seriously their obligations to the stranger, the poor, and the earth against those that use religion as tribal identity. The question is always whether faith is directed outward in solidarity or inward in self-protection.",
      relates: "Faith directed outward in solidarity — not inward in self-protection"
    },

    // V. Secularism & the Sacred
    {
      id: "secular_humanism", type: "thesis", color: "#795548",
      label: "Secular\nHumanism",
      rx: .18, ry: .62, cluster: "V. Secularism & the Sacred",
      desc: "The Enlightenment project: reason over revelation, science over scripture, human authority over divine command. The secularisation of political life — church and state separated, religious belief privatised, public life conducted in a shared rational language available to all regardless of faith. The achievements are real: the end of theocracy, the protection of non-believers, the development of secular ethics and human rights. The limit: secular rationalism can be as totalising and as blind to its own assumptions as any religion.",
      relates: "The Enlightenment separation of church and state — real achievement"
    },
    {
      id: "secular_fundamentalism", type: "antithesis", color: "#ff6b35",
      label: "Secular\nFundamentalism\n& the Sacred\nDismissed",
      rx: .34, ry: .70, cluster: "V. Secularism & the Sacred",
      desc: "New Atheism's dismissal of religion as simple delusion — Dawkins, Hitchens, Harris — fails to engage with what religion actually does in human life and communities: provides meaning, community, ritual, ethical framework, and motivation for action. The French laicite that bans religious symbols in schools treats religion as purely private in a way that is itself a political imposition. Secular progressives who cannot speak the language of faith cannot reach the communities where faith is lived.",
      relates: "Secular progressives who cannot speak the language of faith"
    },
    {
      id: "sacred_commons", type: "synthesis", color: "#18c97c",
      label: "The Sacred\nas Commons",
      rx: .24, ry: .84, cluster: "V. Secularism & the Sacred",
      desc: "The synthesis: the sacred as commons — those dimensions of human experience that are not reducible to market value or individual preference: beauty, meaning, community, solidarity, care for the dead, hope for the unborn. These are produced and sustained collectively, in religious and secular forms alike. The brass band concert is sacred. The allotment is sacred. The general meeting of the co-operative is sacred. The question is not whether we have sacred spaces but how we govern them — and for whom.",
      relates: "The sacred as what we hold in common — beyond market value"
    },

    // VI. Spiritual Commons
    {
      id: "religious_mutual_aid", type: "thesis", color: "#795548",
      label: "Religious\nMutual Aid",
      rx: .62, ry: .62, cluster: "VI. Spiritual Commons",
      desc: "Before the welfare state, religious institutions provided most social welfare: the church poorbox, the chapel sick fund, the Quaker prison reform movement, Jewish mutual aid societies, Islamic zakat and waqf (endowed charitable trusts). Many still do: food banks, night shelters, debt advice, refugee support — overwhelmingly run by faith communities. The critique of austerity is most viscerally experienced in the food bank queue, and it is largely faith communities witnessing it.",
      relates: "Faith communities witnessing austerity from the food bank queue"
    },
    {
      id: "religion_capitalism", type: "antithesis", color: "#ff6b35",
      label: "Prosperity\nGospel &\nReligious\nCapitalism",
      rx: .78, ry: .70, cluster: "VI. Spiritual Commons",
      desc: "The prosperity gospel: God rewards faith with material wealth; poverty is a sign of insufficient faith. Mega-churches as corporations. Joel Osteen's Houston Lakewood Church, seating 16,800, closed its doors during Hurricane Harvey. Evangelical Christianity's alignment with neoliberalism: the market is God's economy, inequality is natural, social welfare undermines personal responsibility. A theology purpose-built for capital — and extraordinarily successful in the global South where capitalism is most destructive.",
      relates: "The theology purpose-built for capital"
    },
    {
      id: "spiritual_resistance", type: "synthesis", color: "#18c97c",
      label: "Spiritual\nResistance &\nSolidarity",
      rx: .70, ry: .84, cluster: "VI. Spiritual Commons",
      desc: "The synthesis: spirituality as a resource for resistance, not consolation for submission. The Quakers who sheltered runaway slaves on the Underground Railroad. The church basements where AA meetings and trade union meetings and civil rights strategy sessions happened simultaneously. The Zapatista communities whose autonomy is rooted in indigenous cosmology. The mosque that housed the Grenfell survivors. Spiritual communities as the underground infrastructure of solidarity — present where the state is not.",
      relates: "Spiritual communities as underground infrastructure of solidarity"
    }
  ],

  edges: [
    ["opium_of_people",        "church_state"],
    ["church_state",           "prophetic_tradition"],
    ["nonconformism",          "nonconformism_limits"],
    ["nonconformism_limits",   "radical_christianity"],
    ["liberation_theology",    "romero"],
    ["romero",                 "base_communities"],
    ["christian_nationalism",  "religious_right_politics"],
    ["religious_right_politics","religious_pluralism"],
    ["secular_humanism",       "secular_fundamentalism"],
    ["secular_fundamentalism", "sacred_commons"],
    ["religious_mutual_aid",   "religion_capitalism"],
    ["religion_capitalism",    "spiritual_resistance"],
    // Cross-wiring
    ["prophetic_tradition",    "liberation_theology"],
    ["radical_christianity",   "liberation_theology"],
    ["nonconformism",          "religious_mutual_aid"],
    ["base_communities",       "sacred_commons"],
    ["christian_nationalism",  "church_state"],
    ["religious_pluralism",    "spiritual_resistance"],
    ["sacred_commons",         "spiritual_resistance"],
    ["religious_mutual_aid",   "base_communities"],
    ["prophetic_tradition",    "radical_christianity"],
    ["spiritual_resistance",   "base_communities"],
    ["secular_humanism",       "prophetic_tradition"]
  ]
};

// ══════════════════════════════════════════════════════════
//  XVI. ADDICTION, CRIME & SOCIAL CONTROL
// ══════════════════════════════════════════════════════════
DATA.addiction = {
  label: "Addiction, Crime & Social Control",
  desc:  "The War on Drugs is a class war. Crime is produced by inequality and punished selectively along race and class lines. The prison industrial complex profits from mass incarceration. Addiction is a response to pain — social, economic, and psychological — and criminalising it intensifies the conditions that cause it. Harm reduction, decriminalisation, and recovery as commons are the synthesis.",
  accentColor: '#ff5722',
  thesisColor: '#ff5722',

  clusters: [
    { label: "I. The War on Drugs",              x: .10,  y: .05 },
    { label: "II. Crime & Inequality",           x: .34,  y: .05 },
    { label: "III. The Prison Industrial Complex", x: .60, y: .05 },
    { label: "IV. Addiction as Social Product",  x: .84,  y: .05 },
    { label: "V. Harm Reduction",                x: .28,  y: .54 },
    { label: "VI. Recovery & Community",         x: .72,  y: .54 }
  ],

  nodes: [
    // I. The War on Drugs
    {
      id: "drug_prohibition", type: "thesis", color: "#ff5722",
      label: "Drug\nProhibition",
      rx: .06, ry: .18, cluster: "I. The War on Drugs",
      desc: "The prohibition of drugs — narcotics, cannabis, psychedelics — was established through international treaties from 1912 onward, consolidated in the UN Single Convention on Narcotic Drugs (1961). The stated justification: public health and moral protection. The actual effect: the creation of enormously profitable illegal markets controlled by organised crime, the financing of insurgencies and paramilitary groups through drug revenue, and the persecution of drug users as criminals rather than people in need of care.",
      relates: "Prohibition creates the criminal market it claims to combat"
    },
    {
      id: "war_on_drugs", type: "antithesis", color: "#ff6b35",
      label: "The War\non Drugs",
      rx: .17, ry: .18, cluster: "I. The War on Drugs",
      desc: "Nixon aide John Ehrlichman (2016 confession): we knew we could not make it illegal to be against the Vietnam war or to be Black, but by getting the public to associate hippies with marijuana and Blacks with heroin, and then criminalising both heavily, we could disrupt those communities. The War on Drugs was never about drugs — it was about targeting political opponents and communities of colour. Reagan's crack cocaine sentencing disparity: 100:1 versus powder cocaine, used predominantly by white users.",
      relates: "Ehrlichman: the War on Drugs was always about race and politics"
    },
    {
      id: "decriminalisation", type: "synthesis", color: "#18c97c",
      label: "Decriminalisation\n& Regulation",
      rx: .115, ry: .34, cluster: "I. The War on Drugs",
      desc: "Portugal decriminalised all drugs in 2001 — treating possession as a health issue, not a criminal one. Drug-related deaths fell, HIV infections among drug users fell, drug use did not increase. Oregon followed in 2020. Cannabis is legally regulated in Canada, Uruguay, Germany, and numerous US states. The evidence is unambiguous: criminalisation does not reduce drug use, it simply adds the harms of criminalisation to the harms of drugs. Regulation, taxation, and health treatment work better.",
      relates: "Portugal 2001: decriminalisation works — evidence is clear"
    },

    // II. Crime & Inequality
    {
      id: "crime_social_product", type: "thesis", color: "#ff5722",
      label: "Crime as\nSocial Product",
      rx: .28, ry: .18, cluster: "II. Crime & Inequality",
      desc: "Durkheim: crime is a normal feature of all societies — its rate and character reflect social organisation. Edwin Sutherland: crime is learned behaviour, shaped by differential association. The correlation between inequality, poverty, and crime rates is among the most robust in social science. High-inequality societies have higher crime rates than low-inequality ones — not because poor people are more criminal but because inequality produces the conditions — desperation, status anxiety, community breakdown — in which crime emerges.",
      relates: "Wilkinson & Pickett: more unequal societies have more crime"
    },
    {
      id: "white_collar_crime", type: "antithesis", color: "#ff6b35",
      label: "White Collar\nCrime &\nSelective\nEnforcement",
      rx: .40, ry: .18, cluster: "II. Crime & Inequality",
      desc: "Edwin Sutherland coined white-collar crime in 1949: crimes committed by the powerful in the course of their occupation — fraud, embezzlement, tax evasion, environmental crime, workplace safety violations, financial market manipulation. The 2008 financial crisis: trillions in fraud, not a single senior banker prosecuted. Corporate tax avoidance costs the UK £35 billion per year — more than the entire social care budget. Crime is defined and enforced in ways that target the poor and protect the powerful.",
      relates: "Not a single banker prosecuted for the 2008 crisis"
    },
    {
      id: "restorative_justice", type: "synthesis", color: "#18c97c",
      label: "Restorative\nJustice",
      rx: .34, ry: .34, cluster: "II. Crime & Inequality",
      desc: "Restorative justice: bringing those who have caused harm and those who have been harmed together to address the consequences and repair the relationship. Evidence: lower reoffending rates, higher victim satisfaction, lower cost than imprisonment. But the deeper synthesis is structural: address the conditions — poverty, inequality, addiction, trauma, community breakdown — that generate crime rather than simply punishing its symptoms. Justice as healing, not punishment.",
      relates: "Lower reoffending, higher satisfaction — at lower cost"
    },

    // III. The Prison Industrial Complex
    {
      id: "mass_incarceration", type: "thesis", color: "#ff5722",
      label: "Mass\nIncarceration",
      rx: .54, ry: .18, cluster: "III. The Prison Industrial Complex",
      desc: "The United States has 5% of the world's population and 25% of its prisoners: 2.3 million people incarcerated, disproportionately Black and poor. The UK has the highest imprisonment rate in Western Europe. Mass incarceration is not a response to crime — crime rates fell as incarceration rates rose, and no causal relationship has been established. It is a response to the social disruption produced by deindustrialisation, drug prohibition, and the defunding of mental health services.",
      relates: "5% of the world's population — 25% of its prisoners"
    },
    {
      id: "prison_profit", type: "antithesis", color: "#ff6b35",
      label: "Prison\nIndustrial\nComplex",
      rx: .66, ry: .18, cluster: "III. The Prison Industrial Complex",
      desc: "Private prisons: G4S, Serco, CCA in the US — corporations profiting from the incarceration of human beings, with financial incentives to keep cells full and oppose sentencing reform. Prison labour: the 13th Amendment abolished slavery except as punishment for crime — US prisoners earn cents per hour producing goods for major corporations. The same system that criminalises drug use profits from incarcerating drug users. The prison industrial complex is a form of racialised capitalism.",
      relates: "The 13th Amendment: slavery legal as punishment for crime"
    },
    {
      id: "prison_abolition", type: "synthesis", color: "#18c97c",
      label: "Abolition &\nTransformative\nJustice",
      rx: .60, ry: .34, cluster: "III. The Prison Industrial Complex",
      desc: "Angela Davis's Are Prisons Obsolete?: the prison does not solve the problems it claims to address — it is itself a problem. Prison abolition does not mean no consequences for harm, but a transformation of the conditions that generate harm and the development of alternative accountability processes. Transformative justice: community accountability, mental health support, restorative processes. Not utopian — the Nordic prison system demonstrates that low incarceration, high rehabilitation, and low reoffending are achievable.",
      relates: "Angela Davis: prisons are not solutions — they are the problem"
    },

    // IV. Addiction as Social Product
    {
      id: "addiction_disease", type: "thesis", color: "#ff5722",
      label: "Addiction\nas Disease",
      rx: .78, ry: .18, cluster: "IV. Addiction as Social Product",
      desc: "The disease model of addiction: addiction is a chronic brain disorder, characterised by compulsive drug seeking despite harmful consequences. This model was a genuine advance over the moral failure model — it destigmatised addiction and opened the door to medical treatment. The 12-step tradition, medication-assisted treatment, the recognition that willpower alone is insufficient. Important — but incomplete: it locates the problem in the individual brain and ignores the social conditions that fill the brain with pain.",
      relates: "Disease model: advance over moral failure — but incomplete"
    },
    {
      id: "addiction_social", type: "antithesis", color: "#ff6b35",
      label: "Addiction\nas Response\nto Pain",
      rx: .90, ry: .18, cluster: "IV. Addiction as Social Product",
      desc: "Johann Hari's Chasing the Scream, Bruce Alexander's Rat Park experiment: addiction is not primarily a property of drugs but a response to a life that offers insufficient connection, meaning, and hope. Soldiers returning from Vietnam, who were using heroin at high rates in the field, mostly stopped when they returned to their lives. The opioid epidemic in post-industrial America followed the deindustrialisation of communities — the drug filled the space left by the loss of work, community, and purpose.",
      relates: "Hari: the opposite of addiction is connection"
    },
    {
      id: "addiction_capitalism", type: "synthesis", color: "#18c97c",
      label: "Addiction\nCapitalism",
      rx: .84, ry: .34, cluster: "IV. Addiction as Social Product",
      desc: "The synthesis: capitalism produces addiction as both supply and demand. Supply: the pharmaceutical companies that created the opioid epidemic — Purdue Pharma marketing OxyContin as non-addictive to doctors, creating millions of addicts for profit. The alcohol industry, the gambling industry, the ultra-processed food industry, the social media industry — all engineered for compulsive consumption. And the demand: communities stripped of meaning, connection, and hope by deindustrialisation, austerity, and atomisation.",
      relates: "Purdue Pharma created the opioid epidemic for profit"
    },

    // V. Harm Reduction
    {
      id: "harm_reduction", type: "thesis", color: "#ff5722",
      label: "Harm\nReduction",
      rx: .18, ry: .62, cluster: "V. Harm Reduction",
      desc: "Harm reduction: meet people where they are, reduce the immediate harms of drug use without requiring abstinence as a condition of support. Needle exchanges prevent HIV and hepatitis C transmission. Safe consumption rooms prevent overdose deaths — not one death in 50 years across 100 facilities worldwide. Naloxone distribution saves lives. Heroin-assisted treatment (available in Switzerland, the UK, Canada) dramatically reduces crime, homelessness, and death among the most severely dependent users.",
      relates: "Zero overdose deaths in 50 years of safe consumption rooms"
    },
    {
      id: "abstinence_only", type: "antithesis", color: "#ff6b35",
      label: "Abstinence\nOnly &\nMoral Panic",
      rx: .34, ry: .70, cluster: "V. Harm Reduction",
      desc: "The abstinence-only approach: recovery means complete cessation, and anything short of this is enabling. Politically, harm reduction is attacked as encouraging drug use — despite overwhelming evidence to the contrary. Safe consumption rooms blocked in the UK for twenty years of political cowardice while thousands died of preventable overdoses. The moral panic around drugs — fed by tabloid coverage and political positioning — kills people by preventing evidence-based policy.",
      relates: "Political cowardice while thousands die preventable deaths"
    },
    {
      id: "safe_supply", type: "synthesis", color: "#18c97c",
      label: "Safe Supply\n& Public\nHealth Model",
      rx: .24, ry: .84, cluster: "V. Harm Reduction",
      desc: "The synthesis: a full public health model for drugs — harm reduction, treatment on demand, safe supply for the most dependent users, decriminalisation of personal possession, regulation of currently illegal markets, and investment in the social conditions that prevent addiction. British Columbia's safe supply programme. Glasgow's proposed heroin-assisted treatment. The evidence base is complete — what is lacking is political will, and what prevents political will is moral panic and vested interests in prohibition.",
      relates: "The evidence is complete — only political will is lacking"
    },

    // VI. Recovery & Community
    {
      id: "recovery_movement", type: "thesis", color: "#ff5722",
      label: "Recovery\nMovement",
      rx: .62, ry: .62, cluster: "VI. Recovery & Community",
      desc: "The recovery movement: people with lived experience of addiction organising collectively — peer support, recovery coaching, advocacy for better services. Alcoholics Anonymous and its offshoots as the original peer support model — mutual aid applied to addiction recovery. The recovery capital framework: what resources does a person need to sustain recovery? Social relationships, meaningful activity, housing, employment, hope. Recovery is not just individual — it is social.",
      relates: "Recovery capital: social relationships, meaning, housing, hope"
    },
    {
      id: "criminalisation_recovery", type: "antithesis", color: "#ff6b35",
      label: "Criminalisation\nUndermines\nRecovery",
      rx: .78, ry: .70, cluster: "VI. Recovery & Community",
      desc: "A criminal record for drug possession destroys the recovery capital that makes sustained recovery possible: housing (criminal record bars access to social housing), employment (many jobs require disclosure), travel (US visa denial), family relationships (child custody implications). The very act of criminalisation removes the social conditions necessary for recovery. Punishing addiction produces the conditions that perpetuate it — the logic of criminalisation is self-defeating.",
      relates: "Criminalisation removes the conditions that make recovery possible"
    },
    {
      id: "recovery_commons", type: "synthesis", color: "#18c97c",
      label: "Recovery\nas Commons",
      rx: .70, ry: .84, cluster: "VI. Recovery & Community",
      desc: "The synthesis: recovery as a commons — not an individual achievement but a collective production. Recovery communities, peer support networks, recovery cafes, social enterprises run by people in recovery, communities that welcome rather than stigmatise those who have struggled. The same logic as every other form of mutual aid: we do better together. And the structural conditions: decent housing, meaningful work, income security, community connection — the social determinants of recovery are the social determinants of health.",
      relates: "Recovery as mutual aid — we do better together"
    }
  ],

  edges: [
    ["drug_prohibition",       "war_on_drugs"],
    ["war_on_drugs",           "decriminalisation"],
    ["crime_social_product",   "white_collar_crime"],
    ["white_collar_crime",     "restorative_justice"],
    ["mass_incarceration",     "prison_profit"],
    ["prison_profit",          "prison_abolition"],
    ["addiction_disease",      "addiction_social"],
    ["addiction_social",       "addiction_capitalism"],
    ["harm_reduction",         "abstinence_only"],
    ["abstinence_only",        "safe_supply"],
    ["recovery_movement",      "criminalisation_recovery"],
    ["criminalisation_recovery","recovery_commons"],
    // Cross-wiring
    ["war_on_drugs",           "mass_incarceration"],
    ["war_on_drugs",           "crime_social_product"],
    ["addiction_social",       "harm_reduction"],
    ["addiction_capitalism",   "mass_incarceration"],
    ["prison_profit",          "war_on_drugs"],
    ["decriminalisation",      "harm_reduction"],
    ["criminalisation_recovery","mass_incarceration"],
    ["recovery_commons",       "restorative_justice"],
    ["safe_supply",            "recovery_commons"],
    ["addiction_capitalism",   "addiction_social"],
    ["prison_abolition",       "restorative_justice"],
    ["recovery_movement",      "harm_reduction"]
  ]
};
