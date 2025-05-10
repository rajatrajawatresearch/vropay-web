"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  animate?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  fullWidth = false,
  disabled = false,
  type = "button",
  animate = true,
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    secondary: "bg-indigo-500 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    text: "text-blue-600 hover:text-blue-700 hover:bg-blue-50",
  };
  
  const sizeStyles = {
    sm: "text-sm py-1.5 px-4",
    md: "text-base py-2.5 px-6",
    lg: "text-lg py-3 px-8",
  };
  
  const fullWidthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidthStyle} ${disabledStyle} ${className}`;
  
  const buttonAnimation = animate
    ? {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 },
      }
    : {};

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        <motion.span
          {...buttonAnimation}
          className="w-full h-full flex items-center justify-center"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...buttonAnimation}
    >
      {children}
    </motion.button>
  );
} 