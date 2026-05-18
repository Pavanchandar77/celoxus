import { useEffect, useRef } from 'react';

/**
 * LiveMesh — Celoxus signature visual element.
 * A continuously-running canvas of drifting nodes with proximity-based
 * connections and a soft cursor gravity well. Reactive, alive, and
 * intentionally restrained — it's the brand fingerprint.
 */

interface LiveMeshProps {
  className?: string;
  density?: number;        // 0.5 = sparse, 1 = standard, 1.5 = dense
  interactive?: boolean;   // cursor gravity well
  speed?: number;          // drift speed multiplier
  connectionDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  maxOpacity?: number;     // global opacity ceiling
}

export const LiveMesh = ({
  className = '',
  density = 1,
  interactive = true,
  speed = 1,
  connectionDistance = 130,
  nodeColor = '125, 211, 252',
  lineColor = '125, 211, 252',
  maxOpacity = 1,
}: LiveMeshProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    type Node = {
      x: number; y: number; vx: number; vy: number;
      phase: number; radius: number;
    };

    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let time = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Recompute node count proportional to area
      const target = Math.floor((rect.width * rect.height) / 16000 * density);
      const count = Math.max(20, Math.min(180, target));

      // Build or rebuild
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.18 * speed,
        vy: (Math.random() - 0.5) * 0.18 * speed,
        phase: Math.random() * Math.PI * 2,
        radius: 0.9 + Math.random() * 0.6,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= r.width && mouse.y <= r.height;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    if (interactive) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      canvas.addEventListener('mouseleave', onMouseLeave);
    }

    const loop = () => {
      time += prefersReduced ? 0 : 0.01;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Update nodes
      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        // Wrap edges
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;

        // Cursor gravity well
        if (interactive && mouse.active && !prefersReduced) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const distSq = dx * dx + dy * dy;
          const radius = 170;
          if (distSq < radius * radius) {
            const dist = Math.sqrt(distSq);
            const f = (1 - dist / radius) * 0.05;
            n.x += dx * f;
            n.y += dy * f;
          }
        }
      }

      // Draw connections
      const maxD = connectionDistance;
      const maxDSq = maxD * maxD;
      ctx.lineWidth = 0.55;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxD) * 0.22 * maxOpacity;
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Connections to cursor
      if (interactive && mouse.active && !prefersReduced) {
        ctx.lineWidth = 0.6;
        for (const n of nodes) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const distSq = dx * dx + dy * dy;
          const radius = 160;
          if (distSq < radius * radius) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / radius) * 0.5 * maxOpacity;
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with subtle pulse
      for (const n of nodes) {
        const pulse = (Math.sin(time + n.phase) + 1) * 0.5;
        const r = n.radius * (1 + pulse * 0.35);
        const alpha = (0.55 + pulse * 0.3) * maxOpacity;
        ctx.fillStyle = `rgba(${nodeColor}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [density, interactive, speed, connectionDistance, nodeColor, lineColor, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none block h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
};
