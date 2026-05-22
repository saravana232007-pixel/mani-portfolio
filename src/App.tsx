import { useState, MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryCard from './components/StoryCard';
import SkillsCard from './components/SkillsCard';
import GalleryCard from './components/GalleryCard';
import ContactForm from './components/ContactForm';

// @ts-ignore
import videoBg from '../assets/Firefly a man working with his gears and tools in a loop video 993425.mp4';

const threeDPageVariants = {
  initial: {
    opacity: 0,
    rotateY: -12,
    rotateX: 4,
    z: -120,
    y: 35,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    z: 0,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 18,
      duration: 0.6,
    }
  },
  exit: {
    opacity: 0,
    rotateY: 12,
    rotateX: -4,
    z: -100,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.35,
    }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('start');
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (e.clientX / width - 0.5) * 18; // move video background slightly in negative direction
    const y = (e.clientY / height - 0.5) * 18;
    setParallax({ x, y });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gray-950 flex flex-col font-sans relative select-none overflow-x-hidden"
    >
      
      {/* Hero section with relative positioning, min-height and natural scroll */}
      <div className="relative min-h-screen w-full flex flex-col">
        
        {/* Background video element with deep 3D Parallax shift */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ 
            transform: `translate3d(${-parallax.x}px, ${-parallax.y}px, 0) scale(1.06)`,
            transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          className="fixed inset-0 w-full h-full object-cover z-0 opacity-100 blur-sm pointer-events-none"
        >
          <source src={videoBg} type="video/mp4" />
          <source src="assets/Firefly a man working with his gears and tools in a loop video 993425.mp4" type="video/mp4" />
        </video>

        {/* Immersive UI Elegant Color Grading & Overlay with slow anti-phase parallax tracking */}
        <div 
          style={{ 
            transform: `translate3d(${parallax.x * 0.4}px, ${parallax.y * 0.4}px, 0)`,
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          className="fixed inset-0 z-10 bg-[#0B0F19]/25 pointer-events-none" 
        />
        <div 
          className="fixed inset-0 z-10 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(11,15,25,0.2) 100%)',
            transform: `translate3d(${parallax.x * 0.2}px, ${parallax.y * 0.2}px, 0)`,
            transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
          }} 
        />
        <div className="fixed bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-gray-950/20 to-transparent z-10 pointer-events-none" />

        {/* Content wrapper covering entire viewport, rendering flex-col */}
        <div className="relative min-h-screen flex-1 flex flex-col z-20 justify-between">
          
          {/* Navigation Bar */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main content area with 3D Perspective */}
          <main 
            className="flex-1 flex items-start md:items-center justify-center relative px-6 md:px-12 pb-16 pt-4 md:pt-0"
            style={{ perspective: 1400, transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence mode="wait">
              {activeTab === 'start' && (
                <motion.div
                  key="start"
                  variants={threeDPageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full max-w-7xl flex justify-start"
                >
                  <Hero 
                    onContactClick={() => setActiveTab('contact')} 
                    onExploreClick={() => setActiveTab('story')} 
                  />
                </motion.div>
              )}

              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  variants={threeDPageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full flex justify-center"
                >
                  <StoryCard 
                    onClose={() => setActiveTab('start')} 
                    onContactClick={() => setActiveTab('contact')} 
                  />
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  variants={threeDPageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full flex justify-center"
                >
                  <SkillsCard 
                    onClose={() => setActiveTab('start')} 
                    onContactClick={() => setActiveTab('contact')} 
                  />
                </motion.div>
              )}



              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  variants={threeDPageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full flex justify-center"
                >
                  <GalleryCard 
                    onClose={() => setActiveTab('start')} 
                    onContactClick={() => setActiveTab('contact')} 
                  />
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div
                  key="contact"
                  variants={threeDPageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full flex justify-center"
                >
                  <ContactForm onClose={() => setActiveTab('start')} />
                </motion.div>
              )}
            </AnimatePresence>
          </main>



          {/* Premium Ambient Bottom Status/Disclaimer */}
          <footer className="w-full max-w-7xl mx-auto px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-gray-400 z-30 border-t border-gray-900/5 select-none font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SECURE ASNT LEVEL II WELD & STACK INSPECTION REGISTRY</span>
            </div>
            <div className="mt-2 sm:mt-0">
              <span>© {new Date().getFullYear()} Manikandan S Portfolio. Developed under strict IRATA guidelines.</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
