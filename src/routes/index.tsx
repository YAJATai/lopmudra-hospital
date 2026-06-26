import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  Phone,
  Star,
  Heart,
  Users,
  Clock,
  Shield,
  Sparkles,
  ChevronRight,
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
      <TrustBar />
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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24">
        <div className="max-w-3xl">
          <GlassPanel glass className="glass-badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
            <Shield className="h-3 w-3 text-emerald" />
            Trusted by 1,000+ families since 2007
          </GlassPanel>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Care that feels personal.
            <br />
            Expertise that feels endless.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base text-white/65 sm:text-lg"
          >
            A multispeciality & maternity hospital in the heart of Pashan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-neutral-100"
            >
              Book an appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" /> Emergency
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Heart, value: "17+", label: "Years of Service" },
    { icon: Users, value: "50K+", label: "Patients Treated" },
    { icon: Shield, value: "25+", label: "Specialists" },
    { icon: Clock, value: "24×7", label: "Emergency Care" },
  ];

  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 divide-x divide-border rounded-2xl border border-border bg-surface md:grid-cols-4 md:divide-x">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 px-6 py-8 text-center">
            <item.icon className="h-5 w-5 text-navy" />
            <span className="font-display text-3xl font-medium text-charcoal">{item.value}</span>
            <span className="text-[11px] uppercase tracking-widest text-muted">{item.label}</span>
          </div>
        ))}
      </div>
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
            <GlassPanel glass className="glass-widget absolute -bottom-6 -right-6 max-w-xs p-6 lg:-right-8">
              <div className="flex items-center gap-2 text-sm font-medium text-navy">
                <Shield className="h-4 w-4" /> NABH-aligned Care
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Sterile OTs, modern ICU, and protocols built around patient safety.
              </p>
            </GlassPanel>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-navy">
              About Lopmudra
            </div>
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-charcoal"
            >
              A neighbourhood hospital, built on trust.
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-base leading-relaxed text-muted"
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
                <div key={item} className="flex items-center gap-3 rounded-xl bg-soft px-4 py-3 text-sm font-medium text-charcoal">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy" />
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
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
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

  const icons = [Heart, Shield, Users, Clock, Sparkles, Phone];

  return (
    <section className="section-alt relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-navy">What we do</div>
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-charcoal">
              Specialist care, under one roof.
            </TextReveal>
          </div>
          <Link
            to="/services"
            className="group hidden items-center gap-2 text-sm font-medium lg:flex text-navy"
          >
            View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="card group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-navy/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-navy">
                  <Sparkles className="h-2.5 w-2.5" /> {s.highlight}
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 text-center lg:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white"
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
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-navy">Our team</div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-charcoal">
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
              <GlassPanel glass className="absolute right-4 top-4 rounded-xl px-3 py-1.5 opacity-0 transition-opacity group-hover:opacity-100">
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
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
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
    <section className="relative bg-navy py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald">Inside Lopmudra</div>
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-white">
              Spaces designed for healing.
            </TextReveal>
          </div>
          <Link
            to="/facilities"
            className="group hidden items-center gap-2 text-sm font-medium lg:flex text-emerald"
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
                <div className="text-[10px] uppercase tracking-[0.25em] text-emerald">{it.tag}</div>
                <div className="mt-2 font-display text-2xl font-medium text-white">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center lg:hidden">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-medium text-white"
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
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-navy">Patient stories</div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-charcoal">
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
            <span className="font-medium text-charcoal">4.6 / 5</span>
            <span className="text-muted">· verified reviews</span>
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
              className="card"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current text-amber-400" />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug text-charcoal">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted">— {r.name}</figcaption>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative bg-soft py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-12 text-center sm:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.25_0.04_260/0.04),transparent_70%)]" />
          <div className="relative">
            <Heart className="mx-auto mb-6 h-8 w-8 text-navy" />
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-charcoal"
            >
              We're open. Let's talk.
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-md text-sm text-muted"
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
                className="relative overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-all hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-charcoal transition-colors hover:bg-black/5"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted"
            >
              <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> OPD: Mon–Sat, 9 AM – 9 PM</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {PHONE}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
