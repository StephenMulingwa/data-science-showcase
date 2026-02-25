import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Analysis",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Excel", level: 95 },
      { name: "Stata / SPSS", level: 75 },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib / Seaborn", level: 88 },
      { name: "R Shiny", level: 78 },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "TensorFlow / PyTorch", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "NLP & Deep Learning", level: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Docker", level: 82 },
      { name: "Streamlit", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Technical Arsenal</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            My Data <span className="text-gradient">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 glow-border"
            >
              <h3 className="font-display font-semibold text-foreground mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-display font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + j * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                        style={{
                          boxShadow: "0 0 8px hsl(var(--primary) / 0.4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
