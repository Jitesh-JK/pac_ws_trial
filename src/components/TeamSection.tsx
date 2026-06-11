import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type ContactLevel = 'full' | 'standard'; // full = LinkedIn + Gmail + Phone; standard = LinkedIn + Gmail
type RingTier = 'cyan' | 'green' | 'muted';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  contacts: ContactLevel;
  ring: RingTier;
}

/* ─────────────────────────────────────────────
   Team data
───────────────────────────────────────────── */
const FACULTY: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Rakesh Das',
    role: 'Faculty Advisor — Physics Department',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'full',
    ring: 'cyan',
  },
];

const COORDINATORS: TeamMember[] = [
  {
    id: 2,
    name: 'Urmi Singha',
    role: 'Club President / Student Coordinator',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'full',
    ring: 'cyan',
  },
  {
    id: 3,
    name: '---------',
    role: 'Vice President / Student Coordinator',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'full',
    ring: 'cyan',
  },
];

const CORE_OPS: TeamMember[] = [
  {
    id: 4,
    name: 'Arjun Nair',
    role: 'Website Developer & Tech Lead',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'full',
    ring: 'green',
  },
  {
    id: 5,
    name: 'Priya Joshi',
    role: 'Event Operations Lead',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 6,
    name: 'Rahul Singh',
    role: 'Outreach & Partnerships',
    avatar:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 7,
    name: 'Sneha Rao',
    role: 'Media & Visual Design',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
];

const GENERAL_MEMBERS: TeamMember[] = [
  {
    id: 8,
    name: 'Ankit Verma',
    role: 'Sky Observer — Deep Field',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 9,
    name: 'Divya Krishnan',
    role: 'Astrophotography Lead',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 10,
    name: 'Sameer Gupta',
    role: 'Telescope Operations',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 11,
    name: 'Neha Desai',
    role: 'Theoretical Physics Track',
    avatar:
      'https://images.unsplash.com/photo-1546961342-ea5f62d851f3?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 12,
    name: 'Varun Iyer',
    role: 'Data Analysis & Python',
    avatar:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
  {
    id: 13,
    name: 'Pooja Reddy',
    role: 'Observational Log Keeper',
    avatar:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&h=150&fit=crop&crop=faces',
    contacts: 'standard',
    ring: 'muted',
  },
];

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
function SubHeader({
  label,
  index,
}: {
  label: string;
  index: string;
}) {
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
function MemberCard({
  member,
  delay,
}: {
  member: TeamMember;
  delay: number;
}) {
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
        <p className="font-heading font-bold text-sm tracking-[0.06em] text-white leading-tight truncate">
          {member.name}
        </p>
        <p className="font-heading text-[11px] tracking-[0.07em] text-white/45 mt-0.5 leading-snug line-clamp-2">
          {member.role}
        </p>

        {/* ── Contact icons ── */}
        <div className="flex items-center gap-2.5 mt-2.5">
          {/* LinkedIn */}
          <button
            className="group flex items-center justify-center w-6 h-6 rounded transition-all duration-200"
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
          </button>

          {/* Gmail */}
          <button
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
          </button>

          {/* Phone — only for 'full' contact level */}
          {member.contacts === 'full' && (
            <button
              className="flex items-center justify-center w-6 h-6 rounded transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.35)' }}
              aria-label="Phone"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(0,212,255,0.9)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)')
              }
            >
              <Phone size={13} strokeWidth={1.8} />
            </button>
          )}
        </div>
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
      {/* Radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="04 // Command Crew" />

        {/* ── 1. Faculty Coordinator ── */}
        <SubHeader index="01" label="Faculty Coordinator" />
        <MemberGrid
          members={FACULTY}
          cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          startDelay={0}
        />

        {/* ── 2. Student Representative Leads ── */}
        <SubHeader index="02" label="Student Representative Leads" />
        <MemberGrid
          members={COORDINATORS}
          cols="grid-cols-1 sm:grid-cols-2"
          startDelay={0}
        />

        {/* ── 3. Core Operations & Web Dev ── */}
        <SubHeader index="03" label="Core Operations & Web Dev" />
        <MemberGrid
          members={CORE_OPS}
          cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          startDelay={0}
        />

        {/* ── 4. Active Core Members ── */}
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
