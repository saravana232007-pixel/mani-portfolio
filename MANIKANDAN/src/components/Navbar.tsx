import { useState, useEffect } from 'react';
import { Menu, X, Rocket, ShieldCheck } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: { label: string; id: ActiveTab }[] = [
    { label: 'Start', id: 'start' },
    { label: 'About', id: 'story' },
    { label: 'Skills', id: 'skills' },
    { label: 'Gallery', id: 'gallery' },
  ];

  const handleTabClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <header 
      id="main-nav-container"
      className="sticky top-0 left-0 right-0 w-full z-50 bg-transparent"
    >

      <nav className="w-full max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name on the left */}
          <button
            onClick={() => handleTabClick('start')}
            className="text-2xl font-semibold text-gray-900 tracking-tight hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2 text-left"
          >
            <span>Portfolio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Online" />
          </button>

          {/* Desktop Menu - hidden on mobile, visible md:flex */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-gray-700 cursor-pointer text-gray-900 duration-200 relative py-1`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions: Quick consult trigger */}
          <div className="hidden md:block">
            <button
              onClick={() => handleTabClick('contact')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide shadow-sm border transition-all cursor-pointer duration-200 ${
                activeTab === 'contact'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white/80 text-gray-800 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              Direct Contact
            </button>
          </div>

          {/* Mobile menu button using Lucide Menu/X icons */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-white/80 backdrop-blur-md text-gray-900 border border-gray-100 hover:bg-white focus:outline-none transition-all cursor-pointer shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown with white/95 opacity background, backdrop blur, rounded corners, shadow */}
        {isOpen && (
          <div className="absolute top-22 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100/80 p-5 mt-2 z-50 md:hidden transition-transform duration-300 ease-out">
            <div className="flex flex-col gap-3">
              {navigationItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gray-950 text-white text-base'
                        : 'text-gray-900 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <hr className="border-gray-100/80 my-1" />
              <button
                onClick={() => handleTabClick('contact')}
                className={`w-full py-2.5 px-4 rounded-xl text-left text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                  activeTab === 'contact'
                    ? 'bg-emerald-900 text-white'
                    : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
                }`}
              >
                <span>Contact Manikandan S</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
