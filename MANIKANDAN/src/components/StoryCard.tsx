import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ShieldCheck, UserCheck, Trophy } from 'lucide-react';
import Tilt from './Tilt';

// @ts-ignore
import employeeOfTheYearPhoto from '../../employe of the year photo/WhatsApp Image 2026-05-20 at 11.40.17 PM.jpeg';

interface StoryCardProps {
  onClose: () => void;
  onContactClick: () => void;
}

export default function StoryCard({ onClose, onContactClick }: StoryCardProps) {
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'award'>('profile');

  const milestones = [
    { year: 'Present', role: 'Rope Access Specialist', company: 'Sai Heatreaters & Non Destructive Testing Pvt Ltd' },
    { year: '2024', role: 'RA sheeting ,RA painting ,RA maintanance specialist', company: 'GLOBAL REMOTE NDT WORKS' },
    { year: '2023', role: 'IRATA Level 1 Technician', company: 'GLOBAL REMOTE NDT WORKS' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: 30, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-4xl p-6 md:p-10 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/50 text-gray-800 pointer-events-auto"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        {/* Left Side: Summary & Certifications / Tabs */}
        <div className="flex-1 space-y-6">
          {/* Section Dynamic Toggle Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-3">
            <button
              onClick={() => setActiveSubTab('profile')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeSubTab === 'profile'
                  ? 'bg-gray-950 text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/90'
              }`}
            >
              <UserCheck className="w-4 h-4" /> Professional Profile
            </button>
            <button
              onClick={() => setActiveSubTab('award')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeSubTab === 'award'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/90'
              }`}
            >
              <Trophy className="w-4 h-4 text-yellow-300" /> Employee of the Year 2024
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeSubTab === 'profile' ? (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 tracking-wide uppercase">
                    <UserCheck className="w-3.5 h-3.5 text-gray-600" /> Professional Profile
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">MANIKANDAN.S</h2>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  I am S. Manikandan, a certified NDT Technician with IRATA Level 2 rope access certification, currently employed at SAI Heattreaters & Non Destructive Testing Pvt. Ltd. At 26 years of age, I bring strong technical knowledge in non-destructive testing, a physically fit and active lifestyle, and a dedicated, hardworking attitude toward every assignment. I am fluent in Tamil, Hindi, and English, which allows me to work effectively in diverse teams across various locations. I am always willing to take on challenging work environments and committed to maintaining the highest standards of safety and quality.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="award"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 tracking-wide uppercase">
                    <Trophy className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Elite Honor Roll
                  </span>
                  <h2 className="text-3xl font-extrabold text-gray-950 tracking-tight">
                    Employee of the Year 2024
                  </h2>
                </div>

                <Tilt maxRotate={6} className="w-full">
                  <div className="p-4 rounded-2xl bg-amber-50/25 border border-amber-200/60 space-y-4 shadow-xs">
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 border border-amber-200/30 aspect-video md:aspect-[16/10] max-h-72 flex items-center justify-center">
                      <img
                        src={employeeOfTheYearPhoto}
                        alt="Manikandan.S - Employee of the Year 2024 Certificate/Award"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                        <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider uppercase">Official Certification</span>
                        <p className="text-xs font-semibold text-gray-100 leading-snug">
                          Awarded to S. Manikandan for outstanding safety vigilance and operational excellence.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      S. Manikandan was recognized as the <strong>Employee of the Year 2024</strong> for unmatched service dedication, flawless safety compliance, and proactive hazard prevention. Over the course of 2024, he demonstrated consistent technical precision and stellar physical endurance across challenging heights, sheeting projects, and complex NDT inspections.
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Professional Milestones */}
        <div className="w-full md:w-80 space-y-6 border-t md:border-t-0 md:border-l border-gray-200/80 pt-6 md:pt-0 md:pl-8">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-gray-700" /> Industry Timeline
          </h3>
          <div className="relative border-l border-gray-200 pl-4 ml-2 space-y-6">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative group">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400 group-hover:bg-gray-800 transition-colors ring-4 ring-white" />
                <time className="text-[11px] font-mono text-gray-400 font-medium">{milestone.year}</time>
                <h4 className="font-semibold text-xs text-gray-900 mt-0.5">{milestone.role}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">{milestone.company}</p>
              </div>
            ))}
          </div>

          <Tilt maxRotate={10} className="w-full">
            <div className="p-4 rounded-2xl bg-gray-100/80 border border-gray-200/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Safety & Compliance
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Maintains zero-incident safety record. Double-checked equipment certifications, pre-task hazard assessments, and rescue plans.
              </p>
            </div>
          </Tilt>

          <div className="flex gap-2">
            <button
              onClick={onContactClick}
              className="flex-1 py-2.5 px-4 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer text-center"
            >
              Consult Me
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
