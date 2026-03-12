import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, BarChart, Award, ArrowRight, BookOpen, Code2, Table2 } from "lucide-react";

const courses = [
  {
    title: "Excel Mastery",
    tagline: "From spreadsheets to powerful data engines",
    description:
      "Master Microsoft Excel for data analysis, visualization, and business intelligence. From basic formulas to advanced techniques.",
    icon: Table2,
    accent: "emerald",
    duration: "6–8 weeks",
    level: "Beginner to Advanced",
    certificate: true,
    topics: [
      "Excel formulas and functions",
      "Data visualizations and charts",
      "PivotTables and data analysis",
      "Macros and VBA automation",
      "Dynamic dashboards",
    ],
    badge: "Most Popular",
  },
  {
    title: "Power BI",
    tagline: "Transform data into stunning dashboards",
    description:
      "Transform data into interactive visualizations and business intelligence dashboards that drive strategic decisions.",
    icon: BarChart,
    accent: "blue",
    duration: "6–8 weeks",
    level: "Intermediate to Advanced",
    certificate: true,
    topics: [
      "Data modeling and transformation",
      "Interactive visualizations",
      "DAX formulas and calculations",
      "Dashboards and reporting",
      "Power BI Service",
    ],
    badge: "High Demand",
  },
  {
    title: "Python for Data Science",
    tagline: "Code your way to data mastery",
    description:
      "Master Python programming for data analysis, machine learning, and automation with real-world projects.",
    icon: Code2,
    accent: "violet",
    duration: "8–10 weeks",
    level: "Beginner to Advanced",
    certificate: true,
    topics: [
      "Python fundamentals",
      "Pandas and NumPy",
      "Matplotlib and Seaborn",
      "Machine learning with Scikit-learn",
      "Real-world projects",
    ],
    badge: "New",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; iconBg: string; badge: string; gradient: string; check: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    badge: "bg-emerald-500 text-white",
    gradient: "from-emerald-500 to-teal-500",
    check: "text-emerald-500",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    badge: "bg-blue-500 text-white",
    gradient: "from-blue-500 to-cyan-500",
    check: "text-blue-500",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    badge: "bg-violet-500 text-white",
    gradient: "from-violet-500 to-purple-500",
    check: "text-violet-500",
  },
};

const Courses = () => {
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
            className="text-primary font-display text-sm tracking-widest uppercase mb-3"
          >
            Training Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-5"
          >
            Learn from a <span className="text-gradient-hero glow-text">Data Expert</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto mb-8"
          >
            Comprehensive training programs designed to help you master data analytics tools and techniques.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 text-white/50 text-sm"
          >
            {[
              { icon: BookOpen, label: "3 Courses" },
              { icon: Clock, label: "6–10 weeks each" },
              { icon: Award, label: "Certificate included" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instructor highlight */}
      <section className="py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-lg">Stephen Mulingwa</p>
              <p className="text-sm text-muted-foreground">Data Scientist & AI Consultant · 5 years experience · $20/hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {courses.map((course, i) => {
            const a = accentMap[course.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-5">
                  {/* Left accent panel */}
                  <div className={`md:col-span-2 ${a.bg} p-8 flex flex-col justify-between relative overflow-hidden`}>
                    <div className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br ${a.gradient} opacity-10`} />
                    <div>
                      {course.badge && (
                        <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold mb-4 ${a.badge}`}>
                          {course.badge}
                        </span>
                      )}
                      <div className={`w-14 h-14 rounded-2xl ${a.iconBg} flex items-center justify-center mb-4`}>
                        <course.icon className={`w-7 h-7 ${a.text}`} />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-2xl mb-2">{course.title}</h3>
                      <p className={`text-sm font-medium ${a.text} mb-3`}>{course.tagline}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BarChart className="w-4 h-4 flex-shrink-0" />
                        <span>Level: {course.level}</span>
                      </div>
                      {course.certificate && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 flex-shrink-0 text-amber-500" />
                          <span>Certificate included</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <p className={`text-xs font-display font-semibold uppercase tracking-widest ${a.text} mb-4`}>
                        What You'll Learn
                      </p>
                      <ul className="space-y-3">
                        {course.topics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 ${a.check} flex-shrink-0 mt-0.5`} />
                            <span className="text-foreground text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a href="/contact" className="flex-1">
                        <Button variant="hero" size="lg" className="w-full">
                          Enroll Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </a>
                      <a href="/contact" className="flex-1">
                        <Button variant="outline" size="lg" className="w-full">
                          Ask a Question
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why learn with me */}
      <section className="py-16 px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why learn with Stephen?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Hands-on learning from a practising Data Scientist with 5+ years of real industry experience.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: "Practical Focus", desc: "Every lesson uses real-world data and projects you can add to your portfolio." },
                { icon: Award, title: "Certified", desc: "Earn a certificate of completion to showcase your new skills to employers." },
                { icon: BarChart, title: "Expert-led", desc: "Learn directly from a Data Scientist who uses these tools daily in the industry." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
