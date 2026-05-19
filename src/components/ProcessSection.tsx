import { motion } from 'framer-motion';
import { Compass, PenTool, Activity, ArrowUpRight } from 'lucide-react';

/**
 * ProcessSection — three deliberate phases on dark, connected by a
 * timeline rail. Cards lift on hover with a Cisco-blue glow.
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
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-30" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.10),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 grid grid-cols-12 items-end gap-8"
        >
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-300 sm:text-[11px]">
                Chapter / 07 · Process
              </p>
            </div>
            <h2 className="font-display text-[2.5rem] font-bold leading-[1.0] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.75rem]">
              Architecture, in three
              <span className="block text-gradient-accent">considered movements.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="max-w-md text-base font-light leading-relaxed text-slate-400">
              We engage in deliberate phases — not sprints. Every cutover is a
              planned migration with a known fall-back path.
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
          <div className="relative h-px w-full bg-white/[0.06]">
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
                  <div className="h-3 w-3 rounded-full bg-ink-950 ring-2 ring-accent shadow-[0_0_18px_rgba(4,159,217,0.55)]" />
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
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_30px_70px_-25px_rgba(4,159,217,0.45)] sm:p-8"
            >
              {/* Top accent hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Phase header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
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
              <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] font-light leading-[1.6] text-slate-400">
                {p.body}
              </p>

              {/* Deliverables */}
              <ul className="mt-5 space-y-2 border-t border-hairline pt-4">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-[13px] font-medium text-slate-300">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  {p.duration}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
