import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Shield, Settings, Activity, ArrowRight, ArrowUpRight, Headphones, Phone, Mail,
  Database, CheckCircle2, XCircle, Code, Cloud, LayoutTemplate, ChevronRight,
  Sparkles, Lock, Globe, Cpu,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ============================================================
   Shared building blocks
   ============================================================ */
const PageHero = ({
  eyebrow, title, accent, sub,
}: { eyebrow: string; title: string; accent: string; sub: string }) => (
  <section className="relative overflow-hidden bg-ink-950 pt-40 pb-28">
    <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.22),transparent_70%)] blur-3xl" />
    <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
      >
        <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent-300">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
        className="font-display mx-auto max-w-5xl text-balance text-[2.75rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.5rem]"
      >
        {title}{' '}
        <span className="block text-gradient-accent">{accent}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className="mx-auto mt-7 max-w-2xl text-balance text-lg font-light leading-relaxed text-slate-400 sm:text-xl"
      >
        {sub}
      </motion.p>
    </div>
  </section>
);

const FeatureRow = ({
  index, eyebrow, title, body, items, reverse, visual,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  reverse?: boolean;
  visual: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.9, ease: EASE }}
    className={`grid grid-cols-12 items-center gap-10 lg:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
  >
    <div className="col-span-12 lg:col-span-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.24em] text-accent-300">/ {index}</span>
        <span className="h-px w-10 bg-accent/40" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-400">
        {body}
      </p>
      <ul className="mt-8 space-y-1">
        {items.map((it, i) => (
          <li key={it} className="flex items-start gap-3 border-b border-white/[0.06] py-3 last:border-b-0">
            <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent" />
            <span className="text-slate-300">{it}</span>
            <span className="ml-auto font-mono text-[10px] text-slate-600">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="col-span-12 lg:col-span-6">
      {visual}
    </div>
  </motion.div>
);

const VisualPanel = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-8 backdrop-blur-2xl shadow-card ${className}`}>
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
    {children}
  </div>
);

const SectionDivider = () => (
  <div className="mx-auto max-w-7xl px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

/* ============================================================
   PRODUCTS
   ============================================================ */
export const Products = () => {
  return (
    <div className="min-h-screen bg-ink-950">
      <Helmet>
        <title>Products · Celoxus</title>
        <meta name="description" content="Real-time agent intelligence, contact-center observability, and bespoke integrations engineered for Cisco Webex." />
      </Helmet>

      <PageHero
        eyebrow="Products"
        title="Software that gives operators"
        accent="time back."
        sub="Three production-grade products built on top of Cisco — for the teams running enterprise voice every day."
      />

      <div className="mx-auto max-w-7xl space-y-32 px-6 py-24">
        <FeatureRow
          index="01"
          eyebrow="Finesse Notifications"
          title="Agents see the signal, instantly."
          body="A real-time alert layer that surfaces RONA, queue thresholds, and custom KPIs on the agent desktop — no dashboard hunting, no missed events."
          items={['Zero-delay alerting', 'RONA immediate interception', 'Custom metric overlays']}
          visual={<FinesseVisual />}
        />
        <FeatureRow
          index="02"
          eyebrow="Contact Center Monitoring"
          title="Full-stack visibility, in one pane."
          body="Live SLA tracking, queue health, and historical pulse analytics for Webex CC and UCCE — with sub-second telemetry capture."
          items={['Global dashboard visibility', 'SLA violation tracking', 'Historical pulse analytics']}
          reverse
          visual={<MonitoringVisual />}
        />
        <FeatureRow
          index="03"
          eyebrow="Custom Integrations"
          title="Bridge anything to anything."
          body="Bespoke middleware, CRM conduits, and Finesse gadgets engineered around your exact operational shape — not a vendor's catalog."
          items={['Legacy architecture bridging', 'Third-party API conduits', 'Enterprise CRM synchronization']}
          visual={<IntegrationVisual />}
        />
      </div>

      <ClosingCTA
        title="Ready to ship voice software that operators love?"
        cta="Talk to engineering"
      />
    </div>
  );
};

const FinesseVisual = () => (
  <VisualPanel>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
        <Activity className="h-3.5 w-3.5 text-accent" />
        Finesse desktop
      </div>
      <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">Online</span>
    </div>
    <div className="mt-6 space-y-3">
      {[
        { l: 'RONA · Agent #4216',  s: 'now', red: true },
        { l: 'Queue threshold · Sales-EMEA', s: '12s', red: false },
        { l: 'AHT spike · APAC', s: '38s', red: false },
      ].map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${r.red ? 'border-red-400/30 bg-red-400/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${r.red ? 'bg-red-400 animate-pulse' : 'bg-accent'}`} />
          <span className="flex-1 text-sm text-slate-200">{r.l}</span>
          <span className="font-mono text-[10px] text-slate-500">{r.s}</span>
        </motion.div>
      ))}
    </div>
  </VisualPanel>
);

const MonitoringVisual = () => (
  <VisualPanel>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
        <LayoutTemplate className="h-3.5 w-3.5 text-accent" />
        Operations · Live
      </div>
      <div className="flex gap-1 text-[10px]">
        <span className="rounded-full bg-white/5 px-2 py-0.5 text-slate-400">24H</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-white">7D</span>
      </div>
    </div>
    <svg viewBox="0 0 600 160" className="mt-6 h-36 w-full">
      <defs>
        <linearGradient id="mlg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,120 C40,100 80,70 120,80 C170,92 210,40 260,55 C310,70 350,110 400,90 C450,72 490,30 540,50 C570,62 590,40 600,30 L600,160 L0,160 Z" fill="url(#mlg)" />
      <motion.path
        d="M0,120 C40,100 80,70 120,80 C170,92 210,40 260,55 C310,70 350,110 400,90 C450,72 490,30 540,50 C570,62 590,40 600,30"
        fill="none" stroke="#7dd3fc" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeOut' }}
      />
    </svg>
    <div className="mt-2 grid grid-cols-3 gap-3">
      {[
        { l: 'Active', v: '24,816' },
        { l: 'AHT', v: '1m 42s' },
        { l: 'SLA', v: '99.997%' },
      ].map((s) => (
        <div key={s.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <div className="text-[11px] uppercase tracking-wider text-slate-500">{s.l}</div>
          <div className="mt-1 font-display text-xl font-medium text-white">{s.v}</div>
        </div>
      ))}
    </div>
  </VisualPanel>
);

const IntegrationVisual = () => (
  <VisualPanel>
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />
        <motion.circle
          cx="100" cy="100" r="55" fill="none" stroke="rgba(125,211,252,0.35)"
          strokeDasharray="6 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>
      {/* Center */}
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-accent/30 bg-ink-900 shadow-glow-accent">
        <Settings className="h-9 w-9 text-accent animate-[spin_8s_linear_infinite]" />
      </div>
      {/* Satellites */}
      {[
        { Icon: Cloud,    pos: 'top-2 left-1/2 -translate-x-1/2' },
        { Icon: Database, pos: 'bottom-2 left-1/2 -translate-x-1/2' },
        { Icon: Code,     pos: 'top-1/2 left-2 -translate-y-1/2' },
        { Icon: Headphones, pos: 'top-1/2 right-2 -translate-y-1/2' },
      ].map(({ Icon, pos }, i) => (
        <div key={i} className={`absolute ${pos} flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl`}>
          <Icon className="h-5 w-5 text-slate-200" />
        </div>
      ))}
    </div>
  </VisualPanel>
);

/* ============================================================
   PROFESSIONAL SERVICES
   ============================================================ */
export const ProfessionalServices = () => {
  return (
    <div className="min-h-screen bg-ink-950">
      <Helmet>
        <title>Professional Services · Celoxus</title>
        <meta name="description" content="CCIE-certified Cisco engineering for calling, contact center, and cloud applications." />
      </Helmet>

      <PageHero
        eyebrow="Professional Services"
        title="CCIE engineering,"
        accent="on demand."
        sub="From greenfield Webex deployments to zero-downtime cloud migrations — delivered by senior architects, not generalists."
      />

      <div className="mx-auto max-w-7xl space-y-32 px-6 py-24">
        <FeatureRow
          index="01"
          eyebrow="Cisco Calling Solution"
          title="One call plane. Every region."
          body="Move calling to the cloud without the seams. Webex Calling extended to desktop and mobile, with mobile continuity and high-availability uptime by default."
          items={['Global reach & scalability', 'Mobile continuity', 'High-availability uptime']}
          visual={<ServiceStat title="Webex Calling" sub="Deployed seamlessly" Icon={Headphones} />}
        />
        <FeatureRow
          index="02"
          eyebrow="Cisco Contact Center"
          title="Omnichannel, with intent."
          body="Cisco Contact Centers designed around your real customer journeys — AI-driven automation, real-time data ingestion, and a hard cap on AHT."
          items={['Omnichannel integration', 'AI-driven automation', 'Data-driven insights', 'Seamless APIs']}
          reverse
          visual={<ServiceStat title="Contact Center" sub="Live · 99.997% SLA" Icon={Activity} />}
        />
        <FeatureRow
          index="03"
          eyebrow="Cisco Cloud Applications"
          title="Migrations without the night-shift."
          body="End-to-end cloud transitions with high availability, global redundancy, and uncompromising security — zero-downtime as the baseline."
          items={['Zero-downtime migration', 'End-to-end encryption', 'Global data redundancy']}
          visual={<ServiceStat title="Cloud Infrastructure" sub="Globally distributed" Icon={Cloud} />}
        />
      </div>

      <ClosingCTA
        title="Scope a strategic engagement."
        cta="Book a strategy call"
      />
    </div>
  );
};

const ServiceStat = ({ title, sub, Icon }: { title: string; sub: string; Icon: React.ComponentType<{ className?: string }> }) => (
  <VisualPanel>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        Deployment
      </div>
      <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">Active</span>
    </div>
    <div className="mt-8 flex items-center gap-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
        <Icon className="h-7 w-7 text-accent" />
      </div>
      <div>
        <div className="font-display text-2xl font-medium text-white">{title}</div>
        <div className="text-sm text-slate-400">{sub}</div>
      </div>
    </div>
    <div className="mt-8 grid grid-cols-3 gap-3">
      {[
        { l: 'Regions',   v: '14' },
        { l: 'Engineers', v: '120+' },
        { l: 'Uptime',    v: '99.997%' },
      ].map((s) => (
        <div key={s.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
          <div className="font-display text-lg font-medium text-white">{s.v}</div>
          <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">{s.l}</div>
        </div>
      ))}
    </div>
  </VisualPanel>
);

/* ============================================================
   ABOUT
   ============================================================ */
export const About = () => {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Celoxus',
    'description': 'Founded in 2018, Celoxus is a full-stack engineering firm delivering zero-trust infrastructure to the Fortune 500.',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Celoxus',
      'url': 'https://celoxus.com',
      'knowsAbout': ['Enterprise Network Architecture', 'Cisco Integrations', 'CCIE', 'Contact Center Infrastructure'],
    },
  };

  return (
    <div className="min-h-screen bg-ink-950">
      <Helmet>
        <title>About Celoxus · Enterprise Architects & Cisco Partners</title>
        <meta name="description" content="Celoxus is a full-stack engineering firm delivering zero-trust Cisco infrastructure to the Fortune 500." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <PageHero
        eyebrow="About"
        title="Engineering the"
        accent="intelligence age."
        sub="Celoxus was founded on a single premise: enterprise voice deserves surgical precision — not off-the-shelf compromises."
      />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Why */}
        <div className="grid grid-cols-12 items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="col-span-12 lg:col-span-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">/ Why Celoxus</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              We embed with operators —
              <span className="text-gradient-accent"> not above them.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-400">
              Our CCIE-certified architects work inside your operations, mapping the exact ecosystem limits and engineering custom API conduits that generalist SIs simply can't see.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { Icon: Cpu,    h: 'Deep capabilities', b: 'Advanced telemetry and AI integrations across the call lifecycle.' },
                { Icon: Shield, h: 'Sovereign focus',   b: 'Uncompromising security for highly-regulated environments.' },
              ].map((c) => (
                <div key={c.h} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                    <c.Icon className="h-4 w-4 text-accent" />
                  </div>
                  <div className="mt-4 font-display text-lg font-medium text-white">{c.h}</div>
                  <p className="mt-1 text-sm font-light text-slate-400">{c.b}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="col-span-12 lg:col-span-6"
          >
            <VisualPanel className="aspect-[4/5]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    <Globe className="h-3.5 w-3.5 text-accent" /> Global footprint
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { l: 'Founded',     v: '2018' },
                      { l: 'Engineers',   v: '120+' },
                      { l: 'CCIE years',  v: '80+' },
                      { l: 'Industries',  v: '14' },
                    ].map((s) => (
                      <div key={s.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <div className="font-display text-3xl font-medium text-white">{s.v}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-glow-accent">
                      <Cloud className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-base font-medium text-white">Scale globally</div>
                      <div className="text-xs text-slate-400">Bespoke Cisco architectures</div>
                    </div>
                  </div>
                </div>
              </div>
            </VisualPanel>
          </motion.div>
        </div>

        {/* Matrix */}
        <div className="mt-28">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">/ Engineering matrix</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              Three disciplines. Zero compromise.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { Icon: Cloud, eyebrow: 'Webex & UCCE', h: 'Cloud center mapping', b: 'Designing, provisioning, and scaling massive hybrid or full-cloud Contact Center topologies.' },
              { Icon: Code,  eyebrow: 'Finesse / API / Dev', h: 'Custom automations', b: 'Bespoke software and middleware that fills the gaps standard deployments leave behind.' },
              { Icon: Shield, eyebrow: 'Sovereign focus', h: 'Zero-trust backbone', b: 'Data integrity through air-gapped or localized logic, designed for Fortune 500 networks.' },
            ].map((c, i) => (
              <motion.div
                key={c.h}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                className="ring-gradient group relative rounded-2xl border border-white/[0.07] bg-ink-900/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.14]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                  <c.Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{c.eyebrow}</div>
                <h3 className="mt-2 font-display text-xl font-medium text-white">{c.h}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-slate-400">{c.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ClosingCTA title="See if we're the right fit." cta="Start a conversation" />
    </div>
  );
};

/* ============================================================
   CONTACT
   ============================================================ */
export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_ID || 'dummy_id';
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm font-light text-white placeholder:text-slate-500 transition-all focus:border-accent/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent/30';

  return (
    <div className="min-h-screen bg-ink-950">
      <Helmet>
        <title>Contact · Celoxus</title>
      </Helmet>

      <PageHero
        eyebrow="Contact"
        title="Architect your"
        accent="digital evolution."
        sub="Reach our senior engineers and deployment specialists. We typically respond within 24 hours."
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-32">
        <div className="grid grid-cols-12 gap-6">
          {/* Left: contact details */}
          <div className="col-span-12 lg:col-span-5">
            <VisualPanel className="h-full">
              <div className="flex flex-col gap-8">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">/ Direct lines</div>
                  <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-slate-400">
                    For partnership, RFPs, or technical architecture conversations — reach us directly.
                  </p>
                </div>

                <a
                  href="tel:+14699944602"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Phone</div>
                    <div className="font-display text-lg font-medium text-white">+1 469 994 4602</div>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>

                <a
                  href="mailto:info@celoxus.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Email</div>
                    <div className="font-display text-lg font-medium text-white">info@celoxus.com</div>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>

                <div className="mt-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                      Engineers online · Bangalore HQ
                    </span>
                  </div>
                </div>
              </div>
            </VisualPanel>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7">
            <VisualPanel>
              <h2 className="font-display text-2xl font-medium tracking-tight text-white">Initialize project</h2>
              <p className="mt-1 text-sm font-light text-slate-400">
                Tell us what you're working with — we'll route to the right architect.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                {formStatus === 'success' && (
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.08] p-3.5 text-sm text-emerald-200">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    Message sent. We'll be in touch shortly.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-400/30 bg-red-400/[0.08] p-3.5 text-sm text-red-200">
                    <XCircle className="h-4 w-4 flex-shrink-0" />
                    Something went wrong — try again or email us directly.
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Name</label>
                    <input name="name" type="text" placeholder="Your name" required className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Phone</label>
                    <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Email</label>
                  <input name="email" type="email" placeholder="you@company.com" required className={inputCls} />
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Domain</label>
                  <div className="relative">
                    <select name="service" defaultValue="" required className={`${inputCls} appearance-none pr-10`}>
                      <option value="" disabled>Select an architectural domain…</option>
                      <option value="cisco-calling">Cisco Calling Solution</option>
                      <option value="cisco-contact">Cisco Contact Center Solution</option>
                      <option value="cisco-cloud">Cisco Cloud Applications</option>
                      <option value="products">Products & Custom Integration</option>
                    </select>
                    <ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-slate-500" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your infrastructure goals or constraints…"
                    required
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  disabled={formStatus === 'submitting'}
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-all disabled:opacity-60"
                >
                  <span className="relative">
                    {formStatus === 'submitting' ? 'Submitting…' : 'Submit request'}
                  </span>
                  {formStatus !== 'submitting' && (
                    <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </form>
            </VisualPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   Shared closing CTA
   ============================================================ */
const ClosingCTA = ({ title, cta }: { title: string; cta: string }) => (
  <>
    <SectionDivider />
    <section className="relative overflow-hidden bg-ink-950 py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.22),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold leading-[1.0] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <MagneticButton to="/contact" strength={0.25}>
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.45)]">
              <span className="relative">{cta}</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          </MagneticButton>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
          >
            See the platform <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);
