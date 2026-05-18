import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring, Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Activity, Cloud, Headphones, Shield,
  Layers, Code, ChevronRight, Cpu, Globe, LineChart, Lock, Radio, Brain,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/MagneticButton';
import { CoreTopology } from '../components/CoreTopology';
import { LiveMesh } from '../components/LiveMesh';

// Premium easing curves
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];        // signal-ease
const EASE_SOFT: [number, number, number, number] = [0.16, 1, 0.3, 1];    // softer
const EASE_DEEP: [number, number, number, number] = [0.83, 0, 0.17, 1];   // deep in-out

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
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />

      {/* The Celoxus signature: living intelligence mesh */}
      <div className="pointer-events-none absolute inset-0 radial-fade opacity-90">
        <LiveMesh density={0.8} connectionDistance={140} />
      </div>

      {/* Aurora gradient */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-0 -top-1/3 h-[80vh]"
      >
        <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.35),transparent_70%)] blur-3xl" />
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
          className="font-display mx-auto max-w-5xl text-balance text-center text-[3rem] font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-7xl lg:text-[6.5rem]"
        >
          Voice infrastructure
          <span className="block text-gradient-accent">that thinks.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="shown"
          className="mx-auto mt-7 max-w-2xl text-balance text-center text-[17px] font-light leading-[1.6] text-slate-400 sm:text-xl"
        >
          Celoxus is the intelligence layer beneath every enterprise call —
          quietly running routing, decisions, and revenue at the world's most
          demanding companies.
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

        {/* Operational Theatre — the signature visual moment */}
        <motion.div
          style={{ y: dashY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.45, ease: EASE_SOFT }}
          className="relative mx-auto mt-24 max-w-6xl"
        >
          <OperationalTheatre />
        </motion.div>

        {/* Logo marquee */}
        <LogoMarquee />
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

/* ============================================================
   OPERATIONAL THEATRE — signature hero visual
   A living mesh: rotating core reactor halo behind the dashboard,
   mouse-spring parallax across three depth layers, four floating
   glass panels feeding the dashboard via connection beams.
   ============================================================ */
const OperationalTheatre = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Normalized mouse position in [-1, 1]
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Smoothed with inertia — premium spring
  const spx = useSpring(mx, { stiffness: 80, damping: 22, mass: 0.4 });
  const spy = useSpring(my, { stiffness: 80, damping: 22, mass: 0.4 });

  // Layered parallax: back (subtle) → mid → front (most reactive)
  const backX  = useTransform(spx, [-1, 1], [-10, 10]);
  const backY  = useTransform(spy, [-1, 1], [-6, 6]);
  const midX   = useTransform(spx, [-1, 1], [-22, 22]);
  const midY   = useTransform(spy, [-1, 1], [-14, 14]);
  const frontX = useTransform(spx, [-1, 1], [-38, 38]);
  const frontY = useTransform(spy, [-1, 1], [-26, 26]);
  // Tilt for the central dashboard
  const rotX = useTransform(spy, [-1, 1], [3.5, -3.5]);
  const rotY = useTransform(spx, [-1, 1], [-3.5, 3.5]);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !sceneRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={sceneRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{ perspective: 1600 }}
    >
      {/* Layer 1 — core reactor halo (back) */}
      <motion.div
        style={{ x: backX, y: backY }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <CoreReactor />
      </motion.div>

      {/* Layer 2 — connection beams (mid) */}
      <motion.div
        style={{ x: midX, y: midY }}
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      >
        <ConnectionBeams />
      </motion.div>

      {/* Layer 3 — the dashboard, with subtle 3D tilt */}
      <motion.div
        style={{
          rotateX: reduce ? 0 : rotX,
          rotateY: reduce ? 0 : rotY,
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 600ms ease',
        }}
        initial={{ y: 60, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.5, ease: EASE_SOFT }}
        className="relative z-20"
      >
        <DashboardMock />
      </motion.div>

      {/* Layer 4 — floating glass panels (front-most, most reactive) */}
      <motion.div
        style={{ x: frontX, y: frontY }}
        className="pointer-events-none absolute inset-0 z-30 hidden lg:block"
      >
        <FloatingPanels />
      </motion.div>
    </div>
  );
};

/* The pulsing core reactor — orbits behind the dashboard, extends past frame */
const CoreReactor = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-[120%] w-[120%] max-w-[1200px]">
      {/* Soft halo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.18),transparent_60%)] blur-2xl" />
      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="hReactorCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#7dd3fc" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#049fd9" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#049fd9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hRingStroke" x1="0" x2="1">
            <stop offset="0%"   stopColor="rgba(125,211,252,0.0)" />
            <stop offset="50%"  stopColor="rgba(125,211,252,0.55)" />
            <stop offset="100%" stopColor="rgba(125,211,252,0.0)" />
          </linearGradient>
        </defs>

        {/* Inner glow */}
        <circle cx="300" cy="300" r="120" fill="url(#hReactorCore)" />

        {/* Concentric rotating rings */}
        {[150, 210, 270].map((r, i) => (
          <g key={i}>
            <circle cx="300" cy="300" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
            <motion.g
              style={{ transformOrigin: '300px 300px' }}
              animate={reduce ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 38 + i * 14, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="300" cy="300" r={r}
                fill="none"
                stroke="url(#hRingStroke)"
                strokeWidth="1.4"
                strokeDasharray={`${r * 1.1} ${r * 5}`}
                strokeLinecap="round"
              />
            </motion.g>
          </g>
        ))}

        {/* Outer hint ring */}
        <circle cx="300" cy="300" r="290" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 6" />

        {/* Traveling photons on middle ring */}
        {[0, 0.33, 0.66].map((phase) => (
          <motion.circle
            key={phase}
            r="2.4" fill="#7dd3fc"
            animate={{
              cx: Array.from({ length: 48 }).map((_, i) => 300 + Math.cos(((i / 48) * 360 + phase * 360) * Math.PI / 180) * 210),
              cy: Array.from({ length: 48 }).map((_, i) => 300 + Math.sin(((i / 48) * 360 + phase * 360) * Math.PI / 180) * 210),
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>
    </div>
  );
};

/* Faint beams from the dashboard center out to where panels live */
const ConnectionBeams = () => (
  <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
    <defs>
      <linearGradient id="beam-tl" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(125,211,252,0.0)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0.5)" />
      </linearGradient>
      <linearGradient id="beam-tr" x1="100%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(125,211,252,0.0)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0.5)" />
      </linearGradient>
      <linearGradient id="beam-bl" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(125,211,252,0.0)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0.5)" />
      </linearGradient>
      <linearGradient id="beam-br" x1="100%" x2="0%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(125,211,252,0.0)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0.5)" />
      </linearGradient>
    </defs>
    {/* Four beams from corners toward center */}
    <motion.line x1="6" y1="14" x2="42" y2="30" stroke="url(#beam-tl)" strokeWidth="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1, ease: 'easeOut' }} />
    <motion.line x1="94" y1="14" x2="58" y2="30" stroke="url(#beam-tr)" strokeWidth="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.25, ease: 'easeOut' }} />
    <motion.line x1="6" y1="50" x2="42" y2="34" stroke="url(#beam-bl)" strokeWidth="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.4, ease: 'easeOut' }} />
    <motion.line x1="94" y1="50" x2="58" y2="34" stroke="url(#beam-br)" strokeWidth="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.55, ease: 'easeOut' }} />
  </svg>
);

/* Four floating glass panels around the dashboard */
const FloatingPanels = () => {
  const float1 = { duration: 6.4, ease: 'easeInOut' as const };
  const float2 = { duration: 7.8, ease: 'easeInOut' as const };
  const float3 = { duration: 8.6, ease: 'easeInOut' as const };
  const float4 = { duration: 7.1, ease: 'easeInOut' as const };

  return (
    <>
      {/* TL — AI Insight */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 1.0, ease: EASE_SOFT }}
        className="pointer-events-auto absolute -left-8 top-20 w-56"
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ ...float1, repeat: Infinity }}>
          <PanelShell>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-accent-300" />
              <span className="text-xs font-medium text-white">AI Insight</span>
              <span className="ml-auto rounded-full bg-accent/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-300">Live</span>
            </div>
            <p className="mt-2.5 text-[11px] leading-[1.55] text-slate-400">
              Predicted call surge in APAC within 38 minutes. Auto-scaling recommended.
            </p>
            <div className="mt-3 flex gap-1">
              <button className="flex-1 rounded-md bg-white/5 py-1 text-[10px] text-slate-300 hover:bg-white/10">Dismiss</button>
              <button className="flex-1 rounded-md bg-white py-1 text-[10px] font-medium text-ink-950">Apply</button>
            </div>
          </PanelShell>
        </motion.div>
      </motion.div>

      {/* TR — Decision Stream */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 1.15, ease: EASE_SOFT }}
        className="pointer-events-auto absolute -right-6 top-28 w-60"
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ ...float2, repeat: Infinity }}>
          <PanelShell>
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-accent-300" />
              <span className="text-xs font-medium text-white">Decisions / sec</span>
              <span className="ml-auto font-mono text-[11px] tabular-nums text-accent-300">2,418</span>
            </div>
            <div className="mt-3 flex items-end gap-[3px]">
              {Array.from({ length: 22 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 4 }}
                  animate={{ height: [4, 6 + (i * 31 % 18), 4] }}
                  transition={{
                    duration: 1.4 + (i * 7 % 9) / 10,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: 'easeInOut',
                  }}
                  className="w-[3px] rounded-full bg-accent/70"
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
              {[
                { l: 'route',  v: '1.2k' },
                { l: 'predict', v: '684' },
                { l: 'resolve', v: '518' },
              ].map((s) => (
                <div key={s.l} className="rounded-md border border-white/[0.06] bg-white/[0.02] px-1 py-1.5">
                  <div className="font-mono text-[10px] tabular-nums text-white">{s.v}</div>
                  <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </PanelShell>
        </motion.div>
      </motion.div>

      {/* BL — Traffic Map sliver */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 1.3, ease: EASE_SOFT }}
        className="pointer-events-auto absolute -left-10 bottom-16 w-60"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ ...float3, repeat: Infinity }}>
          <PanelShell>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent-300" />
              <span className="text-xs font-medium text-white">Global routing</span>
              <span className="ml-auto rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-medium text-emerald-300">14 regions</span>
            </div>
            <svg viewBox="0 0 200 90" className="mt-3 h-20 w-full">
              {/* Dotted globe latitudes */}
              {[20, 35, 50, 65].map((y) => (
                <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="2 3" />
              ))}
              {/* Arcs */}
              {[
                { x1: 28, y1: 52, x2: 90,  y2: 30 },
                { x1: 90, y1: 30, x2: 160, y2: 58 },
                { x1: 50, y1: 70, x2: 130, y2: 22 },
              ].map((a, i) => (
                <g key={i}>
                  <motion.path
                    d={`M ${a.x1} ${a.y1} Q ${(a.x1 + a.x2) / 2} ${Math.min(a.y1, a.y2) - 30} ${a.x2} ${a.y2}`}
                    fill="none"
                    stroke="rgba(125,211,252,0.55)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, delay: 1.5 + i * 0.25, ease: 'easeOut' }}
                  />
                  <circle cx={a.x1} cy={a.y1} r="1.6" fill="#7dd3fc" />
                  <circle cx={a.x2} cy={a.y2} r="1.6" fill="#7dd3fc" />
                </g>
              ))}
            </svg>
          </PanelShell>
        </motion.div>
      </motion.div>

      {/* BR — Uptime / SLA */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 1.45, ease: EASE_SOFT }}
        className="pointer-events-auto absolute -right-4 bottom-12 w-60"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ ...float4, repeat: Infinity }}>
          <PanelShell>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white">Uptime · 90d</span>
              <span className="font-mono text-[11px] tabular-nums text-emerald-300">99.997%</span>
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
          </PanelShell>
        </motion.div>
      </motion.div>
    </>
  );
};

const PanelShell = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl border border-white/[0.08] bg-ink-900/75 p-4 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    {children}
  </div>
);

/* Mouse-tracked 3D tilt wrapper */
const TiltCard = ({ children, max = 6 }: { children: React.ReactNode; max?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty('--rx', `${-py * max}deg`);
    ref.current.style.setProperty('--ry', `${px * max}deg`);
    ref.current.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
    ref.current.style.setProperty('--my', `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--rx', '0deg');
    ref.current.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: 'perspective(1400px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
        '--mx': '50%',
        '--my': '50%',
      } as React.CSSProperties}
      className="group relative will-change-transform"
    >
      {/* Cursor-tracked sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(540px circle at var(--mx) var(--my), rgba(125,211,252,0.14), transparent 55%)',
        }}
      />
      {children}
    </div>
  );
};

/* Subtle infinite logo marquee */
const LogoMarquee = () => {
  const logos = ['Cisco', 'Webex', 'AWS', 'Azure', 'ServiceNow', 'Splunk', 'Salesforce', 'Genesys'];
  const row = [...logos, ...logos];
  return (
    <div className="relative mt-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
        className="flex w-max gap-14 whitespace-nowrap"
      >
        {row.map((l, i) => (
          <span
            key={i}
            className="font-display text-lg font-semibold tracking-tight text-slate-500/80 transition-colors hover:text-white"
          >
            {l}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* Floating dashboard mock */
const DashboardMock = () => {
  return (
    <div className="relative">
      {/* Glow halo (handled by CoreReactor when in Theatre, kept subtle here) */}
      <div className="absolute inset-x-12 -inset-y-4 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/15 via-sky-400/10 to-transparent opacity-50 blur-3xl" />

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
          <div className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
            <Lock className="h-3 w-3 text-slate-500" />
            celoxus.app/operations
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">Live</span>
          </div>
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
    <section className="relative overflow-hidden bg-ink-950 py-40 lg:py-48">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 radial-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: EASE_SOFT }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
            Built for the minutes that matter
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.0] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
            Every layer of voice.<br />
            <span className="text-gradient-accent">Quietly engineered.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] font-light leading-[1.6] text-slate-400">
            Routing, observability, security — replaced by one operational fabric
            that runs in the background while your business runs in the foreground.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <BentoCard
            className="md:col-span-4"
            icon={Headphones}
            eyebrow="Webex Contact Center"
            title="Every call routed with intent."
            body="Voice, digital, and AI journeys converge into a single supervisor signal — the system anticipates the room before you do."
            featured
          />
          <BentoCard
            className="md:col-span-2"
            icon={Cloud}
            eyebrow="Cloud Migration"
            title="Cutovers without the night-shift."
            body="Zero-downtime moves to Cisco-native cloud, engineered phase by phase by CCIEs."
          />
          <BentoCard
            className="md:col-span-2"
            icon={Code}
            eyebrow="APIs & Integration"
            title="Bridge anything to anything."
            body="Bespoke middleware that makes your legacy stack feel like one product."
          />
          <BentoCard
            className="md:col-span-2"
            icon={Activity}
            eyebrow="Observability"
            title="Sub-second signal capture."
            body="From SIP trunk to agent desktop, every leg of the call is visible and queryable."
          />
          <BentoCard
            className="md:col-span-2"
            icon={Shield}
            eyebrow="Security & Compliance"
            title="Designed for regulated rooms."
            body="SOC 2 Type II, air-gapped logic, and NDA-first engagements as the default — not the upgrade."
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
      transition={{ duration: 0.95, ease: EASE_SOFT }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="ring-gradient group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/60 p-7 backdrop-blur-xl hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_40px_120px_-30px_rgba(4,159,217,0.45)]"
        style={{ transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 700ms cubic-bezier(0.16, 1, 0.3, 1), border-color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Cursor spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(4,159,217,0.18), transparent 55%)',
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
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-40 lg:py-48">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: EASE_SOFT }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
              The people behind the platform
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.75rem]">
              Senior engineers.
              <span className="text-gradient-accent"> Discreet engagements.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[17px] font-light leading-[1.6] text-slate-400">
              We're the team you bring in when the cutover can't fail and the room
              can't know about it. Eight years of complex swaps and greenfield
              builds — none of which are ours to talk about.
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
            transition={{ duration: 1, ease: EASE_SOFT }}
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
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
      {/* Signature mesh — subtle echo of the hero */}
      <div className="pointer-events-none absolute inset-0 radial-fade opacity-70">
        <LiveMesh density={0.5} connectionDistance={150} maxOpacity={0.6} />
      </div>
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.22),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300"
        >
          The conversation starts here
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_SOFT }}
          className="mt-5 font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]"
        >
          Make every minute<br />
          <span className="text-gradient-accent">work for you.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE_SOFT }}
          className="mx-auto mt-7 max-w-xl text-[17px] font-light leading-[1.6] text-slate-400"
        >
          A 30-minute conversation with our architects is usually enough to know
          whether Celoxus belongs in your operational stack.
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
   CORE — sticky scroll-driven topology with sliding feature highlight
   ============================================================ */
const CORE_FEATURES = [
  {
    i: '01',
    title: 'Unified call routing',
    body: 'One control plane for Cisco calling across regions, clusters, and CUCM tenants.',
  },
  {
    i: '02',
    title: 'Live contact-center fabric',
    body: 'Webex CC, Finesse, and PCCE telemetry stitched into a single operational view.',
  },
  {
    i: '03',
    title: 'Real-time observability',
    body: 'Sub-second signal capture across every leg — from SIP trunk to agent desktop.',
  },
  {
    i: '04',
    title: 'AI-assisted resilience',
    body: 'Predictive failover, anomaly detection, and zero-downtime cutovers as defaults.',
  },
] as const;

export const CoreSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Active index 0..3 across scroll
  const activeIndex = useTransform(scrollYProgress, [0.02, 0.92], [0, CORE_FEATURES.length - 0.001]);
  // Sliding highlight Y position (in % of feature stack height)
  const highlightTop = useTransform(activeIndex, (v) =>
    `${Math.max(0, Math.min(CORE_FEATURES.length - 1, Math.floor(v))) * (100 / CORE_FEATURES.length)}%`
  );

  return (
    <section ref={containerRef} className="relative w-full bg-ink-950 md:h-[360vh] border-t border-hairline">
      <div className="hidden h-full md:block">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 radial-fade" />
          <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
          <div className="pointer-events-none absolute -right-40 bottom-1/3 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]" />

          <span aria-hidden className="pointer-events-none absolute -left-[2vw] -top-[6vw] block font-display font-light leading-none text-[20vw] text-white/[0.025]">
            02
          </span>

          {/* Scroll progress bar */}
          <CoreProgressBar scrollYProgress={scrollYProgress} />

          <div className="mx-auto grid h-full max-w-7xl grid-cols-12 items-center gap-8 px-6 lg:px-8">
            {/* LEFT: heading + feature list with sliding highlight */}
            <div className="relative z-10 col-span-5 flex flex-col">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
                  Chapter / 02 · The Core
                </p>
              </div>
              <h2 className="mb-7 font-display text-[2.75rem] font-bold leading-[0.98] tracking-[-0.04em] text-white lg:text-[4.25rem]">
                Convergence is the<br />
                <span className="text-gradient-accent">architecture.</span>
              </h2>
              <p className="mb-10 max-w-md text-[15px] font-light leading-relaxed text-slate-400">
                Four fragmented stacks become one. As you scroll, each layer slots into place.
              </p>

              {/* Sliding feature stack — fixed-height grid of equal rows */}
              <div className="relative h-[460px] grid grid-rows-4">
                {/* Vertical rail */}
                <div className="absolute left-0 top-0 h-full w-px bg-white/[0.06]" />
                {/* Sliding background pane */}
                <motion.div
                  style={{ top: highlightTop, height: `${100 / CORE_FEATURES.length}%` }}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  className="absolute inset-x-0 rounded-2xl border border-accent/15 bg-gradient-to-r from-accent/[0.10] via-accent/[0.04] to-transparent"
                />
                {/* Sliding accent bar */}
                <motion.div
                  style={{ top: highlightTop, height: `${100 / CORE_FEATURES.length}%` }}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  className="absolute left-0 w-[2px] rounded-full bg-accent shadow-[0_0_22px_3px_rgba(4,159,217,0.6)]"
                />

                {CORE_FEATURES.map((f, i) => (
                  <CoreFeatureRow key={f.i} feature={f} index={i} activeIndex={activeIndex} />
                ))}
              </div>
            </div>

            {/* RIGHT: topology */}
            <div className="relative z-10 col-span-7 flex flex-col items-center justify-center">
              <div className="relative aspect-square w-full max-w-[620px]">
                <CoreTopology progress={scrollYProgress} />
              </div>
              {/* Active-feature caption under topology */}
              <div className="relative mt-6 h-8 w-full max-w-[560px] overflow-hidden text-center">
                {CORE_FEATURES.map((f, i) => (
                  <CoreCaption key={f.i} index={i} activeIndex={activeIndex} feature={f} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block px-6 py-24 md:hidden">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">Chapter / 02</p>
        <h2 className="mb-6 font-display text-[2.5rem] font-bold leading-[1.0] tracking-[-0.03em] text-white">
          Convergence is the architecture.
        </h2>
        <p className="mb-10 text-base font-light leading-relaxed text-slate-400">
          Four fragmented stacks become one always-on operational fabric.
        </p>
        <div className="space-y-3">
          {CORE_FEATURES.map((f) => (
            <div key={f.i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-accent-300">{f.i}</div>
              <div className="font-display text-lg font-medium text-white">{f.title}</div>
              <p className="mt-1 text-sm font-light text-slate-400">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreProgressBar = ({ scrollYProgress }: { scrollYProgress: import('framer-motion').MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="pointer-events-none absolute right-8 top-1/2 hidden h-[280px] w-px -translate-y-1/2 bg-white/[0.06] lg:block">
      <motion.div
        style={{ scaleY: scale, transformOrigin: 'top' }}
        className="h-full w-px bg-gradient-to-b from-accent via-accent/60 to-transparent shadow-[0_0_12px_1px_rgba(4,159,217,0.5)]"
      />
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{ top: `${(i / 3) * 100}%` }}
          className="absolute -left-[3px] h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-white/30 bg-ink-950"
        />
      ))}
    </div>
  );
};

const CoreFeatureRow = ({
  feature, index, activeIndex,
}: {
  feature: typeof CORE_FEATURES[number];
  index: number;
  activeIndex: import('framer-motion').MotionValue<number>;
}) => {
  const isActive = useTransform(activeIndex, (v) => Math.floor(v) === index);
  const dim = useTransform(activeIndex, (v) => {
    const dist = Math.abs(Math.floor(v) - index);
    return dist === 0 ? 1 : dist === 1 ? 0.5 : 0.28;
  });
  const indexColor = useTransform(isActive, (a) => (a ? '#049fd9' : 'rgba(148,163,184,0.45)'));
  const titleColor = useTransform(isActive, (a) => (a ? '#ffffff' : 'rgba(226,232,240,0.85)'));
  const x = useTransform(isActive, (a) => (a ? 6 : 0));

  return (
    <motion.div
      style={{ opacity: dim, x }}
      transition={{ type: 'spring', stiffness: 220, damping: 30 }}
      className="relative flex flex-col justify-center pl-7 pr-4"
    >
      <div className="flex items-baseline gap-4">
        <motion.span
          style={{ color: indexColor }}
          className="font-mono text-[10px] uppercase tracking-[0.24em] tabular-nums"
        >
          {feature.i}
        </motion.span>
        <motion.h3
          style={{ color: titleColor }}
          className="font-display text-[1.2rem] font-semibold tracking-[-0.01em]"
        >
          {feature.title}
        </motion.h3>
      </div>
      <p className="mt-1.5 max-w-md pl-10 text-[13px] font-light leading-relaxed text-slate-400">
        {feature.body}
      </p>
    </motion.div>
  );
};

const CoreCaption = ({
  index, activeIndex, feature,
}: {
  index: number;
  activeIndex: import('framer-motion').MotionValue<number>;
  feature: typeof CORE_FEATURES[number];
}) => {
  const opacity = useTransform(activeIndex, (v) => (Math.floor(v) === index ? 1 : 0));
  const y = useTransform(activeIndex, (v) => (Math.floor(v) === index ? 0 : 10));
  return (
    <motion.div
      style={{ opacity, y }}
      transition={{ type: 'spring', stiffness: 180, damping: 28 }}
      className="absolute inset-x-0 top-0"
    >
      <span className="mr-3 font-mono text-[10px] tracking-[0.3em] text-accent-300">[{feature.i}]</span>
      <span className="font-body text-[0.95rem] font-medium text-slate-300">{feature.title}</span>
    </motion.div>
  );
};
