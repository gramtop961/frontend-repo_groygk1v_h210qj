import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'projects', label: 'Projects' },
  { id: 'game', label: 'Game' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  // Music controls
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      const p = a.play();
      if (p && typeof p.then === 'function') p.catch(() => setPlaying(false));
    } else {
      a.pause();
    }
  }, [playing]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center">
      <nav className={`pointer-events-auto mt-4 w-[min(96%,1100px)] rounded-full border ${
        scrolled ? 'border-white/15 bg-[#0b0d13]/70 backdrop-blur-xl' : 'border-white/10 bg-[#0b0d13]/40 backdrop-blur-lg'
      } px-3 py-2`}
      >
        <ul className="flex flex-1 items-center justify-between gap-1">
          {/* Links */}
          <div className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${
                    active === l.id ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="active-pill"
                      className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </div>

          {/* Music control */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPlaying((v) => !v)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                playing
                  ? 'border-fuchsia-400/50 bg-fuchsia-400/10 text-white hover:bg-fuchsia-400/20'
                  : 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {playing ? 'Pause Music' : 'Play Music'}
            </button>
            <audio
              ref={audioRef}
              loop
              preload="none"
              src="https://cdn.pixabay.com/audio/2022/03/15/audio_5a0c4b5f55.mp3"
            />
          </div>
        </ul>
      </nav>
    </div>
  );
}
