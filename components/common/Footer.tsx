import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { TypographySmall } from "@/components/ui/typography"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto max-w-7xl px-6 py-3">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
          {/* Left: Copyright */}
          <div>
            <TypographySmall color="muted">
              © 2024 Vinoth Kumar
            </TypographySmall>
          </div>

          {/* Right: Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex-col md:flex-row">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm font-normal text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer>
  )
}
