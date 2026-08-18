import { ChevronRight } from 'lucide-react';
import config from '../config';

// ── Inline brand SVG icons (lucide-react removed brand icons in v1.x) ──
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LineIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navItems = [
  { id: 'announcement', label: 'Announcement',    emoji: '📢', view: 'announcement' },
  { id: 'practical',    label: 'Practical Needs', emoji: '🧪', view: 'practical'    },
  { id: 'scores',       label: 'Scores & Points', emoji: '📊', view: 'scores'       },
];

const socialLinks = [
  { id: 'social-instagram', href: config.social.instagram, icon: <InstagramIcon />, label: 'Instagram', color: 'hover:text-pink-400' },
  { id: 'social-line',      href: config.social.line,      icon: <LineIcon />,      label: 'Line',      color: 'hover:text-green-400' },
  { id: 'social-linkedin',  href: config.social.linkedin,  icon: <LinkedInIcon />,  label: 'LinkedIn',  color: 'hover:text-sky-400' },
];

export default function HomeView({ navigate }) {
  return (
    <div className="flex flex-col items-center px-6 pt-10 pb-8 gap-6 min-h-screen md:min-h-0">

      {/* Logo */}
      <div className="relative">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-white/20 ring-offset-2 ring-offset-transparent shadow-2xl">
          <img src={config.logoUrl} alt="Bioprocess Laboratory Logo" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-full bg-white/5 blur-xl scale-125 -z-10" />
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-xl font-black tracking-widest text-gradient uppercase leading-tight">
          BIOPROCESS<br/>LABORATORY
        </h1>
        <div className="mt-2 w-12 h-0.5 bg-white/20 mx-auto rounded-full" />
      </div>

      {/* Description */}
      <p className="text-white/55 text-xs leading-relaxed text-center max-w-xs font-light">
        The Bioprocess Laboratory is a student-centered facility designed to support experiments
        and research in biochemical and biotechnological processes. It enables students to learn
        about fermentation, enzyme kinetics, and microbial growth operations through hands-on
        practice with lab-scale equipment.
      </p>

      {/* Navigation Buttons */}
      <div className="w-full flex flex-col gap-3 mt-1">
        {navItems.map((item) => (
          <button key={item.id} id={`nav-${item.id}`} onClick={() => navigate(item.view)} className="btn-nav">
            <div className="flex items-center gap-3">
              <span className="text-lg leading-none">{item.emoji}</span>
              <span className="font-semibold tracking-wide">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-white/40 flex-shrink-0" />
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full flex items-center gap-3 mt-auto pt-4">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/25 text-xs tracking-widest uppercase">Follow Us</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        {socialLinks.map((s) => (
          <a key={s.id} id={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
            className={`text-white/50 ${s.color} transition-all duration-200 hover:scale-110 transform`}>
            {s.icon}
          </a>
        ))}
      </div>

      <p className="text-white/20 text-[10px] tracking-widest pb-2">© 2024 Bioprocess Laboratory</p>
    </div>
  );
}
