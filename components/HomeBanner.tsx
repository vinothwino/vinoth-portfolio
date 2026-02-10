"use client";

import { ArrowRightIcon, Download, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TypographyH1, TypographyH4, TypographyLabelWithDashes, TypographyP, TypographySmall } from "./ui/typography";

export function HomeBanner() {
    return (
        <section id="home" className="bg-background min-h-[70vh] md:min-h-[90vh]">
            <div className="container mx-auto max-w-5xl px-6 pt-25 md:pt-40 lg:pt-55">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col flex-grow gap-6">

                        <div className="flex flex-col gap-3 md:gap-5">
                            <TypographyH1 color="primary">
                                Vinoth Kumar
                            </TypographyH1>

                            <TypographyLabelWithDashes>
                                SENIOR FRONTEND ENGINEER
                            </TypographyLabelWithDashes>

                            <div className="flex flex-col gap-2">
                                <TypographyP color="primary" className="max-w-xl">
                                    Senior Frontend Engineer with <strong>7+ years of experience</strong> building high-quality web applications with a strong focus on <strong>performance, usability, and long-term maintainability</strong>.
                                </TypographyP>
                                <TypographySmall>React • Next.js • Performance • Accessibility • Design Systems</TypographySmall>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <Button size="lg" className="capitalize" asChild>
                                <Link href={process.env.NEXT_PUBLIC_RESUME_URL!}>
                                    Download Resume <Download className="size-4" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="capitalize cursor-pointer"
                                onClick={() => {
                                    const target = document.getElementById("projects");
                                    if (target) {
                                        const headerOffset = 80;
                                        const elementPosition = target.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                    }
                                }}
                            >
                                See My Work <ArrowRightIcon className="size-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:self-center items-start">
                        <TypographyH4 color="primary">{"Let's Connect"}</TypographyH4>
                        <div className="flex flex-row md:flex-col gap-3">
                            <Button variant="outline" size="sm" className="justify-start gap-2 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                <Link href="https://www.linkedin.com/in/vinoth-kumar-150397/" target="_blank" rel="noopener noreferrer">
                                    <LinkedinIcon className="h-4 w-4" />
                                    <span>LinkedIn</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" className="justify-start gap-2 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                <Link href="https://github.com/vinothwino" target="_blank" rel="noopener noreferrer">
                                    <GithubIcon className="h-4 w-4" />
                                    <span>GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" className="justify-start gap-2 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                <Link href="mailto:vinothdhakshinamurthy@gmail.com">
                                    <Mail className="h-4 w-4" />
                                    <span>Email</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}