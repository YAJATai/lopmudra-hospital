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
import { useEffect, useState, type ReactNode } from "react";
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
        <h1 className="font-display text-4xl font-medium">Page not found</h1>
        <p className="mt-3 text-sm text-muted">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white"
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
        <h1 className="font-display text-4xl font-medium">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted">You can try refreshing or head back home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-navy px-6 py-3 text-sm font-medium text-white">
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-2.5 2-5 2-7 0-4-3-7-7-7s-7 3-7 7c0 2 1 4.5 2 7"/><path d="M12 7v6"/><path d="M9 10h6"/></svg>
          </div>
          <span className={`font-display text-base font-medium tracking-tight transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}>Lopmudra</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-navy"
                    : scrolled
                      ? "text-charcoal/70 hover:text-charcoal"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${PHONE}`} className={`text-sm font-medium ${scrolled ? "text-navy" : "text-white/80"}`}>
            <Phone className="mr-1.5 inline h-3.5 w-3.5" />
            {PHONE.replace("+91", "+91 ")}
          </a>
          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            Book Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className={`grid h-9 w-9 place-items-center rounded-lg border lg:hidden ${scrolled ? "border-border" : "border-white/20"}`}>
          {open ? <X className={`h-4 w-4 ${scrolled ? "" : "text-white"}`} /> : <Menu className={`h-4 w-4 ${scrolled ? "" : "text-white"}`} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-border bg-white p-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-charcoal/80 hover:bg-soft"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-40" />
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t pt-3">
              <Link to="/appointments" className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-medium text-white">
                Book Appointment
              </Link>
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 rounded-full border py-3 text-sm font-medium">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-2.5 2-5 2-7 0-4-3-7-7-7s-7 3-7 7c0 2 1 4.5 2 7"/><path d="M12 7v6"/><path d="M9 10h6"/></svg>
              </div>
              <span className="font-display text-lg font-medium">Lopmudra</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Multispeciality & maternity care in the heart of Pashan, Pune.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">Navigate</div>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className="text-sm text-muted transition-colors hover:text-charcoal">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">Services</div>
            <div className="space-y-2.5 text-sm text-muted">
              <div>Maternity & Obstetrics</div>
              <div>General Medicine</div>
              <div>Paediatrics</div>
              <div>General Surgery</div>
              <div>Gynaecology</div>
              <div>24×7 Emergency</div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">Contact</div>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-navy" />
                <a href={`tel:${PHONE}`} className="hover:text-charcoal">{PHONE.replace("+91", "+91 ")}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-navy" />
                <span>OPD: 9 AM – 9 PM · 24×7 Emergency</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-navy" />
                <a href="mailto:care@lopmudrahospital.com" className="hover:text-charcoal">care@lopmudrahospital.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <div>&copy; {new Date().getFullYear()} Lopmudra Hospital.</div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-charcoal">About</Link>
            <Link to="/contact" className="hover:text-charcoal">Contact</Link>
            <Link to="/appointments" className="hover:text-charcoal">Book Appointment</Link>
          </div>
        </div>
      </div>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald text-white shadow-lg transition-transform hover:scale-110"
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
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
