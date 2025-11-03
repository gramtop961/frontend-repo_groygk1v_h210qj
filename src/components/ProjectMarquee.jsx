import { motion, useScroll, useTransform } from 'framer-motion';

const row1 = [
  'Real-time WebGL',
  'Design Systems',
  'Spline 3D',
  'Storytelling',
  'Accessibility',
  'Micro-Interactions',
  'GPU Effects',
  'Performance',
];

const row2 = [
  'E-commerce',
  'Analytics',
  'Product Sites',
  'Visualisation',
  'Dashboards',
  'Animations',
  'Brand Moments',
  'Responsive',
];

function MarqueeRow({ items, speed = 120 }) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -speed]);

  return (
    <div className="relative flex overflow-hidden py-2">
      <motion.div style={{ x }} className="flex min-w-max gap-6 pr-6 will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjectMarquee() {
  return (
    <section aria-label="Project marquee" className="relative py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="mb-5 text-center text-xl font-medium text-violet-100/80">What I build</h3>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <MarqueeRow items={row1} speed={180} />
          <MarqueeRow items={row2} speed={-140} />
          <MarqueeRow items={row1.slice().reverse()} speed={200} />
        </div>
      </div>
    </section>
  );
}
