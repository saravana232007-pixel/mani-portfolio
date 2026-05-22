import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Flame, 
  Wrench, 
  Globe, 
  Brain, 
  Activity, 
  CheckCircle2, 
  Eye, 
  Info,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Tilt from './Tilt';

interface SkillsCardProps {
  onClose: () => void;
  onContactClick: () => void;
}

interface SkillDetail {
  name: string;
  level: string;
  percentage: number;
  description: string;
  standards: string[];
  equipment: string[];
}

export default function SkillsCard({ onClose, onContactClick }: SkillsCardProps) {
  const [activeCategory, setActiveCategory] = useState<'ndt' | 'rope' | 'languages' | 'personal'>('ndt');
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const ndtSkills: SkillDetail[] = [
    {
      name: 'Ultrasonic Testing (UT)',
      level: 'ASNT Level II / Specialist',
      percentage: 95,
      description: 'Advanced ultrasonic flaw detection and thickness gauging. Specialist in structural welding assessments, corrosion mapping, and lamination checks using high-precision portable UT equipment.',
      standards: ['ASME Sec V', 'AWS D1.1', 'ASNT SNT-TC-1A'],
      equipment: ['Digital Ultrasonic Flaw Detectors', 'Thickness Gauges', 'Calibration Blocks (IIW, V1, V2)']
    },
    {
      name: 'Magnetic Particle Testing (MT)',
      level: 'ASNT Level II',
      percentage: 90,
      description: 'Surface and near-surface defect detection using wet/dry magnetic particles. Skilled in magnetic yoke application, field direction verification, and crack propagation analysis in welds and structural components.',
      standards: ['ASME Sec V Art 7', 'ASTM E1444', 'ISO 9934'],
      equipment: ['AC/DC Electromagnetic Yokes', 'Pie Gauges', 'Ketos Rings', 'Black Light lamps']
    },
    {
      name: 'Liquid Penetrant Testing (PT)',
      level: 'ASNT Level II',
      percentage: 92,
      description: 'High-sensitivity developer application for locating surface-breaking discontinuities. Experienced with solvent-removable and water-washable penetrants across stainless steel, alloy steels, and non-porous materials.',
      standards: ['ASME Sec V Art 6', 'ASTM E165', 'ISO 3452'],
      equipment: ['Visible Dye Penetrants', 'Solvent Cleaners', 'Dry/Wet Developers', 'Lux Meters']
    },
    {
      name: 'Radiographic Interpretation (RT)',
      level: 'ASNT Level II Evaluator',
      percentage: 88,
      description: 'In-depth analysis of radiographic weldment films to identify porosity, slag, lack of fusion, cracking, and incomplete penetration. High adherence to radiographic density and sensitivity standards.',
      standards: ['ASME Sec V Art 2', 'API 1104', 'ASME Sec VIII'],
      equipment: ['Industrial Film Viewers', 'Densitometers', 'IQI (Wire/Hole Type)', 'Step Wedges']
    }
  ];

  const ropeSkills: SkillDetail[] = [
    {
      name: 'IRATA Level 2 Rigging & Access',
      level: 'Certified ropes technician',
      percentage: 92,
      description: 'Certified IRATA Level 2 rope access operations. Skilled in high-angle structural rigging, rope transfers, tensioned lines, vertical rescue scenarios, auxiliary rigging systems, and strictly hazard-conscious operations.',
      standards: ['IRATA ICOP', 'ISO 22846', 'BS 7985'],
      equipment: ['Petzl ID/Asap', 'Full Body Harnesses', 'Ascenders/Descenders', 'Anchors & High-lines']
    },
    {
      name: 'Sheeting (Rope Access)',
      level: 'Highly Expertized Specialist',
      percentage: 98,
      description: 'Lead master of high-elevation claddings, industrial roof sheet laying, and wall sheeting installations on sheer industrial structures and skyscrapers, applying strict heavy-wind double-rope rigging controls.',
      standards: ['BS EN 1090-4', 'IRATA ICOP Sec 3', 'Working at Height Regs'],
      equipment: ['Heavy Duty Rigging Hoists', 'Pneumatic Sheeting Tools', 'Vacuum Lifting Devices']
    },
    {
      name: 'Painting (Rope Access)',
      level: 'Highly Expertized Specialist',
      percentage: 97,
      description: 'Expert in industrial protective coatings, abrasive blasting prep, and airless spray application at high altitude. Expert in continuous-spray work positioning and safety containment barriers.',
      standards: ['ISO 12944 Paint Standards', 'ASNT NACE Prep', 'IRATA Safety Rigging'],
      equipment: ['Airless Paint Sprayers', 'Dynamic Safety Positioning Seats', 'Protective Over-suits']
    },
    {
      name: 'Maintenance (Rope Access)',
      level: 'Highly Expertized Specialist',
      percentage: 99,
      description: 'Senior lead in preventative maintenance, structural repairs, facade repairs, weld crack remediations, and asset preservation. Expert at emergency rope-access engineering solutions.',
      standards: ['API 570 Piping Inspection', 'BS EN 12811 Scaffolding/Ropes', 'IRATA Hazard Mitigation'],
      equipment: ['Pneumatic Cold Grinders', 'Hydraulic Impact Tools', 'Specialized Debris Netting']
    },
    {
      name: 'High-Altitude Safety Compliance',
      level: 'Lead Safety Officer guidelines',
      percentage: 96,
      description: 'Adhering to world-class safety rules in extreme-elevation environments, refineries, steel plants, and overhead structures. Zero safe-work violations throughout career.',
      standards: ['OSHA Standard 1926.501', 'HSE Working at Heights', 'Site Safety Work Permits'],
      equipment: ['Fall Arrester Systems', 'Safety Lanyards', 'Anchor Point Testers']
    }
  ];

  const languages = [
    { name: 'Tamil', level: 'Native / Mother Tongue', desc: 'Flawless native speaking and technical instruction layout.' },
    { name: 'Hindi', level: 'Fluent / Daily Operations', desc: 'Fluent conversational and precise on-site project communication.' },
    { name: 'English', level: 'Professional Technical working proficiency', desc: 'Clear reporting, international team coordination, and reading datasheets.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      className="w-full max-w-5xl p-6 md:p-10 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/50 text-gray-805 pointer-events-auto"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Interactive Sidebar / Nav */}
        <div className="w-full lg:w-72 shrink-0 space-y-6">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 tracking-wide uppercase">
              <Award className="w-3 h-3" /> Technical Competence
            </span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Expertise & Skills</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Duly certified credentials in Non-Destructive Testing (NDT) and high-elevation industrial access systems.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-col gap-1.5 p-1 bg-gray-50/70 border border-gray-100 rounded-2xl">
            <button
              onClick={() => { setActiveCategory('ndt'); setSelectedSkill(null); }}
              className={`w-full py-2.5 px-4 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                activeCategory === 'ndt'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-150/40'
              }`}
            >
              <span className="flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5" /> NDT Testing Methods
              </span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-bold">ASNT L2</span>
            </button>

            <button
              onClick={() => { setActiveCategory('rope'); setSelectedSkill(null); }}
              className={`w-full py-2.5 px-4 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                activeCategory === 'rope'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-150/40'
              }`}
            >
              <span className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5" /> Rope Access & Safety
              </span>
              <span className="text-[10px] bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-full font-bold">IRATA L2</span>
            </button>

            <button
              onClick={() => { setActiveCategory('languages'); setSelectedSkill(null); }}
              className={`w-full py-2.5 px-4 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                activeCategory === 'languages'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-150/40'
              }`}
            >
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" /> Languages Fluent
              </span>
              <span className="text-[10px] bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded-full font-bold">Multilingual</span>
            </button>

            <button
              onClick={() => { setActiveCategory('personal'); setSelectedSkill(null); }}
              className={`w-full py-2.5 px-4 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                activeCategory === 'personal'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-150/40'
              }`}
            >
              <span className="flex items-center gap-2">
                <Brain className="w-3.5 h-3.5" /> Professional & Fitness
              </span>
              <span className="text-[10px] bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded-full font-bold">Fit & active</span>
            </button>
          </div>

          {/* Quick info quote */}
          <Tilt maxRotate={8} className="w-full">
            <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/50 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Uncompromising Quality</h4>
              </div>
              <p className="text-[11px] text-emerald-900/80 leading-relaxed">
                Every weld scan, liquid penetration check, or rope deployment is thoroughly tracked, cataloged, and signed off representing peak safety protocols.
              </p>
            </div>
          </Tilt>
        </div>

        {/* Right Content Space: Active Tab Details */}
        <div className="flex-1 flex flex-col justify-between min-h-[400px]">
          <div className="space-y-6">
            
            <AnimatePresence mode="wait">
              {/* NDT TESTING Category */}
              {activeCategory === 'ndt' && (
                <motion.div
                  key="ndt"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Active certification fields</h3>
                    <span className="text-xs text-gray-400">Classroom & Lab Certified</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ndtSkills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          selectedSkill?.name === skill.name
                            ? 'bg-gray-900 text-white border-gray-900 shadow-lg scale-[1.01]'
                            : 'bg-gray-50/50 text-gray-800 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-sm tracking-tight leading-snug">{skill.name}</h4>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                            selectedSkill?.name === skill.name ? 'bg-white/10 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                          }`}>
                            L2
                          </span>
                        </div>
                        <p className={`text-xs ${selectedSkill?.name === skill.name ? 'text-gray-300' : 'text-gray-500'} line-clamp-2 leading-relaxed mb-3`}>
                          {skill.description}
                        </p>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono">
                            <span>Diagnostic Mastery</span>
                            <span className="font-bold">{skill.percentage}%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-250 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 0.8 }}
                              className={`h-full ${selectedSkill?.name === skill.name ? 'bg-emerald-400' : 'bg-gray-900'}`} 
                            />
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-sky-500 hover:underline">
                          <span>Click to see test standards</span> <ChevronRight className="w-3 h-3" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ROPE ACCESS Category */}
              {activeCategory === 'rope' && (
                <motion.div
                  key="rope"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Industrial Heights & Rigging</h3>
                    <span className="text-xs text-gray-400">IRATA Registered</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ropeSkills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          selectedSkill?.name === skill.name
                            ? 'bg-gray-900 text-white border-gray-900 shadow-lg scale-[1.01]'
                            : skill.level.includes('Highly Expertized')
                              ? 'bg-amber-50/30 text-gray-800 border-amber-300 hover:border-amber-400 hover:bg-amber-50/50 shadow-xs'
                              : 'bg-gray-50/50 text-gray-800 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h4 className="font-bold text-sm tracking-tight leading-snug">{skill.name}</h4>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold whitespace-nowrap shrink-0 ${
                            selectedSkill?.name === skill.name
                              ? skill.level.includes('Highly Expertized') ? 'bg-amber-400/20 text-amber-300' : 'bg-white/10 text-blue-300'
                              : skill.level.includes('Highly Expertized') ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {skill.level.includes('Highly Expertized') ? 'Expert' : 'Active'}
                          </span>
                        </div>
                        <p className={`text-xs ${selectedSkill?.name === skill.name ? 'text-gray-300' : 'text-gray-500'} line-clamp-2 leading-relaxed mb-3`}>
                          {skill.description}
                        </p>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono">
                            <span>Access Mastery</span>
                            <span className="font-bold">{skill.percentage}%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-250 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 0.8 }}
                              className={`h-full ${selectedSkill?.name === skill.name ? 'bg-blue-400' : 'bg-gray-950'}`} 
                            />
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-sky-500 hover:underline">
                          <span>Click to see safety codes</span> <ChevronRight className="w-3 h-3" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* LANGUAGES Category */}
              {activeCategory === 'languages' && (
                <motion.div
                  key="languages"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Multilingual Speaking & Writing</h3>
                    <span className="text-xs text-slate-400">Collaborative efficiency</span>
                  </div>

                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.name} className="p-4 rounded-2xl bg-gray-50/60 border border-gray-200/60 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold font-mono text-gray-700 shrink-0 text-sm">
                          {lang.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-gray-900">{lang.name}</h4>
                            <span className="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full font-semibold">{lang.level}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            {lang.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-100/40 text-[11px] text-amber-900 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                    <p className="leading-relaxed">
                      <strong>Deployment Ready:</strong> S. Manikandan serves as a powerful liaison for regional and national sites across India or internationally, bridging communication perfectly between operators and engineering heads.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* PERSONAL / traits Category */}
              {activeCategory === 'personal' && (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Elite Fitness & Work Ethic</h3>
                    <span className="text-xs text-slate-400">At 26 years of age</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl border border-gray-150 bg-white space-y-2">
                      <div className="flex items-center gap-2 text-rose-600">
                        <Activity className="w-4 h-4" />
                        <h4 className="font-bold text-xs uppercase tracking-wider">Physical Fitness & Stamina</h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Undergoes routine industrial medical checkups. Full stamina for long shifts under harsh climatic circumstances (high wind, intense direct heat, high elevation vertical lines).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-gray-150 bg-white space-y-2">
                      <div className="flex items-center gap-2 text-amber-600">
                        <Eye className="w-4 h-4" />
                        <h4 className="font-bold text-xs uppercase tracking-wider">High Diligence</h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Dedicated, hardworking attitude toward every assignment. Inspects welds and rivets thoroughly with a keen eye for minute stress fractures.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-gray-150 bg-white space-y-2">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <Award className="w-4 h-4" />
                        <h4 className="font-bold text-xs uppercase tracking-wider">Dynamic Adaptation</h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Quick to learn specialized site equipment, scanners, or customized crane setups. Strong technical background at SAI Heattreaters.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Displaying detailed skill standards / equipment popup style overlay inside card if clicked */}
            <AnimatePresence>
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-5 rounded-2xl bg-gray-950 text-white space-y-4 border border-gray-800"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-wider uppercase block">Detail Breakdown</span>
                      <h4 className="font-bold text-base">{selectedSkill.name}</h4>
                    </div>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="text-xs text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg"
                    >
                      Hide Details
                    </button>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">{selectedSkill.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div>
                      <h5 className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider mb-1.5">Compliance Codes & Standards</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedSkill.standards.map((std) => (
                          <span key={std} className="text-[10px] bg-emerald-500/10 text-emerald-300 font-medium px-2 py-0.5 rounded-md border border-emerald-500/20">
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider mb-1.5">Calibrated Equipment Expertise</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedSkill.equipment.map((eq) => (
                          <span key={eq} className="text-[10px] bg-slate-800 text-slate-200 font-medium px-2 py-0.5 rounded-md border border-slate-700">
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
            <button
              onClick={onContactClick}
              className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer text-center"
            >
              Consult with Manikandan
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Back to Start
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
