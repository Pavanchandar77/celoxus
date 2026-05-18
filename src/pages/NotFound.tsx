import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-ink-950 px-6">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.18),transparent_70%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-300">Error 404</span>
        </div>
        <h1 className="font-display text-[7rem] font-bold leading-none tracking-[-0.04em] text-gradient-accent sm:text-[10rem]">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
          Node not found on the topology.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base font-light leading-relaxed text-slate-400">
          The endpoint you're looking for isn't part of the current architecture.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.45)] transition-all hover:shadow-[0_14px_50px_-10px_rgba(255,255,255,0.6)]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Return to core
        </Link>
      </motion.div>
    </div>
  );
};
