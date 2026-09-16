export interface InfoSection { heading?: string; body: string; }
export interface InfoPage { eyebrow: string; title: string; intro: string; sections: InfoSection[]; }

export const CAREERS_EN: InfoPage = {
  eyebrow: 'CAREERS',
  title: 'Join us in building the future of Canadian business',
  intro: 'We are a small, ambitious team based in Edmonton, Alberta. We believe Canadian businesses deserve better tools, and we are building them from the ground up.',
  sections: [
    { heading: 'Our story', body: 'Novala is built by BrightCare Home Healthcare Services Inc. What started as a solution for our own operational challenges has grown into a platform that helps businesses across Canada streamline payroll, accounting, and workforce management.' },
    { heading: 'What we look for', body: 'We hire people who care about craft, who ask hard questions, and who want to solve real problems for real businesses. Technical excellence matters, but so does empathy, curiosity, and a commitment to quality.' },
    { heading: 'Currently open roles', body: 'We are not actively recruiting for specific roles right now, but we are always interested in hearing from exceptional candidates. If Novala resonates with you, we would love to hear your story.' },
    { heading: 'Get in touch', body: 'Send us your resume, portfolio, or a note about why you are interested at careers@getnovala.com. Include something that shows us how you think.' },
  ],
};
export const CAREERS_FR: InfoPage = {
  eyebrow: 'CARRIÈRES',
  title: 'Joignez-vous à nous pour bâtir l avenir des entreprises canadiennes',
  intro: 'Nous sommes une petite équipe ambitieuse basée à Edmonton, en Alberta. Nous croyons que les entreprises canadiennes méritent de meilleurs outils.',
  sections: [
    { heading: 'Notre histoire', body: 'Novala est bâtie par BrightCare Home Healthcare Services Inc. Ce qui a commencé comme une solution pour nos propres défis opérationnels est devenu une plateforme qui aide les entreprises à travers le Canada.' },
    { heading: 'Ce que nous recherchons', body: 'Nous embauchons des gens qui se soucient de la qualité, qui posent des questions difficiles, et qui veulent résoudre de vrais problèmes pour de vraies entreprises.' },
    { heading: 'Postes ouverts actuels', body: 'Nous ne recrutons pas activement pour des rôles spécifiques en ce moment, mais nous sommes toujours intéressés à entendre des candidats exceptionnels.' },
    { heading: 'Nous joindre', body: 'Envoyez-nous votre CV, portfolio, ou une note sur pourquoi vous êtes intéressé à careers@getnovala.com.' },
  ],
};

export const ABOUT_EN: InfoPage = {
  eyebrow: 'ABOUT NOVALA',
  title: 'Software built for Canadian businesses, by Canadians',
  intro: 'Novala is an all-in-one business management platform designed specifically for Canadian small and mid-size businesses. We handle the hard parts of payroll, accounting, and workforce management so you can focus on running your business.',
  sections: [
    { heading: 'Our mission', body: 'Empower Canadian businesses with tools that just work, priced fairly, and built with our specific tax laws, compliance requirements, and business realities in mind.' },
    { heading: 'The company behind Novala', body: 'Novala is developed by BrightCare Home Healthcare Services Inc., a Canadian corporation based in Edmonton, Alberta. Our team brings together experience in accounting, payroll compliance, software engineering, and small business operations.' },
    { heading: 'Why we built this', body: 'Canadian businesses have long been underserved by generic international software. Novala was built to solve the specific challenges Canadian businesses face: CRA compliance, provincial tax variations, ROE filings, T4 slips, GST/HST, and more, all in plain English (or French).' },
    { heading: 'Get in touch', body: 'Have questions about Novala or want to learn more? Contact us at hello@getnovala.com.' },
  ],
};
export const ABOUT_FR: InfoPage = {
  eyebrow: 'À PROPOS DE NOVALA',
  title: 'Logiciel bâti pour les entreprises canadiennes, par des Canadiens',
  intro: 'Novala est une plateforme de gestion tout-en-un conçue spécifiquement pour les PME canadiennes.',
  sections: [
    { heading: 'Notre mission', body: 'Autonomiser les entreprises canadiennes avec des outils qui fonctionnent, à un prix juste, et bâtis avec nos lois fiscales et réalités d entreprise spécifiques.' },
    { heading: 'L entreprise derrière Novala', body: 'Novala est développée par BrightCare Home Healthcare Services Inc., une société canadienne basée à Edmonton, Alberta.' },
    { heading: 'Pourquoi nous l avons construit', body: 'Les entreprises canadiennes ont longtemps été mal servies par des logiciels internationaux génériques. Novala a été bâtie pour résoudre les défis spécifiques des entreprises canadiennes.' },
    { heading: 'Nous joindre', body: 'Des questions sur Novala? Contactez-nous à hello@getnovala.com.' },
  ],
};

export const CONTACT_EN: InfoPage = {
  eyebrow: 'CONTACT',
  title: 'Get in touch',
  intro: 'We are here to help. Reach us however works best for you.',
  sections: [
    { heading: 'General inquiries', body: 'For anything, email us at hello@getnovala.com. We reply within one business day.' },
    { heading: 'Sales', body: 'Interested in Novala for your business? Contact sales@getnovala.com. We can walk you through the platform, answer pricing questions, and help you get started.' },
    { heading: 'Support', body: 'Already a customer? Email support@getnovala.com for the fastest response. You can also chat with Vela (bottom right corner) for immediate answers to common questions.' },
    { heading: 'Privacy and legal', body: 'For privacy concerns, contact privacy@getnovala.com. For legal matters, contact legal@getnovala.com.' },
    { heading: 'Address', body: 'BrightCare Home Healthcare Services Inc. Edmonton, Alberta, Canada.' },
  ],
};
export const CONTACT_FR: InfoPage = {
  eyebrow: 'CONTACT',
  title: 'Nous joindre',
  intro: 'Nous sommes ici pour aider. Joignez-nous de la façon qui vous convient le mieux.',
  sections: [
    { heading: 'Questions générales', body: 'Pour n importe quoi, écrivez-nous à hello@getnovala.com. Nous répondons dans un jour ouvrable.' },
    { heading: 'Ventes', body: 'Intéressé par Novala? Contactez sales@getnovala.com.' },
    { heading: 'Soutien', body: 'Déjà client? Écrivez à support@getnovala.com pour la réponse la plus rapide.' },
    { heading: 'Confidentialité et juridique', body: 'Pour les préoccupations de confidentialité, contactez privacy@getnovala.com.' },
    { heading: 'Adresse', body: 'BrightCare Home Healthcare Services Inc. Edmonton, Alberta, Canada.' },
  ],
};

export const SECURITY_EN: InfoPage = {
  eyebrow: 'SECURITY',
  title: 'Security at Novala',
  intro: 'Your business data is sensitive. We treat it that way. Here is how Novala keeps your information safe.',
  sections: [
    { heading: 'Encryption', body: 'All data in transit is protected with 256-bit SSL/TLS encryption. All data at rest is encrypted using AES-256. Your data is protected whether it is moving between systems or stored in our database.' },
    { heading: 'Canadian data residency', body: 'Your data is stored in Canadian data centers (AWS Canada region). It does not leave the country, ensuring compliance with Canadian data residency requirements.' },
    { heading: 'Access controls', body: 'Two-factor authentication is available for all accounts and required for accounts with elevated privileges. Role-based access control ensures your team members only see what they need to.' },
    { heading: 'Compliance', body: 'Novala follows SOC 2 Type II compliance standards. We undergo regular security audits and penetration testing to identify and address vulnerabilities.' },
    { heading: 'Employee training', body: 'All Novala employees complete security training on hire and annually thereafter. Access to production systems is limited and audited.' },
    { heading: 'Report a security concern', body: 'If you have discovered a security vulnerability, please contact us at security@getnovala.com. We appreciate responsible disclosure and will respond promptly.' },
  ],
};
export const SECURITY_FR: InfoPage = {
  eyebrow: 'SÉCURITÉ',
  title: 'Sécurité chez Novala',
  intro: 'Vos données d entreprise sont sensibles. Nous les traitons comme telles.',
  sections: [
    { heading: 'Chiffrement', body: 'Toutes les données en transit sont protégées avec un chiffrement SSL/TLS 256 bits. Toutes les données au repos sont chiffrées avec AES-256.' },
    { heading: 'Résidence des données canadiennes', body: 'Vos données sont stockées dans des centres de données canadiens (région AWS Canada). Elles ne quittent pas le pays.' },
    { heading: 'Contrôles d accès', body: 'L authentification à deux facteurs est disponible pour tous les comptes.' },
    { heading: 'Conformité', body: 'Novala suit les normes de conformité SOC 2 Type II. Nous subissons des audits de sécurité réguliers.' },
    { heading: 'Formation des employés', body: 'Tous les employés Novala complètent la formation en sécurité à l embauche et annuellement.' },
    { heading: 'Signaler une préoccupation', body: 'Si vous avez découvert une vulnérabilité, contactez security@getnovala.com.' },
  ],
};

export const HELP_EN: InfoPage = {
  eyebrow: 'HELP CENTER',
  title: 'How can we help?',
  intro: 'The fastest way to get answers is to chat with Vela (bottom right corner). For personalized support, email us directly.',
  sections: [
    { heading: 'Chat with Vela', body: 'Vela can answer common questions about Novala, pricing, features, and how to get started. Look for the green V button in the bottom right corner of any page.' },
    { heading: 'Email support', body: 'For account-specific questions or issues, email support@getnovala.com. Our team responds within one business day.' },
    { heading: 'Getting started guides', body: 'Detailed step-by-step guides for setting up your account, running your first payroll, and importing data are coming soon. In the meantime, contact us for personalized onboarding.' },
    { heading: 'System status', body: 'Novala aims for 99.9% uptime. Our public status page and incident reports are coming soon. For urgent concerns, email support@getnovala.com.' },
  ],
};
export const HELP_FR: InfoPage = {
  eyebrow: 'CENTRE D AIDE',
  title: 'Comment pouvons-nous aider?',
  intro: 'La façon la plus rapide d obtenir des réponses est de discuter avec Vela (coin inférieur droit).',
  sections: [
    { heading: 'Discuter avec Vela', body: 'Vela peut répondre aux questions courantes sur Novala.' },
    { heading: 'Soutien par courriel', body: 'Pour les questions spécifiques à votre compte, écrivez à support@getnovala.com.' },
    { heading: 'Guides pour bien commencer', body: 'Des guides détaillés arrivent bientôt.' },
    { heading: 'État du système', body: 'Novala vise 99,9% de disponibilité.' },
  ],
};
