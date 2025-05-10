"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "VroPay Advantage", href: "/advantage" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-32 h-10">
            {/* Replace with your actual logo */}
            <span className="text-xl font-bold tracking-tighter">VroPay</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            href="/contact" 
            variant="primary" 
            size="sm"
            className="ml-4"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between transition-all duration-300 ${mobileMenuOpen ? "transform rotate-180" : ""}`}>
            <span className={`h-0.5 w-full transform transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2 bg-gray-800" : isScrolled ? "bg-gray-800" : "bg-white"}`}></span>
            <span className={`h-0.5 transition-all duration-300 ${mobileMenuOpen ? "opacity-0 w-0" : "opacity-100 w-full"} ${isScrolled ? "bg-gray-800" : "bg-white"}`}></span>
            <span className={`h-0.5 w-full transform transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-gray-800" : isScrolled ? "bg-gray-800" : "bg-white"}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 md:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full pt-20 p-6 space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="md"
                  className="mt-4"
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 