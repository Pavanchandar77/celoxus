import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';

export const CeloxusLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Inner Mesh */}
    <g stroke="currentColor" strokeWidth="1.5" className="opacity-30 text-slate-400">
      <line x1="25" y1="10" x2="75" y2="90" />
      <line x1="75" y1="10" x2="25" y2="90" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="25" y1="10" x2="75" y2="10" />
      <line x1="25" y1="90" x2="75" y2="90" />
      <line x1="25" y1="10" x2="5" y2="50" />
      <line x1="5" y1="50" x2="25" y2="90" />
      <line x1="75" y1="10" x2="95" y2="50" />
      <line x1="95" y1="50" x2="75" y2="90" />
    </g>
    
    {/* Outer Hexagon */}
    <path d="M 25 10 L 75 10 L 95 50 L 75 90 L 25 90 L 5 50 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* The bold C */}
    <path d="M 82 25 A 35 35 0 1 0 82 75" stroke="#049fd9" strokeWidth="8" strokeLinecap="round" fill="none" />

    {/* Nodes (Circles) */}
    <g fill="currentColor" className="text-slate-400">
      <circle cx="25" cy="10" r="4" />
      <circle cx="50" cy="10" r="4" />
      <circle cx="75" cy="10" r="4" />
      
      <circle cx="5" cy="50" r="4" />
      <circle cx="47" cy="50" r="4" />
      <circle cx="70" cy="50" r="4" />
      <circle cx="95" cy="50" r="4" />
      
      <circle cx="25" cy="90" r="4" />
      <circle cx="50" cy="90" r="4" />
      <circle cx="75" cy="90" r="4" />
      
      {/* Node where C interacts */}
      <circle cx="82" cy="75" r="4" fill="#049fd9" />
      <circle cx="82" cy="25" r="4" fill="#049fd9" />
    </g>
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? 'rgba(12,12,16,0.65)' : 'rgba(12,12,16,0)',
            borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-14 items-center justify-between rounded-full border px-5 backdrop-blur-xl"
          style={{ backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none' }}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <CeloxusLogo className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
            <span className="font-display text-lg font-medium tracking-tight text-white">Celoxus</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {[
              { to: '/products', label: 'Products' },
              { to: '/services', label: 'Services' },
              { to: '/case-studies', label: 'Customers' },
              { to: '/about', label: 'Company' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 shadow-[0_4px_20px_-4px_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.08)] md:inline-flex"
            >
              <span className="relative">Book a demo</span>
              <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <button
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl px-6 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-ink-900/80 p-3 backdrop-blur-xl">
              {[
                { to: '/products', label: 'Products' },
                { to: '/services', label: 'Professional Services' },
                { to: '/case-studies', label: 'Customers' },
                { to: '/about', label: 'Company' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink-950"
              >
                Book a demo <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950 pb-10 pt-24 text-slate-400">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-12">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="group flex items-center gap-2.5">
              <CeloxusLogo className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
              <span className="font-display text-lg font-medium tracking-tight text-white">Celoxus</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-slate-400">
              The infrastructure layer for modern enterprise voice — engineered by CCIE-certified architects.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a href="tel:+14699944602" className="group inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5 text-accent-300" />
                +1 469 994 4602
              </a>
              <a href="mailto:info@celoxus.com" className="group inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white">
                <Mail className="h-3.5 w-3.5 text-accent-300" />
                info@celoxus.com
              </a>
            </div>
          </div>

          <FooterCol title="Products" links={[
            { to: '/products', label: 'Finesse Notifications' },
            { to: '/products', label: 'Contact Center Monitoring' },
            { to: '/products', label: 'Custom Integration' },
          ]} />
          <FooterCol title="Services" links={[
            { to: '/services', label: 'Cisco Calling' },
            { to: '/services', label: 'Cisco Contact Center' },
            { to: '/services', label: 'Cloud Applications' },
          ]} />
          <FooterCol title="Company" links={[
            { to: '/about', label: 'About' },
            { to: '/case-studies', label: 'Customers' },
            { to: '/contact', label: 'Contact' },
          ]} />
          <FooterCol title="Legal" links={[
            { to: '/legal/privacy', label: 'Privacy' },
            { to: '/legal/terms', label: 'Terms' },
          ]} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs font-light text-slate-500 md:flex-row md:items-center">
          <div>
            &copy; {new Date().getFullYear()} Celoxus Systems Inc. · Based in Bangalore, India
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }: { title: string; links: { to: string; label: string }[] }) => (
  <div className="col-span-1 md:col-span-2">
    <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{title}</h4>
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l.label}>
          <Link to={l.to} className="text-sm font-light text-slate-300 transition-colors hover:text-white">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1 bg-ink-950">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
