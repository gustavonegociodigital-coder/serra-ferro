/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, MapPin, Clock, ShieldCheck, Mail, Sparkles, HelpCircle, ChevronRight, AlertTriangle } from 'lucide-react';
import { AppView } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CategoryPillar from './components/CategoryPillar';
import B2BRoute from './components/B2BRoute';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import CityLanding from './components/CityLanding';
import ContactForm from './components/ContactForm';
import { FAQ_DATA } from './data';

export default function App() {
  const [view, setViewState] = useState<AppView>('home');

  // Roteador sutil baseado em Hash de URL para navegação SPA impecável (suporte a botões voltar/avançar)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setViewState(hash);
      } else {
        setViewState('home');
      }
    };

    // Inicialização
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setView = (newView: AppView) => {
    setViewState(newView);
    if (newView === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = newView;
    }
  };

  const getWhatsAppLink = () => {
    const text = 'Olá! Gostaria de um orçamento personalizado para o meu projeto de esquadrias ou vidraçaria.';
    return `https://wa.me/5511913243623?text=${encodeURIComponent(text)}`;
  };

  const renderContent = () => {
    if (view === 'home') {
      return <Home setView={setView} />;
    }
    if (view === 'esquadrias') {
      return <CategoryPillar category="esquadrias" setView={setView} />;
    }
    if (view === 'vidracaria') {
      return <CategoryPillar category="vidracaria" setView={setView} />;
    }
    if (view === 'serralheria') {
      return <CategoryPillar category="serralheria" setView={setView} />;
    }
    if (view === 'portfolio') {
      return <Portfolio setView={setView} />;
    }
    if (view === 'b2b') {
      return <B2BRoute setView={setView} />;
    }
    if (view === 'sobre') {
      return <AboutUs setView={setView} />;
    }
    if (view === 'blog') {
      return <Blog setView={setView} />;
    }
    
    // Rota de Contato Dedicada
    if (view === 'contato') {
      return (
        <div className="pt-24 pb-20 space-y-16 animate-fade-in" id="contact-view">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              ATENDIMENTO IMEDIATO
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Inicie o Projeto da sua <span className="text-brand-orange">Obra</span>
            </h1>
            <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed">
              Trabalhamos exclusivamente sob medida para entregar máxima estanqueidade e sofisticação. Fale diretamente com nossa diretoria comercial técnica pelo WhatsApp.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Giant WhatsApp Banner instead of Form */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
              <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest rounded-full">
                CONEXÃO SEGURA DIRECT-TO-WHATSAPP
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-tight">
                Fale Conosco Agora e Receba Suporte Técnico
              </h3>
              <p className="text-sm text-brand-muted max-w-lg mx-auto">
                Clique no botão abaixo para iniciar uma conversa com o engenheiro comercial responsável. Envie suas plantas ou chame para agendar a medição técnica presencial.
              </p>
              <div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-600/20 group cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
                  Iniciar Conversa no WhatsApp
                </a>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 block font-semibold">
                NÚMERO OFICIAL: +55 11 91324-3623
              </span>
            </div>
          </div>

          {/* FAQ Completo de Objeções Gerais */}
          <section className="bg-neutral-50 py-16 border-y border-neutral-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12 space-y-2">
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                  ESCLARECIMENTOS TÉCNICOS E FINANCEIROS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                  Perguntas Frequentes & Garantias
                </h2>
              </div>

              <div className="space-y-4">
                {FAQ_DATA.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 border border-neutral-200 rounded-xl space-y-2 shadow-sm" id={`faq-item-${idx}`}>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                      <h4 className="font-display text-sm sm:text-base font-bold text-brand-charcoal">
                        {faq.question}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Endereço e Localização da Fábrica */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm grid md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5 space-y-4">
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                  PROJETOS SOB MEDIDA
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-charcoal">
                  Sede Operacional e Comercial
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Não mantemos showroom ou itens prontos. Todo projeto é desenhado, usinado e executado sob medida para garantir estanqueidade mecânica milimétrica e acabamento superior em sua obra.
                </p>
                <div className="space-y-3.5 text-xs text-brand-charcoal font-medium pt-2">
                  <div className="flex items-start">
                    <MapPin className="w-4.5 h-4.5 text-brand-orange mr-2 shrink-0 mt-0.5" />
                    <span>Al. Rio Negro, 229 - Alphaville Industrial, Barueri - SP, 06454-000</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4.5 h-4.5 text-brand-orange mr-2 shrink-0" />
                    <span>+55 (11) 91324-3623</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4.5 h-4.5 text-brand-orange mr-2 shrink-0" />
                    <span>comercial@serraferro.com.br</span>
                  </div>
                </div>
              </div>

              {/* Simulação estilizada de mapa corporativo */}
              <div className="md:col-span-7 h-64 bg-neutral-100 border border-neutral-200 rounded-xl relative flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                
                {/* Decorative map graphics */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-orange/5 border border-brand-orange/20 rounded-full animate-pulse pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-orange/2 border border-brand-orange/10 rounded-full pointer-events-none" />
                
                {/* Visual marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-brand-charcoal text-white rounded-xl flex items-center justify-center shadow-lg mb-3">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="font-display text-xs font-bold text-brand-charcoal uppercase tracking-widest">
                    SERRA-FERRO ALPHAVILLE
                  </span>
                  <p className="text-[10px] text-brand-muted mt-1 leading-snug font-mono max-w-xs">
                    Atendimento em São Paulo Capital e Região Metropolitana — Barueri, Alphaville, Tamboré, Osasco, Cotia, Granja Viana, Guarulhos.
                  </p>
                </div>
                
                {/* Bottom marker bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-brand-muted border-t border-neutral-200/60 pt-2.5">
                  <span>Projetos 100% Personalizados</span>
                  <span>Atendimento com Engenheiro</span>
                </div>
              </div>

            </div>
          </section>
        </div>
      );
    }

    // Landings Dinâmicas de Cidade
    if (view.startsWith('city-')) {
      const citySlug = view.replace('city-', '');
      return <CityLanding citySlug={citySlug} setView={setView} />;
    }

    return <Home setView={setView} />;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between" id="app-root-container">
      {/* Header Fixo */}
      <Header currentView={view} setView={setView} />

      {/* Main Content (Renderizado dinamicamente com base na rota) */}
      <main className="flex-grow pt-4">
        {renderContent()}
      </main>

      {/* Flutuante WhatsApp Comercial */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-700 hover:scale-105 transition-all duration-300 group cursor-pointer"
        title="Falar com Engenheiro no WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-brand-charcoal text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Falar com Comercial Técnico
        </span>
        
        {/* Active pulse dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-orange border-2 border-white rounded-full animate-bounce" />
      </a>

      {/* Footer */}
      <Footer setView={setView} currentView={view} />
    </div>
  );
}
