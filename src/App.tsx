
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black overflow-x-hidden antialiased">
      {/* Background container to prevent white flashes or layout jumps */}
      <div className="relative z-10 flex flex-col w-full max-w-[100vw]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
}

export default App;
