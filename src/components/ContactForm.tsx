import { motion } from 'motion/react';
import { Mail, Phone, ShieldCheck, ArrowLeft } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      className="w-full max-w-md p-8 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/50 text-gray-800 pointer-events-auto mx-auto space-y-6"
    >
      <div className="space-y-1.5 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-gray-800 tracking-wider uppercase">
          <Mail className="w-3 h-3 text-gray-650" /> Dispatch Center
        </span>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Get In Touch</h2>
      </div>

      <div className="space-y-4 pt-2">
        {/* Email */}
        <div className="flex gap-4 items-center p-3.5 rounded-2xl bg-gray-50/50 border border-gray-100/80 hover:bg-gray-100 transition-all">
          <div className="p-2.5 rounded-xl bg-gray-100 text-gray-700">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Email</h4>
            <a 
              href="mailto:saravana232007@gmail.com" 
              className="text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors block"
            >
              saravana232007@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex gap-4 items-center p-3.5 rounded-2xl bg-gray-50/50 border border-gray-100/80 hover:bg-gray-100 transition-all">
          <div className="p-2.5 rounded-xl bg-gray-100 text-gray-700">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Phone Number</h4>
            <a 
              href="tel:99597920424" 
              className="text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors block"
            >
              99597920424
            </a>
          </div>
        </div>

        {/* Active Status */}
        <div className="flex gap-4 items-center p-3.5 rounded-2xl bg-gray-50/50 border border-gray-100/80">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Active Status</h4>
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Available for Onshore & Offshore Campaigns
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 px-5 rounded-full bg-gray-950 text-white hover:bg-gray-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Dashboard
        </button>
      </div>
    </motion.div>
  );
}
