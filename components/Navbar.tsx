'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Detect', href: '/detect' },
  { name: 'Criminal Search', href: '/criminal-search' },
  { name: 'Insights', href: '/insights' },
  { name: 'History', href: '/dashboard' },
  { name: 'Report', href: '/report' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0B0B0F]/98 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#0B0B0F]/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Image
                src="/logo.webp"
                alt="Fakion AI"
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
            <span className="text-xl font-bold text-white heading-font">
              Fakion AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* CTA Button */}
            <Link
              href="/detect"
              className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-white/10"
          >
            <div className="pt-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/detect"
                className="block mx-4 mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-sm font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
