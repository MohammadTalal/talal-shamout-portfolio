"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: ".NET Full Stack Developer",
    company: "Expiration Reminder",
    period: "Apr 2025 – Present",
    description:
      "Develop full-stack features for a SaaS platform that helps businesses track and manage expiring documents, licenses, and certifications.",
    achievements: [
      "Develop and maintain web applications using Blazor and .NET",
      "Build and optimize backend services with SQL Server and Azure",
    ],
  },
  {
    role: "Software Developer",
    company: "Rosa Flora Limited",
    period: "Mar 2022 – Present",
    description:
      "Develop and maintain internal applications for agricultural operations and supply chain management in Dunnville, ON.",
    achievements: [
      "Develop, test, debug and deploy internal applications using Vue.JS, TypeScript, ASP.NET and SSMS",
      "Create, test, and maintain all database objects (files, tables, indexes, views, users, roles) on production, staging and development servers",
      "Design, code, and test stored procedures",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "ABELSoft Inc",
    period: "Sep 2020 – Jan 2021",
    description:
      "Contributed to the development of dental software applications at a Canadian software company in Burlington, ON.",
    achievements: [
      "Worked on developing software program for dentist using C#",
      "Used Scrum Agile methodology in work environment (Daily Scrum Meeting, Sprint Planning, Retrospective Planning)",
      "Fixed existing bugs and wrote unit test cases",
      "Collaborated with teammates on developing user stories",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
            Career Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-accent border-4 border-background" />

                <div className="p-6 bg-card border border-card-border rounded-xl hover:border-accent/30 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} className="text-accent" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
