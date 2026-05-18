import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor — a soft accent dot that follows the mouse, scales up on
 * any element with [data-cursor="hover"] or role="button"/anchors/buttons.
 * Hidden on touch devices and when prefers-reduced-motion is set.
 */
export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasPointer || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const hov = !!(t.closest('a, button, [data-cursor="hover"], input, textarea, [role="button"]'));
      setHover(hov);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Hide native cursor on enabled devices */}
      <style>{`
        html, body, * { cursor: none !important; }
        input, textarea, select { cursor: text !important; }
      `}</style>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <motion.div
          animate={{
            width: hover ? 48 : 12,
            height: hover ? 48 : 12,
            opacity: hover ? 0.45 : 0.9,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full bg-[#049fd9] -translate-x-1/2 -translate-y-1/2"
          style={{ filter: 'drop-shadow(0 0 8px rgba(4,159,217,0.6)) mix-blend-mode(screen)', mixBlendMode: 'screen' }}
        />
      </motion.div>
      {/* Trailing dot (precise position, no spring) */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <div className="w-1 h-1 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
};
