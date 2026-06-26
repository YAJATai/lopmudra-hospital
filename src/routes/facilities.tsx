import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Sparkles, ArrowRight, ShieldCheck, Syringe, BedDouble,
  Baby, Microscope, Wind, Tv, Wifi, Thermometer,
  Monitor, Smile, Ambulance,
} from "lucide-react";
import otImg from "@/assets/ot.jpg";
import maternityImg from "@/assets/maternity.jpg";
import roomImg from "@/assets/room.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Our Facilities | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Explore the modern facilities at Lopmudra Hospital — fully equipped OT, ICU, NICU, maternity wing, private rooms, and in-house diagnostics in Pashan, Pune." },
    ],
  }),
  component: FacilitiesPage,
});

const facilities = [
  {
    image: otImg,
    title: "Modern Operating Theatre",
    tag: "Surgical Excellence",
    desc: "Our modular OT is equipped with advanced anaesthesia workstations, multi-parameter monitors, surgical diathermy, and LED surgical lights. We maintain strict sterile protocols and follow NABH-aligned safety standards for every procedure.",
    features: ["Laminar airflow to minimise infection risk", "Multi-parameter patient monitoring", "Anaesthesia workstation with ventilator", "Digital X-ray & C-arm compatibility", "Emergency power backup & UPS"],
    specs: [
      { label: "Surgical Suites", value: "2" },
      { label: "Annual Procedures", value: "800+" },
      { label: "Sterilisation", value: "Autoclave + ETO" },
    ],
  },
  {
    image: maternityImg,
    title: "Maternity & Newborn Care",
    tag: "Mother & Child",
    desc: "A warm, well-equipped maternity wing designed for safe deliveries and comfortable recovery. Our birthing suites combine clinical safety with a homelike atmosphere. The nursery is staffed round-the-clock by experienced paediatric nurses.",
    features: ["Private birthing suites with attached bathrooms", "Neonatal resuscitation equipment (Radiant warmer)", "Newborn screening & immunisation", "Lactation counselling room", "Postnatal physiotherapy support"],
    specs: [
      { label: "Delivery Suites", value: "3" },
      { label: "Annual Deliveries", value: "500+" },
      { label: "NICU Beds", value: "4" },
    ],
  },
  {
    image: roomImg,
    title: "Patient Rooms & Inpatient Care",
    tag: "Comfort & Recovery",
    desc: "Our inpatient rooms are designed to feel calm and restful. Each room comes with an attached bathroom, called nursing station access, and amenities to make your stay as comfortable as possible during recovery.",
    features: ["Private, semi-private & general wards", "Attached bathrooms with safety grab bars", "Call bell & nurse response system", "TV, WiFi, and room climate control", "Dietary services with custom meal plans"],
    specs: [
      { label: "Private Rooms", value: "8" },
      { label: "Semi-Private Rooms", value: "6" },
      { label: "General Ward Beds", value: "12" },
    ],
  },
];

const otherFacilities = [
  { icon: Microscope, title: "In-House Lab", desc: "Pathology lab for blood tests, urine analysis, and microbiology with quick turnaround." },
  { icon: Monitor, title: "Digital X-Ray", desc: "Low-radiation digital X-ray for chest, bone, and abdominal imaging." },
  { icon: Wind, title: "Ultrasound", desc: "High-resolution ultrasound for obstetric, abdominal, and pelvic scans." },
  { icon: BedDouble, title: "Intensive Care Unit (ICU)", desc: "4-bed ICU with multi-parameter monitors, ventilators, and 24×7 nursing." },
  { icon: Baby, title: "Neonatal ICU (NICU)", desc: "Dedicated NICU with incubators, phototherapy, and neonatal monitoring." },
  { icon: Ambulance, title: "Emergency Room", desc: "Fully equipped casualty with triage, crash cart, and immediate specialist access." },
  { icon: Syringe, title: "Pharmacy", desc: "In-house pharmacy stocked with essential medicines and prescription drugs." },
  { icon: Tv, title: "Patient Amenities", desc: "Clean linens, meal service, waiting lounge, and wheelchair access throughout." },
];

function FacilitiesPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedFacilities />
      <AllFacilities />
      <VirtualTour />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-ink via-ink/95 to-primary overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.55_0.11_190/0.1),transparent_60%)]" />
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
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Inside Lopmudra
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Spaces where <em className="italic text-gold">healing</em> happens.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Every facility at Lopmudra is designed with one purpose — to create a safe, comfortable environment where patients can heal and families can feel at ease.
        </motion.p>
      </motion.div>
    </section>
  );
}

function FeaturedFacilities() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="space-y-10">
        {facilities.map((facility, i) => (
          <motion.div
            key={facility.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className={`p-8 sm:p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <Sparkles className="h-3 w-3" />
                  {facility.tag}
                </div>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">{facility.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{facility.desc}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {facility.specs.map((spec) => (
                    <div key={spec.label} className="rounded-xl border border-border/60 bg-background/60 p-3 text-center">
                      <div className="font-display text-xl font-semibold text-foreground">{spec.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{spec.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  {facility.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <span className="text-primary">✦</span>
                      <span>{f}</span>
                    </div>
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
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Complete Setup</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
            Everything you need, <em className="italic gradient-text">all under one roof.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">From diagnostics to recovery — we've got every aspect of your care covered.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherFacilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VirtualTour() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Take a Look</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
              See Lopmudra <em className="italic gradient-text">before you visit.</em>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We believe in transparency — which is why we encourage you to visit the hospital in person. 
              Walk through our corridors, see our OTs, meet our staff, and decide for yourself. 
              No appointment needed for a facility tour during working hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                Schedule a Visit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-all hover:bg-accent"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {[otImg, maternityImg, roomImg, otImg].map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border border-border ${
                  i === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-ink text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <div className="relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,oklch(0.75_0.12_75/0.08),transparent_60%)]" />
            <div className="relative">
              <ShieldCheck className="mx-auto h-8 w-8 text-gold/60" />
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
                Ready to experience our facilities <br /><em className="italic text-gold">firsthand?</em>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">
                Come see for yourself why Lopmudra is Pashan's most trusted hospital. We'd be happy to show you around.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5"
                >
                  <HeartIcon className="h-4 w-4" /> Book a Tour
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
}
