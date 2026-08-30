import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  onHoverChange?: (hovered: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHoverChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setHovered = (v: boolean) => onHoverChange?.(v);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-10 lg:px-14 py-3.5 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:text-white transition-colors duration-300"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        VAISHNAVI.
      </a>

      {/* Center Nav Links */}
      <nav
        className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* CTA Button with Glow */}
      <a
        href="#contact"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-5 rounded-full border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-white transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.08)] hover:shadow-[0_0_28px_rgba(212,175,55,0.25)]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span>LET&apos;S TALK</span>
        <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
          ↗
        </span>
      </a>
    </motion.header>
  );
};

export default Navbar;
