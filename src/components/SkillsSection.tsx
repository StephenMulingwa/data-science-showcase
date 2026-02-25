import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Analysis",
    color: "bg-blue-500",
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
    color: "bg-violet-500",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib / Seaborn", level: 88 },
      { name: "R Shiny", level: 78 },
    ],
  },
  {
    title: "Machine Learning & AI",
    color: "bg-emerald-500",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "TensorFlow / PyTorch", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "NLP & Deep Learning", level: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "bg-orange-500",
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
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Technical Arsenal</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            My Data <span className="text-gradient">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-7 border border-border shadow-sm glow-border card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
                <h3 className="font-display font-bold text-foreground text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-display">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + j * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full ${cat.color} opacity-80`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10"
        >
          <h3 className="text-center text-sm font-display font-medium text-muted-foreground uppercase tracking-widest mb-6">Also proficient in</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git & GitHub", "Jupyter Notebooks", "Google Colab", "SPSS", "Stata", "Bloomberg Terminal", "Pandas", "NumPy", "FastAPI", "PostgreSQL"].map((tool, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground font-medium hover:border-primary/30 hover:text-primary transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
