import { ExternalLink, AlertTriangle, CheckCircle2, Link2 } from 'lucide-react';
import BackButton from '../components/BackButton';
import config from '../config';

const preparations = [
  { id: 1, text: '3×4 formal photo wearing collated shirt with almamater coat', note: 'Red Background' },
  { id: 2, text: 'Highlighted IRS', note: 'The Bioprocess Practicum subject in the study plan must be highlighted' },
  { id: 3, text: 'Proof of registration payment Rp 60.000 to BNI 1704885306', note: 'Under the name Amara Wahyu Ardinta' },
  { id: 4, text: 'Proof of following OA Instagram and Line', note: null },
];

export default function AnnouncementView({ navigate }) {
  return (
    <div className="flex flex-col px-5 pt-6 pb-10 gap-5 min-h-screen md:min-h-0">

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <BackButton onClick={() => navigate('home')} />
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">Announcement</span>
      </div>

      {/* Heading */}
      <div>
        <h2 className="text-lg font-black tracking-widest text-gradient uppercase leading-tight">OPEN REGISTRATION</h2>
        <p className="text-sm font-bold text-white/60 tracking-widest uppercase">Practicum · 2nd Batch Reaktif'24</p>
      </div>

      {/* Poster */}
      <div className="w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
        <img src={config.announcementPosterUrl} alt="Open Registration Announcement Poster" className="w-full object-contain" />
      </div>

      {/* Greeting card */}
      <div className="glass-light rounded-2xl p-4 flex flex-col gap-1.5">
        <p className="text-white font-semibold text-sm">👋 Hello, 2nd Batch of Reaktif'24!</p>
        <p className="text-white/70 text-sm">
          Today, <span className="text-white font-medium">registration will be opened!</span> Make sure you're ready with all the documents below.
        </p>
      </div>

      {/* Registration Link */}
      <div className="glass-light rounded-2xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest font-semibold">
          <Link2 size={12} />
          Registration Link
        </div>
        <a id="registration-link" href={config.registrationUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-start gap-2 text-sky-400 hover:text-sky-300 transition-colors duration-200 text-sm font-medium break-all leading-relaxed">
          <ExternalLink size={14} className="flex-shrink-0 mt-0.5" />
          {config.registrationUrl}
        </a>
      </div>

      {/* Preparation list */}
      <div className="glass-light rounded-2xl p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest font-semibold">
          <CheckCircle2 size={12} />
          What You Should Prepare
        </div>
        <ol className="flex flex-col gap-3">
          {preparations.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white/70 text-xs font-bold flex items-center justify-center mt-0.5">
                {item.id}
              </span>
              <div>
                <p className="text-white text-sm leading-snug">{item.text}</p>
                {item.note && <p className="text-white/45 text-xs mt-0.5 leading-snug">📌 {item.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Penalty warning */}
      <div className="rounded-2xl p-4 flex items-start gap-3 bg-amber-500/10 border border-amber-500/25">
        <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-amber-300 font-semibold text-sm">Late Submission Penalty</p>
          <p className="text-amber-200/70 text-xs leading-relaxed mt-0.5">
            Any delay on submission will have a point value consequence.{' '}
            <span className="text-amber-300 font-bold">−100 points per 5 minutes</span> of delay.
          </p>
        </div>
      </div>
    </div>
  );
}
