import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Sparkles, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";
import heroImg from "@/assets/hero-hospital.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import otImg from "@/assets/ot.jpg";
import maternityImg from "@/assets/maternity.jpg";
import roomImg from "@/assets/room.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Photo gallery of Lopmudra Hospital — facilities, team, and spaces." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Exterior", "Interiors", "Medical", "Team"];
const images = [
  { src: heroImg, title: "Hospital Exterior", category: "Exterior" },
  { src: lobbyImg, title: "Reception & Lobby", category: "Interiors" },
  { src: otImg, title: "Modern Operating Theatre", category: "Medical" },
  { src: maternityImg, title: "Maternity Wing", category: "Medical" },
  { src: roomImg, title: "Private Patient Room", category: "Interiors" },
  { src: doctor1, title: "Dr. Anjali Patil", category: "Team" },
  { src: doctor2, title: "Dr. Rajeev Deshmukh", category: "Team" },
];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <div>
      <Hero />
      <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-navy text-white shadow-lg"
                  : "border border-border bg-white/70 text-muted hover:border-muted/30 hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.title}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setLightbox(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white transition-all hover:-translate-y-1 hover:shadow-xl ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <div className="flex items-center gap-2">
                  <Camera className="h-3.5 w-3.5 text-white/70" />
                  <span className="text-xs font-medium tracking-wide text-white/70 uppercase">{img.category}</span>
                </div>
                <div className="mt-1 font-display text-lg font-medium text-white">{img.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute right-5 top-5 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }}
            className="absolute right-16 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-5 text-center text-white">
              <div className="font-display text-xl font-medium">{filtered[lightbox].title}</div>
              <div className="mt-1 text-sm text-white/50 uppercase tracking-widest">{filtered[lightbox].category}</div>
            </div>
          </motion.div>
        </div>
      )}

      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_40%,oklch(0.55_0.15_165/0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_60%,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8"
        >
          <Sparkles className="h-3 w-3 text-emerald-400" /> Gallery
        </motion.div>
        <TextReveal
          as="h1"
          className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl"
          delay={0.3}
        >
          A glimpse inside Lopmudra.
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          Explore our facilities, meet our team, and see the spaces where compassionate healthcare happens.
        </motion.p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 bg-soft">
      <div className="mx-auto max-w-6xl px-6">
        <GlassPanel intensity="strong" className="relative overflow-hidden rounded-[2rem] p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.25_0.04_260/0.06),transparent_70%)]" />
          <div className="relative">
            <Camera className="mx-auto h-8 w-8 mb-6 text-navy" />
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]"
            >
              A visit is worth more.
            </TextReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/appointments"
                className="relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white bg-navy transition-all hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Schedule a Visit <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/facilities"
                className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-muted hover:text-charcoal transition-colors"
              >
                Explore Facilities
              </Link>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
