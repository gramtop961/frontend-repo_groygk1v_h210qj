import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0b0f] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-40 -top-40 h-[60rem] w-[80rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.25),transparent_60%)] blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 1, 0.21, 1] }}
          className="text-center"
        >
          <motion.h1
            className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
          >
            ALEXANDER NOVAK
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-violet-200/90 sm:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            Creative Technologist • Frontend Engineer • 3D Interaction Designer
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <span className="relative z-10">Explore Projects</span>
            <span className="pointer-events-none absolute inset-0 translate-y-12 bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 transition-transform duration-700 group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          className="pointer-events-none absolute right-8 top-24 hidden h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/10 shadow-[0_0_80px_20px_rgba(168,85,247,0.15)] backdrop-blur-md md:flex"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-300 shadow-[0_0_24px_rgba(232,121,249,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}
