/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Mail, Phone, MapPin, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { AppView } from '../types';
import { ESQUADRIAS_SP_SLUG } from '../seo';
import { ESQUADRIAS_REGIONS } from '../regionsEsquadrias';
import SerraFerroLogo from './SerraFerroLogo';

interface FooterProps {
  setView: (view: AppView) => void;
  currentView: AppView;
}

export default function Footer({ setView, currentView }: FooterProps) {
  const handleNavClick = (view: AppView) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegação SPA em links reais (<a href>) para manter a URL crawlável pelo Google.
  const handleAnchorNav = (e: React.MouseEvent, view: AppView) => {
    e.preventDefault();
    handleNavClick(view);
  };

  const getWhatsAppLink = () => {
    const text = 'Olá! Gostaria de falar com o comercial técnico sobre um projeto de esquadrias ou vidraçaria.';
    return `https://wa.me/5511913243623?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer className="bg-brand-charcoal text-neutral-300 pt-16 pb-8 border-t border-neutral-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800">
          
          {/* Coluna 1: Logo & Manifesto */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')} id="footer-logo">
              <SerraFerroLogo className="h-8" light={true} />
            </div>
            
            <p className="text-xs text-neutral-400 font-medium italic">
              "Alto padrão começa no acabamento."
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Serralheria fina, vidraçaria premium e fábrica própria de esquadrias de alumínio sob medida. Verticalização integral da sua obra do projeto técnico à instalação concluída com equipe própria.
            </p>

            <div className="flex items-center space-x-3 text-xs text-neutral-400 pt-2">
              <span className="inline-flex items-center text-emerald-500 font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
                Atendimento Ativo
              </span>
              <span className="text-neutral-600">|</span>
              <span>Segunda a Sexta: 8h às 18h</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase text-white tracking-widest border-l-2 border-brand-orange pl-2.5">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { label: 'Início', view: 'home' },
                { label: 'Esquadrias', view: ESQUADRIAS_SP_SLUG },
                { label: 'Vidraçaria', view: 'vidracaria' },
                { label: 'Serralheria', view: 'serralheria' },
                { label: 'Portfólio', view: 'portfolio' },
                { label: 'Área B2B', view: 'b2b' },
                { label: 'Sobre Nós', view: 'sobre' },
                { label: 'Blog / Artigos', view: 'blog' },
              ].map((link) => (
                <li key={link.view}>
                  <button
                    onClick={() => handleNavClick(link.view)}
                    className="hover:text-brand-orange transition-colors flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-brand-orange/65" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: NBR & Normas */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase text-white tracking-widest border-l-2 border-brand-orange pl-2.5">
              Conformidade Técnica
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed text-neutral-400">
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 shrink-0 mt-0.5" />
                <span><strong>NBR 10821:</strong> Esquadrias para edificações com ensaios hidrostáticos de estanqueidade.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 shrink-0 mt-0.5" />
                <span><strong>NBR 14718:</strong> Guarda-corpos de vidro laminado temperado com ensaios estáticos e dinâmicos.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 shrink-0 mt-0.5" />
                <span><strong>NBR 7199:</strong> Aplicação de vidros na construção civil com foco em vidros estruturais laminados.</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase text-white tracking-widest border-l-2 border-brand-orange pl-2.5">
              Contato & Localização
            </h4>
            <div className="space-y-3.5 text-xs text-neutral-400 font-medium">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-orange mr-2.5 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Al. Rio Negro, 229<br />
                  Alphaville Industrial, Barueri — SP<br />
                  CEP 06454-000
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-brand-orange mr-2.5 shrink-0" />
                <span>+55 (11) 91324-3623</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-brand-orange mr-2.5 shrink-0" />
                <span>comercial@serraferro.com.br</span>
              </div>
              
              <div className="pt-2 border-t border-neutral-800">
                <span className="text-[10px] text-neutral-500 block">SISTEMA FISCAL INTEGRADO</span>
                <span className="text-[11px] font-mono block text-neutral-400 mt-0.5">CNPJ: 50.412.384/0001-29</span>
                <span className="text-xs text-emerald-500 font-semibold flex items-center mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                  Contrato de Garantia & NF-e
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Esquadrias de Alumínio por Região (link building interno para as landings regionais) */}
        <div className="py-8 border-b border-neutral-800">
          <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider block mb-3">
            Esquadrias de Alumínio por Região em SP
          </span>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
            <a
              href={`/${ESQUADRIAS_SP_SLUG}`}
              onClick={(e) => handleAnchorNav(e, ESQUADRIAS_SP_SLUG)}
              className="text-neutral-400 hover:text-brand-orange font-medium transition-colors"
            >
              Esquadrias de Alumínio em São Paulo
            </a>
            <span className="text-neutral-700">·</span>
            {ESQUADRIAS_REGIONS.map((region, idx) => (
              <React.Fragment key={region.slug}>
                <a
                  href={`/${region.slug}`}
                  onClick={(e) => handleAnchorNav(e, region.slug)}
                  className="text-neutral-400 hover:text-brand-orange font-medium transition-colors"
                  id={`footer-esquadrias-${region.slug}`}
                >
                  Esquadrias de Alumínio em {region.city}
                </a>
                {idx < ESQUADRIAS_REGIONS.length - 1 && <span className="text-neutral-700">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Serra-Ferro Esquadrias de Alto Padrão Ltda. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-brand-orange transition-colors">Termos e Condições</span>
            <span>•</span>
            <span className="hover:text-brand-orange transition-colors">Política de Privacidade</span>
            <span>•</span>
            <span className="text-neutral-600">Sua obra em boas mãos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
