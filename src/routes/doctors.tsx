import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Stethoscope, Award, GraduationCap, Calendar, Star,
  ArrowRight, Sparkles, Mail, Phone, BookOpen,
} from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Meet the experienced team of doctors at Lopmudra Hospital in Pashan, Pune — specialists in obstetrics, gynaecology, internal medicine, paediatrics, and surgery." },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    name: "Dr. Anjali Patil",
    role: "Obstetrics & Gynaecology",
    experience: "15+ years",
    education: "MBBS, MS (OBGY) — B.J. Medical College, Pune",
    image: doctor1,
    bio: "Dr. Anjali Patil brings over 15 years of clinical experience in obstetrics and gynaecology. She has conducted over 2,000 deliveries and specialises in high-risk pregnancy management. Her patients describe her as calm, thorough, and deeply reassuring — the kind of doctor who remembers your name and your story.",
    specialties: ["High-Risk Pregnancy", "Normal & C-Section Delivery", "Laparoscopic Gynaecology", "Fertility Counselling"],
    certifications: ["Advanced Laparoscopic Surgery — AAGL", "High-Risk Obstetrics — FOGSI", "Ultrasound in OBGY — ISUOG"],
    patients: "3,000+",
    rating: 4.9,
  },
  {
    name: "Dr. Rajeev Deshmukh",
    role: "Internal Medicine",
    experience: "22+ years",
    education: "MBBS, MD (Internal Medicine) — AFMC, Pune",
    image: doctor2,
    bio: "With more than two decades in practice, Dr. Rajeev Deshmukh is a cornerstone of Lopmudra Hospital. He has extensive experience managing complex medical conditions including diabetes, hypertension, thyroid disorders, and chronic respiratory diseases. Known for his meticulous diagnostic approach and warm bedside manner, he is a favourite among patients and colleagues alike.",
    specialties: ["Diabetes & Metabolic Disorders", "Hypertension Management", "Respiratory Medicine", "Geriatric Care"],
    certifications: ["Diabetes Management — ADA", "Advanced Cardiac Life Support — AHA", "Infectious Disease — IDSA"],
    patients: "8,000+",
    rating: 4.8,
  },
];

const visitingConsultants = [
  { name: "Dr. Sanjay Kulkarni", role: "Paediatrician", day: "Mon, Wed, Fri" },
  { name: "Dr. Priyanka Joshi", role: "General Surgeon", day: "Tue, Thu, Sat" },
  { name: "Dr. Vikram Shah", role: "Orthopaedic Surgeon", day: "By appointment" },
  { name: "Dr. Neha Agarwal", role: "Dermatologist", day: "Sat only" },
  { name: "Dr. Amit Verma", role: "ENT Specialist", day: "Wed & Sat" },
  { name: "Dr. Smita Rao", role: "Ophthalmologist", day: "By appointment" },
];

function DoctorsPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedDoctors />
      <StatsSection />
      <VisitingConsultants />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-ink via-ink/95 to-primary overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.55_0.11_190/0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.75_0.12_75/0.06),transparent_50%)]" />
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
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Our Medical Team
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Experts who <em className="italic text-gold">care</em> <br />as much as you do.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Our doctors combine decades of experience with genuine compassion — because the best healthcare happens when expertise meets empathy.
        </motion.p>
      </motion.div>
    </section>
  );
}

function FeaturedDoctors() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="grid gap-10 md:grid-cols-2">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={doc.image}
                alt={doc.name}
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    <Award className="h-3.5 w-3.5" /> {doc.experience}
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-medium">{doc.name}</h2>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Stethoscope className="h-3.5 w-3.5" /> {doc.role}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium">
                  <Star className="h-4 w-4 fill-current text-gold" />
                  {doc.rating}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{doc.bio}</p>

              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" /> {doc.education}
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Specialties</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {doc.specialties.map((s) => (
                    <span key={s} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Certifications</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {doc.certifications.map((c) => (
                    <span key={c} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-6 border-t border-border pt-5">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{doc.patients} patients</span>
                </div>
                <Link
                  to="/appointments"
                  className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
                >
                  Book appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
          {[
            { icon: Stethoscope, value: "25+", label: "Specialist Doctors" },
            { icon: Award, value: "17+", label: "Years of Service" },
            { icon: Star, value: "11,000+", label: "Patients Treated" },
            { icon: BookOpen, value: "50+", label: "Medical Publications" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 bg-card px-6 py-12 text-center"
            >
              <stat.icon className="h-6 w-6 text-primary" />
              <div className="font-display text-4xl font-medium text-foreground">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitingConsultants() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Specialists</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Our visiting <em className="italic gradient-text">consultants.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">In addition to our in-house team, we host specialist consultants on scheduled days for referred care.</p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visitingConsultants.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.role}</div>
                <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Calendar className="h-3 w-3" /> {c.day}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-ink p-10 sm:p-16 text-center text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.75_0.12_75/0.08),transparent_60%)]" />
          <div className="relative">
            <QuoteIcon className="mx-auto h-8 w-8 text-gold/60" />
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
              "The best doctors <br className="sm:hidden" />give <em className="italic text-gold">the most attention.</em>"
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">
              Meet our team in person. Book a consultation and experience the difference that attentive, experienced doctors make.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5"
              >
                Book a Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Mail className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.139 11 15c0 1.93-1.57 3.5-3.5 3.5-1.797 0-3.146-1.18-2.917-3.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.139 22 15c0 1.93-1.57 3.5-3.5 3.5-1.797 0-3.146-1.18-2.917-3.179z" /></svg>;
}
