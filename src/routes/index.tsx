import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Phone, MapPin, Clock, MessageCircle, Star, ArrowRight, Stethoscope,
  Baby, HeartPulse, Activity, ShieldCheck, Ambulance, Award, Users,
  Calendar, ChevronDown, Menu, X, Sparkles, Building2, Images,
  CalendarClock, ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/hero-hospital.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import otImg from "@/assets/ot.jpg";
import maternityImg from "@/assets/maternity.jpg";
import roomImg from "@/assets/room.jpg";

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
const ADDRESS = "Survey No 148/4, Vishwakarma Nagar, CTS No. 1338, Pashan–Sus Rd, near NIV, Pashan, Pune, Maharashtra 411021";
const MAPS = "https://maps.google.com/?q=Lopmudra+Hospital+Pashan+Pune";

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <DoctorsPreview />
      <FacilitiesPreview />
      <Testimonials />
      <PageLinks />
      <VisitPreview />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-0">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={heroImg} alt="Lopmudra Hospital exterior" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Trusted by Pashan since 2008
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance font-display text-5xl font-medium leading-[1.02] text-white sm:text-7xl lg:text-[5.5rem]"
        >
          Care that feels <em className="italic text-gold">personal.</em><br/>
          Expertise that feels <em className="italic text-gold">endless.</em>
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
          <Link to="/appointments" className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5">
            Book an Appointment
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> 24×7 Emergency
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-5 right-5 flex items-center justify-between text-white/80 sm:left-8 sm:right-8"
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-gold" />)}
            </span>
            <span className="font-medium">4.6</span>
            <span className="text-white/60">· 1,000+ patients</span>
          </div>
          <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] sm:flex">
            Scroll <ChevronDown className="h-3 w-3 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const items = [
    { icon: Award, k: "17+", v: "Years of Service" },
    { icon: Users, k: "50K+", v: "Patients Treated" },
    { icon: Stethoscope, k: "25+", v: "Specialist Doctors" },
    { icon: Ambulance, k: "24×7", v: "Emergency Care" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 bg-card px-6 py-10 text-center"
          >
            <it.icon className="h-5 w-5 text-primary" />
            <div className="font-display text-4xl font-medium text-foreground">{it.k}</div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{it.v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT PREVIEW ---------- */
function AboutPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img src={lobbyImg} alt="Hospital lobby" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:-right-8"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" /> NABH-aligned Care
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Sterile OTs, modern ICU, and protocols built around patient safety.</p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">About Lopmudra</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              A neighbourhood hospital, built on <em className="italic gradient-text">trust</em> and quiet expertise.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              For nearly two decades, Lopmudra Hospital has been Pashan&apos;s answer to honest, attentive healthcare.
              From a child&apos;s first breath to your parent&apos;s recovery, we combine modern diagnostics and an
              experienced clinical team with the unhurried care of a family doctor.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              Learn Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES PREVIEW ---------- */
function ServicesPreview() {
  const services = [
    { icon: Baby, title: "Maternity & Obstetrics", desc: "Antenatal care, normal & C-section deliveries, and dedicated postnatal support." },
    { icon: HeartPulse, title: "General Medicine", desc: "Comprehensive care for fever, infections, diabetes, hypertension and more." },
    { icon: Stethoscope, title: "Paediatrics", desc: "Newborn care, vaccinations, growth monitoring and gentle treatment for little ones." },
    { icon: Activity, title: "General Surgery", desc: "Modern laparoscopic & open surgical procedures in a fully equipped OT." },
    { icon: ShieldCheck, title: "Gynaecology", desc: "Women's health consultations, screenings, and surgical care across every life stage." },
    { icon: Ambulance, title: "24×7 Emergency", desc: "Round-the-clock casualty, on-call doctors and quick response for critical cases." },
  ];
  return (
    <section className="relative bg-cream py-24 sm:py-32 bg-grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">What we do</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
              Specialist care, under <em className="italic gradient-text">one calm roof.</em>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DOCTORS PREVIEW ---------- */
function DoctorsPreview() {
  const docs = [
    { img: doctor1, name: "Dr. Anjali Patil", role: "Obstetrics & Gynaecology", years: "15+ yrs" },
    { img: doctor2, name: "Dr. Rajeev Deshmukh", role: "Internal Medicine", years: "22+ yrs" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Meet the team</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            The people behind your <em className="italic gradient-text">good days.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">A close-knit team of consultants who've practiced in Pune for years.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            Meet All Doctors <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {docs.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="aspect-[5/6] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7 text-white">
                <div className="text-xs uppercase tracking-[0.18em] text-white/70">{d.years}</div>
                <h3 className="mt-1 font-display text-3xl font-medium">{d.name}</h3>
                <div className="text-sm text-white/80">{d.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FACILITIES PREVIEW ---------- */
function FacilitiesPreview() {
  const items = [
    { img: otImg, title: "Modern Operating Theatre", tag: "Surgical Suite" },
    { img: maternityImg, title: "Maternity & Newborn Care", tag: "Mother & Child" },
    { img: roomImg, title: "Calm Private Rooms", tag: "Inpatient Care" },
  ];
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">Inside Lopmudra</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl text-balance">
              Spaces designed for <em className="italic text-gold">healing.</em>
            </h2>
          </div>
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:underline"
          >
            Explore Facilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{it.tag}</div>
                <div className="mt-2 font-display text-2xl font-medium">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const reviews = [
    { name: "Priya S.", text: "The maternity team made my delivery feel safe and personal. The nursing staff was attentive day and night.", rating: 5 },
    { name: "Aniket K.", text: "Brought my father in at midnight — emergency response was quick and the doctor explained everything calmly.", rating: 5 },
    { name: "Meera J.", text: "Clean rooms, courteous staff, and honest pricing. Easily the most trustworthy hospital in Pashan.", rating: 4 },
  ];
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">In their words</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Loved by <em className="italic gradient-text">1,000+</em> families across Pune.
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <span className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current text-gold" />)}
            </span>
            <span className="font-display text-lg font-medium">4.6 / 5</span>
            <span className="text-muted-foreground">· verified patient reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current text-gold" />)}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-foreground">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted-foreground">— {r.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE LINKS ---------- */
function PageLinks() {
  const links = [
    { icon: Building2, title: "About Us", desc: "Our story, mission, and values", to: "/about" },
    { icon: Stethoscope, title: "Services", desc: "Full range of medical services", to: "/services" },
    { icon: Activity, title: "Facilities", desc: "Modern infrastructure & equipment", to: "/facilities" },
    { icon: Images, title: "Gallery", desc: "Photos of our hospital", to: "/gallery" },
    { icon: CalendarClock, title: "Book Appointment", desc: "Schedule your visit online", to: "/appointments" },
    { icon: MapPin, title: "Contact Us", desc: "Get directions & reach out", to: "/contact" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Explore</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Everything you need, <em className="italic gradient-text">all in one place.</em>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={link.to}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{link.title}</div>
                  <div className="text-xs text-muted-foreground">{link.desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VISIT PREVIEW ---------- */
function VisitPreview() {
  return (
    <section className="relative pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-ink text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <div className="relative p-10 sm:p-14 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.75_0.12_75/0.08),transparent_60%)]" />
            <div className="relative grid lg:grid-cols-2 gap-10">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">Plan your visit</span>
                <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance text-primary-foreground">
                  We're open. <em className="italic text-gold">Let's talk.</em>
                </h2>
                <p className="mt-5 max-w-md text-primary-foreground/80">
                  Book a consultation, ask about a procedure, or just call our front desk — we'll guide you through the next step.
                </p>

                <div className="mt-10 space-y-5">
                  <ContactRow icon={MapPin} title="Address" text={ADDRESS} />
                  <ContactRow icon={Phone} title="Phone" text={PHONE.replace("+91", "+91 ")} href={`tel:${PHONE}`} />
                  <ContactRow icon={Clock} title="Hours" text="OPD: Mon–Sat, 9 AM – 9 PM · Emergency: 24×7" />
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/appointments" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5">
                    <Calendar className="h-4 w-4" /> Book Now
                  </Link>
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative min-h-[350px] rounded-2xl overflow-hidden">
                <iframe
                  title="Lopmudra Hospital location"
                  src="https://www.google.com/maps?q=Lopmudra+Hospital+Pashan+Pune&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, text, href }: { icon: typeof Phone; title: string; text: string; href?: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 backdrop-blur-md">
        <Icon className="h-4 w-4 text-gold" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">{title}</div>
        <div className="mt-1 text-sm text-primary-foreground/95">
          {href ? <a href={href} className="hover:underline">{text}</a> : text}
        </div>
      </div>
    </div>
  );
}
