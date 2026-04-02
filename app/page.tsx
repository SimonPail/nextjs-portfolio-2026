import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ExperienceSection from "./components/home/ExperienceSection";

export default function Home() {
  return (
    <main className="pt-32">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
