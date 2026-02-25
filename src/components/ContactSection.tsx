import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Let's Connect</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Ready to turn your data into{" "}
            <span className="text-gradient">business growth?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4">
            Let's discuss how data analytics, AI solutions, and training can drive your next breakthrough.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "mulingwastephen200@gmail.com", href: "mailto:mulingwastephen200@gmail.com" },
              { icon: Phone, label: "Phone", value: "+254 111 224 952", href: "tel:+254111224952" },
              { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: "#" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border shadow-sm card-hover glow-border group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                  <p className="text-foreground font-medium text-sm mt-0.5">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/stephenmulingwa", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/stephen-mulingwa", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mulingwastephen200@gmail.com", label: "Email" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col items-center gap-1.5 bg-white rounded-xl p-3 border border-border shadow-sm card-hover glow-border group text-muted-foreground hover:text-primary transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-border shadow-sm glow-border flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need data analysis, an AI solution, machine learning consulting, or Power BI training — I'm ready to help you unlock the value in your data.
              </p>
              <ul className="space-y-2 mb-8">
                {["Data Analysis & Reporting", "Machine Learning & AI", "Dashboard Development", "Data Science Training"].map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:mulingwastephen200@gmail.com" className="block">
                <Button variant="hero" size="lg" className="w-full">
                  <Mail className="w-4 h-4" />
                  Send Me an Email
                </Button>
              </a>
              <a href="tel:+254111224952" className="block">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="w-4 h-4" />
                  Call Me
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
