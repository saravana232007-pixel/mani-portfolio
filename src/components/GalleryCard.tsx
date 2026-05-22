import { motion } from 'motion/react';
import { 
  Camera 
} from 'lucide-react';
import Tilt from './Tilt';

// @ts-ignore
import galleryImage1 from '../../assets/gallery_image_1.jpeg';
// @ts-ignore
import galleryImage2 from '../../assets/gallery_image_2.jpeg';
// @ts-ignore
import galleryImage3 from '../../assets/gallery_image_3.jpeg';
// @ts-ignore
import galleryImage4 from '../../assets/gallery_image_4.jpeg';
// @ts-ignore
import galleryImage5 from '../../assets/gallery_image_5.jpeg';

interface GalleryCardProps {
  onClose: () => void;
  onContactClick: () => void;
}

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export default function GalleryCard({ onClose, onContactClick }: GalleryCardProps) {
  const galleryItems: GalleryItem[] = [
    {
      id: 'item1',
      title: 'Active Vertical Industrial Rigging',
      image: galleryImage1
    },
    {
      id: 'item2',
      title: 'High-Altitude Suspended Execution',
      image: galleryImage2
    },
    {
      id: 'item3',
      title: 'NDT Surface Magnetic Fluid Scan',
      image: galleryImage3
    },
    {
      id: 'item4',
      title: 'Rope Access Exhaust-Stack Descent',
      image: galleryImage4
    },
    {
      id: 'item5',
      title: 'Authorized On-Site Weld Inspection',
      image: galleryImage5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      className="w-full max-w-6xl p-6 md:p-10 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/50 text-gray-800 pointer-events-auto"
    >
      <div className="space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-150 pb-6">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-gray-100 text-gray-800 tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5 text-gray-600" /> ON-SITE PHOTOS
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Project Gallery</h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl">
              Photographic showcase of high-elevation rope access setups, NDT weld inspections, and safety compliance audits executed by S. Manikandan.
            </p>
          </div>
        </div>

        {/* Gallery Grid of static photo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <Tilt key={item.id} maxRotate={10} className="w-full h-full">
              <div
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex-1">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Actions Bar (Strictly primary navigational components relative to parent context structure) */}
        <div className="flex items-center gap-3 pt-6 border-t border-gray-150">
          <button
            onClick={onContactClick}
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer text-center"
          >
            Inquire About On-Site Solutions
          </button>
          
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Back to Start
          </button>
        </div>

      </div>
    </motion.div>
  );
}
