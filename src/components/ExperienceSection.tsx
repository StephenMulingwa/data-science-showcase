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
    highlights: ["Python, SQL, Power BI", "Telematics Analytics", "Predictive Models", "Fleet Optimisation"],
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
    emoji: "🎓",
  },
  {
    title: "Data Science",
    institution: "Moringa School",
    description: "Intensive program in Python, SQL, machine learning, and data preprocessing.",
    emoji: "💻",
  },
  {
    title: "Certificate — Data Analysis (SPSS)",
    institution: "JKUAT",
    description: "Data collection, management, and statistical analysis using SPSS.",
    emoji: "📊",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Career Journey</p>
          <h2 className="font-display text-foreground leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700 }}>
            Experience &{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--teal)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Education
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-5 mb-20">
          {/* Vertical line */}
          <div className="absolute left-4 top-4 bottom-4 w-px"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary) / 0.1))" }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative pl-12"
            >
              {/* Dot */}
              <div
                className="absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full top-6 z-10"
                style={{
                  background: exp.current ? "hsl(var(--primary))" : "hsl(var(--border))",
                  border: "2px solid hsl(var(--background))",
                  boxShadow: exp.current ? "0 0 0 3px hsl(var(--primary) / 0.2)" : "none",
                }}
              />

              <div
                className="bg-white rounded-2xl p-6 border border-border card-hover"
                style={{ boxShadow: "0 2px 12px hsl(220 20% 8% / 0.05)" }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      {exp.logo ? (
                        <img src={logoImg} alt="TaiStat" className="w-4 h-4 rounded object-cover" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-primary" />
                      )}
                      <h3 className="font-display font-bold text-foreground text-base">{exp.title}</h3>
                      {exp.current && (
                        <span className="font-body text-xs px-2.5 py-0.5 rounded-full font-semibold"
                          style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.2)" }}>
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-body font-medium text-sm text-primary">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 font-body text-xs text-muted-foreground px-3 py-1.5 rounded-full"
                    style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h, j) => (
                    <span key={j} className="font-body text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: "hsl(var(--primary) / 0.07)",
                        color: "hsl(var(--primary))",
                        border: "1px solid hsl(var(--primary) / 0.15)",
                      }}>
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
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "hsl(var(--primary) / 0.08)", border: "1px solid hsl(var(--primary) / 0.15)" }}>
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl">Education</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border card-hover"
                style={{ boxShadow: "0 2px 12px hsl(220 20% 8% / 0.05)" }}
              >
                <span className="text-3xl mb-4 block">{edu.emoji}</span>
                <h4 className="font-display font-bold text-foreground mb-1 text-sm">{edu.title}</h4>
                <p className="font-body text-xs text-primary font-semibold mb-3 leading-tight">{edu.institution}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
