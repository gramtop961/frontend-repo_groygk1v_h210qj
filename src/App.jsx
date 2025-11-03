import NavBar from './components/NavBar';
import Hero3D from './components/Hero3D';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#06070b] text-white antialiased">
      {/* Global cosmic background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(124,58,237,0.15),transparent),radial-gradient(1000px_500px_at_90%_20%,rgba(34,211,238,0.12),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(transparent 0%, rgba(255,255,255,0.06) 100%), radial-gradient(circle at 15% 20%, rgba(255,255,255,0.06) 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.05) 2px, transparent 3px)',
            backgroundSize: 'auto, 160px 160px, 180px 180px',
          }}
        />
      </div>

      <NavBar />

      <main className="relative">
        <Hero3D />
        <ProjectsShowcase />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-violet-100/60">
        © {new Date().getFullYear()} Futuristic Portfolio — built with motion, 3D, and neon elegance.
      </footer>
    </div>
  );
}
