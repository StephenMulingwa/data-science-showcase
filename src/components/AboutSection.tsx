import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import me1 from "@/assets/me1.jpeg";
import logoImg from "@/assets/logo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Hello, I'm <span className="text-gradient">Stephen</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan-400/10 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border" style={{ width: 340, height: 420 }}>
                <img src={me1} alt="Stephen Mulingwa" className="w-full h-full object-cover object-top" />
              </div>
              {/* TaiStat badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-border p-3 flex items-center gap-2">
                <img src={logoImg} alt="TaiStat" className="w-8 h-8 rounded-lg object-cover" />
                <div>
                  <p className="text-xs font-display font-bold text-foreground">TaiStat Firm</p>
                  <p className="text-xs text-muted-foreground">Data Science & AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-1">Data Scientist & AI Consultant</h3>
              <p className="text-primary font-medium text-sm">Nairobi, Kenya</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Data Scientist and Analyst with strong expertise in data preprocessing, statistical modeling,
              machine learning, and AI system development across multiple sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Lead Data Scientist at TaiStat</span>, where I develop AI-powered analytics platforms
              including <span className="text-primary font-medium">YodaAI</span>, delivering predictive insights and automated decision-support solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in deploying ML and AI solutions using Docker, Streamlit, Hugging Face, and cloud platforms including AWS and Azure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "3+", label: "Sectors Served" },
                { value: "$20", label: "Per Hour Rate" },
              ].map((stat, i) => (
                <div key={i} className="bg-secondary rounded-xl p-4 text-center border border-border glow-border">
                  <p className="text-2xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
