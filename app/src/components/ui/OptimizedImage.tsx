'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate low-quality placeholder if not provided (currently unused but kept for future use)
  // const generateBlurDataURL = (width: number, height: number) => {
  //   const canvas = document.createElement('canvas');
  //   canvas.width = width;
  //   canvas.height = height;
  //   const ctx = canvas.getContext('2d');
  //   if (ctx) {
  //     ctx.fillStyle = '#f3f4f6';
  //     ctx.fillRect(0, 0, width, height);
  //   }
  //   return canvas.toDataURL();
  // };

  const imageProps = {
    src,
    alt,
    quality,
    sizes,
    className: `${className} transition-opacity duration-300 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`,
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? 'eager' as const : loading,
    ...(fill ? { fill: true } : { width, height }),
    ...(placeholder === 'blur' && blurDataURL ? { placeholder: 'blur', blurDataURL } : {}),
  };

  if (hasError) {
    return (
      <div
        ref={imgRef}
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500`}
        style={fill ? {} : { width, height }}
      >
        <span className="text-sm" role="img" aria-label="Obrázek se nepodařilo načíst">Obrázek se nepodařilo načíst</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={fill ? 'relative' : ''}>
      {(isInView || priority) && (
        <>
          <Image {...imageProps} />
          {!isLoaded && (
            <div
              className={`absolute inset-0 bg-gray-200 animate-pulse ${
                fill ? '' : 'w-full h-full'
              }`}
              style={fill ? {} : { width, height }}
            />
          )}
        </>
      )}
      {!isInView && !priority && (
        <div
          className={`bg-gray-200 animate-pulse ${className}`}
          style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
        />
      )}
    </div>
  );
}
