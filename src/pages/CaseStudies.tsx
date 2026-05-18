import { motion } from 'framer-motion';
import { Server, Activity, ArrowRight, Lock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/MagneticButton';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-ink-950">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.22),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
          >
            <Lock className="h-3 w-3 text-accent-300" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">
              Anonymized · Under NDA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
            className="font-display text-balance text-[2.75rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem]"
          >
            Proven deployments,
            <span className="block text-gradient-accent">discreetly delivered.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed text-slate-400"
          >
            We don't publish client metadata. What follows is a sanitized architectural
            brief — representative of the work we ship under NDA.
          </motion.p>
        </div>
      </section>

      {/* Case Brief */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="ring-gradient relative overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900/60 p-8 backdrop-blur-2xl shadow-card md:p-12"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="pointer-events-none absolute -top-20 right-10 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />

          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/[0.06] pb-10 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-300">
                / Brief 01 · Fortune 500
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">
                Global logistics, unified.
              </h2>
              <p className="mt-3 max-w-xl text-sm font-light text-slate-400">
                Webex Contact Center migration · Custom Finesse middleware · Zero-downtime cutover
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Server className="h-4 w-4 text-accent-300" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Activity className="h-4 w-4 text-emerald-300" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">/ The challenge</p>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-slate-300">
                A leading global logistics provider was running a fragmented legacy
                UCCX deployment. Escalating call volumes were producing unacceptable
                queue delays, and agents had no real-time visibility into incoming
                freight priority due to disparate CRMs.
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">/ Our solution</p>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-slate-300">
                Celoxus CCIE architects executed a zero-downtime, phased migration to
                Cisco Webex Contact Center, and engineered custom middleware that
                bridged proprietary freight tracking databases directly into the agent
                desktop via real-time Finesse pop-overs.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { v: '2,500+',   l: 'Seats migrated' },
              { v: '−40%',     l: 'Avg. handle time' },
              { v: '99.999%',  l: 'Architecture uptime' },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <div className="font-display text-3xl font-bold text-white">{s.v}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-28">
        <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.22),transparent_70%)] blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            Need the full technical brief?
          </h3>
          <p className="mt-3 text-base font-light text-slate-400">
            Reach our engineering leads — we share deeper specs under NDA.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <MagneticButton to="/contact" strength={0.25}>
              <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.45)]">
                <span className="relative">Request capabilities brief</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            </MagneticButton>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              See services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
