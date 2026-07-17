/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CITIES_LIST } from './data';
import { ESQUADRIAS_REGION_BY_SLUG } from './regionsEsquadrias';
import { SERRALHERIA_REGION_BY_SLUG, SERRALHERIA_SP_SLUG } from './regionsSerralheria';
import { VIDRACARIA_REGION_BY_SLUG, VIDRACARIA_SP_SLUG } from './regionsVidracaria';

export { SERRALHERIA_SP_SLUG } from './regionsSerralheria';
export { VIDRACARIA_SP_SLUG } from './regionsVidracaria';

/** Domínio canônico de produção. Trocar aqui caso o domínio final mude. */
export const SITE_URL = 'https://www.serraferro.com.br';

/** Imagem social padrão (Open Graph / Twitter). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg`;

/** Slug/rota canônica da página de Esquadrias (São Paulo). Antes era apenas "esquadrias". */
export const ESQUADRIAS_SP_SLUG = 'esquadrias-de-aluminio-em-sao-paulo-sp';

export interface PageSeo {
  title: string;
  description: string;
}

/**
 * Metas por página, cada uma otimizada para a palavra-chave objetiva daquela rota,
 * seguindo o padrão da home: "<Keyword primária> | <Keyword secundária> | Serra Ferro".
 * As descrições são focadas em clique (benefício + CTA) reaproveitando as keywords do título.
 */
export const SEO_META: Record<string, PageSeo> = {
  home: {
    title: 'Esquadrias de Alumínio em São Paulo | Esquadrias de Alumínio em SP | Serra Ferro',
    description:
      'Serviços de esquadrias de alumínio em São Paulo sob medida: projeto, instalação e vedação garantida em contrato, com equipe técnica própria. Peça seu orçamento em SP no WhatsApp.',
  },
  esquadrias: {
    title: 'Esquadrias de Alumínio em SP | Portas e Janelas de Alumínio em São Paulo | Serra Ferro',
    description:
      'Serviços de esquadrias de alumínio sob medida em São Paulo: projeto, instalação e regulagem de portas e janelas com isolamento acústico e vedação. Peça seu orçamento em SP.',
  },
  vidracaria: {
    title: 'Vidraçaria em São Paulo | Guarda-Corpo de Vidro e Box de Luxo em SP | Serra Ferro',
    description:
      'Serviços de vidraçaria de alto padrão em São Paulo: instalação de guarda-corpo de vidro, fechamento de sacada e box sob medida com fixação invisível. Orçamento em SP.',
  },
  serralheria: {
    title: 'Serralheria em São Paulo | Portões, Escadas e Estruturas Metálicas em SP | Serra Ferro',
    description:
      'Serviços de serralheria fina em São Paulo: execução e instalação de portões, escadas e mezaninos sob medida com solda invisível. Solicite seu orçamento de serralheria em SP.',
  },
  portfolio: {
    title: 'Portfólio de Obras em São Paulo | Esquadrias de Alumínio de Alto Padrão | Serra Ferro',
    description:
      'Veja obras de esquadrias de alumínio, vidraçaria e serralheria de alto padrão executadas em São Paulo. Serviços entregues em SP — inspire-se e peça seu orçamento.',
  },
  b2b: {
    title: 'Esquadrias de Alumínio para Arquitetos e Construtoras em SP | Parceria B2B | Serra Ferro',
    description:
      'Serviços de esquadrias de alumínio em São Paulo para arquitetos, engenheiros e construtoras: execução fiel ao projeto, instalação técnica e prazo garantido em contrato.',
  },
  sobre: {
    title: 'Sobre a Serra Ferro | Serviços de Esquadrias de Alumínio em São Paulo | SP',
    description:
      'Conheça a Serra Ferro: serviços de esquadrias de alumínio, vidraçaria e serralheria em São Paulo com engenharia, equipe própria e instalação de precisão em SP sob medida.',
  },
  blog: {
    title: 'Blog Serra Ferro | Guia Técnico de Esquadrias de Alumínio em São Paulo | SP',
    description:
      'Guia técnico de esquadrias de alumínio em São Paulo: linhas, vedação, normas e dicas de instalação para sua obra em SP. Decida melhor com os serviços da Serra Ferro.',
  },
  contato: {
    title: 'Orçamento de Esquadrias de Alumínio em São Paulo | Fale com a Serra Ferro em SP',
    description:
      'Peça seu orçamento de serviços de esquadrias de alumínio em São Paulo com o engenheiro comercial. Atendimento por WhatsApp e visita técnica em SP. Fale com a Serra Ferro.',
  },
};

// As páginas de categoria passaram a responder em URLs com a keyword local (SP),
// mantendo o mesmo conteúdo/meta. Mantemos os slugs curtos como alias.
SEO_META[ESQUADRIAS_SP_SLUG] = SEO_META.esquadrias;
SEO_META[SERRALHERIA_SP_SLUG] = SEO_META.serralheria;
SEO_META[VIDRACARIA_SP_SLUG] = SEO_META.vidracaria;

/** Gera a meta de uma landing de cidade (rota "city-<slug>") a partir da lista de cidades. */
function getCitySeo(view: string): PageSeo | null {
  const slug = view.replace('city-', '');
  const city = CITIES_LIST.find((c) => c.slug === slug);
  if (!city) return null;
  return {
    title: `Esquadrias de Alumínio em ${city.name} | Esquadrias de Alumínio ${city.initials} | Serra Ferro`,
    description: `Serviços de esquadrias de alumínio sob medida em ${city.name}: projeto, instalação e vedação garantida em contrato, com equipe técnica própria. Peça seu orçamento em ${city.name} no WhatsApp.`,
  };
}

/** Resolve a meta de uma view, com fallback para a home. */
export function getSeoForView(view: string): PageSeo {
  if (SEO_META[view]) return SEO_META[view];
  const region =
    ESQUADRIAS_REGION_BY_SLUG[view] || SERRALHERIA_REGION_BY_SLUG[view] || VIDRACARIA_REGION_BY_SLUG[view];
  if (region) {
    return { title: region.metaTitle, description: region.metaDescription };
  }
  if (view.startsWith('city-')) {
    const citySeo = getCitySeo(view);
    if (citySeo) return citySeo;
  }
  return SEO_META.home;
}

/** Caminho canônico limpo de uma view (sem hash). */
export function getPathForView(view: string): string {
  return view === 'home' ? '/' : `/${view}`;
}

/** Indica se a view corresponde a uma rota real do site (senão, é 404). */
export function isKnownRoute(view: string): boolean {
  if (view === 'home' || view === 'esquadrias') return true;
  if (SEO_META[view]) return true;
  if (ESQUADRIAS_REGION_BY_SLUG[view]) return true;
  if (SERRALHERIA_REGION_BY_SLUG[view]) return true;
  if (VIDRACARIA_REGION_BY_SLUG[view]) return true;
  if (view.startsWith('city-')) return true;
  return false;
}

/** Cria (ou atualiza) uma <meta> por atributo name/property. */
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Cria (ou atualiza) o <link rel="canonical">. */
function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Aplica título, description, canonical e tags Open Graph/Twitter para a view atual.
 * Chamado a cada mudança de rota. O Blog gerencia sua própria meta por post.
 */
export function applySeo(view: string) {
  const known = isKnownRoute(view);

  const { title, description } = known
    ? getSeoForView(view)
    : {
        title: 'Página não encontrada | Serra Ferro',
        description: 'A página que você procura não existe ou foi movida. Volte à página inicial da Serra Ferro.',
      };

  // Rotas desconhecidas não devem ser indexadas (evita soft-404 com conteúdo duplicado).
  upsertMeta(
    'name',
    'robots',
    known
      ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      : 'noindex, follow',
  );

  // Em 404, o canônico aponta para a home (não para a URL inexistente).
  const url = known ? `${SITE_URL}${getPathForView(view)}` : `${SITE_URL}/`;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertCanonical(url);

  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);

  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
}
