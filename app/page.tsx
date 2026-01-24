import AboutSection from "@/components/aboutSection/AboutSection";
import { ExperienceSection } from "@/components/experienceSection/ExperienceSection";
import { HomeBanner } from "@/components/HomeBanner";
import { ProjectSection } from "@/components/projectsSection/ProjectSection";
import { SkillSection } from "@/components/skillsSection/SkillSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
    </>
  );
}
