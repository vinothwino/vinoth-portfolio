import { TypographyH3, TypographyP } from "../ui/typography";
import { EXPERIENCES } from "./constants";
import { ExperienceItem } from "./ExperienceItem";


export function ExperienceSection() {
    return (
        <section id="experience" className="container mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                    <TypographyH3>Experience</TypographyH3>
                    <TypographyP color="primary" className="max-w-3xl">
                        7+ years of experience delivering scalable, production-grade frontend systems across enterprise and product environments.
                    </TypographyP>
                    <TypographyP color="muted">
                        A timeline of my professional experience and engineering impact.
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
