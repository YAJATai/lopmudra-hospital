import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  HeartPulse, ShieldCheck, Users, Target, Eye,
  ArrowRight, Sparkles, Award, Building2, CalendarDays,
  Handshake, Lightbulb, TrendingUp,
} from "lucide-react";
import lobbyImg from "@/assets/lobby.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Learn about Lopmudra Hospital in Pashan, Pune — our mission, values, history, and the team that makes us a trusted name in healthcare since 2008." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2008", title: "Founded in Pashan", desc: "Dr. Anjali Patil and a small team opened Lopmudra Hospital with a single goal — honest, accessible healthcare for the neighbourhood." },
  { year: "2011", title: "Maternity Wing Opened", desc: "Expanded to include a dedicated maternity and obstetrics unit, quickly becoming the preferred choice for families in Pashan." },
  { year: "2015", title: "Modern OT & ICU", desc: "Invested in a state-of-the-art operating theatre and intensive care unit to manage complex surgical and critical cases." },
  { year: "2018", title: "NABH Alignment", desc: "Adopted NABH patient safety standards across all departments, reinforcing our commitment to quality care." },
  { year: "2021", title: "Digital Health Records", desc: "Transitioned to a fully digitised health record system for seamless, paperless patient management." },
  { year: "2024", title: "50,000+ Patients Served", desc: "Crossed the milestone of 50,000 patients treated — a testament to the trust the community has placed in us." },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every patient is treated with dignity, empathy, and respect. We listen before we diagnose, and we explain before we treat.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Excellence",
    desc: "We follow evidence-based protocols, maintain sterile environments, and invest in continuous learning for our team.",
  },
  {
    icon: Handshake,
    title: "Trust & Transparency",
    desc: "Clear pricing, honest conversations, and no hidden costs. We believe trust is earned with every interaction.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "From digital health records to modern laparoscopic surgery, we embrace technology that improves patient outcomes.",
  },
  {
    icon: Users,
    title: "Community Rooted",
    desc: "We're not just a hospital in Pashan — we're part of it. Many of our staff live in the same neighbourhoods they serve.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "We measure outcomes, seek feedback, and constantly refine our processes to deliver better care every year.",
  },
];

function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <MilestonesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-ink via-ink/95 to-primary overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.11_190/0.1),transparent_60%)]" />
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
          <Sparkles className="h-3.5 w-3.5 text-gold" /> About Lopmudra
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          A hospital built on <em className="italic text-gold">trust,</em><br />not on trends.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          For nearly two decades, Lopmudra Hospital has stood for one simple idea — that quality healthcare should feel personal, honest, and always within reach.
        </motion.p>
      </motion.div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]"
      >
        <div className="grid lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
            <img src={lobbyImg} alt="Lopmudra Hospital lobby" className="h-full w-full object-cover" />
          </div>
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Our Story</span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
              From a small clinic to Pashan's <em className="italic gradient-text">most trusted hospital.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Lopmudra Hospital began in 2008 as a modest clinic with two consulting rooms and a single delivery suite. 
              The founding vision was straightforward: create a space where patients felt heard, where doctors had 
              the time to listen, and where clinical decisions were made based on need — not on profit.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Over the years, that vision has grown into a full-fledged multispeciality hospital. We've added a modern 
              operating theatre, a neonatal ICU, in-house diagnostics, and a team of over 25 specialists. But what hasn't 
              changed is the culture: unhurried consultations, transparent billing, and a steadfast refusal to compromise 
              on patient care.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today, Lopmudra serves over 50,000 patients and is consistently rated 4.6 stars — not because we chase ratings, 
              but because we treat every patient the way we'd want our own family treated.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
              <HeartPulse className="h-4 w-4" /> Serving Pashan since 2008
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Our Values</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            What we <em className="italic gradient-text">stand for.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">Six principles that guide every decision, every consultation, and every treatment at Lopmudra.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MilestonesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Timeline</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Our journey of <em className="italic gradient-text">growth.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">Key milestones that shaped Lopmudra Hospital into the institution it is today.</p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-8 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative flex flex-col gap-4 sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />
                <div className="absolute left-8 z-10 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground sm:left-1/2">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div className={`pl-20 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                  <div className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-primary">
                    {m.year}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {[
            { icon: Building2, value: "2008", label: "Founded" },
            { icon: Users, value: "50,000+", label: "Patients Served" },
            { icon: Award, value: "4.6★", label: "Patient Rating" },
            { icon: Target, value: "25+", label: "Specialists" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 bg-ink px-6 py-12 text-center text-white"
            >
              <stat.icon className="h-6 w-6 text-gold" />
              <div className="font-display text-4xl font-medium">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-ink text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <div className="relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,oklch(0.75_0.12_75/0.08),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
                Want to know more? <br /><em className="italic text-gold">We'd love to meet you.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">
                Visit us, call us, or book a consultation — experience the Lopmudra difference for yourself.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5"
                >
                  <HeartIcon className="h-4 w-4" /> Book a Visit
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
}
