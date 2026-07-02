/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppView =
  | 'home'
  | 'esquadrias'
  | 'vidracaria'
  | 'serralheria'
  | 'portfolio'
  | 'sobre'
  | 'b2b'
  | 'blog'
  | 'contato'
  | string; // Para permitir landings dinâmicas como 'esquadrias-em-barueri-sp' etc.

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'esquadrias' | 'vidracaria' | 'serralheria';
  serviceType: string;
  location: string; // Ex: "Alphaville, Barueri", "Jardins, São Paulo"
  projectType: 'reforma' | 'obra_nova' | 'comercial';
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Cliente Residencial' | 'Arquiteto(a)' | 'Engenheiro(a)' | 'Construtora' | 'Síndico(a)';
  company?: string;
  text: string;
  location: string;
  rating: number;
  projectDescription: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'técnico' | 'decoração' | 'normas' | 'planejamento';
  readTime: string;
  coverImage?: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  tags?: string[];
  views?: number;
  likes?: number;
  comments?: {
    id: string;
    author: string;
    text: string;
    date: string;
  }[];
  quickSummary?: string;
  seoTitle?: string;
  seoDescription?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  tableOfContents?: {
    id: string;
    text: string;
    level: number;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactLead {
  name: string;
  phone: string;
  email?: string;
  service: string;
  city: string;
  projectType: string;
  message?: string;
}
