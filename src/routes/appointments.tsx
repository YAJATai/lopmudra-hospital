import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  CalendarClock, Phone, ArrowRight, Sparkles, CheckCircle,
  Loader2, Heart, Clock, ShieldCheck, MessageCircle, Calendar,
  User, Stethoscope, FileText,
} from "lucide-react";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Book a consultation at Lopmudra Hospital in Pashan, Pune. Choose your preferred date, time, and specialist. Online appointment booking made easy." },
    ],
  }),
  component: AppointmentsPage,
});

const PHONE = "+912025880000";

const specialties = [
  "Maternity & Obstetrics",
  "General Medicine",
  "Paediatrics",
  "General Surgery",
  "Gynaecology",
  "Orthopaedics",
  "ENT",
  "Dermatology",
  "Ophthalmology",
  "General Checkup",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
  "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM",
];

function AppointmentsPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <section className="relative -mt-16 z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {submitted ? (
              <SuccessMessage />
            ) : (
              <BookingForm
                step={step}
                setStep={setStep}
                specialties={specialties}
                timeSlots={timeSlots}
                onSubmit={handleSubmit}
                sending={sending}
              />
            )}
          </div>
          <div className="space-y-6">
            <QuickInfo />
            <EmergencyCard />
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-ink overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.11_190/0.12),transparent_60%)]" />
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
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Book Online
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Book your <em className="italic text-gold">consultation</em><br />in minutes.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Choose your preferred date, time, and specialist. We'll confirm your appointment within 2 hours.
        </motion.p>
      </motion.div>
    </section>
  );
}

function BookingForm({
  step,
  setStep,
  specialties,
  timeSlots,
  onSubmit,
  sending,
}: {
  step: number;
  setStep: (s: number) => void;
  specialties: string[];
  timeSlots: string[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  sending: boolean;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl font-medium">Book Appointment</h2>
          <p className="mt-1 text-sm text-muted-foreground">Step {step} of 3</p>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 w-8 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {step === 1 && (
          <Step1 specialties={specialties} />
        )}
        {step === 2 && (
          <Step2 timeSlots={timeSlots} />
        )}
        {step === 3 && (
          <Step3 />
        )}

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Confirming...</>
              ) : (
                <><CalendarClock className="h-4 w-4" /> Confirm Appointment</>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Step1({ specialties }: { specialties: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="flex items-center gap-3 text-primary">
        <Stethoscope className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase tracking-[0.1em]">Choose Specialty</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">Select the department you'd like to consult.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {specialties.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSelected(s)}
            className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
              selected === s
                ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                : "border-border hover:border-primary/40 hover:bg-accent"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      {selected && (
        <input type="hidden" name="specialty" value={selected} />
      )}
    </motion.div>
  );
}

function Step2({ timeSlots }: { timeSlots: string[] }) {
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d;
  });

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="flex items-center gap-3 text-primary">
        <Calendar className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase tracking-[0.1em]">Pick Date & Time</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">Select your preferred date and time slot.</p>

      <div className="mt-5">
        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3">Available Dates</div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((d) => {
            const dateStr = d.toISOString().split("T")[0];
            const isSelected = selectedDate === dateStr;
            const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
            const dayNum = d.getDate();
            const month = d.toLocaleDateString("en-US", { month: "short" });
            const isToday = dateStr === today.toISOString().split("T")[0];

            return (
              <button
                key={dateStr}
                type="button"
                onClick={() => setSelectedDate(dateStr)}
                className={`flex shrink-0 flex-col items-center rounded-xl border px-4 py-3 transition-all ${
                  isSelected
                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                    : "border-border hover:border-primary/40"
                } ${isToday ? "ring-1 ring-gold/40" : ""}`}
              >
                <span className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{dayName}</span>
                <span className="mt-1 font-display text-xl font-medium">{dayNum}</span>
                <span className="text-[10px] text-muted-foreground">{month}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3">Available Time Slots</div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
            {timeSlots.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTime(t)}
                className={`rounded-lg border px-2 py-2 text-xs font-medium transition-all ${
                  selectedTime === t
                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                    : "border-border hover:border-primary/40"
                }`}
              >
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="flex items-center gap-3 text-primary">
        <User className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase tracking-[0.1em]">Your Details</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">Share your contact details so we can confirm your appointment.</p>

      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Phone Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98xxx xxxxx"
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
          />
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">Notes (optional)</label>
          <textarea
            rows={3}
            placeholder="Any specific concerns or preferences..."
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring resize-none"
          />
        </div>

        <div className="rounded-xl border border-border bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
            <div className="text-xs text-muted-foreground">
              Your information is kept confidential and will only be used to schedule your appointment.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SuccessMessage() {
  return (
    <div className="rounded-3xl border border-border bg-card p-10 sm:p-14 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h2 className="mt-6 font-display text-3xl font-medium">Appointment Requested!</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thank you! We've received your appointment request. Our team will confirm your booking via phone or SMS within 2 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
      <h3 className="font-display text-xl font-medium">Quick Info</h3>
      <div className="mt-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Clock className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">OPD Hours</div>
            <div className="text-sm">Mon–Sat, 9 AM – 9 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Phone</div>
            <a href={`tel:${PHONE}`} className="text-sm hover:text-primary">{PHONE.replace("+91", "+91 ")}</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">WhatsApp</div>
            <a href="https://wa.me/919999999999" className="text-sm hover:text-primary">Chat with us</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Walk-ins</div>
            <div className="text-sm">Welcome, but appointments preferred</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmergencyCard() {
  return (
    <div className="rounded-3xl border border-border bg-destructive/5 p-8">
      <h3 className="font-display text-xl font-medium text-destructive">Emergency?</h3>
      <p className="mt-2 text-sm text-muted-foreground">For urgent medical care, please call us directly. Do not use the online form.</p>
      <a
        href={`tel:${PHONE}`}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-destructive px-5 py-3.5 text-sm font-semibold text-destructive-foreground transition-all hover:-translate-y-0.5"
      >
        <Phone className="h-4 w-4" /> Call {PHONE.replace("+91", "+91 ")}
      </a>
    </div>
  );
}
