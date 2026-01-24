import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TypographyH4, TypographyP, TypographySmall } from "../ui/typography";
import Link from "next/link";
import { CodeIcon, EyeIcon } from "lucide-react";

export type ProjectCardProps = {
    title: string;
    description: string;
    tags: string[];
    typeLabel?: string;
    imageSrc: string;
    link?: string;
    codeLink?: string;
}

export function ProjectCard({
    title,
    description,
    tags,
    typeLabel = "Web",
    imageSrc,
    link,
    codeLink,
}: ProjectCardProps) {
    return (
        <Card className="group h-full overflow-hidden rounded-xl border bg-background p-0 shadow-sm transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col gap-4 px-5 py-7">
                <Badge variant="secondary" className="w-fit px-3 py-1 font-semibold uppercase tracking-wide">
                    {typeLabel}
                </Badge>
                <div className="relative h-[200px] w-full overflow-hidden rounded-sm bg-muted">
                    <Image
                        src={imageSrc}
                        alt={`${title} preview`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 768px) 400px, 100vw"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <TypographyH4 className="tracking-tight">{title}</TypographyH4>
                    <TypographyP className="line-clamp-3 min-h-[72px] text-muted-foreground leading-relaxed">
                        {description}
                    </TypographyP>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-3 pt-2">
                            {
                                codeLink && (
                                    <Button size="sm" asChild>
                                        <Link href={codeLink} target="_blank" rel="noopener noreferrer">
                                            <CodeIcon className="size-4" />
                                            <TypographySmall className="text-inherit">Code</TypographySmall>
                                        </Link>
                                    </Button>
                                )
                            }
                            {
                                link && (
                                    <Button size="sm" variant="outline" asChild>
                                        <Link href={link} target="_blank" rel="noopener noreferrer">
                                            <EyeIcon className="size-4" />
                                            <TypographySmall className="text-inherit">Live</TypographySmall>
                                        </Link>
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}