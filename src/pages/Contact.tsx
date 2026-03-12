import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MessageSquare, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mulingwastephen200@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "mulingwastephen200@gmail.com",
      href: "mailto:mulingwastephen200@gmail.com",
      accent: "blue",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+254 111 224 952",
      href: "tel:+254111224952",
      accent: "emerald",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/stephen-mulingwa",
      accent: "sky",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "StephenMulingwa",
      href: "https://github.com/stephenmulingwa",
      accent: "violet",
    },
  ];

  const accentStyles: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-100" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", iconBg: "bg-sky-100" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", iconBg: "bg-violet-100" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-5"
          >
            Let's turn your data into{" "}
            <span className="text-gradient-hero glow-text">business growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Ready to discuss how data analytics and training can drive your next breakthrough? I respond to email and WhatsApp promptly.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Reach out for training, consulting, or collaboration. I respond to email and WhatsApp promptly.
            </p>

            <div className="space-y-4 mb-8">
              {contactItems.map((item, i) => {
                const s = accentStyles[item.accent];
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${s.text}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                      <p className={`font-semibold text-sm mt-0.5 ${s.text}`}>{item.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40 ml-auto group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground text-sm bg-secondary/50 rounded-xl px-4 py-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Based in Nairobi, Kenya · Available for remote work worldwide</span>
            </div>

            {/* Services */}
            <div className="mt-8 bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <p className="font-display font-bold text-foreground">How I Can Help</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Data Analysis & Reporting",
                  "Machine Learning & AI Solutions",
                  "Power BI & Dashboard Development",
                  "Excel & Python Training",
                  "Data Science Consulting",
                ].map((s, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-display font-bold text-foreground mb-1">Send a Message</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Or email directly:{" "}
                <a href="mailto:mulingwastephen200@gmail.com" className="text-primary underline underline-offset-2">
                  mulingwastephen200@gmail.com
                </a>
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Your Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition placeholder:text-muted-foreground/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Excel course enquiry"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition placeholder:text-muted-foreground/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or course interest..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
