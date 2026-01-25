import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TypographyH3, TypographyP } from "../ui/typography";
import { SKILLS } from "./constants";

export function SkillSection() {
    return (
        <section id="skills" className="container mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <TypographyH3>Skills & Tools</TypographyH3>
                    <TypographyP color="muted">
                        Technologies I use to build scalable, maintainable, and production-ready frontend systems.
                    </TypographyP>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        SKILLS.map((skill) => (
                            <Card key={skill.title} className="shadow-xs py-4 md:py-6">
                                <CardHeader className="pb-2 md:pb-0 gap-1 md:gap-2">
                                    <CardTitle>{skill.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex flex-row gap-2 flex-wrap">
                                        {skill.data.map((skill) => (
                                            <Badge key={skill} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}