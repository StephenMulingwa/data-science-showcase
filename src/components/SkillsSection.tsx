import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Analysis",
    accent: "hsl(215 85% 35%)",
    accentLight: "hsl(215 85% 35% / 0.1)",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Excel", level: 95 },
      { name: "Stata / SPSS", level: 75 },
    ],
  },
  {
    title: "Data Visualisation",
    accent: "hsl(262 60% 55%)",
    accentLight: "hsl(262 60% 55% / 0.1)",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib / Seaborn", level: 88 },
      { name: "R Shiny", level: 78 },
    ],
  },
  {
    title: "Machine Learning & AI",
    accent: "hsl(162 65% 40%)",
    accentLight: "hsl(162 65% 40% / 0.1)",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "TensorFlow / PyTorch", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "NLP & Deep Learning", level: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "hsl(32 85% 50%)",
    accentLight: "hsl(32 85% 50% / 0.1)",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Docker", level: 82 },
      { name: "Streamlit", level: 90 },
    ],
  },
];

const tools = [
  "Git & GitHub", "Jupyter Notebooks", "Google Colab",
  "SPSS", "Stata", "Pandas", "NumPy", "FastAPI", "PostgreSQL",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section-padding-sm"
      style={{ background: "hsl(220 20% 97%)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Technical Arsenal</p>
          <h2 className="font-display text-foreground leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700 }}>
            My Data{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--teal)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Toolkit
            </span>
          </h2>
        </motion.div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-7 border border-border card-hover"
              style={{ boxShadow: "0 2px 12px hsl(220 20% 8% / 0.05)" }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-3 h-3 rounded-full" style={{ background: cat.accent }} />
                <h3 className="font-display font-bold text-foreground text-base">{cat.title}</h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between font-body text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(var(--secondary))" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.4 + j * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: cat.accent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Also Proficient In
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="font-body text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 cursor-default hover:-translate-y-0.5"
                style={{
                  background: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--muted-foreground))",
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.4)";
                  (e.target as HTMLElement).style.color = "hsl(var(--primary))";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.borderColor = "hsl(var(--border))";
                  (e.target as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                }}
              >
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
