"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Custom Development", href: "/services/custom-development" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "AI Integration", href: "/services/ai-integration" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex h-16 items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'mx-2 sm:mx-4 rounded-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-glass px-4 sm:px-6'
            : ''
        }`}>
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 0.99, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className={`bg-gradient-premium rounded-lg flex items-center justify-center ${scrolled ? "w-6 h-6" : "w-7 h-7 sm:w-8 sm:h-8"}`}>
                <span className={`text-white font-bold ${scrolled ? "text-sm" : "text-base sm:text-lg"}`}>5X</span>
              </div>
              <span className={`font-display font-bold bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent ${scrolled ? "text-lg" : "text-lg sm:text-xl"}`}>
                5Xcodes
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:flex-1 lg:justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative" onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={item.href} className={`px-2 py-2 text-sm font-medium ${isActive(item.href) ? "text-electric-blue" : "text-gray-700 hover:text-electric-blue"}`}>
                  {item.name}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }} className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-xl shadow-glass border border-white/20 overflow-hidden">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 hover:text-electric-blue">
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className={`hidden sm:inline-flex items-center font-medium rounded-lg bg-gradient-to-r from-electric-blue to-neon-purple text-white ${scrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}>
                Get Started
              </Link>
            </motion.div>

            <button type="button" className="lg:hidden p-2 rounded-lg text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.26 }} className="lg:hidden mt-2 sm:mt-4 bg-white/90 backdrop-blur-xl rounded-xl border border-white/20">
            <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} className={`block px-3 py-2 text-sm sm:text-base font-medium rounded-lg ${isActive(item.href) ? "text-electric-blue bg-electric-blue/10" : "text-gray-700 hover:text-electric-blue"}`} onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>

                  {item.children && (
                    <div className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href} className="block px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-electric-blue rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 sm:pt-4 border-t border-white/20">
                <Link href="/contact" className="block w-full text-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
