/**
 * LightSlab — flat full-width warm-paper section.
 * Direct dark↔light handoff with no rounded corners or elevation.
 * Props `edge` and `chapter` are accepted but ignored, kept for
 * back-compat with the previous architectural-slab API.
 */
export const LightSlab = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  edge?: number;
  chapter?: string;
}) => {
  return (
    <section className={`relative overflow-hidden bg-[#f5f3ee] ${className}`}>
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
    </section>
  );
};
