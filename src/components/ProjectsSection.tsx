import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "YodaAI",
    subtitle: "AI-powered analytics & forecasting platform",
    description:
      "An AI-driven platform for predictive analytics, data analysis automation, and intelligent reporting. Features 4Ls framework facilitation, theme identification, and action tracking.",
    tags: ["Python", "AI/ML", "Streamlit", "Docker"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "TaiStat AgroLink",
    subtitle: "Blockchain marketplace for Kenyan farmers",
    description:
      "A Kenya-first blockchain marketplace connecting farmers with buyers. Features real-time farmer-buyer connection, verified KYC onboarding, smart pricing. Serves 34 counties.",
    tags: ["Blockchain", "Analytics", "KYC", "Smart Pricing"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Churn Rate Analysis",
    subtitle: "Neural networks for telecom churn prediction",
    description:
      "Built predictive models using neural networks to identify customer churn risk and support retention strategies in telecommunications.",
    tags: ["Python", "Neural Networks", "Scikit-Learn", "Pandas"],
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    title: "Fleet Analytics Dashboard",
    subtitle: "Real-time logistics monitoring",
    description:
      "Interactive Power BI dashboards for monitoring fleet performance, driver behavior analysis, fuel usage patterns, and operational efficiency metrics.",
    tags: ["Power BI", "SQL", "Telematics", "Analytics"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Footwear Sales Application",
    subtitle: "R Shiny app for sales & forecasting",
    description:
      "Interactive dashboard for tracking sales and inventory with time series forecasting capabilities using R Shiny.",
    tags: ["R Shiny", "Time Series", "Forecasting", "Dashboard"],
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    title: "Power BI & Excel Analytics",
    subtitle: "Business intelligence solutions",
    description:
      "Advanced dashboards, PivotTables, and data models for HR analytics, operations reporting, and executive decision support.",
    tags: ["Power BI", "Excel", "DAX", "KPIs"],
    color: "from-violet-500/20 to-violet-500/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Projects & <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Real projects delivering real results across healthcare, logistics, finance, and agriculture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-xl overflow-hidden glow-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <h3 className="font-display font-bold text-xl text-foreground">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
