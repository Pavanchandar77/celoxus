import { motion } from 'framer-motion';

const EASE_SOFT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * LightSlab — an architectural "page" that emerges from the dark
 * background with rounded top + bottom edges. Used to anchor the
 * light/dark rhythm without muddy gradient feathering.
 *
 * Renders dark padding above & below so the curves are visible
 * against the dark surrounding sections.
 */
export const LightSlab = ({
  children,
  className = '',
  edge = 56,
  chapter,
}: {
  children: React.ReactNode;
  className?: string;
  edge?: number;
  chapter?: string;
}) => {
  return (
    <div className="relative bg-ink-950">
      <div className="relative mx-auto max-w-[1480px] px-2 md:px-4">
        {/* Chapter marker centered on the top edge */}
        {chapter && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_SOFT }}
            className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/10 bg-ink-950 px-3.5 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-200">
              {chapter}
            </span>
          </motion.div>
        )}
        <div
          className={`relative overflow-hidden bg-[#f5f3ee] shadow-[0_-30px_80px_-40px_rgba(4,159,217,0.15),0_60px_120px_-40px_rgba(0,0,0,0.55)] ${className}`}
          style={{
            borderTopLeftRadius: edge,
            borderTopRightRadius: edge,
            borderBottomLeftRadius: edge,
            borderBottomRightRadius: edge,
          }}
        >
          {/* Top inner highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
            style={{ marginInline: edge * 0.6 }}
          />
          {/* Subtle blueprint grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px),' +
                'linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, #000 35%, rgba(0,0,0,0.6) 65%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, #000 35%, rgba(0,0,0,0.6) 65%, transparent 100%)',
            }}
          />
          {/* Warm accent wash */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(4,159,217,0.10),transparent_70%)] blur-3xl" />

          {children}
        </div>
      </div>
    </div>
  );
};
