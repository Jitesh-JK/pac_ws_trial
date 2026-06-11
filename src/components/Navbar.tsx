import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'TEAM', href: '#team' },
  { label: 'RESOURCES', href: '#resources' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(2, 2, 8, 0.7)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-heading font-bold text-base tracking-[0.15em] text-white hover:text-neon-cyan transition-colors duration-300"
        >
          PAC
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-heading text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-neon-cyan transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* JOIN THE HUB — desktop */}
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center font-heading font-bold text-[10px] tracking-[0.18em] uppercase text-cyan-400 px-4 py-1.5 rounded-sm border border-cyan-500/40 transition-all duration-300 ease-in-out hover:bg-cyan-500/15 hover:border-cyan-400/70 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          >
            Join the Hub
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-neon-cyan transition-colors"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden absolute top-16 left-0 right-0 border-b border-white/10 overflow-hidden"
            style={{
              backgroundColor: 'rgba(2, 2, 8, 0.95)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-heading py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60 hover:text-neon-cyan transition-colors duration-300 border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              {/* JOIN THE CLUB — mobile drawer */}
              <a
                href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-cyan-400 px-4 py-3 rounded-sm border border-cyan-500/40 text-center transition-all duration-300 ease-in-out hover:bg-cyan-500/15 hover:border-cyan-400/70"
              >
                Join the Misson
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
