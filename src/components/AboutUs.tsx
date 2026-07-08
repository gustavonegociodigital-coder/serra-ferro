/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, Compass, ShieldCheck, CheckCircle2, Star, Calendar, HardHat, FileText, Sparkles, MessageSquare } from 'lucide-react';
import { AppView } from '../types';
import PlaceholderImage from './PlaceholderImage';

interface AboutUsProps {
  setView: (view: AppView) => void;
}

export default function AboutUs({ setView }: AboutUsProps) {
  const getWhatsAppLink = (messageText: string) => {
    const baseUrl = 'https://wa.me/5511913243623';
    return `${baseUrl}?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <div className="pt-24 pb-20 space-y-16 animate-fade-in" id="about-us-view">
      
      {/* Retornar para Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => { setView('home'); window.scrollTo(0, 0); }}
          className="inline-flex items-center text-xs font-mono font-bold text-brand-charcoal hover:text-brand-orange uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Voltar para o início
        </button>
      </div>

      {/* Hero / Manifesto Institucional */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-brand-charcoal text-[11px] font-mono font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-orange" />
              <span>MANIFESTO INSTITUCIONAL SERRA-FERRO</span>
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              A melhor escolha em <span className="text-brand-orange">Esquadrias de Alumínio em São Paulo</span> com entrega e prazos garantidos.
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-medium">
              A Serra-Ferro é uma empresa consolidada no mercado de engenharia de esquadrias de alumínio, vidraçaria de alto padrão e soluções personalizadas. Nosso propósito é entregar excelência de ponta a ponta com a máxima transparência corporativa.
            </p>

            <p className="text-xs sm:text-sm text-brand-charcoal/90 leading-relaxed">
              Trabalhamos focados em solucionar os problemas clássicos de canteiro de obras, como a falta de comunicação e o descumprimento de prazos. Unimos as melhores práticas de planejamento do mercado com materiais de alto padrão e projetos inteiramente desenhados sob medida para garantir um resultado estético superior, alto isolamento e durabilidade.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs text-brand-charcoal font-semibold">Atuação Especializada no Segmento</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs text-brand-charcoal font-semibold">Sede Operacional em São Paulo</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs text-brand-charcoal font-semibold">Garantia Técnica de Estanqueidade e Peças</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs text-brand-charcoal font-semibold">Equipe Técnica Própria Capacitada</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Oficina Real */}
          <div className="lg:col-span-5">
            <PlaceholderImage
              category="geral"
              heightClass="h-[340px] md:h-[400px]"
              src="/assets/images/portfolio_house_luxury_card_1782740031450.jpg"
              label="Projetos de Alto Padrão Serra-Ferro"
              className="shadow-lg animate-fade-in"
            />
          </div>

        </div>
      </section>

      {/* Desmistificação e Segurança do Sinal (Copy Crucial do Briefing) */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              NOSSAS DIRETRIZES CORPORATIVAS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
              Sinal de Entrada com Garantia de Segurança
            </h2>
          </div>

          <div className="bg-white p-6 sm:p-8 border border-neutral-200 rounded-2xl space-y-6">
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Como fabricamos esquadrias, portas estruturais e fechamentos de sacadas <strong>100% personalizados por projeto</strong>, cada peça é usinada milimetricamente para o vão do seu imóvel, sendo impossível reaproveitá-la em outra obra. Por isso, a solicitação de sinal de entrada para faturamento e reserva dos perfis metálicos junto aos extrudores é uma prática de mercado legítima.
            </p>
            
            <div className="border-t border-neutral-100 pt-6">
              <h4 className="font-display text-sm font-bold text-brand-charcoal mb-4 uppercase tracking-wider">
                Como blindamos a sua transação na Serra-Ferro:
              </h4>
              
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-brand-orange">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h5 className="font-display text-xs font-bold text-brand-charcoal">Contrato Registrado</h5>
                  <p className="text-[11px] text-brand-muted leading-normal">
                    Cada transação comercial é acompanhada de Contrato registrado em cartório ou assinado digitalmente, com valor fiduciário de seguro.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-brand-orange">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h5 className="font-display text-xs font-bold text-brand-charcoal">Cronograma Físico</h5>
                  <p className="text-[11px] text-brand-muted leading-normal">
                    Anexamos ao contrato as datas de início da fundição dos perfis, usinagem na nossa fábrica, data exata de entrega e teste de estanqueidade.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-brand-orange">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h5 className="font-display text-xs font-bold text-brand-charcoal">Nota Fiscal de Entrada</h5>
                  <p className="text-[11px] text-brand-muted leading-normal">
                    Não trabalhamos com valores informais: emitimos Nota Fiscal faturada de todos os serviços de fabricação e fornecimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Conversão WhatsApp */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
          <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest rounded-full">
            CONTATO DIRETO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-tight">
            Solicite seu Orçamento de Esquadrias de Alumínio em São Paulo
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted max-w-lg mx-auto">
            Trabalhamos exclusivamente sob medida. Clique no botão abaixo para falar agora com nosso comercial técnico no WhatsApp, tirar suas dúvidas e enviar o seu projeto.
          </p>
          <div>
            <a
              href={getWhatsAppLink('Olá Serra-Ferro! Gostaria de falar com o comercial técnico sobre um orçamento para o meu projeto de esquadrias ou vidraçaria sob medida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-600/20 group cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
              Falar com Comercial no WhatsApp
            </a>
          </div>
          <span className="text-[11px] font-mono text-emerald-600 block font-semibold">
            +55 11 91324-3623
          </span>
        </div>
      </section>

    </div>
  );
}
