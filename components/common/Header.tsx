import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { TypographyH3, TypographySmall } from "@/components/ui/typography"

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
] as const

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
            <div className="container mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left: Branding */}
                    <div className="flex flex-col">
                        <TypographyH3 color="primary" className="">
                            Vinoth Kumar
                        </TypographyH3>
                        <TypographySmall color="muted">
                            Frontend Developer
                        </TypographySmall>
                    </div>

                    {/* Right: Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            {NAV_LINKS.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    )
}
