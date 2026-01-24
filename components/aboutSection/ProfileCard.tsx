import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { TypographyH4, TypographyLabelWithDashes, TypographyP } from "../ui/typography";
import { Button } from "../ui/button";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";
import { Profile } from "./types";

type ProfileCardProps = {
    profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
    return (
        <Card className="shadow-2xl">
            <CardContent>
                <div className="flex flex-col items-center gap-4 text-center">
                    <Image
                        src={profile.image.src}
                        alt={profile.image.alt}
                        width={profile.image.width}
                        height={profile.image.height}
                        className="object-cover"
                        style={{
                            borderRadius: profile.image.borderRadius
                        }}
                    />
                    <div className="flex flex-col gap-2">
                        <TypographyH4>{profile.name}</TypographyH4>
                        <TypographyLabelWithDashes className="justify-center">
                            {profile.role}
                        </TypographyLabelWithDashes>
                        <TypographyP>{profile.bio}</TypographyP>
                        <div className="flex justify-center">
                            <Button variant="link" asChild>
                                <Link
                                    href={profile.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedinIcon />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}