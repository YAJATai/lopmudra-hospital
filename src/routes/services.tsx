import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Phone, Baby, HeartPulse, Stethoscope, Activity, ShieldCheck, Ambulance } from "lucide-react";
import { TextReveal } from "../components/text-reveal";

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
    <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,oklch(0.55_0.15_165/0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_70%_60%,oklch(0.99_0.003_85/0.04),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8"
        >
          <Sparkles className="h-3 w-3 text-emerald" /> What We Offer
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
    <section className="section-alt -mt-16 relative z-10">
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="card p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-1 bg-emerald/10 text-emerald">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl font-medium text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted flex-1">{s.desc}</p>
              <Link
                to="/appointments"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-navy transition-all hover:gap-2"
              >
                Book consultation <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-navy">Specialty Clinics</div>
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
              className="rounded-xl border border-border bg-white px-5 py-4 text-sm font-medium text-charcoal"
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
    <section className="py-32 section-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.55_0.15_165/0.1),transparent_70%)]" />
          <div className="relative">
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-white">
              Not sure what you need? We'll guide you.
            </TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/appointments"
                className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white bg-emerald transition-all hover:brightness-110"
              >
                <span className="relative flex items-center gap-2">Book Appointment <ArrowRight className="h-4 w-4" /></span>
              </Link>
              <a
                href="tel:+912025880000"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/90 transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
