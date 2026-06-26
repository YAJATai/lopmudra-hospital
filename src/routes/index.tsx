import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Phone, MapPin, Clock, MessageCircle, Star, ArrowRight, Stethoscope,
  Baby, HeartPulse, Activity, ShieldCheck, Ambulance, Award, Users,
  Calendar, ChevronDown, Menu, X, Sparkles,
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
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Doctors />
      <Facilities />
      <Testimonials />
      <Visit />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Doctors", "#doctors"],
    ["Facilities", "#facilities"],
    ["Visit", "#visit"],
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">Lopmudra</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Hospital · Pune</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" /> {PHONE.replace("+91", "+91 ")}
          </a>
          <a href="#visit" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5">
            Book Appointment <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-elegant)] lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-base font-medium">
                {label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
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
          Care that feels <em className="italic" style={{ color: "var(--gold)" }}>personal.</em><br/>
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
          <a href="#visit" className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5">
            Book an Appointment
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
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

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Personalised treatment plans", "Every patient is more than a chart."],
                ["Same-day specialist consults", "No long waits when it matters most."],
                ["Transparent pricing", "Clear estimates before any procedure."],
                ["Family-friendly environment", "Calm rooms, easy access, attentive staff."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-border/70 bg-card/60 p-4">
                  <div className="text-sm font-semibold text-foreground">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { icon: Baby, title: "Maternity & Obstetrics", desc: "Antenatal care, normal & C-section deliveries, and dedicated postnatal support for mother and baby." },
    { icon: HeartPulse, title: "General Medicine", desc: "Comprehensive care for fever, infections, diabetes, hypertension and lifestyle conditions." },
    { icon: Stethoscope, title: "Paediatrics", desc: "Newborn care, vaccinations, growth monitoring and gentle treatment for little ones." },
    { icon: Activity, title: "General Surgery", desc: "Modern laparoscopic & open surgical procedures in a fully equipped operating theatre." },
    { icon: ShieldCheck, title: "Gynaecology", desc: "Women's health consultations, screenings, and surgical care across every life stage." },
    { icon: Ambulance, title: "24×7 Emergency", desc: "Round-the-clock casualty, on-call doctors and quick response for time-critical cases." },
  ];
  return (
    <section id="services" className="relative bg-cream py-24 sm:py-32 bg-grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">What we do</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
              Specialist care, under <em className="italic gradient-text">one calm roof.</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">From new beginnings to complex surgical care — a full spectrum of services delivered with the same unhurried attention.</p>
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
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Enquire <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DOCTORS ---------- */
function Doctors() {
  const docs = [
    { img: doctor1, name: "Dr. Anjali Patil", role: "Obstetrics & Gynaecology", years: "15+ yrs" },
    { img: doctor2, name: "Dr. Rajeev Deshmukh", role: "Internal Medicine", years: "22+ yrs" },
  ];
  return (
    <section id="doctors" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Meet the team</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            The people behind your <em className="italic gradient-text">good days.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">A close-knit team of consultants who&apos;ve practiced in Pune for years — and who actually pick up the phone.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
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

/* ---------- FACILITIES ---------- */
function Facilities() {
  const items = [
    { img: otImg, title: "Modern Operating Theatre", tag: "Surgical Suite" },
    { img: maternityImg, title: "Maternity & Newborn Care", tag: "Mother & Child" },
    { img: roomImg, title: "Calm Private Rooms", tag: "Inpatient Care" },
  ];
  return (
    <section id="facilities" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>Inside Lopmudra</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl text-balance">
              Spaces designed for <em className="italic" style={{ color: "var(--gold)" }}>healing.</em>
            </h2>
          </div>
          <p className="max-w-md text-white/70">Every room, every corridor, every piece of equipment — chosen to make medical care feel a little less clinical.</p>
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
                <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>{it.tag}</div>
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
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" style={{ color: "var(--gold)" }} />)}
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
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: "var(--gold)" }} />)}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted-foreground">— {r.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VISIT ---------- */
function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">Plan your visit</span>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance text-primary-foreground">
                We&apos;re open. <em className="italic" style={{ color: "var(--gold)" }}>Let&apos;s talk.</em>
              </h2>
              <p className="mt-5 max-w-md text-primary-foreground/80">
                Book a consultation, ask about a procedure, or just call our front desk — we&apos;ll guide you through the next step.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow icon={MapPin} title="Address">
                  {ADDRESS}
                </ContactRow>
                <ContactRow icon={Phone} title="Phone">
                  <a href={`tel:${PHONE}`} className="hover:underline">{PHONE.replace("+91", "+91 ")}</a>
                </ContactRow>
                <ContactRow icon={Clock} title="Hours">
                  OPD: Mon–Sat, 9 AM – 9 PM · Emergency: 24×7
                </ContactRow>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20">
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>

            <div className="relative min-h-[400px] lg:min-h-full">
              <iframe
                title="Lopmudra Hospital location"
                src="https://www.google.com/maps?q=Lopmudra+Hospital+Pashan+Pune&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[20%]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-primary to-transparent lg:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href={WHATSAPP}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, type: "spring" }}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 backdrop-blur-md">
        <Icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">{title}</div>
        <div className="mt-1 text-sm text-primary-foreground/95">{children}</div>
      </div>
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">Lopmudra Hospital</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Compassionate multispeciality & maternity care, in the heart of Pashan, Pune.</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Visit</div>
            <p className="mt-4 text-sm text-muted-foreground">{ADDRESS}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Reach us</div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div><a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE.replace("+91", "+91 ")}</a></div>
              <div>OPD: 9 AM – 9 PM · Emergency 24×7</div>
              <div><a href={WHATSAPP} className="hover:text-primary">WhatsApp us</a></div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Lopmudra Hospital. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> Serving Pune since 2008
          </div>
        </div>
      </div>
    </footer>
  );
}
