import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart, Star, Award, Calendar, Stethoscope } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";
import { ParallaxImage } from "../components/parallax-image";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Meet our team of doctors at Lopmudra Hospital in Pashan, Pune." },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    img: doctor1, name: "Dr. Anjali Patil", role: "Obstetrics & Gynaecology", exp: "15+ years",
    edu: "MBBS, MS (OBGY) — B.J. Medical College, Pune",
    bio: "Over 2,000 deliveries performed. Specialises in high-risk pregnancy management. Patients describe her as calm, thorough, and deeply reassuring.",
    specialties: ["High-Risk Pregnancy", "Laparoscopic Gynaecology", "Fertility Counselling"],
    patients: "3,000+", rating: 4.9,
  },
  {
    img: doctor2, name: "Dr. Rajeev Deshmukh", role: "Internal Medicine", exp: "22+ years",
    edu: "MBBS, MD (Internal Medicine) — AFMC, Pune",
    bio: "Extensive experience managing diabetes, hypertension, thyroid disorders, and chronic respiratory diseases. Known for meticulous diagnostic approach.",
    specialties: ["Diabetes & Metabolic", "Hypertension", "Geriatric Care"],
    patients: "8,000+", rating: 4.8,
  },
];

function DoctorsPage() {
  return (
    <div>
      <Hero />
      <Profiles />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center"
      style={{ background: "linear-gradient(135deg, oklch(0.25 0.04 260), oklch(0.15 0.03 250))" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_60%_40%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8"
        >
          <Sparkles className="h-3 w-3 text-emerald" /> Our Team
        </motion.div>
        <TextReveal as="h1" className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl" delay={0.3}>
          Experts who care as much as you do.
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          Our doctors combine decades of experience with genuine compassion.
        </motion.p>
      </div>
    </section>
  );
}

function Profiles() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
      <div className="grid gap-8 lg:grid-cols-2">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="card overflow-hidden"
          >
            <div className="grid sm:grid-cols-2">
              <div className="aspect-[3/4] sm:aspect-auto overflow-hidden">
                <ParallaxImage src={doc.img} alt={doc.name} speed={0.15} className="h-full w-full" />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald">
                      <Award className="h-3.5 w-3.5" /> {doc.exp}
                    </div>
                    <h2 className="mt-2 font-display text-3xl font-medium">{doc.name}</h2>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <Stethoscope className="h-3.5 w-3.5" /> {doc.role}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium border-border">
                    <Star className="h-4 w-4 fill-current text-emerald" /> {doc.rating}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{doc.bio}</p>
                <div className="mt-3 text-xs text-muted">{doc.edu}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {doc.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-3 py-1 text-[11px] font-medium"
                      style={{ background: "oklch(0.55 0.15 165 / 0.1)", color: "oklch(0.55 0.15 165)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t pt-4 border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <Calendar className="h-3.5 w-3.5 text-emerald" /> {doc.patients} patients
                  </span>
                  <Link
                    to="/appointments"
                    className="ml-auto flex items-center gap-1.5 text-xs font-medium text-emerald"
                  >
                    Book <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 bg-soft">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card relative overflow-hidden p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.55_0.15_165/0.06),transparent_70%)]" />
          <div className="relative">
            <Heart className="mx-auto h-8 w-8 mb-6 text-emerald" />
            <TextReveal as="h2" className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">
              Meet us in person.
            </TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/appointments"
                className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white bg-emerald"
              >
                <span className="relative flex items-center gap-2">
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium border-border"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
