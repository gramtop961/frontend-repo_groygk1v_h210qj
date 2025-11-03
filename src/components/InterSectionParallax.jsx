import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

// A full-bleed parallax bridge placed between sections.
// Combines scroll-linked and mouse-driven parallax for a vivid in-between moment.
export default function InterSectionParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Scroll-linked transforms for layered backgrounds
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);

  // Mouse parallax across the viewport
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const layerX = (f) => useTransform(mx, [-1, 1], [-20 * f, 20 * f]);
  const layerY = (f) => useTransform(my, [-1, 1], [-12 * f, 12 * f]);

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mx.set((e.clientX / innerWidth) * 2 - 1);
      my.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section ref={ref} aria-label="Cosmic Parallax Bridge" className="relative h-[60vh] w-full overflow-hidden">
      {/* Base starfield and radial glows (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ opacity: fadeIn }} className="absolute inset-0" aria-hidden />
        <motion.div
          style={{ y: ySlow }}
          className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/20 blur-3xl"
          aria-hidden
        />
        <motion.div
          style={{ y: yMid }}
          className="absolute -right-40 bottom-[-8rem] h-[44rem] w-[44rem] rounded-full bg-cyan-400/20 blur-3xl"
          aria-hidden
        />
        <motion.div
          style={{ y: yFast }}
          className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.06) 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 2px, transparent 3px)',
            backgroundSize: '160px 160px, 180px 180px',
          }}
          aria-hidden
        />
      </div>

      {/* Foreground floating shards/cards reacting to both scroll and mouse */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <motion.div
          style={{ x: layerX(0.6), y: layerY(0.6) }}
          className="hidden w-40 -rotate-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-xs text-white/80 backdrop-blur-md md:block"
        >
          Reactive UI
        </motion.div>
        <div className="text-center">
          <motion.h3
            style={{ y: yMid }}
            className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl"
          >
            Depth between sections
          </motion.h3>
          <motion.p
            style={{ y: ySlow }}
            className="mx-auto mt-2 max-w-xl text-sm text-violet-100/80"
          >
            Scroll to watch layers drift. Move your cursor to add subtle parallax.
          </motion.p>
        </div>
        <motion.div
          style={{ x: layerX(-0.5), y: layerY(-0.5) }}
          className="hidden w-40 rotate-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-xs text-white/80 backdrop-blur-md md:block"
        >
          Parallax Layers
        </motion.div>
      </div>
    </section>
  );
}
