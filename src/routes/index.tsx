import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  Phone,
  Star,
  Heart,
  Shield,
  Users,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/hero-hospital.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import otImg from "@/assets/ot.jpg";
import maternityImg from "@/assets/maternity.jpg";
import roomImg from "@/assets/room.jpg";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";
import { ParallaxImage } from "../components/parallax-image";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lopmudra Hospital, Pashan Pune | Multispeciality & Maternity Care" },
      { name: "description", content: "Trusted multispeciality & maternity hospital in Pashan, Pune. 24×7 emergency, modern OT, ICU, NICU. Rated 4.6★ by 1,000+ patients." },
    ],
  }),
  component: Index,
});

const PHONE = "+912025880000";
const WHATSAPP = "https://wa.me/919999999999";
const ADDRESS = "Survey No 148/4, Vishwakarma Nagar, Pashan–Sus Rd, near NIV, Pashan, Pune 411021";

function Index() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-32">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={heroImg} alt="Lopmudra Hospital exterior" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-center px-5 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} /> Trusted by Pashan since 2008
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance font-display text-5xl font-medium leading-[1.02] text-white sm:text-7xl lg:text-[5.5rem]"
        >
          Care that feels <em className="italic" style={{ color: "var(--gold)" }}>personal.</em><br />
          Expertise that feels <em className="italic" style={{ color: "var(--gold)" }}>endless.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 max-w-2xl text-balance text-lg text-white/85 sm:text-xl"
        >
          A multispeciality &amp; maternity hospital in the heart of Pashan — where modern medicine meets the warmth of a family doctor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/appointments"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold transition-all hover:-translate-y-0.5"
            style={{ color: "var(--primary)", boxShadow: "var(--shadow-elegant)" }}
          >
            Book an Appointment
            <span className="grid h-7 w-7 place-items-center rounded-full text-primary-foreground transition-transform group-hover:translate-x-1" style={{ background: "var(--primary)" }}>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> 24×7 Emergency
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-5 right-5 flex items-center justify-between text-white/80 sm:left-8 sm:right-8"
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--gold)" }} />)}
            </span>
            <span className="font-medium">4.6</span>
            <span className="text-white/60">· 1,000+ patients</span>
          </div>
          <a href="#about" className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] sm:flex">
            Scroll <ChevronDown className="h-3 w-3 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustSection() {
  const items = [
    { icon: Heart, value: "17+", label: "Years of Service" },
    { icon: Users, value: "50K+", label: "Patients Treated" },
    { icon: Shield, value: "25+", label: "Specialists" },
    { icon: Clock, value: "24×7", label: "Emergency Care" },
  ];

  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
      <GlassPanel intensity="strong" className="grid grid-cols-2 divide-x md:grid-cols-4 md:divide-x" style={{ borderColor: "oklch(0.92 0.005 200 / 0.5)" }}>
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 px-6 py-8 text-center">
            <item.icon className="h-5 w-5" style={{ color: "oklch(0.45 0.12 220)" }} />
            <span className="font-display text-3xl font-medium">{item.value}</span>
            <span className="text-[11px] uppercase tracking-widest" style={{ color: "oklch(0.5 0.01 200)" }}>{item.label}</span>
          </div>
        ))}
      </GlassPanel>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <ParallaxImage
                src={lobbyImg}
                alt=""
                speed={0.2}
                className="aspect-[4/5] w-full"
              />
            </div>
            <GlassPanel
              intensity="strong"
              className="absolute -bottom-6 -right-6 max-w-xs p-6 lg:-right-8"
            >
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "oklch(0.45 0.12 220)" }}>
                <Shield className="h-4 w-4" /> NABH-aligned Care
              </div>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}>
                Sterile OTs, modern ICU, and protocols built around patient safety.
              </p>
            </GlassPanel>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>
              About Lopmudra
            </div>
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]"
            >
              A neighbourhood hospital, built on trust.
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-base leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}
            >
              For nearly two decades, Lopmudra Hospital has been Pashan's answer to honest, attentive healthcare.
              We combine modern diagnostics and an experienced clinical team with the unhurried care of a family doctor.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {[
                "Personalised treatment plans",
                "Same-day specialist consults",
                "Transparent pricing",
                "Family-friendly environment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium" style={{ background: "oklch(0.96 0.005 90 / 0.6)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.45 0.12 220)" }} />
                  {item}
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
                style={{ background: "oklch(0.45 0.12 220)" }}
              >
                Learn Our Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Maternity & Obstetrics", desc: "Antenatal care, deliveries, and postnatal support for mother and baby.", highlight: "1,200+ yearly deliveries" },
    { title: "General Medicine", desc: "Comprehensive care for diabetes, hypertension, infections and more.", highlight: "Most visited department" },
    { title: "Paediatrics", desc: "Newborn care, vaccinations, and gentle treatment for children.", highlight: "0–16 years" },
    { title: "General Surgery", desc: "Laparoscopic & open surgeries in a fully equipped OT.", highlight: "800+ procedures/year" },
    { title: "Gynaecology", desc: "Women's health across every life stage.", highlight: "All ages" },
    { title: "24×7 Emergency", desc: "Round-the-clock response for time-critical cases.", highlight: "Always open" },
  ];

  return (
    <section className="relative py-32 sm:py-40" style={{ background: "oklch(0.965 0.005 90)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>What we do</div>
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">
              Specialist care, under one roof.
            </TextReveal>
          </div>
          <Link
            to="/services"
            className="group hidden items-center gap-2 text-sm font-medium lg:flex" style={{ color: "oklch(0.45 0.12 220)" }}
          >
            View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1"
              style={{ borderColor: "oklch(0.9 0.005 200)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, oklch(0.45 0.12 220 / 0.03), transparent)" }} />
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest" style={{ background: "oklch(0.45 0.12 220 / 0.1)", color: "oklch(0.45 0.12 220)" }}>
                  <Sparkles className="h-2.5 w-2.5" /> {s.highlight}
                </div>
                <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}>{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-5 flex items-center gap-1.5 text-xs font-medium transition-opacity opacity-0 group-hover:opacity-100"
                  style={{ color: "oklch(0.45 0.12 220)" }}
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center lg:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
            style={{ background: "oklch(0.45 0.12 220)" }}
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DoctorsSection() {
  const docs = [
    { img: doctor1, name: "Dr. Anjali Patil", role: "Obstetrics & Gynaecology", years: "15+ yrs" },
    { img: doctor2, name: "Dr. Rajeev Deshmukh", role: "Internal Medicine", years: "22+ yrs" },
  ];

  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>
            Our team
          </div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">
            The people behind your good days.
          </TextReveal>
        </div>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {docs.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ParallaxImage
                  src={d.img}
                  alt={d.name}
                  speed={0.15}
                  className="h-full w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[11px] uppercase tracking-widest text-white/50">{d.years}</div>
                <div className="mt-1 font-display text-3xl font-medium text-white">{d.name}</div>
                <div className="text-sm text-white/70">{d.role}</div>
              </div>
              <GlassPanel
                intensity="light"
                className="absolute right-4 top-4 rounded-xl px-3 py-1.5 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <span className="text-xs text-white">View Profile</span>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/doctors"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
            style={{ background: "oklch(0.45 0.12 220)" }}
          >
            Meet All Doctors <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const items = [
    { img: otImg, title: "Modern OT", tag: "Surgical Suite" },
    { img: maternityImg, title: "Maternity Wing", tag: "Mother & Child" },
    { img: roomImg, title: "Private Rooms", tag: "Inpatient Care" },
  ];

  return (
    <section className="relative py-32 sm:py-40" style={{ background: "oklch(0.15 0.015 200)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.6 0.1 145)" }}>
              Inside Lopmudra
            </div>
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-white">
              Spaces designed for healing.
            </TextReveal>
          </div>
          <Link
            to="/facilities"
            className="group hidden items-center gap-2 text-sm font-medium lg:flex" style={{ color: "oklch(0.6 0.1 145)" }}
          >
            Explore facilities <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ParallaxImage
                  src={it.img}
                  alt={it.title}
                  speed={0.2}
                  className="h-full w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "oklch(0.6 0.1 145)" }}>{it.tag}</div>
                <div className="mt-2 font-display text-2xl font-medium text-white">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center lg:hidden">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
            style={{ background: "oklch(0.6 0.1 145)" }}
          >
            Explore facilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: "Priya S.", text: "The maternity team made my delivery feel safe and personal. The nursing staff was attentive day and night.", rating: 5 },
    { name: "Aniket K.", text: "Brought my father in at midnight — emergency response was quick and the doctor explained everything calmly.", rating: 5 },
    { name: "Meera J.", text: "Clean rooms, courteous staff, and honest pricing. Easily the most trustworthy hospital in Pashan.", rating: 4 },
  ];

  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>
            Patient stories
          </div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">
            Loved by 1,000+ families.
          </TextReveal>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 flex items-center justify-center gap-2 text-sm"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current text-amber-400" />
              ))}
            </div>
            <span className="font-medium">4.6 / 5</span>
            <span className="text-muted-foreground">· verified reviews</span>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-2xl border p-8 transition-all hover:-translate-y-1"
              style={{ borderColor: "oklch(0.9 0.005 200)", background: "rgba(255,255,255,0.5)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current text-amber-400" />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug" style={{ color: "oklch(0.2 0.01 200)" }}>
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm" style={{ color: "oklch(0.5 0.01 200)" }}>— {r.name}</figcaption>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 sm:py-40" style={{ background: "oklch(0.965 0.005 90)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <GlassPanel intensity="strong" className="relative overflow-hidden rounded-[2rem] p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.45_0.12_220/0.06),transparent_70%)]" />
          <div className="relative">
            <Heart className="mx-auto h-8 w-8 mb-6" style={{ color: "oklch(0.45 0.12 220)" }} />
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]"
            >
              We're open. Let's talk.
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-md text-sm" style={{ color: "oklch(0.5 0.01 200)" }}
            >
              Book a consultation, call our front desk — we'll guide you through the next step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                to="/appointments"
                className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all hover:shadow-lg"
                style={{ background: "oklch(0.45 0.12 220)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent" />
                <span className="relative flex items-center gap-2">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-black/5"
                style={{ borderColor: "oklch(0.85 0.005 200)" }}
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={WHATSAPP}
                className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-black/5"
                style={{ borderColor: "oklch(0.85 0.005 200)" }}
              >
                <Phone className="h-4 w-4" /> WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-6 text-xs flex-wrap" style={{ color: "oklch(0.55 0.01 200)" }}
            >
              <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> OPD: Mon–Sat, 9 AM – 9 PM</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {PHONE.replace("+91", "+91 ")}</span>
            </motion.div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
