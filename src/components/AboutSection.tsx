import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import me1 from "@/assets/me1.jpeg";
import logoImg from "@/assets/logo.png";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Sectors Served" },
  { value: "$20", label: "Per Hour" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: Photo collage ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Background accent block */}
            <div
              className="absolute top-8 left-8 w-72 h-80 rounded-3xl -z-0"
              style={{ background: "hsl(var(--primary) / 0.06)", border: "1px solid hsl(var(--primary) / 0.1)" }}
            />

            {/* Main photo */}
            <div
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                width: 310,
                height: 400,
                border: "3px solid hsl(var(--background))",
                boxShadow: "0 32px 80px hsl(var(--primary) / 0.15)",
              }}
            >
              <img src={me1} alt="Stephen Mulingwa" className="w-full h-full object-cover object-top" />
            </div>

            {/* TaiStat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-6 right-6 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
              style={{ boxShadow: "0 16px 40px hsl(var(--primary) / 0.15)" }}
            >
              <img src={logoImg} alt="TaiStat" className="w-10 h-10 rounded-xl object-cover" />
              <div>
                <p className="font-display font-bold text-foreground text-sm">TaiStat Firm</p>
                <p className="font-body text-xs text-muted-foreground">Data Science & AI</p>
              </div>
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-3"
              style={{ boxShadow: "0 12px 40px hsl(var(--gold) / 0.12)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center px-2">
                  <p className="font-display font-bold text-xl"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--teal)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">About Me</p>
            <h2 className="font-display text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700 }}>
              Hello, I'm{" "}
              <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--teal)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Stephen
              </span>
            </h2>

            <div className="space-y-5 font-body text-muted-foreground leading-[1.9] text-[15px]">
              <p>
                I'm a <span className="text-foreground font-semibold">Data Scientist and AI Consultant</span> with strong expertise in data preprocessing, statistical modeling, machine learning, and AI system development across multiple sectors.
              </p>
              <p>
                As <span className="text-foreground font-semibold">Lead Data Scientist at TaiStat Firm</span>, I develop AI-powered analytics platforms including <span className="text-primary font-semibold">YodaAI</span> — delivering predictive insights and automated decision-support solutions.
              </p>
              <p>
                Proficient in Python, R, SQL, Power BI, and deploying ML solutions using Docker, Streamlit, Hugging Face, AWS, and Azure.
              </p>
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2.5 mt-8 mb-10">
              {["Machine Learning", "Data Visualisation", "AI Consulting", "Statistical Modelling", "Power BI", "Python"].map((tag, i) => (
                <span key={i} className="tag font-body text-xs">{tag}</span>
              ))}
            </div>

            <a href="/contact" className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary hover:gap-3 transition-all duration-200 group">
              Let's work together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
