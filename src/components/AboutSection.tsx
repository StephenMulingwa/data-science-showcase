import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            Hello, I'm Stephen...
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            ...and I'm a <span className="text-gradient">Data Scientist.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              Data Scientist and Analyst with strong expertise in data preprocessing, statistical modeling,
              machine learning, and AI system development across healthcare, logistics, finance, and research sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Founder of TaiStat</span>, where I develop AI-powered analytics platforms
              including <span className="text-primary">YodaAI</span>, delivering predictive insights and automated decision-support solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in analyzing large-scale telematics and operational data, developing predictive models,
              and building real-time analytics dashboards. Proficient in deploying ML and AI solutions using Docker,
              Streamlit, Hugging Face, and cloud platforms including AWS and Azure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "3+", label: "Sectors Served" },
                { value: "$20", label: "Per Hour Rate" },
              ].map((stat, i) => (
                <div key={i} className="glass rounded-lg p-5 text-center glow-border">
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</p>
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
