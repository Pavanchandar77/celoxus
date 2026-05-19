import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * RuptureSection — Chapter 03 · Visibility.
 *
 * A 200vh sticky stage. The word "Visibility" is rendered as a layered
 * type system with real depth:
 *   - Drop-shadow layer (Cisco-blue, blurred)
 *   - Backplate layer (deep ink) lifting the glyphs off the background
 *   - Outline glyphs (slate-200 stroke, defined)
 *   - Inner signal field — gradient horizontal traces + sparse verticals
 *     + a slow radial center glow, all clipped to the glyphs
 *   - Top inner highlight (white→transparent) for a glass-like sheen
 *   - Corner brackets framing the word like an architectural viewfinder
 *
 * Phases:
 *   0.00 – 0.40 : ambient signal grid draws
 *   0.32 – 0.78 : Visibility wordmark reveals, parallax-glides on Y
 *   0.78 – 1.00 : everything settles, ambient fades
 */

const AMBIENT_LINE_COUNT = 9;

export const RuptureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ['#08080b', '#05050a', '#05050a', '#08080b'],
  );

  const ambientDraw = useTransform(scrollYProgress, [0, 0.4], [1, 0], { clamp: true });
  const ambientOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const typeOpacity = useTransform(scrollYProgress, [0.30, 0.45, 0.72, 0.84], [0, 1, 1, 0]);
  const typeScale = useTransform(scrollYProgress, [0.30, 0.55], [0.94, 1], { clamp: true });
  // Parallax: the word drifts upward slightly as you scroll through it
  const typeY = useTransform(scrollYProgress, [0.30, 0.85], [40, -28]);
  // The chapter chip and sub-copy carry less travel for natural depth
  const chipY = useTransform(scrollYProgress, [0.30, 0.85], [24, -16]);
  const subY  = useTransform(scrollYProgress, [0.30, 0.85], [16, -8]);
  // A subtle vignette opacity that strengthens at the centerpoint
  const vignetteOpacity = useTransform(scrollYProgress, [0.20, 0.45, 0.78, 0.90], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative w-full" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ backgroundColor: bg }} aria-hidden="true" />

        {/* Soft center vignette — lifts the wordmark forward */}
        <motion.div
          aria-hidden
          style={{ opacity: vignetteOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(4,159,217,0.10),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
        </motion.div>

        {/* Ambient grid behind the type — fades as the word arrives */}
        <motion.div className="absolute inset-0" style={{ opacity: ambientOpacity }} aria-hidden="true">
          <AmbientField dashoffset={ambientDraw} />
        </motion.div>

        {/* Wordmark + chapter chip + sub-copy, each on its own depth plane */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          style={{ opacity: typeOpacity, scale: typeScale, willChange: 'transform, opacity' }}
        >
          <motion.div
            style={{ y: chipY }}
            className="mb-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-200 sm:text-[11px]">
              Chapter / 03 · Visibility
            </span>
          </motion.div>

          <motion.div style={{ y: typeY }} className="w-full max-w-[1200px]">
            <MaskedVisibility />
          </motion.div>

          <motion.p
            style={{ y: subY }}
            className="mt-10 max-w-2xl text-balance text-center text-[1.05rem] font-light leading-[1.5] text-slate-400 sm:text-[1.35rem]"
          >
            Every leg of the call, every signal, every silence —
            <span className="block text-slate-300">visible at enterprise scale.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* AmbientField — sparse drawing horizontal lines + traveling photons */
/* ------------------------------------------------------------------ */
function AmbientField({ dashoffset }: { dashoffset: ReturnType<typeof useTransform> }) {
  const lines = Array.from({ length: AMBIENT_LINE_COUNT }, (_, i) => {
    const y = ((i + 0.5) / AMBIENT_LINE_COUNT) * 100;
    return { y, delay: i * 0.12 };
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="ambient-line" x1="0" x2="1">
          <stop offset="0%"  stopColor="rgba(125,211,252,0)" />
          <stop offset="50%" stopColor="rgba(125,211,252,0.35)" />
          <stop offset="100%" stopColor="rgba(125,211,252,0)" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => (
        <motion.line
          key={i}
          x1={0} y1={l.y}
          x2={100} y2={l.y}
          stroke="url(#ambient-line)"
          strokeWidth="0.06"
          pathLength={1}
          strokeDasharray="1"
          style={{ strokeDashoffset: dashoffset }}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {/* Traveling photons on alternating lines */}
      {lines.filter((_, i) => i % 2 === 0).map((l, i) => (
        <motion.circle
          key={`p-${i}`}
          r={0.4}
          fill="#7dd3fc"
          initial={{ cx: 0, cy: l.y }}
          animate={{ cx: [0, 100, 100] }}
          transition={{
            duration: 6 + i * 1.3,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.8,
            times: [0, 0.75, 1],
          }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* MaskedVisibility — multi-layer wordmark with real depth             */
/* ------------------------------------------------------------------ */
function MaskedVisibility() {
  const VB_W = 1200;
  const VB_H = 320;
  const FONT_SIZE = 264;
  const BASELINE = 220;
  const fontFamily = "'Satoshi', 'General Sans', 'Inter', sans-serif";

  // Sparse architectural grid inside the glyphs
  const hLines = Array.from({ length: 9 }).map((_, i) => {
    const t = (i + 0.5) / 9;
    return { y: t * VB_H, dur: 3.4 + ((i * 0.31) % 2.4), delay: -((i * 0.42) % 4) };
  });
  const vLines = Array.from({ length: 14 }).map((_, i) => {
    const t = (i + 0.5) / 14;
    return { x: t * VB_W, dur: 3 + ((i * 0.27) % 2.6), delay: -((i * 0.31) % 4) };
  });
  const photonsY = [VB_H * 0.30, VB_H * 0.55, VB_H * 0.78];

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto w-full"
      role="img"
      aria-label="Visibility"
    >
      <defs>
        {/* Drop-shadow filter */}
        <filter id="vis-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>

        {/* Horizontal signal gradient */}
        <linearGradient id="vis-hline" x1="0" x2="1">
          <stop offset="0%"   stopColor="rgba(125,211,252,0)" />
          <stop offset="50%"  stopColor="rgba(125,211,252,0.85)" />
          <stop offset="100%" stopColor="rgba(125,211,252,0)" />
        </linearGradient>

        {/* Vertical accent gradient (sparse) */}
        <linearGradient id="vis-vline" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="rgba(56,189,248,0)" />
          <stop offset="50%"  stopColor="rgba(56,189,248,0.45)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </linearGradient>

        {/* Top inner highlight (glass sheen) */}
        <linearGradient id="vis-top-highlight" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"  stopColor="rgba(255,255,255,0.35)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Radial centre glow */}
        <radialGradient id="vis-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(125,211,252,0.45)" />
          <stop offset="60%" stopColor="rgba(125,211,252,0)" />
        </radialGradient>

        {/* The shared mask: only render inside the glyphs */}
        <mask id="vis-mask">
          <rect x="0" y="0" width={VB_W} height={VB_H} fill="black" />
          <text
            x={VB_W / 2} y={BASELINE}
            textAnchor="middle"
            fontFamily={fontFamily}
            fontWeight={800}
            fontSize={FONT_SIZE}
            fill="white"
            style={{ letterSpacing: '-0.045em' }}
          >
            Visibility
          </text>
        </mask>
      </defs>

      {/* Layer 1 — Drop shadow (offset down, Cisco-blue tinted) */}
      <g transform="translate(0, 14)" filter="url(#vis-shadow)" opacity="0.55">
        <text
          x={VB_W / 2} y={BASELINE}
          textAnchor="middle"
          fontFamily={fontFamily}
          fontWeight={800}
          fontSize={FONT_SIZE}
          fill="rgba(4,159,217,0.55)"
          style={{ letterSpacing: '-0.045em' }}
        >
          Visibility
        </text>
      </g>

      {/* Layer 2 — Backplate: solid deep-ink fill lifts the word off the bg */}
      <text
        x={VB_W / 2} y={BASELINE}
        textAnchor="middle"
        fontFamily={fontFamily}
        fontWeight={800}
        fontSize={FONT_SIZE}
        fill="#050511"
        style={{ letterSpacing: '-0.045em' }}
      >
        Visibility
      </text>

      {/* Layer 3 — Inner signal field, masked to glyphs */}
      <g mask="url(#vis-mask)">
        {/* Base inner color slightly lighter than backplate */}
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="#0b0c1a" />
        {/* Radial accent core */}
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#vis-core-glow)" />

        {/* Vertical accent traces — give the field architectural rhythm */}
        {vLines.map((l, i) => (
          <motion.line
            key={`vl-${i}`}
            x1={l.x} x2={l.x}
            y1={0} y2={VB_H}
            stroke="url(#vis-vline)"
            strokeWidth="0.9"
            initial={{ opacity: 0.18 }}
            animate={{ opacity: [0.18, 0.45, 0.18] }}
            transition={{ duration: l.dur, repeat: Infinity, delay: l.delay }}
          />
        ))}

        {/* Horizontal gradient traces — Cisco-blue */}
        {hLines.map((l, i) => (
          <motion.line
            key={`hl-${i}`}
            x1={0} y1={l.y}
            x2={VB_W} y2={l.y}
            stroke="url(#vis-hline)"
            strokeWidth="0.9"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: l.dur, repeat: Infinity, delay: l.delay }}
          />
        ))}

        {/* Traveling photons — bright, slightly trailing */}
        {photonsY.map((y, i) => (
          <motion.circle
            key={`ph-${i}`}
            r={4.5}
            cy={y}
            fill="#7dd3fc"
            initial={{ cx: -20 }}
            animate={{ cx: [-20, VB_W + 20] }}
            transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'linear', delay: i * 1.2 }}
          />
        ))}
      </g>

      {/* Layer 4 — Outline glyphs (defines the word) */}
      <text
        x={VB_W / 2} y={BASELINE}
        textAnchor="middle"
        fontFamily={fontFamily}
        fontWeight={800}
        fontSize={FONT_SIZE}
        fill="none"
        stroke="rgba(226,232,240,0.32)"
        strokeWidth="1.6"
        style={{ letterSpacing: '-0.045em' }}
      >
        Visibility
      </text>

      {/* Layer 5 — Top inner highlight (sheen) clipped to glyphs */}
      <g mask="url(#vis-mask)">
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#vis-top-highlight)" />
      </g>

      {/* Corner brackets — architectural framing */}
      <CornerBrackets w={VB_W} h={VB_H} />
    </svg>
  );
}

/* Four corner L-marks that frame the wordmark like a viewfinder */
function CornerBrackets({ w, h }: { w: number; h: number }) {
  const pad = 28;
  const len = 38;
  const stroke = 'rgba(125,211,252,0.5)';
  const sw = 1.6;
  return (
    <g aria-hidden>
      {/* TL */}
      <path d={`M ${pad} ${pad + len} L ${pad} ${pad} L ${pad + len} ${pad}`} fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      {/* TR */}
      <path d={`M ${w - pad - len} ${pad} L ${w - pad} ${pad} L ${w - pad} ${pad + len}`} fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      {/* BL */}
      <path d={`M ${pad} ${h - pad - len} L ${pad} ${h - pad} L ${pad + len} ${h - pad}`} fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      {/* BR */}
      <path d={`M ${w - pad - len} ${h - pad} L ${w - pad} ${h - pad} L ${w - pad} ${h - pad - len}`} fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
    </g>
  );
}
