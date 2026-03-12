import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Brain, Database, TrendingUp, BarChart2, PieChart, Table, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TaiStat AgroLink",
    subtitle: "A Kenya-first blockchain marketplace connecting verified farmers with trusted buyers",
    whatIDid: [
      "Blockchain-powered traceability for all crops",
      "Real-time connection between farmers and buyers",
      "Verified farmer onboarding with KYC compliance",
      "Smart pricing intelligence and tender system",
      "Coin-based monetization and bidding",
      "Serves 34 Kenyan counties",
    ],
    tags: ["Blockchain", "Analytics", "KYC", "Smart Pricing"],
    icon: Database,
    accent: "emerald",
    number: "01",
  },
  {
    title: "YodaAI",
    subtitle: "AI-powered retrospective assistant for agile teams",
    whatIDid: [
      "Intelligent 4Ls framework facilitation",
      "Automatic theme identification and grouping",
      "Team voting for priority themes",
      "Disciplined Agile-based recommendations",
      "Comprehensive PDF report generation",
      "Action items tracking",
    ],
    tags: ["Python", "AI/ML", "Streamlit", "Docker"],
    icon: Brain,
    accent: "blue",
    number: "02",
  },
  {
    title: "Churn Rate Analysis",
    subtitle: "Neural networks for telecommunication churn prediction",
    whatIDid: [
      "Built predictive models to identify churn risk",
      "Support retention strategies using Python",
      "Machine learning with neural networks",
      "Data preprocessing and feature engineering",
    ],
    tags: ["Python", "Neural Networks", "Scikit-Learn", "Pandas"],
    icon: TrendingUp,
    accent: "amber",
    number: "03",
  },
  {
    title: "Footwear Sales Application",
    subtitle: "R Shiny app for sales, stock, and time series prediction",
    whatIDid: [
      "Interactive dashboard for tracking sales and inventory",
      "Time series forecasting capabilities",
      "Stock management analytics",
      "Business performance visualizations",
    ],
    tags: ["R Shiny", "Time Series", "Forecasting", "Dashboard"],
    icon: PieChart,
    accent: "rose",
    number: "04",
  },
  {
    title: "Power BI Analytics Dashboards",
    subtitle: "Business intelligence and HR analytics",
    whatIDid: [
      "Interactive dashboards for HR and operations",
      "KPIs and country-level staff analytics",
      "Gender distribution reporting",
      "Executive decision support visuals",
    ],
    tags: ["Power BI", "DAX", "SQL", "HR Analytics"],
    icon: BarChart2,
    accent: "sky",
    number: "05",
  },
  {
    title: "Excel Analytics Solutions",
    subtitle: "Advanced dashboards and data models",
    whatIDid: [
      "Excel-based dashboards with PivotTables",
      "Data models for reporting and decision support",
      "Advanced formula automation",
      "Business intelligence solutions",
    ],
    tags: ["Excel", "PivotTables", "VBA", "KPIs"],
    icon: Table,
    accent: "violet",
    number: "06",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; iconBg: string; badge: string; num: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    num: "text-blue-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    num: "text-emerald-200",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    num: "text-amber-200",
  },
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
    iconBg: "bg-sky-100",
    badge: "bg-sky-100 text-sky-700 border-sky-200",
    num: "text-sky-200",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    badge: "bg-rose-100 text-rose-700 border-rose-200",
    num: "text-rose-200",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    badge: "bg-violet-100 text-violet-700 border-violet-200",
    num: "text-violet-200",
  },
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="hero-section pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: "hsl(174 72% 55% / 0.4)",
                left: `${(i * 7 + 5) % 100}%`,
                top: `${(i * 13 + 10) % 100}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(hsl(174 72% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 72% 55%) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-display text-sm tracking-widest uppercase mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-5"
          >
            Projects & <span className="text-gradient-hero glow-text">Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A collection of data analysis and software projects showcasing real business impact through strategic insights and actionable solutions.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => {
              const a = accentMap[project.accent];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Card Header */}
                  <div className={`${a.bg} px-7 py-6 relative overflow-hidden`}>
                    <span className={`absolute right-5 top-1 text-7xl font-display font-black ${a.num} select-none pointer-events-none`}>
                      {project.number}
                    </span>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`w-13 h-13 rounded-2xl ${a.iconBg} flex items-center justify-center flex-shrink-0 p-3`}>
                        <project.icon className={`w-6 h-6 ${a.text}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-xl leading-tight">{project.title}</h3>
                        <p className={`text-sm mt-1 ${a.text} font-medium leading-snug`}>{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex-1 flex flex-col">
                    <p className={`text-xs font-display font-semibold uppercase tracking-widest ${a.text} mb-3`}>What I Did</p>
                    <ul className="space-y-2 flex-1">
                      {project.whatIDid.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${a.bg} border ${a.border} flex-shrink-0 mt-1.5`}
                            style={{ background: `hsl(var(--${project.accent === 'blue' ? 'primary' : project.accent}))` }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 mb-5">
                      {project.tags.map((tag, j) => (
                        <span key={j} className={`text-xs px-3 py-1 rounded-full border font-medium ${a.badge}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      className={`flex items-center gap-2 text-sm font-semibold ${a.text} group-hover:gap-3 transition-all duration-300`}
                    >
                      View Full Project
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-secondary/40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's collaborate and turn your data into meaningful insights and business value.
            </p>
            <a href="/contact">
              <Button variant="hero" size="lg">
                Let's Work Together
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
