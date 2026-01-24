import AboutSection from "@/components/aboutSection/AboutSection";
import { HomeBanner } from "@/components/HomeBanner";
import { SkillSection } from "@/components/skillsSection/SkillSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <SkillSection />
    </>
  );
}
