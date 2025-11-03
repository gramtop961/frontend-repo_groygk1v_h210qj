import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function CosmicParallax() {
  const { scrollYProgress } = useScroll();
  const driftUp = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const driftDown = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  // Mouse parallax for layers
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const layerX = (factor) => useTransform(mx, [-1, 1], [-10 * factor, 10 * factor]);
  const layerY = (factor) => useTransform(my, [-1, 1], [-8 * factor, 8 * factor]);

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className="relative overflow-hidden bg-[#07080e] py-28 text-white">
      {/* Background cosmic gradients */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y: driftUp, opacity: fadeIn }} className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <motion.div style={{ y: driftDown, opacity: fadeIn }} className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.06) 2px, transparent 3px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.05) 2px, transparent 3px)`, backgroundSize: '160px 160px' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">Immersive Capabilities</h2>
          <p className="mx-auto mt-2 max-w-2xl text-violet-100/75">A layered, parallax-driven overview of what I build — from interactive 3D to cinematic transitions and product-grade UI systems.</p>
        </div>

        {/* Parallax layers row */}
        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Layer 1 */}
          <motion.div
            style={{ x: layerX(0.8), y: layerY(0.8) }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-[1px]"
          >
            <div className="relative rounded-[15px] bg-[#0b0d13]/90 p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20" />
              <h3 className="text-xl font-semibold">3D & Motion</h3>
              <p className="mt-2 text-sm text-violet-100/80">Spline scenes, WebGL shaders, physics-like UI, and scroll-linked storytelling with buttery 60fps motion.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                <span className="rounded-full bg-white/10 px-2 py-1">Spline</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Three.js</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Framer Motion</span>
              </div>
            </div>
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            style={{ x: layerX(0.5), y: layerY(0.5) }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-[1px]"
          >
            <div className="relative rounded-[15px] bg-[#0b0d13]/90 p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-fuchsia-500/20" />
              <h3 className="text-xl font-semibold">Product Craft</h3>
              <p className="mt-2 text-sm text-violet-100/80">Robust systems, accessibility-first components, and motion guidelines that scale across apps.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                <span className="rounded-full bg-white/10 px-2 py-1">Design Systems</span>
                <span className="rounded-full bg-white/10 px-2 py-1">A11y</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Tokens</span>
              </div>
            </div>
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            style={{ x: layerX(0.2), y: layerY(0.2) }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-[1px]"
          >
            <div className="relative rounded-[15px] bg-[#0b0d13]/90 p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-400/20" />
              <h3 className="text-xl font-semibold">Performance</h3>
              <p className="mt-2 text-sm text-violet-100/80">Tuned bundles, image pipelines, code-splitting, and GPU-accelerated effects for fast, fluid experiences.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                <span className="rounded-full bg-white/10 px-2 py-1">Code-splitting</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Web Workers</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Perf Budgets</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expanded content row with parallax banner */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
            className="h-56 w-full bg-[radial-gradient(1200px_400px_at_10%_20%,rgba(168,85,247,0.25),transparent),radial-gradient(1200px_400px_at_90%_60%,rgba(34,211,238,0.2),transparent)]"
          />
          <div className="absolute inset-0 flex items-center justify-between gap-6 px-6">
            <div>
              <h4 className="text-2xl font-semibold">Cinematic storytelling</h4>
              <p className="mt-1 max-w-xl text-sm text-violet-100/80">Layered depth, responsive motion, and tactile interactions create memorable brand moments without sacrificing performance.</p>
            </div>
            <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-violet-100/70 backdrop-blur-md md:block">
              Scroll to feel the depth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
