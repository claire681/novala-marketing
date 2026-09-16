export interface FeatureItem { title: string; description: string; capabilities: string[]; }
export interface FeaturesContent { title: string; subtitle: string; ctaHeading: string; ctaSubheading: string; ctaButton: string; features: FeatureItem[]; }

export const FEATURES_EN: FeaturesContent = {
  title: 'Everything you need to run your business',
  subtitle: 'All the tools your Canadian small or mid-size business needs, in one platform. No more juggling between different apps.',
  ctaHeading: 'Ready to see it all in action?',
  ctaSubheading: 'Start your free 30-day trial. No credit card required.',
  ctaButton: 'Get started free',
  features: [
    { title: 'Payroll', description: 'Run payroll for your team with full Canadian compliance. Save hours every pay period.', capabilities: ['Automated CPP, EI, and income tax calculations', 'CRA-compliant filings (T4, T4A, ROE)', 'Direct deposit to employees', 'Multi-province support (all 10 provinces + 3 territories)', 'Statutory holiday tracking', 'Vacation pay accruals'] },
    { title: 'Accounting', description: 'Keep your books clean with automated bookkeeping and reporting.', capabilities: ['Automated bookkeeping', 'Bank reconciliation', 'Chart of accounts', 'Journal entries', 'Balance sheets and income statements', 'Cash flow tracking'] },
    { title: 'Invoicing', description: 'Send professional invoices and get paid faster.', capabilities: ['Custom invoice templates', 'Send invoices via email', 'Track invoice status (sent, viewed, paid)', 'Automatic payment reminders', 'Recurring invoices', 'Multi-currency support'] },
    { title: 'Workforce', description: 'Manage your team from hiring to payroll in one place.', capabilities: ['Employee onboarding', 'Time tracking and scheduling', 'PTO and vacation management', 'Benefits administration', 'Employee self-service portal', 'HR document management'] },
    { title: 'Reporting', description: 'Real-time financial insights to make better decisions.', capabilities: ['Financial reports (P&L, Balance Sheet, Cash Flow)', 'Custom reports', 'Real-time dashboards', 'Year-over-year comparisons', 'Export to Excel and PDF', 'Automated report scheduling'] },
    { title: 'Vela Assistant', description: 'Your business assistant answers questions from your own data.', capabilities: ['Natural language queries', 'Instant insights from your data', 'Payroll cost previews', 'Cash flow forecasting', 'Anomaly detection', 'Available on desktop and mobile'] },
    { title: 'Bank & Payments', description: 'Connect your accounts and automate reconciliation.', capabilities: ['Bank feed integration (200+ Canadian institutions)', 'Receipt scanning', 'Expense tracking', 'Bill payments', 'Payment reconciliation', 'Multi-account support'] },
    { title: 'Security', description: 'Enterprise-grade security to protect your business data.', capabilities: ['256-bit SSL encryption', 'SOC 2 compliance', 'Canadian data centers', 'Two-factor authentication', 'Full CRA compliance', 'Regular security audits'] },
  ],
};

export const FEATURES_FR: FeaturesContent = {
  title: 'Tout ce dont vous avez besoin pour gérer votre entreprise',
  subtitle: 'Tous les outils dont votre PME canadienne a besoin, dans une seule plateforme.',
  ctaHeading: 'Prêt à voir tout en action?',
  ctaSubheading: 'Commencez votre essai gratuit de 30 jours. Aucune carte de crédit requise.',
  ctaButton: 'Commencer gratuitement',
  features: [
    { title: 'Paie', description: 'Faites la paie de votre équipe en conformité canadienne complète.', capabilities: ['Calculs automatisés RPC, AE et impôt', 'Dépôts conformes ARC (T4, T4A, RE)', 'Dépôt direct aux employés', 'Support multi-provinces', 'Suivi des jours fériés', 'Accumulations de vacances'] },
    { title: 'Comptabilité', description: 'Gardez vos livres propres avec la comptabilité automatisée.', capabilities: ['Tenue de livres automatisée', 'Rapprochement bancaire', 'Plan comptable', 'Écritures de journal', 'Bilans et états des résultats', 'Suivi des flux de trésorerie'] },
    { title: 'Facturation', description: 'Envoyez des factures professionnelles et soyez payé plus vite.', capabilities: ['Modèles de factures personnalisés', 'Envoi par courriel', 'Suivi des statuts', 'Rappels de paiement automatiques', 'Factures récurrentes', 'Support multi-devises'] },
    { title: 'Personnel', description: 'Gérez votre équipe de l embauche à la paie en un seul endroit.', capabilities: ['Intégration des employés', 'Suivi du temps et planification', 'Gestion des congés', 'Administration des avantages', 'Portail employé', 'Gestion documentaire RH'] },
    { title: 'Rapports', description: 'Aperçus financiers en temps réel.', capabilities: ['Rapports financiers', 'Rapports personnalisés', 'Tableaux de bord en temps réel', 'Comparaisons annuelles', 'Export Excel et PDF', 'Planification automatisée'] },
    { title: 'Assistante Vela', description: 'Votre assistante répond aux questions de vos données.', capabilities: ['Requêtes en langage naturel', 'Aperçus instantanés', 'Prévisions de coûts de paie', 'Prévisions de trésorerie', 'Détection d anomalies', 'Bureau et mobile'] },
    { title: 'Banque et paiements', description: 'Connectez vos comptes et automatisez le rapprochement.', capabilities: ['Intégration bancaire (200+ institutions)', 'Numérisation de reçus', 'Suivi des dépenses', 'Paiement de factures', 'Rapprochement des paiements', 'Support multi-comptes'] },
    { title: 'Sécurité', description: 'Sécurité de niveau entreprise pour protéger vos données.', capabilities: ['Chiffrement SSL 256 bits', 'Conformité SOC 2', 'Centres de données canadiens', 'Authentification à deux facteurs', 'Conformité ARC complète', 'Audits de sécurité réguliers'] },
  ],
};
