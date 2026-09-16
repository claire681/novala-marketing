import InfoPageLayout from '@/components/InfoPageLayout';
import { CONTACT_EN, CONTACT_FR } from '@/data/info-pages';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? CONTACT_FR : CONTACT_EN;
  return <InfoPageLayout content={content} />;
}
