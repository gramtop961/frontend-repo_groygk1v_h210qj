import ProjectsShowcase from './ProjectsShowcase';
import ContactSection from './ContactSection';
import GamePlayground from './GamePlayground';
import CapabilitiesSection from './CapabilitiesSection';

export default function SiteSections() {
  return (
    <div className="relative">
      <CapabilitiesSection />
      <ProjectsShowcase />
      <GamePlayground />
      <ContactSection />
    </div>
  );
}
