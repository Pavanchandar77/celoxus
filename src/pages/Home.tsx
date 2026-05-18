import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Activity, Cloud, Headphones, Shield,
  Layers, Code, ChevronRight, Cpu, Globe, LineChart, Lock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/MagneticButton';
import { CoreTopology } from '../components/CoreTopology';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.05 * i },
  }),
};

/* ============================================================
   HERO — cinematic, dashboard mockup, animated grid + aurora
   ============================================================ */
export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const dashY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-ink-950 pt-32 pb-28"
    >
      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-70" />

      {/* Particle field */}
      <ParticleField count={28} />

      {/* Aurora gradient */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-0 -top-1/3 h-[80vh]"
      >
        <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent_70%)] blur-3xl" />
        <div className="absolute left-[20%] top-[15%] h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.25),transparent_70%)] blur-3xl" />
        <div className="absolute right-[15%] top-[5%] h-[35vh] w-[35vw] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="shown"
          className="group mx-auto mb-9 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.05]"
        >
          <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent-300">
            New
          </span>
          <span className="text-[12px] font-medium text-slate-200">
            AI-assisted operations · v4.2
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{ y: headlineY }}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="shown"
          className="font-display mx-auto max-w-5xl text-balance text-center text-[3rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6.25rem]"
        >
          Enterprise voice,
          <span className="block text-gradient-accent">re-engineered.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="shown"
          className="mx-auto mt-7 max-w-2xl text-balance text-center text-lg font-light leading-relaxed text-slate-400 sm:text-xl"
        >
          Celoxus is the intelligence layer for Cisco voice infrastructure —
          one operational fabric for calling, contact center, and observability
          at planetary scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="shown"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <MagneticButton to="/contact" strength={0.25}>
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-transform">
              <span className="relative">Book a demo</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          </MagneticButton>

          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span>Explore the platform</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="shown"
          className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500"
        >
          <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> SOC 2 Type II</span>
          <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> Cisco Premier Partner</span>
          <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> 99.997% SLA</span>
          <span className="inline-flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5" /> Built for enterprise</span>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          style={{ y: dashY }}
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <DashboardMock />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-slate-500">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" />
    </section>
  );
};

/* Ambient particle field */
const ParticleField = ({ count = 24 }: { count?: number }) => {
  const reduce = useReducedMotion();
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: (i * 137.5) % 100,
    y: (i * 73.3) % 100,
    s: 1 + ((i * 17) % 3),
    d: 6 + ((i * 11) % 10),
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, opacity: 0.18 }}
          animate={reduce ? undefined : { y: [0, -24, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut', delay: p.id * 0.13 }}
        />
      ))}
    </div>
  );
};

/* Floating dashboard mock */
const DashboardMock = () => {
  return (
    <div className="relative">
      {/* Glow halo */}
      <div className="absolute inset-x-12 -inset-y-8 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/30 via-violet-500/20 to-transparent opacity-60 blur-3xl" />

      {/* Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur-2xl shadow-[0_50px_120px_-30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Top gradient hairline */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">
            celoxus.app/operations
          </div>
          <div className="font-mono text-[11px] text-slate-500">v4.2.0</div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 gap-4 p-5">
          {/* Sidebar */}
          <div className="col-span-3 hidden flex-col gap-1 md:flex">
            {['Overview', 'Voice Routing', 'Contact Center', 'Webex Cloud', 'Observability', 'Integrations'].map((label, i) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                  i === 0 ? 'bg-white/[0.06] text-white' : 'text-slate-400 hover:bg-white/[0.03]'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                {label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-12 md:col-span-9">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: 'Active sessions', v: '24,816', d: '+12.4%', tone: 'emerald' },
                { k: 'Avg. handle time', v: '1m 42s', d: '−8.1%', tone: 'emerald' },
                { k: 'SLA', v: '99.997%', d: 'Nominal', tone: 'indigo' },
              ].map((kpi) => (
                <div key={kpi.k} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500">{kpi.k}</div>
                  <div className="mt-1 font-display text-2xl font-medium tracking-tight text-white">{kpi.v}</div>
                  <div className={`mt-1 text-[11px] ${kpi.tone === 'emerald' ? 'text-emerald-400' : 'text-accent-300'}`}>{kpi.d}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-400">Global voice traffic · last 24h</div>
                <div className="flex gap-1 text-[10px]">
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-slate-400">24H</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-white">7D</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-slate-400">30D</span>
                </div>
              </div>
              <svg viewBox="0 0 600 140" className="mt-3 h-32 w-full">
                <defs>
                  <linearGradient id="lg1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,110 C40,90 80,70 120,80 C160,90 200,40 240,45 C280,50 320,90 360,70 C400,55 440,30 480,42 C520,52 560,28 600,18 L600,140 L0,140 Z"
                  fill="url(#lg1)"
                />
                <motion.path
                  d="M0,110 C40,90 80,70 120,80 C160,90 200,40 240,45 C280,50 320,90 360,70 C400,55 440,30 480,42 C520,52 560,28 600,18"
                  fill="none"
                  stroke="#a5b4fc"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                />
              </svg>
            </div>

            {/* Live rows */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { l: 'Calling Cluster · APAC', s: 'Healthy', t: 'emerald' },
                { l: 'Contact Center · EMEA', s: 'Healthy', t: 'emerald' },
                { l: 'Webex Sync', s: 'Syncing', t: 'indigo' },
                { l: 'Observability Pipeline', s: 'Nominal', t: 'emerald' },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${r.t === 'emerald' ? 'bg-emerald-400' : 'bg-accent-400'}`} />
                    <div className="text-xs text-slate-300">{r.l}</div>
                  </div>
                  <div className="font-mono text-[10px] uppercase text-slate-500">{r.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating panels */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
        className="absolute -left-6 top-24 hidden w-56 rounded-2xl border border-white/10 bg-ink-900/80 p-4 backdrop-blur-2xl shadow-2xl lg:block"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent-300" />
          <span className="text-xs font-medium text-white">AI Insight</span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
          Predicted call surge in APAC within 38 minutes. Auto-scaling recommended.
        </p>
        <button className="mt-3 w-full rounded-md bg-white/5 py-1.5 text-[11px] text-white hover:bg-white/10">
          Apply
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: EASE }}
        className="absolute -right-4 bottom-16 hidden w-60 rounded-2xl border border-white/10 bg-ink-900/80 p-4 backdrop-blur-2xl shadow-2xl lg:block"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white">Uptime · 90d</span>
          <span className="font-mono text-[11px] text-emerald-400">99.997%</span>
        </div>
        <div className="mt-3 flex gap-[2px]">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className={`h-6 flex-1 rounded-sm ${i === 17 ? 'bg-amber-400/70' : 'bg-emerald-400/70'}`}
            />
          ))}
        </div>
        <p className="mt-2 text-[10px] text-slate-500">1 minor incident · resolved automatically</p>
      </motion.div>
    </div>
  );
};

/* ============================================================
   LOGO BAR — replaces TrustBanner
   ============================================================ */
export const TrustBanner = () => {
  const logos = ['Cisco', 'Webex', 'AWS', 'Azure', 'ServiceNow', 'Splunk', 'Salesforce'];
  return (
    <section className="relative border-y border-hairline bg-ink-950 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
          Trusted by industry leaders & integrated with
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              className="font-display text-xl font-medium tracking-tight text-slate-500 transition-colors hover:text-white"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   BENTO GRID — premium feature cards
   ============================================================ */
export const BentoGrid = () => {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 radial-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
            Platform · Capabilities
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            One platform.<br />
            <span className="text-gradient-accent">Every layer of the stack.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-slate-400">
            From global call routing to AI-powered insights, Celoxus replaces fragmented tooling with one elegant operational fabric.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <BentoCard
            className="md:col-span-4"
            icon={Headphones}
            eyebrow="Webex Contact Center"
            title="Customer experience, re-architected."
            body="Unified voice, digital, and AI journeys with real-time supervisor intelligence."
            featured
          />
          <BentoCard
            className="md:col-span-2"
            icon={Cloud}
            eyebrow="Cloud Migration"
            title="Zero-downtime migrations."
            body="Cisco cloud-native deployments engineered by CCIE architects."
          />
          <BentoCard
            className="md:col-span-2"
            icon={Code}
            eyebrow="APIs & Integration"
            title="Bridge any legacy system."
            body="Custom middleware that connects across fragmented enterprise tools."
          />
          <BentoCard
            className="md:col-span-2"
            icon={Activity}
            eyebrow="Observability"
            title="See every signal, live."
            body="Proactive monitoring with anomaly detection for Cisco infrastructure."
          />
          <BentoCard
            className="md:col-span-2"
            icon={Shield}
            eyebrow="Security & Compliance"
            title="Enterprise-grade, by default."
            body="SOC 2, GDPR, and NDA-first engagements for regulated verticals."
          />
        </div>
      </div>
    </section>
  );
};

type BentoCardProps = {
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  featured?: boolean;
};
const BentoCard = ({ className = '', icon: Icon, eyebrow, title, body, featured }: BentoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="ring-gradient group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.14] hover:shadow-[0_30px_80px_-30px_rgba(99,102,241,0.4)]"
      >
        {/* Cursor spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,0.18), transparent 55%)',
          }}
        />
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="relative flex h-full flex-col">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${featured ? 'bg-accent text-white shadow-glow-accent' : 'bg-white/[0.04] text-accent-300 border border-white/10'}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
            {eyebrow}
          </div>
          <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-slate-400 sm:text-[15px]">
            {body}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================================================
   SPLIT MISSION — preserved API, redesigned
   ============================================================ */
export const SplitMission = () => {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
              Why teams choose Celoxus
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
              Architecture trusted by the
              <span className="text-gradient-accent"> world's leading teams.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-slate-400">
              We specialize in complex technology swaps and greenfield builds — ensuring your infrastructure is ready for the next decade.
            </p>

            <ul className="mt-10 space-y-1">
              {[
                { h: 'CCIE-certified specialists', b: 'Deployment and optimization of collaboration and enterprise networking.' },
                { h: 'High availability protocols', b: 'Resilient architectures designed for 24/7 mission-critical operations.' },
                { h: 'NDA-first engagements', b: 'Discreet engineering relationships for regulated verticals.' },
              ].map((item, i) => (
                <motion.li
                  key={item.h}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="group flex items-start gap-4 border-b border-white/5 py-5 last:border-b-0"
                >
                  <span className="mt-1 font-mono text-[10px] tracking-widest text-accent-300">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-medium tracking-tight text-white">{item.h}</h4>
                    <p className="mt-1 text-sm font-light text-slate-400">{item.b}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <MagneticButton to="/about" strength={0.2}>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]">
                  Meet our architects <ArrowRight className="h-4 w-4" />
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 p-8 backdrop-blur-2xl shadow-card">
              <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-accent-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Operations · Live
                  </span>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  All systems normal
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { label: 'Call routing', stat: '99.997%', icon: Layers },
                  { label: 'Contact center', stat: 'Active', icon: Headphones },
                  { label: 'Webex cloud', stat: 'Sync', icon: Cloud },
                  { label: 'Observability', stat: 'Nominal', icon: Activity },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                      <row.icon className="h-4 w-4 text-accent-300" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{row.label}</div>
                      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{ x: '120%' }}
                          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                          className="h-full w-2/3 bg-gradient-to-r from-transparent via-accent-400 to-transparent"
                        />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent-300">{row.stat}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { l: 'Regions', v: '14' },
                  { l: 'Clusters', v: '38' },
                  { l: 'Engineers', v: '120+' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                    <div className="font-display text-2xl font-medium text-white">{s.v}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   CTA — cinematic close
   ============================================================ */
export const CTASection = () => {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300"
        >
          Ready when you are
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="mt-5 font-display text-5xl font-medium leading-[1.0] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
        >
          Evolve your<br />
          <span className="text-gradient-accent">enterprise network.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-7 max-w-xl text-lg font-light leading-relaxed text-slate-400"
        >
          Partner with CCIE-certified architects to modernize your Webex infrastructure and contact center performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <MagneticButton to="/contact" strength={0.3}>
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-medium text-ink-950 shadow-[0_10px_50px_-10px_rgba(255,255,255,0.5)]">
              <span className="relative">Book a strategic assessment</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ink-950/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          </MagneticButton>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
          >
            View documentation <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================
   CORE — sticky scroll-driven topology (the "visibility" beat)
   ============================================================ */
const CORE_LABELS = [
  { i: '0.01', t: 'Fragmented systems create operational friction.' },
  { i: '0.02', t: 'Cisco calling and contact center, unified.' },
  { i: '0.03', t: 'One system. Uninterrupted continuity.' },
] as const;

export const CoreSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const op1 = useTransform(scrollYProgress, [0, 0.06, 0.28, 0.36], [1, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.28, 0.36, 0.62, 0.7], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.62, 0.7, 1.0], [0, 1, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-ink-950 md:h-[300vh] border-t border-hairline">
      <div className="hidden h-full md:block">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 radial-fade" />
          <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
          <div className="pointer-events-none absolute -right-40 bottom-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

          <span aria-hidden className="pointer-events-none absolute -left-[2vw] -top-[6vw] block font-display font-light leading-none text-[20vw] text-white/[0.025]">
            02
          </span>

          <div className="mx-auto grid h-full max-w-7xl grid-cols-12 gap-4 px-6 lg:px-8">
            <div className="relative z-10 col-span-5 flex flex-col justify-center">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
                Chapter / 02 · The Core
              </p>
              <h2 className="mb-10 font-display text-[3rem] font-medium leading-[1.0] tracking-[-0.035em] text-white lg:text-[4.5rem]">
                Convergence is the<br />
                <span className="text-gradient-accent">architecture.</span>
              </h2>
              <p className="mb-12 max-w-md text-lg font-light leading-relaxed text-slate-400">
                Cisco calling, contact center, and observability stacks unified into one always-on operational fabric.
              </p>
              <div className="max-w-md font-mono text-[10px] uppercase leading-[1.9] tracking-[0.18em] text-slate-500">
                Calling <span className="px-2 text-slate-700">/</span>
                Contact Center <span className="px-2 text-slate-700">/</span>
                Cloud <span className="px-2 text-slate-700">/</span>
                Monitoring <span className="px-2 text-slate-700">/</span>
                Notifications <span className="px-2 text-slate-700">/</span>
                Integration
              </div>
            </div>

            <div className="relative z-10 col-span-7 flex flex-col items-center justify-center">
              <div className="relative aspect-square w-full max-w-[640px]">
                <CoreTopology progress={scrollYProgress} />
              </div>
              <div className="relative mt-6 h-12 w-full max-w-[480px] text-center">
                {CORE_LABELS.map((label, i) => (
                  <motion.div
                    key={i}
                    style={{ opacity: i === 0 ? op1 : i === 1 ? op2 : op3 }}
                    className="absolute inset-x-0 top-0"
                  >
                    <span className="mr-3 font-mono text-[10px] tracking-[0.3em] text-accent-300">[{label.i}]</span>
                    <span className="font-body text-[0.95rem] text-slate-400">{label.t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block px-6 py-24 md:hidden">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">Chapter / 02</p>
        <h2 className="mb-6 font-display text-[2.5rem] font-medium leading-[1.0] tracking-[-0.03em] text-white">The Core</h2>
        <p className="mb-12 text-base font-light leading-relaxed text-slate-400">
          Cisco calling, contact center, and observability unified into one always-on fabric.
        </p>
        {CORE_LABELS.map((label, i) => (
          <div key={i} className="border-t border-white/10 py-10">
            <span className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-accent-300">[{label.i}]</span>
            <span className="text-lg text-slate-300">{label.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
