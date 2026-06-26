import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart, Shield, Monitor, Wind, BedDouble, Baby, Microscope, Syringe, Tv } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";
import { ParallaxImage } from "../components/parallax-image";
import otImg from "@/assets/ot.jpg";
import maternityImg from "@/assets/maternity.jpg";
import roomImg from "@/assets/room.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Modern facilities at Lopmudra Hospital — OT, ICU, NICU, maternity wing, private rooms, and diagnostics." },
    ],
  }),
  component: FacilitiesPage,
});

const features = [
  { image: otImg, title: "Modern Operating Theatre", tag: "Surgical Excellence", desc: "Modular OT with laminar airflow, advanced anaesthesia workstations, and multi-parameter monitors. 800+ procedures annually.", specs: ["2 surgical suites", "Laminar airflow", "Emergency power backup"] },
  { image: maternityImg, title: "Maternity & Newborn Wing", tag: "Mother & Child", desc: "Private birthing suites, neonatal resuscitation equipment, and round-the-clock paediatric nursing. 500+ deliveries annually.", specs: ["3 birthing suites", "4 NICU beds", "Newborn screening"] },
  { image: roomImg, title: "Private Patient Rooms", tag: "Comfort & Recovery", desc: "Calm, well-appointed rooms with attached bathrooms, call bell system, and dietary services.", specs: ["8 private rooms", "6 semi-private", "12 ward beds"] },
];

const all = [
  { icon: Microscope, title: "In-House Lab", desc: "Pathology with quick turnaround." },
  { icon: Monitor, title: "Digital X-Ray", desc: "Low-radiation imaging." },
  { icon: Wind, title: "Ultrasound", desc: "High-resolution scans." },
  { icon: BedDouble, title: "ICU", desc: "4-bed unit, 24×7 nursing." },
  { icon: Baby, title: "NICU", desc: "Incubators & phototherapy." },
  { icon: Syringe, title: "Pharmacy", desc: "In-house prescription drugs." },
];

function FacilitiesPage() {
  return (
    <div>
      <Hero />
      <Gallery />
      <AllFacilities />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-panel-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8">
          <Sparkles className="h-3 w-3 text-emerald-400" /> Inside Lopmudra
        </motion.div>
        <TextReveal as="h1" className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl" delay={0.3}>
          Spaces where healing happens.
        </TextReveal>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70">
          Every facility designed to create a safe, comfortable environment for healing.
        </motion.p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
      <div className="space-y-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="group overflow-hidden rounded-3xl border"
            style={{ borderColor: "oklch(0.9 0.005 200)" }}
          >
            <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <ParallaxImage src={f.image} alt={f.title} speed={0.15} className="h-full w-full" />
              </div>
              <div className={`p-8 sm:p-12 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>
                  {f.tag}
                </span>
                <h2 className="mt-3 font-display text-3xl font-medium">{f.title}</h2>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "oklch(0.5 0.01 200)" }}>{f.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.specs.map((s) => (
                    <span key={s} className="rounded-full border px-3 py-1 text-[11px] font-medium" style={{ borderColor: "oklch(0.9 0.005 200)" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AllFacilities() {
  return (
    <section className="py-32" style={{ background: "oklch(0.965 0.005 90)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "oklch(0.45 0.12 220)" }}>Complete Setup</div>
          <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">All under one roof.</TextReveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border p-6 transition-all hover:-translate-y-1"
              style={{ borderColor: "oklch(0.9 0.005 200)", background: "rgba(255,255,255,0.5)" }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl mb-4" style={{ background: "oklch(0.45 0.12 220 / 0.08)", color: "oklch(0.45 0.12 220)" }}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-medium">{f.title}</h3>
              <p className="mt-1 text-xs" style={{ color: "oklch(0.5 0.01 200)" }}>{f.desc}</p>
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
            <Shield className="mx-auto h-8 w-8 mb-6" style={{ color: "oklch(0.45 0.12 220)" }} />
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">Come see for yourself.</TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/appointments" className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white" style={{ background: "oklch(0.45 0.12 220)" }}>
                <span className="relative flex items-center gap-2">Schedule a Visit <ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link to="/contact" className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium" style={{ borderColor: "oklch(0.85 0.005 200)" }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
