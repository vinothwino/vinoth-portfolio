import { Badge } from "../ui/badge";
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
                    {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
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
