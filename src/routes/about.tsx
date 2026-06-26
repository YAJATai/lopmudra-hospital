import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Learn about Lopmudra Hospital in Pashan, Pune — our mission, values, and history since 2008." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <Hero />
      <Story />
      <Values />
      <Stats />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8"
        >
          <Sparkles className="h-3 w-3 text-emerald-400" /> About Lopmudra
        </motion.div>
        <TextReveal
          as="h1"
          className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl"
          delay={0.3}
        >
          A hospital built on trust, not on trends.
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          For nearly two decades, Lopmudra has stood for quality healthcare that feels personal, honest, and always within reach.
        </motion.p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
      <GlassPanel intensity="strong" className="overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-2">
          <div className="p-10 sm:p-14 lg:p-16">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>
              Our Story
            </div>
            <TextReveal as="h2" className="font-display text-3xl sm:text-4xl font-medium leading-[1.05]">
              From a small clinic to Pashan's most trusted hospital.
            </TextReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}
            >
              <p>Lopmudra Hospital began in 2008 as a modest clinic with two consulting rooms and a single delivery suite. The founding vision was straightforward: create a space where patients felt heard, where doctors had time to listen, and where clinical decisions were made based on need.</p>
              <p>Today, we've grown into a full-fledged multispeciality hospital with a modern OT, neonatal ICU, in-house diagnostics, and over 25 specialists. But what hasn't changed is the culture: unhurried consultations, transparent billing, and a steadfast refusal to compromise on patient care.</p>
              <p>We've served over 50,000 patients and are consistently rated 4.6 stars — not because we chase ratings, but because we treat every patient the way we'd want our own family treated.</p>
            </motion.div>
          </div>
          <div className="flex items-center justify-center p-10 sm:p-14 lg:p-16" style={{ background: "oklch(0.96 0.005 90)" }}>
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { value: "2008", label: "Founded" },
                { value: "50K+", label: "Patients" },
                { value: "25+", label: "Specialists" },
                { value: "4.6★", label: "Rating" },
              ].map((s) => (
                <div key={s.label} className="text-center rounded-2xl p-5 glass-panel-strong">
                  <div className="font-display text-3xl font-medium">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest" style={{ color: "oklch(0.5 0.01 200)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

function Values() {
  const values = [
    { title: "Compassion First", desc: "Every patient is treated with dignity and respect. We listen before we diagnose." },
    { title: "Clinical Excellence", desc: "Evidence-based protocols, sterile environments, and continuous learning for our team." },
    { title: "Trust & Transparency", desc: "Clear pricing, honest conversations, and no hidden costs." },
    { title: "Community Rooted", desc: "We're not just a hospital in Pashan — we're part of it." },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>Our Values</div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">What we stand for.</TextReveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border p-7 transition-all hover:-translate-y-1"
              style={{ borderColor: "oklch(0.9 0.005 200)", background: "rgba(255,255,255,0.5)" }}
            >
              <h3 className="font-display text-2xl font-medium">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-24" style={{ background: "oklch(0.15 0.015 200)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-px overflow-hidden rounded-3xl sm:grid-cols-4" style={{ background: "rgba(255,255,255,0.06)" }}>
          {[
            { value: "17+", label: "Years of Service" },
            { value: "50K+", label: "Patients Served" },
            { value: "4.6★", label: "Patient Rating" },
            { value: "25+", label: "Specialists" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 px-6 py-12 text-center text-white"
              style={{ background: "oklch(0.15 0.015 200)" }}
            >
              <div className="font-display text-4xl font-medium">{s.value}</div>
              <div className="text-[11px] uppercase tracking-widest text-white/50">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <GlassPanel intensity="strong" className="relative overflow-hidden rounded-[2rem] p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.45_0.12_220/0.06),transparent_70%)]" />
          <div className="relative">
            <Heart className="mx-auto h-8 w-8 mb-6" style={{ color: "oklch(0.45 0.12 220)" }} />
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">
              Want to know more? We'd love to meet you.
            </TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/appointments"
                className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white"
                style={{ background: "oklch(0.45 0.12 220)" }}
              >
                <span className="relative flex items-center gap-2">
                  Book a Visit <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium"
                style={{ borderColor: "oklch(0.85 0.005 200)" }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
