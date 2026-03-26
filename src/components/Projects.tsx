"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "Expiration Tracker Pro",
    description:
      "A comprehensive SaaS platform for tracking document expirations, licenses, and certifications. Features automated email/SMS notifications, team collaboration, and analytics dashboards.",
    tech: ["React", "TypeScript", ".NET 8", "SQL Server", "Azure"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AgriFlow Dashboard",
    description:
      "Real-time agricultural analytics dashboard for monitoring crop performance, inventory levels, and supply chain operations. Includes predictive analytics powered by Python ML models.",
    tech: ["React", "Python", "Tableau", "PostgreSQL", "AWS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "TaskBoard",
    description:
      "A Kanban-style project management tool with drag-and-drop, real-time collaboration via WebSockets, and customizable workflows for agile teams.",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "DevConnect API",
    description:
      "A RESTful API platform for developer communities featuring authentication, real-time messaging, and developer profile management.",
    tech: [".NET 8", "Entity Framework", "Redis", "Docker"],
    github: "#",
  },
  {
    title: "Cloud File Manager",
    description:
      "Multi-cloud file management system with drag-and-drop upload, search, and sharing capabilities across AWS S3 and Google Cloud Storage.",
    tech: ["React", "Node.js", "AWS S3", "GCS", "TypeScript"],
    github: "#",
  },
  {
    title: "Analytics CLI Tool",
    description:
      "Command-line tool for generating data reports from multiple database sources with export to CSV, Excel, and Tableau formats.",
    tech: ["Python", "Click", "Pandas", "SQL"],
    github: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-accent)_0%,_transparent_60%)] opacity-[0.03]" />
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 bg-card border border-card-border rounded-xl hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-accent" size={28} />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={`GitHub - ${project.title}`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={`Live demo - ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-muted">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {other.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="group p-5 bg-card border border-card-border rounded-lg hover:border-accent/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={`GitHub - ${project.title}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-accent/70">
                      {t}
                      {project.tech.indexOf(t) < project.tech.length - 1
                        ? " ·"
                        : ""}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
