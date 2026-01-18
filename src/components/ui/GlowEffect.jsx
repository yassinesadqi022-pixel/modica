import { useEffect, useState } from 'react';
import colors from '../../config/colors';

export default function GlowEffect() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${colors.orangeRoyal}, transparent)`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        transitionDuration: '3000ms',
        transitionTimingFunction: 'ease-in-out'
      }}
    />
  );
}