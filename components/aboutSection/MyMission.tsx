import { TypographyH3, TypographyP, TypographySectionLabel } from "../ui/typography";

type MyMissionProps = {
    mission: string;
}

export function MyMission({ mission }: MyMissionProps) {
    return (
        <div className="flex flex-col gap-3">
            <TypographyH3 className="uppercase font-bold">
                My mission
            </TypographyH3>
            <blockquote>
                <TypographyP className="leading-7 max-w-lg italic">
                    <span className="text-zinc-400 font-bold text-lg font-serif">&ldquo;</span>
                    {mission}
                    <span className="text-zinc-400 font-bold text-lg font-serif">&rdquo;</span>
                </TypographyP>
            </blockquote>
        </div>
    )
}