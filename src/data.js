export const resumeData = {
  basics: {
    name: "Harkit Singh",
    title: "Full Stack (MERN) Developer",
    summary:
      "MERN Stack Developer who independently built and deployed a Kubernetes-orchestrated ChatGPT clone and two production-grade platforms — an e-commerce store and an Airbnb-style listing app — all from scratch. Hands-on with Docker, GitHub Actions CI/CD, and NGINX Ingress, going well beyond typical fresher scope. Looking to bring full-stack and DevOps skills to a team shipping real products.",
    location: "Rajasthan, India",
    email: "harkitsinghsran9584@gmail.com",
    phone: "+91-8890436710",
    links: [
      { name: "GitHub", url: "https://github.com/Harkit07" },
      { name: "Portfolio", url: "https://portfolio-8zov.onrender.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/harkit-singh/" },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL", "Java (DSA)"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Formik",
        "EJS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST API Design",
        "JWT Authentication",
        "bcrypt",
        "Multer",
      ],
    },
    {
      category: "Databases",
      items: ["MongoDB", "Mongoose ODM", "SQL"],
    },
    {
      category: "DevOps & CI/CD",
      items: [
        "Docker",
        "Kubernetes",
        "NGINX Ingress",
        "GitHub Actions",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Cloud & Deployment",
      items: [
        "Render",
        "Vercel",
        "Netlify",
        "Cloudinary",
        "OpenAI API",
        "MapBox API",
      ],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "Postman", "VS Code"],
    },
    {
      category: "Concepts",
      items: [
        "MVC Architecture",
        "Container Orchestration",
        "Ingress Routing",
        "Responsive Design",
        "CRUD Operations",
        "Session Management",
      ],
    },
  ],
  achievements: [
    {
      title: "Full Stack Developer (Self-Directed Projects)",
      company: "Independent · Remote",
      dates: "2025 – Present",
      bullets: [
        "Deployed 3+ production apps with 99% uptime across Render, Vercel, and Netlify.",
        "Independently mastered Kubernetes and CI/CD — skills typically seen in developers with 1–2 years of professional experience.",
        "Applied consistent security practices across all projects: bcrypt hashing, JWT auth, Kubernetes Secrets, and protected API routes.",
        "Maintained clean, well-documented GitHub repositories with structured commit history throughout every project.",
        "Solved 100+ DSA problems in Java to build a strong algorithmic problem-solving foundation.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Assistant (ChatGPT Clone)",
      stack: "MERN · Docker · Kubernetes · OpenAI API · JWT · GitHub Actions",
      dates: "Mar 2026 – May 2026",
      liveUrl: "https://ai-assistant-nsg8.onrender.com",
      githubUrl: "https://github.com/Harkit07/AI-Assistant.git",
      bullets: [
        "Built a full-stack ChatGPT clone with multi-turn conversations, persistent history, and thread management — deployed end-to-end on Kubernetes within 3 months as a self-taught fresher.",
        "Containerized frontend and backend with Docker; configured Kubernetes Deployments, Services, Secrets, and NGINX Ingress for production-grade traffic routing and load balancing.",
        "Automated the entire release cycle with GitHub Actions: build → test → Docker image push → Kubernetes redeploy on every merge, reducing manual release effort to zero.",
        "Stored all sensitive credentials exclusively in Kubernetes Secrets — zero hardcoded environment values in source code.",
        "Rendered AI responses with Markdown and syntax-highlighted code blocks via React Context API.",
      ],
    },
    {
      title: "Boutique — E-Commerce Platform",
      stack: "MERN · JWT · Cloudinary · Multer · Material UI",
      dates: "Jan 2026 – Mar 2026",
      liveUrl: "https://ravneetboutique.qzz.io/",
      githubUrl: "https://github.com/Harkit07/Boutique",
      bullets: [
        "Developed a full-stack e-commerce app with 5 modules (auth, products, cart, reviews, profile) and fully responsive UI across mobile, tablet, and desktop.",
        "Built a complete auth flow — JWT login, bcrypt password hashing, and self-service password reset — eliminating account recovery friction.",
        "Integrated Cloudinary for cloud image storage and Multer for multi-file uploads, handling product media without degrading API response times.",
        "Engineered a real-time cart with optimistic UI updates, giving users instant feedback and a smooth shopping experience.",
      ],
    },
    {
      title: "Wanderlust — Property Listing Platform",
      stack: "Node.js · Express · EJS · MapBox · MongoDB · GitHub Actions",
      dates: "Aug 2025",
      liveUrl: "https://wanderlust-jade-sigma.vercel.app/listings",
      githubUrl: "https://github.com/Harkit07/Wanderlust.git",
      bullets: [
        "Built an Airbnb-style listing platform with full CRUD, interactive MapBox geolocation maps per listing, and multi-image uploads — following strict MVC separation of concerns.",
        "Implemented a test-gated CI/CD pipeline: GitHub Actions runs Jest tests against a live MongoDB service container; only green builds deploy to Vercel via Vercel CLI.",
        "Uploaded Jest coverage reports as GitHub Actions artifacts on every run, enabling regression tracking across the entire development lifecycle.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Shri Khushal Das University, Hanumangarh, Rajasthan",
      dates: "2025 – Present",
      metrics: "CGPA: 7.6 / 10",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shri Khushal Das University, Hanumangarh, Rajasthan",
      dates: "2022 – 2025",
      metrics: "",
    },
  ],
};
