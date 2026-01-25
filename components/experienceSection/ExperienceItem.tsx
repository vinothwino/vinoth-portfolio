"use client";

import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TypographyH4, TypographyP, TypographySmall } from "../ui/typography";

export type ExperienceItemProps = {
    date: string;
    company?: string;
    role?: string;
    meta?: string;
    bullets: readonly string[];
    tags?: readonly string[];
    isLast?: boolean;
};

export function ExperienceItem({
    date,
    company,
    role,
    meta,
    bullets,
    tags,
    isLast,
}: ExperienceItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        };
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    const hasMoreBullets = bullets.length > 2;
    const visibleBullets = isExpanded || !hasMoreBullets || isDesktop ? bullets : bullets.slice(0, 2);

    return (
        <div className="grid grid-cols-[96px_1fr] gap-4">
            <div className="relative pl-6 text-xs text-muted-foreground">
                <div className="absolute left-2 top-1 h-2 w-2 rounded-full bg-primary" />
                {!isLast && <div className="absolute left-2.5 top-4 h-full w-px bg-border" />}
                <span>{date}</span>
            </div>
            <div className="rounded-xl border bg-card p-4 shadow-xs">
                <div className="flex items-center gap-2">
                    <TypographyH4>{company}</TypographyH4>
                </div>
                <TypographyP className="text-muted-foreground">
                    {role}
                </TypographyP>
                <TypographySmall className="text-muted-foreground">
                    {meta}
                </TypographySmall>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {visibleBullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
                {hasMoreBullets && !isExpanded && (
                    <Button
                        variant="link"
                        className="md:hidden text-sm mt-2 p-0 h-auto self-start"
                        onClick={() => setIsExpanded(true)}
                    >
                        Show more
                    </Button>
                )}
                {tags && tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
