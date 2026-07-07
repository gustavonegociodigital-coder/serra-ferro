import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function SerraFerroLogo({ className = 'h-8', light = false }: LogoProps) {
  return (
    <img 
      src="/logo.png" 
      alt="Serra-Ferro" 
      className={`${className} object-contain transition-transform duration-300 group-hover:scale-105 ${light ? 'brightness-0 invert' : ''}`}
      id="serra-ferro-official-logo"
    />
  );
}
