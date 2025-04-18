import React from 'react';

type SpacerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

/**
 * Spacer component for creating vertical space between elements
 * Uses CSS variables defined in globals.css for consistent spacing
 */
export default function Spacer({ size = 'md', className = '' }: SpacerProps) {
  // Map size to CSS classes defined in globals.css
  let sizeClass = 'spacer';

  if (size === 'sm') sizeClass += ' spacer--sm';
  else if (size === 'lg') sizeClass += ' spacer--lg';
  else if (size === 'xl') sizeClass += ' spacer--lg'; // Use lg as fallback for xl

  return (
    <div
      className={`${sizeClass} ${className}`}
      aria-hidden="true"
    />
  );
}
