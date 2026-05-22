import { ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface TiltProps {
  children: ReactNode;
  className?: string;
  maxRotate?: number;
  perspective?: number;
  key?: string;
}

export default function Tilt({ children, className = '', maxRotate = 8, perspective = 1200 }: TiltProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to avoid jerky 3D moves
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateXSpring = useSpring(useTransform(y, [0, 1], [maxRotate, -maxRotate]), springConfig);
  const rotateYSpring = useSpring(useTransform(x, [0, 1], [-maxRotate, maxRotate]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of cursor relative to card [0, 1]
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
        perspective: perspective,
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}
