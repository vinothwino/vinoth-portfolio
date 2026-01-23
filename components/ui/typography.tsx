import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Typography component props extending standard HTML element attributes
 */
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

/**
 * TypographyH1 - Hero Name
 * Font-size: 56px
 * Line-height: 1.1
 * Font-weight: 700 (bold)
 * Letter-spacing: -0.02em
 * 
 * @example
 * <TypographyH1>Vinoth Kumar</TypographyH1>
 */
export function TypographyH1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-[56px] font-bold leading-[1.1] tracking-[-0.02em]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

/**
 * TypographyH2 - Section Headline
 * Font-size: 36px
 * Line-height: 1.2
 * Font-weight: 700 (bold)
 * 
 * @example
 * <TypographyH2>Full Stack Developer</TypographyH2>
 */
export function TypographyH2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-[36px] font-bold leading-[1.2]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

/**
 * TypographyH3 - Card / Page Title
 * Font-size: 24px
 * Line-height: 1.3
 * Font-weight: 600 (semibold)
 * 
 * @example
 * <TypographyH3>About Me</TypographyH3>
 */
export function TypographyH3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-[24px] font-semibold leading-[1.3]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

/**
 * TypographyH4 - Subsection
 * Font-size: 18px
 * Line-height: 1.4
 * Font-weight: 600 (semibold)
 * 
 * @example
 * <TypographyH4>My Skills</TypographyH4>
 */
export function TypographyH4({ children, className, ...props }: TypographyProps) {
  return (
    <h4
      className={cn(
        "text-[18px] font-semibold leading-[1.4]",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
}

/**
 * TypographyP - Body / Paragraph
 * Font-size: 16px
 * Line-height: 1.7
 * Font-weight: 400 (normal)
 * Color: --color-text-secondary
 * 
 * @example
 * <TypographyP>I'm a passionate developer with experience in...</TypographyP>
 */
export function TypographyP({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-[16px] leading-[1.7] text-[var(--color-text-secondary)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

/**
 * TypographySmall - Small / Meta Text
 * Font-size: 14px
 * Line-height: 1.6
 * Font-weight: 400 (normal)
 * Color: --color-text-muted
 * 
 * @example
 * <TypographySmall>Last updated: Jan 2026</TypographySmall>
 */
export function TypographySmall({ children, className, ...props }: TypographyProps) {
  return (
    <small
      className={cn(
        "text-[14px] leading-[1.6] text-[var(--color-text-muted)]",
        className
      )}
      {...props}
    >
      {children}
    </small>
  )
}

/**
 * TypographyLabel - Nav / Button Labels
 * Font-size: 14px
 * Font-weight: 500 (medium)
 * Letter-spacing: 0.08em
 * Text-transform: UPPERCASE
 * 
 * @example
 * <TypographyLabel>Contact</TypographyLabel>
 */
export function TypographyLabel({ children, className, ...props }: TypographyProps) {
  return (
    <span
      className={cn(
        "text-[14px] font-medium tracking-[0.08em] uppercase",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

/**
 * TypographySectionLabel - Section Labels with Horizontal Divider
 * Font-size: 14px
 * Font-weight: 600 (semibold)
 * Letter-spacing: 0.12em
 * Color: --color-text-muted
 * Includes a horizontal divider line
 * 
 * @example
 * <TypographySectionLabel>ABOUT</TypographySectionLabel>
 * <TypographySectionLabel>SKILLS</TypographySectionLabel>
 * <TypographySectionLabel>PROJECTS</TypographySectionLabel>
 */
export function TypographySectionLabel({ children, className, ...props }: TypographyProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        className
      )}
      {...props}
    >
      <span className="text-[14px] font-semibold tracking-[0.12em] text-[var(--color-text-muted)] whitespace-nowrap">
        {children}
      </span>
      <div className="h-[1px] flex-1 bg-[var(--color-border-light)]" />
    </div>
  )
}

/**
 * TypographyHighlight - Highlighted Text for Metrics
 * Font-weight: 600 (semibold)
 * Color: --color-text-primary
 * 
 * @example
 * <TypographyP>
 *   I have <TypographyHighlight>5+ years</TypographyHighlight> of experience
 * </TypographyP>
 */
export function TypographyHighlight({ children, className, ...props }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-semibold text-[var(--color-text-primary)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
