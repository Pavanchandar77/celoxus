import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Hero, TrustBanner, BentoGrid, SplitMission, CTASection } from './pages/Home';
import { Products, ProfessionalServices, About, Contact } from './components/Pages';
import { CaseStudies } from './pages/CaseStudies';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy, TermsOfService } from './pages/Legal';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBanner />
      <BentoGrid />
      <SplitMission />
      <CTASection />
    </>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CustomCursor />
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="services" element={<ProfessionalServices />} />
              <Route path="about" element={<About />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route path="contact" element={<Contact />} />
              <Route path="legal/privacy" element={<PrivacyPolicy />} />
              <Route path="legal/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  );
}
