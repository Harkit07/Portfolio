export const resumeData = {
  basics: {
    name: "Harkit Singh",
    title: "Full Stack (MERN) Developer",
    summary:
      "MERN Stack Developer who built and deployed three full-stack projects: an AI chat app containerized with Docker and Kubernetes manifests, an e-commerce web app with role-based access, and an Airbnb-style listing app with a test-gated GitHub Actions pipeline. Focused on secure authentication, clean API design, and reliable deployments.",
    location: "Rajasthan, India",
    email: "harkitsinghsran9584@gmail.com",
    phone: "+91-8890436710",
    links: [
      { name: "GitHub", url: "https://github.com/Harkit07" },
      { name: "Portfolio", url: "https://portfolio-8zov.onrender.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/harkit-singh/" },
      { name: "LeetCode", url: "https://leetcode.com/u/Harkit07/" },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/profile/harkit07?tab=activity",
      },
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
        "TanStack Query",
        "Formik",
        "EJS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "bcrypt",
        "Joi",
        "express-validator",
        "Helmet",
        "Nodemailer",
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
        "Kubernetes (manifests)",
        "NGINX Ingress",
        "GitHub Actions",
        "Jest",
      ],
    },
    {
      category: "Cloud & Deployment",
      items: [
        "Render",
        "Vercel",
        "Netlify",
        "Cloudinary",
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
        "Role-Based Access Control",
        "Session & Token Authentication",
        "Container Orchestration",
        "Ingress Routing",
        "Responsive Design",
      ],
    },
  ],
  achievements: [
    {
      title: "Full Stack Developer (Self-Directed Projects)",
      company: "Independent · Remote",
      dates: "2025 – Present",
      bullets: [
        "Built and deployed 3 full-stack projects across AI, e-commerce, and travel listings using the MERN stack and Node/Express/EJS.",
        "Deployed apps on Render, Vercel, and Netlify; containerized one with Docker and Kubernetes manifests (Deployments, Services, Secrets, NGINX Ingress).",
        "Applied security practices across projects: bcrypt/bcryptjs password hashing, JWT and session auth, role-based access control, rate limiting, and secrets kept in environment variables / Kubernetes Secrets.",
        "Set up CI/CD with GitHub Actions: Docker image build-and-push for the AI Assistant, and a test-gated Jest/Supertest pipeline deploying to Vercel for Wanderlust.",
        "Solved 150+ DSA problems in Java to build a strong algorithmic problem-solving foundation.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Assistant (ChatGPT Clone)",
      stack: "React · Express · MongoDB · Docker · Kubernetes · GitHub Actions",
      dates: "Mar 2026 – May 2026",
      liveUrl: "https://ai-assistant-nsg8.onrender.com",
      githubUrl: "https://github.com/Harkit07/AI-Assistant.git",
      bullets: [
        "Built a full-stack AI chat app with JWT auth, per-user conversation threads, real-time streamed replies (SSE) rendered as markdown, and conversation context (last 10 messages).",
        "Containerized the frontend (multi-stage Nginx build) and backend with Docker; wrote Kubernetes Deployments, Services, Secrets, and NGINX Ingress manifests with path-based routing and ran them on a local cluster.",
        "Set up GitHub Actions to build and push both images to Docker Hub on every push to main.",
        "Public demo hosted on Render (frontend) and Netlify Functions (backend).",
      ],
    },
    {
      title: "Boutique — E-Commerce Platform",
      stack: "React · Express · MongoDB · Material UI · Cloudinary",
      dates: "Jan 2026 – Mar 2026",
      liveUrl: "https://ravneetboutique.qzz.io/",
      githubUrl: "https://github.com/Harkit07/Boutique",
      bullets: [
        "Developed a full-stack store with product catalog, server-persisted cart, reviews, profiles, and admin/user roles; admin-only product management enforced on both API and UI.",
        "Built the auth flow: JWT, bcrypt hashing, OTP password reset via Nodemailer (hashed OTP, 5-minute expiry), and server-side token blacklisting on logout. Hardened the API with Helmet and rate limiting on auth routes.",
        "Implemented signed direct-to-Cloudinary uploads with server-side ownership checks.",
        "Improved frontend performance with React.lazy code splitting, split contexts, and React Query caching.",
      ],
    },
    {
      title: "Wanderlust — Property Listing Platform",
      stack: "Node.js · Express · EJS · MongoDB · MapBox · Jest",
      dates: "Aug 2025",
      liveUrl: "https://wanderlust-jade-sigma.vercel.app/listings",
      githubUrl: "https://github.com/Harkit07/Wanderlust.git",
      bullets: [
        "Built an Airbnb-style listing app with full CRUD, category browsing, reviews, MapBox geocoding and maps, Cloudinary image upload, and Joi validation, following MVC structure.",
        "Implemented bcryptjs password hashing and MongoDB-backed sessions with owner-only authorization for editing and deleting listings.",
        "Implemented a test-gated CI/CD pipeline: GitHub Actions runs Jest and Supertest tests against a MongoDB service container, and only passing builds are deployed to Vercel via the CLI.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Shri Khushal Das University, Hanumangarh, Rajasthan",
      dates: "2025 – Present",
      metrics: "CGPA: 7.37 / 10",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shri Khushal Das University, Hanumangarh, Rajasthan",
      dates: "2022 – 2025",
      metrics: "",
    },
  ],
  certificates: [
    {
      name: "Full Stack Web Development -- Delta",
      issuer: "Apna College",
      dates: "2025",
      url: "/Certificate%20FullStack.pdf",
    },
    {
      name: "Data Structures & Algorithms with Java -- Alpha",
      issuer: "Apna College",
      dates: "2026",
      url: "/Certificate%20Java%20DSA.pdf",
    },
  ],
};