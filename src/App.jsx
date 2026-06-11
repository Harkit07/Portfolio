import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  ExternalLink,
  Download,
} from "lucide-react";
import { resumeData } from "./data";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const { basics, skills, achievements, projects, education } = resumeData;

  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-x-0 border-t-0 border-b-white/10 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Harkit Singh
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 max-w-5xl space-y-32">
        {/* HERO SECTION */}
        <section
          id="about"
          className="min-h-[70vh] flex flex-col justify-center"
        >
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              {basics.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              {basics.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
              {basics.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform text-center"
              >
                View My Work
              </a>
              <a
                href="/Harkit Singh Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} /> Resume PDF
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> {basics.location}
              </span>
              <a
                href={`mailto:${basics.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-primary" /> {basics.email}
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-primary" /> {basics.phone}
              </span>
            </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE / ACHIEVEMENTS */}
        <section id="experience" className="scroll-mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              Key Achievements
              <div className="h-px bg-white/10 flex-1"></div>
            </h3>
            <div className="space-y-6">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-8 hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-primary mt-1 font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span className="mt-2 md:mt-0 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                      {item.dates}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 leading-relaxed"
                      >
                        <span className="text-secondary mt-1.5 text-lg leading-none">
                          •
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              Projects
              <div className="h-px bg-white/10 flex-1"></div>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="glass-card p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white">
                      {project.title}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {project.dates}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-primary mb-6 bg-primary/10 p-2 rounded">
                    {project.stack}
                  </p>
                  <ul className="space-y-3 text-sm text-gray-300 flex-1 mb-6">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white/30 mt-1">-</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-primary hover:text-white transition-colors font-medium"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <GitBranch size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              Technical Skills
              <div className="h-px bg-white/10 flex-1"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, i) => (
                <div key={i} className="glass-card p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-white/5 border border-white/10 text-sm px-3 py-1.5 rounded-md text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* EDUCATION & FOOTER */}
        <section>
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              Education
              <div className="h-px bg-white/10 flex-1"></div>
            </h3>
            <div className="flex flex-col gap-6 mb-20">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {item.degree}
                    </h4>
                    <p className="text-gray-400 mt-1">{item.institution}</p>

                    {/* Conditional rendering: Only show this <p> if metrics is not empty */}
                    {item.metrics && (
                      <p className="text-primary mt-2 font-medium">
                        {item.metrics}
                      </p>
                    )}
                  </div>
                  <span className="text-gray-500 mt-4 md:mt-0 text-sm">
                    {item.dates}
                  </span>
                </div>
              ))}
            </div>

            <footer className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Harkit Singh. All rights reserved.
              </p>
              <div className="flex gap-6">
                {basics.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name === "GitHub" ? (
                      <GitBranch size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
            </footer>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}

export default App;
