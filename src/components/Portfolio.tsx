/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Check, ArrowLeft, ArrowRight, Clock, Phone } from 'lucide-react';
import { AppView, PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data';
import PlaceholderImage from './PlaceholderImage';

interface PortfolioProps {
  setView: (view: AppView) => void;
}

export default function Portfolio({ setView }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [activeType, setActiveType] = useState<string>('todos');

  // Filtragem dos dados
  const filteredProjects = PORTFOLIO_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'todos' || project.category === activeCategory;
    const matchesType = activeType === 'todos' || project.projectType === activeType;
    return matchesCategory && matchesType;
  });

  const getWhatsAppLink = (messageText: string) => {
    const baseUrl = 'https://wa.me/5511913243623';
    return `${baseUrl}?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <div className="pt-24 pb-20 space-y-16 animate-fade-in" id="portfolio-view">
      
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

      {/* Header do Portfólio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
          PROVAS REAIS E IMPECÁVEIS
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
          Nossos Projetos de <span className="text-brand-orange">Alto Padrão</span>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed">
          No segmento A/B, a única propaganda legítima é a obra entregue com perfeição mecânica. Explore nossa curadoria de esquadrias, vidraçarias e serralherias instaladas na Grande São Paulo.
        </p>
      </section>

      {/* Painel de Filtros Interativos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm space-y-4 flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 gap-4" id="portfolio-filters">
          
          {/* Filtro por Categoria */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[10px] text-brand-muted font-bold uppercase tracking-widest">
              Filtrar por Especialidade:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Todos', value: 'todos' },
                { label: 'Esquadrias', value: 'esquadrias' },
                { label: 'Vidraçaria', value: 'vidracaria' },
                { label: 'Serralheria', value: 'serralheria' }
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    activeCategory === cat.value
                      ? 'border-brand-charcoal bg-brand-charcoal text-white shadow-sm'
                      : 'border-neutral-200 hover:bg-neutral-50 text-brand-charcoal'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por Tipo de Projeto */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[10px] text-brand-muted font-bold uppercase tracking-widest">
              Filtrar por Tipo de Obra:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Todos os tipos', value: 'todos' },
                { label: 'Obra Nova / Construção', value: 'obra_nova' },
                { label: 'Reforma de Imóvel', value: 'reforma' },
                { label: 'Comercial / Corporativo', value: 'comercial' }
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveType(type.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    activeType === type.value
                      ? 'border-brand-charcoal bg-brand-charcoal text-white shadow-sm'
                      : 'border-neutral-200 hover:bg-neutral-50 text-brand-charcoal'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Grid de Obras Filtradas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 border border-neutral-200 rounded-xl space-y-3">
            <p className="text-sm text-brand-muted font-medium">Nenhum projeto encontrado para esta combinação de filtros.</p>
            <button
              onClick={() => { setActiveCategory('todos'); setActiveType('todos'); }}
              className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider hover:underline"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
                id={`portfolio-item-${item.id}`}
              >
                <div>
                  <PlaceholderImage
                    category={item.category}
                    heightClass="h-56"
                    label={`${item.title} — ${item.serviceType}`}
                  />
                  
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-brand-orange uppercase tracking-wider">
                      <span>{item.serviceType}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-brand-charcoal">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {item.description}
                    </p>

                    {/* Especificações Técnicas (Prova de Autoridade) */}
                    <div className="pt-3 border-t border-neutral-100">
                      <span className="text-[9px] font-mono font-bold text-brand-charcoal uppercase tracking-widest block mb-2">
                        ESPECIFICAÇÕES INSTALADAS:
                      </span>
                      <ul className="space-y-1.5 text-xs">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-brand-charcoal/90">
                            <Check className="w-3.5 h-3.5 text-brand-orange mr-2 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-charcoal flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-brand-orange shrink-0" />
                    {item.location}
                  </span>
                  
                  <a
                    href={getWhatsAppLink(`Olá Serra-Ferro! Vi o projeto "${item.title}" no portfólio do site e gostaria de um orçamento semelhante para a minha obra.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase text-brand-charcoal hover:text-brand-orange transition-colors"
                  >
                    Cotar Semelhante
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DOBRA 10: CONTATO (Direcionando apenas para o WhatsApp, sem formulário) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contato-secao-portfolio">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
            FALE CONOSCO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
            Gostaria de um Orçamento de Esquadrias de Alumínio em São Paulo?
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl mx-auto leading-relaxed font-medium">
            Atendimento técnico ágil e faturamento facilitado. Chame agora no WhatsApp para falar diretamente com nosso comercial técnico ou agendar uma medição gratuita in loco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card de Informações */}
          <div className="md:col-span-5 bg-brand-charcoal text-white rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block">PROJETOS EXCLUSIVOS</span>
              <h3 className="font-display text-base font-bold text-white">Sede Operacional e Comercial</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Trabalhamos exclusivamente sob medida. Fale com os nossos engenheiros de projetos para detalhar as esquadrias da sua obra.
              </p>
            </div>

            <div className="space-y-3.5 border-t border-neutral-800 pt-6">
              <div className="flex items-start space-x-2 text-xs">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-neutral-200">Al. Rio Negro, 229 - Alphaville Industrial, Barueri - SP</span>
              </div>
              <div className="flex items-start space-x-2 text-xs">
                <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-neutral-200">Segunda a Sexta: 08h às 18h</span>
              </div>
              <div className="flex items-start space-x-2 text-xs">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-neutral-200">(11) 91324-3623</span>
              </div>
            </div>
          </div>

          {/* Bloco de Ação de Conversão WhatsApp */}
          <div className="md:col-span-7 bg-white border border-neutral-200 rounded-xl p-8 flex flex-col justify-between items-center text-center shadow-sm">
            <div className="space-y-4 py-4">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-brand-orange border border-neutral-200">
                <Phone className="w-7 h-7 text-brand-orange animate-bounce" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-charcoal">Atendimento Direto no WhatsApp</h3>
              <p className="text-xs text-brand-muted max-w-sm leading-relaxed mx-auto">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp. Envie seu arquivo PDF do projeto de arquitetura ou as dimensões dos vãos para uma análise preliminar ágil de fábrica.
              </p>
              <div className="inline-flex items-center justify-center space-x-1.5 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-brand-charcoal text-[10px] font-mono uppercase tracking-wider">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="font-bold">WhatsApp Comercial Online</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com o comercial técnico da Serra-Ferro para solicitar um orçamento de esquadrias/vidraçaria para minha obra.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-colors shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Iniciar Orçamento Gratuito por WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
