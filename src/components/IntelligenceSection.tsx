import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * IntelligenceSection — A constellation "thinking machine":
 *   - A central glowing core node
 *   - Three concentric orbits rotating at different cadences
 *   - Capability satellites pinned to each orbit
 *   - A live decision telemetry stream on the right
 *   - Subtle scroll-tied tilt on the constellation
 */

const SATELLITES = [
  { ring: 0, angle: 0,   label: 'PERCEIVE' },
  { ring: 0, angle: 90,  label: 'ROUTE'    },
  { ring: 0, angle: 180, label: 'PREDICT'  },
  { ring: 0, angle: 270, label: 'ESCALATE' },
  { ring: 1, angle: 35,  label: 'OBSERVE'  },
  { ring: 1, angle: 215, label: 'RESOLVE'  },
  { ring: 2, angle: 165, label: 'LEARN'    },
];

const DECISIONS = [
  { tag: 'PREDICT',  text: 'Call surge expected · APAC · +38m',   tone: 'sky'    },
  { tag: 'ROUTE',    text: 'Re-routing 1,204 sessions → EU-West', tone: 'accent' },
  { tag: 'OBSERVE',  text: 'Latency anomaly resolved · -42ms',    tone: 'emerald'},
  { tag: 'ESCALATE', text: 'Tier-2 queue threshold reached',      tone: 'amber'  },
  { tag: 'LEARN',    text: 'Model retrained on 24h dataset',      tone: 'sky'    },
  { tag: 'RESOLVE',  text: 'Incident #4812 auto-closed',          tone: 'emerald'},
];

export const IntelligenceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const tiltX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const tiltY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  // Cycling "active" decision index
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % DECISIONS.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-ink-950 py-24 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25 radial-fade" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[160px]" />

      {/* Chapter cipher */}
      <span aria-hidden className="pointer-events-none absolute -bottom-[8vw] -left-[5vw] block font-display font-light leading-[0.78] text-[26vw] text-white/[0.025]">
        04
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
              Chapter / 04 · Intelligence
            </p>
            <h2 className="font-display text-[2.25rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[5rem]">
              A system that
              <span className="block text-gradient-accent">thinks in real time.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-slate-400">
              Seven coordinated agents — perceiving, predicting, routing, and resolving —
              orbit a single decision core. Every call is a signal. Every signal is a decision.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 items-center gap-8 lg:gap-12">
          {/* LEFT: constellation */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              style={{
                rotateX: reduce ? 0 : tiltX,
                rotateY: reduce ? 0 : tiltY,
                transformStyle: 'preserve-3d',
              }}
              className="relative mx-auto aspect-square w-full max-w-[620px]"
            >
              <Constellation activeLabel={DECISIONS[active].tag} />
            </motion.div>
          </div>

          {/* RIGHT: live decision telemetry */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-2xl border border-white/[0.07] bg-ink-900/60 p-4 backdrop-blur-xl sm:p-5">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-300">
                    Live decision stream
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">/ tail -f</span>
              </div>

              <div className="space-y-2">
                {DECISIONS.map((d, i) => {
                  const isActive = i === active;
                  const tone =
                    d.tone === 'accent' ? 'text-accent-300 bg-accent/10' :
                    d.tone === 'emerald' ? 'text-emerald-300 bg-emerald-400/10' :
                    d.tone === 'amber' ? 'text-amber-300 bg-amber-400/10' :
                    'text-sky-300 bg-sky-400/10';
                  return (
                    <motion.div
                      key={d.tag + i}
                      animate={isActive
                        ? { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(4,159,217,0.35)' }
                        : { backgroundColor: 'rgba(255,255,255,0.015)', borderColor: 'rgba(255,255,255,0.05)' }
                      }
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
                    >
                      <span className={`rounded-md px-1.5 py-0.5 font-mono text-[9px] font-medium tracking-[0.14em] ${tone}`}>
                        {d.tag}
                      </span>
                      <span className="flex-1 text-[13px] font-light text-slate-300">{d.text}</span>
                      <motion.span
                        animate={isActive ? { opacity: 1 } : { opacity: 0.3 }}
                        className="font-mono text-[10px] text-slate-500"
                      >
                        {isActive ? 'now' : `-${(i + 1) * 2}s`}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer pulse meter */}
              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Decisions / sec
                </div>
                <div className="flex items-end gap-[3px]">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ height: 4 }}
                      animate={{ height: [4, 6 + (i * 31 % 16), 4] }}
                      transition={{
                        duration: 1.4 + (i * 7 % 9) / 10,
                        repeat: Infinity,
                        delay: i * 0.06,
                        ease: 'easeInOut',
                      }}
                      className="w-[3px] rounded-full bg-accent/70"
                    />
                  ))}
                </div>
                <div className="font-mono text-[11px] tabular-nums text-accent-300">2,418</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { l: 'Models', v: '14' },
                { l: 'Avg. latency', v: '38ms' },
                { l: 'Accuracy', v: '99.4%' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 text-center">
                  <div className="font-display text-xl font-medium text-white">{s.v}</div>
                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Constellation: 3 orbits, labeled satellites, central core */
function Constellation({ activeLabel }: { activeLabel: string }) {
  const cx = 50, cy = 50;
  const radii = [22, 33, 44];

  return (
    <svg viewBox="0 0 100 100" className="block h-full w-full" role="img" aria-label="Intelligence constellation">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7dd3fc" stopOpacity="0.9" />
          <stop offset="55%"  stopColor="#049fd9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#049fd9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbitStroke" x1="0" x2="1">
          <stop offset="0%"   stopColor="rgba(125,211,252,0.0)" />
          <stop offset="50%"  stopColor="rgba(125,211,252,0.55)" />
          <stop offset="100%" stopColor="rgba(125,211,252,0.0)" />
        </linearGradient>
      </defs>

      {/* Soft core glow halo */}
      <circle cx={cx} cy={cy} r="14" fill="url(#coreGlow)" />

      {/* Concentric rings */}
      {radii.map((r, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.18" />
          {/* Rotating accent arc */}
          <motion.g
            style={{ transformOrigin: `${cx}% ${cy}%` }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 22 + i * 9, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="url(#orbitStroke)"
              strokeWidth="0.55"
              strokeDasharray={`${r * 1.4} ${r * 6}`}
              strokeLinecap="round"
            />
          </motion.g>
        </g>
      ))}

      {/* Radial spokes */}
      {[0, 45, 90, 135].map((a) => (
        <line
          key={a}
          x1={cx + Math.cos((a * Math.PI) / 180) * 14}
          y1={cy + Math.sin((a * Math.PI) / 180) * 14}
          x2={cx + Math.cos((a * Math.PI) / 180) * 46}
          y2={cy + Math.sin((a * Math.PI) / 180) * 46}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.15"
        />
      ))}

      {/* Satellites */}
      {SATELLITES.map((s) => {
        const r = radii[s.ring];
        const rad = (s.angle * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;
        const isActive = s.label === activeLabel;
        return (
          <g key={s.label}>
            {/* Satellite pulse */}
            {isActive && (
              <motion.circle
                cx={x} cy={y}
                initial={{ r: 1.4, opacity: 0.7 }}
                animate={{ r: [1.4, 4, 1.4], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                fill="none"
                stroke="#049fd9"
                strokeWidth="0.3"
              />
            )}
            <circle
              cx={x} cy={y} r={isActive ? 1.4 : 1}
              fill={isActive ? '#049fd9' : 'rgba(255,255,255,0.6)'}
              stroke={isActive ? 'rgba(125,211,252,0.6)' : 'transparent'}
              strokeWidth="0.4"
            />
            {/* Label */}
            <SatelliteLabel x={x} y={y} angle={s.angle} label={s.label} active={isActive} />
          </g>
        );
      })}

      {/* Central core node */}
      <circle cx={cx} cy={cy} r="2.4" fill="#0c1428" stroke="#049fd9" strokeWidth="0.4" />
      <motion.circle
        cx={cx} cy={cy} r="1.1"
        fill="#7dd3fc"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center label */}
      <text
        x={cx} y={cy + 8}
        textAnchor="middle"
        fontSize="1.8"
        fontFamily="'JetBrains Mono', monospace"
        letterSpacing="0.18em"
        fill="rgba(226,232,240,0.65)"
      >
        DECISION CORE
      </text>

      {/* Traveling photons along middle orbit */}
      {[0, 0.33, 0.66].map((t) => (
        <motion.circle
          key={t}
          r="0.55"
          fill="#7dd3fc"
          animate={{
            cx: Array.from({ length: 60 }).map((_, i) => {
              const ang = ((i / 60) * 360 + t * 360) * Math.PI / 180;
              return cx + Math.cos(ang) * radii[1];
            }),
            cy: Array.from({ length: 60 }).map((_, i) => {
              const ang = ((i / 60) * 360 + t * 360) * Math.PI / 180;
              return cy + Math.sin(ang) * radii[1];
            }),
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </svg>
  );
}

function SatelliteLabel({ x, y, angle, label, active }: { x: number; y: number; angle: number; label: string; active: boolean }) {
  // Push label outward along the satellite's angle
  const rad = (angle * Math.PI) / 180;
  const lx = x + Math.cos(rad) * 4;
  const ly = y + Math.sin(rad) * 4;
  const anchor: 'start' | 'middle' | 'end' =
    Math.abs(Math.cos(rad)) < 0.3 ? 'middle' : Math.cos(rad) > 0 ? 'start' : 'end';
  return (
    <text
      x={lx} y={ly + 0.6}
      textAnchor={anchor}
      fontSize="1.6"
      fontFamily="'JetBrains Mono', monospace"
      letterSpacing="0.22em"
      fill={active ? '#7dd3fc' : 'rgba(148,163,184,0.65)'}
    >
      {label}
    </text>
  );
}
