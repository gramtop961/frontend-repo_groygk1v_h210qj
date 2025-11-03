import Hero3D from './components/Hero3D';
import AboutAndSkills from './components/AboutAndSkills';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased">
      <Hero3D />
      <AboutAndSkills />
      <ProjectsShowcase />
      <ContactSection />
      <footer className="border-t border-white/10 bg-[#0a0b10] py-8 text-center text-xs text-violet-100/60">
        © {new Date().getFullYear()} Alexander Novak — Crafted with motion, 3D, and a love for detail.
      </footer>
    </div>
  );
}
