import { motion } from 'framer-motion';

const aboutText = `I craft cinematic digital experiences that blend code, design, and motion. With a focus on performance and polish, I build premium web interfaces, immersive 3D visuals, and product-grade design systems. Previously at boutique studios and startups, I led front-end architecture, prototyped interactions, and shipped experiences used by millions.`;

const skills = [
  { label: 'React', color: 'from-sky-400 to-cyan-300' },
  { label: 'TypeScript', color: 'from-blue-400 to-indigo-400' },
  { label: 'Three.js', color: 'from-violet-400 to-fuchsia-400' },
  { label: 'GSAP', color: 'from-emerald-400 to-teal-400' },
  { label: 'Framer Motion', color: 'from-pink-400 to-rose-400' },
  { label: 'WebGL', color: 'from-purple-400 to-cyan-400' },
  { label: 'Node.js', color: 'from-lime-400 to-emerald-400' },
  { label: 'Next.js', color: 'from-slate-300 to-zinc-200' },
];

const timeline = [
  {
    role: 'Senior Frontend Engineer',
    org: 'Orbital Labs',
    time: '2023 — Present',
    detail:
      'Leading immersive UI initiatives, building motion-first component systems, and optimizing rendering pipelines for high-fidelity experiences.',
  },
  {
    role: 'Creative Technologist',
    org: 'Neon Studio',
    time: '2021 — 2023',
    detail:
      'Prototyped interactive installations, WebGL visuals, and experiential websites with physics-driven motion and dynamic content.',
  },
  {
    role: 'Frontend Engineer',
    org: 'Early-stage Startup',
    time: '2019 — 2021',
    detail:
      'Scaled a design system, improved performance budgets, and shipped multiple product surfaces across web and mobile.',
  },
];

export default function AboutAndSkills() {
  return (
    <section id="about" className="relative py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(124,58,237,0.2),transparent),radial-gradient(800px_400px_at_80%_30%,rgba(59,130,246,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* About card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">
              About Me
            </h2>
            <p className="mt-4 text-violet-100/90">{aboutText}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Motion Design', '3D Interaction', 'Performance', 'Design Systems'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-violet-100/80 backdrop-blur-md"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills + Rotating sphere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-semibold text-white">Skills & Stack</h3>
            <p className="mt-2 text-sm text-violet-100/70">
              A selection of tools I use to craft responsive, animated, and scalable experiences.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${s.color} p-[1px]`}
                >
                  <div className="rounded-[11px] bg-[#0b0d13] p-3">
                    <span className="text-sm text-white/90">{s.label}</span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rotating rings to suggest a skill sphere */}
            <div className="pointer-events-none absolute -right-10 -top-10 hidden h-44 w-44 md:block">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-fuchsia-500/30" />
              <div className="absolute inset-0 animate-spin-slower rounded-full border border-cyan-400/30" />
              <div className="absolute inset-0 animate-spin-slowest rounded-full border border-violet-400/30" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300 shadow-[0_0_30px_6px_rgba(59,130,246,0.4)]" />
            </div>
          </motion.div>
        </div>

        {/* Experience timeline */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="mb-6 text-center text-2xl font-semibold text-white">Experience</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400/60 via-white/10 to-transparent" />
            <ul className="space-y-8">
              {timeline.map((t, idx) => (
                <motion.li
                  key={t.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="relative ml-10 rounded-xl border border-white/10 bg-white/5 p-5 text-violet-100/90 backdrop-blur-md"
                >
                  <span className="absolute -left-[26px] top-5 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.8)]" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-white">
                      <span className="font-semibold">{t.role}</span> · {t.org}
                    </p>
                    <span className="text-xs text-violet-200/70">{t.time}</span>
                  </div>
                  <p className="mt-2 text-sm">{t.detail}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Local component styles */}
      <style>{`
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .animate-spin-slower { animation: spin 16s linear infinite; }
        .animate-spin-slowest { animation: spin 24s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
