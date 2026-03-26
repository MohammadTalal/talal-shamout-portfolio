"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons";
import Image from "next/image";

const titles = [
  "Full Stack Developer",
  ".NET Developer",
  "React Specialist",
  "Cloud Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-accent-light)_0%,_transparent_40%)] opacity-5" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-medium mb-3 tracking-wide text-sm uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Talal
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-muted mb-6 h-10">
            <span>{titles[titleIndex].substring(0, charIndex)}</span>
            <span className="animate-pulse text-accent">|</span>
          </div>
          <p className="text-muted max-w-lg mb-8 leading-relaxed">
            I build modern, scalable web applications with a passion for clean
            code and exceptional user experiences. Specializing in full-stack
            development with React, .NET, and cloud technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-card-border hover:border-accent text-foreground font-medium rounded-lg transition-all hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/talal-shamout"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-card-border hover:border-accent text-muted hover:text-accent transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://github.com/MohammadTalal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-card-border hover:border-accent text-muted hover:text-accent transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="mailto:mhd.talal.shamout@gmail.com"
              className="p-3 rounded-lg bg-card border border-card-border hover:border-accent text-muted hover:text-accent transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-card-border shadow-2xl">
              <Image
                src="/photo.jpg"
                alt="Talal Shamout"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-muted" size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
