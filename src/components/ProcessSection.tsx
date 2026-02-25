import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Sparkles, BarChart3, Presentation } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Data Collection",
    description: "Gathering relevant information from spreadsheets, databases, surveys, or other sources to ensure a strong foundation for analysis.",
    icon: Search,
  },
  {
    num: "02",
    title: "Data Cleaning & Preparation",
    description: "Organizing, refining, and validating data to remove inconsistencies and make it ready for exploration.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Analysis & Modeling",
    description: "Exploring trends, patterns, and relationships using statistical tools and ML models to uncover meaningful insights.",
    icon: BarChart3,
  },
  {
    num: "04",
    title: "Visualization & Reporting",
    description: "Translating results into clear visuals and reports that help teams understand the story behind the numbers.",
    icon: Presentation,
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">My Approach</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Bringing Data to <span className="text-gradient">Life</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 text-center glow-border group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-3xl font-display font-bold text-gradient opacity-40">{step.num}</span>
              <h3 className="font-display font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
