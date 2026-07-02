/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { ContactLead } from '../types';
import { CITIES_LIST } from '../data';

interface ContactFormProps {
  initialService?: string;
  initialCity?: string;
  compact?: boolean;
}

export default function ContactForm({
  initialService = 'esquadrias',
  initialCity = 'sao-paulo',
  compact = false
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactLead>({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    city: initialCity,
    projectType: 'reforma',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Formata o número de telefone de forma elegante (11) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha o Nome e o Celular/WhatsApp.');
      return;
    }

    setLoading(true);

    // Simular o envio para o "servidor"
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const getWhatsAppLink = (isFormSubmission = false) => {
    const baseUrl = 'https://wa.me/5511999999999'; // Número fictício do comercial técnico
    let text = '';

    if (isFormSubmission) {
      text = `Olá Serra-Ferro! Acabo de preencher o formulário no site:\n\n*Nome:* ${formData.name}\n*Contato:* ${formData.phone}\n*E-mail:* ${formData.email || 'Não informado'}\n*Serviço:* ${formData.service.toUpperCase()}\n*Cidade/Região:* ${formData.city.toUpperCase()}\n*Tipo:* ${formData.projectType.toUpperCase()}\n*Mensagem:* ${formData.message || 'Sem observações'}\n\nGostaria de agendar a visita técnica para o meu orçamento personalizado.`;
    } else {
      text = `Olá Serra-Ferro! Gostaria de falar com o comercial técnico sobre um orçamento de alto padrão para a minha obra.`;
    }

    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  if (submitted) {
    return (
      <div className="bg-white border border-neutral-200 rounded-xl p-8 text-center shadow-lg max-w-lg mx-auto animate-fade-in" id="success-form-container">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="font-display text-xl font-bold text-brand-charcoal mb-3">Solicitação Recebida com Sucesso!</h3>
        <p className="text-sm text-brand-muted mb-6 leading-relaxed">
          Nossa equipe comercial já recebeu os seus dados técnica e comercialmente compatibilizados. 
          Gere o contato direto no WhatsApp abaixo para acelerar o agendamento da sua visita técnica e orçamento sem custo.
        </p>
        
        <div className="space-y-3">
          <a
            href={getWhatsAppLink(true)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-emerald-600 text-white rounded-lg font-display text-sm font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-md shadow-emerald-600/10"
            id="btn-whatsapp-redirect"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Abrir Conversa no WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                service: initialService,
                city: initialCity,
                projectType: 'reforma',
                message: ''
              });
            }}
            className="text-xs text-brand-muted hover:text-brand-orange transition-colors font-mono uppercase tracking-widest mt-4"
          >
            Preencher novo formulário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-lg ${compact ? '' : 'grid md:grid-cols-12'}`} id="contact-component">
      {/* Informações de Contato Rápidas - Lado Esquerdo */}
      {!compact && (
        <div className="md:col-span-5 bg-brand-charcoal text-white p-8 md:p-10 flex flex-col justify-between relative">
          {/* Subtle logo/graphic backdrop */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient from-neutral-800 to-transparent opacity-30 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-mono font-semibold text-brand-orange uppercase tracking-widest mb-2 block">
              ORÇAMENTO PREMIUM
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight mb-4">
              Alto padrão começa no acabamento.
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-8">
              Fale diretamente com os nossos engenheiros e técnicos. Sem robôs, sem burocracia, atendimento consultivo focado na execução impecável do seu projeto.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-brand-orange mr-4 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">WhatsApp Comercial</span>
                  <p className="font-display text-sm font-semibold text-neutral-100">(11) 91324-3623</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-brand-orange mr-4 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">Sede Operacional</span>
                  <p className="font-display text-sm font-semibold text-neutral-100 leading-snug">
                    Al. Rio Negro, 229 - Alphaville Industrial, Barueri - SP, 06454-000
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">Projetos Executados Sob Medida</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-brand-orange mr-4 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">Garantia Integrada</span>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    Contrato registrado em cartório, faturamento direto, cronograma por escrito e emissão de Nota Fiscal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800 relative z-10 flex items-center justify-between text-xs text-neutral-400">
            <span>Segunda a Sexta: 8h às 18h</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>
      )}

      {/* Formulário - Lado Direito */}
      <div className={`${compact ? 'p-6 md:p-8' : 'md:col-span-7 p-8 md:p-10'}`}>
        <div className="mb-6">
          <h4 className="font-display text-lg font-bold text-brand-charcoal mb-1">
            Fale Conosco agora
          </h4>
          <p className="text-xs text-brand-muted leading-relaxed">
            Preencha os dados abaixo e entraremos em contato em até 2 horas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" id="form-lead">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Roberto Camargo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                Celular / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="Ex: (11) 99999-9999"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="w-full px-3.5 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                Serviço de Interesse
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all duration-200"
              >
                <option value="esquadrias">Esquadrias de Alumínio</option>
                <option value="vidracaria">Vidraçaria de Alto Padrão</option>
                <option value="serralheria">Serralheria Fina & Estrutural</option>
                <option value="parceria_b2b">Parceria para Arquitetos / Construtoras</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                Cidade / Local da Obra
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all duration-200"
              >
                {CITIES_LIST.map((city) => (
                  <option key={city.slug} value={city.slug}>
                    {city.name} - {city.initials}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                Tipo do Projeto
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['reforma', 'obra_nova', 'comercial'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`py-1.5 text-xs rounded-lg font-medium border transition-all duration-200 capitalize ${
                      formData.projectType === type
                        ? 'border-brand-charcoal bg-brand-charcoal text-white shadow-sm'
                        : 'border-neutral-200 hover:bg-neutral-50 text-brand-charcoal'
                    }`}
                  >
                    {type.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                E-mail (Opcional)
              </label>
              <input
                type="email"
                placeholder="Ex: roberto@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
              Observações / Detalhes (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de portas de correr Linha Gold de grandes dimensões para integrar a varanda."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all duration-200 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg font-display text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-brand-orange/10 cursor-pointer disabled:opacity-50"
              id="btn-submit-lead"
            >
              {loading ? (
                <span>Processando...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Solicitação de Orçamento
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="flex items-center justify-center space-x-2 pt-2 border-t border-neutral-100 text-xs">
            <span className="text-brand-muted">Ou se preferir, fale em segundos pelo</span>
            <a
              href={getWhatsAppLink(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              id="btn-whatsapp-text-direct"
            >
              <Phone className="w-3 h-3 mr-1" />
              WhatsApp Comercial Técnico
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
