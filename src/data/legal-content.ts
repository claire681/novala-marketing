export interface LegalSection { heading: string; body: string; }
export interface LegalContent { title: string; lastUpdated: string; intro: string; sections: LegalSection[]; }

export const TERMS_EN: LegalContent = {
  title: 'Terms of Service',
  lastUpdated: 'Last updated: September 15, 2026',
  intro: 'Welcome to Novala. These Terms of Service govern your use of the Novala platform and services provided by BrightCare Home Healthcare Services Inc. ("Novala", "we", "us", "our"). By accessing or using our services, you agree to be bound by these terms.',
  sections: [
    { heading: '1. Acceptance of Terms', body: 'By creating an account or using Novala, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services.' },
    { heading: '2. Description of Service', body: 'Novala is a business management platform providing payroll, accounting, invoicing, workforce management, and related services to Canadian small and mid-size businesses. Services are provided on a subscription basis.' },
    { heading: '3. Account Registration', body: 'To use Novala, you must create an account with accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old and legally able to enter into contracts.' },
    { heading: '4. Subscription and Billing', body: 'Novala offers subscription plans billed monthly or annually. Fees are charged in advance and are non-refundable except as required by law. You authorize us to charge your payment method on a recurring basis. Prices may change with 30 days notice.' },
    { heading: '5. Cancellation', body: 'You may cancel your subscription at any time from your account settings. Cancellations take effect at the end of the current billing period. No refunds are provided for partial billing periods except as required by applicable law.' },
    { heading: '6. Your Content and Data', body: 'You retain ownership of all business data you input into Novala. You grant us a license to process this data to provide the services. We will not sell your data or share it with third parties except as described in our Privacy Policy.' },
    { heading: '7. Intellectual Property', body: 'The Novala platform, including all software, designs, trademarks, and content, is the property of Novala and its licensors. You may not copy, modify, distribute, or create derivative works without our written permission.' },
    { heading: '8. Acceptable Use', body: 'You agree not to use Novala for any unlawful purpose, to transmit malicious code, to attempt unauthorized access, to interfere with other users, or to violate any applicable laws including tax and payroll regulations.' },
    { heading: '9. Third-Party Services', body: 'Novala may integrate with third-party services (banks, tax authorities, payment processors). Your use of these services is subject to their respective terms. We are not responsible for third-party service availability or errors.' },
    { heading: '10. Warranty Disclaimer', body: 'Novala is provided "as is" without warranties of any kind, express or implied. While we strive for accuracy in tax calculations and compliance, you remain responsible for verifying all financial and tax information.' },
    { heading: '11. Limitation of Liability', body: 'To the maximum extent permitted by law, Novala shall not be liable for indirect, incidental, consequential, or punitive damages. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.' },
    { heading: '12. Governing Law', body: 'These terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Alberta, Canada.' },
    { heading: '13. Changes to Terms', body: 'We may update these terms from time to time. Material changes will be notified via email or in-app notification at least 30 days before taking effect. Continued use after changes constitutes acceptance.' },
    { heading: '14. Contact Us', body: 'Questions about these terms? Contact us at legal@getnovala.com or by mail at: Novala, Edmonton, Alberta, Canada.' },
  ],
};

export const TERMS_FR: LegalContent = {
  title: 'Conditions d utilisation',
  lastUpdated: 'Dernière mise à jour: 15 septembre 2026',
  intro: 'Bienvenue chez Novala. Ces conditions d utilisation régissent votre utilisation de la plateforme Novala et des services fournis par BrightCare Home Healthcare Services Inc. ("Novala", "nous", "notre"). En accédant à nos services ou en les utilisant, vous acceptez d être lié par ces conditions.',
  sections: [
    { heading: '1. Acceptation des conditions', body: 'En créant un compte ou en utilisant Novala, vous confirmez avoir lu, compris et accepté d être lié par ces conditions d utilisation et notre politique de confidentialité.' },
    { heading: '2. Description du service', body: 'Novala est une plateforme de gestion d entreprise offrant paie, comptabilité, facturation, gestion du personnel et services connexes aux PME canadiennes. Les services sont fournis sur une base d abonnement.' },
    { heading: '3. Inscription au compte', body: 'Pour utiliser Novala, vous devez créer un compte avec des informations exactes et complètes. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités sous votre compte.' },
    { heading: '4. Abonnement et facturation', body: 'Novala offre des forfaits d abonnement facturés mensuellement ou annuellement. Les frais sont facturés à l avance et non remboursables sauf disposition contraire de la loi.' },
    { heading: '5. Annulation', body: 'Vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte. Les annulations prennent effet à la fin de la période de facturation en cours.' },
    { heading: '6. Votre contenu et vos données', body: 'Vous conservez la propriété de toutes les données d entreprise que vous entrez dans Novala. Vous nous accordez une licence pour traiter ces données afin de fournir les services.' },
    { heading: '7. Propriété intellectuelle', body: 'La plateforme Novala, y compris tous les logiciels, designs, marques et contenus, est la propriété de Novala et de ses concédants de licence.' },
    { heading: '8. Utilisation acceptable', body: 'Vous acceptez de ne pas utiliser Novala à des fins illégales, de transmettre du code malveillant, d essayer d obtenir un accès non autorisé, ou de violer les lois applicables.' },
    { heading: '9. Services tiers', body: 'Novala peut s intégrer à des services tiers (banques, autorités fiscales, processeurs de paiement). Votre utilisation de ces services est soumise à leurs conditions respectives.' },
    { heading: '10. Exclusion de garantie', body: 'Novala est fourni "tel quel" sans garantie d aucune sorte. Bien que nous nous efforcions d assurer l exactitude, vous restez responsable de vérifier toutes les informations financières et fiscales.' },
    { heading: '11. Limitation de responsabilité', body: 'Dans la mesure maximale permise par la loi, Novala ne sera pas responsable des dommages indirects, accessoires ou consécutifs.' },
    { heading: '12. Loi applicable', body: 'Ces conditions sont régies par les lois de la province de l Alberta et les lois fédérales du Canada. Tout litige sera résolu devant les tribunaux de l Alberta, Canada.' },
    { heading: '13. Modifications', body: 'Nous pouvons mettre à jour ces conditions de temps à autre. Les changements importants seront notifiés par courriel au moins 30 jours avant leur entrée en vigueur.' },
    { heading: '14. Nous contacter', body: 'Questions sur ces conditions? Contactez-nous à legal@getnovala.com ou par courrier à: Novala, Edmonton, Alberta, Canada.' },
  ],
};

export const PRIVACY_EN: LegalContent = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: September 15, 2026',
  intro: 'At Novala, we take your privacy seriously. This Privacy Policy explains how we collect, use, protect, and share your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy laws.',
  sections: [
    { heading: '1. Information We Collect', body: 'We collect information you provide directly (name, email, business information), information from your business use of Novala (payroll data, transactions, invoices), and technical information (IP address, browser type, usage patterns).' },
    { heading: '2. How We Use Your Information', body: 'We use your information to provide and improve our services, process transactions, communicate with you, ensure security, comply with legal obligations, and personalize your experience.' },
    { heading: '3. Legal Basis for Processing', body: 'We process personal information based on: your consent, performance of our contract with you, our legitimate business interests, and compliance with legal obligations under Canadian law.' },
    { heading: '4. Information Sharing', body: 'We do not sell your personal information. We may share information with: service providers who help us operate Novala (subject to confidentiality), tax authorities as required by law (CRA), and third parties with your explicit consent.' },
    { heading: '5. Data Security', body: 'We implement industry-standard security measures including 256-bit SSL encryption in transit, AES-256 encryption at rest, SOC 2 compliant data centers, two-factor authentication, regular security audits, and employee training.' },
    { heading: '6. Data Location', body: 'Your data is stored in Canadian data centers (AWS Canada region) to comply with Canadian data residency requirements. We do not transfer personal data outside Canada except as required for specific services.' },
    { heading: '7. Data Retention', body: 'We retain your information as long as your account is active and as required by law. Financial records are retained for at least 7 years per CRA requirements. You may request deletion of data not required by law.' },
    { heading: '8. Your Rights Under PIPEDA', body: 'You have the right to: access your personal information, correct inaccurate information, request deletion (subject to legal retention requirements), withdraw consent, and file a complaint with the Privacy Commissioner of Canada.' },
    { heading: '9. Cookies and Tracking', body: 'We use essential cookies for platform functionality, analytics cookies to understand usage patterns, and preference cookies for language and settings. You can manage cookies through your browser settings.' },
    { heading: '10. Third-Party Services', body: 'Novala integrates with third-party services (payment processors, banks, tax authorities). These services have their own privacy policies which we recommend you review.' },
    { heading: '11. Children Privacy', body: 'Novala is not intended for individuals under 18. We do not knowingly collect information from children. If we learn we have collected such information, we will delete it promptly.' },
    { heading: '12. Marketing Communications', body: 'You will only receive marketing emails if you have consented (CASL compliance). You can unsubscribe at any time using the link in each email. Transactional emails (payment receipts, account updates) will continue.' },
    { heading: '13. Changes to This Policy', body: 'We may update this policy from time to time. Material changes will be notified via email at least 30 days before taking effect. The "last updated" date at the top will reflect the most recent version.' },
    { heading: '14. Contact Our Privacy Officer', body: 'Questions about privacy or to exercise your rights? Contact our Privacy Officer at privacy@getnovala.com. You may also contact the Privacy Commissioner of Canada at priv.gc.ca.' },
  ],
};

export const PRIVACY_FR: LegalContent = {
  title: 'Politique de confidentialité',
  lastUpdated: 'Dernière mise à jour: 15 septembre 2026',
  intro: 'Chez Novala, nous prenons votre vie privée au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, protégeons et partageons vos informations personnelles conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) et autres lois canadiennes applicables.',
  sections: [
    { heading: '1. Informations que nous collectons', body: 'Nous collectons les informations que vous fournissez directement (nom, courriel, informations d entreprise), les informations issues de votre utilisation de Novala (données de paie, transactions, factures), et les informations techniques (adresse IP, type de navigateur).' },
    { heading: '2. Comment nous utilisons vos informations', body: 'Nous utilisons vos informations pour fournir et améliorer nos services, traiter les transactions, communiquer avec vous, assurer la sécurité et nous conformer aux obligations légales.' },
    { heading: '3. Base légale du traitement', body: 'Nous traitons les informations personnelles sur la base de: votre consentement, l exécution de notre contrat avec vous, nos intérêts commerciaux légitimes, et la conformité aux obligations légales canadiennes.' },
    { heading: '4. Partage d informations', body: 'Nous ne vendons pas vos informations personnelles. Nous pouvons partager avec: des prestataires de services qui nous aident à exploiter Novala, les autorités fiscales selon la loi (ARC), et des tiers avec votre consentement explicite.' },
    { heading: '5. Sécurité des données', body: 'Nous mettons en oeuvre des mesures de sécurité standard incluant: chiffrement SSL 256 bits en transit, chiffrement AES-256 au repos, centres de données conformes SOC 2, authentification à deux facteurs.' },
    { heading: '6. Emplacement des données', body: 'Vos données sont stockées dans des centres de données canadiens (région AWS Canada) pour respecter les exigences canadiennes de résidence des données.' },
    { heading: '7. Conservation des données', body: 'Nous conservons vos informations tant que votre compte est actif et selon les exigences légales. Les dossiers financiers sont conservés pendant au moins 7 ans selon les exigences de l ARC.' },
    { heading: '8. Vos droits en vertu de la LPRPDE', body: 'Vous avez le droit de: accéder à vos informations personnelles, corriger les informations inexactes, demander la suppression, retirer votre consentement, et déposer une plainte auprès du Commissariat à la protection de la vie privée du Canada.' },
    { heading: '9. Témoins et suivi', body: 'Nous utilisons des témoins essentiels pour la fonctionnalité de la plateforme, des témoins analytiques et des témoins de préférence pour la langue et les paramètres.' },
    { heading: '10. Services tiers', body: 'Novala s intègre à des services tiers (processeurs de paiement, banques, autorités fiscales). Ces services ont leurs propres politiques de confidentialité.' },
    { heading: '11. Vie privée des enfants', body: 'Novala n est pas destiné aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d informations auprès d enfants.' },
    { heading: '12. Communications marketing', body: 'Vous ne recevrez de courriels marketing que si vous avez consenti (conformité LCAP). Vous pouvez vous désabonner à tout moment.' },
    { heading: '13. Modifications de cette politique', body: 'Nous pouvons mettre à jour cette politique de temps à autre. Les changements importants seront notifiés par courriel au moins 30 jours à l avance.' },
    { heading: '14. Contactez notre responsable de la vie privée', body: 'Questions sur la vie privée? Contactez notre responsable à privacy@getnovala.com. Vous pouvez aussi contacter le Commissariat à la protection de la vie privée du Canada à priv.gc.ca.' },
  ],
};
