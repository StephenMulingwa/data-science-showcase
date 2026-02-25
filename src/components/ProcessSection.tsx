import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Sparkles, BarChart3, Presentation } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Data Collection",
    description: "Gathering relevant information from spreadsheets, databases, surveys, or other sources to ensure a strong foundation for analysis.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    num: "02",
    title: "Data Cleaning & Preparation",
    description: "Organizing, refining, and validating data to remove inconsistencies and make it ready for deep exploration.",
    icon: Sparkles,
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    num: "03",
    title: "Analysis & Modeling",
    description: "Exploring trends, patterns, and relationships using statistical tools and ML models to uncover meaningful insights.",
    icon: BarChart3,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    num: "04",
    title: "Visualization & Reporting",
    description: "Translating results into clear visuals and reports that help teams understand the story behind the numbers.",
    icon: Presentation,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">My Approach</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            How I Turn Data Into <span className="text-gradient">Decisions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A structured, repeatable process that delivers reliable insights every time.
          </p>
        </motion.div>

        {/* Connector line (desktop) */}
        <div className="hidden lg:block relative mb-2">
          <div className="absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-orange-200 -translate-y-1/2 z-0" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative bg-white rounded-2xl p-7 border ${step.border} shadow-sm card-hover group`}
            >
              {/* Number badge */}
              <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                <span className="text-white text-xs font-display font-bold">{step.num}</span>
              </div>

              <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-5 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-6 h-6 bg-gradient-to-br ${step.color} bg-clip-text`} style={{ color: `hsl(${i === 0 ? '210 80% 50%' : i === 1 ? '260 70% 55%' : i === 2 ? '150 60% 40%' : '30 80% 50%'})` }} />
              </div>

              <h3 className="font-display font-bold text-foreground text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
