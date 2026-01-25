"use client";

import { useState } from "react";
import { TypographyH3, TypographyP } from "../ui/typography";
import { Button } from "../ui/button";

type MyMissionProps = {
    mission: string;
}

export function MyMission({ mission }: MyMissionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <TypographyH3 className="uppercase font-bold">
                My mission
            </TypographyH3>
            <blockquote>
                <TypographyP className={`leading-7 max-w-lg italic ${!isExpanded ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
                    <span className="text-zinc-400 font-bold text-lg font-serif">&ldquo;</span>
                    {mission}
                    <span className="text-zinc-400 font-bold text-lg font-serif">&rdquo;</span>
                </TypographyP>
                {!isExpanded && (
                    <Button
                        variant="link"
                        className="md:hidden text-sm mt-2 p-0 h-auto"
                        onClick={() => setIsExpanded(true)}
                    >
                        Read more
                    </Button>
                )}
            </blockquote>
        </div>
    )
}