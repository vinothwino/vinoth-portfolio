import { ArrowRightIcon, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TypographyH1, TypographyLabel, TypographyP } from "./ui/typography";

export function HomeBanner() {
    return (
        <section id="about" className="bg-background">
            <div className="container mx-auto max-w-5xl px-6 py-20 md:py-40 lg:py-50">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col flex-grow gap-6">

                        <div className="flex flex-col gap-5">
                            <TypographyH1 color="primary">
                                Vinoth Kumar
                            </TypographyH1>

                            {/* Frontend Developer with dashes */}
                            <div className="flex items-center gap-3">
                                <TypographyLabel color="muted">—</TypographyLabel>
                                <TypographyLabel color="muted" className="uppercase">
                                    Frontend Developer
                                </TypographyLabel>
                                <TypographyLabel color="muted" className="uppercase">—</TypographyLabel>
                            </div>

                            <TypographyP color="primary" className="max-w-xl">
                                I build modern, user-friendly websites and web applications that help businesses grow and succeed.
                            </TypographyP>
                        </div>

                        <div className="flex flex-row gap-4">
                            <Button size="lg" className="uppercase">Hire Me <ArrowRightIcon className="size-4" /></Button>
                            <Button size="lg" className="uppercase">View Projects <ArrowRightIcon className="size-4" /></Button>
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-col gap-4 items-start md:self-center">
                        <Button variant="link" asChild>
                            <Link href="https://www.linkedin.com/in/vinoth-kumar-150397/" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon /> LinkedIn
                            </Link>
                        </Button>
                        <Button variant="link" asChild>
                            <Link href="https://github.com/vinothwino" target="_blank" rel="noopener noreferrer">
                                <GithubIcon /> GitHub
                            </Link>
                        </Button>
                        <Button variant="link" asChild>
                            <Link href="mailto:vinothdhakshinamurthy@gmail.com">
                                <Mail /> Send Email
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}