import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Sparkles, Phone, Heart, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Loader2, Calendar, Navigation } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Contact Lopmudra Hospital in Pashan, Pune. Call, WhatsApp, or visit us." },
    ],
  }),
  component: ContactPage,
});

const PHONE = "+912025880000";
const WHATSAPP = "https://wa.me/919999999999";
const ADDRESS = "Survey No 148/4, Vishwakarma Nagar, Pashan–Sus Rd, near NIV, Pashan, Pune 411021";

function ContactPage() {
  return (
    <div>
      <Hero />
      <Content />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_40%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-panel-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8">
          <Sparkles className="h-3 w-3 text-emerald-400" /> Get in Touch
        </motion.div>
        <TextReveal as="h1" className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl" delay={0.3}>
          We're here to help.
        </TextReveal>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70">
          Whether you have a question or need emergency assistance — we're just a call away.
        </motion.p>
      </div>
    </section>
  );
}

function Content() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false); setSubmitted(true);
  };

  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <GlassPanel intensity="strong" className="p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium">Send a message</h2>
            <p className="mt-1 text-sm" style={{ color: "oklch(0.5 0.01 200)" }}>We respond within 2 hours during working hours.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-center py-12">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full mb-5" style={{ background: "oklch(0.45 0.12 220)", color: "white" }}>
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-medium">Sent!</h3>
                <p className="mt-2 text-sm" style={{ color: "oklch(0.5 0.01 200)" }}>We'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full px-6 py-3 text-sm font-medium text-white" style={{ background: "oklch(0.45 0.12 220)" }}>
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 220)" }}>Name</label>
                    <input type="text" required placeholder="Your name" className="glass-input mt-1.5" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 220)" }}>Phone</label>
                    <input type="tel" required placeholder="+91 98xxx xxxxx" className="glass-input mt-1.5" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 220)" }}>Email</label>
                  <input type="email" required placeholder="your@email.com" className="glass-input mt-1.5" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 220)" }}>Message</label>
                  <textarea required rows={4} placeholder="How can we help?" className="glass-input mt-1.5 resize-none" />
                </div>
                <button type="submit" disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-white transition-all"
                  style={{ background: "oklch(0.45 0.12 220)" }}>
                  {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Message</>}
                </button>
              </form>
            )}
          </GlassPanel>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <GlassPanel intensity="strong" className="p-8">
            <h3 className="font-display text-xl font-medium mb-5">Contact Info</h3>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: ADDRESS },
                { icon: Phone, label: "Phone", value: PHONE.replace("+91", "+91 "), href: `tel:${PHONE}` },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP },
                { icon: Mail, label: "Email", value: "care@lopmudrahospital.com", href: "mailto:care@lopmudrahospital.com" },
                { icon: Clock, label: "Hours", value: "OPD: Mon–Sat, 9 AM – 9 PM\nEmergency: 24×7" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: "oklch(0.45 0.12 220 / 0.08)", color: "oklch(0.45 0.12 220)" }}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>{item.label}</div>
                    <div className="mt-0.5 text-sm" style={{ color: "oklch(0.3 0.01 200)", whiteSpace: "pre-line" }}>
                      {item.href ? <a href={item.href} className="hover:opacity-70">{item.value}</a> : item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel intensity="strong" className="p-8" style={{ borderColor: "oklch(0.7 0.15 30 / 0.3)" }}>
            <h3 className="font-display text-xl font-medium mb-2" style={{ color: "oklch(0.5 0.2 25)" }}>Emergency?</h3>
            <p className="text-sm mb-5" style={{ color: "oklch(0.55 0.01 200)" }}>Do not use the form. Call us directly.</p>
            <a href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-white transition-all"
              style={{ background: "oklch(0.5 0.2 25)" }}>
              <Phone className="h-4 w-4" /> {PHONE.replace("+91", "+91 ")}
            </a>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32" style={{ background: "oklch(0.15 0.015 200)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <GlassPanel intensity="strong" className="relative overflow-hidden rounded-[2rem] p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />
          <div className="relative">
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-white">
              Your health comes first.
            </TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/appointments" className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium" style={{ background: "white", color: "oklch(0.15 0.015 200)" }}>
                <span className="relative flex items-center gap-2">Book Appointment <ArrowRight className="h-4 w-4" /></span>
              </Link>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/90">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
