/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, Phone, Clock, FileCheck, Shield, CheckCircle2, Check, Landmark, MessageSquare, AlertTriangle, Sparkles } from 'lucide-react';
import { AppView } from '../types';
import { CITIES_LIST, PORTFOLIO_DATA, TESTIMONIALS_DATA, SERVICES_CATEGORIES } from '../data';
import PlaceholderImage from './PlaceholderImage';
import ContactForm from './ContactForm';

interface CityLandingProps {
  citySlug: string;
  setView: (view: AppView) => void;
}

export default function CityLanding({ citySlug, setView }: CityLandingProps) {
  // Encontrar a cidade
  const city = CITIES_LIST.find((c) => c.slug === citySlug) || CITIES_LIST[0];

  // Determinar dinamicamente a categoria em foco para a landing de SEO local
  // Se for Barueri/Alphaville, focar em Esquadrias de Alto Padrão (Persona C2/C3)
  // Se for Osasco/Guarulhos, focar em Serralheria e Vidraçaria (Persona C4)
  // Se for São Paulo, cobrir o Mix Completo
  const getFocusDetails = () => {
    if (city.slug === 'alphaville' || city.slug === 'barueri' || city.slug === 'tambore' || city.slug === 'santana-de-parnaiba') {
      return {
        focusCategory: 'esquadrias' as const,
        title: `Esquadrias de Alumínio em ${city.name}`,
        subtitle: `Esquadrias Linha Gold e Fachadas Glazing sob medida para residências de alto padrão em ${city.name} e condomínios da região.`,
        hookText: `Grandes vãos de correr que integram ambientes com vedação termoacústica impecável e trilhos embutidos sem ressalto.`,
        bairrosCitados: ['Alphaville 1', 'Tamboré 10', 'Genesis', 'Residencial Alpha III', 'Granja Tamboré'],
        personaHook: 'obra_nova'
      };
    } else if (city.slug === 'granja-viana' || city.slug === 'cotia') {
      return {
        focusCategory: 'vidracaria' as const,
        title: `Vidraçaria e Fechamento de Sacadas em ${city.name}`,
        subtitle: `Guarda-corpos autoportantes e fechamento retrátil de sacadas de alto padrão na região da ${city.name} e arredores.`,
        hookText: `Sistema europeu sem roldanas suspensas que garante estanqueidade absoluta e transparência total de acordo com a NBR 14718.`,
        bairrosCitados: ['Fazendinha', 'Granja Viana II', 'Palos Verdes', 'São Paulo II', 'Chácara Eliana'],
        personaHook: 'reforma'
      };
    } else if (city.slug === 'osasco' || city.slug === 'guarulhos') {
      return {
        focusCategory: 'serralheria' as const,
        title: `Serralheria de Alto Padrão em ${city.name}`,
        subtitle: `Escadas plissadas com solda invisível, portões de abertura rápida e mezaninos calculados por engenharia em ${city.name}.`,
        hookText: `Acabamento automotivo impecável e esquadro perfeito executado por profissionais técnicos especializados.`,
        bairrosCitados: ['Centro', 'Bela Vista', 'Vila Yara', 'Adalgisa', 'Parque Continental'],
        personaHook: 'comercial'
      };
    } else {
      // São Paulo capital
      return {
        focusCategory: 'esquadrias' as const,
        title: `Esquadrias de Alumínio e Vidros de Alto Padrão em São Paulo`,
        subtitle: `Fábrica própria e instalação técnica especializada na Cidade de São Paulo. Do projeto técnico à calafetação contra infiltrações.`,
        hookText: `Esquadrias de Alumínio de alta performance para vãos amplos e fachadas residenciais ou corporativas sob rígida conformidade com as normas ABNT.`,
        bairrosCitados: ['Jardins', 'Pinheiros', 'Morumbi', 'Moema', 'Itaim Bibi', 'Anália Franco', 'Tatuapé'],
        personaHook: 'obra_nova'
      };
    }
  };

  const focus = getFocusDetails();
  const catData = SERVICES_CATEGORIES[focus.focusCategory];

  // Elemento Anti-Conteúdo-Duplicado 1: Filtrar dinamicamente os projetos correspondentes à região/localidade
  const localProjects = PORTFOLIO_DATA.filter((item) => {
    // Projetos na mesma localidade ou projetos gerais da categoria em foco
    const matchesLocation = item.location.toLowerCase().includes(city.name.toLowerCase()) || 
                            item.location.toLowerCase().includes(city.slug.toLowerCase());
    return matchesLocation || item.category === focus.focusCategory;
  }).slice(0, 3);

  // Elemento Anti-Conteúdo-Duplicado 2: Filtrar depoimento que ressoe com o local ou tipo de obra
  const localTestimonials = TESTIMONIALS_DATA.filter((item) => {
    const matchesLocation = item.location.toLowerCase().includes(city.name.toLowerCase()) || 
                            item.location.toLowerCase().includes(city.slug.toLowerCase());
    return matchesLocation || item.projectDescription.toLowerCase().includes(focus.focusCategory);
  }).slice(0, 2);

  const getWhatsAppLink = () => {
    const text = `Olá Serra-Ferro! Gostaria de falar sobre um orçamento de ${catData.title} para a minha obra em ${city.name} - ${city.initials}.`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 pb-20 space-y-16 animate-fade-in" id={`city-landing-${city.slug}`}>
      
      {/* Botão de Retorno */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => { setView('home'); window.scrollTo(0, 0); }}
          className="inline-flex items-center text-xs font-mono font-bold text-brand-charcoal hover:text-brand-orange uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Voltar para o início
        </button>
      </div>

      {/* SECTION 1: HERO LOCALIZADO (SEO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-brand-charcoal text-[11px] font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>ATENDIMENTO COMPROVADO EM {city.name.toUpperCase()} — {city.initials}</span>
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal leading-tight tracking-tight">
              {focus.title}
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-medium">
              {focus.subtitle} {focus.hookText}
            </p>

            <p className="text-xs text-brand-charcoal/95 leading-relaxed bg-neutral-50 p-4 border-l-4 border-brand-orange rounded-r-lg">
              Atendemos condomínios fechados, residências de alto padrão e projetos corporativos em toda a região de <strong>{city.name}</strong>, incluindo bairros e condomínios de referência como: {focus.bairrosCitados.join(', ')} e entorno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                id="local-hero-cta"
              >
                <Phone className="w-4 h-4 mr-2" />
                Orçamento de WhatsApp em {city.name}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 pt-6 border-t border-neutral-100 text-left">
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span>Fabricação Própria SP</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <FileCheck className="w-4 h-4 text-brand-orange" />
                <span>Equipe Própria Certificada</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <Shield className="w-4 h-4 text-brand-orange" />
                <span>Laudos NBR e ART</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PlaceholderImage
              category={focus.focusCategory}
              heightClass="h-[300px] md:h-[380px]"
              label={`Obra Concluída pela Serra-Ferro na Região de ${city.name}`}
              className="shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* SECTION 2: SOBRE A EMPRESA (Adaptado localmente) */}
      <section className="bg-neutral-50 py-12 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                MÉTODOS DE EXCELÊNCIA
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
                Instalação especializada em {city.name} sem dor de cabeça
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                As obras de alto padrão em <strong>{city.name}</strong> exigem o mais alto rigor técnico e limpeza. Nossos profissionais certificados possuem treinamentos de segurança integrados (NR-35 para alturas de coberturas de vidro e sacadas) e trabalham com uniformes completos, isolamento das áreas de piso e compatibilização do cronograma com a administração do seu condomínio ou engenharia residente.
              </p>
              
              <ul className="space-y-3 text-xs font-medium text-brand-charcoal">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange mr-2.5 shrink-0" />
                  <span>Respeito absoluto às regras e horários de condomínios fechados em {city.name}.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange mr-2.5 shrink-0" />
                  <span>Visita técnica consultiva sem cobrança de taxa de deslocamento na região.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange mr-2.5 shrink-0" />
                  <span>Suporte completo de pós-venda técnico no local em menos de 48 horas úteis.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-6 border border-neutral-200 rounded-2xl shadow-sm space-y-4">
                <h4 className="font-display text-sm font-bold text-brand-charcoal uppercase tracking-wider border-b border-neutral-100 pb-3">
                  MIX DE SERVIÇOS EM {city.name.toUpperCase()}
                </h4>
                
                <div className="divide-y divide-neutral-100">
                  {catData.subservices.slice(0, 4).map((sub, idx) => (
                    <div key={idx} className="py-3 flex justify-between items-center text-xs">
                      <span className="font-semibold text-brand-charcoal">{sub.split(' (')[0]}</span>
                      <span className="text-brand-orange font-bold font-mono text-[10px]">SOB MEDIDA</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ELEMENTO ANTI-CONTEÚDO-DUPLICADO 1 - PORTFÓLIO REGIONAL / DA CATEGORIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              CASES REAIS PRÓXIMOS A VOCÊ
            </span>
            <h2 className="font-display text-2xl font-extrabold text-brand-charcoal mt-1">
              Obras Entregues pela Serra-Ferro na Região
            </h2>
          </div>
          <button
            onClick={() => { setView('portfolio'); window.scrollTo(0, 0); }}
            className="text-xs font-mono font-bold text-brand-charcoal hover:text-brand-orange uppercase tracking-wider"
          >
            Ver portfólio completo →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {localProjects.map((item) => (
            <div key={item.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
              <div>
                <PlaceholderImage category={item.category} heightClass="h-48" label={`${item.title} — ${item.serviceType}`} />
                <div className="p-5 space-y-3">
                  <span className="text-[10px] font-mono font-bold text-brand-orange uppercase">
                    {item.serviceType}
                  </span>
                  <h3 className="font-display text-sm font-bold text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-brand-charcoal">
                <span>{item.location}</span>
                <span className="font-mono text-[9px] text-brand-muted bg-neutral-100 px-1.5 py-0.5 rounded capitalize">
                  {item.projectType.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ELEMENTO ANTI-CONTEÚDO-DUPLICADO 2 - DEPOIMENTO DA REGIÃO */}
      <section className="bg-neutral-50 py-12 border-y border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              OPINIÃO DE QUEM JÁ ADQUIRIU
            </span>
            <h2 className="font-display text-2xl font-extrabold text-brand-charcoal mt-1">
              Depoimentos de Clientes na Localidade
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {localTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 border border-neutral-200 rounded-xl shadow-sm space-y-4 flex flex-col justify-between relative">
                <div className="absolute top-6 right-6 font-display text-5xl text-brand-orange/5 leading-none select-none pointer-events-none">
                  ”
                </div>
                
                <div className="space-y-3">
                  <div className="flex text-brand-orange text-xs">★ ★ ★ ★ ★</div>
                  <p className="text-xs text-brand-charcoal leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-xs font-bold text-brand-charcoal">{testimonial.name}</h4>
                    <span className="text-[9px] text-brand-muted font-mono block mt-0.5">{testimonial.role}</span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-brand-charcoal">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: QUEBRA DE OBJEÇÕES TÉCNICAS LOCALIZADA (SINAL E PRAZO) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            SEGURANÇA CONTRATUAL
          </span>
          <h2 className="font-display text-2xl font-extrabold text-brand-charcoal mt-1">
            Por que é seguro contratar a Serra-Ferro em {city.name}?
          </h2>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-brand-orange shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-brand-charcoal mb-1">
                A Nuance Fiscal do Sinal sob Medida
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Toda esquadria, vidro lapidado ou portão de ferro que instalamos em <strong>{city.name}</strong> é cortado e montado sob medida exclusiva para a sua obra, inviabilizando sua reutilização comercial futura em caso de desistência. Por isso, solicitamos sinal de entrada fiduciário para a reserva dos perfis nobres.
              </p>
              <p className="text-xs text-brand-muted leading-relaxed mt-2">
                Para a sua total segurança, toda transação comercial é acompanhada de <strong>Contrato de Prestação de Serviços registrado em Cartório</strong>, <strong>Nota Fiscal de entrada</strong> e um <strong>Cronograma Físico por escrito</strong> com datas exatas de início da usinagem e finalização de canteiro. Se houver atraso não justificado, pagamos multa estipulada contratualmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FORMULÁRIO DE CONVERSÃO FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            SOLICITAR VISITA TÉCNICA
          </span>
          <h2 className="font-display text-2xl font-extrabold text-brand-charcoal mt-1">
            Gere o seu orçamento em {city.name}
          </h2>
          <p className="text-xs text-brand-muted mt-2">
            Preencha os dados abaixo e compatibilize sua obra com o nosso comercial técnico focado na região de {city.name} - {city.initials}.
          </p>
        </div>

        <ContactForm initialService={focus.focusCategory} initialCity={city.slug} />
      </section>

    </div>
  );
}
