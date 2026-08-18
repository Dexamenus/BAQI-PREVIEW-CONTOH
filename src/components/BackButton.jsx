import { ChevronLeft } from 'lucide-react';

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      id="back-button"
      aria-label="Go back to home"
      className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-200 group"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
        <ChevronLeft size={18} />
      </span>
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}
