import { TypographyH3, TypographyP } from "../ui/typography";
import { PROJECTS } from "./constant";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
    return (
        <section id="projects" className="container mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <TypographyH3>Projects</TypographyH3>
                        <TypographyP color="muted">
                            Here are some of the projects I have built to showcase my skills and experience.
                        </TypographyP>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tags={[...project.tags]}
                            typeLabel={project.typeLabel}
                            imageSrc={project.imageSrc}
                            link={project.link}
                            codeLink={project.codeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}