import { TypographyH2, TypographyH3, TypographyP } from "../ui/typography";
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
                                <TypographyH3 color="primary" className="uppercase font-bold">
                                    About <span className="text-zinc-400">Me</span>
                                </TypographyH3>
                                <TypographyH2 className="uppercase max-w-xl leading-11 font-extrabold">
                                    Building beautiful user-friendly websites with modern technologies
                                </TypographyH2>
                                <TypographyP className="max-w-xl leading-7">
                                    I&apos;m Vinoth Kumar, a frontend developer with a passion for crafting engaging, responsive, and accessible websites that elevate user experiences and drive business success.
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