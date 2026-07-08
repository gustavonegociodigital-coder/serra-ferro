/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Clock, FileCheck, Shield, Hammer, Users, Calendar, Settings, Compass, Sparkles, AlertTriangle, ChevronLeft, ChevronRight, Instagram, Heart, MessageCircle, Bookmark, BookOpen, MapPin, Building2, Award, Check } from 'lucide-react';
import { AppView } from '../types';
import { PORTFOLIO_DATA, TESTIMONIALS_DATA } from '../data';
import PlaceholderImage from './PlaceholderImage';
import ContactForm from './ContactForm';

interface HomeProps {
  setView: (view: AppView) => void;
}

export default function Home({ setView }: HomeProps) {
  const getWhatsAppLink = (messageText: string) => {
    const baseUrl = 'https://wa.me/5511913243623';
    return `${baseUrl}?text=${encodeURIComponent(messageText)}`;
  };

  const handlePortaClick = (targetView: string) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPortfolioImageSrc = (id: string) => {
    switch (id) {
      case 'obra-1':
        return '/src/assets/images/portfolio_house_luxury_card_1782740031450.jpg';
      case 'obra-2':
        return '/src/assets/images/minimal_aluminum_frames_1782306022668.jpg';
      case 'obra-3':
        return '/src/assets/images/modern_facade_glass_1782306036555.jpg';
      default:
        return undefined;
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/src/assets/images/luxury_villa_glazing_1782306007983.jpg',
      tag: 'SERRA-FERRO • FÁBRICA DE ESQUADRIAS',
      titleNormal: 'As legítimas ',
      titleHighlight: 'esquadrias de alumínio em São Paulo',
      titleSuffix: ' para sua casa.',
      description: 'Janelas e portas de correr de alta qualidade direto de fábrica. Traga beleza, silêncio e segurança para o seu imóvel com entrega garantida no prazo.',
      ctaPrimaryText: 'Solicitar Orçamento de Fábrica',
      ctaSecondaryText: 'Ver Linhas Premium',
      ctaPrimaryLink: getWhatsAppLink('Olá! Gostaria de um orçamento personalizado para as esquadrias de alumínio da minha obra em São Paulo com a Serra-Ferro.'),
      ctaSecondaryAction: 'esquadrias'
    },
    {
      id: 2,
      image: '/src/assets/images/minimal_aluminum_frames_1782306022668.jpg',
      tag: 'VEDAÇÃO • SEM MAIS VAZAMENTOS OU BARULHO',
      titleNormal: 'A tranquilidade de ter ',
      titleHighlight: 'esquadrias de alumínio em São Paulo',
      titleSuffix: ' com vedação total.',
      description: 'Esqueça goteiras ou janelas que assoviam com o vento. Nossas esquadrias possuem isolamento duplo que bloqueia a chuva forte e diminui os ruídos da rua.',
      ctaPrimaryText: 'Garantir Vedação Completa',
      ctaSecondaryText: 'Falar com Especialista',
      ctaPrimaryLink: getWhatsAppLink('Olá! Gostaria de entender como a Serra-Ferro garante a vedação técnica das esquadrias contra chuvas e ventos fortes.'),
      ctaSecondaryAction: 'contato'
    },
    {
      id: 3,
      image: '/src/assets/images/modern_facade_glass_1782306036555.jpg',
      tag: 'COMPRA SEGURA • 100% SOB MEDIDA',
      titleNormal: 'Sua escolha segura de ',
      titleHighlight: 'esquadrias de alumínio em São Paulo',
      titleSuffix: ' com entrega no prazo.',
      description: 'Garantimos seu faturamento e cronograma em contrato registrado com multa por atraso. Projetamos e executamos soluções exclusivas sob medida para sua obra.',
      ctaPrimaryText: 'Falar com Engenheiro',
      ctaSecondaryText: 'Ver Portfólio',
      ctaPrimaryLink: getWhatsAppLink('Olá! Gostaria de falar com o engenheiro comercial da Serra-Ferro sobre o projeto de esquadrias sob medida para minha obra.'),
      ctaSecondaryAction: 'portfolio'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="space-y-20 pb-20 animate-fade-in" id="home-view">
      
      {/* SECTION 1: HERO (BANNER ROTATIVO ULTRA MODERNO) */}
      <section className="relative w-full h-[500px] sm:h-[540px] md:h-[580px] lg:h-[620px] overflow-hidden border-b border-neutral-200 bg-neutral-950 flex items-center" id="hero-section">
        
        {/* Sliding Background Images (Cross-fade effect) */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tag}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Elegant modern overlay combining rich black gradients for top-tier contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-neutral-950/40 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Decorative Grid Mesh overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

        {/* Hero Slider Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-8 sm:pt-12">
          <div className="max-w-2xl space-y-4">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>{slides[currentSlide].tag}</span>
            </div>
            
            {/* Clickbait Headline with dynamic text */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight">
              {slides[currentSlide].titleNormal}
              <span className="text-brand-orange relative inline-block">{slides[currentSlide].titleHighlight}</span>
              {slides[currentSlide].titleSuffix}
            </h1>
            
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* Pulsating CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href={slides[currentSlide].ctaPrimaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-lg font-display text-[11px] sm:text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-orange/20 cursor-pointer animate-pulse-orange"
                id="hero-cta-primary"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                {slides[currentSlide].ctaPrimaryText}
              </a>
              <button
                onClick={() => handlePortaClick(slides[currentSlide].ctaSecondaryAction)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white text-white backdrop-blur-sm rounded-lg font-display text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/10"
                id="hero-cta-secondary"
              >
                {slides[currentSlide].ctaSecondaryText}
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
            </div>

            {/* Trust highlights with custom inline design */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-5 pt-6 border-t border-white/10 max-w-lg text-left text-neutral-300">
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Prazo sob Rigorosa Multa</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold">
                <FileCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>Faturamento 100% com NFe</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-brand-orange" />
                <span>Garantia de Vedação Escrita</span>
              </div>
            </div>

          </div>
        </div>

        {/* Slider Manual Arrows (hidden on mobile, sleek on desktop) */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all duration-200 hidden md:flex items-center justify-center border border-white/5"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all duration-200 hidden md:flex items-center justify-center border border-white/5"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators / Bottom dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSlide === idx ? 'w-10 bg-brand-orange' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>
          {/* TRANSITION: FAIXA DE PROVA INSTITUCIONAL */}
      <section className="bg-brand-charcoal text-white py-10 animate-fade-in" id="faixa-provas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            
            <div className="space-y-1 py-4 md:py-0">
              <span className="block font-display text-3xl font-extrabold text-brand-orange">15+ Anos</span>
              <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">De Experiência</span>
            </div>

            <div className="space-y-1 py-4 md:py-0">
              <span className="block font-display text-3xl font-extrabold text-brand-orange">500+</span>
              <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Clientes Atendidos</span>
            </div>

            <div className="space-y-1 py-4 md:py-0">
              <span className="block font-display text-3xl font-extrabold text-brand-orange">Fábrica</span>
              <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Própria Integrada</span>
            </div>

            <div className="space-y-1 py-4 md:py-0">
              <span className="block font-display text-3xl font-extrabold text-brand-orange">Equipe</span>
              <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">100% Certificada</span>
            </div>

            <div className="space-y-1 py-4 md:py-0 col-span-2 md:col-span-1">
              <span className="block font-display text-3xl font-extrabold text-brand-orange">Garantia</span>
              <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Integral do Serviço</span>
            </div>

          </div>
        </div>
      </section>

      {/* DOBRA 2: SERVIÇOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="linhas-de-servico">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
            O QUE FAZEMOS DE MELHOR
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
            Esquadrias de Alumínio em São Paulo, Vidros e Estruturas Sob Medida
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl mx-auto font-medium leading-relaxed">
            Fabricamos e instalamos tudo o que você precisa em esquadrias de alumínio, vidraçaria e estruturas metálicas sem que você precise lidar com vários fornecedores diferentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Categoria 1: Esquadrias de Alumínio */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
            <div>
              <PlaceholderImage 
                category="esquadrias" 
                heightClass="h-48" 
                src="/src/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
                label="Portas e Janelas sob Medida"
              />
              <div className="p-6">
                <h3 className="font-display text-base font-bold text-brand-charcoal mb-2 flex items-center">
                  Esquadrias de Alumínio
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full ml-2" />
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Portas e janelas de correr sob medida (Linhas Gold e Suprema) perfeitas para isolar o barulho da rua e impedir totalmente a entrada de chuva.
                </p>
                <ul className="space-y-2 text-xs font-medium text-brand-charcoal/90">
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Portas de correr grandes para salas e varandas</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Janelas acústicas com persiana integrada</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Fachadas de vidro modernas para casas novas</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => handlePortaClick('esquadrias')}
                className="w-full py-2.5 bg-neutral-50 hover:bg-brand-charcoal hover:text-white text-brand-charcoal rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Conhecer Esquadrias
              </button>
            </div>
          </div>

          {/* Categoria 2: Vidraçaria */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
            <div>
              <PlaceholderImage 
                category="vidracaria" 
                heightClass="h-48" 
                src="/src/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg"
                label="Guarda-Corpos e Sacadas"
              />
              <div className="p-6">
                <h3 className="font-display text-base font-bold text-brand-charcoal mb-2 flex items-center">
                  Vidros de Alto Padrão
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full ml-2" />
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Guarda-corpos seguros de vidro, fechamentos modernos de sacada e box de luxo para valorizar o seu banheiro com fixação invisível.
                </p>
                <ul className="space-y-2 text-xs font-medium text-brand-charcoal/90">
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Guarda-corpos de vidro para escadas e sacadas</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Fechamento de sacada retrátil deslizante</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Box de banheiro premium com roldanas de inox</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => handlePortaClick('vidracaria')}
                className="w-full py-2.5 bg-neutral-50 hover:bg-brand-charcoal hover:text-white text-brand-charcoal rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Conhecer Vidraçaria
              </button>
            </div>
          </div>

          {/* Categoria 3: Serralheria */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
            <div>
              <PlaceholderImage 
                category="serralheria" 
                heightClass="h-48" 
                src="/src/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg"
                label="Escadas e Portões Finos"
              />
              <div className="p-6">
                <h3 className="font-display text-base font-bold text-brand-charcoal mb-2 flex items-center">
                  Serralheria e Estruturas
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full ml-2" />
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Escadas de aço personalizadas com solda invisível, portões automáticos modernos e estruturas metálicas seguras de mezanino.
                </p>
                <ul className="space-y-2 text-xs font-medium text-brand-charcoal/90">
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Portões automáticos residenciais e rápidos</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Escadas metálicas sob medida com design limpo</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-brand-orange rounded-full mr-2" />Estruturas de aço e mezaninos residenciais</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => handlePortaClick('serralheria')}
                className="w-full py-2.5 bg-neutral-50 hover:bg-brand-charcoal hover:text-white text-brand-charcoal rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Conhecer Serralheria
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5511913243623&text=Ol%C3%A1%21+Gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+direta+de+f%C3%A1brica+para+as+esquadrias+da+minha+obra.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-sm font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-orange/20 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer animate-pulse-orange"
          >
            <MessageCircle className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
            Fazer Cotação de Fábrica no WhatsApp
          </a>
        </div>
      </section>

      {/* DOBRA 3: PORTFÓLIO + RESULTADOS EXCLUSIVOS */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100" id="portfolio-destaque">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
                OBRAS ENTREGUES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
                Portfólio de Esquadrias de Alumínio de Alto Padrão em São Paulo
              </h2>
            </div>
            <button
              onClick={() => handlePortaClick('portfolio')}
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-orange transition-colors self-start sm:self-auto cursor-pointer"
            >
              Ver Todas as Obras
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
                <div>
                  <PlaceholderImage 
                    category={item.category} 
                    heightClass="h-56" 
                    label={`${item.title} — ${item.serviceType}`} 
                    src={getPortfolioImageSrc(item.id)}
                  />
                  <div className="p-5">
                    <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider">
                      {item.serviceType}
                    </span>
                    <h3 className="font-display text-base font-bold text-brand-charcoal mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-brand-charcoal font-medium">{item.location}</span>
                  <span className="font-mono text-brand-muted capitalize bg-neutral-100 px-2 py-0.5 rounded text-[10px]">
                    {item.projectType.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511913243623&text=Ol%C3%A1%21+Gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+direta+de+f%C3%A1brica+para+as+esquadrias+da+minha+obra.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-sm font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-orange/20 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer animate-pulse-orange"
            >
              <MessageCircle className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
              Solicitar Orçamento de Obra via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DOBRA 4: DIFERENCIAIS */}
      <section className="bg-white py-16 border-t border-neutral-100" id="diferenciais-com-prova">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Lado Esquerdo: Texto de Título e Imagem */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                  PADRÃO COMPROVADO, ZERO IMPROVISO
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
                  Esquadrias de Alumínio em São Paulo: Resolvemos os Maiores Gargalos das Obras
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                  Protegemos o seu investimento, o seu cronograma e a qualidade do seu projeto. Eliminamos os atrasos frequentes e as falhas clássicas de fornecimento através de um processo transparente de planejamento, fabricação dedicada e contrato seguro.
                </p>
              </div>

              {/* Imagem representativa da seção */}
              <div className="relative pt-2">
                <PlaceholderImage
                  category="esquadrias"
                  heightClass="h-[240px] sm:h-[280px]"
                  src="/src/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
                  label="Instalação de Esquadrias de Alumínio de Alto Padrão"
                  className="shadow-md animate-fade-in"
                />
              </div>
            </div>

            {/* Lado Direito: Os Atributos e Provas em Tópicos */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-4">
                
                {/* Diferencial 1: Pontualidade */}
                <div className="bg-neutral-50 p-5 border border-neutral-200 rounded-xl flex items-start space-x-4 transition-all hover:shadow-sm">
                  <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-brand-charcoal">
                      Prazo Garantido em Contrato
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed mt-1">
                      Cronograma físico claro anexado ao contrato com multa formal por atraso para garantir total previsibilidade e tranquilidade na sua obra.
                    </p>
                  </div>
                </div>

                {/* Diferencial 2: Garantia */}
                <div className="bg-neutral-50 p-5 border border-neutral-200 rounded-xl flex items-start space-x-4 transition-all hover:shadow-sm">
                  <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-brand-charcoal">
                      Garantia de Estanqueidade e Vedação
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed mt-1">
                      Proteção efetiva e por escrito contra infiltrações de água da chuva, assovios de vento e poeira, além de funcionamento macio e silencioso.
                    </p>
                  </div>
                </div>

                {/* Diferencial 3: Profissionalismo */}
                <div className="bg-neutral-50 p-5 border border-neutral-200 rounded-xl flex items-start space-x-4 transition-all hover:shadow-sm">
                  <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-brand-charcoal">
                      Instalação Própria Especializada
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed mt-1">
                      Nossos técnicos de montagem e instalação realizam um serviço milimétrico, limpo e extremamente cuidadoso para preservar o seu imóvel.
                    </p>
                  </div>
                </div>

                {/* Diferencial 4: Responsabilidade */}
                <div className="bg-neutral-50 p-5 border border-neutral-200 rounded-xl flex items-start space-x-4 transition-all hover:shadow-sm">
                  <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-brand-charcoal">
                      Responsabilidade Técnica de Ponta a Ponta
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed mt-1">
                      Eliminamos o clássico jogo de empurra das obras residenciais. Assumimos toda a cadeia: medimos o local, fabricamos as peças e fazemos a montagem.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511913243623&text=Ol%C3%A1%21+Gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+direta+de+f%C3%A1brica+para+as+esquadrias+da+minha+obra.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-sm font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-orange/20 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer animate-pulse-orange"
            >
              <MessageCircle className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
              Falar Conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DOBRA 5: COMO FUNCIONA */}
      <section 
        className="relative bg-fixed bg-cover bg-center py-20 overflow-hidden border-t border-neutral-100" 
        style={{ backgroundImage: `url('/src/assets/images/minimal_aluminum_frames_1782306022668.jpg')` }}
        id="processo-de-obra"
      >
        {/* Semi-transparent overlay to ensure legibility of text */}
        <div className="absolute inset-0 bg-brand-charcoal/90 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              A JORNADA DA SUA OBRA
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Fábrica de Esquadrias de Alumínio em São Paulo com Processo de Alta Precisão
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl mx-auto font-medium leading-relaxed">
              Deixamos tudo o mais simples e seguro possível para você. Do primeiro atendimento no WhatsApp até o teste de vedação na sua casa:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            
            {/* Decorative connector line on desktop */}
            <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-white/20 -z-10" />

            {/* Etapa 1 */}
            <div className="text-center space-y-4 group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:border-brand-orange text-white group-hover:text-brand-orange font-mono text-base font-bold rounded-full flex items-center justify-center mx-auto transition-colors duration-300 shadow-sm relative">
                01
                <span className="absolute -bottom-1 w-2 h-2 bg-white/30 group-hover:bg-brand-orange rounded-full" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-xs font-bold text-white group-hover:text-brand-orange transition-colors uppercase tracking-wider">
                  1. Visita e Medição
                </h4>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Nossos técnicos vão até sua obra medir os vãos com laser de alta precisão para garantir encaixe perfeito.
                </p>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="text-center space-y-4 group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:border-brand-orange text-white group-hover:text-brand-orange font-mono text-base font-bold rounded-full flex items-center justify-center mx-auto transition-colors duration-300 shadow-sm relative">
                02
                <span className="absolute -bottom-1 w-2 h-2 bg-white/30 group-hover:bg-brand-orange rounded-full" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-xs font-bold text-white group-hover:text-brand-orange transition-colors uppercase tracking-wider">
                  2. Desenho Técnico
                </h4>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Desenhamos em computador os modelos escolhidos para você e seu arquiteto aprovarem antes de começar.
                </p>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="text-center space-y-4 group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:border-brand-orange text-white group-hover:text-brand-orange font-mono text-base font-bold rounded-full flex items-center justify-center mx-auto transition-colors duration-300 shadow-sm relative">
                03
                <span className="absolute -bottom-1 w-2 h-2 bg-white/30 group-hover:bg-brand-orange rounded-full" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-xs font-bold text-white group-hover:text-brand-orange transition-colors uppercase tracking-wider">
                  3. Fabricação Própria
                </h4>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Corte, usinagem e fabricação na nossa oficina de São Paulo utilizando perfis certificados.
                </p>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="text-center space-y-4 group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:border-brand-orange text-white group-hover:text-brand-orange font-mono text-base font-bold rounded-full flex items-center justify-center mx-auto transition-colors duration-300 shadow-sm relative">
                04
                <span className="absolute -bottom-1 w-2 h-2 bg-white/30 group-hover:bg-brand-orange rounded-full" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-xs font-bold text-white group-hover:text-brand-orange transition-colors uppercase tracking-wider">
                  4. Instalação Segura
                </h4>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Nossos montadores próprios realizam a instalação limpa seguindo as normas NBR correspondentes.
                </p>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="text-center space-y-4 group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:border-brand-orange text-white group-hover:text-brand-orange font-mono text-base font-bold rounded-full flex items-center justify-center mx-auto transition-colors duration-300 shadow-sm relative">
                05
                <span className="absolute -bottom-1 w-2 h-2 bg-white/30 group-hover:bg-brand-orange rounded-full" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-xs font-bold text-white group-hover:text-brand-orange transition-colors uppercase tracking-wider">
                  5. Conferência de Vedação
                </h4>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Teste final por aspersão de água nas vedações para atestar total hermeticidade e calafetação.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DOBRA 6: DEPOIMENTOS */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              QUEM CONFIA NA SERRA-FERRO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
              Depoimentos de quem escolheu nossas Esquadrias de Alumínio em São Paulo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col justify-between relative">
                {/* Subtle quote graphic symbol */}
                <div className="absolute top-6 right-6 font-display text-6xl text-brand-orange/5 leading-none select-none pointer-events-none">
                  ”
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-brand-orange">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  
                  <p className="text-xs text-brand-charcoal/90 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
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
        </div>
      </section>

      {/* DOBRA 7: BANNER COM CTA (Alto Impacto e Conversão) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in animate-duration-1000" id="banner-cta-meio">
        <div className="bg-brand-charcoal text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-neutral-800 text-center flex flex-col items-center justify-center space-y-6">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/60 via-brand-charcoal to-brand-charcoal pointer-events-none -z-10" />
          
          <span className="inline-flex items-center space-x-1 px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-brand-orange text-[10px] font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-brand-orange animate-pulse" />
            <span>FABRICAÇÃO PRÓPRIA COM FATURAMENTO DIRETO DE FÁBRICA</span>
          </span>

          <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Pronto para garantir as legítimas esquadrias de alumínio para sua obra?
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed max-w-xl font-medium">
            Garantimos o prazo de entrega sob multa contratual registrada, emitimos Nota Fiscal de imediato e instalamos com equipe 100% interna e registrada. Fale agora com nossa equipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2 max-w-md">
            <a
              href={getWhatsAppLink('Olá! Gostaria de fazer uma cotação direta de fábrica para as esquadrias da minha obra.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DOBRA 8: PARCERIAS B2B */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="faixa-parcerias-b2b">
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-sm border border-neutral-200/80">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-neutral-200 border border-neutral-300 rounded-full text-brand-charcoal text-[10px] font-mono font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 mr-1 text-brand-orange" />
              <span>ROTA DE PARCERIA PARA PROFISSIONAIS DA ÁREA</span>
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-charcoal">
              Trabalha com arquitetura ou construção?<br className="hidden sm:inline" />
              Conheça nossa parceria técnica e comercial
            </h3>

            <p className="text-sm text-brand-muted leading-relaxed max-w-2xl font-medium">
              Executamos o seu projeto à risca, sem desvios de design ou adaptações improvisadas no canteiro de obras. Oferecemos suporte completo na definição de tamanhos, vedações seguras contra chuva forte, faturamento flexível e comissionamento ágil por indicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => handlePortaClick('b2b')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Conhecer Rota de Parcerias
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
              <a
                href={getWhatsAppLink('Olá! Sou profissional da área (Arquiteto/Engenheiro/Construtor) e gostaria de falar sobre o programa de parcerias da Serra-Ferro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-neutral-300 hover:border-neutral-400 text-brand-charcoal rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Falar com Engenheiro no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 8b: SOBRE NÓS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-100" id="sobre-nos-home">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Imagem Representativa */}
          <div className="lg:col-span-5 relative">
            <PlaceholderImage
              category="geral"
              heightClass="h-[360px]"
              src="/src/assets/images/minimal_aluminum_frames_1782306022668.jpg"
              label="Soluções Sob Medida Serra-Ferro"
              className="shadow-lg animate-fade-in"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              QUEM SOMOS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
              Serra-Ferro: Engenharia e Excelência em Esquadrias de Alumínio em São Paulo
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
              A Serra-Ferro nasceu para ser uma referência de segurança e pontualidade no fornecimento de esquadrias de alumínio, vidros especiais e estruturas de alto padrão. Unimos planejamento estratégico com engenharia aplicada para assegurar que cada projeto seja executado com perfeição estética e dentro do cronograma esperado.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Trabalhamos exclusivamente sob medida para o seu imóvel. Cada peça é desenhada, detalhada e executada com precisão milimétrica, garantindo estanqueidade máxima contra ventos e chuvas, além de um isolamento acústico superior.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Projetos 100% Personalizados</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Equipe Técnica Própria e Qualificada</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Rigoroso Controle de Qualidade de Peças</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Medições Técnicas Precisas in loco</span>
              </div>
            </div>

            {/* CTA Button as requested for every section */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('Olá Serra-Ferro! Gostaria de falar com o comercial técnico sobre as esquadrias sob medida para a minha obra.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal hover:bg-brand-orange text-white font-display text-xs font-bold uppercase tracking-wider rounded transition-colors group cursor-pointer"
              >
                Falar com Engenheiro no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* DOBRA 9: INSTAGRAM */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100" id="instagram-feed-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                SIGA NOSSA ROTINA
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
                Acompanhe Projetos de Esquadrias de Alumínio em São Paulo no Instagram
              </h2>
            </div>
            <a
              href="https://instagram.com/serraferroprime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white border border-neutral-300 hover:border-brand-orange rounded-lg text-xs font-bold text-brand-charcoal hover:text-brand-orange transition-all tracking-wider uppercase font-mono shadow-sm cursor-pointer"
            >
              <Instagram className="w-4 h-4 mr-2 text-brand-orange" />
              @serraferroprime
            </a>
          </div>

          {/* Styled Instagram Feed Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            
            {/* Post 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm group relative">
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                  src="/src/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
                  alt="Esquadrias em São Paulo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white text-sm font-bold z-10">
                  <span className="flex items-center"><Heart className="w-4 h-4 mr-1.5 fill-white" /> 142</span>
                  <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1.5 fill-white" /> 18</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-brand-charcoal rounded-full text-white text-[8px] font-bold flex items-center justify-center font-mono">SF</span>
                  <span className="font-mono text-[10px] font-bold text-brand-charcoal">serraferroprime</span>
                </div>
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                  Mais uma obra residencial com esquadrias minimalistas de alumínio correndo macio. Vidro temperado especial garantindo silêncio e luz natural. ☀️🏡 #esquadrias #arquiteturaSP
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm group relative">
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                  src="/src/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg"
                  alt="Guarda corpo de vidro"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white text-sm font-bold z-10">
                  <span className="flex items-center"><Heart className="w-4 h-4 mr-1.5 fill-white" /> 89</span>
                  <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1.5 fill-white" /> 7</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-brand-charcoal rounded-full text-white text-[8px] font-bold flex items-center justify-center font-mono">SF</span>
                  <span className="font-mono text-[10px] font-bold text-brand-charcoal">serraferroprime</span>
                </div>
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                  Detalhe de guarda-corpo de vidro de segurança com fixação invisível por perfil de alumínio embutido. Visual limpo e proteção garantida pela norma NBR. 🛡️✨ #vidrotemperado #decoracao
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm group relative">
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                  src="/src/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg"
                  alt="Escada metálica"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white text-sm font-bold z-10">
                  <span className="flex items-center"><Heart className="w-4 h-4 mr-1.5 fill-white" /> 210</span>
                  <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1.5 fill-white" /> 31</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-brand-charcoal rounded-full text-white text-[8px] font-bold flex items-center justify-center font-mono">SF</span>
                  <span className="font-mono text-[10px] font-bold text-brand-charcoal">serraferroprime</span>
                </div>
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                  Serralheria fina aplicada à arquitetura: escada plissada metálica preta com soldagem invisível. Engenharia de estruturas aliada ao design minimalista. 🖤📐 #metalworking #serralheria
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DOBRA 10: CONTATO (Direcionando apenas para o WhatsApp, sem formulário) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contato-secao-home">
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
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-colors shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Iniciar Orçamento Gratuito por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* DOBRA 11: BLOG (Dicas e Novidades sobre Esquadrias e Vidros) */}
      <section className="bg-neutral-50 py-16 border-t border-neutral-100" id="blog-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              DICAS DA FÁBRICA
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
              Guia Técnico de Esquadrias de Alumínio em São Paulo
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl mx-auto leading-relaxed">
              Descubra como tomar as melhores decisões para as esquadrias e vidraçarias de sua casa, reduzindo custos e garantindo estanqueidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Post 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative bg-neutral-200">
                  <img 
                    src="/src/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg" 
                    alt="Linha Gold vs Suprema" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-neutral-900/80 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">LINHAS</span>
                </div>
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-brand-muted">
                    <span>29 JUNHO 2026</span>
                    <span>•</span>
                    <span>5 MIN LEITURA</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors">
                    Esquadrias de Alumínio: Qual a diferença prática entre Linha Gold e Suprema?
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Aprenda a escolher o sistema ideal de perfis para cada vão da sua obra em São Paulo considerando espessura de vidro, custo-benefício e vedações de vento.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between">
                <a 
                  href={getWhatsAppLink('Olá! Li o artigo sobre Linha Gold vs Suprema e gostaria de tirar uma dúvida para a minha casa.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-charcoal hover:text-brand-orange transition-colors inline-flex items-center cursor-pointer"
                >
                  Falar sobre Linhas
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative bg-neutral-200">
                  <img 
                    src="/src/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg" 
                    alt="Evitar infiltrações" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-neutral-900/80 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">VEDAÇÃO</span>
                </div>
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-brand-muted">
                    <span>24 JUNHO 2026</span>
                    <span>•</span>
                    <span>4 MIN LEITURA</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors">
                    Como evitar infiltrações e assovios de vento nas esquadrias de alumínio
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    A vedação técnica exige borrachas de EPDM e drenos corretos de trilhos. Saiba como identificar se o seu fornecedor está fazendo o trabalho correto.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between">
                <a 
                  href={getWhatsAppLink('Olá! Li o artigo sobre infiltrações e assovios de vento e gostaria de tirar dúvidas de vedação para minha obra.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-charcoal hover:text-brand-orange transition-colors inline-flex items-center cursor-pointer"
                >
                  Tirar Dúvidas
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative bg-neutral-200">
                  <img 
                    src="/src/assets/images/portfolio_house_luxury_card_1782740031450.jpg" 
                    alt="Segurança Guarda Corpos" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-neutral-900/80 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">SEGURANÇA</span>
                </div>
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-brand-muted">
                    <span>18 JUNHO 2026</span>
                    <span>•</span>
                    <span>6 MIN LEITURA</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors">
                    A importância da Norma NBR 14718 em guarda-corpos e sacadas de vidro
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Para além do design minimalista, a segurança física de sua sacada ou escada é definida por vidros laminados temperados e testes rigorosos de impacto estrutural.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between">
                <a 
                  href={getWhatsAppLink('Olá! Gostaria de falar com o engenheiro da Serra-Ferro sobre guarda-corpos seguros de vidro NBR 14718.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-charcoal hover:text-brand-orange transition-colors inline-flex items-center cursor-pointer"
                >
                  Falar com Engenheiro
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
