import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import Tilt from './Tilt';

// @ts-ignore
import heroPhoto from '../../assets/ChatGPT Image May 20, 2026, 04_24_16 PM.png';

interface HeroProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onContactClick, onExploreClick }: HeroProps) {
  return (
    <div className="text-left flex flex-col-reverse md:flex-row-reverse items-center md:items-start justify-between gap-8 md:gap-16 lg:gap-24 mt-4 md:mt-24 lg:mt-28 pb-12 max-w-7xl w-full mx-auto px-4 pointer-events-auto transition-all">
      
      {/* Left side content panel */}
      <div className="flex-1 flex flex-col items-center md:items-start w-full md:max-w-xl lg:max-w-2xl md:ml-0 md:mr-auto mt-20 md:mt-0 pt-0">
        {/* Large two-line heading with overlapping effect */}
        <h1 className="flex flex-col items-center md:items-start text-center md:text-left select-none w-full">
          {/* Line 1 - Titanium Steel Charcoal with high-contrast backing */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#0B0F19] leading-none tracking-tighter drop-shadow-[0_2px_12px_rgba(255,255,255,0.7)]"
          >
            MANIKANDAN.S
          </motion.span>
          {/* Line 2 - Industrial Black with premium gear accent coloring */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl lg:text-3xl font-extrabold leading-none tracking-tight mt-3 block text-black drop-shadow-[0_2px_8px_rgba(255,255,255,0.75)]"
          >
            IRATA Level 2 & NDT Technician
          </motion.span>
        </h1>

        {/* Office Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.5 }}
          className="mt-5 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/35 backdrop-blur-md border border-white/50 shadow-sm max-w-md sm:max-w-lg w-full text-left"
        >
          <MapPin className="w-4 h-4 text-gray-700 shrink-0" />
          <div className="space-y-0.5 flex-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-mono leading-none">Working at</span>
            <p className="text-xs font-semibold text-gray-900 leading-snug">
              Sai Heatreaters & Non Destructive Testing Pvt Ltd, Vashi, Navi Mumbai, Maharashtra, India
            </p>
          </div>
        </motion.div>

        {/* Centered call-to-action buttons styled as the theme button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-stretch gap-3 mt-5 p-2.5 rounded-2xl bg-white/25 backdrop-blur-md border border-white/50 shadow-2xl max-w-md sm:max-w-lg w-full"
        >
          <button
            onClick={onContactClick}
            className="flex-1 px-6 py-3 rounded-xl bg-gray-900 text-white text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-md cursor-pointer text-center"
          >
            contact
          </button>
          
          <button
            onClick={onExploreClick}
            className="flex-1 px-6 py-3 rounded-xl bg-white/70 backdrop-blur-xs text-gray-800 text-xs md:text-sm font-semibold uppercase tracking-wider border border-white/60 hover:bg-white/90 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            <span>View Bio & About</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>
        </motion.div>

        {/* Premium subtle metrics/features bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-7 grid grid-cols-3 gap-3 md:gap-5 w-full max-w-xl p-5 rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl text-left"
        >
          <div className="flex flex-col justify-center">
            <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider">Access Rating</h4>
            <p className="text-xs md:text-sm lg:text-base font-bold text-gray-800 mt-1.5">IRATA L2 Certified</p>
          </div>
          <div className="flex flex-col justify-center border-l border-gray-200/30 pl-3 md:pl-4">
            <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider">Inspection</h4>
            <p className="text-xs md:text-sm lg:text-base font-bold text-gray-800 mt-1.5 font-sans">ASNT UT, MT, RT, PT</p>
          </div>
          <div className="flex flex-col justify-center border-l border-gray-200/30 pl-3 md:pl-4">
            <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider">Safety Record</h4>
            <p className="text-xs md:text-sm lg:text-base font-bold text-emerald-600 mt-1.5 flex items-center justify-start gap-1 font-mono">
              <span className="text-[10px] md:text-xs">●</span> Zero Incidents
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right side photo container with elegant floating card design */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.4 }}
        className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-none md:w-[420px] lg:w-[480px] aspect-[3/2] flex-none relative items-center justify-center md:mr-auto"
      >
        <Tilt maxRotate={12} className="w-full h-full">
          <div className="relative w-full h-full group font-sans">
            {/* Ambient drop shadow backdrop glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Outer high precision casing border frame */}
            <div className="relative w-full h-full rounded-lg border border-white/40 bg-white/40 backdrop-blur-md p-2.5 shadow-2xl overflow-hidden flex flex-col justify-between">
              <div className="w-full h-full rounded-md overflow-hidden bg-gray-100/50 relative border border-gray-200/20">
                <img
                  src={heroPhoto}
                  alt="Manikandan.S - IRATA Level 2 & NDT Technician"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent opacity-80 pointer-events-none" />
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>

    </div>
  );
}
