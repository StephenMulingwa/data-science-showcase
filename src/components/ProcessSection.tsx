import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Wand2, BrainCircuit, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Data Collection",
    description:
      "Gathering relevant information from spreadsheets, databases, surveys, or other sources to ensure a strong foundation for analysis.",
    icon: Database,
    accent: "hsl(215 85% 35%)",
    accentLight: "hsl(215 85% 35% / 0.08)",
    accentBorder: "hsl(215 85% 35% / 0.2)",
  },
  {
    num: "02",
    title: "Data Cleaning & Preparation",
    description:
      "Organizing, refining, and validating data to remove inconsistencies and make it ready for exploration.",
    icon: Wand2,
    accent: "hsl(262 60% 55%)",
    accentLight: "hsl(262 60% 55% / 0.08)",
    accentBorder: "hsl(262 60% 55% / 0.2)",
  },
  {
    num: "03",
    title: "Analysis & Modeling",
    description:
      "Exploring trends, patterns, and relationships using statistical tools and ML models to uncover meaningful insights.",
    icon: BrainCircuit,
    accent: "hsl(162 65% 40%)",
    accentLight: "hsl(162 65% 40% / 0.08)",
    accentBorder: "hsl(162 65% 40% / 0.2)",
  },
  {
    num: "04",
    title: "Visualization & Reporting",
    description:
      "Translating results into clear visuals and reports that help teams understand the story behind the numbers.",
    icon: BarChart3,
    accent: "hsl(32 85% 50%)",
    accentLight: "hsl(32 85% 50% / 0.08)",
    accentBorder: "hsl(32 85% 50% / 0.2)",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding-sm" style={{ background: "hsl(220 20% 97%)" }} ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">My Approach</p>
          <h2 className="font-display text-foreground leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700 }}>
            Bringing Data to Life
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-[15px] italic">
            Shaping raw data into stories that drive action.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group relative bg-white rounded-3xl p-7 cursor-default transition-all duration-300 hover:-translate-y-2"
                style={{
                  border: `1px solid ${step.accentBorder}`,
                  boxShadow: "0 2px 16px hsl(220 20% 8% / 0.06)",
                }}
                whileHover={{ boxShadow: `0 20px 60px ${step.accentLight.replace("0.08", "0.2")}` }}
              >
                {/* Large number watermark */}
                <span
                  className="absolute top-4 right-5 font-display font-black select-none pointer-events-none"
                  style={{ fontSize: "5rem", lineHeight: 1, color: step.accentLight.replace("0.08", "0.06"), fontWeight: 900 }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: step.accentLight, border: `1px solid ${step.accentBorder}` }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.accent }} />
                </div>

                {/* Number label */}
                <p className="font-body text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: step.accent }}>
                  {step.num}
                </p>

                <h3 className="font-display font-bold text-foreground text-lg mb-3 leading-tight">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.8]">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
