"use client"

import Link from "next/link"
import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react"
import { TypographyH3, TypographyH4, TypographySmall } from "@/components/ui/typography"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "./vinoth-resume.pdf", label: "Resume" },
] as const

const SOCIAL_LINKS = [
  { href: "https://github.com/vinothwino", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/vinoth-kumar-150397/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://x.com/VinothKumar_15", label: "Twitter", icon: Twitter },
] as const

export default function Footer() {
  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)

      if (element) {
        const headerOffset = 80 // Height of sticky header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Name, Role, Navigation */}
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <div className="flex flex-col gap-1">
              <TypographyH4 color="primary" className="font-normal">Vinoth Kumar</TypographyH4>
              <TypographySmall color="muted">Frontend Engineer</TypographySmall>
            </div>
            <div className="hidden md:flex flex-wrap gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  {...(link.href.startsWith('./') ? { download: true } : {})}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Copyright and Social Links */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            <TypographySmall color="muted">
              © 2026 Vinoth Kumar
            </TypographySmall>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
