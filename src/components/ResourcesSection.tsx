import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Linkedin, Mail, Phone, Network, CalendarDays } from 'lucide-react';

/* ─────────────────────────────────────────────
   Data — Session tiles (left column)
───────────────────────────────────────────── */
const SESSIONS = [
  {
    id: 1,
    title: 'Session 06 // Pulsar Timing & Dispersion Measures',
    img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=700',
    tags: ['PPTX', 'PDF'],
    date: 'DEC 2025',
  },
  {
    id: 2,
    title: 'Session 05 // Spectroscopy & Emission Line Analysis',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=700',
    tags: ['PPTX', 'PDF'],
    date: 'NOV 2025',
  },
  {
    id: 3,
    title: 'Session 04 // Telescope Optics & Focal Length Ratios',
    img: 'https://images.unsplash.com/photo-1532978379173-523e16f371f2?q=80&w=700',
    tags: ['PDF'],
    date: 'OCT 2025',
  },
  {
    id: 4,
    title: 'Session 03 // Celestial Coordinate Systems & Sky Mapping',
    img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=700',
    tags: ['PPTX', 'PDF'],
    date: 'SEP 2025',
  },
  {
    id: 5,
    title: "Session 02 // Kepler's Laws & Orbital Mechanics",
    img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=700',
    tags: ['PDF'],
    date: 'AUG 2025',
  },
  {
    id: 6,
    title: 'Session 01 // Introduction to Astrophysics & PAC Charter',
    img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=700',
    tags: ['PPTX'],
    date: 'JUL 2025',
  },
];

/* ─────────────────────────────────────────────
   Data — Calendar tiles (right column, 12 months)
───────────────────────────────────────────── */
const MONTHLY_PAPERS = [
  {
    id: 1,
    month: 'DEC',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400',
  },
  {
    id: 2,
    month: 'NOV',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=400',
  },
  {
    id: 3,
    month: 'OCT',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400',
  },
  {
    id: 4,
    month: 'SEP',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=400',
  },
  {
    id: 5,
    month: 'AUG',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=400',
  },
  {
    id: 6,
    month: 'JUL',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=400',
  },
  {
    id: 7,
    month: 'JUN',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=400',
  },
  {
    id: 8,
    month: 'MAY',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=400',
  },
  {
    id: 9,
    month: 'APR',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400',
  },
  {
    id: 10,
    month: 'MAR',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=400',
  },
  {
    id: 11,
    month: 'FEB',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1532978379173-523e16f371f2?q=80&w=400',
  },
  {
    id: 12,
    month: 'JAN',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400',
  },
];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const lineDraw = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: 'easeOut', delay: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

/* ─────────────────────────────────────────────
   Section header (laser lines + tracking dots)
───────────────────────────────────────────── */
function SectionHeader({ label }: { label: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex items-center justify-center w-full mb-14"
    >
      <div className="flex items-center flex-1">
        <motion.div
          variants={lineDraw}
          className="flex-1 h-px origin-right"
          style={{ background: 'linear-gradient(to left, rgba(0,212,255,0.7), transparent)' }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"
          style={{ boxShadow: '0 0 6px rgba(255,255,255,0.9)' }}
        />
      </div>
      <h2
        className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] uppercase text-white px-6 whitespace-nowrap"
        style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}
      >
        {label}
      </h2>
      <div className="flex items-center flex-1">
        <div
          className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"
          style={{ boxShadow: '0 0 6px rgba(255,255,255,0.9)' }}
        />
        <motion.div
          variants={lineDraw}
          className="flex-1 h-px origin-left"
          style={{ background: 'linear-gradient(to right, rgba(0,212,255,0.7), transparent)' }}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Column header (icon + pipe + label)
───────────────────────────────────────────── */
function ColumnHeader({
  icon: Icon,
  label,
  accentColor,
}: {
  icon: React.ElementType;
  label: string;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex items-center gap-3 mb-5"
    >
      {/* Icon badge */}
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
        style={{
          background: `rgba(${accentColor}, 0.09)`,
          border: `1px solid rgba(${accentColor}, 0.3)`,
          boxShadow: `0 0 14px rgba(${accentColor}, 0.12)`,
        }}
      >
        <Icon size={18} strokeWidth={1.6} style={{ color: `rgba(${accentColor}, 0.9)` }} />
      </div>

      {/* Pipe separator */}
      <div className="w-px h-5 bg-white/15 flex-shrink-0" />

      {/* Label */}
      <span
        className="font-heading text-xs font-bold tracking-[0.22em] uppercase"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        {label}
      </span>

      {/* Full-width hairline */}
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, rgba(${accentColor}, 0.25), transparent)` }} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Session image tile (left column)
───────────────────────────────────────────── */
function SessionTile({ session, delay }: { session: (typeof SESSIONS)[number]; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      className="relative overflow-hidden rounded-xl cursor-pointer"
      style={{
        aspectRatio: '4/3',
        border: hovered ? '1px solid rgba(0,212,255,0.55)' : '1px solid rgba(0,212,255,0.2)',
        boxShadow: hovered ? '0 0 24px rgba(0,212,255,0.18)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={session.img}
        alt={session.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />

      {/* Top-right download button */}
      <div className="absolute top-2.5 right-2.5 z-20">
        <TileDownloadBtn accentRgb="0,212,255" />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(2,2,8,0.97) 0%, rgba(2,2,8,0.7) 45%, rgba(2,2,8,0.15) 80%, transparent 100%)',
        }}
      />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p className="font-heading font-bold text-sm tracking-[0.07em] text-white leading-tight line-clamp-2 mb-2">
          {session.title}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {session.tags.map((tag) => (
              <span
                key={tag}
                className="font-heading text-[9px] font-bold tracking-[0.18em] px-1.5 py-0.5 rounded"
                style={{
                  background: 'rgba(0,212,255,0.09)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: 'rgba(0,212,255,0.8)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-heading text-[9px] tracking-[0.14em] text-white/35 ml-2">
            {session.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Calendar month tile (right column)
───────────────────────────────────────────── */
function CalendarTile({
  paper,
  delay,
}: {
  paper: (typeof MONTHLY_PAPERS)[number];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      className="relative overflow-hidden rounded-xl cursor-pointer flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(8px)',
        border: hovered ? '1px solid rgba(0,212,255,0.4)' : '1px solid rgba(255,255,255,0.09)',
        boxShadow: hovered ? '0 0 16px rgba(0,212,255,0.12)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Month header */}
      <div className="px-2.5 pt-2.5 pb-1.5 flex items-baseline gap-1.5 flex-shrink-0">
        <span className="font-heading font-bold text-sm tracking-[0.12em] text-white/90 leading-none">
          {paper.month}
        </span>
        <span className="font-heading text-[10px] tracking-[0.1em] text-white/35 leading-none">
          {paper.year}
        </span>
      </div>

      {/* Scientific visualization image */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '1/1' }}>
        <img
          src={paper.img}
          alt={`${paper.month} ${paper.year} research`}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.45s ease',
          }}
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(2,2,8,0.5) 100%)' }}
        />
      </div>

      {/* Download footer */}
      <div
        className="flex items-center gap-1.5 px-2.5 py-2 flex-shrink-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <ArrowDownToLine
          size={11}
          strokeWidth={2.2}
          style={{ color: hovered ? 'rgba(0,255,148,0.9)' : 'rgba(0,255,148,0.55)', transition: 'color 0.3s ease' }}
        />
        <span
          className="font-heading text-[9px] font-semibold tracking-[0.16em] uppercase"
          style={{ color: hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)', transition: 'color 0.3s ease' }}
        >
          Monthly Paper
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Tile download button (top-right of session tile)
───────────────────────────────────────────── */
function TileDownloadBtn({ accentRgb }: { accentRgb: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      aria-label="Download"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-250"
      style={{
        background: hovered ? `rgba(${accentRgb}, 0.18)` : 'rgba(2,2,8,0.65)',
        backdropFilter: 'blur(8px)',
        border: hovered ? `1px solid rgba(${accentRgb}, 0.7)` : `1px solid rgba(${accentRgb}, 0.3)`,
        boxShadow: hovered ? `0 0 14px rgba(${accentRgb}, 0.4)` : 'none',
        color: hovered ? `rgba(${accentRgb}, 1)` : `rgba(${accentRgb}, 0.7)`,
      }}
    >
      <ArrowDownToLine size={13} strokeWidth={2} />
    </button>
  );
}

/* ─────────────────────────────────────────────
   Contact action button (footer)
───────────────────────────────────────────── */
function ContactBtn({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300"
      style={{
        background: hovered ? 'rgba(0,212,255,0.10)' : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        border: hovered ? '1px solid rgba(0,212,255,0.5)' : '1px solid rgba(255,255,255,0.10)',
        boxShadow: hovered ? '0 0 22px rgba(0,212,255,0.22)' : 'none',
        color: hovered ? 'rgba(0,212,255,0.95)' : 'rgba(255,255,255,0.45)',
      }}
    >
      <Icon size={20} strokeWidth={1.8} />
    </a>
  );
}

/* ─────────────────────────────────────────────
   Section export
───────────────────────────────────────────── */
export default function ResourcesSection() {
  return (
    <section id="resources" className="relative pt-28 pb-14 px-6 overflow-hidden">
      {/* Radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="05 // Resource Portal" />

        {/* ── Two-column split ── */}
        <div className="flex flex-col lg:flex-row gap-6 mb-20">

          {/* ── Left column — Meeting Archive Vault ── */}
          <div className="flex-1 min-w-0">
            <ColumnHeader icon={Network} label="Meeting Archive Vault" accentColor="0,212,255" />
            <div
              className="overflow-y-auto pr-1"
              style={{
                maxHeight: '540px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(0,212,255,0.3) transparent',
              }}
            >
              <div className="grid grid-cols-2 gap-3 pb-2">
                {SESSIONS.map((session, idx) => (
                  <SessionTile key={session.id} session={session} delay={idx * 0.07} />
                ))}
              </div>
            </div>
          </div>

          {/* Vertical divider (desktop only) */}
          <div
            className="hidden lg:block w-px flex-shrink-0 self-stretch"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,255,255,0.07), transparent)',
            }}
          />

          {/* ── Right column — Monthly Research Papers ── */}
          <div className="flex-1 min-w-0">
            <ColumnHeader icon={CalendarDays} label="Monthly Research Papers" accentColor="0,255,148" />
            <div
              className="overflow-y-auto pr-1"
              style={{
                maxHeight: '540px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(0,255,148,0.3) transparent',
              }}
            >
              <div className="grid grid-cols-4 gap-2.5 pb-2">
                {MONTHLY_PAPERS.map((paper, idx) => (
                  <CalendarTile key={paper.id} paper={paper} delay={idx * 0.05} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact & Systems Interface ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Left — Attribution text */}
          <div className="flex flex-col gap-1">
            <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-white">
              Contact and Systems Interface
            </p>
            <p className="font-heading text-[11px] tracking-[0.18em] uppercase text-white/35">
              Jitesh Kumar Gouda // Systems Handler
            </p>
          </div>

          {/* Right — Contact buttons */}
          <div className="flex items-center gap-3">
            <ContactBtn
              href="https://linkedin.com/in/jitesh-kumar-gouda"
              icon={Linkedin}
              label="LinkedIn"
            />
            <ContactBtn href="mailto:jitesh_24cse239@gkciet.ac.in" icon={Mail} label="Email" />
            <ContactBtn href="tel:+91 9485170200" icon={Phone} label="Phone" />
          </div>
        </motion.div>

        {/* ── Copyright ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/20">
            System Copyright &copy; All rights reserved / contracted.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
