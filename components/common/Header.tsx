"use client"

import { useState } from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { TypographyH3, TypographySmall } from "@/components/ui/typography"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
] as const

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
            <div className="container mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left: Branding */}
                    <div className="flex flex-col">
                        <TypographyH3 color="primary" className="sans-serif">
                            Vinoth Kumar
                        </TypographyH3>
                        <TypographySmall color="muted">
                            Frontend Developer
                        </TypographySmall>
                    </div>

                    {/* Right: Navigation */}
                    <NavigationMenu className="hidden md:flex">
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

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTitle className="sr-only">Navigation</SheetTitle>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right">
                            <NavigationMenu className="self-center w-full" orientation="vertical">
                                <NavigationMenuList className="flex-col gap-4">
                                    {NAV_LINKS.map((link) => (
                                        <NavigationMenuItem key={link.href}>
                                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                                <Link href={link.href} onClick={() => setIsOpen(false)}>
                                                    {link.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
