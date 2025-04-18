'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number; // Speed factor (1 = normal, 0.5 = half speed, 2 = double speed)
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.2,
  direction = 'up',
  className = '',
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far the element is from the top of the viewport
        const elementTop = rect.top + scrollPosition;
        const elementVisible = scrollPosition - elementTop + windowHeight;
        
        // Calculate parallax offset
        const newOffset = elementVisible * speed * (direction === 'up' ? -1 : 1);
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return (
    <div 
      ref={elementRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxScroll;
