"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TypographyH4, TypographyP, TypographySmall } from "../ui/typography";
import Link from "next/link";
import { CodeIcon, EyeIcon } from "lucide-react";

export type ProjectCardProps = {
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    typeLabel?: string;
    imageSrc: string;
    link?: string;
    codeLink?: string;
}

export function ProjectCard({
    title,
    subtitle,
    description,
    tags,
    typeLabel = "Web",
    imageSrc,
    link,
    codeLink,
}: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="group h-full overflow-hidden rounded-xl border bg-background p-0 shadow-sm transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col gap-4 px-5 py-5 md:py-7">
                <Badge variant="secondary" className="w-fit px-3 py-1 font-semibold uppercase tracking-wide text-[10px] md:text-xs opacity-70 md:opacity-100">
                    {typeLabel}
                </Badge>
                <div className="relative h-[160px] md:h-[200px] w-full overflow-hidden rounded-sm bg-muted">
                    <Image
                        src={imageSrc}
                        alt={`${title} preview`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 768px) 400px, 100vw"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <TypographyH4 className="tracking-tight">{title}</TypographyH4>
                        {subtitle && (
                            <TypographySmall color="muted" className="italic">
                                {subtitle}
                            </TypographySmall>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <TypographyP className={`text-muted-foreground leading-relaxed ${!isExpanded ? 'line-clamp-2 md:line-clamp-3' : ''} min-h-[48px] md:min-h-[72px]`}>
                            {description}
                        </TypographyP>
                        {!isExpanded && (
                            <Button
                                variant="link"
                                className="md:hidden text-sm p-0 h-auto self-start"
                                onClick={() => setIsExpanded(true)}
                            >
                                Read more
                            </Button>
                        )}
                    </div>
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
                                link && (
                                    <Button size="sm" asChild>
                                        <Link href={link} target="_blank" rel="noopener noreferrer">
                                            <EyeIcon className="size-4" />
                                            <TypographySmall className="text-inherit">Live</TypographySmall>
                                        </Link>
                                    </Button>
                                )
                            }
                            {
                                codeLink && (
                                    <Button size="sm" variant="outline" asChild>
                                        <Link href={codeLink} target="_blank" rel="noopener noreferrer">
                                            <CodeIcon className="size-4" />
                                            <TypographySmall className="text-inherit">Code</TypographySmall>
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