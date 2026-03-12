import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import faviconImg from "@/assets/favicon.png";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={faviconImg} alt="SM" className="w-8 h-8 rounded-lg" />
              <span className="font-display font-bold text-lg text-white">Stephen Mulingwa</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Data Scientist & AI Consultant building intelligent analytics platforms and data-driven solutions.
            </p>
          </div>
          <div>
            <p className="font-display font-semibold text-white/80 mb-3 text-sm uppercase tracking-wider">Pages</p>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Courses", href: "/courses" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="block text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logoImg} alt="TaiStat" className="w-7 h-7 rounded-md object-cover" />
              <p className="font-display font-semibold text-white/80 text-sm">TaiStat Firm</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Data Science & AI consulting firm. Building intelligent platforms like YodaAI.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/stephenmulingwa" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/stephen-mulingwa" },
                { icon: Mail, href: "mailto:mulingwastephen200@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/20 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Stephen Mulingwa. All rights reserved.
          </p>
          <p className="text-sm text-white/20">Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
