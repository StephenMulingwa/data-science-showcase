import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BarChart2, Brain, Database, TrendingUp, PieChart, Table } from "lucide-react";

const projects = [
  {
    title: "YodaAI",
    subtitle: "AI-powered analytics & forecasting platform",
    description:
      "An AI-driven platform for predictive analytics, data analysis automation, and intelligent reporting. Features 4Ls framework facilitation, theme identification, and action tracking.",
    tags: ["Python", "AI/ML", "Streamlit", "Docker"],
    icon: Brain,
    accent: "blue",
  },
  {
    title: "TaiStat AgroLink",
    subtitle: "Blockchain marketplace for Kenyan farmers",
    description:
      "A Kenya-first blockchain marketplace connecting farmers with buyers. Features real-time farmer-buyer connection, verified KYC onboarding, and smart pricing. Serves 34 counties.",
    tags: ["Blockchain", "Analytics", "KYC", "Smart Pricing"],
    icon: Database,
    accent: "emerald",
  },
  {
    title: "Churn Rate Analysis",
    subtitle: "Neural networks for telecom churn prediction",
    description:
      "Built predictive models using neural networks to identify customer churn risk and support retention strategies in telecommunications.",
    tags: ["Python", "Neural Networks", "Scikit-Learn", "Pandas"],
    icon: TrendingUp,
    accent: "amber",
  },
  {
    title: "Fleet Analytics Dashboard",
    subtitle: "Real-time logistics monitoring",
    description:
      "Interactive Power BI dashboards for monitoring fleet performance, driver behavior analysis, fuel usage patterns, and operational efficiency metrics.",
    tags: ["Power BI", "SQL", "Telematics", "Analytics"],
    icon: BarChart2,
    accent: "sky",
  },
  {
    title: "Footwear Sales Application",
    subtitle: "R Shiny app for sales & forecasting",
    description:
      "Interactive dashboard for tracking sales and inventory with time series forecasting capabilities using R Shiny.",
    tags: ["R Shiny", "Time Series", "Forecasting", "Dashboard"],
    icon: PieChart,
    accent: "rose",
  },
  {
    title: "Power BI & Excel Analytics",
    subtitle: "Business intelligence solutions",
    description:
      "Advanced dashboards, PivotTables, and data models for HR analytics, operations reporting, and executive decision support.",
    tags: ["Power BI", "Excel", "DAX", "KPIs"],
    icon: Table,
    accent: "violet",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", iconBg: "bg-blue-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", iconBg: "bg-emerald-100" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", iconBg: "bg-amber-100" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100", iconBg: "bg-sky-100" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", iconBg: "bg-rose-100" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100", iconBg: "bg-violet-100" },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Projects & <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Real projects delivering real results across multiple sectors and industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const a = accentMap[project.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm card-hover glow-border flex flex-col"
              >
                {/* Header */}
                <div className={`${a.bg} px-6 py-5 flex items-center gap-4`}>
                  <div className={`w-12 h-12 rounded-xl ${a.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <project.icon className={`w-6 h-6 ${a.text}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg leading-tight">{project.title}</h3>
                    <p className={`text-xs font-medium ${a.text}`}>{project.subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2.5 py-1 rounded-full ${a.bg} ${a.text} border ${a.border} font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
