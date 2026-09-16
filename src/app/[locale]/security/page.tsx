import InfoPageLayout from '@/components/InfoPageLayout';
import { SECURITY_EN, SECURITY_FR } from '@/data/info-pages';

export default async function SecurityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? SECURITY_FR : SECURITY_EN;
  return <InfoPageLayout content={content} />;
}
