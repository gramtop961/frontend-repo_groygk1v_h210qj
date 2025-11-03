import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Thank you — your message has been received. I will reply shortly.');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0b0f] py-24 text-white">
      {/* Particle-like background using blurred dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.06) 2px, transparent 3px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.05) 2px, transparent 3px)`, backgroundSize: '160px 160px' }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold"
          >
            Let’s build something exceptional
          </motion.h2>
          <p className="mt-2 text-center text-violet-100/70">
            I’m available for high-impact product work, prototypes, and interactive experiences.
          </p>

          <form onSubmit={submit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-violet-100/80">Name</label>
                <input
                  required
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b0d13]/80 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-violet-100/80">Email</label>
                <input
                  required
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b0d13]/80 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-violet-100/80">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b0d13]/80 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/30"
                placeholder="Tell me a bit about your project..."
              />
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xs text-violet-100/60">I typically respond within 1–2 business days.</p>
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                type="submit"
                className="relative overflow-hidden rounded-full bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <span className="relative z-10">Send message</span>
                <span className="pointer-events-none absolute inset-0 translate-y-10 bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 transition-transform duration-700 hover:translate-y-0" />
              </motion.button>
            </div>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-emerald-300/90"
              >
                {status}
              </motion.p>
            )}
          </form>
      </div>
      </div>
    </section>
  );
}
