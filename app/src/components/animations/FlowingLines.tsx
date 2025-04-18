'use client';

import React, { useEffect, useRef } from 'react';

interface FlowingLinesProps {
  colors?: string[];
  lineCount?: number;
  className?: string;
  elegant?: boolean;
}

const FlowingLines: React.FC<FlowingLinesProps> = ({
  colors = ['#E6CCB2', '#D8C3B0', '#C9B8A8', '#F5F5F5'],
  lineCount = 4,
  className = '',
  elegant = true,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    // Clear existing paths
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    // Create flowing lines
    for (let i = 0; i < lineCount; i++) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const color = colors[i % colors.length];

      // Generate path based on style
      if (elegant) {
        // More horizontal, elegant flowing lines for premium look
        const startY = height * (0.3 + (i / lineCount) * 0.6); // Distribute lines vertically
        const startX = width * 0.1;

        let d = `M${startX},${startY} `;

        // Create a gentle flowing curve with subtle waves
        const segments = 5;
        const segmentWidth = width * 0.8 / segments;

        for (let j = 1; j <= segments; j++) {
          const nextX = startX + j * segmentWidth;
          const waveHeight = height * 0.05 * Math.sin(j * Math.PI / 2);
          const nextY = startY + waveHeight * (i % 2 === 0 ? 1 : -1);

          // Control points for the curve - more controlled for elegance
          const cp1x = nextX - segmentWidth * 0.7;
          const cp1y = startY + waveHeight * 0.5 * (i % 2 === 0 ? 1 : -1);
          const cp2x = nextX - segmentWidth * 0.3;
          const cp2y = nextY - waveHeight * 0.2 * (i % 2 === 0 ? 1 : -1);

          d += `C${cp1x},${cp1y} ${cp2x},${cp2y} ${nextX},${nextY} `;
        }

        // Set path attributes for elegant style
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', (0.5 + (i % 3) * 0.5).toString()); // Thinner, more consistent lines
        path.setAttribute('opacity', (0.1 + (i / lineCount) * 0.2).toString()); // More subtle opacity

        // Add subtle animation
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('from', '0');
        animate.setAttribute('to', '1000');
        animate.setAttribute('dur', (30 + i * 5) + 's'); // Slower, more consistent animation
        animate.setAttribute('repeatCount', 'indefinite');

        const dashArray = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        dashArray.setAttribute('attributeName', 'stroke-dasharray');
        dashArray.setAttribute('values', '0,1000; 5,50; 10,70; 5,50; 0,1000'); // More subtle dash pattern
        dashArray.setAttribute('dur', (40 + i * 5) + 's'); // Slower animation for elegance
        dashArray.setAttribute('repeatCount', 'indefinite');

        path.appendChild(animate);
        path.appendChild(dashArray);
      } else {
        // Original more random flowing lines
        const startX = Math.random() * width;
        const startY = Math.random() * height;

        let d = `M${startX},${startY} `;

        // Create a flowing curve with multiple control points
        const points = 3 + Math.floor(Math.random() * 3); // 3-5 points
        let prevX = startX;
        let prevY = startY;

        for (let j = 0; j < points; j++) {
          const nextX = Math.random() * width;
          const nextY = Math.random() * height;

          // Control points for the curve
          const cp1x = prevX + (Math.random() * 0.8 + 0.1) * (nextX - prevX);
          const cp1y = prevY + (Math.random() * 0.8 + 0.1) * (nextY - prevY);
          const cp2x = nextX - (Math.random() * 0.8 + 0.1) * (nextX - prevX);
          const cp2y = nextY - (Math.random() * 0.8 + 0.1) * (nextY - prevY);

          d += `C${cp1x},${cp1y} ${cp2x},${cp2y} ${nextX},${nextY} `;

          prevX = nextX;
          prevY = nextY;
        }

        // Set path attributes
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', (1 + Math.random() * 2).toString());
        path.setAttribute('opacity', (0.3 + Math.random() * 0.4).toString());

        // Add animation
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('from', '0');
        animate.setAttribute('to', '1000');
        animate.setAttribute('dur', (15 + Math.random() * 20) + 's');
        animate.setAttribute('repeatCount', 'indefinite');

        const dashArray = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        dashArray.setAttribute('attributeName', 'stroke-dasharray');
        dashArray.setAttribute('values', '0,1000; 10,50; 20,60; 30,90; 10,50; 0,1000');
        dashArray.setAttribute('dur', (20 + Math.random() * 30) + 's');
        dashArray.setAttribute('repeatCount', 'indefinite');

        path.appendChild(animate);
        path.appendChild(dashArray);
      }

      svg.appendChild(path);
    }
  }, [colors, lineCount, elegant]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      preserveAspectRatio="none"
    />
  );
};

export default FlowingLines;
