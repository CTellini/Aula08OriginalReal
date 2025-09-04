import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });

      // Manter apenas os últimos 20 pontos
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 1000);

      if (trailRef.current.length > 1) {
        for (let i = 0; i < trailRef.current.length - 1; i++) {
          const current = trailRef.current[i];
          const next = trailRef.current[i + 1];
          const age = now - current.timestamp;
          const opacity = Math.max(0, 1 - age / 1000);

          ctx.beginPath();
          ctx.moveTo(current.x, current.y);
          ctx.lineTo(next.x, next.y);
          
          const gradient = ctx.createLinearGradient(current.x, current.y, next.x, next.y);
          gradient.addColorStop(0, `rgba(58, 117, 255, ${opacity * 0.3})`);
          gradient.addColorStop(1, `rgba(0, 255, 170, ${opacity * 0.3})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;