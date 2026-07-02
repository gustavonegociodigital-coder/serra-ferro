/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Image, Camera, Hammer, Shield } from 'lucide-react';

interface PlaceholderImageProps {
  category: 'esquadrias' | 'vidracaria' | 'serralheria' | 'geral';
  className?: string;
  heightClass?: string;
  label?: string;
  src?: string;
}

export default function PlaceholderImage({
  category,
  className = '',
  heightClass = 'h-64',
  label,
  src
}: PlaceholderImageProps) {
  const getIcon = () => {
    switch (category) {
      case 'esquadrias':
        return <Hammer className="w-10 h-10 text-brand-muted/70 mb-2" id="icon-hammer" />;
      case 'vidracaria':
        return <Shield className="w-10 h-10 text-brand-muted/70 mb-2" id="icon-shield" />;
      case 'serralheria':
        return <Camera className="w-10 h-10 text-brand-muted/70 mb-2" id="icon-camera" />;
      default:
        return <Image className="w-10 h-10 text-brand-muted/70 mb-2" id="icon-image" />;
    }
  };

  const getOverlayLabel = () => {
    if (label) return label;
    switch (category) {
      case 'esquadrias':
        return 'Instalação Real - Esquadrias Linha Gold';
      case 'vidracaria':
        return 'Fechamento de Sacada Premium / Guarda-Corpo';
      case 'serralheria':
        return 'Escada Plissada / Estrutura de Mezanino';
      default:
        return 'Portfólio Serra-Ferro — Projeto de Alto Padrão';
    }
  };

  if (src) {
    return (
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-lg group select-none border border-neutral-200/80 ${className}`}
        id={`real-image-${category}-${Math.random().toString(36).substr(2, 5)}`}
      >
        <img
          src={src}
          alt={getOverlayLabel()}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90 transition-opacity duration-300" />
        
        {/* Text overlay on image */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="font-mono text-[9px] text-brand-orange bg-neutral-900/80 px-2 py-0.5 rounded font-extrabold uppercase tracking-widest">
            FOTO REAL • SERRA-FERRO
          </span>
          <p className="text-white text-xs font-semibold mt-1.5 drop-shadow-sm font-sans line-clamp-1">
            {getOverlayLabel()}
          </p>
        </div>

        {/* Bottom accent brand bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-charcoal group-hover:bg-brand-orange transition-colors duration-300" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${heightClass} bg-neutral-200 border border-neutral-300 rounded-lg flex flex-col items-center justify-center overflow-hidden group select-none ${className}`}
      id={`placeholder-${category}-${Math.random().toString(36).substr(2, 5)}`}
    >
      {/* Background Subtle Gradient pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neutral-300 via-neutral-200 to-neutral-100 opacity-80" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Decorative metal joint line for "industrial" feel */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-neutral-400/30 border-dashed rounded pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
        {getIcon()}
        <span className="font-display text-xs font-semibold text-brand-charcoal uppercase tracking-widest mb-1">
          {category === 'geral' ? 'SERRA-FERRO' : category}
        </span>
        <span className="text-[11px] font-mono text-brand-muted font-medium bg-neutral-300/60 px-2 py-0.5 rounded">
          FOTO REAL DE OBRA — SUBSTITUIR
        </span>
        <p className="text-xs text-brand-charcoal/80 font-medium mt-3 px-4 max-w-xs leading-relaxed italic">
          "{getOverlayLabel()}"
        </p>
      </div>

      {/* Bottom accent brand bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-charcoal group-hover:bg-brand-orange transition-colors duration-300" />
    </div>
  );
}
