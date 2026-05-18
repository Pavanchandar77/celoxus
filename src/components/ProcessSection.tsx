import { motion } from 'framer-motion';
import { NetworkTopology } from './NetworkTopology';

/**
 * ProcessSection — white-on-white architectural band. Three numbered phases
 * with their own muted, customer-facing copy. A small light-theme topology
 * sits to the right of the headline to reinforce the architectural read.
 */

const PHASES = [
  {
    n: '01',
    title: 'Discover',
    body: 'A CCIE-led audit of your current calling, contact-center, and observability footprint. We map every dependency before we touch a thing.',
    items: ['Topology audit', 'Risk register', 'Zero-downtime plan'],
  },
  {
    n: '02',
    title: 'Architect',
    body: 'A bespoke blueprint that reuses what works and replaces what limits you. Always vendor-honest. Always reversible.',
    items: ['Reference architecture', 'Sequenced cutover', 'Custom middleware spec'],
  },
  {
    n: '03',
    title: 'Operate',
    body: 'We don\'t hand you a system and disappear. Persistent observability, on-call escalation, and quarterly architecture reviews.',
    items: ['24/7 NOC integration', 'Quarterly review', 'Architecture warranty'],
  },
];

const SIGNAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ProcessSection = () => {
  return (
    <section className="relative bg-white text-slate-900 py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.28em] mb-6">
              Chapter / 07 — Process
            </p>
            <h2 className="font-display font-light text-slate-900 text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.0] tracking-tight">
              Architecture, in three considered movements.
            </h2>
            <p className="mt-8 font-light text-slate-500 text-lg leading-relaxed max-w-xl">
              We engage in deliberate phases — not sprints. Every cutover is a planned migration with a known fall-back path.
            </p>
          </div>

          {/* Light topology panel */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative aspect-[4/3] w-full border border-slate-200 bg-slate-50/50">
              <NetworkTopology interactive={false} theme="light" showLabels={false} />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                <span>celoxus.observe</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#049fd9]"></span>
                  Live topology
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-px lg:bg-slate-200 lg:border lg:border-slate-200">
          {PHASES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: SIGNAL_EASE }}
              className="bg-white p-10 lg:p-12 group relative border-b border-slate-200 lg:border-b-0"
              data-cursor="hover"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display font-light text-[#049fd9] text-[3rem] leading-none">
                  {p.n}
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.22em]">
                  Phase
                </span>
              </div>
              <h3 className="font-display font-light text-slate-900 text-[1.75rem] mb-5 tracking-tight">
                {p.title}
              </h3>
              <p className="font-light text-slate-600 text-base leading-relaxed mb-8">
                {p.body}
              </p>
              <ul className="border-t border-slate-200 pt-6 space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.22em] flex items-center gap-3">
                    <span className="w-1 h-1 bg-[#049fd9] rounded-full"></span>
                    {it}
                  </li>
                ))}
              </ul>

              {/* Hairline that grows on hover */}
              <div className="absolute left-10 right-10 bottom-10 lg:bottom-12 h-px bg-slate-200 group-hover:bg-[#049fd9] transition-colors duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
