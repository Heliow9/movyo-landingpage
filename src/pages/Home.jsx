import { Benefits } from '../components/Benefits';
import { DigitalPayments } from '../components/DigitalPayments';
import { Downloads } from '../components/Downloads';
import { FeatureSuite } from '../components/FeatureSuite';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HubInstall } from '../components/HubInstall';
import { Modules } from '../components/Modules';
import { SignupForm } from '../components/SignupForm';
import { TrustBar } from '../components/TrustBar';
import { MovyChat, ProductShowcase } from '../components/ProductShowcase';
import { CompetitiveAdvantages } from '../components/CompetitiveAdvantages';
import { IntegrationSuite } from '../components/IntegrationSuite';
import { useAnalyticsTracking } from '../hooks/useAnalyticsTracking';
import { useReveal } from '../hooks/useReveal';

export function Home() {
  useReveal();
  useAnalyticsTracking();
  return (
    <main>
      <div className="bg"><span /><span /><span /></div>
      <Header />
      <Hero />
      <TrustBar />
      <Modules />
      <Benefits />
      <CompetitiveAdvantages />
      <FeatureSuite />
      <DigitalPayments />
      <IntegrationSuite />
      <ProductShowcase />
      <SignupForm />
      <Downloads />
      <HubInstall />
      <MovyChat />
      <Footer />
    </main>
  );
}
