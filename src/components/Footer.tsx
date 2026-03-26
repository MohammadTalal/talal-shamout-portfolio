"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Talal Shamout. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/talal-shamout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/MohammadTalal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="mailto:mhd.talal.shamout@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
