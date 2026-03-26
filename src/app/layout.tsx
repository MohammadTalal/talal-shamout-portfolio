import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talal Shamout | Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web applications with React, Next.js, .NET, and cloud technologies. Based in Hamilton, Canada.",
  keywords: [
    "Talal Shamout",
    "Full Stack Developer",
    "React",
    "Next.js",
    ".NET",
    "Node.js",
    "Software Developer",
  ],
  openGraph: {
    title: "Talal Shamout | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web applications with React, Next.js, .NET, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
