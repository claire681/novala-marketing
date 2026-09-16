export interface InfoSection { heading?: string; body: string; }
export interface RelatedPage { title: string; description: string; href: string; }
export interface InfoPage { eyebrow: string; title: string; intro: string; sections: InfoSection[]; relatedPages?: RelatedPage[]; }

export const CAREERS_EN: InfoPage = {
  eyebrow: 'CAREERS',
  title: 'Join us in building the future of Canadian business',
  intro: 'We are a small, ambitious team based in Edmonton, Alberta. We believe Canadian businesses deserve better tools than they have been given, and we are building them from the ground up. If you care about craft, empathy, and solving real problems for real businesses, we want to hear from you.',
  sections: [
    {
      heading: 'Our story',
      body: 'Novala is built by BrightCare Home Healthcare Services Inc., a Canadian company that started when we could not find software that actually worked for Canadian small businesses. Every payroll app was built for the US market with Canadian compliance bolted on as an afterthought. Every accounting tool assumed you were operating in dollars, in one country, with one tax authority.\n\nWe built Novala from the ground up for Canadian businesses. That means understanding CRA compliance, provincial tax variations, ROE requirements, T4 and T4A filings, GST and HST rules, and everything else that makes running a Canadian business different from anywhere else in the world.\n\nWhat began as an internal tool has grown into a platform that other Canadian businesses can use to streamline their operations, save time, and stay compliant with less effort.',
    },
    {
      heading: 'What we value',
      body: 'We hire people who care about craft. That means writing code you would be proud to show a senior engineer, designing interfaces that respect the user\'s time, and shipping features that actually solve the problem instead of just checking a box.\n\nWe value curiosity. The best product decisions come from deeply understanding customer problems, not from copying what competitors do. We ask hard questions, we test our assumptions, and we are willing to be wrong.\n\nWe value ownership. In a small team, everyone matters. We hire people who take responsibility for outcomes, not just tasks. If something is broken, you fix it (or find the person who can). If something could be better, you make it better.',
    },
    {
      heading: 'How we work',
      body: 'Novala is a remote-first company with a strong Canadian presence. Our core hours are in the Mountain time zone, but we accommodate flexible schedules for team members across the country. We meet in person quarterly for team offsites, planning sessions, and just to get to know each other.\n\nWe use modern tools and modern practices. Code review on every change, continuous deployment, comprehensive testing. We invest in developer experience because good tools multiply what a small team can build. If you have opinions about your dev environment, we want to hear them.',
    },
    {
      heading: 'Current openings',
      body: 'We are not actively recruiting for specific roles right now, but we are always interested in hearing from exceptional candidates. If Novala resonates with you (the mission, the product, the way we work), we would love to hear your story.\n\nParticularly interested in: senior full-stack engineers with TypeScript and Next.js experience, product designers with taste and technical fluency, and Canadian tax specialists who want to shape a product used by thousands of businesses.',
    },
    {
      heading: 'How to apply',
      body: 'Send us your resume, portfolio, GitHub link, or a note about why you are interested to careers@getnovala.com. We read every application personally.\n\nInclude something that shows us how you think. That might be a project you built and are proud of, a Twitter thread that made you change your mind, an essay on a topic that fascinates you, or a critique of Novala itself (please, be honest). Something that gives us a window into who you are beyond a resume.\n\nWe respond to every applicant within two weeks. If you do not hear from us in that time, please follow up, sometimes email gets lost.',
    },
  ],
  relatedPages: [
    { title: 'About Novala', description: 'The company and mission behind our platform.', href: '/about' },
    { title: 'Explore features', description: 'See what you would be building.', href: '/features' },
    { title: 'Contact us', description: 'Other questions or just want to say hi.', href: '/contact' },
  ],
};

export const CAREERS_FR: InfoPage = {
  eyebrow: 'CARRIÈRES',
  title: 'Joignez-vous à nous pour bâtir l avenir des entreprises canadiennes',
  intro: 'Nous sommes une petite équipe ambitieuse basée à Edmonton, en Alberta. Nous croyons que les entreprises canadiennes méritent de meilleurs outils, et nous les bâtissons à partir de zéro.',
  sections: [
    {
      heading: 'Notre histoire',
      body: 'Novala est bâtie par BrightCare Home Healthcare Services Inc. Ce qui a commencé comme un outil interne est devenu une plateforme utilisée par d autres entreprises canadiennes. Nous comprenons la conformité ARC, les variations fiscales provinciales, les exigences RE, les dépôts T4 et T4A, les règles TPS et TVH.',
    },
    {
      heading: 'Ce que nous valorisons',
      body: 'Nous embauchons des gens qui se soucient de la qualité. Cela signifie écrire du code dont vous seriez fier de montrer à un ingénieur senior, concevoir des interfaces qui respectent le temps de l utilisateur, et livrer des fonctionnalités qui résolvent vraiment le problème.\n\nNous valorisons la curiosité et l appropriation. Dans une petite équipe, tout le monde compte. Nous embauchons des gens qui prennent la responsabilité des résultats.',
    },
    {
      heading: 'Postes ouverts',
      body: 'Nous ne recrutons pas activement pour des rôles spécifiques en ce moment, mais nous sommes toujours intéressés à entendre des candidats exceptionnels. Particulièrement intéressés par: ingénieurs full-stack seniors avec expérience TypeScript et Next.js, designers de produits, et spécialistes fiscaux canadiens.',
    },
    {
      heading: 'Comment postuler',
      body: 'Envoyez-nous votre CV, portfolio, ou une note à careers@getnovala.com. Nous lisons chaque candidature personnellement. Incluez quelque chose qui nous montre comment vous pensez, un projet, un essai, une critique de Novala.',
    },
  ],
  relatedPages: [
    { title: 'À propos de Novala', description: 'La compagnie et la mission derrière notre plateforme.', href: '/about' },
    { title: 'Explorer les fonctionnalités', description: 'Voyez ce que vous bâtiriez.', href: '/features' },
    { title: 'Nous contacter', description: 'Autres questions.', href: '/contact' },
  ],
};

export const ABOUT_EN: InfoPage = {
  eyebrow: 'ABOUT NOVALA',
  title: 'Software built for Canadian businesses, by Canadians',
  intro: 'Novala is an all-in-one business management platform designed specifically for Canadian small and mid-size businesses. We handle the hard parts of payroll, accounting, and workforce management so you can focus on running your business, serving your customers, and building what you set out to build.',
  sections: [
    {
      heading: 'Our mission',
      body: 'Canadian businesses have long been underserved by generic international software. The tools available were either too basic (spreadsheets, disconnected apps), too expensive (enterprise systems designed for Fortune 500 companies), or too American (built for US tax law with Canadian compliance added later as an afterthought).\n\nOur mission is to build software that Canadian businesses actually want to use. Tools that just work, priced fairly, and built with our specific tax laws, compliance requirements, and business realities in mind.\n\nWe measure success by the time we save you, the compliance headaches we prevent, and the insights we surface. If Novala makes your business easier to run, we have done our job.',
    },
    {
      heading: 'The company behind Novala',
      body: 'Novala is developed by BrightCare Home Healthcare Services Inc., a Canadian corporation based in Edmonton, Alberta. Our team brings together experience in accounting, payroll compliance, software engineering, and small business operations.\n\nBrightCare originally built the software for its own operational needs, running payroll, managing invoices, tracking a distributed team of home healthcare workers, and staying compliant with the maze of Canadian tax requirements. When other business owners saw what we had built, they asked if they could use it. Novala is the product of that conversation.\n\nWe are a small team, and we intend to stay that way for a while. Small teams ship better software. Small teams stay close to their customers. Small teams make decisions faster.',
    },
    {
      heading: 'Why we built this',
      body: 'Every Canadian small business owner we talked to had the same story: they were spending too much time on paperwork, tax filings, and administrative work, and not enough time actually running their business. The tools they were using were either American products that did not quite fit, expensive enterprise systems that were overkill, or a patchwork of spreadsheets and disconnected apps that created more work than they saved.\n\nNovala exists to change that. Every feature we build has to earn its place by solving a real problem for a real Canadian business. Every workflow has to save someone time or prevent a compliance mistake. Every dollar we charge has to be worth many more dollars in value.',
    },
    {
      heading: 'What we believe',
      body: 'We believe software should be a tool that amplifies what people can do, not a bureaucracy that gets in the way. We believe pricing should be simple and transparent, not designed to trap customers or force them into upsells. We believe support should be easy to reach and staffed by people who actually understand the product.\n\nWe believe Canadian businesses deserve first-class software built for their specific reality, not a US product with a maple leaf sticker. That belief drives every product decision we make.',
    },
    {
      heading: 'Get in touch',
      body: 'Have questions about Novala or want to learn more? Contact us at hello@getnovala.com. For specific inquiries about sales, support, or partnerships, see our contact page for the right email address.\n\nInterested in joining us? Check out our careers page. We are always interested in hearing from exceptional people.',
    },
  ],
  relatedPages: [
    { title: 'Explore features', description: 'See everything Novala includes.', href: '/features' },
    { title: 'Security at Novala', description: 'How we protect your data.', href: '/security' },
    { title: 'Contact us', description: 'Get in touch with our team.', href: '/contact' },
    { title: 'Careers', description: 'Join our small team.', href: '/careers' },
  ],
};

export const ABOUT_FR: InfoPage = {
  eyebrow: 'À PROPOS DE NOVALA',
  title: 'Logiciel bâti pour les entreprises canadiennes, par des Canadiens',
  intro: 'Novala est une plateforme de gestion tout-en-un conçue spécifiquement pour les PME canadiennes. Nous gérons les parties difficiles de la paie, comptabilité et gestion du personnel pour que vous puissiez vous concentrer sur votre entreprise.',
  sections: [
    {
      heading: 'Notre mission',
      body: 'Les entreprises canadiennes ont longtemps été mal servies par des logiciels internationaux génériques. Les outils disponibles étaient soit trop basiques, trop chers, ou trop américains avec la conformité canadienne ajoutée après coup.\n\nNotre mission est de bâtir un logiciel que les entreprises canadiennes veulent vraiment utiliser. Des outils qui fonctionnent, à un prix juste, et bâtis avec nos lois fiscales et réalités spécifiques.',
    },
    {
      heading: 'L entreprise derrière Novala',
      body: 'Novala est développée par BrightCare Home Healthcare Services Inc., une société canadienne basée à Edmonton, Alberta. Notre équipe combine expérience en comptabilité, conformité de paie, ingénierie logicielle et opérations de petites entreprises.\n\nNous sommes une petite équipe, et nous avons l intention de le rester pour un moment. Les petites équipes livrent un meilleur logiciel, restent proches de leurs clients, et prennent des décisions plus rapidement.',
    },
    {
      heading: 'Pourquoi nous l avons construit',
      body: 'Chaque propriétaire de petite entreprise canadienne à qui nous avons parlé avait la même histoire: ils passaient trop de temps sur la paperasse et le travail administratif. Novala existe pour changer cela. Chaque fonctionnalité que nous bâtissons doit gagner sa place en résolvant un vrai problème pour une vraie entreprise canadienne.',
    },
    {
      heading: 'Ce que nous croyons',
      body: 'Nous croyons que le logiciel devrait être un outil qui amplifie ce que les gens peuvent faire. Nous croyons que la tarification devrait être simple et transparente. Nous croyons que les entreprises canadiennes méritent un logiciel de première classe bâti pour leur réalité spécifique.',
    },
    {
      heading: 'Nous joindre',
      body: 'Des questions sur Novala? Contactez-nous à hello@getnovala.com. Pour des demandes spécifiques, consultez notre page de contact.',
    },
  ],
  relatedPages: [
    { title: 'Explorer les fonctionnalités', description: 'Voyez tout ce que Novala inclut.', href: '/features' },
    { title: 'Sécurité chez Novala', description: 'Comment nous protégeons vos données.', href: '/security' },
    { title: 'Nous contacter', description: 'Contactez notre équipe.', href: '/contact' },
    { title: 'Carrières', description: 'Rejoignez notre petite équipe.', href: '/careers' },
  ],
};

export const CONTACT_EN: InfoPage = {
  eyebrow: 'CONTACT',
  title: 'Get in touch',
  intro: 'We are here to help. Whether you are exploring Novala, already using it, or just have questions, reach us however works best for you. We reply to every inquiry personally.',
  sections: [
    {
      heading: 'General inquiries',
      body: 'For anything and everything, email us at hello@getnovala.com. This inbox is monitored throughout the business day and we typically reply within a few hours, always within one business day.\n\nIf your question is about a specific area (sales, support, privacy, legal), sending it to the specialized address below will get you a faster, more accurate answer. But hello@ is always a safe bet if you are not sure.',
    },
    {
      heading: 'Sales inquiries',
      body: 'Interested in Novala for your business? Contact sales@getnovala.com. Our sales team can walk you through the platform, answer pricing and plan questions, help you compare Novala to your current tools, and set you up with a personalized demo.\n\nIf you represent a business with more than fifty employees or have specific integration needs, mention that in your email so we can route you to the right person.',
    },
    {
      heading: 'Customer support',
      body: 'Already a Novala customer? Email support@getnovala.com for the fastest response. Include your account email and a description of what is happening. Screenshots or a screen recording help us diagnose the issue faster.\n\nFor time-sensitive issues (payroll not processing, urgent billing questions), mark your email as urgent in the subject line.\n\nYou can also chat with Vela (the green V button in the bottom right corner) for immediate answers to common questions. Vela can answer questions about pricing, features, plans, and how to get started.',
    },
    {
      heading: 'Privacy and legal',
      body: 'For privacy-related questions, contact privacy@getnovala.com. This includes data access requests, deletion requests, questions about how we handle your data, and privacy complaints.\n\nFor legal matters (partnerships, contracts, DMCA notices, legal notices to serve on the company), contact legal@getnovala.com.\n\nFor security vulnerability disclosures, contact security@getnovala.com. We appreciate responsible disclosure and will respond promptly.',
    },
    {
      heading: 'Our address',
      body: 'BrightCare Home Healthcare Services Inc. (operating Novala) is registered in Alberta, Canada. Our headquarters and team are in Edmonton, though we work remotely across the country.\n\nFor legal notices or physical mail, contact us via email first to get the current mailing address.',
    },
    {
      heading: 'Response times',
      body: 'Our commitment: all email inquiries get a response within one business day. Most get a response within a few hours. Complex technical questions may take longer to fully resolve, but we will always acknowledge receipt promptly.\n\nWe are a Canadian company operating in the Mountain time zone. Emails sent overnight or on weekends will be answered when the team is back online.',
    },
  ],
  relatedPages: [
    { title: 'Help center', description: 'FAQs and getting started guides.', href: '/help' },
    { title: 'Security policy', description: 'How we protect your data.', href: '/security' },
    { title: 'About Novala', description: 'Learn about the company.', href: '/about' },
  ],
};

export const CONTACT_FR: InfoPage = {
  eyebrow: 'CONTACT',
  title: 'Nous joindre',
  intro: 'Nous sommes ici pour aider. Que vous exploriez Novala, l utilisiez déjà, ou ayez simplement des questions, joignez-nous de la façon qui vous convient.',
  sections: [
    { heading: 'Questions générales', body: 'Pour n importe quoi, écrivez-nous à hello@getnovala.com. Nous répondons dans un jour ouvrable, souvent en quelques heures.' },
    { heading: 'Ventes', body: 'Intéressé par Novala? Contactez sales@getnovala.com. Notre équipe peut vous guider à travers la plateforme et répondre aux questions de tarification.' },
    { heading: 'Soutien à la clientèle', body: 'Déjà client? Écrivez à support@getnovala.com pour la réponse la plus rapide. Vous pouvez aussi discuter avec Vela (bouton V vert en bas à droite).' },
    { heading: 'Confidentialité et juridique', body: 'Pour la confidentialité, contactez privacy@getnovala.com. Pour les questions juridiques, legal@getnovala.com. Pour la sécurité, security@getnovala.com.' },
    { heading: 'Notre adresse', body: 'BrightCare Home Healthcare Services Inc. est enregistrée en Alberta, Canada. Notre siège est à Edmonton, mais nous travaillons à distance à travers le pays.' },
    { heading: 'Temps de réponse', body: 'Notre engagement: toutes les demandes par courriel reçoivent une réponse dans un jour ouvrable. La plupart reçoivent une réponse en quelques heures.' },
  ],
  relatedPages: [
    { title: 'Centre d aide', description: 'FAQ et guides.', href: '/help' },
    { title: 'Politique de sécurité', description: 'Comment nous protégeons vos données.', href: '/security' },
    { title: 'À propos de Novala', description: 'En apprendre plus sur l entreprise.', href: '/about' },
  ],
};

export const SECURITY_EN: InfoPage = {
  eyebrow: 'SECURITY',
  title: 'Security at Novala',
  intro: 'Your business data is sensitive. Payroll records, financial statements, employee information, tax filings, these are among the most important records your business keeps. We treat them that way. This page explains how Novala protects your information at every layer.',
  sections: [
    {
      heading: 'Data encryption',
      body: 'All data transmitted between your device and Novala is protected with 256-bit SSL/TLS encryption. This is the same standard used by online banking and is considered military-grade.\n\nAll data stored in Novala is encrypted at rest using AES-256, the industry-standard encryption algorithm. Database files, backups, log files, and file attachments are all encrypted. Even if someone gained physical access to our servers, they would not be able to read your data without the encryption keys.\n\nEncryption keys are managed through a hardware security module (HSM) and rotated regularly. Access to keys is limited to a small number of authorized systems and logged.',
    },
    {
      heading: 'Canadian data residency',
      body: 'Your data is stored in Canadian data centers, specifically in the AWS Canada (Central) region located in Montreal. Your data does not leave Canada. This ensures compliance with Canadian data residency requirements and protects your data from foreign government access requests.\n\nWe do not transfer personal data outside Canada except when strictly necessary for specific integrated services (for example, credit card processing may involve international networks), and only after careful legal review.\n\nBackups are also stored in Canadian data centers, in a geographically separate region to protect against localized outages or disasters.',
    },
    {
      heading: 'Access controls',
      body: 'Two-factor authentication (2FA) is available for all user accounts and required for accounts with elevated privileges (administrators, accountants with client access). We support both SMS and authenticator app (TOTP) methods.\n\nRole-based access control (RBAC) ensures your team members only see what they need to. You can create custom roles or use our built-in roles (Owner, Admin, Accountant, Payroll Manager, Employee).\n\nAll authentication events are logged, and you can review your account\'s login history at any time. Unusual login attempts (from new devices, new locations, or unusual times) trigger email notifications.',
    },
    {
      heading: 'Compliance and certifications',
      body: 'Novala follows SOC 2 Type II compliance standards. This includes controls over security, availability, processing integrity, confidentiality, and privacy. Our compliance is validated through annual audits by independent third parties.\n\nWe undergo regular penetration testing to identify and address vulnerabilities before they can be exploited. Findings are prioritized and remediated according to their severity, with critical issues addressed within days.\n\nOur payroll processing complies with all applicable Canadian tax and employment laws, and we work directly with the CRA to ensure our filings meet current requirements.',
    },
    {
      heading: 'Employee training and access',
      body: 'All Novala employees complete security training on their first day and annually thereafter. Training covers password hygiene, phishing recognition, safe handling of customer data, and incident response procedures.\n\nAccess to production systems is limited to a small number of engineers with a demonstrated need. All production access is logged, and privileged actions require additional authorization.\n\nCustomer support representatives can view your account when necessary to help you, but only after you have opened a support ticket. This access is logged and reviewed.',
    },
    {
      heading: 'Incident response',
      body: 'We have an incident response plan in place for security events. In the unlikely event of a data breach affecting your business, we will notify you within 72 hours of confirmation, in accordance with PIPEDA requirements.\n\nOur team is trained to respond quickly to security incidents, contain the impact, notify affected parties, and prevent recurrence. Detailed incident reports are available on request for enterprise customers.',
    },
    {
      heading: 'Report a security vulnerability',
      body: 'If you have discovered a security vulnerability in Novala, please contact us at security@getnovala.com. We take these reports seriously and respond within one business day.\n\nWe practice responsible disclosure and appreciate researchers who work with us to keep our customers safe. We do not currently offer a paid bug bounty program, but we recognize significant contributions with public acknowledgment (with your permission) and Novala swag.',
    },
  ],
  relatedPages: [
    { title: 'Privacy policy', description: 'How we handle your personal information.', href: '/privacy' },
    { title: 'Terms of service', description: 'The agreement governing your use of Novala.', href: '/terms' },
    { title: 'Contact us', description: 'For security or compliance questions.', href: '/contact' },
  ],
};

export const SECURITY_FR: InfoPage = {
  eyebrow: 'SÉCURITÉ',
  title: 'Sécurité chez Novala',
  intro: 'Vos données d entreprise sont sensibles. Nous les traitons comme telles. Cette page explique comment Novala protège vos informations à chaque niveau.',
  sections: [
    { heading: 'Chiffrement des données', body: 'Toutes les données en transit sont protégées avec un chiffrement SSL/TLS 256 bits. Toutes les données au repos sont chiffrées avec AES-256. Les clés de chiffrement sont gérées via un module de sécurité matériel et régulièrement remplacées.' },
    { heading: 'Résidence des données canadiennes', body: 'Vos données sont stockées dans des centres de données canadiens (région AWS Canada Central à Montréal). Vos données ne quittent pas le Canada, assurant la conformité avec les exigences canadiennes.' },
    { heading: 'Contrôles d accès', body: 'L authentification à deux facteurs est disponible pour tous les comptes et requise pour les comptes avec privilèges élevés. Le contrôle d accès basé sur les rôles assure que votre équipe ne voit que ce dont elle a besoin.' },
    { heading: 'Conformité et certifications', body: 'Novala suit les normes SOC 2 Type II. Nous subissons des tests de pénétration réguliers. Notre traitement de paie est conforme à toutes les lois fiscales canadiennes applicables.' },
    { heading: 'Formation des employés', body: 'Tous les employés Novala complètent la formation en sécurité à l embauche et annuellement. L accès aux systèmes de production est limité à un petit nombre d ingénieurs.' },
    { heading: 'Réponse aux incidents', body: 'Nous avons un plan de réponse aux incidents. En cas de violation de données, nous vous notifierons dans les 72 heures conformément aux exigences LPRPDE.' },
    { heading: 'Signaler une vulnérabilité', body: 'Si vous avez découvert une vulnérabilité, contactez security@getnovala.com. Nous répondons dans un jour ouvrable et pratiquons la divulgation responsable.' },
  ],
  relatedPages: [
    { title: 'Politique de confidentialité', description: 'Comment nous gérons vos données personnelles.', href: '/privacy' },
    { title: 'Conditions d utilisation', description: 'L accord qui régit votre utilisation de Novala.', href: '/terms' },
    { title: 'Nous contacter', description: 'Pour les questions de sécurité.', href: '/contact' },
  ],
};

export const HELP_EN: InfoPage = {
  eyebrow: 'HELP CENTER',
  title: 'How can we help?',
  intro: 'Get answers to your questions about Novala. The fastest way to help is Vela (the green V in the bottom right corner). For personalized support, email us directly. For deeper learning, check our guides and tutorials.',
  sections: [
    {
      heading: 'Chat with Vela',
      body: 'Vela is your Novala assistant, available on every page. Look for the green V button in the bottom right corner. Click it to open a chat and ask questions about Novala, pricing, features, or how to get started.\n\nVela can answer common questions instantly, help you find the right feature for your needs, walk you through the pricing plans, and connect you with a human when you need one. It works 24/7 and never gets tired.\n\nOnce you have signed up for Novala, Vela can also answer questions using your actual business data (things like how much your next payroll will cost, or which invoices are overdue).',
    },
    {
      heading: 'Email support',
      body: 'For account-specific questions, technical issues, or anything that requires a human, email support@getnovala.com. Our team is based in Canada and responds within one business day, usually within a few hours during the day.\n\nWhen emailing support, please include: your account email (so we can find your account), a clear description of what you are trying to do, what actually happened, any error messages you saw, and screenshots or a screen recording if applicable. The more context you give us upfront, the faster we can help.\n\nFor time-sensitive issues like payroll not processing or urgent billing questions, put URGENT in the subject line.',
    },
    {
      heading: 'Getting started with Novala',
      body: 'Just signed up? Here is what to do first. Complete your business profile (name, address, tax numbers). Add your first employees or contractors. Connect your bank account for direct deposit. Run a test payroll to make sure everything is calculated correctly. Set up your accounting chart of accounts (we can suggest one based on your industry).\n\nDetailed step-by-step onboarding guides are coming soon. In the meantime, our support team offers free onboarding help. Email support@getnovala.com and mention you would like onboarding assistance.',
    },
    {
      heading: 'Popular topics',
      body: 'Some things customers ask about most often: setting up automatic CRA remittances, generating year-end T4 and T4A slips, importing data from QuickBooks or Wave, setting up multi-province payroll, creating custom reports, connecting your bank for automatic transaction imports.\n\nAll of these are supported in Novala. If you need help with any of them, email support and we will point you to the right feature or walk you through it.',
    },
    {
      heading: 'System status',
      body: 'Novala aims for 99.9% uptime. Our infrastructure runs on AWS Canada with multiple redundancies to keep the platform available even if individual components fail.\n\nA public status page with real-time information and incident reports is coming soon. Until then, if you are experiencing issues, first check whether it might be your internet connection or browser. If Novala itself is down, we will typically send an email notification to affected accounts and post updates on our status page.',
    },
    {
      heading: 'Feature requests and feedback',
      body: 'We build Novala based on what our customers actually need. If there is a feature you wish existed, tell us. Email feedback@getnovala.com with your idea, why it matters, and how it would help your business.\n\nWe read every feature request and prioritize based on customer impact. Some requests become features within weeks, others take longer, and some do not fit our vision, but every one is considered.',
    },
  ],
  relatedPages: [
    { title: 'Contact us', description: 'Reach our team directly.', href: '/contact' },
    { title: 'Explore features', description: 'See what Novala can do.', href: '/features' },
    { title: 'Security', description: 'How we protect your data.', href: '/security' },
  ],
};

export const HELP_FR: InfoPage = {
  eyebrow: 'CENTRE D AIDE',
  title: 'Comment pouvons-nous aider?',
  intro: 'Obtenez des réponses à vos questions sur Novala. La façon la plus rapide est Vela (le V vert en bas à droite). Pour un soutien personnalisé, écrivez-nous directement.',
  sections: [
    { heading: 'Discuter avec Vela', body: 'Vela est votre assistante Novala, disponible sur chaque page. Cliquez sur le bouton V vert pour poser des questions sur Novala, la tarification, les fonctionnalités.' },
    { heading: 'Soutien par courriel', body: 'Pour les questions spécifiques à votre compte, écrivez à support@getnovala.com. Notre équipe basée au Canada répond dans un jour ouvrable.' },
    { heading: 'Bien commencer avec Novala', body: 'Complétez votre profil d entreprise, ajoutez vos premiers employés, connectez votre compte bancaire, exécutez une paie test. Notre équipe offre de l aide gratuite pour l intégration.' },
    { heading: 'Sujets populaires', body: 'Configuration des versements ARC automatiques, génération des T4 et T4A, importation depuis QuickBooks ou Wave, paie multi-provinces, rapports personnalisés.' },
    { heading: 'État du système', body: 'Novala vise 99,9% de disponibilité. Une page de statut publique arrive bientôt.' },
    { heading: 'Demandes de fonctionnalités', body: 'Nous bâtissons Novala selon les besoins réels de nos clients. Écrivez à feedback@getnovala.com avec vos idées.' },
  ],
  relatedPages: [
    { title: 'Nous contacter', description: 'Joignez notre équipe directement.', href: '/contact' },
    { title: 'Explorer les fonctionnalités', description: 'Voyez ce que Novala peut faire.', href: '/features' },
    { title: 'Sécurité', description: 'Comment nous protégeons vos données.', href: '/security' },
  ],
};
