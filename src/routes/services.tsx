import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Phone, Baby, HeartPulse, Stethoscope, Activity, ShieldCheck, Ambulance } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Multispeciality services at Lopmudra Hospital — maternity, paediatrics, general medicine, surgery, gynaecology, and 24×7 emergency." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Baby, title: "Maternity", desc: "Antenatal care, normal & C-section deliveries, high-risk pregnancy management.", tag: "1,200+ yearly" },
  { icon: HeartPulse, title: "General Medicine", desc: "Diabetes, hypertension, thyroid, respiratory care, and preventive health.", tag: "Most visited" },
  { icon: Stethoscope, title: "Paediatrics", desc: "Newborn care, vaccinations, growth monitoring, and childhood illness management.", tag: "0–16 years" },
  { icon: Activity, title: "General Surgery", desc: "Laparoscopic & open procedures — hernia, gallbladder, appendix, and more.", tag: "800+ procedures" },
  { icon: ShieldCheck, title: "Gynaecology", desc: "Well-woman exams, PCOS, menopause, and minimally invasive surgery.", tag: "All ages" },
  { icon: Ambulance, title: "24×7 Emergency", desc: "Round-the-clock casualty with on-call doctors and rapid response.", tag: "Always open" },
];

const extras = ["Orthopaedics", "Neurology", "ENT", "Dermatology", "Ophthalmology", "Lab & Diagnostics"];

function ServicesPage() {
  return (
    <div>
      <Hero />
      <Grid />
      <Extras />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_60%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8"
        >
          <Sparkles className="h-3 w-3 text-emerald-400" /> What We Offer
        </motion.div>
        <TextReveal
          as="h1"
          className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl"
          delay={0.3}
        >
          Complete care under one calm roof.
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          From maternity to emergency medicine — every service delivered with the same unhurried attention.
        </motion.p>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1"
            style={{ borderColor: "oklch(0.9 0.005 200)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "oklch(0.45 0.12 220)", color: "white" }}>
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-1" style={{ background: "oklch(0.45 0.12 220 / 0.1)", color: "oklch(0.45 0.12 220)" }}>
                {s.tag}
              </span>
            </div>
            <h3 className="font-display text-2xl font-medium">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}>{s.desc}</p>
            <Link
              to="/appointments"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium transition-opacity opacity-0 group-hover:opacity-100"
              style={{ color: "oklch(0.45 0.12 220)" }}
            >
              Book consultation <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="py-32" style={{ background: "oklch(0.965 0.005 90)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>Specialty Clinics</div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">Additional services.</TextReveal>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map((e, i) => (
            <motion.div
              key={e}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border px-5 py-4 text-sm font-medium"
              style={{ borderColor: "oklch(0.9 0.005 200)", background: "rgba(255,255,255,0.4)" }}
            >
              {e}
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
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">
              Not sure what you need? We'll guide you.
            </TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/appointments"
                className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white"
                style={{ background: "oklch(0.45 0.12 220)" }}
              >
                <span className="relative flex items-center gap-2">Book Appointment <ArrowRight className="h-4 w-4" /></span>
              </Link>
              <a href="tel:+912025880000" className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium" style={{ borderColor: "oklch(0.85 0.005 200)" }}>
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
