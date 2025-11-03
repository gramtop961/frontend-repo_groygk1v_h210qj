import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

function TiltCard({ project, onOpen }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx / 4);
    y.set(dy / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 backdrop-blur-xl"
      onClick={() => onOpen(project)}
    >
      <div className="relative h-56 w-full" style={{ transform: 'translateZ(32px)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-cyan-400/30 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_30%_10%,rgba(168,85,247,0.18),transparent)]" />
        <img
          src={project.image}
          alt="project visual"
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
      </div>

      <div className="p-5" style={{ transform: 'translateZ(16px)' }}>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white">{project.title}</h4>
          <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] text-violet-100/80">
            {project.year}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-violet-100/80">{project.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d13]/90 text-white backdrop-blur-xl"
      >
        <div className="relative h-64 w-full">
          <img src={project.image} alt="cover" className="h-full w-full object-cover opacity-90" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-violet-100/85">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-violet-100/80">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-end gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
            >
              Visit
            </a>
            <button
              onClick={onClose}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const projects = [
  {
    title: 'Aurora Interface',
    subtitle: 'A motion-first financial dashboard with WebGL data shaders and micro-interactions.',
    description:
      'Built a high-performance dashboard with interactive charts powered by WebGL, real-time data, and delightful motion. Achieved sub-100ms interaction latency across modules.',
    year: '2024',
    tags: ['React', 'WebGL', 'Motion'],
    link: 'https://example.com',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Neon Odyssey',
    subtitle: 'Immersive product site featuring Spline 3D, parallax transitions, and GSAP scenes.',
    description:
      'Cinematic launch experience with scroll-linked timelines, GPU-accelerated transitions, and audio-reactive visuals. Optimized for 60fps on modern devices.',
    year: '2023',
    tags: ['Three.js', 'GSAP', 'Spline'],
    link: 'https://example.com',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Halo Design System',
    subtitle: 'A polished component library with tokens, theming, and motion recipes.',
    description:
      'Defined accessible patterns, motion guidelines, and robust primitives. Integrated with CI and visual regression testing for reliability.',
    year: '2022',
    tags: ['Design Systems', 'TypeScript', 'Accessibility'],
    link: 'https://example.com',
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ProjectsShowcase() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const onOpen = (p) => {
    setActive(p);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <section id="projects" className="relative py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_10%,rgba(168,85,247,0.15),transparent),radial-gradient(1000px_400px_at_90%_20%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-violet-100/70">Selected work with an emphasis on interaction and craft.</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-100/70">UI/UX</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-100/70">3D</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-100/70">WebGL</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <TiltCard key={p.title} project={p} onOpen={onOpen} />
          ))}
        </div>
      </div>

      <ProjectModal open={open} onClose={onClose} project={active} />
    </section>
  );
}
