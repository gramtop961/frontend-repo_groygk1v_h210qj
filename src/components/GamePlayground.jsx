import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// A lightweight arcade mini‑game: move the player to collect orbs. Keyboard: WASD / Arrow keys.
export default function GamePlayground() {
  const containerRef = useRef(null);
  const [player, setPlayer] = useState({ x: 60, y: 60, r: 14 });
  const [orbs, setOrbs] = useState(() => spawnOrbs(6));
  const [score, setScore] = useState(0);
  const [pressed, setPressed] = useState({});

  // Movement loop
  useEffect(() => {
    let raf;
    const speed = 3.2;

    const loop = () => {
      setPlayer((p) => {
        const box = containerRef.current?.getBoundingClientRect();
        if (!box) return p;
        let nx = p.x + ((pressed['ArrowRight'] || pressed['d']) ? speed : 0) - ((pressed['ArrowLeft'] || pressed['a']) ? speed : 0);
        let ny = p.y + ((pressed['ArrowDown'] || pressed['s']) ? speed : 0) - ((pressed['ArrowUp'] || pressed['w']) ? speed : 0);
        // clamp
        nx = Math.max(p.r, Math.min(box.width - p.r, nx));
        ny = Math.max(p.r, Math.min(box.height - p.r, ny));
        return { ...p, x: nx, y: ny };
      });

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [pressed]);

  // Keyboard handlers
  useEffect(() => {
    const down = (e) => setPressed((s) => ({ ...s, [e.key]: true }));
    const up = (e) => setPressed((s) => ({ ...s, [e.key]: false }));
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // Collision check and respawn
  useEffect(() => {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    const remaining = [];
    let collected = 0;
    for (const o of orbs) {
      const dx = o.x - player.x;
      const dy = o.y - player.y;
      const d = Math.hypot(dx, dy);
      if (d < o.r + player.r) {
        collected += 1;
      } else {
        remaining.push(o);
      }
    }
    if (collected > 0) {
      setScore((s) => s + collected);
      setOrbs((prev) => [...remaining, ...spawnOrbs(collected, box.width, box.height)]);
    }
  }, [player.x, player.y]);

  return (
    <section id="game" className="relative py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">
            Mini Game — Orb Collector
          </h2>
          <p className="mt-3 text-violet-100/80">
            Use WASD or arrow keys to move. Collect glowing orbs. It’s a tiny, playful break woven into the portfolio.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
            <span>Score:</span>
            <span className="font-semibold text-white">{score}</span>
          </div>
        </div>
        <div className="relative h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0d13] to-[#0f1220] md:col-span-3">
          <div ref={containerRef} className="absolute inset-0">
            {/* Stars background */}
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(168,85,247,0.18) 0px, transparent 200px), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.18) 0px, transparent 220px)'
            }} />

            {/* Orbs */}
            {orbs.map((o) => (
              <motion.div
                key={o.id}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: o.x, top: o.y }}
              >
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
              </motion.div>
            ))}

            {/* Player */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: player.x, top: player.y }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(236,72,153,0.0)',
                  '0 0 30px 8px rgba(236,72,153,0.35)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror' }}
            >
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function spawnOrbs(n, w = 520, h = 320) {
  return Array.from({ length: n }).map((_, i) => ({
    id: Math.random().toString(36).slice(2),
    x: 40 + Math.random() * (w - 80),
    y: 40 + Math.random() * (h - 80),
    r: 10,
  }));
}
