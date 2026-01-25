import { TypographyH2, TypographyP, TypographySmall } from "../ui/typography";
import { MyMission } from "./MyMission";
import { FEATURES_LIST, MISSION_QUOTE, PROFILE_DATA } from "./constants";
import { FeaturesList } from "./FeatureList";
import { ProfileCard } from "./ProfileCard";



// Main Component
export default function AboutSection() {
    return (
        <section id="about" className="bg-background">
            <div className="container mx-auto max-w-7xl px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
                    {/* Main Content */}
                    <div className="md:col-span-4">
                        <div className="flex flex-col gap-6">
                            {/* Header Section */}
                            <div className="flex flex-col gap-3">
                                <TypographySmall color="muted" className="uppercase font-normal opacity-60">
                                    About <span className="text-zinc-400">Me</span>
                                </TypographySmall>
                                <TypographyH2 className="uppercase max-w-xl leading-11 font-extrabold">
                                    BUILDING SCALABLE, HIGH-QUALITY FRONTEND EXPERIENCES
                                </TypographyH2>
                                <TypographyP className="max-w-xl leading-7 mt-2">
                                    <span className="block md:inline">I&apos;m Vinoth Kumar, a Senior Frontend Engineer with 7+ years of experience building scalable, user-centric web applications.</span>
                                    <span className="block md:inline md:ml-1">I focus on performance, accessibility, and clean frontend architecture that supports long-term product growth.</span>
                                </TypographyP>
                            </div>

                            {/* Mission Section */}
                            <MyMission mission={MISSION_QUOTE} />

                            {/* Features Section */}
                            <FeaturesList list={FEATURES_LIST} />
                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="md:col-span-2 md:self-center">
                        <ProfileCard profile={PROFILE_DATA} />
                    </div>
                </div>
            </div>
        </section>
    )
}