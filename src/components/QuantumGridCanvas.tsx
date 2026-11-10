import React, { useEffect, useRef } from 'react';

export const QuantumGridCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let id: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const pts = Array.from({ length: 35 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.8,
      c: Math.random() > 0.3 ? 'rgba(0, 243, 255,' : 'rgba(255, 0, 85,'
    }));

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#05050a';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < pts.length; i++) {
        const p1 = pts[i];
        p1.x = (p1.x + p1.vx + w) % w;
        p1.y = (p1.y + p1.vy + h) % h;

        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j];
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(0, 243, 255, ${(1 - d / 120) * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = p1.c + '0.6)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
        ctx.fill();
      }
      id = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(id);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-75" />;
};
