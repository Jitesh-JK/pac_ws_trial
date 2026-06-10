import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Satellite, CalendarDays, Navigation } from 'lucide-react';

const EVENTS = [
  {
    id: 0,
    title: 'Sky Gazing Camp',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900',
    date: '12 // FEB // 2025',
    coords: 'RA 05h 34m // DEC +22° 01\'',
    desc: 'An immersive overnight field session under pristine dark skies. Members track deep-sky objects, practice star-hopping, and log raw observational data.',
  },
  {
    id: 1,
    title: 'Telescope Lab Night',
    img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=900',
    date: '05 // MAR // 2025',
    coords: 'RA 12h 00m // DEC +35° 15\'',
    desc: 'Weekly hands-on calibration sessions covering collimation, polar alignment, and astrophotography with PAC\'s 8-inch Dobsonian reflectors.',
  },
  {
    id: 2,
    title: 'Astrophysics Seminar',
    img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=900',
    date: '18 // APR // 2025',
    coords: 'RA 17h 45m // DEC -29° 00\'',
    desc: 'Guest faculty deep-dives on gravitational waves, exoplanet atmospheres, and dark matter — streamed live and open to all club members.',
  },
  {
    id: 3,
    title: 'Cosmic Hackathon',
    img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=900',
    date: '24 // MAY // 2025',
    coords: 'RA 00h 42m // DEC +41° 16\'',
    desc: 'A 24-hour open science sprint: analyze real NASA datasets, build sky-survey algorithms, and present findings to faculty judges.',
  },
];

/* ── Laser line draw animation ── */
const lineDraw = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: 'easeOut', delay: 0.2 },
  },
};

/* ── Section header (laser lines + tracking dots) ── */
function SectionHeader({ label }: { label: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex items-center justify-center w-full mb-12"
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

export default function EventsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getPanelWidth = (idx: number): string => {
    if (hoveredIdx === null) return '25%';
    if (idx === hoveredIdx) return '46%';
    return '18%';
  };

  return (
    <section id="events" className="relative py-28 px-6 overflow-hidden">
      {/* Top radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="Events" />

        {/* ── Expanding panels container ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex gap-2 overflow-hidden rounded-xl"
          style={{ height: '420px' }}
        >
          {EVENTS.map((event, idx) => {
            const isActive = hoveredIdx === idx;

            return (
              <motion.div
                key={event.id}
                animate={{ width: getPanelWidth(idx) }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="relative overflow-hidden cursor-pointer rounded-xl flex-shrink-0"
                style={{
                  boxShadow: isActive
                    ? '0 0 0 1.5px rgba(0,212,255,0.6), 0 0 30px rgba(0,212,255,0.15)'
                    : '0 0 0 1px rgba(255,255,255,0.07)',
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Background image */}
                <motion.img
                  src={event.img}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ scale: isActive ? 1.08 : 1.0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                />

                {/* Dark overlay — fades back when active */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: isActive ? 0.45 : 0.80 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#020208' }}
                />

                {/* Vertical title label (always present, fades when active) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="flex flex-col items-center gap-2"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    <span className="font-heading text-[9px] tracking-[0.25em] uppercase text-neon-cyan opacity-60">
                      PAC
                    </span>
                    <span className="font-heading font-bold text-sm tracking-[0.15em] uppercase text-white leading-none">
                      {event.title}
                    </span>
                  </div>
                </motion.div>

                {/* ── Expanded content block ── */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="expanded-content"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.32, ease: 'easeOut' }}
                      className="absolute inset-0 z-20 flex flex-col justify-end p-5"
                    >
                      {/* Bottom gradient backdrop */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-3/4 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(2,2,8,0.97) 0%, rgba(2,2,8,0.85) 55%, transparent 100%)',
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 space-y-2.5">
                        <h3
                          className="font-heading font-bold text-base tracking-[0.12em] uppercase text-white leading-tight"
                          style={{ textShadow: '0 0 20px rgba(255,255,255,0.4)' }}
                        >
                          {event.title}
                        </h3>

                        <p className="font-heading text-xs tracking-[0.05em] text-white/55 leading-relaxed line-clamp-3">
                          {event.desc}
                        </p>

                        <div className="flex flex-col gap-1 pt-1">
                          <div className="flex items-center gap-1.5">
                            <Navigation size={10} className="text-neon-cyan flex-shrink-0" />
                            <span className="font-heading text-[10px] tracking-[0.1em] text-neon-cyan/80">
                              {event.coords}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <CalendarDays size={10} className="text-white/40 flex-shrink-0" />
                            <span className="font-heading text-[10px] tracking-[0.1em] text-white/40">
                              {event.date}
                            </span>
                          </div>
                        </div>

                        {/* RSVP button */}
                        <motion.button
                          whileHover={{
                            boxShadow: '0 0 18px rgba(0,212,255,0.5)',
                            borderColor: 'rgba(0,212,255,0.8)',
                          }}
                          className="mt-2 font-heading text-[10px] font-bold tracking-[0.18em] uppercase text-white border border-white/25 rounded px-3.5 py-2 flex items-center gap-2 w-fit transition-colors"
                          style={{ background: 'rgba(0,212,255,0.08)' }}
                        >
                          <Satellite size={11} />
                          RSVP / JOIN MISSION
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
