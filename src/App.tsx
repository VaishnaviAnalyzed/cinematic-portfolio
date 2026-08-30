import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-black text-[#E8DFD8] overflow-x-hidden">
        <HeroSection />
        <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}

export default App;
