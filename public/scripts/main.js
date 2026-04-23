// ============================================================
//  TRANSLATIONS
// ============================================================
const T = {
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.whyus':    'Why Us',
    'nav.area':     'Service Area',
    'nav.gallery':  'Gallery',
    'nav.quote':    'Free Quote',

    // Hero
    'hero.badge': 'Montreal, Laval &amp; Greater Area',
    'hero.h1':    'Expert Fence Installation<br /><span class="highlight">You Can Trust</span>',
    'hero.sub':   'Residential &amp; commercial fences — wood, vinyl, aluminum, pool fence &amp; chain-link. Serving Montreal, Laval and the Greater Montreal Area. Licensed · Insured · Free Estimates.',
    'hero.cta1':  'Get a Free Quote',
    'hero.cta2':  '&#128222; Call Now',
    'hero.b1':    '&#10003; Licensed &amp; Insured',
    'hero.b2':    '&#10003; Free Estimates',
    'hero.b3':    '&#10003; 5-Year Workmanship Warranty',

    // Trust bar labels (nums are data-count / data-suffix, never translated)
    'tr.projects':   'Projects Completed',
    'tr.experience': 'Years Experience',
    'tr.cities':     'Cities Served',
    'tr.guarantee':  'Satisfaction Guarantee',

    // Services section header
    'svc.tag':  'What We Install',
    'svc.h2':   'Complete Fence Installation Services<br /><span class="highlight">in Montreal &amp; Laval</span>',
    'svc.p':    'From wood privacy fences to code-compliant pool barriers, we handle every fence type for residential and commercial properties across Greater Montreal.',
    'svc.link': 'Get a Quote &rarr;',

    // Wood
    'w.h3':  'Wood Fence<br /><small>Clôture en Bois</small>',
    'w.p':   'Classic cedar and pressure-treated wood fences for maximum privacy and curb appeal. Custom heights and styles to match your Montreal or Laval property perfectly.',
    'w.li1': 'Privacy &amp; picket fences',
    'w.li2': 'Cedar, pine &amp; treated wood',
    'w.li3': 'Custom heights up to 8 ft',
    'w.li4': 'Staining &amp; finishing available',

    // Pool
    'pool.badge': 'Most Popular',
    'pool.h3':  'Pool Fence<br /><small>Clôture de Piscine</small>',
    'pool.p':   'Code-compliant pool fencing that meets all Quebec and municipal safety requirements. Protect your family and increase your property value with a beautiful pool enclosure.',
    'pool.li1': 'Meets RBQ safety codes',
    'pool.li2': 'Aluminum &amp; tempered glass options',
    'pool.li3': 'Self-closing / self-latching gates',
    'pool.li4': 'In-ground &amp; above-ground pools',

    // Vinyl
    'vinyl.h3':  'Vinyl Fence<br /><small>Clôture en Vinyle</small>',
    'vinyl.p':   'Low-maintenance PVC and vinyl fences that never rot, warp or need painting. Perfect for Montreal\'s harsh winters and hot summers — beautiful year after year.',
    'vinyl.li1': 'Zero maintenance required',
    'vinyl.li2': 'Weather &amp; frost resistant',
    'vinyl.li3': 'Wide range of colors &amp; styles',
    'vinyl.li4': '25-year manufacturer warranty',

    // Aluminum
    'alum.h3':  'Aluminum Fence<br /><small>Clôture en Aluminium</small>',
    'alum.p':   'Elegant wrought-iron look without the rust. Our aluminum fences are powder-coated for lasting beauty and durability — ideal for front yards across Laval and Montreal.',
    'alum.li1': 'Rust-proof &amp; weatherproof',
    'alum.li2': 'Classic ornamental styles',
    'alum.li3': 'Black, bronze &amp; custom colors',
    'alum.li4': 'Decorative &amp; spear-top options',

    // Chain-link
    'chain.h3':  'Chain-Link Fence<br /><small>Clôture Chaîne</small>',
    'chain.p':   'Durable and cost-effective chain-link fencing for residential yards, commercial properties and sports areas throughout Greater Montreal and Laval.',
    'chain.li1': 'Galvanized &amp; vinyl-coated',
    'chain.li2': 'Residential &amp; commercial grade',
    'chain.li3': 'Security topping options',
    'chain.li4': 'Quick installation',

    // Repair
    'repair.h3':  'Fence Repair<br /><small>Réparation de Clôture</small>',
    'repair.p':   'Storm damage, rot, or sagging panels? We repair all fence types quickly and professionally. Serving all of Montreal, Laval and surrounding cities.',
    'repair.li1': 'Post replacement',
    'repair.li2': 'Panel &amp; board replacement',
    'repair.li3': 'Gate adjustment &amp; repair',
    'repair.li4': 'Emergency repairs available',

    // Why us
    'wu.tag':  'Why Clôture Pro Laval',
    'wu.h2':   'Montreal\'s Most Trusted<br /><span class="highlight">Fence Installers</span>',
    'wu.p':    'When you\'re looking for a fence contractor in Montreal or Laval, you want experience, quality materials, and a team that shows up on time. That\'s exactly what we deliver on every project across Greater Montreal.',
    'wu.cta':  'Start Your Project Today',
    'wi1.title': 'Licensed &amp; Fully Insured',
    'wi1.p':     'RBQ-licensed fence contractors with full liability insurance. Your property is always protected.',
    'wi2.title': 'Free On-Site Estimates',
    'wi2.p':     'We come to your property in Montreal, Laval or surrounding area and give you a detailed, no-obligation quote.',
    'wi3.title': 'Premium Materials Only',
    'wi3.p':     'We use only high-grade, Canadian-climate-tested materials designed to withstand Quebec\'s extreme seasons.',
    'wi4.title': '5-Year Workmanship Warranty',
    'wi4.p':     'Every fence we install is backed by our 5-year workmanship guarantee — we stand behind our work.',
    'wi5.title': 'Fast &amp; Clean Installation',
    'wi5.p':     'Most residential fences are completed in 1-2 days. We leave your property clean — no mess, no hassle.',
    'wi6.title': 'Bilingual Service (FR/EN)',
    'wi6.p':     'We proudly serve Montreal\'s francophone and anglophone communities in both French and English.',
    'sc1.desc': 'Fences installed across<br />Montreal &amp; Laval',
    'sc2.desc': 'Average rating from<br />satisfied customers',
    'sc3.desc': 'Quote turnaround<br />time guarantee',

    // Service area
    'sa.tag':       'Where We Work',
    'sa.h2':        'Fence Installation Across<br /><span class="highlight">Greater Montreal</span>',
    'sa.p':         'We are your local fence installation experts — proudly serving homeowners and businesses throughout Montreal, Laval and every surrounding city.',
    'sa.h3.laval':  '&#128205; Laval',
    'sa.h3.mtl':    '&#128205; Montreal Island',
    'sa.h3.north':  '&#128205; North Shore',
    'sa.h3.south':  '&#128205; South Shore',
    'sa.note':      'Don\'t see your city? <a href="#contact">Contact us</a> — we likely serve your area too!',

    // Gallery
    'g.tag': 'Our Work',
    'g.h2':  'Recent Fence Projects in<br /><span class="highlight">Montreal &amp; Laval</span>',
    'g1.title': 'Cedar Privacy Fence',
    'g2.title': 'Pool Fence Installation',
    'g3.title': 'Vinyl Fence',
    'g4.title': 'Aluminum Ornamental Fence',
    'g5.title': 'Commercial Chain-Link',
    'g6.title': 'Wood Picket Fence',

    // Testimonials
    'te.tag': 'Customer Reviews',
    'te.h2':  'What Montreal &amp; Laval<br /><span class="highlight">Homeowners Say</span>',
    't1.text': '"Clôture Pro Laval installed a beautiful cedar privacy fence for our backyard in Chomedey. The crew was professional, fast and left the yard perfectly clean. Highly recommend for anyone in Laval needing a fence!"',
    't1.loc':  'Chomedey, Laval',
    't2.text': '"We needed a pool fence that met safety codes before summer. They came out the same week for an estimate and had our aluminum pool fence installed in under two days. Perfect work, very fair price."',
    't2.loc':  'Brossard, South Shore',
    't3.text': '"Got three quotes for a vinyl fence in Saint-Laurent and Clôture Pro had the best price and the best quality materials. Two years later the fence still looks brand new. No maintenance at all."',
    't3.loc':  'Saint-Laurent, Montreal',

    // Contact
    'c.tag':       'Get In Touch',
    'c.h2':        'Get Your <span class="highlight">Free Fence Quote</span><br />Today',
    'c.p':         'Ready to transform your property with a new fence? Contact Clôture Pro Laval for a fast, free, no-obligation estimate anywhere in Montreal, Laval or Greater Montreal.',
    'c.call':      'Call or Text',
    'c.email.lbl': 'Email',
    'c.area.lbl':  'Service Area',
    'c.area.val':  'Montreal, Laval &amp; Greater Montreal',
    'c.hours.lbl': 'Hours',
    'c.hours.val': 'Mon – Sat: 7:00 AM – 7:00 PM',

    // Form
    'f.h3':        'Request a Free Quote',
    'f.name.lbl':  'Full Name *',
    'f.phone.lbl': 'Phone Number *',
    'f.email.lbl': 'Email Address',
    'f.city.lbl':  'City / Neighborhood *',
    'f.svc.lbl':   'Fence Type',
    'f.msg.lbl':   'Tell Us More',
    'f.name.ph':   'Your name',
    'f.city.ph':   'e.g. Laval, Brossard, Saint-Laurent…',
    'f.msg.ph':    'Approximate fence length, height, any special requirements…',
    'f.svc.default': 'Select a fence type…',
    'f.svc.wood':    'Wood Fence (Clôture en Bois)',
    'f.svc.vinyl':   'Vinyl / PVC Fence (Clôture en Vinyle)',
    'f.svc.al':      'Aluminum Fence (Clôture en Aluminium)',
    'f.svc.pool':    'Pool Fence (Clôture de Piscine)',
    'f.svc.chain':   'Chain-Link Fence (Clôture Chaîne)',
    'f.svc.repair':  'Fence Repair (Réparation)',
    'f.svc.other':   'Other / Not Sure',
    'f.submit':      'Send My Free Quote Request &#8594;',
    'f.disclaimer':  'We respond within 24 hours. No spam, ever.',
    'f.success':     '&#10003; Thank you! We\'ll be in touch within 24 hours.',
    'f.alert':       'Please fill in your name, phone number and city.',

    // Footer
    'ft.brand.p':   'Professional fence installation across Montreal, Laval and Greater Montreal. Quality workmanship, premium materials, exceptional service.',
    'ft.svc.h4':    'Services',
    'ft.area.h4':   'Service Areas',
    'ft.contact.h4':'Contact',
    'ft.svc1': 'Wood Fence Installation',
    'ft.svc2': 'Pool Fence Installation',
    'ft.svc3': 'Vinyl Fence Installation',
    'ft.svc4': 'Aluminum Fence Installation',
    'ft.svc5': 'Chain-Link Fence',
    'ft.svc6': 'Fence Repair',
    'ft.area1': 'Fence Installation Laval',
    'ft.area2': 'Fence Installation Montreal',
    'ft.area3': 'Fence Installation Brossard',
    'ft.area4': 'Fence Installation Longueuil',
    'ft.area5': 'Fence Installation Repentigny',
    'ft.area6': 'Fence Installation Terrebonne',
    'ft.hours':  '&#128336; Mon–Sat: 7AM – 7PM',
    'ft.quote':  'Free Quote',
    'ft.bottom': '&copy; 2025 Clôture Pro Laval — Fence Installation Montreal &amp; Laval. All rights reserved.',

    // Floating CTA
    'cta.float': 'Get Free Quote',

    // Page title
    'page.title': 'Clôture Pro Laval | Fence Installation Montreal, Laval & Area | Pool Fence Experts',
  },

  fr: {
    // Nav
    'nav.services': 'Services',
    'nav.whyus':    'Pourquoi nous',
    'nav.area':     'Zone desservie',
    'nav.gallery':  'Galerie',
    'nav.quote':    'Soumission gratuite',

    // Hero
    'hero.badge': 'Montréal, Laval et région',
    'hero.h1':    'Installation de clôtures<br /><span class="highlight">Par des experts</span>',
    'hero.sub':   'Clôtures résidentielles et commerciales — bois, vinyle, aluminium, clôture de piscine et chaîne. Au service de Montréal, Laval et de la grande région. Licencié · Assuré · Soumissions gratuites.',
    'hero.cta1':  'Obtenir une soumission',
    'hero.cta2':  '&#128222; Appelez maintenant',
    'hero.b1':    '&#10003; Licencié et assuré',
    'hero.b2':    '&#10003; Soumissions gratuites',
    'hero.b3':    '&#10003; Garantie main-d\'&#339;uvre 5 ans',

    // Trust bar labels
    'tr.projects':   'Projets réalisés',
    'tr.experience': 'Ans d\'expérience',
    'tr.cities':     'Villes desservies',
    'tr.guarantee':  'Garantie de satisfaction',

    // Services section header
    'svc.tag':  'Ce que nous installons',
    'svc.h2':   'Services complets d\'installation<br /><span class="highlight">à Montréal et Laval</span>',
    'svc.p':    'Des clôtures de confidentialité en bois aux barrières de piscine conformes au code, nous gérons tous les types de clôtures pour les propriétés résidentielles et commerciales dans tout le Grand Montréal.',
    'svc.link': 'Obtenir une soumission &rarr;',

    // Wood
    'w.h3':  'Clôture en Bois<br /><small>Wood Fence</small>',
    'w.p':   'Clôtures classiques en cèdre et bois traité sous pression pour une intimité maximale et un attrait visuel optimal. Hauteurs et styles personnalisés pour votre propriété à Montréal ou Laval.',
    'w.li1': 'Clôtures à lattes et à piquets',
    'w.li2': 'Cèdre, pin et bois traité',
    'w.li3': 'Hauteurs sur mesure jusqu\'à 8 pi',
    'w.li4': 'Teinture et finition disponibles',

    // Pool
    'pool.badge': 'Le plus populaire',
    'pool.h3':  'Clôture de Piscine<br /><small>Pool Fence</small>',
    'pool.p':   'Clôtures de piscine conformes au code qui respectent toutes les exigences de sécurité du Québec et des municipalités. Protégez votre famille et augmentez la valeur de votre propriété.',
    'pool.li1': 'Conforme aux normes RBQ',
    'pool.li2': 'Options aluminium et verre trempé',
    'pool.li3': 'Portillons auto-fermants et verrouillants',
    'pool.li4': 'Piscines creusées et hors terre',

    // Vinyl
    'vinyl.h3':  'Clôture en Vinyle<br /><small>Vinyl Fence</small>',
    'vinyl.p':   'Clôtures en PVC et vinyle à faible entretien qui ne pourrissent ni ne gauchissent jamais. Parfaites pour les hivers rigoureux et étés chauds de Montréal — belles année après année.',
    'vinyl.li1': 'Aucun entretien requis',
    'vinyl.li2': 'Résistant aux intempéries et au gel',
    'vinyl.li3': 'Large gamme de couleurs et styles',
    'vinyl.li4': 'Garantie fabricant 25 ans',

    // Aluminum
    'alum.h3':  'Clôture en Aluminium<br /><small>Aluminum Fence</small>',
    'alum.p':   'Allure de fer forgé sans la rouille. Nos clôtures en aluminium sont traitées par poudrage pour une beauté et une durabilité durables — idéales pour les cours avant de Laval et Montréal.',
    'alum.li1': 'Résistant à la rouille et aux intempéries',
    'alum.li2': 'Styles ornementaux classiques',
    'alum.li3': 'Noir, bronze et couleurs personnalisées',
    'alum.li4': 'Options décoratives et à fers de lance',

    // Chain-link
    'chain.h3':  'Clôture à Mailles<br /><small>Chain-Link Fence</small>',
    'chain.p':   'Clôtures à mailles durables et économiques pour cours résidentielles, propriétés commerciales et zones sportives dans toute la grande région de Montréal et Laval.',
    'chain.li1': 'Galvanisé et enduit de vinyle',
    'chain.li2': 'Usage résidentiel et commercial',
    'chain.li3': 'Options de couronnement sécurisé',
    'chain.li4': 'Installation rapide',

    // Repair
    'repair.h3':  'Réparation de Clôture<br /><small>Fence Repair</small>',
    'repair.p':   'Dommages de tempête, pourriture ou panneaux affaissés? Nous réparons tous les types de clôtures rapidement et professionnellement à Montréal, Laval et les villes environnantes.',
    'repair.li1': 'Remplacement de poteaux',
    'repair.li2': 'Remplacement de panneaux et planches',
    'repair.li3': 'Ajustement et réparation de portails',
    'repair.li4': 'Réparations d\'urgence disponibles',

    // Why us
    'wu.tag':  'Pourquoi Clôture Pro Laval',
    'wu.h2':   'Les installateurs de clôtures<br /><span class="highlight">les plus fiables à Montréal</span>',
    'wu.p':    'Quand vous cherchez un entrepreneur en clôtures à Montréal ou Laval, vous voulez de l\'expérience, des matériaux de qualité et une équipe ponctuelle. C\'est exactement ce que nous livrons sur chaque projet.',
    'wu.cta':  'Commencez votre projet aujourd\'hui',
    'wi1.title': 'Licencié et entièrement assuré',
    'wi1.p':     'Entrepreneurs titulaires d\'une licence RBQ avec assurance responsabilité complète. Votre propriété est toujours protégée.',
    'wi2.title': 'Estimations gratuites sur place',
    'wi2.p':     'Nous venons à votre propriété à Montréal, Laval ou région et vous remettons une soumission détaillée sans obligation.',
    'wi3.title': 'Matériaux premium seulement',
    'wi3.p':     'Nous n\'utilisons que des matériaux de haute qualité, testés pour le climat canadien, conçus pour résister aux saisons extrêmes du Québec.',
    'wi4.title': 'Garantie de main-d\'&#339;uvre 5 ans',
    'wi4.p':     'Chaque clôture que nous installons est couverte par notre garantie de main-d\'&#339;uvre de 5 ans — nous assumons notre travail.',
    'wi5.title': 'Installation rapide et propre',
    'wi5.p':     'La plupart des clôtures résidentielles sont complétées en 1-2 jours. Nous laissons votre propriété impeccable — sans désordre ni tracas.',
    'wi6.title': 'Service bilingue (FR/EN)',
    'wi6.p':     'Nous servons fièrement les communautés francophone et anglophone de Montréal en français et en anglais.',
    'sc1.desc': 'Clôtures installées à<br />Montréal et Laval',
    'sc2.desc': 'Note moyenne de nos<br />clients satisfaits',
    'sc3.desc': 'Délai de réponse garanti<br />pour votre soumission',

    // Service area
    'sa.tag':       'Où nous travaillons',
    'sa.h2':        'Installation de clôtures dans<br /><span class="highlight">tout le Grand Montréal</span>',
    'sa.p':         'Nous sommes vos experts locaux en installation de clôtures — fiers de servir les propriétaires et entreprises de Montréal, Laval et chaque ville environnante.',
    'sa.h3.laval':  '&#128205; Laval',
    'sa.h3.mtl':    '&#128205; Île de Montréal',
    'sa.h3.north':  '&#128205; Rive-Nord',
    'sa.h3.south':  '&#128205; Rive-Sud',
    'sa.note':      'Vous ne voyez pas votre ville? <a href="#contact">Contactez-nous</a> — nous desservons probablement votre région aussi!',

    // Gallery
    'g.tag': 'Nos réalisations',
    'g.h2':  'Projets récents à<br /><span class="highlight">Montréal et Laval</span>',
    'g1.title': 'Clôture privée en cèdre',
    'g2.title': 'Clôture de piscine',
    'g3.title': 'Clôture en vinyle',
    'g4.title': 'Clôture ornementale aluminium',
    'g5.title': 'Clôture chaîne commerciale',
    'g6.title': 'Clôture à piquets en bois',

    // Testimonials
    'te.tag': 'Témoignages clients',
    'te.h2':  'Ce que disent les propriétaires<br /><span class="highlight">de Montréal et Laval</span>',
    't1.text': '"Clôture Pro Laval a installé une belle clôture de cèdre pour notre cour arrière à Chomedey. L\'équipe était professionnelle, rapide et a laissé la cour impeccable. Je recommande fortement pour quiconque à Laval!"',
    't1.loc':  'Chomedey, Laval',
    't2.text': '"Nous avions besoin d\'une clôture de piscine conforme avant l\'été. Ils sont venus la même semaine et ont installé notre clôture en aluminium en moins de deux jours. Travail parfait, prix très raisonnable."',
    't2.loc':  'Brossard, Rive-Sud',
    't3.text': '"J\'ai obtenu trois soumissions pour une clôture en vinyle à Saint-Laurent et Clôture Pro avait le meilleur prix et les meilleurs matériaux. Deux ans plus tard, la clôture est encore comme neuve."',
    't3.loc':  'Saint-Laurent, Montréal',

    // Contact
    'c.tag':       'Contactez-nous',
    'c.h2':        'Obtenez votre <span class="highlight">soumission gratuite</span><br />aujourd\'hui',
    'c.p':         'Prêt à transformer votre propriété? Contactez Clôture Pro Laval pour une estimation rapide, gratuite et sans obligation à Montréal, Laval ou dans la grande région.',
    'c.call':      'Appel ou texto',
    'c.email.lbl': 'Courriel',
    'c.area.lbl':  'Zone desservie',
    'c.area.val':  'Montréal, Laval et Grand Montréal',
    'c.hours.lbl': 'Heures',
    'c.hours.val': 'Lun – Sam : 7h00 – 19h00',

    // Form
    'f.h3':        'Demander une soumission gratuite',
    'f.name.lbl':  'Nom complet *',
    'f.phone.lbl': 'Numéro de téléphone *',
    'f.email.lbl': 'Adresse courriel',
    'f.city.lbl':  'Ville / Quartier *',
    'f.svc.lbl':   'Type de clôture',
    'f.msg.lbl':   'Dites-nous en plus',
    'f.name.ph':   'Votre nom',
    'f.city.ph':   'ex. Laval, Brossard, Saint-Laurent…',
    'f.msg.ph':    'Longueur approximative, hauteur, exigences particulières…',
    'f.svc.default': 'Sélectionnez un type de clôture…',
    'f.svc.wood':    'Clôture en Bois (Wood Fence)',
    'f.svc.vinyl':   'Clôture en Vinyle / PVC (Vinyl Fence)',
    'f.svc.al':      'Clôture en Aluminium (Aluminum Fence)',
    'f.svc.pool':    'Clôture de Piscine (Pool Fence)',
    'f.svc.chain':   'Clôture à Mailles (Chain-Link Fence)',
    'f.svc.repair':  'Réparation de Clôture (Fence Repair)',
    'f.svc.other':   'Autre / Je ne sais pas',
    'f.submit':      'Envoyer ma demande de soumission &#8594;',
    'f.disclaimer':  'Nous répondons dans les 24 heures. Aucun spam.',
    'f.success':     '&#10003; Merci! Nous vous contacterons dans les 24 heures.',
    'f.alert':       'Veuillez remplir votre nom, numéro de téléphone et ville.',

    // Footer
    'ft.brand.p':    'Installation professionnelle de clôtures à Montréal, Laval et dans tout le Grand Montréal. Qualité de main-d\'&#339;uvre, matériaux premium, service exceptionnel.',
    'ft.svc.h4':     'Services',
    'ft.area.h4':    'Zones desservies',
    'ft.contact.h4': 'Contact',
    'ft.svc1': 'Installation clôture en bois',
    'ft.svc2': 'Installation clôture de piscine',
    'ft.svc3': 'Installation clôture en vinyle',
    'ft.svc4': 'Installation clôture en aluminium',
    'ft.svc5': 'Clôture à mailles',
    'ft.svc6': 'Réparation de clôture',
    'ft.area1': 'Installation clôture Laval',
    'ft.area2': 'Installation clôture Montréal',
    'ft.area3': 'Installation clôture Brossard',
    'ft.area4': 'Installation clôture Longueuil',
    'ft.area5': 'Installation clôture Repentigny',
    'ft.area6': 'Installation clôture Terrebonne',
    'ft.hours':  '&#128336; Lun–Sam : 7h – 19h',
    'ft.quote':  'Soumission gratuite',
    'ft.bottom': '&copy; 2025 Clôture Pro Laval — Installation de clôtures Montréal et Laval. Tous droits réservés.',

    // Floating CTA
    'cta.float': 'Soumission gratuite',

    // Page title
    'page.title': 'Clôture Pro Laval | Installation de clôtures Montréal, Laval & Région | Experts en clôtures de piscine',
  }
};

// ============================================================
//  LANGUAGE ENGINE
// ============================================================
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  const tr = T[lang];

  // HTML lang attribute
  document.documentElement.lang = lang;

  // Page title
  if (tr['page.title']) document.title = tr['page.title'];

  // innerHTML translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = tr[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = tr[el.dataset.i18nPh];
    if (val !== undefined) el.placeholder = val;
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

// Lang button listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Apply on load (before counter animation below)
applyLang(currentLang);

// ============================================================
//  STICKY HEADER
// ============================================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ============================================================
//  MOBILE NAV
// ============================================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================================================
//  SMOOTH SCROLL (fixed-header offset)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});

// ============================================================
//  QUOTE FORM
// ============================================================
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name  = document.getElementById('fname').value.trim();
  const phone = document.getElementById('fphone').value.trim();
  const city  = document.getElementById('fcity').value.trim();

  if (!name || !phone || !city) {
    alert(T[currentLang]['f.alert']);
    return;
  }

  const successEl = document.getElementById('formSuccess');
  successEl.innerHTML = T[currentLang]['f.success'];
  successEl.style.display = 'block';
  this.reset();
  this.querySelector('[type="submit"]').disabled = true;
});

// ============================================================
//  COUNTER ANIMATION (reads data-count / data-suffix — lang-safe)
// ============================================================
const counters = document.querySelectorAll('.trust-num');
let counted = false;

const animateCounters = () => {
  if (counted) return;
  const bar = document.querySelector('.trust-bar');
  if (!bar) return;
  if (bar.getBoundingClientRect().top < window.innerHeight - 80) {
    counted = true;
    counters.forEach(el => {
      const num    = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = Math.max(1, Math.floor(num / 40));
      const timer  = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = current + suffix;
        if (current >= num) clearInterval(timer);
      }, 28);
    });
  }
};

window.addEventListener('scroll', animateCounters, { passive: true });
animateCounters();
