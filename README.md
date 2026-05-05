# 🧑‍💻 Harkit Singh — Developer Portfolio

A modern, animated personal portfolio website built with React and Vite. Features smooth scroll animations, a glassmorphism UI, and sections for projects, skills, achievements, and education — all driven by a single data file for easy updates.

🔗 **Live Demo:** [your-portfolio-url.com](https://your-portfolio-url.com)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Sections Overview](#sections-overview)
- [Deployment](#deployment)

---

## ✨ Features

- 🎬 **Scroll Animations** — Smooth fade-in-on-scroll effects powered by Framer Motion
- 🪟 **Glassmorphism UI** — Frosted glass cards with subtle borders and blur effects
- 🌌 **Radial Gradient Background** — Fixed ambient blue glow for depth and atmosphere
- 📱 **Fully Responsive** — Adapts cleanly from mobile to desktop layouts
- 🗂️ **Data-Driven** — All personal content lives in `data.js` — update one file to refresh the entire site
- 🔗 **Resume PDF Link** — Direct download button for the PDF resume in the hero section
- ⚓ **Smooth Navigation** — Fixed glassmorphism navbar with anchor links to all sections

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Framer Motion | Scroll-triggered fade-in animations |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library (Mail, Phone, Github, etc.) |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Harkit Singh Resume.pdf   # Resume PDF served statically
├── src/
│   ├── App.jsx                   # Main layout & all sections
│   ├── App.css                   # Custom component styles
│   ├── data.js                   # ✅ All personal content lives here
│   ├── main.jsx                  # React DOM entry point
│   └── index.css                 # Global styles & Tailwind directives
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Harkit07/<your-portfolio-repo>.git
cd <your-portfolio-repo>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Optimized output goes to the `dist/` folder, ready to deploy on Render, Vercel, Netlify, or any static host.

---

## ✏️ Customization

All personal content is centralized in **`src/data.js`**. You never need to touch `App.jsx` to update your information — just edit the data file and the whole site updates.

### `resumeData` Structure

```js
export const resumeData = {
  basics: {
    name: "Your Name",
    title: "Your Role",
    summary: "Your bio / summary paragraph",
    location: "City, Country",
    email: "your@email.com",
    phone: "+91-XXXXXXXXXX",
    links: [
      { name: "GitHub", url: "https://github.com/yourhandle" },
      { name: "Project Name", url: "https://your-project-url.com" },
    ],
  },

  skills: [
    { category: "Languages", items: ["JavaScript", "HTML5", "CSS3"] },
    { category: "Frontend",  items: ["React.js", "Tailwind CSS"] },
    // Add or remove skill groups freely
  ],

  achievements: [
    {
      title: "Role / Achievement Title",
      company: "Company or Context",
      dates: "Year – Present",
      bullets: ["Achievement 1", "Achievement 2"],
    },
  ],

  projects: [
    {
      title: "Project Name",
      stack: "Tech stack string",
      dates: "Month Year",
      bullets: ["Feature 1", "Feature 2"],
    },
  ],

  education: {
    degree: "Your Degree",
    institution: "Your University",
    dates: "Year – Year",
    metrics: "CGPA: X.X",
  },
};
```

### Updating the Resume PDF

Replace `public/Harkit Singh Resume.pdf` with your updated file. If you rename it, update the reference in `App.jsx`:

```jsx
<a href="/Your New Resume Name.pdf" target="_blank" ...>
```

---

## 📄 Sections Overview

| Section | Anchor | Description |
|---|---|---|
| Hero / About | `#about` | Name, title, summary, contact info, and CTA buttons |
| Key Achievements | `#experience` | Work or self-directed project accomplishments |
| Projects | `#projects` | Cards with tech stack, dates, and feature bullets |
| Technical Skills | `#skills` | Categorized skill tag groups |
| Education | — | Degree, institution, CGPA, and graduation dates |
| Footer | — | GitHub / project links and copyright notice |

---

## 🚢 Deployment

This is a static Vite app — deploy anywhere that supports static sites:

**Vercel / Netlify**
- Connect your GitHub repo
- Build command: `npm run build`
- Output directory: `dist`

**Render (Static Site)**
- Build command: `npm run build`
- Publish directory: `dist`

---

## 👨‍💻 Author

**Harkit Singh**
- 📧 harkitsinghsran9584@gmail.com
- 🐙 [github.com/Harkit07](https://github.com/Harkit07)
- 🌐 [Boutique App](https://boutiquefrontend-ymww.onrender.com) · [Wanderlust](https://wanderlust-274r.onrender.com)

---

## 📝 License

This project is open source and free to use as a portfolio template.
