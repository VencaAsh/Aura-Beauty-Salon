'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Minus, Plus, RefreshCw } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export interface LightboxImage {
  src: string | StaticImageData;
  alt?: string;
}

interface LightboxViewerProps {
  images: LightboxImage[];
  startIndex?: number;
  onClose: () => void;
}

export default function LightboxViewer({ images, startIndex = 0, onClose }: LightboxViewerProps) {
  const [index, setIndex] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastTouchDistanceRef = useRef<number | null>(null);

  const imageUrl = useMemo(() => {
    const src = images[index]?.src;
    if (!src) return '';
    return typeof src === 'string' ? src : (src as StaticImageData).src;
  }, [images, index]);

  const resetTransform = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const close = useCallback(() => {
    onClose();
    // Reset after close to avoid flashing on next open
    setTimeout(() => resetTransform(), 0);
  }, [onClose, resetTransform]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    resetTransform();
  }, [images.length, resetTransform]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
    resetTransform();
  }, [images.length, resetTransform]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close, goPrev, goNext]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY; // wheel up to zoom in
    const step = 0.0015; // sensitivity
    const newScale = Math.min(4, Math.max(0.5, scale + delta * step));
    setScale(newScale);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragRef.current = { startX: e.clientX, startY: e.clientY, lastX: translate.x, lastY: translate.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setTranslate({ x: dragRef.current.lastX + dx, y: dragRef.current.lastY + dy });
  };
  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  // Touch support (drag + pinch)
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      lastTouchDistanceRef.current = dist;
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      setIsDragging(true);
      dragRef.current = { startX: t.clientX, startY: t.clientY, lastX: translate.x, lastY: translate.y };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const last = lastTouchDistanceRef.current;
      if (last) {
        const diff = dist - last;
        const step = 0.005;
        setScale((s) => Math.min(4, Math.max(0.5, s + diff * step)));
      }
      lastTouchDistanceRef.current = dist;
    } else if (e.touches.length === 1 && isDragging) {
      const t = e.touches[0];
      const dx = t.clientX - dragRef.current.startX;
      const dy = t.clientY - dragRef.current.startY;
      setTranslate({ x: dragRef.current.lastX + dx, y: dragRef.current.lastY + dy });
    }
  };
  const onTouchEnd = () => {
    setIsDragging(false);
    lastTouchDistanceRef.current = null;
  };

  const zoomIn = () => setScale((s) => Math.min(4, s + 0.25));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.25));

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex flex-col"
      aria-modal="true"
      role="dialog"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 text-white">
        <div className="text-sm opacity-80">{index + 1} / {images.length}</div>
        <div className="flex items-center gap-2">
          <button aria-label="Předchozí" onClick={goPrev} className="p-2 rounded-sm hover:bg-white/10"><ChevronLeft size={22} /></button>
          <button aria-label="Další" onClick={goNext} className="p-2 rounded-sm hover:bg-white/10"><ChevronRight size={22} /></button>
          <div className="w-px h-5 bg-white/20 mx-1" />
          <button aria-label="Zmenšit" onClick={zoomOut} className="p-2 rounded-sm hover:bg-white/10"><Minus size={18} /></button>
          <button aria-label="Resetovat zobrazení" onClick={resetTransform} className="p-2 rounded-sm hover:bg-white/10"><RefreshCw size={18} /></button>
          <button aria-label="Zvětšit" onClick={zoomIn} className="p-2 rounded-sm hover:bg-white/10"><Plus size={18} /></button>
          <div className="w-px h-5 bg-white/20 mx-1" />
          <button aria-label="Zavřít" onClick={close} className="p-2 rounded-sm hover:bg-white/10"><X size={22} /></button>
        </div>
      </div>

      {/* Image area */}
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden touch-pan-y"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDoubleClick={() => setScale((s) => (s > 1 ? 1 : 2))}
      >
        {/* Close on background click (but not when dragging) */}
        <button
          aria-label="Zavřít zobrazení"
          onClick={() => !isDragging && close()}
          className="absolute inset-0 cursor-zoom-out"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="max-w-[95vw] max-h-[80vh] md:max-h-[85vh] will-change-transform"
            style={{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 120ms ease-out',
            }}
          >
            {/* Use plain <img> for easier transform control */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={images[index]?.alt || ''}
              className="object-contain block select-none pointer-events-auto"
              style={{ maxWidth: '95vw', maxHeight: '80vh' }}
              draggable={false}
            />
          </div>
        </div>

        {/* Side navigation hit areas */}
        <div className="pointer-events-none absolute inset-0 flex">
          <button aria-label="Předchozí" onClick={goPrev} className="pointer-events-auto w-1/3 h-full" />
          <div className="w-1/3" />
          <button aria-label="Další" onClick={goNext} className="pointer-events-auto w-1/3 h-full" />
        </div>
      </div>
    </div>
  );
}

