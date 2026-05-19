import { motion } from 'framer-motion';
import { Compass, PenTool, Activity, ArrowUpRight } from 'lucide-react';
import { LightSlab } from './LightSlab';

/**
 * ProcessSection — light "white paper" band on a warm paper tone.
 * Three phases connected by a horizontal timeline rail. Strong typographic
 * hierarchy with readable medium-weight body (no thin text on pure white).
 */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PHASES = [
  {
    n: '01',
    Icon: Compass,
    eyebrow: 'Audit',
    title: 'Discover',
    body: 'A CCIE-led audit of your current calling, contact-center, and observability footprint. We map every dependency before we touch a thing.',
    items: ['Topology audit', 'Risk register', 'Zero-downtime plan'],
    duration: '2–4 weeks',
  },
  {
    n: '02',
    Icon: PenTool,
    eyebrow: 'Blueprint',
    title: 'Architect',
    body: 'A bespoke design that reuses what works and replaces what limits you. Vendor-honest, sequenced, and always reversible.',
    items: ['Reference architecture', 'Sequenced cutover', 'Custom middleware spec'],
    duration: '4–8 weeks',
  },
  {
    n: '03',
    Icon: Activity,
    eyebrow: 'Run',
    title: 'Operate',
    body: 'We don\'t hand you a system and disappear. Persistent observability, on-call escalation, and quarterly architecture reviews.',
    items: ['24/7 NOC integration', 'Quarterly review', 'Architecture warranty'],
    duration: 'Ongoing',
  },
];

export const ProcessSection = () => {
  return (
    <LightSlab chapter="Chapter / 07 · Process" className="py-24 text-slate-900 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-20 grid grid-cols-12 items-end gap-8"
        >
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[2.5rem] font-bold leading-[1.0] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[3.75rem]">
              Architecture, in three
              <span className="block text-accent-600">considered movements.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="max-w-md text-base font-medium leading-relaxed text-slate-700">
              We engage in deliberate phases — not sprints. Every cutover is a planned
              migration with a known fall-back path.
            </p>
          </div>
        </motion.div>

        {/* Timeline rail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-10 hidden lg:block"
        >
          <div className="relative h-px w-full bg-slate-300/80">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-0 h-px bg-gradient-to-r from-accent via-accent/60 to-transparent"
            />
          </div>
          {/* Phase markers */}
          <div className="absolute inset-x-0 -top-1.5 grid grid-cols-3">
            {PHASES.map((p, i) => (
              <div key={p.n} className={`flex ${i === 0 ? 'justify-start' : i === 1 ? 'justify-center' : 'justify-end'}`}>
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-white ring-2 ring-accent shadow-[0_4px_10px_rgba(4,159,217,0.25)]" />
                  <div className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {p.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phase cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-3">
          {PHASES.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_70px_-25px_rgba(4,159,217,0.25)] lg:p-8"
              style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(15,23,42,0.04), 0 20px 40px -28px rgba(15,23,42,0.18)' }}
            >
              {/* Top hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              {/* Phase header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {p.eyebrow}
                  </div>
                </div>
                <span className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.04em] text-accent">
                  {p.n}
                </span>
              </div>

              {/* Title + body */}
              <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.02em] text-slate-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] font-medium leading-[1.65] text-slate-600">
                {p.body}
              </p>

              {/* Deliverables */}
              <ul className="mt-6 space-y-2 border-t border-slate-200/80 pt-5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-[13px] font-medium text-slate-700">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              {/* Footer hover affordance */}
              <div className="mt-7 flex items-center justify-between border-t border-slate-200/80 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  {p.duration}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </LightSlab>
  );
};
