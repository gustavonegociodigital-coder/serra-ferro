/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function SerraFerroLogo({ className = 'h-8', light = false }: LogoProps) {
  const brandCharcoal = light ? '#FFFFFF' : '#2B2B2B';
  const brandOrange = '#E05A47'; // Official logo orange

  return (
    <div className={`flex items-center space-x-2 select-none ${className}`} id="serra-ferro-official-logo">
      {/* Semicircular Saw Blade on the left */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-8 h-8 shrink-0 transition-transform duration-300 group-hover:rotate-12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crescent base */}
        <path
          d="M 55,15 A 35,35 0 0,0 55,85 L 55,73 A 23,23 0 0,1 55,27 Z"
          fill={brandCharcoal}
        />
        {/* Sharp saw teeth on the outer left edge of the crescent */}
        <path
          d="
            M 55,15 L 47,12 L 48,19 
            L 39,17 L 41,25 
            L 31,23 L 34,31 
            L 24,30 L 28,38 
            L 20,39 L 25,47 
            L 19,49 L 25,57 
            L 21,59 L 28,66 
            L 26,69 L 34,74 
            L 34,77 L 43,80 
            L 45,83 L 55,85
          "
          fill={brandCharcoal}
        />
      </svg>
      
      {/* Typography: Serra·Ferro */}
      <div className="flex items-center font-display font-extrabold text-xl sm:text-2xl tracking-tight leading-none">
        <span style={{ color: brandOrange }}>Serra</span>
        <span className="mx-0.5" style={{ color: brandCharcoal }}>•</span>
        <span style={{ color: brandCharcoal }}>Ferro</span>
      </div>
    </div>
  );
}
