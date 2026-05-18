import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * RuptureSection — Adapted from celoxus-2 03B. A 200vh sticky stage with:
 *   Phase 1 (0–0.4): ambient signal lines draw via stroke-dashoffset
 *   Phase 2 (0.4–0.7): the word "VISIBILITY" reveals signal lines inside
 *     its glyphs via SVG text-mask
 *   Phase 3 (0.7–1.0): ambient field fades out, system settles
 */

const AMBIENT_LINE_COUNT = 9;

export const RuptureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ['#020617', '#000814', '#000814', '#020617'],
  );

  const ambientDraw = useTransform(scrollYProgress, [0, 0.4], [1, 0], { clamp: true });
  const ambientOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const typeOpacity = useTransform(scrollYProgress, [0.32, 0.45, 0.7, 0.82], [0, 1, 1, 0]);
  const typeScale = useTransform(scrollYProgress, [0.32, 0.5], [0.96, 1], { clamp: true });

  return (
    <section ref={ref} className="relative w-full" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ backgroundColor: bg }} aria-hidden="true" />

        <motion.div className="absolute inset-0" style={{ opacity: ambientOpacity }} aria-hidden="true">
          <AmbientField dashoffset={ambientDraw} />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          style={{ opacity: typeOpacity, scale: typeScale, willChange: 'transform, opacity' }}
        >
          <p className="font-mono text-[11px] text-[#6366f1] uppercase tracking-[0.32em] mb-8">
            Chapter / 03 — Visibility
          </p>
          <MaskedVisibility />
          <p className="mt-8 max-w-2xl text-center font-light text-slate-400 text-[1.15rem] sm:text-[1.5rem]">
            at enterprise scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

function AmbientField({ dashoffset }: { dashoffset: ReturnType<typeof useTransform> }) {
  const lines = Array.from({ length: AMBIENT_LINE_COUNT }, (_, i) => {
    const y = ((i + 0.5) / AMBIENT_LINE_COUNT) * 100;
    return { y, delay: (i * 0.12) };
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      {lines.map((l, i) => (
        <motion.line
          key={i}
          x1={0} y1={l.y}
          x2={100} y2={l.y}
          stroke="rgba(4,159,217,0.18)"
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
          fill="#6366f1"
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

function MaskedVisibility() {
  const innerLineCount = 14;
  const innerLines = Array.from({ length: innerLineCount }).map((_, i) => {
    const t = (i + 0.5) / innerLineCount;
    return { y: t * 280, dur: 3 + ((i * 0.31) % 2.4), delay: -((i * 0.42) % 4) };
  });

  return (
    <svg
      viewBox="0 0 1000 280"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto w-full"
      aria-label="Visibility"
    >
      <defs>
        <mask id="text-mask">
          <rect x="0" y="0" width="1000" height="280" fill="black" />
          <text
            x="500"
            y="200"
            textAnchor="middle"
            fontFamily="Syne, sans-serif"
            fontWeight="300"
            fontSize="280"
            fill="white"
          >
            Visibility
          </text>
        </mask>
      </defs>

      {/* Outline glyphs (always visible, dim) */}
      <text
        x="500"
        y="200"
        textAnchor="middle"
        fontFamily="Syne, sans-serif"
        fontWeight="300"
        fontSize="280"
        fill="none"
        stroke="rgba(226,232,240,0.10)"
        strokeWidth="1"
      >
        Visibility
      </text>

      {/* Inner signal field, only visible inside glyphs */}
      <g mask="url(#text-mask)">
        <rect x="0" y="0" width="1000" height="280" fill="#001a26" />
        {innerLines.map((l, i) => (
          <motion.line
            key={`il-${i}`}
            x1={0} y1={l.y}
            x2={1000} y2={l.y}
            stroke="#6366f1"
            strokeWidth="0.6"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: l.dur, repeat: Infinity, delay: l.delay }}
          />
        ))}
        {innerLines.map((l, i) => (
          <motion.circle
            key={`ic-${i}`}
            r={3.5}
            cy={l.y}
            fill="#6366f1"
            initial={{ cx: -10 }}
            animate={{ cx: [-10, 1010] }}
            transition={{ duration: 4 + i * 0.35, repeat: Infinity, ease: 'linear', delay: i * 0.2 }}
            
          />
        ))}
      </g>
    </svg>
  );
}
