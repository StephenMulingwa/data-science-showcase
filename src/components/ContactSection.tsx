import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Let's Connect</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ready to turn your data into{" "}
            <span className="text-gradient">business growth?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Let's discuss how data analytics, AI solutions, and training can drive your next breakthrough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="mailto:mulingwastephen200@gmail.com">
            <Button variant="hero" size="lg">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </a>
          <a href="tel:+254111224952">
            <Button variant="hero-outline" size="lg">
              <Phone className="w-4 h-4" />
              +254 111 224 952
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/stephenmulingwa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass glow-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/stephen-mulingwa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass glow-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:mulingwastephen200@gmail.com"
            className="w-12 h-12 rounded-full glass glow-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="w-4 h-4" />
          <span>Nairobi, Kenya</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
