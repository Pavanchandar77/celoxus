import { motion } from 'framer-motion';
import { Shield, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LegalShell = ({
  icon: Icon, label, title, children, meta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  children: React.ReactNode;
  meta: string;
}) => (
  <div className="relative min-h-screen overflow-hidden bg-ink-950 pb-32 pt-40">
    <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.15),transparent_70%)] blur-3xl" />
    <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 mx-auto max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
          <Icon className="h-3.5 w-3.5 text-accent-300" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">{label}</span>
        </div>
        <h1 className="font-display text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{meta}</p>

        <div className="prose-legal mt-12 text-[15px] leading-[1.85] text-slate-300">
          {children}
        </div>
      </motion.div>
    </div>

    <style>{`
      .prose-legal p { margin-bottom: 1.25rem; font-weight: 300; }
      .prose-legal h2 {
        margin-top: 3rem; margin-bottom: 1rem;
        font-family: 'Satoshi', 'General Sans', Inter, system-ui, sans-serif;
        font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em;
        color: #fff;
      }
      .prose-legal ul { list-style: none; padding: 0; margin-bottom: 1.5rem; }
      .prose-legal ul > li {
        position: relative; padding-left: 1.5rem; margin-bottom: 0.85rem;
      }
      .prose-legal ul > li::before {
        content: ''; position: absolute; left: 0; top: 0.7em;
        width: 6px; height: 1px; background: rgba(4,159,217,0.7);
      }
      .prose-legal strong { color: #fff; font-weight: 500; }
    `}</style>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalShell icon={Shield} label="Legal · Privacy" title="Privacy Policy" meta="Effective · January 1, 2024">
    <Helmet>
      <title>Privacy Policy · Celoxus</title>
      <meta name="description" content="Celoxus Privacy Policy — how we collect, use, and protect your data." />
    </Helmet>

    <p>
      Celoxus ("we", "our", or "us") is committed to protecting your privacy and handling
      your personal data responsibly. This Privacy Policy details the information we collect,
      how we use it, your rights, and the safeguards we maintain to protect it.
    </p>

    <h2>1. Information we collect</h2>
    <ul>
      <li><strong>Contact information</strong> — name, corporate email, phone, and business address.</li>
      <li><strong>Professional details</strong> — role, company, industry, and the nature of your inquiry.</li>
      <li><strong>Usage and technical data</strong> — IP address, browser type, OS, and interaction metrics.</li>
    </ul>

    <h2>2. How we use your information</h2>
    <ul>
      <li><strong>Service delivery</strong> — to respond to inquiries and fulfill contractual obligations.</li>
      <li><strong>Platform optimization</strong> — to monitor performance and improve the user experience.</li>
      <li><strong>Communication</strong> — administrative notices and updates regarding ongoing projects.</li>
      <li><strong>Compliance</strong> — to satisfy legal obligations and enforce agreements.</li>
    </ul>

    <h2>3. Data protection and security</h2>
    <p>
      We use industry-standard technical, administrative, and physical safeguards to protect
      your information. No electronic transmission or storage system is 100% secure, but we
      treat customer data as a first-class engineering concern.
    </p>

    <h2>4. Third-party disclosures</h2>
    <p>
      We do not sell, rent, or trade your personal information. We may share necessary data
      with trusted service providers who assist us under strict confidentiality, or when
      required by legal process.
    </p>

    <h2>5. Your rights</h2>
    <p>
      Depending on your jurisdiction, you may request access to, correction of, or deletion
      of your personal data. Contact us using the details below to exercise these rights.
    </p>

    <h2>6. Revisions</h2>
    <p>
      We may modify this Policy to reflect operational or legal changes. Please review this
      page periodically for the latest version.
    </p>

    <h2>7. Contact</h2>
    <p>
      <strong>Email</strong> · info@celoxus.com<br />
      <strong>Phone</strong> · +1 469 994 4602
    </p>
  </LegalShell>
);

export const TermsOfService = () => (
  <LegalShell icon={BookOpen} label="Legal · Terms" title="Terms of Service" meta="Effective · January 1, 2024">
    <Helmet>
      <title>Terms of Service · Celoxus</title>
      <meta name="description" content="Celoxus Terms of Service governing the use of our website and professional services." />
    </Helmet>

    <p>
      These Terms constitute a legally binding agreement between you and Celoxus regarding
      your access to our website and professional services. By accessing the services, you
      agree to be bound by these Terms.
    </p>

    <h2>1. Service utilization and scope</h2>
    <p>
      Celoxus operates as a technology consulting and systems integration firm. Information
      on this website is for general informational purposes only. Formal engineering and
      implementation engagements are governed by individually executed Master Services
      Agreements or Statements of Work.
    </p>

    <h2>2. Intellectual property rights</h2>
    <p>
      Unless otherwise stipulated in an active MSA, the Site and all content — including
      source code, designs, text, and graphics — are owned or licensed by Celoxus. You are
      granted a limited, non-exclusive license to access the Site for internal informational
      purposes.
    </p>

    <h2>3. User representations</h2>
    <p>
      By using our Site, you represent that all information you submit is true and that you
      will not access the Site through automated means for malicious scraping or exploitation.
    </p>

    <h2>4. Disclaimers and limitation of liability</h2>
    <p>
      The Site is provided on an as-is and as-available basis. To the fullest extent permitted
      by law, we disclaim all warranties in connection with the Site. We will not be liable
      for any indirect, consequential, or punitive damages arising from your use of the Site.
    </p>

    <h2>5. Third-party integrations</h2>
    <p>
      Celoxus provides integrations and consulting for third-party platforms such as Cisco
      and Webex. We are an independent entity; trademarks remain the property of their
      respective owners.
    </p>

    <h2>6. Modifications</h2>
    <p>
      We reserve the right to modify these Terms at any time, indicated by updating the
      "Effective Date" at the top of this page.
    </p>

    <h2>7. Governing law</h2>
    <p>
      These Terms are governed by the laws of the jurisdiction in which Celoxus maintains
      its primary headquarters, without regard to conflict-of-law principles.
    </p>
  </LegalShell>
);
