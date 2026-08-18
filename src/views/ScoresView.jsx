import { ExternalLink, BarChart2, Star } from 'lucide-react';
import BackButton from '../components/BackButton';
import config from '../config';

const sheetButtons = [
  {
    id: 'btn-scores',
    label: 'Scores Sheet',
    description: 'Pretests, practicals, rewards & final report',
    icon: <BarChart2 size={20} />,
    href: config.sheets.scores,
    accent: 'from-sky-500/20 to-blue-600/10 border-sky-500/30 hover:border-sky-400/60',
    iconColor: 'text-sky-400',
  },
  {
    id: 'btn-points',
    label: 'Points Sheet',
    description: 'All consequence points tracked per student',
    icon: <Star size={20} />,
    href: config.sheets.points,
    accent: 'from-violet-500/20 to-purple-600/10 border-violet-500/30 hover:border-violet-400/60',
    iconColor: 'text-violet-400',
  },
];

export default function ScoresView({ navigate }) {
  return (
    <div className="flex flex-col px-5 pt-6 pb-10 gap-6 min-h-screen md:min-h-0">

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <BackButton onClick={() => navigate('home')} />
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">Scores & Points</span>
      </div>

      {/* Heading */}
      <div>
        <h2 className="text-lg font-black tracking-widest text-gradient uppercase leading-tight">CHECK OUT YOUR</h2>
        <h2 className="text-lg font-black tracking-widest text-gradient uppercase leading-tight">PERFORMANCES!</h2>
      </div>

      {/* Description */}
      <p className="text-white/55 text-sm leading-relaxed font-light">
        The scores sheet is already integrated with all of the scores such as pretests, practicals,
        rewards, and final report scores. As well as the points sheet that includes all the points
        based on every consequences. Filled automatically by laboratory assistants and lecturers.
      </p>

      {/* Sheet buttons */}
      <div className="flex flex-col gap-4 mt-2">
        {sheetButtons.map((btn) => (
          <a key={btn.id} id={btn.id} href={btn.href} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br border transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl group ${btn.accent}`}>
            <div className={`flex-shrink-0 ${btn.iconColor}`}>{btn.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">{btn.label}</p>
              <p className="text-white/45 text-xs mt-0.5 truncate">{btn.description}</p>
            </div>
            <ExternalLink size={15} className="text-white/30 group-hover:text-white/70 flex-shrink-0 transition-colors duration-200" />
          </a>
        ))}
      </div>

      <p className="text-white/20 text-xs text-center mt-auto pt-4">
        Sheets are updated by assistants & lecturers
      </p>
    </div>
  );
}
