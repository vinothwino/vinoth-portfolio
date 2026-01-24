import AboutSection from "@/components/aboutSection/AboutSection";
import { ExperienceSection } from "@/components/experienceSection/ExperienceSection";
import { HomeBanner } from "@/components/HomeBanner";
import { ProjectSection } from "@/components/projectsSection/ProjectSection";
import { SkillSection } from "@/components/skillsSection/SkillSection";
import FadeInSection from "@/components/common/FadeInSection";

export default function Home() {
  return (
    <>
      <FadeInSection>
        <HomeBanner />
      </FadeInSection>
      <FadeInSection delay={0.05}>
        <AboutSection />
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <SkillSection />
      </FadeInSection>
      <FadeInSection delay={0.15}>
        <ProjectSection />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <ExperienceSection />
      </FadeInSection>
    </>
  );
}
