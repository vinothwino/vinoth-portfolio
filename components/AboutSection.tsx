import { TypographyH2 } from "./ui/typography";

export default function AboutSection() {
    return (
        <section id="about" className="bg-background">
            <div className="container mx-auto max-w-7xl px-6 py-20 md:py-40 lg:py-50">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col gap-2">
                        <TypographyH2 color="primary">About Me</TypographyH2>
                    </div>
                </div>
            </div>
        </section>
    )
}