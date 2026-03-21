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
