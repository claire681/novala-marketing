export interface FeatureBlock { heading: string; body: string; bullets?: string[]; }
export interface FaqItem { question: string; answer: string; }
export interface RelatedIndustry { title: string; description: string; href: string; }
export interface IndustryContent {
  slug: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPhoto: string;
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  features: FeatureBlock[];
  faqTitle: string;
  faq: FaqItem[];
  relatedTitle: string;
  related: RelatedIndustry[];
}

export const CONSTRUCTION_EN: IndustryContent = {
  slug: 'construction',
  eyebrow: 'FOR CONSTRUCTION AND TRADES',
  heroTitle: 'Payroll and accounting built for construction crews',
  heroSubtitle: 'Track hours across job sites, handle project costs, manage subcontractors, and stay compliant with  construction payroll requirements. All in one platform designed for how construction businesses actually work.',
  heroPhoto: '/photos/construction.jpg',
  introEyebrow: 'WHY CONSTRUCTION BUSINESSES CHOOSE NOVALA',
  introTitle: 'Software built for the reality of running a construction business worldwide',
  introBody: 'Running a construction business is nothing like running a retail store or a professional services firm. You have crews spread across multiple job sites, workers with different pay rates and union agreements, materials and equipment costs that fluctuate by project, WCB requirements that vary by province, and safety records that need to be tracked for every worker.\n\nMost business software was not built with any of this in mind. Generic payroll tools assume everyone works in one office. Generic accounting tools do not know what job costing is. Novala was built specifically to handle the operational complexity of  construction businesses, from small residential contractors to mid-size commercial builders.',
  features: [
    {
      heading: 'Multi-site time tracking your crew will actually use',
      body: 'Your workers are not sitting at desks. They are on job sites, often in remote locations, with limited connectivity. Novala\'s mobile time tracking works offline and syncs when connection returns. Workers clock in and out from their phones with a single tap.\n\nGPS verification confirms workers are actually on site when they clock in, reducing time theft and disputes. Foremen can approve hours from their phones, and hours automatically flow into payroll and job costing.',
      bullets: ['Mobile clock in and out with GPS verification', 'Works offline on job sites with poor connectivity', 'Foreman approval workflow from any device', 'Automatic overtime calculation per provincial rules', 'Break tracking and required rest period enforcement'],
    },
    {
      heading: 'Job costing that shows you which projects make money',
      body: 'Most construction businesses only find out a project was unprofitable when it is too late. Novala tracks labour, materials, subcontractor costs, and equipment expenses per project in real time. See your margin on every job as it happens, not months later during tax season.\n\nAssign every expense to a project with one click. Compare estimated vs actual costs. Identify which project types, foremen, or clients consistently deliver profit, and which drain your business.',
    },
    {
      heading: 'Compliance handled for every province',
      body: 'Construction payroll compliance is complicated. Union dues vary by trade and local. Apprenticeship rates differ from journeyperson rates. Prevailing wage requirements apply to government contracts. WCB rates vary by province and industry classification. Missing any of these creates real financial and legal risk.\n\nNovala handles it all automatically. Set up your union agreements once, and dues calculate correctly on every paycheque. Apprentice rates increase automatically based on hours logged. Provincial WCB remittances are filed on time, every time.',
      bullets: ['Union dues automatically deducted and remitted', 'Apprenticeship rate progression tracked automatically', 'WCB clearances and remittances per province', 'T4A generation for all subcontractors at year end'],
    },
  ],
  faqTitle: 'Common questions from construction businesses',
  faq: [
    { question: 'Can Novala handle my mix of employees and subcontractors?', answer: 'Yes. Novala manages both employee payroll (T4) and subcontractor payments (T4A) in the same system. You can pay everyone from the same platform, and year-end tax slips are generated automatically.' },
    { question: 'How does GPS clock in work if my crew is in a basement with no signal?', answer: 'The app works offline. Workers clock in and their location is captured when the phone last had signal, or with a manual site selection. When signal returns, everything syncs automatically.' },
    { question: 'Do you support prevailing wage jobs?', answer: 'Yes. Configure different pay rates per project or per contract, and Novala applies them automatically based on which project the hours are logged against.' },
    { question: 'Can I track equipment costs against specific jobs?', answer: 'Yes. Equipment usage, rentals, and depreciation can all be assigned to specific projects. This gives you accurate job costing that includes all overhead, not just labour and materials.' },
  ],
  relatedTitle: 'EXPLORE OTHER INDUSTRIES',
  related: [
    { title: 'Professional services', description: 'Consultants, agencies, and firms.', href: '/industry/professional-services' },
    { title: 'Wholesale and manufacturing', description: 'Inventory and supply chain.', href: '/industry/wholesale' },
    { title: 'Healthcare and clinics', description: 'Practices and medical offices.', href: '/industry/healthcare' },
  ],
};

export const PROFESSIONAL_EN: IndustryContent = {
  slug: 'professional-services',
  eyebrow: 'FOR PROFESSIONAL SERVICES',
  heroTitle: 'Time tracking and billing built for consultants, agencies, and firms',
  heroSubtitle: 'Track billable hours accurately, invoice clients professionally, understand project profitability, and manage a team of consultants across multiple engagements. Built for the specific realities of professional services worldwide.',
  heroPhoto: '/photos/professional-services.jpg',
  introEyebrow: 'WHY PROFESSIONAL SERVICES FIRMS CHOOSE NOVALA',
  introTitle: 'Software built for how you actually bill and get paid',
  introBody: 'Whether you are running a consulting practice, a design agency, a law firm, an accounting practice, or any other services business, your business runs on billable hours and client relationships. Every hour tracked accurately means revenue captured. Every hour missed is money left on the table.\n\nGeneric time tracking tools do not integrate with your invoicing. Generic invoicing tools do not know which project time was spent on. Generic accounting tools cannot tell you whether a client engagement was actually profitable after all the write-offs. Novala connects all of this so you can focus on delivering great work instead of chasing spreadsheets.',
  features: [
    {
      heading: 'Track billable hours with almost no friction',
      body: 'Your consultants and staff need to log time in seconds, not minutes. Novala\'s time tracking works from browser, desktop, or mobile with a single tap to start or stop a timer. Time entries can be assigned to any client, project, or task.\n\nBuilt-in prompts remind team members to log time they may have forgotten. Weekly time reviews before invoicing catch issues before they become billing disputes. Approval workflows let managers review time before it hits an invoice.',
      bullets: ['One-tap timers on web, desktop, and mobile', 'Time entries assigned to clients, projects, and tasks', 'Approval workflow before billing', 'Weekly time review dashboards', 'Automated reminders for missing time entries'],
    },
    {
      heading: 'Invoice clients professionally and get paid faster',
      body: 'Turn tracked time directly into professional invoices with one click. Include or exclude specific time entries, apply write-offs, add expenses, and send. Clients can pay online with credit card or direct debit, meaning cash flow improves without you chasing.\n\nAutomatic payment reminders go out before invoices become overdue. Recurring invoices for retainer clients happen automatically. Multi-currency support handles international clients.',
    },
    {
      heading: 'Know which clients and projects actually make money',
      body: 'Utilization rates matter, but they do not tell the whole story. A fully utilized team working on unprofitable projects is a business in trouble. Novala tracks the full cost of every project (all labour, expenses, and overhead) against the revenue collected, giving you real project profitability.\n\nSee which clients consistently pay full rates and which grind you down on discounts. See which project types deliver the best margins. Make business decisions based on actual data instead of gut feel.',
      bullets: ['Real project profitability including all costs', 'Client-level margin tracking', 'Utilization dashboards per consultant', 'Write-off tracking and analysis'],
    },
  ],
  faqTitle: 'Common questions from professional services firms',
  faq: [
    { question: 'Can we bill different rates for different clients or projects?', answer: 'Yes. Set default rates per consultant, override per client, or override per project. When time is logged, the correct rate is applied automatically based on who did the work and which client or project it was for.' },
    { question: 'Do you support retainer billing?', answer: 'Yes. Set up recurring monthly retainer invoices that go out automatically. Track time against the retainer to show clients value delivered. Automatically alert when a client is approaching or exceeding their retainer hours.' },
    { question: 'Can we invoice in US dollars or Euros for international clients?', answer: 'Yes. Multi-currency support is built in. Invoice clients in their local currency, and Novala handles the exchange rate calculations for your accounting.' },
    { question: 'Can our consultants log time from their phones?', answer: 'Yes. The mobile app works on iOS and Android. Consultants can start and stop timers, add notes, and view their weekly time entries from anywhere.' },
  ],
  relatedTitle: 'EXPLORE OTHER INDUSTRIES',
  related: [
    { title: 'Construction and trades', description: 'Job sites and project accounting.', href: '/industry/construction' },
    { title: 'Wholesale and manufacturing', description: 'Inventory and supply chain.', href: '/industry/wholesale' },
    { title: 'Healthcare and clinics', description: 'Practices and medical offices.', href: '/industry/healthcare' },
  ],
};

export const WHOLESALE_EN: IndustryContent = {
  slug: 'wholesale',
  eyebrow: 'FOR WHOLESALE AND MANUFACTURING',
  heroTitle: 'Inventory, orders, and payroll for wholesalers and manufacturers',
  heroSubtitle: 'Track inventory across locations, manage suppliers and purchase orders, handle production costs, and run payroll for warehouse and production teams. Built for the operational complexity of wholesale and manufacturing businesses worldwide.',
  heroPhoto: '/photos/wholesale.jpg',
  introEyebrow: 'WHY WHOLESALE BUSINESSES CHOOSE NOVALA',
  introTitle: 'Software that connects your warehouse, orders, and accounting',
  introBody: 'Wholesale and manufacturing businesses have unique challenges. You are managing physical inventory that costs real money to hold. You have suppliers with payment terms and lead times. You have customers who order in bulk and expect volume pricing. You have production processes with material and labour costs that need to be tracked accurately.\n\nMost business software treats you like a service business. Numbers on a screen do not reflect the reality of pallets on a warehouse floor or work orders in production. Novala was designed to handle physical goods, real inventory, and the operational flow of wholesale and manufacturing.',
  features: [
    {
      heading: 'Real-time inventory across every location',
      body: 'Whether you have one warehouse or ten, you need to know what you have, where it is, and what it is worth at any moment. Novala tracks inventory in real time across all your locations. Transfers between warehouses are logged. Adjustments for damage or shrinkage are recorded with reasons.\n\nSet reorder points and get alerts when stock runs low. Track batch numbers and expiry dates for regulated products. Handle multiple units of measure (each, box, pallet) with automatic conversions.',
      bullets: ['Real-time stock levels across all locations', 'Automatic reorder point alerts', 'Batch and expiry date tracking', 'Multiple units of measure with conversions', 'Inventory transfers between warehouses'],
    },
    {
      heading: 'Purchase orders and supplier management',
      body: 'Manage your entire supply chain in one place. Create purchase orders that flow directly to suppliers. Track expected delivery dates and receive alerts when shipments are late. Match invoices to POs and receiving records for accurate three-way matching.\n\nManage supplier payment terms, discounts for early payment, and volume pricing agreements. Get visibility into your total spend per supplier to negotiate better terms.',
    },
    {
      heading: 'Production costing and margin analysis',
      body: 'Know exactly what it costs to make or assemble each product you sell. Track raw materials, direct labour, and overhead per work order. Compare estimated vs actual costs to identify inefficiencies. See gross margin per product, per customer, and per sales channel.\n\nWhen input costs change (materials go up, labour rates increase), automatically recalculate product costs and margins. Get alerts when a product\'s margin drops below your minimum threshold.',
      bullets: ['Bill of materials for every product', 'Work order costing with materials and labour', 'Product-level margin analysis', 'Automatic cost recalculation as inputs change'],
    },
  ],
  faqTitle: 'Common questions from wholesale and manufacturing businesses',
  faq: [
    { question: 'Do you support serial number tracking?', answer: 'Yes. For products where you need to track individual units (electronics, high-value items, warranty-tracked products), Novala supports serial number tracking through receiving, storage, and sale.' },
    { question: 'Can we handle multiple currencies for international suppliers?', answer: 'Yes. Purchase orders can be created in any currency, and exchange rates are captured at receiving for accurate cost accounting. Payments to foreign suppliers handle currency conversion.' },
    { question: 'Do you integrate with shipping carriers?', answer: 'We are working on integrations with Canada Post, Purolator, and other major  carriers. In the meantime, you can generate packing slips and shipping documents that work with any carrier.' },
    { question: 'Can we track landed cost accurately?', answer: 'Yes. Beyond the supplier invoice, you can add freight, duties, customs fees, and other landing costs to a receipt. These are allocated across the items in the shipment for accurate product costing.' },
  ],
  relatedTitle: 'EXPLORE OTHER INDUSTRIES',
  related: [
    { title: 'Construction and trades', description: 'Job sites and project accounting.', href: '/industry/construction' },
    { title: 'Professional services', description: 'Consultants, agencies, and firms.', href: '/industry/professional-services' },
    { title: 'Healthcare and clinics', description: 'Practices and medical offices.', href: '/industry/healthcare' },
  ],
};

export const HEALTHCARE_EN: IndustryContent = {
  slug: 'healthcare',
  eyebrow: 'FOR HEALTHCARE AND CLINICS',
  heroTitle: 'Payroll and practice management for  healthcare providers',
  heroSubtitle: 'Handle practitioner scheduling, patient billing, insurance claims, and payroll for medical and dental practices, physiotherapy clinics, and other healthcare businesses. Built with the compliance and workflow requirements of  healthcare in mind.',
  heroPhoto: '/photos/healthcare.jpg',
  introEyebrow: 'WHY HEALTHCARE PRACTICES CHOOSE NOVALA',
  introTitle: 'Software built for the operational complexity of  healthcare',
  introBody: 'Running a healthcare practice worldwide means juggling patient care, insurance billing, practitioner schedules, staff payroll, and regulatory compliance. Provincial health plans have their own billing codes and rules. Extended health insurance plans each have different reimbursement processes. Practitioners often work at multiple clinics with different rates.\n\nGeneric business software cannot handle this complexity. Healthcare-specific software often costs enterprise prices and requires long implementations. Novala is designed to give small and mid-size  healthcare practices the operational tools they need at a price that works for a growing practice.',
  features: [
    {
      heading: 'Practitioner scheduling and time management',
      body: 'Manage schedules for practitioners across multiple locations. Track hours per practitioner, per location, and per service type. Handle different pay structures (hourly, per session, percentage of revenue) automatically.\n\nWhen a practitioner works at multiple clinics, allocate hours and revenue to the right location for accurate reporting. Substitute practitioners can be added quickly with the right permissions and pay rates.',
      bullets: ['Multi-location scheduling for practitioners', 'Support for hourly, per-session, and percentage pay', 'Automatic revenue allocation across locations', 'Substitute practitioner management'],
    },
    {
      heading: 'Patient billing and insurance handling',
      body: 'Track patient billing including private pay, extended health insurance, and provincial health plan components. Generate receipts patients can submit to their insurers. Track outstanding balances and send automated payment reminders.\n\nFor practices that direct-bill insurance, integrate with major  insurance providers for faster reimbursement. Track denied claims and appeal them through the system.',
    },
    {
      heading: 'Payroll for healthcare staff',
      body: 'Healthcare payroll has unique complexity. Some staff are hourly (receptionists, administrators). Some are salaried (office managers). Some are commission-based (associates, contractors). Novala handles all of these in one system with correct T4 or T4A generation at year end.\n\nHandle mandatory professional dues, continuing education reimbursements, and other healthcare-specific benefits. Statutory holiday pay, vacation accruals, and overtime are calculated per provincial employment standards.',
      bullets: ['T4 for employees, T4A for contractors', 'Professional dues and CE reimbursement tracking', 'Provincial employment standards compliance', 'Commission and percentage pay structures'],
    },
  ],
  faqTitle: 'Common questions from healthcare practices',
  faq: [
    { question: 'Does Novala replace my EMR or practice management system?', answer: 'No. Novala handles the business side (payroll, accounting, billing) and works alongside your existing EMR or clinical system. We can integrate with common healthcare software when needed.' },
    { question: 'Is patient data stored in Novala?', answer: 'Novala stores billing information (patient name, service, amount) but not clinical health records. Clinical records stay in your EMR. This keeps Novala\'s compliance footprint smaller and focused on financial operations.' },
    { question: 'How do you handle direct billing to insurance providers?', answer: 'For practices that direct-bill, we integrate with major  insurance providers to submit claims electronically. Track claim status, handle denials, and reconcile payments as they come in.' },
    { question: 'Can you handle multiple practitioners with different pay structures?', answer: 'Yes. Each practitioner can have a different compensation structure: hourly, salaried, per-session, or percentage of revenue. Novala calculates correct pay for each based on their agreed structure.' },
  ],
  relatedTitle: 'EXPLORE OTHER INDUSTRIES',
  related: [
    { title: 'Construction and trades', description: 'Job sites and project accounting.', href: '/industry/construction' },
    { title: 'Professional services', description: 'Consultants, agencies, and firms.', href: '/industry/professional-services' },
    { title: 'Wholesale and manufacturing', description: 'Inventory and supply chain.', href: '/industry/wholesale' },
  ],
};

export const CONSTRUCTION_FR: IndustryContent = {
  slug: 'construction',
  eyebrow: 'POUR LA CONSTRUCTION ET LES MÉTIERS',
  heroTitle: 'Paie et comptabilité conçues pour les équipes de construction',
  heroSubtitle: 'Suivez les heures sur plusieurs chantiers, gérez les coûts de projet, gérez les sous-traitants, et restez conformes aux exigences canadiennes de paie de construction.',
  heroPhoto: '/photos/construction.jpg',
  introEyebrow: 'POURQUOI LES ENTREPRISES DE CONSTRUCTION CHOISISSENT NOVALA',
  introTitle: 'Logiciel conçu pour la réalité de gérer une entreprise de construction au Canada',
  introBody: 'Gérer une entreprise de construction n est pas comme gérer un magasin de détail. Vous avez des équipes réparties sur plusieurs chantiers, des travailleurs avec différents taux de rémunération, des coûts de matériaux qui fluctuent par projet, des exigences CSST qui varient par province.\n\nNovala a été bâtie spécifiquement pour gérer la complexité opérationnelle des entreprises de construction canadiennes.',
  features: [
    { heading: 'Suivi du temps multi-sites', body: 'Vos travailleurs ne sont pas assis à un bureau. Le suivi du temps mobile de Novala fonctionne hors ligne et se synchronise quand la connexion revient. La vérification GPS confirme la présence sur site.', bullets: ['Pointage mobile avec vérification GPS', 'Fonctionne hors ligne', 'Approbation par contremaître', 'Calcul automatique des heures supplémentaires'] },
    { heading: 'Coûts de projet en temps réel', body: 'Novala suit la main-d oeuvre, les matériaux, et les coûts de sous-traitants par projet en temps réel. Voyez votre marge sur chaque projet pendant qu il se déroule.' },
    { heading: 'Conformité pour chaque province', body: 'La paie de construction est complexe. Novala gère les cotisations syndicales, les taux d apprenti, les remises CSST et les dépôts T4A automatiquement.', bullets: ['Cotisations syndicales déduites automatiquement', 'Progression des taux d apprenti', 'Remises CSST provinciales', 'Génération T4A pour sous-traitants'] },
  ],
  faqTitle: 'Questions courantes des entreprises de construction',
  faq: [
    { question: 'Novala peut-elle gérer mon mélange d employés et de sous-traitants?', answer: 'Oui. Novala gère les employés (T4) et les paiements de sous-traitants (T4A) dans le même système avec génération automatique des feuillets fiscaux.' },
    { question: 'Comment fonctionne le pointage GPS sans signal?', answer: 'L application fonctionne hors ligne. Les travailleurs pointent et la localisation est capturée. Tout se synchronise quand le signal revient.' },
    { question: 'Supportez-vous les salaires prescrits?', answer: 'Oui. Configurez différents taux par projet et Novala les applique automatiquement.' },
  ],
  relatedTitle: 'EXPLORER D AUTRES SECTEURS',
  related: [
    { title: 'Services professionnels', description: 'Consultants et agences.', href: '/industry/professional-services' },
    { title: 'Gros et fabrication', description: 'Inventaire et chaîne d approvisionnement.', href: '/industry/wholesale' },
    { title: 'Santé et cliniques', description: 'Pratiques médicales.', href: '/industry/healthcare' },
  ],
};

export const PROFESSIONAL_FR: IndustryContent = {
  slug: 'professional-services',
  eyebrow: 'POUR LES SERVICES PROFESSIONNELS',
  heroTitle: 'Suivi du temps et facturation pour consultants, agences et cabinets',
  heroSubtitle: 'Suivez précisément les heures facturables, facturez les clients professionnellement, comprenez la rentabilité des projets.',
  heroPhoto: '/photos/professional-services.jpg',
  introEyebrow: 'POURQUOI LES CABINETS DE SERVICES CHOISISSENT NOVALA',
  introTitle: 'Logiciel conçu pour comment vous facturez réellement',
  introBody: 'Que vous gériez une pratique de consultation, une agence de design, ou un cabinet, votre entreprise fonctionne sur les heures facturables et les relations clients.\n\nNovala connecte tout pour que vous puissiez vous concentrer sur la livraison d un excellent travail.',
  features: [
    { heading: 'Suivi des heures facturables sans friction', body: 'Vos consultants doivent enregistrer le temps en secondes. Le suivi de Novala fonctionne du navigateur, bureau ou mobile avec un seul geste.', bullets: ['Minuteurs sur web, bureau et mobile', 'Assignation aux clients, projets, tâches', 'Flux d approbation', 'Rappels automatisés'] },
    { heading: 'Facturez les clients professionnellement', body: 'Transformez le temps suivi en factures professionnelles en un clic. Les clients peuvent payer en ligne. Les rappels automatiques sortent avant les factures en retard.' },
    { heading: 'Sachez quels clients rapportent vraiment', body: 'Novala suit le coût complet de chaque projet contre le revenu collecté, donnant une véritable rentabilité de projet.', bullets: ['Rentabilité de projet réelle', 'Suivi de marge par client', 'Tableaux d utilisation', 'Analyse des radiations'] },
  ],
  faqTitle: 'Questions courantes des cabinets professionnels',
  faq: [
    { question: 'Pouvons-nous facturer différents taux pour différents clients?', answer: 'Oui. Configurez les taux par consultant, remplacez par client, ou par projet.' },
    { question: 'Supportez-vous la facturation de retenue?', answer: 'Oui. Configurez des factures de retenue mensuelles récurrentes automatiques.' },
    { question: 'Pouvons-nous facturer en dollars US ou en euros?', answer: 'Oui. Le support multi-devises est intégré.' },
  ],
  relatedTitle: 'EXPLORER D AUTRES SECTEURS',
  related: [
    { title: 'Construction et métiers', description: 'Chantiers et comptabilité de projet.', href: '/industry/construction' },
    { title: 'Gros et fabrication', description: 'Inventaire et chaîne.', href: '/industry/wholesale' },
    { title: 'Santé et cliniques', description: 'Pratiques médicales.', href: '/industry/healthcare' },
  ],
};

export const WHOLESALE_FR: IndustryContent = {
  slug: 'wholesale',
  eyebrow: 'POUR LE GROS ET LA FABRICATION',
  heroTitle: 'Inventaire, commandes et paie pour grossistes et fabricants',
  heroSubtitle: 'Suivez l inventaire à travers les emplacements, gérez les fournisseurs, gérez les coûts de production, et exécutez la paie.',
  heroPhoto: '/photos/wholesale.jpg',
  introEyebrow: 'POURQUOI LES ENTREPRISES DE GROS CHOISISSENT NOVALA',
  introTitle: 'Logiciel qui connecte votre entrepôt, commandes et comptabilité',
  introBody: 'Les entreprises de gros et de fabrication ont des défis uniques. Vous gérez de l inventaire physique qui coûte de l argent réel. Vous avez des fournisseurs avec des conditions de paiement.\n\nNovala a été conçue pour gérer les biens physiques, l inventaire réel et le flux opérationnel.',
  features: [
    { heading: 'Inventaire en temps réel', body: 'Novala suit l inventaire en temps réel à travers tous vos emplacements. Configurez des points de réapprovisionnement.', bullets: ['Niveaux de stock en temps réel', 'Alertes de réapprovisionnement', 'Suivi de lots et dates d expiration', 'Transferts entre entrepôts'] },
    { heading: 'Bons de commande et fournisseurs', body: 'Gérez votre chaîne d approvisionnement en un seul endroit. Créez des bons de commande, suivez les livraisons.' },
    { heading: 'Coûts de production et marges', body: 'Sachez combien coûte de fabriquer chaque produit. Suivez les matières premières, la main-d oeuvre directe.', bullets: ['Nomenclature pour chaque produit', 'Coûts de bons de travail', 'Analyse de marge par produit', 'Recalcul automatique des coûts'] },
  ],
  faqTitle: 'Questions courantes du gros et de la fabrication',
  faq: [
    { question: 'Supportez-vous le suivi par numéro de série?', answer: 'Oui. Novala supporte le suivi par numéro de série pour les produits de valeur.' },
    { question: 'Pouvons-nous gérer plusieurs devises?', answer: 'Oui. Les bons de commande peuvent être créés dans n importe quelle devise.' },
    { question: 'Intégrez-vous avec les transporteurs?', answer: 'Nous travaillons sur des intégrations avec Postes Canada, Purolator et autres transporteurs canadiens.' },
  ],
  relatedTitle: 'EXPLORER D AUTRES SECTEURS',
  related: [
    { title: 'Construction et métiers', description: 'Chantiers.', href: '/industry/construction' },
    { title: 'Services professionnels', description: 'Consultants.', href: '/industry/professional-services' },
    { title: 'Santé et cliniques', description: 'Pratiques médicales.', href: '/industry/healthcare' },
  ],
};

export const HEALTHCARE_FR: IndustryContent = {
  slug: 'healthcare',
  eyebrow: 'POUR LA SANTÉ ET LES CLINIQUES',
  heroTitle: 'Paie et gestion de pratique pour fournisseurs de santé canadiens',
  heroSubtitle: 'Gérez la planification des praticiens, la facturation des patients, les réclamations d assurance et la paie pour les cliniques.',
  heroPhoto: '/photos/healthcare.jpg',
  introEyebrow: 'POURQUOI LES PRATIQUES DE SANTÉ CHOISISSENT NOVALA',
  introTitle: 'Logiciel conçu pour la complexité opérationnelle de la santé canadienne',
  introBody: 'Gérer une pratique de santé au Canada signifie jongler avec les soins aux patients, la facturation d assurance, les horaires des praticiens et la conformité réglementaire.\n\nNovala est conçue pour donner aux pratiques de santé canadiennes de petite et moyenne taille les outils opérationnels dont elles ont besoin.',
  features: [
    { heading: 'Planification et gestion du temps', body: 'Gérez les horaires des praticiens à travers plusieurs emplacements. Suivez les heures par praticien, emplacement et type de service.', bullets: ['Planification multi-sites', 'Support horaire, session et pourcentage', 'Allocation automatique de revenus', 'Gestion de praticiens substituts'] },
    { heading: 'Facturation des patients et assurance', body: 'Suivez la facturation des patients incluant le paiement privé, l assurance santé étendue. Générez des reçus pour les assureurs.' },
    { heading: 'Paie pour le personnel de santé', body: 'La paie de santé a une complexité unique. Novala gère tous les types de rémunération dans un système avec génération T4 ou T4A.', bullets: ['T4 pour employés, T4A pour contractants', 'Suivi des cotisations professionnelles', 'Conformité aux normes d emploi', 'Structures de commission'] },
  ],
  faqTitle: 'Questions courantes des pratiques de santé',
  faq: [
    { question: 'Novala remplace-t-elle mon système EMR?', answer: 'Non. Novala gère le côté affaires et fonctionne aux côtés de votre EMR existant.' },
    { question: 'Les données des patients sont-elles stockées?', answer: 'Novala stocke les informations de facturation mais pas les dossiers cliniques.' },
    { question: 'Comment gérez-vous la facturation directe?', answer: 'Nous intégrons avec les principaux fournisseurs d assurance canadiens pour soumettre les réclamations électroniquement.' },
  ],
  relatedTitle: 'EXPLORER D AUTRES SECTEURS',
  related: [
    { title: 'Construction et métiers', description: 'Chantiers.', href: '/industry/construction' },
    { title: 'Services professionnels', description: 'Consultants.', href: '/industry/professional-services' },
    { title: 'Gros et fabrication', description: 'Inventaire.', href: '/industry/wholesale' },
  ],
};
