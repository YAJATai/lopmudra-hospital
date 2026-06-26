import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Baby, HeartPulse, Stethoscope, Activity, ShieldCheck, Ambulance,
  ArrowRight, Sparkles, Bone, Brain, Eye, Ear, Droplets,
  Pill, Syringe, Microscope, Scan, Thermometer,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Full range of multispeciality services at Lopmudra Hospital — maternity, paediatrics, general medicine, surgery, gynaecology, and 24×7 emergency care in Pashan, Pune." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Baby,
    title: "Maternity & Obstetrics",
    tag: "Most trusted",
    desc: "Comprehensive care from conception to postpartum. We offer antenatal checkups, normal & C-section deliveries, high-risk pregnancy management, and dedicated postnatal support for mother and baby. Our maternity wing is designed to feel like a home away from home.",
    features: ["Antenatal & Postnatal Care", "Normal & C-Section Delivery", "High-Risk Pregnancy Management", "Lactation Counselling", "Newborn Screening", "Parenting Classes"],
    color: "from-rose-500/20 to-pink-500/10",
    accent: "text-rose-500",
  },
  {
    icon: HeartPulse,
    title: "General Medicine",
    tag: "Everyday care",
    desc: "Our internal medicine team manages a wide spectrum of conditions — from acute fevers and infections to chronic diseases like diabetes, hypertension, thyroid disorders, and asthma. We emphasise preventive health and personalised treatment plans.",
    features: ["Fever & Infection Management", "Diabetes & Thyroid Care", "Cardiac Risk Assessment", "Respiratory Medicine", "Gastroenterology Consults", "Preventive Health Checkups"],
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-blue-500",
  },
  {
    icon: Stethoscope,
    title: "Paediatrics",
    tag: "Gentle & safe",
    desc: "From the first cry to adolescence, our paediatric team provides compassionate, evidence-based care. We specialise in newborn care, well-baby checks, immunisation, growth monitoring, and management of common childhood illnesses.",
    features: ["Newborn & Well-Baby Care", "Immunisation & Vaccination", "Growth & Development Monitoring", "Childhood Illness Management", "Adolescent Health", "Nutrition Counselling"],
    color: "from-emerald-500/20 to-green-500/10",
    accent: "text-emerald-500",
  },
  {
    icon: Activity,
    title: "General Surgery",
    tag: "Skilled hands",
    desc: "Our operating theatre is equipped for both laparoscopic (keyhole) and open surgeries. We cover hernia repairs, gallbladder removal, appendix surgeries, thyroidectomies, and other common procedures with minimal hospital stays.",
    features: ["Laparoscopic & Open Surgery", "Hernia & Appendix Surgery", "Gallbladder & Thyroid Surgery", "Minor Surgical Procedures", "Pre-Operative Assessment", "Post-Surgical Rehabilitation"],
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Gynaecology",
    tag: "Women first",
    desc: "Complete women's health services covering adolescence through menopause. From routine Pap smears and well-woman exams to management of fibroids, PCOS, endometriosis, and pelvic floor disorders — all in a comfortable, private setting.",
    features: ["Well-Woman Exams & Pap Smears", "PCOS & Endometriosis Care", "Menstrual Disorder Management", "Menopause Guidance", "Contraceptive Counselling", "Minimally Invasive Surgery"],
    color: "from-orange-500/20 to-amber-500/10",
    accent: "text-orange-500",
  },
  {
    icon: Ambulance,
    title: "24×7 Emergency",
    tag: "Always ready",
    desc: "Round-the-clock emergency services with on-call physicians, a fully stocked crash cart, and rapid response protocols. Our emergency team is trained to handle trauma, cardiac events, acute infections, and obstetric emergencies.",
    features: ["Immediate Triage & Stabilisation", "Cardiac & Trauma Emergency", "Obstetric Emergency Response", "In-House Lab & Imaging", "Critical Care Stabilisation", "Ambulance Coordination"],
    color: "from-red-500/20 to-rose-500/10",
    accent: "text-red-500",
  },
];

const additionalServices = [
  { icon: Bone, title: "Orthopaedics", desc: "Joint pain, fracture care, and arthritis management with referral to trusted specialists." },
  { icon: Brain, title: "Neurology", desc: "Headache, epilepsy, and stroke evaluation with specialist consultation." },
  { icon: Eye, title: "Ophthalmology", desc: "Vision checks, cataract screening, and eye infection treatment." },
  { icon: Ear, title: "ENT", desc: "Ear infections, sinusitis, tonsillitis, and hearing assessments." },
  { icon: Droplets, title: "Dermatology", desc: "Skin infections, allergies, acne treatment and minor procedures." },
  { icon: Microscope, title: "Lab & Diagnostics", desc: "In-house pathology lab, ECG, X-ray and ultrasound services." },
];

function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedServices />
      <AdditionalServices />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-ink overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.11_190/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.75_0.12_75/0.08),transparent_50%)]" />
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
          <Sparkles className="h-3.5 w-3.5 text-gold" /> What We Offer
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Complete care under <br /><em className="italic text-gold">one calm roof.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          From maternity to emergency medicine, every service is delivered with the same unhurried attention and clinical rigour that has defined Lopmudra for nearly two decades.
        </motion.p>
      </motion.div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="grid gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${service.accent}`}>
                  <Sparkles className="h-3 w-3" />
                  {service.tag}
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-3xl font-medium leading-tight">{service.title}</h2>
                </div>
              </div>
              <div className="lg:col-span-1">
                <p className="text-base leading-relaxed text-muted-foreground">{service.desc}</p>
              </div>
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-xs font-medium">
                      <span className={`${service.accent}`}>✦</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/appointments"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                >
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AdditionalServices() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">And More</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Specialty <em className="italic gradient-text">clinics & services.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">We also offer referral-based specialist consultations and diagnostics to cover every aspect of your health.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {additionalServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.75_0.12_75/0.1),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl text-balance text-primary-foreground">
                Not sure which service you need? <br /><em className="italic text-gold">We'll guide you.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">
                Call our front desk or book a consultation — our team will help you find the right specialist and schedule your visit.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                >
                  <HeartIcon className="h-4 w-4" /> Book Appointment
                </Link>
                <a
                  href="tel:+912025880000"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <PhoneIcon className="h-4 w-4" /> Call +91 20 2588 0000
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
}

function HeartIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
}
