import { Separator } from "../ui/separator";
import { FeatureCard } from "./FeatureCard";
import { Feature } from "./types";

type FeaturesListProps = {
    list: Feature[];
}

export function FeaturesList({ list }: FeaturesListProps) {
    return (
        <div className="flex flex-col md:flex-row">
            {list.map((feature, index) => (
                <div key={feature.title} className="flex-1 flex flex-col md:flex-row">
                    <FeatureCard title={feature.title} description={feature.description} />
                    {index < list.length - 1 && (
                        <>
                            <Separator orientation="vertical" className="hidden md:block mx-5 h-auto" />
                            <Separator className="md:hidden my-5" />
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}