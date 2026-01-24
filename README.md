# 🚀 Vinoth Kumar - Portfolio Website

A modern, performant portfolio website built to showcase expertise, projects, and professional experience. Designed to help recruiters and potential clients easily connect and understand my technical capabilities.

[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify)](https://netlify.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)

---

## 🎯 Problem Statement

**Objective:** To brand my expertise and promote my profile for better reach in the tech industry.

**Goal:** Enable recruiters and potential clients to:
- Easily discover my skills and experience
- View my projects and technical capabilities
- Connect with me through multiple channels
- Access my professional content and insights

---

## ✨ Features

### 🏠 **Home Section**
- Display developer name and professional title
- Highlight core expertise and specializations
- Provide important connection links (LinkedIn, GitHub, Email)
- Call-to-action for immediate contact

### 🛠️ **Skills Section**
- Comprehensive list of technical skills
- Organized by categories (Frontend, Backend, Tools, etc.)
- Visual skill indicators

### 💼 **Work Experience**
- Chronological work history
- Company details and role descriptions
- Key achievements and responsibilities
- Technologies used in each role

### 📂 **Portfolio Section**
- Showcase top 3 featured projects on home page
- Project cards with descriptions
- Repository links (GitHub)
- Live demo links (for deployed projects)
- "View All" CTA redirects to dedicated portfolio page

### 📝 **Blogs Section**
- Display latest 3 blog posts
- Article previews with featured images
- Direct links to Medium or blog detail pages
- "View All Blogs" CTA for complete blog archive

### 🔗 **Connect Section**
- Social media profile links
- Professional networking platforms
- "Send Email" CTA for direct communication
- Contact form (optional)

---

## 🛠️ Tech Stack

### **Framework & Core**
- [Next.js 16.1.4](https://nextjs.org) - React framework with App Router
- [React 19.2.3](https://react.dev) - UI library
- [TypeScript 5.x](https://www.typescriptlang.org) - Type safety

### **Styling**
- [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Re-usable component library
- Custom design system with Roboto font

### **Development Tools**
- [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- [ESLint](https://eslint.org) - Code linting
- [PostCSS](https://postcss.org) - CSS processing

### **Deployment**
- [Netlify](https://netlify.com) - Hosting and continuous deployment (Free tier)

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm/yarn

### 1. Clone the Repository
```bash
git clone https://github.com/vinothkumar/vinoth-portfolio.git
cd vinoth-portfolio
```

### 2. Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_EMAIL=vinoth.dhakshinamurthy@gmail.com
```

### 4. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
vinoth-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Roboto font
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles & design tokens
│   └── favicon.ico          # Site favicon
├── components/
│   ├── common/              # Shared components
│   │   └── Header.tsx       # Site header/navigation
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx       # Button component
│       ├── typography.tsx   # Typography system
│       └── navigation-menu.tsx
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets
├── memory-bank/             # Design documentation
│   ├── creative/            # Design decisions
│   ├── tasks.md            # Task tracking
│   ├── progress.md         # Implementation progress
│   └── projectbrief.md     # Project overview
├── components.json          # shadcn/ui configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies
```

---

## 🚀 Build & Deployment

### Production Build
```bash
# Build for production
pnpm build

# Start production server locally
pnpm start
```

### Deployment to Netlify

#### Option 1: Continuous Deployment (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command:** `pnpm build` or `npm run build`
   - **Publish directory:** `.next`
4. Deploy automatically on every push

#### Option 2: Manual Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
pnpm build

# Deploy to Netlify
netlify deploy --prod
```

### Environment Variables on Netlify
Add your environment variables in:
`Site Settings → Environment Variables`

---

## 🧪 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

### Code Style
- **TypeScript:** Strict mode enabled
- **ESLint:** Configured with Next.js rules
- **Prettier:** (Optional) Configure for consistent formatting

---

## 📝 Adding Content

### Adding a New Project
1. Create project data structure in your data file
2. Add project details (title, description, technologies, links)
3. Upload project images to `/public`
4. Update portfolio page component

### Adding a Blog Post
1. Integrate with Medium API or create blog CMS
2. Fetch latest posts in blog component
3. Display with link to full article

### Updating Skills
1. Edit skills data in your skills section component
2. Add new skill categories as needed
3. Update skill proficiency levels

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

**Vinoth Kumar**
- 🌐 Website: [vinothkumar.dev](https://vinothkumar.dev)
- 💼 LinkedIn: [https://www.linkedin.com/in/vinoth-kumar-150397/](https://https://www.linkedin.com/in/vinoth-kumar-150397/)
- 🐙 GitHub: [@vinothkumar](https://github.com/vinothkumar)
- 📧 Email: [vinoth.dhakshinamurthy@gmail.com](mailto:vinoth.dhakshinamurthy@gmail.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Vercel](https://vercel.com) - Font optimization
- [Netlify](https://netlify.com) - Hosting platform

---

**Built with ❤️ by Vinoth Kumar**

*Last Updated: January 2026*
