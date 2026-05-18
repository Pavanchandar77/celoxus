import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * IntelligenceSection — Adapted from celoxus-2 04. A decision tree where
 * an "active" branch rotates on an irregular cadence (5.4–8.2s) and a
 * traveling photon traces the live path.
 */

const PATHS = ['ROUTE', 'ESCALATE', 'RESOLVE'] as const;

export const IntelligenceSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let id: number;
    const tick = () => {
      const delay = 5400 + Math.random() * 2800;
      id = window.setTimeout(() => {
        setActive((a) => (a + 1) % PATHS.length);
        tick();
      }, delay);
    };
    tick();
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="relative w-full py-32 lg:py-40 bg-[#020617] overflow-hidden border-t border-white/5">
      {/* Oversized cipher */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[8vw] -left-[5vw] z-0 block font-display font-light leading-[0.78] text-[28vw] text-white/[0.025]"
      >
        04
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-12 gap-4">
        <p className="col-span-12 lg:col-span-9 lg:col-start-2 font-mono text-[11px] text-[#6366f1] uppercase tracking-[0.28em] mb-6">
          Chapter / 04 — Intelligence
        </p>

        <h2 className="col-span-12 lg:col-span-9 lg:col-start-2 font-display font-light text-white text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-[0.95] tracking-tight">
          Systems that <span className="text-[#6366f1]">think ahead.</span>
        </h2>

        <p className="col-span-12 lg:col-span-7 lg:col-start-4 mt-10 max-w-md font-light text-slate-400 text-lg leading-relaxed">
          Intelligent routing. Automated coordination. Infrastructure that responds continuously to the operational signal it sees.
        </p>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2 mt-20">
          <DecisionTree active={active} />
        </div>
      </div>
    </section>
  );
};

function DecisionTree({ active }: { active: number }) {
  const W = 1000, H = 360;
  const top = { x: 500, y: 40 };
  const mid = { x: 500, y: 150 };
  const leaves = [
    { x: 200, y: 290, label: 'ROUTE' },
    { x: 500, y: 290, label: 'ESCALATE' },
    { x: 800, y: 290, label: 'RESOLVE' },
  ];
  const live = leaves[active];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label="Decision pathway">
      {/* Base layer paths */}
      <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
        <line x1={top.x} y1={top.y + 14} x2={mid.x} y2={mid.y - 14} />
        {leaves.map((l, i) => (
          <line key={`b-${i}`} x1={mid.x} y1={mid.y + 14} x2={l.x} y2={l.y - 14} />
        ))}
      </g>

      {/* Active accent paths */}
      <g stroke="#6366f1" strokeWidth="1.5" fill="none">
        <line x1={top.x} y1={top.y + 14} x2={mid.x} y2={mid.y - 14} />
        <motion.line
          x1={mid.x} y1={mid.y + 14}
          animate={{ x2: live.x, y2: live.y - 14 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </g>

      {/* Top pill */}
      <g>
        <rect x={top.x - 70} y={top.y - 14} width={140} height={28} rx={14}
          fill="#0b1120" stroke="#6366f1" strokeWidth="1" />
        <text x={top.x} y={top.y + 4} textAnchor="middle" fontSize="11" fill="#e2e8f0"
          fontFamily="JetBrains Mono, monospace" letterSpacing="0.16em">
          INTERACTION
        </text>
      </g>

      {/* Mid diamond */}
      <g>
        <polygon
          points={`${mid.x},${mid.y - 14} ${mid.x + 18},${mid.y} ${mid.x},${mid.y + 14} ${mid.x - 18},${mid.y}`}
          fill="#0b1120" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
        />
      </g>

      {/* Leaves */}
      {leaves.map((l, i) => {
        const isActive = i === active;
        return (
          <g key={l.label}>
            <rect x={l.x - 70} y={l.y - 14} width={140} height={28} rx={14}
              fill="#0b1120"
              stroke={isActive ? '#6366f1' : 'rgba(255,255,255,0.10)'}
              strokeWidth="1" />
            <text x={l.x} y={l.y + 4} textAnchor="middle" fontSize="11"
              fill={isActive ? '#6366f1' : 'rgba(226,232,240,0.5)'}
              fontFamily="JetBrains Mono, monospace" letterSpacing="0.16em">
              {l.label}
            </text>
          </g>
        );
      })}

      {/* Traveling photon down the active path */}
      <motion.circle
        r={3}
        fill="#6366f1"
        animate={{
          cx: [top.x, mid.x, live.x],
          cy: [top.y + 14, mid.y, live.y - 14],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
        
      />
    </svg>
  );
}
