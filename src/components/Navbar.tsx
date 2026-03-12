import { motion } from "framer-motion";
import { Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: isTransparent
          ? "transparent"
          : "hsl(0 0% 100% / 0.97)",
        backdropFilter: isTransparent ? "none" : "blur(20px)",
        borderBottom: isTransparent ? "none" : "1px solid hsl(var(--border))",
        boxShadow: isTransparent ? "none" : "0 2px 20px hsl(220 20% 8% / 0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={faviconImg} alt="SM" className="w-9 h-9 rounded-xl" />
          <span
            className="font-display font-bold text-lg transition-colors duration-300"
            style={{ color: isTransparent ? "hsl(0 0% 100%)" : "hsl(var(--foreground))" }}
          >
            Stephen<span style={{ color: "hsl(var(--primary))" }}> M.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="relative font-body text-sm font-medium transition-all duration-300 pb-0.5 group"
                style={{
                  color: isTransparent
                    ? isActive ? "hsl(0 0% 100%)" : "hsl(0 0% 100% / 0.6)"
                    : isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: isTransparent ? "hsl(0 0% 100%)" : "hsl(var(--primary))",
                  }}
                />
              </Link>
            );
          })}

          <a
            href="https://www.linkedin.com/in/stephen-mulingwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: isTransparent
                ? "hsl(0 0% 100% / 0.15)"
                : "hsl(var(--primary))",
              color: "hsl(0 0% 100%)",
              border: isTransparent ? "1px solid hsl(0 0% 100% / 0.3)" : "none",
              backdropFilter: isTransparent ? "blur(8px)" : "none",
            }}
          >
            <Linkedin className="w-3.5 h-3.5" />
            Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden transition-colors"
          style={{ color: isTransparent ? "hsl(0 0% 100%)" : "hsl(var(--foreground))" }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t px-6 pb-6 pt-3"
          style={{
            background: "hsl(0 0% 100%)",
            borderColor: "hsl(var(--border))",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block font-body font-medium py-3 border-b text-sm transition-colors"
                style={{
                  color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                  borderColor: "hsl(var(--border) / 0.5)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://www.linkedin.com/in/stephen-mulingwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-body text-sm font-semibold px-5 py-2.5 rounded-full w-full justify-center"
            style={{ background: "hsl(var(--primary))", color: "hsl(0 0% 100%)" }}
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
