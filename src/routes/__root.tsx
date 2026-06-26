import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Phone,
  Heart,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  MapPin,
  Calendar,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FloatingParticles } from "../components/floating-particles";

const PHONE = "+912025880000";
const WHATSAPP = "https://wa.me/919999999999";
const ADDRESS = "Survey No 148/4, Vishwakarma Nagar, Pashan–Sus Rd, near NIV, Pashan, Pune 411021";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full glass-panel-strong">
          <span className="font-display text-5xl font-medium text-foreground/40">404</span>
        </div>
        <h1 className="font-display text-4xl font-medium">Page not found</h1>
        <p className="mt-3 text-sm text-foreground/60">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-oklch(0.45 0.12 220) px-6 py-3 text-sm font-medium text-white"
        >
          Go home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full glass-panel-strong">
          <span className="text-3xl">!</span>
        </div>
        <h1 className="font-display text-4xl font-medium">Something went wrong</h1>
        <p className="mt-3 text-sm text-foreground/60">You can try refreshing or head back home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-oklch(0.45 0.12 220) px-6 py-3 text-sm font-medium text-white"
          >
            Try again
          </button>
          <Link to="/" className="rounded-full border border-border px-6 py-3 text-sm font-medium">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lopmudra Hospital, Pashan Pune" },
      { name: "description", content: "Multispeciality & maternity care in Pashan, Pune. 24×7 emergency." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body className="overflow-x-hidden">{children}<Scripts /></body>
    </html>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 80], [88, 64]);
  const navBlur = useTransform(scrollY, [0, 80], [0, 16]);
  const navOpacity = useTransform(scrollY, [0, 80], [0, 0.92]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{ height: navHeight }}
        className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-6 transition-all duration-300"
      >
        <motion.div
          style={{
            backdropFilter: `blur(${navBlur}px)`,
            WebkitBackdropFilter: `blur(${navBlur}px)`,
            background: navOpacity,
          }}
          className="absolute inset-0 rounded-2xl glass-panel-strong"
        />
        <div className="relative z-10 flex w-full items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-oklch(0.45 0.12 220) text-white">
              <Heart className="h-4 w-4" />
            </div>
            <span className="font-display text-base font-medium tracking-tight">Lopmudra</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-3 py-2 text-sm font-medium transition-colors"
                  style={{ color: isActive ? "oklch(0.45 0.12 220)" : "oklch(0.3 0.01 200 / 0.8)" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                      style={{ background: "oklch(0.45 0.12 220)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-medium" style={{ color: "oklch(0.45 0.12 220)" }}>
              <Phone className="h-3.5 w-3.5" /> {PHONE.replace("+91", "+91 ")}
            </a>
            <Link
              to="/appointments"
              className="relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-[0_8px_30px_oklch(0.45_0.12_220/0.3)]"
              style={{ background: "oklch(0.45 0.12 220)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Book Now <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="relative z-10 grid h-9 w-9 place-items-center rounded-xl border lg:hidden" style={{ borderColor: "oklch(0.9 0.005 200)" }}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-strong mx-5 mt-2 rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                    style={{
                      background: isActive ? "oklch(0.45 0.12 220 / 0.08)" : "transparent",
                      color: isActive ? "oklch(0.45 0.12 220)" : "oklch(0.3 0.01 200)",
                    }}
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 opacity-40" />
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2 border-t pt-3" style={{ borderColor: "oklch(0.9 0.005 200)" }}>
                <Link
                  to="/appointments"
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white"
                  style={{ background: "oklch(0.45 0.12 220)" }}
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
                <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 rounded-full border py-3 text-sm font-medium">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "oklch(0.92 0.005 200)" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-oklch(0.96 0.005 90/0.5) pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "oklch(0.45 0.12 220)", color: "white" }}>
                <Heart className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-medium">Lopmudra</span>
            </div>
            <p className="mt-4 max-w-xs text-sm" style={{ color: "oklch(0.5 0.01 200)" }}>
              Multispeciality & maternity care in the heart of Pashan, Pune.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.45 0.12 220)" }}>Navigate</div>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className="text-sm transition-colors hover:opacity-70" style={{ color: "oklch(0.4 0.01 200)" }}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.45 0.12 220)" }}>Services</div>
            <div className="space-y-2.5 text-sm" style={{ color: "oklch(0.4 0.01 200)" }}>
              <div>Maternity & Obstetrics</div>
              <div>General Medicine</div>
              <div>Paediatrics</div>
              <div>General Surgery</div>
              <div>Gynaecology</div>
              <div>24×7 Emergency</div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.45 0.12 220)" }}>Contact</div>
            <div className="space-y-3 text-sm" style={{ color: "oklch(0.4 0.01 200)" }}>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:opacity-70">{PHONE.replace("+91", "+91 ")}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span>OPD: 9 AM – 9 PM · 24×7 Emergency</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <a href="mailto:care@lopmudrahospital.com" className="hover:opacity-70">care@lopmudrahospital.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center" style={{ borderColor: "oklch(0.92 0.005 200)", color: "oklch(0.55 0.01 200)" }}>
          <div>© {new Date().getFullYear()} Lopmudra Hospital.</div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:opacity-70">About</Link>
            <Link to="/contact" className="hover:opacity-70">Contact</Link>
            <Link to="/appointments" className="hover:opacity-70">Book Appointment</Link>
          </div>
        </div>
      </div>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <FloatingParticles count={15} />
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
