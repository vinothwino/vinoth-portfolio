import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TypographyH2, TypographyH3, TypographyP } from "../ui/typography";
import { SKILLS } from "./constants";

export function SkillSection() {
    return (
        <section id="skills" className="container mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <TypographyH3>Skills & Tools</TypographyH3>
                    <TypographyP color="muted">
                        Here are the technologies and tools I use to craft seamless user experiences
                    </TypographyP>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        SKILLS.map((skill) => (
                            <Card key={skill.title} className="shadow-xs">
                                <CardHeader>
                                    <CardTitle>{skill.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
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