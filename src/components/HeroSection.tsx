import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MapPin, Star } from "lucide-react";
import me2 from "@/assets/me2.jpeg";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Subtle geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large faint circle top-right */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(215 85% 60%), transparent 70%)" }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(42 85% 55%), transparent 70%)" }}
        />
        {/* Thin grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Diagonal decorative line */}
        <div
          className="absolute top-0 right-0 w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(42 85% 55%), transparent)", marginRight: "33%" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-0 flex flex-col lg:flex-row items-center gap-16 min-h-screen">

        {/* ── LEFT: Text ── */}
        <div className="flex-1 max-w-2xl">
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <img src={logoImg} alt="TaiStat" className="w-7 h-7 rounded-lg object-cover" />
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase"
              style={{ color: "hsl(42 85% 65%)" }}>
              TaiStat Firm · Nairobi, Kenya
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-body text-white/50 text-lg mb-2">Hello, I'm</p>
            <h1 className="font-display text-white leading-[1.05] mb-5"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700 }}>
              Stephen<br />
              <span className="text-gradient-hero italic">Mulingwa</span>
            </h1>
          </motion.div>

          {/* Role line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 opacity-40" style={{ background: "hsl(42 85% 55%)" }} />
            <p className="font-body font-medium text-white/70 text-lg tracking-wide">
              Data Scientist &amp; AI Consultant
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-body text-white/50 text-base leading-[1.85] max-w-lg mb-10"
          >
            Transforming complex data into intelligent, actionable solutions.
            Building AI-powered analytics platforms and predictive models that drive smarter business decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto font-body font-semibold rounded-full px-8 text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, hsl(42 85% 55%), hsl(38 80% 48%))",
                  color: "hsl(220 25% 10%)",
                  boxShadow: "0 8px 32px hsl(42 85% 55% / 0.3)",
                  border: "none",
                }}
              >
                Work with Me
              </Button>
            </a>
            <a href="/STEPHEN_MULINGWA-RESUME.pdf" download>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto font-body font-medium rounded-full px-8 text-sm tracking-wide border text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                style={{ borderColor: "hsl(0 0% 100% / 0.2)" }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-10"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "3+", label: "Industry Sectors" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display font-bold text-white text-3xl">{s.value}</p>
                <p className="font-body text-white/40 text-xs mt-0.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="relative flex-shrink-0 flex justify-center lg:self-end"
        >
          {/* Decorative ring behind photo */}
          <div
            className="absolute inset-0 rounded-[2.5rem] scale-105"
            style={{
              background: "linear-gradient(145deg, hsl(42 85% 55% / 0.15), hsl(215 85% 50% / 0.1))",
              filter: "blur(30px)",
            }}
          />

          {/* Photo frame */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(280px, 30vw, 400px)",
              height: "clamp(360px, 40vw, 520px)",
              borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
              border: "2px solid hsl(42 85% 55% / 0.3)",
            }}
          >
            <img
              src={me2}
              alt="Stephen Mulingwa"
              className="w-full h-full object-cover object-top"
            />
            {/* Inner overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, hsl(220 25% 10% / 0.6) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Floating name card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-2xl px-5 py-3.5 flex items-center gap-3"
            style={{ boxShadow: "0 20px 60px hsl(215 85% 35% / 0.25)" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="font-display font-bold text-foreground text-sm">Available for Projects</p>
              <p className="font-body text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Nairobi, Kenya
              </p>
            </div>
          </motion.div>

          {/* Floating rating card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
            style={{ boxShadow: "0 12px 40px hsl(42 85% 55% / 0.2)" }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(42 85% 55%), hsl(38 80% 48%))" }}
            >
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-sm">Top Rated</p>
              <p className="font-body text-xs text-muted-foreground">Data Scientist</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="relative z-10 w-full" style={{ marginTop: "-1px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 45C240 90 480 0 720 45C960 90 1200 0 1440 45V90H0V45Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
