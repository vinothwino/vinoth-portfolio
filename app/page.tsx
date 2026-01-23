import Header from "@/components/common/Header";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
  TypographyLabel,
  TypographySectionLabel,
  TypographyHighlight,
} from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Hero Section */}
        <section className="space-y-4">
          <TypographyH1>Vinoth Kumar</TypographyH1>
          <TypographyH2>Full Stack Developer</TypographyH2>
          <TypographyP>
            I'm a passionate developer with{" "}
            <TypographyHighlight>5+ years</TypographyHighlight> of experience in
            building modern web applications.
          </TypographyP>
          <TypographySmall>Based in India • Available for freelance</TypographySmall>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <TypographySectionLabel>ABOUT</TypographySectionLabel>
          <TypographyH3>About Me</TypographyH3>
          <TypographyP>
            I specialize in React, Next.js, and TypeScript. My focus is on creating
            beautiful, performant, and accessible user experiences.
          </TypographyP>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <TypographySectionLabel>SKILLS</TypographySectionLabel>
          <TypographyH3>Technical Skills</TypographyH3>
          <TypographyH4>Frontend Development</TypographyH4>
          <TypographyP>
            React, Next.js, TypeScript, Tailwind CSS, shadcn/ui
          </TypographyP>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <TypographySectionLabel>PROJECTS</TypographySectionLabel>
          <TypographyH3>Featured Projects</TypographyH3>
          <div className="space-y-2">
            <TypographyH4>Portfolio Website</TypographyH4>
            <TypographyP>
              A modern portfolio built with Next.js and Tailwind CSS
            </TypographyP>
            <TypographySmall>2026</TypographySmall>
          </div>
        </section>

        {/* Navigation Labels Example */}
        <section className="space-y-4">
          <TypographyH4>Navigation Example</TypographyH4>
          <div className="flex gap-6">
            <TypographyLabel>Home</TypographyLabel>
            <TypographyLabel>About</TypographyLabel>
            <TypographyLabel>Projects</TypographyLabel>
            <TypographyLabel>Contact</TypographyLabel>
          </div>
        </section>
      </main>
    </>
  );
}
