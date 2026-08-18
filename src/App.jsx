import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import config from './config';
import HomeView from './views/HomeView';
import AnnouncementView from './views/AnnouncementView';
import ScoresView from './views/ScoresView';
import PracticalNeedsView from './views/PracticalNeedsView';

const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit:    { opacity: 0, y: -16, scale: 0.98 },
};

const pageTransition = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1],
};

export default function App() {
  const [view, setView] = useState('home');

  const views = {
    home:          <HomeView navigate={setView} />,
    announcement:  <AnnouncementView navigate={setView} />,
    scores:        <ScoresView navigate={setView} />,
    practical:     <PracticalNeedsView navigate={setView} />,
  };

  return (
    <div
      className="min-h-screen w-full relative flex items-start md:items-center justify-center"
      style={{
        backgroundImage: `url(${config.backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 pointer-events-none" />

      {/* Card container — wider on desktop */}
      <div className="relative z-10 w-full md:max-w-lg md:my-10">
        <div className="bg-[#0a0a0a] min-h-screen md:min-h-0 md:rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={view}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              {views[view]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
