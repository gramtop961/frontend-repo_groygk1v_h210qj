import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Immersive 3D & Motion',
    desc: 'Real-time 3D, micro‑interactions, parallax systems, motion-first UI.',
    grad: 'from-fuchsia-500/20 to-cyan-400/20',
  },
  {
    title: 'Design Systems',
    desc: 'Accessible, scalable component libraries with aesthetic cohesion.',
    grad: 'from-violet-500/20 to-fuchsia-400/20',
  },
  {
    title: 'Performance',
    desc: 'Profiling, code-splitting, WebGL budgets, smooth 60fps experiences.',
    grad: 'from-cyan-400/20 to-emerald-400/20',
  },
  {
    title: 'Product Engineering',
    desc: 'Frontend architecture, API integration, data flows, testing.',
    grad: 'from-amber-400/20 to-rose-400/20',
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_5%,rgba(236,72,153,0.14),transparent),radial-gradient(800px_400px_at_85%_30%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">
            Capabilities
          </h2>
          <p className="mt-3 text-violet-100/80">
            A snapshot of what I love building — blending craft, performance, and play.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.grad} p-[1px]`}
            >
              <div className="h-full rounded-[15px] bg-[#0b0d13]/80 p-5 backdrop-blur-xl">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-violet-100/80">{c.desc}</p>
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-500/25 to-cyan-400/25 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
