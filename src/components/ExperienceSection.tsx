import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import logoImg from "@/assets/logo.png";

const experiences = [
  {
    title: "Data Scientist",
    company: "ControlTech Limited, Nairobi",
    period: "January 2026 – Present",
    description:
      "Analyzing large-scale logistics and telematics data to improve fleet performance, driver safety, and operational efficiency. Building interactive dashboards and predictive analytics solutions.",
    highlights: ["Python, SQL, Power BI", "Telematics Analytics", "Predictive Models", "Fleet Optimization"],
    current: true,
  },
  {
    title: "Data Scientist Consultant",
    company: "TaiStat Firm",
    period: "June 2025 – Present",
    description:
      "Lead Data Scientist at TaiStat — developing AI-powered analytics platforms including YodaAI. Delivering intelligent decision support solutions across business sectors.",
    highlights: ["YodaAI Platform", "AI & ML Solutions", "Docker & AWS", "Strategic Consulting"],
    current: true,
    logo: true,
  },
  {
    title: "Freelance Data Scientist & Analyst",
    company: "Remote",
    period: "August 2023 – Present",
    description:
      "Collaborating with international clients and postgraduate students. Building ML models, POS systems, and interactive dashboards. Tutoring in Machine Learning, Python, and Statistical Methods.",
    highlights: ["ML Model Deployment", "POS Systems", "Tableau & Power BI", "International Clients"],
    current: false,
  },
  {
    title: "Data Analyst Intern",
    company: "Kenyatta National Hospital, Nairobi",
    period: "April 2023 – August 2023",
    description:
      "Supported collection, management, and analysis of large-scale healthcare datasets. Designed M&E frameworks and KPIs for departmental monitoring.",
    highlights: ["Healthcare Data", "M&E Frameworks", "SPSS & Python", "KPI Design"],
    current: false,
  },
];

const education = [
  {
    title: "BSc Statistics",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    description: "Statistical methods, probability, regression analysis, and econometrics.",
    icon: "🎓",
  },
  {
    title: "Data Science",
    institution: "Moringa School",
    description: "Intensive program in Python, SQL, machine learning, and data preprocessing.",
    icon: "💻",
  },
  {
    title: "Certificate in Data Analysis (SPSS)",
    institution: "JKUAT",
    description: "Data collection, management, and statistical analysis using SPSS.",
    icon: "📊",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative space-y-6 mb-20">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <div className={`absolute left-5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 mt-5 ${exp.current ? 'bg-primary' : 'bg-border'}`} />

              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover glow-border">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {exp.logo ? (
                        <img src={logoImg} alt="TaiStat" className="w-5 h-5 rounded object-cover" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-primary" />
                      )}
                      <h3 className="text-lg font-display font-bold text-foreground">{exp.title}</h3>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">Current</span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 mt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/15 font-medium">
                      {h}
                    </span>
                  ))}
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
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">Education</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover glow-border"
              >
                <span className="text-3xl mb-3 block">{edu.icon}</span>
                <h4 className="font-display font-bold text-foreground mb-1">{edu.title}</h4>
                <p className="text-sm text-primary font-medium mb-3">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
