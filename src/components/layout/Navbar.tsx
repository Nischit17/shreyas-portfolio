"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Platforms", href: "#platforms" },
  { name: "Impact", href: "#impact" },
  { name: "Global", href: "#global" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-background/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter cursor-pointer interactive" onClick={() => scrollTo("#hero")}>
          Shreyas<span className="text-primary"> </span>SK
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors interactive"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-white transition-all interactive text-sm font-medium"
          >
            Initiate Connection
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden interactive" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/5 py-4 flex flex-col px-6 gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-lg text-gray-300 hover:text-white py-2"
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
