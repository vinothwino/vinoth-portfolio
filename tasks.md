update shadCN theme configuration as stated below configuration and create Typography component such TypographyH1, TypographyH2... following the 2. Typography (leverage the shadCN registry if you need information)

1. Theme
Color Tokens
Neutral Palette (Primary)
--color-bg-primary:    #FFFFFF
--color-bg-secondary:  #F9FAFB
--color-bg-surface:    #FFFFFF

--color-border-light:  #E5E7EB
--color-border-muted:  #D1D5DB

--color-text-primary:  #111827
--color-text-secondary:#4B5563
--color-text-muted:    #6B7280

Brand / Accent
--color-brand-primary: #7C5CFF   /* Logo purple */
--color-brand-hover:   #6A4CFF
--color-brand-soft:    #F3F1FF

Utility
--color-success: #16A34A
--color-danger:  #DC2626
--color-warning: #F59E0B

Elevation (Shadows)
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 6px 20px rgba(0,0,0,0.08)
--shadow-lg: 0 12px 40px rgba(0,0,0,0.12)


Used only on:

Cards

Profile image

Project tiles

Radius System (Minimal)
--radius-none: 0px
--radius-sm:   6px
--radius-md:   12px
--radius-lg:   20px


⚠️ Buttons intentionally use 0px radius (your branding choice).

2. Typography System
Font Family
font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

Type Scale
Display / Hero
H1 – Hero Name
Font-size: 56px
Line-height: 1.1
Font-weight: 700
Letter-spacing: -0.02em

H2 – Section Headline
Font-size: 36px
Line-height: 1.2
Font-weight: 700

H3 – Card / Page Title
Font-size: 24px
Line-height: 1.3
Font-weight: 600

H4 – Subsection
Font-size: 18px
Line-height: 1.4
Font-weight: 600

Body Text
Body / Paragraph
Font-size: 16px
Line-height: 1.7
Font-weight: 400
Color: --color-text-secondary

Small / Meta
Font-size: 14px
Line-height: 1.6
Font-weight: 400
Color: --color-text-muted

Labels & UI Text
Nav / Buttons
Font-size: 14px
Font-weight: 500
Letter-spacing: 0.08em
Text-transform: UPPERCASE

3. Typography Components
Section Label
ABOUT / SKILLS / PROJECTS
Font-size: 14px
Font-weight: 600
Letter-spacing: 0.12em
Color: --color-text-muted


With horizontal divider line.

Highlighted Text

Used for metrics:

Font-weight: 600
Color: --color-text-primary