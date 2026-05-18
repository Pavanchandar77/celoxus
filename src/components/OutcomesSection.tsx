import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plane, Banknote, Truck, HeartPulse, Phone, Headphones } from 'lucide-react';

/**
 * OutcomesSection — light-themed band. Animated stat counters tied to scroll
 * into view. Designed to break the dark monotony with a calm, customer-
 * facing tone: real numbers, real industries, no neon.
 */

type Stat = { label: string; value: number; suffix?: string; format?: 'comma' | 'plain' };

const STATS: Stat[] = [
  { label: 'Enterprise seats deployed', value: 12500, suffix: '+', format: 'comma' },
  { label: 'Mean reduction in AHT',     value: 38,    suffix: '%' },
  { label: 'Architecture uptime',       value: 99.997, suffix: '%' },
  { label: 'CCIE engineering years',    value: 80,    suffix: '+' },
];

const INDUSTRIES = [
  { icon: Plane,      label: 'Aviation' },
  { icon: Banknote,   label: 'Financial Services' },
  { icon: Truck,      label: 'Global Logistics' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Phone,      label: 'Telecom' },
  { icon: Headphones, label: 'BPO & Contact Centers' },
];

export const OutcomesSection = () => {
  return (
    <section className="relative bg-[#f4f4f4] text-slate-900 py-32 overflow-hidden">
      {/* Soft architectural rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Chapter cipher */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-[3vw] -top-[5vw] hidden md:block font-display font-light leading-none text-[18vw] text-slate-900/[0.04]"
        >
          06
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 relative z-10">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.28em] mb-6">
              Chapter / 06 — Outcomes
            </p>
            <h2 className="font-display font-light text-slate-900 text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.0] tracking-tight">
              The numbers from <span className="text-[#049fd9]">eight years</span> of zero-downtime deployments.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="font-light text-slate-500 text-lg leading-relaxed max-w-md">
              Every figure here is an aggregate from anonymized deployments in
              regulated industries. Identifiable client data is held under NDA.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 relative z-10">
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} delay={i * 0.08} />
          ))}
        </div>

        {/* Industries */}
        <div className="mt-32 relative z-10">
          <p className="font-mono text-[11px] text-slate-500 uppercase tracking-[0.28em] mb-10">
            / Verticals served
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#f4f4f4] py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors duration-500"
                data-cursor="hover"
              >
                <ind.icon className="w-7 h-7 text-slate-400 mb-4 group-hover:text-[#049fd9] transition-colors duration-500" strokeWidth={1.25} />
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.22em] group-hover:text-slate-900 transition-colors duration-500">
                  {ind.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  const display = stat.format === 'comma'
    ? Math.floor(shown).toLocaleString('en-US')
    : Number.isInteger(stat.value)
      ? Math.floor(shown).toString()
      : shown.toFixed(3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#f4f4f4] p-10 lg:p-12 hover:bg-white transition-colors duration-500 group"
    >
      <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.22em] mb-6">
        / 0{STATS.indexOf(stat) + 1}
      </p>
      <div className="font-display font-light text-slate-900 text-[3rem] lg:text-[4rem] leading-none tracking-tight tabular-nums">
        {display}
        <span className="text-[#049fd9]">{stat.suffix}</span>
      </div>
      <div className="mt-6 text-slate-600 font-light text-[0.95rem] leading-relaxed">
        {stat.label}
      </div>
      <div className="mt-6 h-px w-12 bg-slate-300 group-hover:w-24 group-hover:bg-[#049fd9] transition-all duration-700"></div>
    </motion.div>
  );
}
