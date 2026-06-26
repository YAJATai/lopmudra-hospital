import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Mail, MessageCircle, ArrowRight, Sparkles,
  Send, CheckCircle, Loader2, Calendar, Navigation,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Get in touch with Lopmudra Hospital in Pashan, Pune. Call us, WhatsApp us, or visit us. We're here to help 24×7." },
    ],
  }),
  component: ContactPage,
});

const PHONE = "+912025880000";
const WHATSAPP = "https://wa.me/919999999999";
const ADDRESS = "Survey No 148/4, Vishwakarma Nagar, CTS No. 1338, Pashan–Sus Rd, near NIV, Pashan, Pune, Maharashtra 411021";
const MAPS = "https://maps.google.com/?q=Lopmudra+Hospital+Pashan+Pune";

function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ContactGrid />
      <MapSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-ink overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.11_190/0.12),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Get in Touch
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          We're here to <em className="italic text-gold">help.</em><br />
          Reach out anytime.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Whether you have a medical question, want to book a consultation, or need emergency assistance — we're just a call or message away.
        </motion.p>
      </motion.div>
    </section>
  );
}

function ContactGrid() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-soft)]"
        >
          <h2 className="font-display text-3xl font-medium">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">We typically respond within 2 hours during working hours.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex flex-col items-center rounded-2xl bg-primary/5 p-10 text-center"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">Message sent!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98xxx xxxxx"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Subject</label>
                <select className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring">
                  <option>General enquiry</option>
                  <option>Book a consultation</option>
                  <option>Medical records request</option>
                  <option>Insurance / billing</option>
                  <option>Feedback / complaint</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-3xl font-medium">Contact information</h2>
            <p className="mt-2 text-sm text-muted-foreground">Prefer to call or visit? Here's how to reach us.</p>

            <div className="mt-8 space-y-6">
              <ContactCard
                icon={MapPin}
                label="Address"
                value={ADDRESS}
                action={{ href: MAPS, label: "Get Directions", icon: Navigation }}
              />
              <ContactCard
                icon={Phone}
                label="Phone"
                value={`${PHONE.replace("+91", "+91 ")}`}
                action={{ href: `tel:${PHONE}`, label: "Call Now", icon: Phone }}
              />
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with us on WhatsApp"
                action={{ href: WHATSAPP, label: "WhatsApp", icon: MessageCircle }}
              />
              <ContactCard
                icon={Mail}
                label="Email"
                value="care@lopmudrahospital.com"
                action={{ href: "mailto:care@lopmudrahospital.com", label: "Send Email", icon: Mail }}
              />
              <ContactCard
                icon={Clock}
                label="Working Hours"
                value="OPD: Mon–Sat, 9 AM – 9 PM"
                extra="Emergency: 24×7, including Sundays & holidays"
                action={undefined}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-2xl font-medium">Emergency?</h2>
            <p className="mt-2 text-sm text-muted-foreground">For medical emergencies, do not use the contact form. Call us directly.</p>
            <a
              href={`tel:${PHONE}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-destructive px-6 py-4 text-base font-semibold text-destructive-foreground transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" /> Call Emergency: {PHONE.replace("+91", "+91 ")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  extra,
  action,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  extra?: string;
  action?: { href: string; label: string; icon: typeof Phone };
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm text-foreground">{value}</div>
        {extra && <div className="mt-0.5 text-xs text-muted-foreground">{extra}</div>}
        {action && (
          <a
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <action.icon className="h-3 w-3" /> {action.label}
          </a>
        )}
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Find Us</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Visit <em className="italic gradient-text">Lopmudra.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">We're located on Pashan–Sus Road, easily accessible from anywhere in Pune.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]"
        >
          <div className="aspect-[21/9] min-h-[400px]">
            <iframe
              title="Lopmudra Hospital location"
              src="https://www.google.com/maps?q=Lopmudra+Hospital+Pashan+Pune&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "By Bus", desc: "PMPML buses to Pashan-Sus Road stop. 2 min walk from bus stop." },
            { label: "By Car", desc: "Ample parking available. Located opposite NIV, Pashan." },
            { label: "By Auto", desc: "Easy auto-rickshaw access from Baner, Aundh, Hinjewadi." },
          ].map((item, i) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-sm font-semibold text-foreground">{item.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "What are your visiting hours?", a: "OPD hours are Monday–Saturday, 9 AM to 9 PM. Emergency services are available 24×7, including Sundays and public holidays." },
    { q: "Do I need an appointment to see a doctor?", a: "Appointments are recommended to minimise wait times, but walk-ins are welcome. Emergency cases are prioritised regardless of appointment status." },
    { q: "Do you accept health insurance?", a: "Yes, we work with most major insurance providers. Please bring your insurance card and ID proof at the time of visit." },
    { q: "Is there parking available?", a: "Yes, we have dedicated parking space for patients and visitors." },
    { q: "Can I get lab tests done at the hospital?", a: "Yes, we have an in-house pathology lab and diagnostic imaging services including X-ray, ECG, and ultrasound." },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">FAQ</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Common <em className="italic gradient-text">questions.</em>
          </h2>
        </motion.div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card transition-all open:shadow-[var(--shadow-soft)]"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-ink text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <div className="relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.75_0.12_75/0.08),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
                Don't wait.<br />
                <em className="italic text-gold">Your health comes first.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">
                Whether it's a routine checkup or a medical concern, our team is ready to help. Reach out today.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" /> Call +91 20 2588 0000
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
