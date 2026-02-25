import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import me2 from "@/assets/me2.jpeg";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(174 72% 55% / 0.4)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(174 72% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 72% 55%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-32">
        {/* Text */}
        <div>
          {/* TaiStat Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-6"
          >
            <img src={logoImg} alt="TaiStat" className="w-5 h-5 rounded object-cover" />
            <span className="text-xs text-white/70 font-display font-medium tracking-wider">TaiStat Firm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight text-white"
          >
            Stephen<br />
            <span className="text-gradient-hero glow-text">Mulingwa</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-primary/60" />
            <p className="text-white/70 font-display text-lg tracking-wide">Data Scientist & AI Consultant</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/50 max-w-xl mb-10 text-base leading-relaxed"
          >
            Transforming complex data into intelligent, actionable solutions. Building AI-powered analytics platforms and predictive models that drive smarter decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Work with Me
              </Button>
            </a>
            <a href="/STEPHEN_MULINGWA-RESUME.pdf" download>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "5+", label: "Years Exp." },
              { value: "50+", label: "Projects" },
              { value: "3+", label: "Sectors" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-display font-bold text-white">{s.value}</p>
                <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-cyan-400/20 blur-3xl scale-110" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
              style={{ width: 380, height: 480 }}>
              <img
                src={me2}
                alt="Stephen Mulingwa"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay card */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="text-white font-display font-bold text-lg">Stephen Mulingwa</p>
                <div className="flex items-center gap-2 mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  <p className="text-white/60 text-sm">Data Scientist Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
