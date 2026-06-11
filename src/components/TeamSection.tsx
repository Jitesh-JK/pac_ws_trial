import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import {
  FACULTY as _FACULTY,
  COORDINATORS as _COORDINATORS,
  CORE_OPS as _CORE_OPS,
  GENERAL_MEMBERS as _GENERAL_MEMBERS,
} from '../siteData.js';

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type RingTier = 'cyan' | 'green' | 'muted';

interface MemberLinks {
  linkedin?: string;
  email?: string;
  github?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  ring: RingTier;
  tag?: string;
  links?: MemberLinks;
}

const FACULTY = _FACULTY as TeamMember[];
const COORDINATORS = _COORDINATORS as TeamMember[];
const CORE_OPS = _CORE_OPS as TeamMember[];
const GENERAL_MEMBERS = _GENERAL_MEMBERS as TeamMember[];

/* ─────────────────────────────────────────────
   Ring glow styles per tier
───────────────────────────────────────────── */
const RING_STYLES: Record<RingTier, React.CSSProperties> = {
  cyan: {
    boxShadow:
      '0 0 0 2.5px rgba(0,212,255,0.55), 0 0 18px rgba(0,212,255,0.25)',
  },
  green: {
    boxShadow:
      '0 0 0 2.5px rgba(0,255,148,0.55), 0 0 18px rgba(0,255,148,0.22)',
  },
  muted: {
    boxShadow: '0 0 0 1.5px rgba(255,255,255,0.14)',
  },
};

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

const cardReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
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
      className="flex items-center justify-center w-full mb-16"
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
   Sub-section label row
───────────────────────────────────────────── */
function SubHeader({ label, index }: { label: string; index: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="flex items-center gap-3 mb-5"
    >
      <span
        className="font-heading text-[10px] font-bold tracking-[0.2em] text-neon-cyan"
        style={{ textShadow: '0 0 8px rgba(0,212,255,0.6)' }}
      >
        {index}
      </span>
      <div className="w-px h-4 bg-white/15" />
      <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Horizontal member card
───────────────────────────────────────────── */
function MemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <motion.div
      custom={delay}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{
        borderColor:
          member.ring === 'cyan'
            ? 'rgba(0,212,255,0.35)'
            : member.ring === 'green'
            ? 'rgba(0,255,148,0.35)'
            : 'rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.06)',
      }}
      className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-300"
      style={{
        background: 'rgba(255,255,255,0.035)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* ── Circular avatar ── */}
      <div className="flex-shrink-0">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover object-center"
          style={RING_STYLES[member.ring]}
        />
      </div>

      {/* ── Info block ── */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-heading font-bold text-sm tracking-[0.06em] text-white leading-tight truncate">
            {member.name}
          </p>
          {member.tag && (
            <span
              className="font-heading text-[7px] font-bold tracking-[0.15em] uppercase px-1.5 py-0.5 rounded-sm flex-shrink-0"
              style={{
                background: 'rgba(0,212,255,0.12)',
                color: 'rgba(0,212,255,0.9)',
                border: '1px solid rgba(0,212,255,0.25)',
              }}
            >
              {member.tag}
            </span>
          )}
        </div>
        <p className="font-heading text-[11px] tracking-[0.07em] text-white/45 mt-0.5 leading-snug line-clamp-2">
          {member.role}
        </p>

        {/* ── Contact icons (conditionally rendered) ── */}
        {member.links && (
          <div className="flex items-center gap-2.5 mt-2.5">
            {member.links.linkedin && (
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 rounded transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                aria-label="LinkedIn"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(0,212,255,0.9)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)')
                }
              >
                <Linkedin size={13} strokeWidth={1.8} />
              </a>
            )}

            {member.links.github && (
              <a
                href={member.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 rounded transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                aria-label="GitHub"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(0,212,255,0.9)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)')
                }
              >
                <Github size={13} strokeWidth={1.8} />
              </a>
            )}

            {member.links.email && (
              <a
                href={`mailto:${member.links.email}`}
                className="flex items-center justify-center w-6 h-6 rounded transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                aria-label="Email"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(0,212,255,0.9)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)')
                }
              >
                <Mail size={13} strokeWidth={1.8} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Grid wrapper helpers
───────────────────────────────────────────── */
function MemberGrid({
  members,
  cols,
  startDelay = 0,
}: {
  members: TeamMember[];
  cols: string;
  startDelay?: number;
}) {
  return (
    <div className={`grid ${cols} gap-3 mb-14`}>
      {members.map((member, idx) => (
        <MemberCard key={member.id} member={member} delay={startDelay + idx * 0.07} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section export
───────────────────────────────────────────── */
export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="04 // Command Crew" />

        <SubHeader index="01" label="Faculty Coordinator" />
        <MemberGrid
          members={FACULTY}
          cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          startDelay={0}
        />

        <SubHeader index="02" label="Student Representative Leads" />
        <MemberGrid
          members={COORDINATORS}
          cols="grid-cols-1 sm:grid-cols-2"
          startDelay={0}
        />

        <SubHeader index="03" label="Core Operations & Web Dev" />
        <MemberGrid
          members={CORE_OPS}
          cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          startDelay={0}
        />

        <SubHeader index="04" label="Active Core Members" />
        <MemberGrid
          members={GENERAL_MEMBERS}
          cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          startDelay={0}
        />
      </div>
    </section>
  );
}
