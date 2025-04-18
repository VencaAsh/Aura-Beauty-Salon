'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SmoothRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
}

const SmoothReveal: React.FC<SmoothRevealProps> = ({
  children,
  direction = 'left',
  duration = 1000,
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Set initial and final styles based on direction
  let initialStyles = {};
  
  switch (direction) {
    case 'left':
      initialStyles = { clipPath: 'inset(0 100% 0 0)' };
      break;
    case 'right':
      initialStyles = { clipPath: 'inset(0 0 0 100%)' };
      break;
    case 'top':
      initialStyles = { clipPath: 'inset(100% 0 0 0)' };
      break;
    case 'bottom':
      initialStyles = { clipPath: 'inset(0 0 100% 0)' };
      break;
    default:
      initialStyles = { clipPath: 'inset(0 100% 0 0)' };
  }

  const style = {
    ...initialStyles,
    clipPath: isRevealed ? 'inset(0 0 0 0)' : (initialStyles as any).clipPath,
    transition: `clip-path ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default SmoothReveal;
