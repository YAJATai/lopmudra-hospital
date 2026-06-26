import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Sparkles, Phone, Calendar, Clock, CheckCircle, Loader2, MessageCircle } from "lucide-react";
import { TextReveal } from "../components/text-reveal";
import { GlassPanel } from "../components/glass-panel";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Book a consultation at Lopmudra Hospital. Choose your date, time, and specialist." },
    ],
  }),
  component: AppointmentsPage,
});

const PHONE = "+912025880000";
const specialties = ["Maternity & Obstetrics", "General Medicine", "Paediatrics", "General Surgery", "Gynaecology", "Orthopaedics", "ENT", "Dermatology", "Ophthalmology", "General Checkup"];
const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"];

function AppointmentsPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setSending(true); await new Promise((r) => setTimeout(r, 2000)); setSending(false); setSubmitted(true); };

  return (
    <div>
      <Hero />
      <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {submitted ? <Success /> : <Form step={step} setStep={setStep} onSubmit={handleSubmit} sending={sending} />}
          </div>
          <div className="space-y-4">
            <GlassPanel intensity="strong" className="p-6">
              <h3 className="font-display text-lg font-medium mb-4">Quick Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "oklch(0.45 0.12 220)" }} />
                  <div><div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>OPD Hours</div>Mon–Sat, 9 AM – 9 PM</div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "oklch(0.45 0.12 220)" }} />
                  <div><div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>Phone</div><a href={`tel:${PHONE}`} className="hover:opacity-70">{PHONE.replace("+91", "+91 ")}</a></div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "oklch(0.45 0.12 220)" }} />
                  <div><div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>WhatsApp</div><a href="https://wa.me/919999999999" className="hover:opacity-70">Chat with us</a></div>
                </div>
              </div>
            </GlassPanel>
            <GlassPanel intensity="strong" className="p-6" style={{ borderColor: "oklch(0.7 0.15 30 / 0.3)" }}>
              <h3 className="font-display text-lg font-medium mb-2" style={{ color: "oklch(0.5 0.2 25)" }}>Emergency?</h3>
              <p className="text-xs mb-4" style={{ color: "oklch(0.55 0.01 200)" }}>Do not use the online form. Call us directly.</p>
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white" style={{ background: "oklch(0.5 0.2 25)" }}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </GlassPanel>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_40%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-panel-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 mb-8">
          <Sparkles className="h-3 w-3 text-emerald-400" /> Book Online
        </motion.div>
        <TextReveal as="h1" className="font-display text-5xl sm:text-7xl font-medium leading-[0.95] text-white max-w-3xl" delay={0.3}>
          Book your consultation in minutes.
        </TextReveal>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70">
          Choose your preferred date, time, and specialist. We'll confirm within 2 hours.
        </motion.p>
      </div>
    </section>
  );
}

function Form({ step, setStep, onSubmit, sending }: { step: number; setStep: (s: number) => void; onSubmit: (e: React.FormEvent) => Promise<void>; sending: boolean }) {
  return (
    <GlassPanel intensity="strong" className="p-8 sm:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl font-medium">Book Appointment</h2>
          <p className="mt-1 text-sm" style={{ color: "oklch(0.5 0.01 200)" }}>Step {step} of 3</p>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="h-2 w-8 rounded-full transition-colors" style={{ background: s <= step ? "oklch(0.45 0.12 220)" : "oklch(0.9 0.005 200)" }} />
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {step === 1 && <Step1 specialties={specialties} />}
        {step === 2 && <Step2 timeSlots={timeSlots} />}
        {step === 3 && <Step3 />}

        <div className="mt-8 flex items-center justify-between border-t pt-6" style={{ borderColor: "oklch(0.92 0.005 200)" }}>
          {step > 1 ? (
            <button type="button" onClick={() => setStep(step - 1)} className="rounded-full border px-6 py-3 text-sm font-medium" style={{ borderColor: "oklch(0.9 0.005 200)" }}>
              ← Back
            </button>
          ) : <div />}
          {step < 3 ? (
            <button type="button" onClick={() => setStep(step + 1)} className="rounded-full px-8 py-3 text-sm font-medium text-white" style={{ background: "oklch(0.45 0.12 220)" }}>
              Continue →
            </button>
          ) : (
            <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-white disabled:opacity-70" style={{ background: "oklch(0.45 0.12 220)" }}>
              {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Confirming...</> : <><Calendar className="h-4 w-4" /> Confirm</>}
            </button>
          )}
        </div>
      </form>
    </GlassPanel>
  );
}

function Step1({ specialties }: { specialties: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "oklch(0.45 0.12 220)" }}>Choose Specialty</div>
      <div className="grid gap-3 sm:grid-cols-2">
        {specialties.map((s) => (
          <button key={s} type="button" onClick={() => setSelected(s)}
            className="rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all"
            style={selected === s ? { borderColor: "oklch(0.45 0.12 220)", background: "oklch(0.45 0.12 220 / 0.05)" } : { borderColor: "oklch(0.9 0.005 200)" }}>
            {s}
          </button>
        ))}
      </div>
      {selected && <input type="hidden" name="specialty" value={selected} />}
    </motion.div>
  );
}

function Step2({ timeSlots }: { timeSlots: string[] }) {
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => { const d = new Date(today); d.setDate(d.getDate() + i); return d; });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "oklch(0.45 0.12 220)" }}>Pick Date & Time</div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {dates.map((d) => {
          const ds = d.toISOString().split("T")[0];
          const isSel = selectedDate === ds;
          return (
            <button key={ds} type="button" onClick={() => setSelectedDate(ds)}
              className="flex shrink-0 flex-col items-center rounded-xl border px-4 py-3 transition-all"
              style={isSel ? { borderColor: "oklch(0.45 0.12 220)", background: "oklch(0.45 0.12 220 / 0.05)" } : { borderColor: "oklch(0.9 0.005 200)" }}>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>{d.toLocaleDateString("en", { weekday: "short" })}</span>
              <span className="font-display text-xl font-medium mt-1">{d.getDate()}</span>
              <span className="text-[10px]" style={{ color: "oklch(0.55 0.01 200)" }}>{d.toLocaleDateString("en", { month: "short" })}</span>
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          <div className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.01 200)" }}>Available Slots</div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
            {timeSlots.map((t) => (
              <button key={t} type="button" onClick={() => setSelectedTime(t)}
                className="rounded-lg border px-2 py-2 text-xs font-medium transition-all"
                style={selectedTime === t ? { borderColor: "oklch(0.45 0.12 220)", background: "oklch(0.45 0.12 220 / 0.05)" } : { borderColor: "oklch(0.9 0.005 200)" }}>
                {t}
              </button>
            ))}
          </div>
        </motion.div>
      )}
      {selectedDate && <input type="hidden" name="date" value={selectedDate} />}
      {selectedTime && <input type="hidden" name="time" value={selectedTime} />}
    </motion.div>
  );
}

function Step3() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "oklch(0.45 0.12 220)" }}>Your Details</div>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>Name *</label>
            <input type="text" required placeholder="Your name" className="glass-input mt-1.5" />
          </div>
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>Phone *</label>
            <input type="tel" required placeholder="+91 98xxx xxxxx" className="glass-input mt-1.5" />
          </div>
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>Email</label>
          <input type="email" placeholder="your@email.com" className="glass-input mt-1.5" />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.01 200)" }}>Notes</label>
          <textarea rows={3} placeholder="Any specific concerns..." className="glass-input mt-1.5 resize-none" />
        </div>
      </div>
    </motion.div>
  );
}

function Success() {
  return (
    <GlassPanel intensity="strong" className="p-12 sm:p-14 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full mb-6" style={{ background: "oklch(0.45 0.12 220)", color: "white" }}>
          <CheckCircle className="h-10 w-10" />
        </div>
        <h2 className="font-display text-3xl font-medium">Request Sent!</h2>
        <p className="mt-3 mx-auto max-w-md text-sm" style={{ color: "oklch(0.5 0.01 200)" }}>
          We'll confirm your booking via phone or SMS within 2 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="rounded-full px-6 py-3 text-sm font-medium text-white" style={{ background: "oklch(0.45 0.12 220)" }}>Back to Home</Link>
          <Link to="/services" className="rounded-full border px-6 py-3 text-sm font-medium" style={{ borderColor: "oklch(0.9 0.005 200)" }}>Explore Services</Link>
        </div>
      </motion.div>
    </GlassPanel>
  );
}
