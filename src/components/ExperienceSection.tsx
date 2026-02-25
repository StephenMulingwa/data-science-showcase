import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist",
    company: "ControlTech Limited, Nairobi",
    period: "January 2026 – Present",
    description:
      "Analyzing large-scale logistics and telematics data to improve fleet performance, driver safety, and operational efficiency. Building interactive dashboards and predictive analytics solutions.",
    highlights: ["Python, SQL, Power BI", "Telematics Analytics", "Predictive Models", "Fleet Optimization"],
  },
  {
    title: "Founder & Lead Data Scientist",
    company: "TaiStat Firm",
    period: "June 2025 – Present",
    description:
      "Founded a data science and AI firm developing intelligent analytics platforms including YodaAI. Delivering AI-powered decision support solutions across healthcare, logistics, and business sectors.",
    highlights: ["YodaAI Platform", "AI & ML Solutions", "Docker & AWS", "Strategic Consulting"],
  },
  {
    title: "Freelance Data Scientist & Analyst",
    company: "Remote",
    period: "August 2023 – Present",
    description:
      "Collaborating with international clients and postgraduate students. Building ML models, POS systems, and interactive dashboards. Tutoring in Machine Learning, Python, and Statistical Methods.",
    highlights: ["ML Model Deployment", "POS Systems", "Tableau & Power BI", "International Clients"],
  },
  {
    title: "Data Analyst Intern",
    company: "Kenyatta National Hospital, Nairobi",
    period: "April 2023 – August 2023",
    description:
      "Supported collection, management, and analysis of large-scale healthcare datasets. Designed M&E frameworks and KPIs for departmental monitoring.",
    highlights: ["Healthcare Data", "M&E Frameworks", "SPSS & Python", "KPI Design"],
  },
];

const education = [
  {
    title: "BSc Statistics",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    description: "Statistical methods, probability, regression analysis, and econometrics.",
  },
  {
    title: "Data Science",
    institution: "Moringa School",
    description: "Intensive program in Python, SQL, machine learning, and data preprocessing.",
  },
  {
    title: "Certificate in Data Analysis (SPSS)",
    institution: "JKUAT",
    description: "Data collection, management, and statistical analysis using SPSS.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] z-10 mt-6" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass rounded-lg p-6 glow-border">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-display">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-bold">Education</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="glass rounded-lg p-6 glow-border">
                <h4 className="font-display font-semibold text-foreground mb-1">{edu.title}</h4>
                <p className="text-sm text-primary/80 mb-3">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
