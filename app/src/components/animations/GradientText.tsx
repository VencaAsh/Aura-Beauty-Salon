'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  duration?: number;
  className?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ['#E6CCB2', '#C9B8A8', '#D8C3B0'],
  duration = 8000,
  className = '',
  animate = true,
}) => {
  const [gradientPosition, setGradientPosition] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!animate) return;

    let startTime: number;
    
    const animateGradient = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate position (0 to 100)
      const position = (elapsed % duration) / duration * 100;
      setGradientPosition(position);
      
      animationRef.current = requestAnimationFrame(animateGradient);
    };
    
    animationRef.current = requestAnimationFrame(animateGradient);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, duration]);

  // Create gradient string
  const colorString = colors.join(', ');
  const backgroundSize = animate ? '200% auto' : '100% auto';
  const backgroundPosition = animate ? `${gradientPosition}% 0` : 'initial';

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${colorString}, ${colors[0]})`,
        backgroundSize,
        backgroundPosition,
        transition: animate ? 'background-position 0.1s ease-out' : 'none',
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
