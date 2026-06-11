/* ─────────────────────────────────────────────
   PAC Website — Centralized Site Data Manifest
   Edit this file to update all site content.
───────────────────────────────────────────── */

// ── Navigation ──────────────────────────────
export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'TEAM', href: '#team' },
  { label: 'RESOURCES', href: '#resources' },
];

// Set to a URL string to show the "Join the Hub" CTA button. Set to null to hide it.
export const JOIN_HUB_URL = 'https://forms.gle/YOUR_GOOGLE_FORM_ID';

// Set to a string to show the top announcement banner. Set to null to hide it.
export const ANNOUNCEMENT =
  'New: Session 07 // TO be Decided — 17 June 2026 ';

// ── About section ────────────────────────────
export const ABOUT_METRICS = [
  { value: 'Est. 2025', label: 'Founded', delay: 0.1 },
  { value: '30+', label: 'Sky Observers', delay: 0.2 },
  { value: '1', label: 'Deep Sky Projects', delay: 0.3 },
];

// iconName maps to lucide-react icon names resolved in the component
export const ABOUT_CARDS = [
  {
    iconName: 'Telescope',
    front: 'Stargazing Expedition Access',
    back: 'Receive training and coordination support for state and national level observational field trips.',
  },
  {
    iconName: 'Users',
    front: 'Scientific Connect',
    back: 'Regular guest lectures and webinars to explore inner research and astrophysics at top technical institutions.',
  },
  {
    iconName: 'FlaskConical',
    front: 'Hands-on Telescope Labs',
    back: 'Weekly operational sessions for lens transit analysis, telemetry processing, and applied geometry study.',
  },
  {
    iconName: 'BookMarked',
    front: 'Research Mentorship',
    back: 'Senior-Junior mentorship pipeline to guide you through your physics curriculum and space science projects.',
  },
];

// ── Events ───────────────────────────────────
// status: 'LIVE' | 'UPCOMING' | 'CONCLUDED' (optional — omit for no indicator)
// registrationLink: URL string (optional — omit or set null to show "EVENT CONCLUDED" passive state)
export const EVENTS = [
  {
    id: 0,
    title: 'Sky Gazing Camp',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900',
    date: '12 // FEB // 2025',
    coords: "RA 05h 34m // DEC +22° 01'",
    desc: 'An immersive overnight field session under pristine dark skies. Members track deep-sky objects, practice star-hopping, and log raw observational data.',
    status: 'CONCLUDED',
  },
  {
    id: 1,
    title: 'Telescope Lab Night',
    img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=900',
    date: '05 // MAR // 2025',
    coords: "RA 12h 00m // DEC +35° 15'",
    desc: "Weekly hands-on calibration sessions covering collimation, polar alignment, and astrophotography with PAC's 8-inch Dobsonian reflectors.",
    status: 'CONCLUDED',
  },
  {
    id: 2,
    title: 'Astrophysics Seminar',
    img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=900',
    date: '18 // APR // 2025',
    coords: "RA 17h 45m // DEC -29° 00'",
    desc: 'Guest faculty deep-dives on gravitational waves, exoplanet atmospheres, and dark matter — streamed live and open to all club members.',
    status: 'UPCOMING',
    registrationLink: 'https://forms.gle/YOUR_SEMINAR_FORM',
  },
  {
    id: 3,
    title: 'Cosmic Hackathon',
    img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=900',
    date: '24 // MAY // 2025',
    coords: "RA 00h 42m // DEC +41° 16'",
    desc: 'A 24-hour open science sprint: analyze real NASA datasets, build sky-survey algorithms, and present findings to faculty judges.',
    status: 'LIVE',
    registrationLink: 'https://forms.gle/YOUR_HACKATHON_FORM',
  },
];

// ── Gallery ──────────────────────────────────
export const GALLERY_IMAGES = [
  // REP_MEDLEY
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
  // SKY_CAMP
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
  // LAB_CALIBRATION
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

export const FILTER_TABS = [
  { key: 'ALL', label: '[ ALL LOGS ]' },
  { key: 'REP_MEDLEY', label: '[ 26/01 // REP_MEDLEY ]' },
  { key: 'SKY_CAMP', label: '[ 12/02 // SKY_CAMP ]' },
  { key: 'LAB_CALIBRATION', label: '[ 05/03 // LAB_CALIBRATION ]' },
];

// ── Team ─────────────────────────────────────
// tag: optional role badge (e.g. 'ADVISOR', 'PRESIDENT'). Omit to hide the badge.
// links: optional object — include only handles that exist. Missing keys render no icon.
export const FACULTY = [
  {
    id: 1,
    name: 'Dr. Arun Sharma',
    role: 'Faculty Advisor — Physics Department',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'cyan',
    tag: 'ADVISOR',
    links: {
      linkedin: 'https://linkedin.com/in/arunsharma',
      email: 'arunsharma@gkciet.ac.in',
    },
  },
];

export const COORDINATORS = [
  {
    id: 2,
    name: 'Riya Mehta',
    role: 'Club President / Student Coordinator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'cyan',
    tag: 'PRESIDENT',
    links: {
      linkedin: 'https://linkedin.com/in/riyamehta',
      email: 'riyamehta@gkciet.ac.in',
    },
  },
  {
    id: 3,
    name: 'Karan Patel',
    role: 'Vice President / Student Coordinator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'cyan',
    tag: 'VICE PRES',
    links: {
      linkedin: 'https://linkedin.com/in/karanpatel',
      email: 'karanpatel@gkciet.ac.in',
    },
  },
];

export const CORE_OPS = [
  {
    id: 4,
    name: 'Arjun Nair',
    role: 'Website Developer & Tech Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'green',
    tag: 'TECH LEAD',
    links: {
      linkedin: 'https://linkedin.com/in/arjunnair',
      github: 'https://github.com/arjunnair',
      email: 'arjunnair@gkciet.ac.in',
    },
  },
  {
    id: 5,
    name: 'Priya Joshi',
    role: 'Event Operations Lead',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/priyajoshi',
      email: 'priyajoshi@gkciet.ac.in',
    },
  },
  {
    id: 6,
    name: 'Rahul Singh',
    role: 'Outreach & Partnerships',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/rahulsingh',
      email: 'rahulsingh@gkciet.ac.in',
    },
  },
  {
    id: 7,
    name: 'Sneha Rao',
    role: 'Media & Visual Design',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/sneharao',
    },
  },
];

export const GENERAL_MEMBERS = [
  {
    id: 8,
    name: 'Ankit Verma',
    role: 'Sky Observer — Deep Field',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/ankitverma',
    },
  },
  {
    id: 9,
    name: 'Divya Krishnan',
    role: 'Astrophotography Lead',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/divyakrishnan',
      email: 'divyakrishnan@gkciet.ac.in',
    },
  },
  {
    id: 10,
    name: 'Sameer Gupta',
    role: 'Telescope Operations',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/sameergupta',
    },
  },
  {
    id: 11,
    name: 'Neha Desai',
    role: 'Theoretical Physics Track',
    avatar: 'https://images.unsplash.com/photo-1546961342-ea5f62d851f3?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      linkedin: 'https://linkedin.com/in/nehadesai',
      email: 'nehadesai@gkciet.ac.in',
    },
  },
  {
    id: 12,
    name: 'Varun Iyer',
    role: 'Data Analysis & Python',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      github: 'https://github.com/varuniyer',
      linkedin: 'https://linkedin.com/in/varuniyer',
    },
  },
  {
    id: 13,
    name: 'Pooja Reddy',
    role: 'Observational Log Keeper',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&h=150&fit=crop&crop=faces',
    ring: 'muted',
    links: {
      email: 'poojareddy@gkciet.ac.in',
    },
  },
];

// ── Meeting archive (Resource Portal — left column) ──
// img: optional — omit to show fallback dark canvas
// downloadLinks: each key is optional — only present keys render a pill + download action
export const SESSIONS = [
  {
    id: 1,
    title: 'Session 06 // Pulsar Timing & Dispersion Measures',
    img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=700',
    downloadLinks: {
      pptx: '/files/session-06.pptx',
      pdf: '/files/session-06.pdf',
    },
    date: 'DEC 2025',
  },
  {
    id: 2,
    title: 'Session 05 // Spectroscopy & Emission Line Analysis',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=700',
    downloadLinks: {
      pptx: '/files/session-05.pptx',
      pdf: '/files/session-05.pdf',
    },
    date: 'NOV 2025',
  },
  {
    id: 3,
    title: 'Session 04 // Telescope Optics & Focal Length Ratios',
    img: 'https://images.unsplash.com/photo-1532978379173-523e16f371f2?q=80&w=700',
    downloadLinks: {
      pdf: '/files/session-04.pdf',
    },
    date: 'OCT 2025',
  },
  {
    id: 4,
    title: 'Session 03 // Celestial Coordinate Systems & Sky Mapping',
    img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=700',
    downloadLinks: {
      pptx: '/files/session-03.pptx',
      pdf: '/files/session-03.pdf',
    },
    date: 'SEP 2025',
  },
  {
    id: 5,
    title: "Session 02 // Kepler's Laws & Orbital Mechanics",
    img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=700',
    downloadLinks: {
      pdf: '/files/session-02.pdf',
    },
    date: 'AUG 2025',
  },
  {
    id: 6,
    title: 'Session 01 // Introduction to Astrophysics & PAC Charter',
    img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=700',
    downloadLinks: {
      pptx: '/files/session-01.pptx',
    },
    date: 'JUL 2025',
  },
];

// ── Monthly research papers (Resource Portal — right column) ──
// img: optional — omit to show fallback dark canvas
// abstract: optional — omit to keep compact layout; present to show a summary line
export const MONTHLY_PAPERS = [
  {
    id: 1,
    month: 'DEC',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400',
    abstract: 'Multi-messenger astronomy and the detection of gravitational wave counterparts in optical transient surveys.',
  },
  {
    id: 2,
    month: 'NOV',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=400',
    abstract: 'JWST early-universe morphological analysis of high-z galaxy clusters at redshift z > 10.',
  },
  {
    id: 3,
    month: 'OCT',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400',
    abstract: 'Constraining dark matter halo profiles using stellar velocity dispersions in dwarf spheroidal galaxies.',
  },
  {
    id: 4,
    month: 'SEP',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=400',
    abstract: 'Exoplanet atmospheric retrieval via TRAPPIST-1 transmission spectroscopy data pipeline processing.',
  },
  {
    id: 5,
    month: 'AUG',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=400',
    abstract: 'Simulating neutron star mergers: r-process nucleosynthesis in relativistic MHD computational frameworks.',
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

// ── Contact & systems interface (footer of Resource Portal) ──
// Each field is optional — remove or set to empty string to hide that contact button.
export const CONTACT = {
  name: 'Jitesh Kumar Gouda',
  title: 'Systems Handler',
  linkedin: 'https://linkedin.com/in/jitesh-kumar-gouda',
  email: 'jitesh_24cse239@gkciet.ac.in',
  phone: '+91 9485170200',
};
