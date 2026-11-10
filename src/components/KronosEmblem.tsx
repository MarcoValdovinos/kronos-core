import React from 'react';

export const KronosEmblem: React.FC<{ size?: 'sm' | 'md' | 'hero' }> = ({ size = 'md' }) => {
  const px = size === 'sm' ? 36 : size === 'hero' ? 84 : 48;
  return (
    <div className="flex items-center gap-3 select-none">
      <div style={{ width: px, height: px }} className="relative flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(0,243,255,0.7)]">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0,243,255,0.3)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,0,85,0.4)" strokeWidth="1.2" strokeDasharray="12 6" />
          <polygon points="50,14 81,32 81,68 50,86 19,68 19,32" fill="#060612" stroke="#00f3ff" strokeWidth="2.5" />
          <line x1="38" y1="30" x2="38" y2="70" stroke="#00f3ff" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="38" y1="50" x2="62" y2="32" stroke="#00f3ff" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="38" y1="50" x2="64" y2="68" stroke="#ff0055" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="50,26 54,34 46,34" fill="#ff0055" />
          <circle cx="50" cy="50" r="3" fill="#ffffff" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-black tracking-[0.2em] text-cyan-400 text-sm sm:text-base leading-none">KRONOS</span>
          <span className="font-light tracking-[0.25em] text-pink-500 text-xs sm:text-sm leading-none border-l border-pink-500/40 pl-2">PROTOCOL</span>
        </div>
        <div className="text-[9px] tracking-wider text-stone-400 font-mono mt-1">
          <span className="text-pink-400 font-bold">ARKHE ZERO</span> · <span className="text-cyan-300">ML-DSA-87</span> · <span className="text-amber-400">ΔΨ = ∞</span>
        </div>
      </div>
    </div>
  );
};
