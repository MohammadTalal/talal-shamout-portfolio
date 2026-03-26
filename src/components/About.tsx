"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Cloud, Users } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase size={24} />,
    title: "5+ Years",
    description: "Professional Experience",
  },
  {
    icon: <Code2 size={24} />,
    title: "Full Stack",
    description: "Frontend & Backend",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Native",
    description: "AWS & Azure",
  },
  {
    icon: <Users size={24} />,
    title: "Agile",
    description: "Scrum & Kanban",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m a passionate Full Stack Developer based in Hamilton,
              Canada, with expertise in building robust, scalable web
              applications. My journey in software development spans across
              multiple industries, from agricultural technology to SaaS
              platforms, giving me a unique perspective on solving real-world
              problems with code.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Currently at Expiration Reminder, I architect and develop
              full-stack solutions using .NET and modern JavaScript frameworks.
              I thrive on transforming complex business requirements into
              elegant, user-friendly applications that deliver measurable
              results.
            </p>
            <p className="text-muted leading-relaxed">
              When I&apos;m not coding, I stay up-to-date with the latest
              technologies, contribute to open-source projects, and mentor
              aspiring developers. I believe in writing clean, maintainable
              code that stands the test of time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-6 bg-card border border-card-border rounded-xl hover:border-accent/50 transition-all group"
              >
                <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
