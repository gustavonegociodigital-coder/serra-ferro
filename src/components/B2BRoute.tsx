/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, FileText, CheckCircle, ShieldCheck, Compass, MessageSquare, Phone, ArrowLeft, Ruler, Building, HardHat, Clock, MapPin } from 'lucide-react';
import { AppView } from '../types';
import { TESTIMONIALS_DATA } from '../data';
import PlaceholderImage from './PlaceholderImage';

interface B2BRouteProps {
  setView: (view: AppView) => void;
}

export default function B2BRoute({ setView }: B2BRouteProps) {
  // Filtrar depoimentos específicos de B2B (Arquiteto e Engenheiro)
  const b2bTestimonials = TESTIMONIALS_DATA.filter(
    (item) => item.role === 'Arquiteto(a)' || item.role === 'Engenheiro(a)' || item.role === 'Construtora' || item.role === 'Síndico(a)'
  );

  const getWhatsAppLink = (messageText: string) => {
    const baseUrl = 'https://wa.me/5511913243623';
    return `${baseUrl}?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <div className="pt-24 pb-20 space-y-16 animate-fade-in" id="b2b-view">
      
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

      {/* Hero B2B */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-charcoal text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-neutral-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-neutral-800 to-transparent opacity-40 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-brand-orange text-xs font-mono font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 mr-1" />
              <span>Rota Corporativa e Especificador (40% de nosso mix)</span>
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
              Executamos fielmente o que você desenha, <span className="text-brand-orange">no prazo do seu canteiro.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl font-medium">
              A Serra-Ferro é o braço técnico de esquadrias de alumínio, vidraçaria técnica e serralheria fina que arquitetos, engenheiros, incorporadoras e construtoras da Grande São Paulo confiam. Sem improvisos, sem retrabalhos, com emissão de ART e faturamento facilitado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={getWhatsAppLink('Olá! Sou profissional especificador e gostaria de agendar uma reunião sobre parcerias com a Serra-Ferro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar com Comercial Técnico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Três vozes por público B2B */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            COMO CADA DECISOR SE BENEFICIA
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-1">
            Voz Técnica em Esquadrias de Alumínio em São Paulo para Profissionais
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Arquiteto (E1) */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-brand-orange">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-charcoal">
                Para Arquitetos (E1)
              </h3>
              <p className="text-xs font-semibold text-brand-orange font-mono uppercase tracking-wider">
                Fidelidade Estética e Apoio Técnico
              </p>
              <p className="text-xs text-brand-muted leading-relaxed">
                Nós não "passamos por cima" do arquiteto. Respeitamos fielmente o detalhe conceitual desenhado. Damos assessoria física in loco na especificação técnica de esquadrias e perfis e enviamos amostras de cores e ligas na mão do seu cliente.
              </p>
              <ul className="space-y-2 text-[11px] font-medium text-brand-charcoal">
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Amostras físicas e detalhamento CAD/BIM</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Comissionamento estruturado ou faturamento direto</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Suporte e assessoria técnica na obra</li>
              </ul>
            </div>
            <a
              href={getWhatsAppLink('Olá! Sou Arquiteto e gostaria de saber mais sobre o programa de parceria da Serra-Ferro.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-neutral-50 hover:bg-brand-charcoal hover:text-white text-brand-charcoal rounded-lg font-display text-[10px] font-bold uppercase tracking-wider transition-colors block mt-6"
            >
              Falar sobre parceria Arquiteto
            </a>
          </div>

          {/* Engenheiro / Mestre (E2) */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-brand-orange">
                <Ruler className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-charcoal">
                Para Engenheiros (E2)
              </h3>
              <p className="text-xs font-semibold text-brand-orange font-mono uppercase tracking-wider">
                Medição Certa e Instalação Limpa
              </p>
              <p className="text-xs text-brand-muted leading-relaxed">
                Nossos montadores têm carteira assinada, EPIs completos e treinamento fabril. Medimos com precisão a laser antes de cortar os perfis e compatibilizamos os contra-marcos e trilhos de piso sem retrabalhos ou atrasar as outras equipes de canteiro.
              </p>
              <ul className="space-y-2 text-[11px] font-medium text-brand-charcoal">
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Medição técnica milimétrica a laser</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Equipe técnica uniformizada própria (NR-35)</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Zero retrabalho em massa ou acabamento</li>
              </ul>
            </div>
            <a
              href={getWhatsAppLink('Olá! Sou Engenheiro de obra e gostaria de agendar uma medição técnica ou visita comercial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-neutral-50 hover:bg-brand-charcoal hover:text-white text-brand-charcoal rounded-lg font-display text-[10px] font-bold uppercase tracking-wider transition-colors block mt-6"
            >
              Falar sobre atendimento Engenharia
            </a>
          </div>

          {/* Construtora / Incorporadora (B1/B2) */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-brand-orange">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-charcoal">
                Para Construtoras e Síndicos (B1/B2)
              </h3>
              <p className="text-xs font-semibold text-brand-orange font-mono uppercase tracking-wider">
                Volume, Conformidade e Nota Fiscal
              </p>
              <p className="text-xs text-brand-muted leading-relaxed">
                Fornecemos documentos técnicos completos: memorial de cálculo de vento, laudos de ensaios e laudo de conformidade técnica ABNT para condomínios. Faturamento direto PJ, cronogramas por volume e emissão de todas as notas fiscais integradas de serviço e insumos.
              </p>
              <ul className="space-y-2 text-[11px] font-medium text-brand-charcoal">
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Laudos de estanqueidade e ART assinada</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Faturamento PJ facilitado e medições fiscais</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Fábrica com capacidade de volume real</li>
              </ul>
            </div>
            <a
              href={getWhatsAppLink('Olá! Represento uma Construtora/Condomínio e gostaria de falar sobre faturamento PJ ou propostas corporativas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-neutral-50 hover:bg-brand-charcoal hover:text-white text-brand-charcoal rounded-lg font-display text-[10px] font-bold uppercase tracking-wider transition-colors block mt-6"
            >
              Falar com Comercial Corporativo
            </a>
          </div>

        </div>
      </section>

      {/* Seção das NBRs Detalhadas de Canteiro */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto de Autoridade Normativa */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                RIGOR E COMPLIANCE TÉCNICO
              </span>
              <h2 className="font-display text-3xl font-extrabold text-brand-charcoal tracking-tight">
                Esquadrias de Alumínio em São Paulo em Conformidade com Normas NBR
              </h2>
              <p className="text-xs text-brand-muted leading-relaxed">
                No canteiro de obras de alto padrão, a negligência de normas gera embargos, problemas estruturais e sérios riscos de segurança civil. Nossos projetos são dimensionados considerando as pressões de ventos regionais e esforços horizontais calculados por engenharia habilitada.
              </p>
              <div className="p-4 bg-white border border-neutral-200 rounded-lg flex items-center space-x-3 text-left">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-[11px] font-bold text-brand-charcoal">Laudo de Anotação de Responsabilidade Técnica (ART) emitido sob demanda.</span>
              </div>
            </div>

            {/* Listagem das NBRs */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-5 border border-neutral-200 rounded-xl space-y-2">
                <span className="text-xs font-mono font-bold text-brand-orange uppercase">NBR 10821</span>
                <h4 className="font-display text-sm font-bold text-brand-charcoal">Desempenho de Esquadrias</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Avalia a estanqueidade à água sob pressão dinâmica, permeabilidade ao ar e resistência às cargas estruturais do vento na Grande São Paulo.
                </p>
              </div>

              <div className="bg-white p-5 border border-neutral-200 rounded-xl space-y-2">
                <span className="text-xs font-mono font-bold text-brand-orange uppercase">NBR 14718</span>
                <h4 className="font-display text-sm font-bold text-brand-charcoal">Guarda-Corpos para Edificações</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Determina a altura mínima e as exigências para suportar pressões de impacto e cargas dinâmicas horizontais em mezaninos e sacadas.
                </p>
              </div>

              <div className="bg-white p-5 border border-neutral-200 rounded-xl space-y-2">
                <span className="text-xs font-mono font-bold text-brand-orange uppercase">NBR 7199</span>
                <h4 className="font-display text-sm font-bold text-brand-charcoal">Vidros na Construção Civil</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Regulamenta o uso seguro de vidros estruturais laminados em andares elevados e fachadas residenciais ou corporativas.
                </p>
              </div>

              <div className="bg-white p-5 border border-neutral-200 rounded-xl space-y-2">
                <span className="text-xs font-mono font-bold text-brand-orange uppercase">NBR 15575</span>
                <h4 className="font-display text-sm font-bold text-brand-charcoal">Desempenho Térmico e Acústico</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Atesta a capacidade de atenuação sonora de esquadrias com vidros acústicos laminados em bairros de alta movimentação urbana.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Depoimentos B2B Reais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            A VOZ DOS NOSSOS PARCEIROS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-1">
            Parceiros de Esquadrias de Alumínio em São Paulo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {b2bTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col justify-between relative">
              <div className="absolute top-6 right-6 font-display text-6xl text-brand-orange/5 leading-none select-none pointer-events-none">
                ”
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-brand-orange">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs text-brand-charcoal leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-charcoal">
                    {testimonial.name}
                  </h4>
                  <span className="text-[10px] text-brand-muted block font-mono mt-0.5">
                    {testimonial.role} {testimonial.company ? `| ${testimonial.company}` : ''}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-brand-charcoal/80 font-mono">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOBRA 10: CONTATO (Direcionando apenas para o WhatsApp, sem formulário) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contato-secao-b2b">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
            SEJA UM PARCEIRO HOMOLOGADO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
            Gostaria de uma Parceria de Esquadrias de Alumínio em São Paulo?
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl mx-auto leading-relaxed font-medium">
            Suporte especializado para arquitetos, engenheiros e construtoras com faturamento direto e comissionamento ágil. Chame agora no WhatsApp para iniciar seu atendimento técnico comercial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card de Informações */}
          <div className="md:col-span-5 bg-brand-charcoal text-white rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block">SUPORTE EXCLUSIVO PJ</span>
              <h3 className="font-display text-base font-bold text-white">Sede Operacional e Comercial</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Trabalhamos exclusivamente sob medida para o seu canteiro de obras. Fale com a nossa diretoria de projetos e agende uma homologação presencial ou online.
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
              <h3 className="font-display text-lg font-bold text-brand-charcoal">Atendimento de Parcerias no WhatsApp</h3>
              <p className="text-xs text-brand-muted max-w-sm leading-relaxed mx-auto">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp com o nosso engenheiro de projetos. Envie seus projetos em CAD ou PDF para orçamento imediato com faturamento facilitado.
              </p>
              <div className="inline-flex items-center justify-center space-x-1.5 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-brand-charcoal text-[10px] font-mono uppercase tracking-wider">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="font-bold">Comercial Técnico B2B Online</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com o engenheiro comercial da Serra-Ferro sobre o programa de parcerias técnicas e faturamento PJ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-colors shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Iniciar Atendimento de Parcerias no WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
