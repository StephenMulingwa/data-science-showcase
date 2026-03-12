import { motion } from "framer-motion";
import { Linkedin, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import faviconImg from "@/assets/favicon.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={faviconImg} alt="SM" className="w-9 h-9 rounded-xl" />
          <span className={`font-display font-bold text-lg transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}>
            Stephen<span className="text-primary"> M.</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors duration-300 font-medium hover:text-primary relative pb-0.5 ${
                  isTransparent
                    ? isActive ? "text-white" : "text-white/70"
                    : isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
          <a href="https://www.linkedin.com/in/stephen-mulingwa" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">
              <Linkedin className="w-4 h-4" />
              Connect
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
        >
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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 transition-colors font-medium border-b border-border/50 last:border-0 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
