import { useState } from 'react';
import { Play, FileText, ChevronRight } from 'lucide-react';
import BackButton from '../components/BackButton';
import Modal from '../components/Modal';
import config from '../config';

// ── Menu definitions ──────────────────────────────────────────
const documents = [
  { id: 'practical-schedules',    label: 'Practical Schedules',      emoji: '📅', type: 'pdf', src: config.documents.practicalSchedules    },
  { id: 'report-proposal-formats',label: 'Report & Proposal Formats', emoji: '📝', type: 'pdf', src: config.documents.reportProposalFormats },
  { id: 'guidebook',              label: 'Guidebook',                emoji: '📖', type: 'pdf', src: config.documents.guidebook              },
  { id: 'workbook',               label: 'Workbook',                 emoji: '📓', type: 'pdf', src: config.documents.workbook               },
];

export default function PracticalNeedsView({ navigate }) {
  const [modal, setModal] = useState(null);

  const openVideo = () =>
    setModal({ type: 'youtube', label: 'Procedural & Safety Induction Video', src: config.youtubeEmbedUrl });
  const openDoc = (doc) => setModal({ type: 'pdf', label: doc.label, src: doc.src });
  const closeModal = () => setModal(null);

  return (
    <>
      <div className="flex flex-col px-5 pt-6 pb-10 gap-6 min-h-screen md:min-h-0">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <BackButton onClick={() => navigate('home')} />
          <span className="text-xs text-white/30 font-medium tracking-widest uppercase">Practical Needs</span>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-lg font-black tracking-widest text-gradient uppercase leading-tight">FIND WHAT YOU</h2>
          <h2 className="text-lg font-black tracking-widest text-gradient uppercase leading-tight">NEED HERE!</h2>
        </div>

        {/* Menu list */}
        <div className="flex flex-col gap-3">

          {/* Video item */}
          <button id="menu-video" onClick={openVideo} className="btn-nav group">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-red-500/15 text-red-400 flex-shrink-0 group-hover:bg-red-500/25 transition-colors duration-200">
                <Play size={16} fill="currentColor" />
              </span>
              <div className="text-left">
                <p className="font-semibold text-sm text-white">Procedural & Safety Induction</p>
                <p className="text-white/40 text-xs mt-0.5">Watch the video guide</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-white/40 flex-shrink-0" />
          </button>

          {/* Divider label */}
          <div className="flex items-center gap-3 px-1 mt-1">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/25 text-xs tracking-widest uppercase">Documents</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Document items */}
          {documents.map((doc) => (
            <button key={doc.id} id={`menu-${doc.id}`} onClick={() => openDoc(doc)} className="btn-nav group">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 flex-shrink-0 group-hover:bg-white/12 transition-colors duration-200 text-base">
                  {doc.emoji}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-sm text-white">{doc.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">Preview document</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <FileText size={13} className="text-white/25" />
                <ChevronRight size={16} className="text-white/40" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal ─────────────────────────────────────────── */}
      <Modal isOpen={!!modal} onClose={closeModal} title={modal?.label ?? ''}>
        {modal?.type === 'youtube' && (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe id="youtube-iframe" src={modal.src} title={modal.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        )}
        {modal?.type === 'pdf' && (
          <iframe id="pdf-iframe" src={modal.src} title={modal.label}
            className="w-full border-0" style={{ height: '70vh' }} />
        )}
      </Modal>
    </>
  );
}
