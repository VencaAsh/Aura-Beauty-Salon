'use client';

import React, { useEffect, useState } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number; // How far it moves
  speed?: number; // Speed of the animation
  className?: string;
  direction?: 'vertical' | 'horizontal' | 'circular';
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  amplitude = 10,
  speed = 3,
  className = '',
  direction = 'vertical',
}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate position based on sine wave
      const newPosition = Math.sin(elapsed / (1000 / speed)) * amplitude;
      setPosition(newPosition);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [amplitude, speed]);

  let transform = '';
  
  switch (direction) {
    case 'vertical':
      transform = `translateY(${position}px)`;
      break;
    case 'horizontal':
      transform = `translateX(${position}px)`;
      break;
    case 'circular':
      transform = `translate(${Math.cos(position / amplitude) * amplitude / 2}px, ${position}px)`;
      break;
    default:
      transform = `translateY(${position}px)`;
  }

  return (
    <div 
      className={className}
      style={{ 
        transform,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
