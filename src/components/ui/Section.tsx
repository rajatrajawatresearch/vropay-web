"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  background?: "light" | "dark" | "white" | "secondary" | "gradient";
  padding?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

export default function Section({
  children,
  background = "white",
  padding = "md",
  className = "",
  id,
}: SectionProps) {
  const backgroundStyles = {
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    white: "bg-white",
    secondary: "bg-indigo-50",
    gradient: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white",
  };

  const paddingStyles = {
    sm: "py-8",
    md: "py-16",
    lg: "py-24",
  };

  const sectionStyles = `${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`;

  return (
    <section className={sectionStyles} id={id}>
      <div className="px-4 sm:px-6 lg:px-8 mx-auto">
        {children}
      </div>
    </section>
  );
} 