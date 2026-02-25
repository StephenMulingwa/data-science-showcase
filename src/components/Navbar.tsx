import { motion } from "framer-motion";
import { Linkedin, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import faviconImg from "@/assets/favicon.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <img src={faviconImg} alt="SM" className="w-9 h-9 rounded-xl" />
          <span className={`font-display font-bold text-lg transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Stephen<span className="text-primary"> M.</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 font-medium hover:text-primary ${
                scrolled ? 'text-muted-foreground' : 'text-white/70'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/stephen-mulingwa" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">
              <Linkedin className="w-4 h-4" />
              Connect
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-border px-6 pb-6 pt-2 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a href="/STEPHEN_MULINGWA-RESUME.pdf" download className="block mt-4">
            <Button variant="hero" size="sm" className="w-full">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
