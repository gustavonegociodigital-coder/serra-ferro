/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { AppView } from '../types';
import { ESQUADRIAS_SP_SLUG } from '../seo';

interface NotFoundProps {
  setView: (view: AppView) => void;
}

export default function NotFound({ setView }: NotFoundProps) {
  const go = (view: AppView) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links: { label: string; view: AppView }[] = [
    { label: 'Esquadrias de Alumínio em SP', view: ESQUADRIAS_SP_SLUG },
    { label: 'Vidraçaria em São Paulo', view: 'vidracaria' },
    { label: 'Serralheria em São Paulo', view: 'serralheria' },
    { label: 'Portfólio de Obras', view: 'portfolio' },
  ];

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 animate-fade-in" id="not-found-view">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-14 h-14 mx-auto bg-brand-orange/10 border border-brand-orange/30 rounded-2xl flex items-center justify-center">
          <Compass className="w-7 h-7 text-brand-orange" />
        </div>
        <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
          ERRO 404
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
          Página não encontrada
        </h1>
        <p className="text-sm text-brand-muted leading-relaxed max-w-md mx-auto">
          A página que você procura não existe ou foi movida. Confira os endereços abaixo ou volte à página inicial.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 pt-2">
          {links.map((link) => (
            <button
              key={String(link.view)}
              onClick={() => go(link.view)}
              className="inline-flex items-center px-3.5 py-2 rounded-lg bg-white border border-neutral-200 text-brand-charcoal hover:border-brand-orange hover:text-brand-orange text-xs font-semibold transition-colors"
            >
              {link.label}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-brand-orange" />
            </button>
          ))}
        </div>

        <div className="pt-4">
          <button
            onClick={() => go('home')}
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg font-display text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            <HomeIcon className="w-4 h-4 mr-2" />
            Voltar para a Home
          </button>
        </div>
      </div>
    </div>
  );
}
