import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Shield, Settings, Activity, ArrowRight, ArrowUpRight, Headphones, Phone, Mail,
  Database, CheckCircle2, XCircle, Code, Cloud, LayoutTemplate, ChevronRight,
  Sparkles, Lock, Globe, Cpu, Bell, Send, MapPin, Zap, Compass, PenTool,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';
import { LightSlab } from './LightSlab';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_SOFT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ============================================================
   Shared building blocks
   ============================================================ */
const PageHero = ({
  eyebrow, title, accent, sub, visual,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  sub: string;
  visual?: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-ink-950 pt-40 pb-24">
    <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.22),transparent_70%)] blur-3xl" />
    <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_SOFT }}
        className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
      >
        <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent-300">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.05, ease: EASE_SOFT }}
        className="font-display mx-auto max-w-5xl text-balance text-[2.75rem] font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.5rem]"
      >
        {title}{' '}
        <span className="block text-gradient-accent">{accent}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.18, ease: EASE_SOFT }}
        className="mx-auto mt-7 max-w-2xl text-balance text-[17px] font-light leading-[1.6] text-slate-400 sm:text-xl"
      >
        {sub}
      </motion.p>

      {visual && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE_SOFT }}
          className="relative mx-auto mt-16"
        >
          {visual}
        </motion.div>
      )}
    </div>
  </section>
);

/* ============================================================
   PRODUCTS hero — floating product card stack
   Three product UI fragments hovering at different depths,
   each breathing on its own cadence with a parallax tilt.
   ============================================================ */
const ProductsHeroVisual = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-3xl">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.18),transparent_70%)] blur-2xl" />

      {/* Card 1 — Finesse alert (back, left) */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 10, rotate: -8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
        transition={{ duration: 1.1, delay: 0.5, ease: EASE_SOFT }}
        className="absolute left-[6%] top-[28%] hidden w-56 sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl border border-white/[0.08] bg-ink-900/80 p-4 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]"
          style={{ transform: 'rotate(-6deg)' }}
        >
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-red-400" />
            <span className="text-xs font-medium text-white">RONA · Agent 4216</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-red-400"
            />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Card 2 — Monitoring chart (middle, foremost) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: EASE_SOFT }}
        className="absolute left-1/2 top-[14%] w-72 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl border border-white/[0.1] bg-ink-900/90 p-5 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Operations</span>
            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-medium text-emerald-300">Live</span>
          </div>
          <svg viewBox="0 0 240 60" className="mt-3 h-14 w-full">
            <defs>
              <linearGradient id="phlg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,42 C20,38 40,22 60,28 C80,34 100,16 120,18 C140,20 160,38 180,30 C200,22 220,12 240,8 L240,60 L0,60 Z" fill="url(#phlg)" />
            <motion.path
              d="M0,42 C20,38 40,22 60,28 C80,34 100,16 120,18 C140,20 160,38 180,30 C200,22 220,12 240,8"
              fill="none" stroke="#7dd3fc" strokeWidth="1.4"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
            <Kpi v="24,816" l="active" />
            <Kpi v="1m 42s" l="aht" />
            <Kpi v="99.99%" l="sla" />
          </div>
        </motion.div>
      </motion.div>

      {/* Card 3 — Integration orbital (back, right) */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 10, rotate: 8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
        transition={{ duration: 1.1, delay: 0.55, ease: EASE_SOFT }}
        className="absolute right-[6%] top-[28%] hidden w-52 sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'rotate(6deg)' }}
          className="rounded-2xl border border-white/[0.08] bg-ink-900/80 p-4 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-accent-300" />
            <span className="text-xs font-medium text-white">Integrations</span>
            <span className="ml-auto font-mono text-[10px] text-slate-500">14</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[Cloud, Database, Code, Headphones, Globe, Activity].map((Ic, i) => (
              <div key={i} className="flex h-8 w-full items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.03]">
                <Ic className="h-3.5 w-3.5 text-slate-300" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
const Kpi = ({ v, l }: { v: string; l: string }) => (
  <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-1.5 py-1.5">
    <div className="font-display text-[13px] font-semibold tabular-nums text-white">{v}</div>
    <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-500">{l}</div>
  </div>
);

/* ============================================================
   SERVICES hero — Engagement Arc
   A horizontal flowing arc through three phases with a traveling
   photon and pulsing milestone nodes.
   ============================================================ */
const ServicesHeroVisual = () => {
  const reduce = useReducedMotion();
  const phases = [
    { Icon: Compass, label: 'Discover',  i: '01' },
    { Icon: PenTool, label: 'Architect', i: '02' },
    { Icon: Activity, label: 'Operate',  i: '03' },
  ];
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative h-32">
        <svg viewBox="0 0 600 120" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="arcStroke" x1="0" x2="1">
              <stop offset="0%"   stopColor="rgba(125,211,252,0)" />
              <stop offset="50%"  stopColor="rgba(125,211,252,0.7)" />
              <stop offset="100%" stopColor="rgba(125,211,252,0)" />
            </linearGradient>
          </defs>
          {/* Base arc */}
          <path
            d="M 60 80 Q 300 -10 540 80"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          {/* Animated draw-on arc */}
          <motion.path
            d="M 60 80 Q 300 -10 540 80"
            fill="none"
            stroke="url(#arcStroke)"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, delay: 0.6, ease: 'easeOut' }}
          />
          {/* Traveling photon */}
          {!reduce && (
            <motion.circle
              r="3.2"
              fill="#7dd3fc"
              animate={{
                cx: Array.from({ length: 60 }).map((_, i) => {
                  const t = i / 59;
                  return 60 + (540 - 60) * t;
                }),
                cy: Array.from({ length: 60 }).map((_, i) => {
                  const t = i / 59;
                  // Quadratic curve: y(t) = (1-t)^2 * 80 + 2(1-t)t * -10 + t^2 * 80
                  return (1 - t) * (1 - t) * 80 + 2 * (1 - t) * t * -10 + t * t * 80;
                }),
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
            />
          )}
        </svg>
        {/* Milestone nodes */}
        {[
          { x: '10%', y: '66%' },
          { x: '50%', y: '-8%' },
          { x: '90%', y: '66%' },
        ].map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.25, ease: EASE_SOFT }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: p.x, top: p.y }}
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 rounded-full border border-accent"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-ink-900/80 backdrop-blur-md">
                {(() => {
                  const Icon = phases[i].Icon;
                  return <Icon className="h-5 w-5 text-accent" />;
                })()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Labels */}
      <div className="mt-6 flex justify-between px-4">
        {phases.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 + i * 0.15, ease: EASE_SOFT }}
            className="text-center"
          >
            <div className="font-mono text-[10px] tracking-[0.24em] text-accent-300">{p.i}</div>
            <div className="mt-1 font-display text-sm font-medium text-white">{p.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   ABOUT hero — World network
   A stylized globe with great-circle arcs flying between regions,
   pulsing region nodes, and orbital stat rings.
   ============================================================ */
const AboutHeroVisual = () => {
  const reduce = useReducedMotion();
  // Region nodes (lat-ish, lon-ish projected to viewBox)
  const nodes = [
    { x: 130, y: 95,  label: 'NA' },
    { x: 200, y: 80,  label: 'EU' },
    { x: 240, y: 130, label: 'IN' },
    { x: 290, y: 110, label: 'APAC' },
    { x: 95,  y: 145, label: 'LATAM' },
  ];
  const arcs = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 3], [0, 2],
  ];
  return (
    <div className="relative mx-auto h-[280px] w-full max-w-3xl">
      <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="globeFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(4,159,217,0.15)" />
            <stop offset="70%" stopColor="rgba(4,159,217,0.03)" />
            <stop offset="100%" stopColor="rgba(4,159,217,0)" />
          </radialGradient>
        </defs>
        {/* Globe disk */}
        <circle cx="200" cy="110" r="100" fill="url(#globeFill)" />
        {/* Latitudes */}
        {[60, 90, 120, 150].map((y) => (
          <motion.ellipse
            key={y}
            cx="200" cy={y}
            rx="100"
            ry={Math.max(8, 100 - Math.abs(y - 110) * 1.6)}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="2 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          />
        ))}
        {/* Longitudes */}
        {[200].map((cx) => (
          <ellipse key={cx} cx={cx} cy="110" rx="100" ry="100" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />
        ))}
        {/* Outer ring */}
        <motion.circle
          cx="200" cy="110" r="105"
          fill="none"
          stroke="rgba(125,211,252,0.25)"
          strokeWidth="0.6"
          strokeDasharray="4 8"
          style={{ transformOrigin: '200px 110px' }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Arcs between nodes */}
        {arcs.map(([a, b], i) => {
          const A = nodes[a], B = nodes[b];
          const midX = (A.x + B.x) / 2;
          const midY = Math.min(A.y, B.y) - 18 - i * 4;
          return (
            <motion.path
              key={i}
              d={`M ${A.x} ${A.y} Q ${midX} ${midY} ${B.x} ${B.y}`}
              fill="none"
              stroke="rgba(125,211,252,0.55)"
              strokeWidth="0.6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 + i * 0.18, ease: 'easeOut' }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.x} cy={n.y}
              fill="none"
              stroke="#049fd9"
              strokeWidth="0.6"
              animate={{ r: [2, 6, 2], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            />
            <circle cx={n.x} cy={n.y} r="2.2" fill="#7dd3fc" />
            <text
              x={n.x + 6} y={n.y + 3}
              fontSize="6"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.18em"
              fill="rgba(226,232,240,0.7)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Orbital stat chips */}
      {[
        { label: 'CCIE-led',          pos: 'left-[6%] top-[6%]'  },
        { label: 'Cisco Premier',     pos: 'right-[6%] top-[14%]' },
        { label: 'NDA-first',         pos: 'left-[8%] bottom-[8%]' },
        { label: 'Bangalore · India', pos: 'right-[8%] bottom-[6%]' },
      ].map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 + i * 0.12, ease: EASE_SOFT }}
          className={`absolute ${s.pos} rounded-full border border-white/[0.08] bg-ink-900/70 px-3 py-1.5 backdrop-blur-md`}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">{s.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ============================================================
   CONTACT hero — Signal routing
   A message traveling through three router nodes toward an
   "Engineers online" endpoint, with a path drawing in.
   ============================================================ */
const ContactHeroVisual = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative flex items-center justify-between gap-2 px-2">
        {/* Source */}
        <RoutingChip Icon={Send} primary>You</RoutingChip>
        {/* Hops */}
        <RoutingChip Icon={Zap}>Edge</RoutingChip>
        <RoutingChip Icon={Activity}>Routing</RoutingChip>
        <RoutingChip Icon={MapPin}>Bangalore</RoutingChip>
        {/* Endpoint */}
        <RoutingChip Icon={Headphones} accent>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </span>
            Engineers
          </span>
        </RoutingChip>
      </div>

      {/* Connecting line + traveling photon */}
      <div className="pointer-events-none absolute inset-x-6 top-1/2 -z-0 h-px -translate-y-1/2">
        <div className="relative h-px w-full">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
          {!reduce && (
            <motion.span
              className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(4,159,217,0.7)]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 2.2 }}
            />
          )}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="mt-7 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500"
      >
        Median response · 4h 12m · 24-hour SLA
      </motion.p>
    </div>
  );
};

const RoutingChip = ({
  Icon, children, primary, accent,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  primary?: boolean;
  accent?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 + Math.random() * 0.3, ease: EASE_SOFT }}
    className={`relative z-10 flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium backdrop-blur-xl ${
      primary
        ? 'border-white/15 bg-white text-ink-950 shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)]'
        : accent
        ? 'border-accent/30 bg-accent/10 text-accent-200'
        : 'border-white/[0.08] bg-ink-900/80 text-slate-300'
    }`}
  >
    <Icon className="h-3.5 w-3.5" />
    {children}
  </motion.div>
);

/* ============================================================
   Reusable PrincipleSlab — light architectural page for inner pages
   ============================================================ */
const PrincipleSlab = ({
  chapter, quote, attribution, principle,
}: {
  chapter: string;
  quote: React.ReactNode;
  attribution: string;
  principle: string;
}) => (
  <LightSlab chapter={chapter} className="py-32 lg:py-36">
    <div className="relative z-10 mx-auto max-w-5xl px-6">
      <motion.blockquote
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: EASE_SOFT }}
        className="font-display text-3xl font-semibold leading-[1.18] tracking-[-0.025em] text-slate-900 sm:text-4xl lg:text-[3rem]"
      >
        {quote}
      </motion.blockquote>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.18, ease: EASE_SOFT }}
        className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-slate-300/70 pt-8 text-slate-700"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
          — {attribution}
        </span>
        <span className="text-[15px] font-medium">{principle}</span>
      </motion.div>
    </div>
  </LightSlab>
);

/* ============================================================ */

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
        visual={<ProductsHeroVisual />}
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

      <PrincipleSlab
        chapter="The shipping principle"
        quote={
          <>
            Software for operators should disappear into the work —
            <span className="block text-slate-500">
              not draw a roadmap on the screen.
            </span>
          </>
        }
        attribution="Engineering principle"
        principle="Every feature earns its pixels."
      />

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
        visual={<ServicesHeroVisual />}
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

      <PrincipleSlab
        chapter="How an engagement starts"
        quote={
          <>
            A migration is a promise to a building full of people you'll
            never meet.
            <span className="block text-slate-500">
              We treat it that way from the first call.
            </span>
          </>
        }
        attribution="Engagement principle"
        principle="No surprise cutovers. Ever."
      />

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
        { l: 'Discipline', v: 'CCIE' },
        { l: 'Tier',       v: 'Premier' },
        { l: 'Uptime SLA', v: '99.997%' },
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
    'description': 'Celoxus is a full-stack engineering firm delivering zero-trust Cisco infrastructure to enterprise teams.',
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
        sub="Celoxus was built on a single premise: enterprise voice deserves surgical precision — not off-the-shelf compromises."
        visual={<AboutHeroVisual />}
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
                      { l: 'Discipline',   v: 'CCIE' },
                      { l: 'Tier',         v: 'Premier' },
                      { l: 'Verticals',    v: 'Regulated' },
                      { l: 'HQ',           v: 'Bangalore' },
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

      </div>

      {/* Engineering Matrix — light slab */}
      <LightSlab chapter="Engineering matrix" className="py-32 lg:py-36 text-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Three disciplines.<br />
              <span className="text-accent-600">Zero compromise.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { Icon: Cloud, eyebrow: 'Webex & UCCE',      h: 'Cloud center mapping', b: 'Designing, provisioning, and scaling massive hybrid or full-cloud Contact Center topologies.' },
              { Icon: Code,  eyebrow: 'Finesse / API / Dev', h: 'Custom automations',   b: 'Bespoke software and middleware that fills the gaps standard deployments leave behind.' },
              { Icon: Shield, eyebrow: 'Sovereign focus',  h: 'Zero-trust backbone',   b: 'Data integrity through air-gapped or localized logic, designed for regulated networks.' },
            ].map((c, i) => (
              <motion.div
                key={c.h}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.95, delay: i * 0.08, ease: EASE_SOFT }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_70px_-25px_rgba(4,159,217,0.25)]"
                style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(15,23,42,0.04), 0 20px 40px -28px rgba(15,23,42,0.18)' }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                  <c.Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{c.eyebrow}</div>
                <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-slate-900">{c.h}</h3>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-slate-600">{c.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </LightSlab>

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
        visual={<ContactHeroVisual />}
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
