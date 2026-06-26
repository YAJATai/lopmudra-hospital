import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Sparkles, ArrowRight, Camera, X, ChevronLeft, ChevronRight,
} from "lucide-react";
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
      { name: "description", content: "Photo gallery of Lopmudra Hospital in Pashan, Pune — see our facilities, maternity wing, operating theatre, patient rooms, and team." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Exterior", "Interiors", "Medical", "Team"];

const images = [
  { src: heroImg, title: "Hospital Exterior", category: "Exterior", desc: "Lopmudra Hospital — welcoming facade on Pashan-Sus Road." },
  { src: lobbyImg, title: "Reception & Lobby", category: "Interiors", desc: "Warm, welcoming reception area designed for comfort." },
  { src: otImg, title: "Modern Operating Theatre", category: "Medical", desc: "Fully equipped modular OT with laminar airflow." },
  { src: maternityImg, title: "Maternity Wing", category: "Medical", desc: "Private birthing suite with neonatal care station." },
  { src: roomImg, title: "Private Patient Room", category: "Interiors", desc: "Calm, comfortable room designed for restful recovery." },
  { src: doctor1, title: "Dr. Anjali Patil", category: "Team", desc: "Senior Obstetrician & Gynaecologist with 15+ years experience." },
  { src: doctor2, title: "Dr. Rajeev Deshmukh", category: "Team", desc: "Internal Medicine specialist with 22+ years experience." },
  { src: heroImg, title: "Night View", category: "Exterior", desc: "Hospital entrance beautifully lit at night." },
  { src: roomImg, title: "Nursing Station", category: "Interiors", desc: "24×7 nursing station with call bell response system." },
  { src: otImg, title: "Surgical Team", category: "Medical", desc: "Our skilled surgical team in action." },
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <GalleryGrid
        images={filtered}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        openLightbox={openLightbox}
      />

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-5 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-5 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
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
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="h-full w-full rounded-2xl object-contain"
            />
            <div className="mx-auto mt-4 max-w-lg text-center">
              <div className="font-display text-xl font-medium text-white">{filtered[lightboxIndex].title}</div>
              <div className="mt-1 text-sm text-white/70">{filtered[lightboxIndex].desc}</div>
            </div>
          </motion.div>
        </div>
      )}

      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-ink overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,oklch(0.55_0.11_190/0.1),transparent_60%)]" />
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
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Gallery
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          A glimpse inside <em className="italic text-gold">Lopmudra.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Explore our facilities, meet our team, and see the spaces where compassionate healthcare happens every day.
        </motion.p>
      </motion.div>
    </section>
  );
}

function GalleryGrid({
  images,
  categories,
  activeCategory,
  setActiveCategory,
  openLightbox,
}: {
  images: typeof galleryImages;
  categories: string[];
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  openLightbox: (i: number) => void;
}) {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                : "border border-border bg-card text-muted-foreground hover:bg-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((img, i) => (
          <motion.div
            key={`${img.title}-${i}`}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => openLightbox(i)}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border transition-all hover:shadow-[var(--shadow-soft)] ${
              i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <div className={`${i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"} overflow-hidden`}>
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center gap-2">
                <Camera className="h-3.5 w-3.5 text-gold" />
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{img.category}</div>
              </div>
              <div className="mt-1 font-display text-lg font-medium text-white">{img.title}</div>
              <div className="text-xs text-white/70">{img.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const galleryImages = images;

function CTASection() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-ink text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <div className="relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,oklch(0.75_0.12_75/0.08),transparent_60%)]" />
            <div className="relative">
              <Camera className="mx-auto h-8 w-8 text-gold/60" />
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
                A picture is worth a thousand words.<br />
                A visit is worth <em className="italic text-gold">even more.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">
                Come see Lopmudra for yourself. Schedule a visit and experience the difference firsthand.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5"
                >
                  <HeartIcon className="h-4 w-4" /> Schedule a Visit
                </Link>
                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Explore Facilities
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
