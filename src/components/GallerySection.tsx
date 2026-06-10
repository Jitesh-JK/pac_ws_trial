import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FilterKey = 'ALL' | 'REP_MEDLEY' | 'SKY_CAMP' | 'LAB_CALIBRATION';

interface GalleryImage {
  id: number;
  category: Exclude<FilterKey, 'ALL'>;
  src: string;
  title: string;
  frameId: string;
  meta: string;
  tracking: string;
  height: string;
  track: string;
  time: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  /* ── REP_MEDLEY ── */
  {
    id: 1,
    category: 'REP_MEDLEY',
    src: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=700',
    title: 'Andromeda Survey Data',
    frameId: 'LOG_01',
    meta: 'SETUP_RAW',
    tracking: '12.22 KMB',
    height: '3.92',
    track: '27.20°',
    time: '6.73 kms',
  },
  {
    id: 2,
    category: 'REP_MEDLEY',
    src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=700',
    title: 'Nebula Presentation Render',
    frameId: 'LOG_02',
    meta: 'SETUP_RAW',
    tracking: '08.11 KMB',
    height: '5.17',
    track: '19.44°',
    time: '4.22 kms',
  },
  {
    id: 3,
    category: 'REP_MEDLEY',
    src: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=700',
    title: 'Milky Way Slide Capture',
    frameId: 'LOG_03',
    meta: 'MEDLEY_EDIT',
    tracking: '15.90 KMB',
    height: '2.88',
    track: '33.10°',
    time: '5.54 kms',
  },
  {
    id: 4,
    category: 'REP_MEDLEY',
    src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=700',
    title: 'Deep Field Rep Session',
    frameId: 'LOG_04',
    meta: 'MEDLEY_EDIT',
    tracking: '21.05 KMB',
    height: '7.44',
    track: '41.09°',
    time: '8.01 kms',
  },

  /* ── SKY_CAMP ── */
  {
    id: 5,
    category: 'SKY_CAMP',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=700',
    title: 'Field Trip to Mauna Kea',
    frameId: 'LOG_05',
    meta: 'SKY_CAMP',
    tracking: '12.22 KMB',
    height: '3.92',
    track: '27.20°',
    time: '6.73 kms',
  },
  {
    id: 6,
    category: 'SKY_CAMP',
    src: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=700',
    title: 'Mountain Night Observation',
    frameId: 'LOG_06',
    meta: 'SKY_CAMP',
    tracking: '09.34 KMB',
    height: '4.60',
    track: '22.88°',
    time: '3.91 kms',
  },
  {
    id: 7,
    category: 'SKY_CAMP',
    src: 'https://images.unsplash.com/photo-1532978379173-523e16f371f2?q=80&w=700',
    title: 'Dark Sky Reserve Log',
    frameId: 'LOG_07',
    meta: 'FIELD_RAW',
    tracking: '16.78 KMB',
    height: '6.05',
    track: '30.55°',
    time: '7.22 kms',
  },
  {
    id: 8,
    category: 'SKY_CAMP',
    src: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=700',
    title: 'Horizon Transit Capture',
    frameId: 'LOG_08',
    meta: 'FIELD_RAW',
    tracking: '11.44 KMB',
    height: '2.30',
    track: '18.70°',
    time: '5.10 kms',
  },

  /* ── LAB_CALIBRATION ── */
  {
    id: 9,
    category: 'LAB_CALIBRATION',
    src: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=700',
    title: 'Exoplanet Simulation Data',
    frameId: 'LOG_09',
    meta: 'CALIB_SET',
    tracking: '23.18 KMB',
    height: '9.12',
    track: '44.60°',
    time: '10.33 kms',
  },
  {
    id: 10,
    category: 'LAB_CALIBRATION',
    src: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=700',
    title: 'Lunar Surface Analysis',
    frameId: 'LOG_10',
    meta: 'CALIB_SET',
    tracking: '07.55 KMB',
    height: '1.44',
    track: '12.90°',
    time: '2.88 kms',
  },
  {
    id: 11,
    category: 'LAB_CALIBRATION',
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=700',
    title: 'Orbital Telemetry Pass',
    frameId: 'LOG_11',
    meta: 'SCOPE_CAL',
    tracking: '18.90 KMB',
    height: '5.77',
    track: '36.44°',
    time: '6.90 kms',
  },
  {
    id: 12,
    category: 'LAB_CALIBRATION',
    src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=700',
    title: 'Atmosphere Edge Scan',
    frameId: 'LOG_12',
    meta: 'SCOPE_CAL',
    tracking: '14.02 KMB',
    height: '4.11',
    track: '25.03°',
    time: '4.58 kms',
  },
];

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'ALL', label: '[ ALL LOGS ]' },
  { key: 'REP_MEDLEY', label: '[ 26/01 // REP_MEDLEY ]' },
  { key: 'SKY_CAMP', label: '[ 12/02 // SKY_CAMP ]' },
  { key: 'LAB_CALIBRATION', label: '[ 05/03 // LAB_CALIBRATION ]' },
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

/* ── Single gallery card ── */
function GalleryCard({ image }: { image: GalleryImage }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      style={{
        border: hovered
          ? '1px solid rgba(0,212,255,0.5)'
          : '1px solid rgba(255,255,255,0.05)',
        boxShadow: hovered ? '0 0 20px rgba(0,212,255,0.15)' : 'none',
        transition: 'border 0.3s ease, box-shadow 0.3s ease',
        aspectRatio: '4 / 3',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.07 : 1.0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Constant gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(2,2,8,0.75) 0%, transparent 60%)',
        }}
      />

      {/* Default title tag */}
      <div className="absolute bottom-3 left-3 right-3 z-10">
        <motion.p
          className="font-heading text-[11px] tracking-[0.1em] text-white/70 leading-tight"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {image.title}
        </motion.p>
      </div>

      {/* Hover telemetry overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="telemetry"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-3 pt-8"
            style={{
              background:
                'linear-gradient(to top, rgba(2,2,8,0.95) 0%, rgba(2,2,8,0.7) 70%, transparent 100%)',
            }}
          >
            {/* Frame ID + metadata */}
            <div className="flex items-center gap-1.5 mb-2">
              <span
                className="font-heading text-[9px] tracking-[0.18em] text-neon-cyan"
                style={{ textShadow: '0 0 8px rgba(0,212,255,0.7)' }}
              >
                [{image.frameId} // {image.meta}]
              </span>
            </div>

            {/* Telemetry grid */}
            <div className="grid grid-cols-4 gap-x-2">
              {[
                { label: 'TRACKING', value: image.tracking },
                { label: 'HEIGHT', value: image.height },
                { label: 'TRACK', value: image.track },
                { label: 'TIME', value: image.time },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-heading text-[8px] tracking-[0.12em] text-white/35 uppercase leading-none">
                    {item.label}
                  </span>
                  <span className="font-heading text-[9px] tracking-[0.08em] text-white/70 leading-none">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('ALL');

  const filteredImages =
    activeFilter === 'ALL'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="Gallery" />

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <div
            className="flex flex-wrap justify-center gap-2 p-2 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className="relative font-heading text-[11px] font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-300"
                  style={{
                    color: isActive ? 'rgb(0,212,255)' : 'rgba(255,255,255,0.45)',
                    background: isActive ? 'rgba(0,212,255,0.08)' : 'transparent',
                    border: isActive
                      ? '1px solid rgba(0,212,255,0.45)'
                      : '1px solid transparent',
                    boxShadow: isActive ? '0 0 14px rgba(0,212,255,0.18)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Image grid with AnimatePresence ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.06 }}
              >
                <GalleryCard image={image} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
