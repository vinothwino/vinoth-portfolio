import { TypographyH3, TypographyP } from "../ui/typography";
import { EXPERIENCES } from "./constants";
import { ExperienceItem } from "./ExperienceItem";


export function ExperienceSection() {
    return (
        <section id="experience" className="container mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                    <TypographyH3>Experience</TypographyH3>
                    <TypographyP color="muted">
                        A timeline of my <strong>professional work and impact</strong> as a frontend developer.
                    </TypographyP>
                </div>
                <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                    {EXPERIENCES.map((experience, index) => (
                        <ExperienceItem
                            key={`${experience.company}-${experience.date}`}
                            date={experience.date}
                            company={experience.company}
                            role={experience.role}
                            meta={experience.meta}
                            bullets={experience.bullets}
                            tags={experience.tags}
                            isLast={index === EXPERIENCES.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
