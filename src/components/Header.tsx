/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, Construction, Compass } from 'lucide-react';
import { AppView } from '../types';
import SerraFerroLogo from './SerraFerroLogo';
import { ESQUADRIAS_SP_SLUG, VIDRACARIA_SP_SLUG, SERRALHERIA_SP_SLUG } from '../seo';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', view: 'home' },
    { label: 'Esquadrias', view: ESQUADRIAS_SP_SLUG },
    { label: 'Vidraçaria', view: VIDRACARIA_SP_SLUG },
    { label: 'Serralheria', view: SERRALHERIA_SP_SLUG },
    { label: 'Portfólio', view: 'portfolio' },
    { label: 'B2B', view: 'b2b' },
    { label: 'Sobre Nós', view: 'sobre' },
    { label: 'Blog', view: 'blog' },
  ];

  const handleNavClick = (view: AppView) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsAppLink = () => {
    const text = 'Olá Serra-Ferro! Gostaria de falar com o comercial técnico sobre um orçamento para o meu projeto de alto padrão.';
    return `https://wa.me/5511913243623?text=${encodeURIComponent(text)}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-100 py-3'
          : 'bg-white border-b border-neutral-200/50 py-4'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Serra-Ferro */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group select-none"
            id="header-logo-container"
          >
            <SerraFerroLogo className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`px-3 py-1.5 rounded-md font-display text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  currentView === item.view
                    ? 'text-brand-orange bg-neutral-50'
                    : 'text-brand-charcoal/95 hover:text-brand-orange hover:bg-neutral-50/50'
                }`}
                id={`nav-${item.view}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg font-display text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow-emerald-600/10 cursor-pointer"
              id="header-cta-whatsapp"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Orçamento WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal hover:text-brand-orange p-1.5 rounded-lg focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-neutral-200 animate-fade-in py-4 px-4 shadow-lg" id="mobile-menu-panel">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`w-full text-left px-4 py-3 rounded-lg font-display text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  currentView === item.view
                    ? 'text-brand-orange bg-neutral-50'
                    : 'text-brand-charcoal hover:text-brand-orange hover:bg-neutral-50'
                }`}
                id={`mobile-nav-${item.view}`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-neutral-100 px-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                id="mobile-cta-whatsapp-direct"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Falar com Comercial Técnico
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
