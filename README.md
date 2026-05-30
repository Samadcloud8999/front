# DevStudio — Frontend Developer Portfolio

A premium, modern single-page website for a freelance frontend developer.

## Tech Stack

- **React 18** + **JavaScript** (no TypeScript)
- **Vite** — lightning-fast dev server & build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations
- **React Icons** — icon library

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output in /dist folder
```

## Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

### Any Static Host
Upload the contents of the `/dist` folder.

## Customization

| What to change | Where |
|---|---|
| WhatsApp number | `src/components/OrderForm.jsx` — `wa.me/YOURNUMBER` |
| Your name / brand | `src/components/Navbar.jsx` + `src/components/Footer.jsx` |
| Social links | `src/components/Footer.jsx` — `socials` array |
| Hero stats | `src/components/Hero.jsx` — stats array |
| Services | `src/components/Services.jsx` — `services` array |
| Colors / fonts | `tailwind.config.js` + `src/index.css` |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky navbar with mobile menu
│   ├── Hero.jsx         # Hero section with stats
│   ├── Services.jsx     # Services cards grid
│   ├── WhyMe.jsx        # Why choose me section
│   ├── OrderForm.jsx    # Order form → WhatsApp redirect
│   └── Footer.jsx       # Footer with social links
├── hooks/
│   └── useInView.js     # Intersection observer hook
├── App.jsx
├── main.jsx
└── index.css            # Global styles + Tailwind
```
