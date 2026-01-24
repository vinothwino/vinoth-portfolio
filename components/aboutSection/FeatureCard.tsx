import { TypographyH4, TypographyP } from "../ui/typography";

export function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex flex-col gap-3">
            <TypographyH4>{title}</TypographyH4>
            <TypographyP>{description}</TypographyP>
        </div>
    )
}