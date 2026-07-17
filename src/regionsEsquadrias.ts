/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Páginas regionais de Esquadrias de Alumínio. Cada cidade tem copy 100% única
// (hero, contexto local, subtítulos, cases, depoimentos e FAQ) para evitar conteúdo
// duplicado, reaproveitando a mesma estrutura de seções da página de Esquadrias.

const IMG = {
  esq: '/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg',
  villa: '/assets/images/luxury_villa_glazing_1782306007983.jpg',
  min: '/assets/images/minimal_aluminum_frames_1782306022668.jpg',
  facade: '/assets/images/modern_facade_glass_1782306036555.jpg',
  house: '/assets/images/portfolio_house_luxury_card_1782740031450.jpg',
  vidro: '/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg',
  serr: '/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg',
};

export interface RegionCase {
  title: string;
  region: string;
  description: string;
  image: string;
  highlight: string;
}

export interface RegionTestimonial {
  author: string;
  role: string;
  text: string;
}

export interface RegionFAQ {
  question: string;
  answer: string;
}

export interface RegionHeaders {
  servicesTitle: string;
  servicesSubtitle: string;
  linesTitle: string;
  linesSubtitle: string;
  casesTitle: string;
  casesSubtitle: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  faqTitle: string;
  faqSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
}

export interface RegionPage {
  slug: string;
  city: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  hero: { tag: string; description: string; highlights: string[] };
  localIntro: { tag: string; title: string; paragraphs: string[]; bullets: string[] };
  headers: RegionHeaders;
  cases: RegionCase[];
  testimonials: RegionTestimonial[];
  faqs: RegionFAQ[];
}

/** Alias mantido por retrocompatibilidade. */
export type EsquadriasRegion = RegionPage;

export const ESQUADRIAS_REGIONS: EsquadriasRegion[] = [
  {
    slug: 'esquadrias-de-aluminio-em-cotia-sp',
    city: 'Cotia',
    keyword: 'Esquadrias de Alumínio em Cotia SP',
    metaTitle: 'Esquadrias de Alumínio em Cotia SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Cotia SP sob medida para casas de condomínio na Granja Viana e região. Projeto, instalação e vedação contra a umidade da mata. Orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM COTIA SP',
      description: 'Fabricamos e instalamos esquadrias de alumínio sob medida em Cotia e na Granja Viana, com vedação reforçada para a umidade da mata atlântica e grandes vãos de casas em condomínio fechado.',
      highlights: ['Vedação reforçada para clima úmido', 'Ideal para casas de condomínio', 'Medição in loco na Granja Viana', 'Entrega com prazo em contrato'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM COTIA',
      title: 'Especialistas em Esquadrias de Alumínio em Cotia e Granja Viana',
      paragraphs: [
        'Cotia concentra grandes condomínios cercados por mata atlântica, como Granja Viana, San Fernando e Vale dos Sonhos, onde a umidade constante e a variação de temperatura exigem esquadrias com vedação impecável. Projetamos cada caixilho para impedir infiltrações e condensação, preservando o conforto das residências mesmo nos meses mais chuvosos.',
        'Atendemos toda a região de Cotia com medição técnica no local, fabricação sob medida e instalação por equipe própria. Dos amplos vãos de vidro voltados para o verde às janelas acústicas dos dormitórios, entregamos alumínio de alto padrão com esquadro milimétrico e acabamento que valoriza a arquitetura de casas em terreno amplo.',
      ],
      bullets: ['Cobertura em Granja Viana, Caucaia do Alto e condomínios', 'Vedação anti-infiltração para regiões de mata', 'Grandes vãos e portas de correr para casas térreas', 'Persianas integradas para privacidade em condomínio'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Cotia SP: Serviços Sob Medida',
      servicesSubtitle: 'Soluções completas em alumínio de alto padrão para casas de condomínio e residências em Cotia, projetadas para resistir à umidade da mata e aos grandes vãos voltados ao paisagismo.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Obras em Cotia',
      linesSubtitle: 'Compare as linhas ideais para casas amplas de Cotia e Granja Viana e escolha a espessura de perfil e vidro certos para o seu projeto.',
      casesTitle: 'Projetos de Esquadrias de Alumínio Entregues em Cotia e Região',
      casesSubtitle: 'Obras residenciais de alto padrão executadas em condomínios de Cotia com vedação reforçada e esquadro perfeito.',
      testimonialsTitle: 'Quem Instalou Esquadrias de Alumínio em Cotia Recomenda',
      testimonialsSubtitle: 'A experiência de moradores de condomínios de Cotia e Granja Viana com nossas esquadrias.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Cotia',
      faqSubtitle: 'Respostas técnicas para quem vai instalar ou trocar esquadrias em Cotia e na Granja Viana.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Cotia SP',
      contactSubtitle: 'Agende a medição gratuita da sua casa em Cotia ou Granja Viana. Fale agora com o comercial técnico pelo WhatsApp.',
    },
    cases: [
      { title: 'Casa em Condomínio - Granja Viana (Cotia)', region: 'Granja Viana - Cotia', description: 'Portas de correr de alumínio Linha Gold com vãos de 5 metros voltados para a mata, com vidros laminados acústicos e trilho embutido no piso.', image: IMG.min, highlight: 'Vãos Panorâmicos' },
      { title: 'Residência de Mata - San Fernando (Cotia)', region: 'San Fernando - Cotia', description: 'Janelas maxim-ar e de correr com dupla vedação em EPDM para eliminar a condensação típica de terrenos cercados por vegetação úmida.', image: IMG.villa, highlight: 'Anti-Umidade' },
      { title: 'Sobrado Contemporâneo - Caucaia do Alto (Cotia)', region: 'Caucaia do Alto - Cotia', description: 'Fachada com pele de vidro e persianas motorizadas integradas, garantindo privacidade e controle solar em condomínio arborizado.', image: IMG.facade, highlight: 'Pele de Vidro' },
    ],
    testimonials: [
      { author: 'Fernanda Ribeiro', role: 'Moradora de condomínio na Granja Viana, Cotia', text: 'Nossa casa fica cercada de mata e sempre tivemos problema de umidade nas janelas antigas. As esquadrias da Serra-Ferro acabaram com a condensação e a instalação foi limpa e no prazo.' },
      { author: 'Arq. Paulo Sérgio', role: 'Arquiteto de residências em Cotia', text: 'Especifico a Serra-Ferro para as casas que projeto em Cotia. Os vãos grandes voltados para o verde ficaram com perfis minimalistas e vedação perfeita contra a chuva da região.' },
    ],
    faqs: [
      { question: 'Vocês atendem condomínios fechados em Cotia e na Granja Viana?', answer: 'Sim. Atendemos os principais condomínios de Cotia, incluindo Granja Viana, San Fernando, Vale dos Sonhos e Caucaia do Alto. Fazemos a medição técnica no local, respeitamos as regras de acesso e horário de obra do condomínio e entregamos com cronograma definido em contrato.' },
      { question: 'Como as esquadrias resistem à umidade da mata em Cotia?', answer: 'Utilizamos borrachas de dupla vedação em EPDM, escovas de alta densidade e drenos usinados que impedem infiltração e reduzem a condensação comum em terrenos arborizados e úmidos de Cotia. Também indicamos vidros duplos quando há grande diferença de temperatura entre interior e exterior.' },
      { question: 'Qual o prazo de entrega para uma obra em Cotia?', answer: 'O prazo é definido no contrato conforme a complexidade e a linha escolhida, com cláusula de multa por atraso. Como Cotia fica próxima da nossa fábrica em Alphaville, a logística de medição e instalação é ágil.' },
      { question: 'Vocês fazem grandes vãos de vidro para casas voltadas ao paisagismo?', answer: 'Sim, é uma das nossas especialidades em Cotia. Projetamos portas de correr de grandes dimensões e cantos de vidro sem coluna, com perfis estruturais reforçados que suportam panos de vidro amplos mantendo total segurança e vedação.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-barueri-sp',
    city: 'Barueri',
    keyword: 'Esquadrias de Alumínio em Barueri SP',
    metaTitle: 'Esquadrias de Alumínio em Barueri SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Barueri SP sob medida, com fábrica própria em Alphaville. Projeto, instalação e vedação garantida para obras residenciais e corporativas. Orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM BARUERI SP',
      description: 'Somos fábrica de esquadrias de alumínio em Barueri, com sede em Alphaville Industrial. Atendemos residências de alto padrão e empreendimentos corporativos com medição rápida e instalação por equipe própria.',
      highlights: ['Fábrica própria em Alphaville, Barueri', 'Atendimento rápido em toda a cidade', 'Alto padrão residencial e corporativo', 'Prazo garantido em contrato'],
    },
    localIntro: {
      tag: 'FÁBRICA LOCAL EM BARUERI',
      title: 'Fábrica de Esquadrias de Alumínio em Barueri e Alphaville',
      paragraphs: [
        'Barueri reúne alguns dos endereços mais valorizados da Grande São Paulo, de Alphaville e Tamboré aos polos corporativos ao longo da Castello Branco. Com a nossa fábrica instalada na Alameda Rio Negro, em Alphaville Industrial, estamos a poucos minutos da sua obra, o que garante medição ágil, logística eficiente e suporte técnico presencial sempre que necessário.',
        'Executamos desde esquadrias residenciais de mansões e apartamentos de alto padrão até fachadas e caixilhos de torres comerciais. Cada projeto recebe engenharia dedicada, perfis de alumínio de primeira linha e instalação limpa e pontual, respeitando o cronograma físico das construtoras e a rotina dos condomínios da região.',
      ],
      bullets: ['Sede na Al. Rio Negro, Alphaville Industrial', 'Obras em Alphaville, Tamboré e centro', 'Soluções residenciais e corporativas', 'Faturamento direto de fábrica'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Barueri SP: Serviços de Alto Padrão',
      servicesSubtitle: 'Da residência de condomínio à torre corporativa, fabricamos e instalamos esquadrias de alumínio sob medida em Barueri com a agilidade de quem tem fábrica própria na cidade.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Obras em Barueri',
      linesSubtitle: 'Escolha a linha ideal para o padrão da sua obra em Barueri, de perfis minimalistas para arquitetura contemporânea a linhas robustas para grandes vãos.',
      casesTitle: 'Projetos de Esquadrias de Alumínio Entregues em Barueri e Alphaville',
      casesSubtitle: 'Obras de alto padrão executadas em condomínios e empreendimentos de Barueri com esquadro perfeito e entrega pontual.',
      testimonialsTitle: 'Quem Contratou Esquadrias de Alumínio em Barueri Aprova',
      testimonialsSubtitle: 'Clientes e arquitetos de Barueri e Alphaville comentam a experiência com a Serra-Ferro.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Barueri',
      faqSubtitle: 'Respostas para quem vai executar esquadrias em Barueri, Alphaville e Tamboré.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Barueri SP',
      contactSubtitle: 'Estamos na sua cidade, em Alphaville. Fale com o comercial técnico no WhatsApp e agende a medição da sua obra em Barueri.',
    },
    cases: [
      { title: 'Mansão Contemporânea - Alphaville (Barueri)', region: 'Alphaville - Barueri', description: 'Esquadrias Linha Gold com pintura preta fosca e porta pivotante de alumínio de 6 metros no hall de entrada.', image: IMG.house, highlight: 'Porta Monumental' },
      { title: 'Apartamento de Luxo - Tamboré (Barueri)', region: 'Tamboré - Barueri', description: 'Janelas acústicas com persiana motorizada integrada, garantindo silêncio e blackout nos dormitórios em torre residencial.', image: IMG.esq, highlight: 'Acústica + Blackout' },
      { title: 'Sede Corporativa - Alphaville Industrial (Barueri)', region: 'Alphaville Industrial - Barueri', description: 'Fachada em pele de vidro com controle solar, reduzindo o ganho térmico e o consumo de ar condicionado do edifício.', image: IMG.facade, highlight: 'Controle Térmico' },
    ],
    testimonials: [
      { author: 'Ricardo Fontes', role: 'Proprietário em Alphaville, Barueri', text: 'Como a fábrica é aqui em Alphaville mesmo, tudo foi muito rápido: mediram, fabricaram e instalaram sem atraso. A porta pivotante ficou impecável.' },
      { author: 'Eng. Tatiana Lopes', role: 'Construtora de alto padrão em Barueri', text: 'Trabalhar com um fornecedor sediado em Barueri fez diferença no cronograma. Documentação certa, NF e instalação limpa nos apartamentos.' },
    ],
    faqs: [
      { question: 'A fábrica da Serra-Ferro fica em Barueri?', answer: 'Sim. Nossa sede operacional e comercial fica na Alameda Rio Negro, 229, em Alphaville Industrial, Barueri. Isso nos dá agilidade máxima de medição, fabricação e instalação para qualquer obra na cidade.' },
      { question: 'Vocês atendem tanto residências quanto obras corporativas em Barueri?', answer: 'Sim. Executamos esquadrias residenciais de alto padrão em Alphaville e Tamboré e também fachadas e caixilhos de edifícios corporativos, com projeto executivo e faturamento direto para construtoras.' },
      { question: 'Qual a vantagem de contratar uma fábrica local em Barueri?', answer: 'Além do frete e da logística reduzidos, o suporte técnico é presencial e rápido. Conseguimos fazer visitas de compatibilização em obra com facilidade e garantir prazos rigorosos em contrato.' },
      { question: 'Vocês fornecem nota fiscal e contrato para obras em Barueri?', answer: 'Sempre. Emitimos contrato de prestação de serviços e nota fiscal de faturamento integral, com cronograma físico-financeiro e cláusula de multa por atraso.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-santana-de-parnaiba-sp',
    city: 'Santana de Parnaíba',
    keyword: 'Esquadrias de Alumínio em Santana de Parnaíba SP',
    metaTitle: 'Esquadrias de Alumínio em Santana de Parnaíba SP | Portas e Janelas | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Santana de Parnaíba SP sob medida para os condomínios de Alphaville e casarões da região. Vedação contra vento e chuva com entrega em contrato.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM SANTANA DE PARNAÍBA SP',
      description: 'Fabricamos esquadrias de alumínio sob medida em Santana de Parnaíba, dos residenciais de Alphaville aos casarões de condomínio, com perfis reforçados para os ventos das áreas mais altas.',
      highlights: ['Reforço estrutural para vento', 'Condomínios de Alphaville Residencial', 'Grandes vãos para casarões', 'Instalação própria e pontual'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM SANTANA DE PARNAÍBA',
      title: 'Esquadrias de Alumínio em Santana de Parnaíba e Alphaville Residencial',
      paragraphs: [
        'Santana de Parnaíba abriga boa parte dos residenciais de Alphaville e diversos condomínios de luxo, muitos deles em áreas elevadas e abertas, sujeitas a rajadas de vento mais intensas. Dimensionamos os perfis e os vidros de cada esquadria para suportar essa pressão sem assovios ou vibrações, garantindo silêncio e segurança nas grandes aberturas dos casarões.',
        'Do centro histórico tombado às ruas dos condomínios contemporâneos, atendemos toda a cidade com medição no local e instalação por equipe própria. Entregamos alumínio de alto padrão com esquadro perfeito, vedação testada contra chuva com vento e acabamento à altura da arquitetura sofisticada da região.',
      ],
      bullets: ['Residenciais Alphaville e Tamboré', 'Cálculo de carga de vento para áreas altas', 'Grandes vãos e portas monumentais', 'Vedação testada contra chuva de vento'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Santana de Parnaíba SP: Alto Padrão',
      servicesSubtitle: 'Esquadrias de alumínio sob medida para casarões e residências de condomínio em Santana de Parnaíba, com reforço estrutural para os ventos das áreas mais altas.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Santana de Parnaíba',
      linesSubtitle: 'Selecione a linha certa para grandes vãos e fachadas expostas ao vento nos condomínios de Santana de Parnaíba.',
      casesTitle: 'Projetos de Esquadrias Entregues em Santana de Parnaíba',
      casesSubtitle: 'Obras de alto padrão executadas nos condomínios de Alphaville Residencial e região.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Santana de Parnaíba Recomenda',
      testimonialsSubtitle: 'Moradores dos condomínios de Santana de Parnaíba comentam a durabilidade e a vedação.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Santana de Parnaíba',
      faqSubtitle: 'Respostas técnicas para obras em Alphaville Residencial e no restante da cidade.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Santana de Parnaíba SP',
      contactSubtitle: 'Agende a medição do seu casarão ou residência em Santana de Parnaíba pelo WhatsApp.',
    },
    cases: [
      { title: 'Casarão de Condomínio - Alphaville (Santana de Parnaíba)', region: 'Alphaville - Santana de Parnaíba', description: 'Esquadrias Linha Gold com vãos de 7 metros e reforço estrutural para as rajadas de vento das áreas altas do condomínio.', image: IMG.villa, highlight: 'Reforço de Vento' },
      { title: 'Residência Alto Padrão - Tamboré (Santana de Parnaíba)', region: 'Tamboré - Santana de Parnaíba', description: 'Portas de correr minimalistas com trilho embutido integrando sala e área de lazer com vista panorâmica.', image: IMG.min, highlight: 'Integração Total' },
      { title: 'Sobrado no Centro Histórico (Santana de Parnaíba)', region: 'Centro Histórico - Santana de Parnaíba', description: 'Janelas de alumínio sob medida compatibilizadas com a fachada preservada, unindo estética clássica e vedação moderna.', image: IMG.esq, highlight: 'Retrofit Elegante' },
    ],
    testimonials: [
      { author: 'Marcelo Tavares', role: 'Morador de Alphaville, Santana de Parnaíba', text: 'Minha casa fica numa parte alta e o vento sempre fez as janelas antigas assoviarem. Depois da Serra-Ferro, silêncio total mesmo nas tempestades.' },
      { author: 'Arq. Beatriz Nunes', role: 'Arquiteta em Santana de Parnaíba', text: 'Precisão de esquadro e vedação impecável nos grandes vãos. A equipe entendeu o desafio do vento na região e entregou perfeito.' },
    ],
    faqs: [
      { question: 'As esquadrias aguentam os ventos fortes das áreas altas de Santana de Parnaíba?', answer: 'Sim. Fazemos o cálculo de carga de vento para cada vão e reforçamos os perfis com ligas de alta resistência mecânica. Isso elimina assovios, vibrações e infiltrações mesmo nas casas mais expostas dos condomínios elevados.' },
      { question: 'Vocês atendem os condomínios de Alphaville Residencial em Santana de Parnaíba?', answer: 'Sim, atendemos todos os residenciais de Alphaville, Tamboré e demais condomínios da cidade, com medição no local e respeito às normas de acesso e horário de obra.' },
      { question: 'É possível trocar esquadrias mantendo a fachada de um imóvel no centro histórico?', answer: 'Sim. Fazemos retrofit compatibilizando as novas esquadrias de alumínio com a estética preservada da fachada, unindo o visual original à vedação e ao desempenho modernos.' },
      { question: 'Qual o prazo de instalação em Santana de Parnaíba?', answer: 'Definido em contrato com multa por atraso. A cidade fica próxima da nossa fábrica em Alphaville, o que agiliza a medição e a instalação.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-taboao-da-serra-sp',
    city: 'Taboão da Serra',
    keyword: 'Esquadrias de Alumínio em Taboão da Serra SP',
    metaTitle: 'Esquadrias de Alumínio em Taboão da Serra SP | Portas e Janelas | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Taboão da Serra SP sob medida para sobrados e reformas. Isolamento acústico contra o ruído urbano e vedação garantida. Peça seu orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM TABOÃO DA SERRA SP',
      description: 'Esquadrias de alumínio sob medida em Taboão da Serra para sobrados, apartamentos e reformas, com foco em isolamento acústico contra o ruído do trânsito e vedação total contra chuva.',
      highlights: ['Isolamento acústico urbano', 'Ideal para reforma e retrofit', 'Sobrados e apartamentos', 'Vedação total contra chuva'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM TABOÃO DA SERRA',
      title: 'Esquadrias de Alumínio em Taboão da Serra com Isolamento Acústico',
      paragraphs: [
        'Colada à capital, na divisa com o Campo Limpo, Taboão da Serra é uma cidade densa e movimentada, onde o ruído do trânsito e da vizinhança é um desafio constante. Nossas esquadrias de alumínio com vidros laminados acústicos reduzem drasticamente o barulho externo, transformando sobrados e apartamentos em ambientes silenciosos e confortáveis.',
        'Somos especialistas em reforma e substituição de esquadrias antigas em Taboão da Serra e no Pirajuçara, com medição precisa que compatibiliza os novos caixilhos aos vãos existentes. A instalação é limpa, rápida e cuidadosa, preservando o acabamento da obra já pronta.',
      ],
      bullets: ['Vidros acústicos contra ruído de trânsito', 'Especialistas em troca de esquadrias', 'Atendimento no Pirajuçara e centro', 'Instalação limpa em obra pronta'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Taboão da Serra SP: Serviços Sob Medida',
      servicesSubtitle: 'Esquadrias de alumínio para reformas e obras novas em Taboão da Serra, com isolamento acústico e vedação pensados para o dia a dia urbano da cidade.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Taboão da Serra',
      linesSubtitle: 'Do custo-benefício da Linha Suprema aos perfis acústicos reforçados, escolha a melhor opção para o seu imóvel em Taboão da Serra.',
      casesTitle: 'Projetos de Esquadrias Entregues em Taboão da Serra',
      casesSubtitle: 'Reformas e obras residenciais executadas em Taboão da Serra com foco em silêncio e vedação.',
      testimonialsTitle: 'Quem Trocou as Esquadrias em Taboão da Serra Aprova',
      testimonialsSubtitle: 'Moradores de Taboão da Serra comentam a diferença no conforto acústico.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Taboão da Serra',
      faqSubtitle: 'Respostas para quem vai reformar ou instalar esquadrias em Taboão da Serra.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Taboão da Serra SP',
      contactSubtitle: 'Agende a medição do seu sobrado ou apartamento em Taboão da Serra pelo WhatsApp.',
    },
    cases: [
      { title: 'Reforma de Sobrado - Jardim Henriqueta (Taboão da Serra)', region: 'Jardim Henriqueta - Taboão da Serra', description: 'Substituição completa das esquadrias por janelas de correr com vidro laminado acústico, reduzindo o ruído da avenida.', image: IMG.esq, highlight: 'Conforto Acústico' },
      { title: 'Apartamento - Pirajuçara (Taboão da Serra)', region: 'Pirajuçara - Taboão da Serra', description: 'Janelas maxim-ar e de correr com vedação de dupla borracha, eliminando entrada de água e ruído em prédio movimentado.', image: IMG.min, highlight: 'Vedação Total' },
      { title: 'Residência - Parque Assunção (Taboão da Serra)', region: 'Parque Assunção - Taboão da Serra', description: 'Porta de correr de alumínio integrando sala e quintal, com trilho reforçado e fechadura de alta segurança.', image: IMG.house, highlight: 'Integração Sala-Quintal' },
    ],
    testimonials: [
      { author: 'Sandra Prado', role: 'Moradora do Jardim Henriqueta, Taboão da Serra', text: 'Moro perto de uma avenida e o barulho era insuportável. Depois das janelas acústicas da Serra-Ferro, o silêncio dentro de casa é impressionante.' },
      { author: 'Wagner Lima', role: 'Proprietário de sobrado em Taboão da Serra', text: 'Fizeram a troca de todas as esquadrias sem sujeira e no prazo combinado. Acabou a infiltração que eu tinha nas janelas antigas.' },
    ],
    faqs: [
      { question: 'As esquadrias reduzem o barulho da rua em Taboão da Serra?', answer: 'Sim. Com vidros laminados acústicos e perfis de bom encaixe mecânico, reduzimos significativamente o ruído de trânsito e da vizinhança, muito comum nas áreas densas de Taboão da Serra.' },
      { question: 'Vocês fazem só a troca das esquadrias antigas?', answer: 'Sim. Somos especialistas em reforma e retrofit. Medimos os vãos existentes, fabricamos as novas esquadrias sob medida e fazemos a substituição com instalação limpa, sem danificar o acabamento pronto.' },
      { question: 'Atendem apartamentos além de casas em Taboão da Serra?', answer: 'Sim, atendemos casas, sobrados e apartamentos. Para prédios, respeitamos as regras do condomínio de horário e uso de elevador de serviço na logística de instalação.' },
      { question: 'Como funciona o orçamento em Taboão da Serra?', answer: 'Você fala com o nosso comercial pelo WhatsApp, enviamos uma estimativa inicial e agendamos a medição gratuita no local para o orçamento final detalhado, com prazo garantido em contrato.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-guarulhos-sp',
    city: 'Guarulhos',
    keyword: 'Esquadrias de Alumínio em Guarulhos SP',
    metaTitle: 'Esquadrias de Alumínio em Guarulhos SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Guarulhos SP sob medida com isolamento acústico reforçado contra o ruído do aeroporto e da indústria. Vedação garantida e instalação própria. Orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM GUARULHOS SP',
      description: 'Esquadrias de alumínio sob medida em Guarulhos com isolamento acústico reforçado para bairros próximos ao Aeroporto de Cumbica e às zonas industriais, garantindo silêncio dentro de casa.',
      highlights: ['Acústica reforçada anti-ruído', 'Ideal para regiões do aeroporto', 'Vedação contra poeira industrial', 'Entrega com prazo em contrato'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM GUARULHOS',
      title: 'Esquadrias de Alumínio em Guarulhos com Alto Isolamento Acústico',
      paragraphs: [
        'Guarulhos convive com uma combinação única de desafios: o ruído aeronáutico do Aeroporto de Cumbica, o tráfego pesado da Dutra e a poeira das áreas industriais. Nossas esquadrias de alumínio com vidros laminados ou duplos atacam exatamente esses pontos, atenuando o som das aeronaves e do trânsito e vedando a entrada de poeira fina.',
        'Atendemos bairros como Maia, Bosque Maia, Vila Galvão e Jardim Zaira com medição no local e instalação por equipe própria. Cada projeto é dimensionado para o conforto do dia a dia guarulhense, unindo desempenho acústico, estanqueidade e acabamento de alto padrão.',
      ],
      bullets: ['Vidros duplos e laminados anti-ruído', 'Cobertura no Maia, Bosque Maia e Vila Galvão', 'Vedação contra poeira industrial', 'Instalação própria e pontual'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Guarulhos SP: Serviços de Alto Padrão',
      servicesSubtitle: 'Esquadrias de alumínio sob medida em Guarulhos com foco em isolamento acústico contra o ruído do aeroporto e da indústria, além de vedação total contra poeira e chuva.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Guarulhos',
      linesSubtitle: 'Compare as linhas com vidros acústicos e duplos ideais para o ruído aeronáutico e urbano de Guarulhos.',
      casesTitle: 'Projetos de Esquadrias Entregues em Guarulhos',
      casesSubtitle: 'Obras residenciais em Guarulhos com isolamento acústico reforçado e vedação impecável.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Guarulhos Recomenda',
      testimonialsSubtitle: 'Moradores de Guarulhos comentam o ganho de silêncio dentro de casa.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Guarulhos',
      faqSubtitle: 'Respostas para quem quer reduzir o ruído do aeroporto e da cidade em Guarulhos.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Guarulhos SP',
      contactSubtitle: 'Agende a medição da sua casa ou apartamento em Guarulhos pelo WhatsApp.',
    },
    cases: [
      { title: 'Casa próxima a Cumbica - Jardim Aeroporto (Guarulhos)', region: 'Jardim Aeroporto - Guarulhos', description: 'Janelas com vidro duplo acústico que reduziram drasticamente o ruído das aeronaves nos dormitórios.', image: IMG.esq, highlight: 'Anti-Ruído Aéreo' },
      { title: 'Apartamento - Bosque Maia (Guarulhos)', region: 'Bosque Maia - Guarulhos', description: 'Esquadrias de correr com vedação de dupla borracha e persiana integrada, garantindo silêncio e blackout.', image: IMG.min, highlight: 'Acústica + Blackout' },
      { title: 'Residência - Vila Galvão (Guarulhos)', region: 'Vila Galvão - Guarulhos', description: 'Portas e janelas de alumínio sob medida com vedação reforçada contra poeira e chuva, com acabamento premium.', image: IMG.villa, highlight: 'Vedação Reforçada' },
    ],
    testimonials: [
      { author: 'Cláudia Ferraz', role: 'Moradora do Jardim Aeroporto, Guarulhos', text: 'Morar perto de Cumbica era sinônimo de barulho de avião o tempo todo. As janelas acústicas da Serra-Ferro mudaram completamente o sono da família.' },
      { author: 'Douglas Ramos', role: 'Proprietário em Vila Galvão, Guarulhos', text: 'Além do barulho, a poeira entrava por tudo. As novas esquadrias vedaram perfeitamente e o acabamento ficou de altíssimo nível.' },
    ],
    faqs: [
      { question: 'As esquadrias reduzem o barulho de avião em Guarulhos?', answer: 'Sim. Para bairros próximos ao Aeroporto de Cumbica, usamos vidros laminados acústicos ou vidros duplos com câmara de ar, que atenuam de forma expressiva o ruído das aeronaves e do tráfego da Dutra.' },
      { question: 'As esquadrias ajudam contra a poeira das áreas industriais?', answer: 'Sim. Com borrachas de dupla vedação em EPDM e escovas de alta densidade, impedimos a entrada de poeira fina, comum nas regiões industriais de Guarulhos, além de bloquear água e vento.' },
      { question: 'Vocês atendem toda a cidade de Guarulhos?', answer: 'Sim, atendemos os principais bairros, como Maia, Bosque Maia, Vila Galvão, Jardim Zaira e região central, com medição no local e instalação por equipe própria.' },
      { question: 'Qual o prazo de entrega para Guarulhos?', answer: 'O prazo é definido em contrato com cláusula de multa por atraso, conforme a complexidade do projeto e a linha de esquadrias escolhida.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-alphaville-sp',
    city: 'Alphaville',
    keyword: 'Esquadrias de Alumínio em Alphaville SP',
    metaTitle: 'Esquadrias de Alumínio em Alphaville SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Alphaville SP sob medida para residências de altíssimo padrão. Fábrica própria na região, grandes vãos e vedação garantida. Peça seu orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM ALPHAVILLE SP',
      description: 'Fábrica de esquadrias de alumínio em Alphaville, com sede na própria região. Projetamos grandes vãos e perfis minimalistas para a arquitetura contemporânea dos condomínios de altíssimo padrão.',
      highlights: ['Fábrica na própria Alphaville', 'Perfis minimalistas de alto padrão', 'Grandes vãos e pele de vidro', 'Instalação própria e pontual'],
    },
    localIntro: {
      tag: 'FÁBRICA LOCAL EM ALPHAVILLE',
      title: 'Esquadrias de Alumínio em Alphaville: Alto Padrão com Fábrica Local',
      paragraphs: [
        'Alphaville é sinônimo de arquitetura contemporânea e residências de altíssimo padrão, com projetos que pedem grandes panos de vidro, perfis esbeltos e integração total entre interior e área de lazer. Com a nossa fábrica instalada na própria região, entregamos esquadrias minimalistas de alumínio com esquadro milimétrico e a sofisticação que os condomínios de Alphaville exigem.',
        'Trabalhamos lado a lado com os arquitetos e construtoras que atuam nos residenciais de Alphaville, cuidando da compatibilização de trilhos embutidos, contramarcos e vedação desde a planta. O resultado são caixilhos que quase desaparecem, valorizando o design e garantindo desempenho acústico e estanqueidade impecáveis.',
      ],
      bullets: ['Sede na região de Alphaville', 'Perfis slim para arquitetura contemporânea', 'Trilhos embutidos e cantos de vidro', 'Parceria com arquitetos e construtoras'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Alphaville SP: Alto Padrão Sob Medida',
      servicesSubtitle: 'Esquadrias minimalistas de alumínio para as residências de altíssimo padrão de Alphaville, com grandes vãos, pele de vidro e integração total.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Alphaville',
      linesSubtitle: 'Da linha minimalista slim à Linha Gold para vãos gigantes, escolha o padrão ideal para a sua obra em Alphaville.',
      casesTitle: 'Projetos de Esquadrias Entregues em Alphaville',
      casesSubtitle: 'Residências de altíssimo padrão executadas nos condomínios de Alphaville com perfis minimalistas.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Alphaville Recomenda',
      testimonialsSubtitle: 'Moradores e arquitetos de Alphaville comentam o design e a precisão das esquadrias.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Alphaville',
      faqSubtitle: 'Respostas técnicas para obras de alto padrão em Alphaville.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Alphaville SP',
      contactSubtitle: 'Estamos na região de Alphaville. Fale com o comercial técnico no WhatsApp e agende a medição.',
    },
    cases: [
      { title: 'Residência Contemporânea - Alphaville', region: 'Residencial - Alphaville', description: 'Portas de correr minimalistas com perfis slim e trilho embutido, integrando sala, varanda e piscina em um único plano de vidro.', image: IMG.min, highlight: 'Perfis Slim' },
      { title: 'Mansão de Vidro - Alphaville', region: 'Alphaville', description: 'Pele de vidro com controle solar e canto de vidro sem coluna estrutural, maximizando a vista e a luz natural.', image: IMG.facade, highlight: 'Canto de Vidro' },
      { title: 'Casa de Alto Padrão - Alphaville', region: 'Alphaville', description: 'Janelas integradas com persianas motorizadas e vidros acústicos, unindo automação, privacidade e silêncio.', image: IMG.villa, highlight: 'Automação Integrada' },
    ],
    testimonials: [
      { author: 'Henrique Salles', role: 'Morador de Alphaville', text: 'Queria perfis o mais finos possível para não atrapalhar a vista, e a Serra-Ferro entregou exatamente isso. O caixilho quase some no vidro.' },
      { author: 'Arq. Camila Prado', role: 'Arquiteta em Alphaville', text: 'Compatibilização perfeita desde a planta. Trilhos embutidos, esquadro milimétrico e uma instalação impecável no condomínio.' },
    ],
    faqs: [
      { question: 'Vocês fazem perfis minimalistas para as casas de Alphaville?', answer: 'Sim. Nossa Linha Minimalista (Slim) usa perfis de alumínio ultrafinos que maximizam o vidro e a luz, ideais para a arquitetura contemporânea de Alphaville, mantendo total estabilidade estrutural.' },
      { question: 'A Serra-Ferro trabalha junto com o arquiteto do meu projeto em Alphaville?', answer: 'Sim. Temos canal B2B para arquitetos e construtoras. Respeitamos o desenho conceitual, damos suporte técnico de vãos e trilhos e fornecemos amostras físicas de perfis e cores.' },
      { question: 'Vocês fazem grandes vãos e cantos de vidro sem coluna em Alphaville?', answer: 'Sim, é uma especialidade nossa. Projetamos cantos de vidro sem coluna e portas de correr jumbo com engenharia dedicada de reforço estrutural, garantindo segurança e leveza visual.' },
      { question: 'A fábrica fica perto de Alphaville?', answer: 'Sim, nossa sede fica em Alphaville Industrial, Barueri, na própria região, o que garante agilidade total de medição, fabricação e instalação.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-osasco-sp',
    city: 'Osasco',
    keyword: 'Esquadrias de Alumínio em Osasco SP',
    metaTitle: 'Esquadrias de Alumínio em Osasco SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Osasco SP sob medida para apartamentos, casas e retrofit predial. Isolamento acústico, vedação e instalação própria. Peça seu orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM OSASCO SP',
      description: 'Esquadrias de alumínio sob medida em Osasco para apartamentos, casas e edifícios em retrofit, com isolamento acústico para a cidade verticalizada e vedação garantida contra chuva e vento.',
      highlights: ['Ideal para apartamentos e torres', 'Isolamento acústico urbano', 'Retrofit de fachadas prediais', 'Vedação garantida em contrato'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM OSASCO',
      title: 'Esquadrias de Alumínio em Osasco para Apartamentos e Retrofit',
      paragraphs: [
        'Uma das cidades mais verticalizadas e movimentadas da Grande São Paulo, Osasco reúne torres residenciais, edifícios comerciais e bairros densos como Bela Vista, Vila Yara e Km 18. Nossas esquadrias de alumínio entregam isolamento acústico contra o intenso ruído urbano e vedação segura mesmo nos andares mais altos, expostos ao vento.',
        'Somos referência em retrofit de fachadas e substituição de esquadrias em prédios de Osasco, com medição precisa e logística que respeita a rotina do condomínio. Da unidade residencial ao edifício corporativo, entregamos alumínio de alto padrão com desempenho técnico e acabamento impecável.',
      ],
      bullets: ['Esquadrias para torres e apartamentos', 'Retrofit de fachadas prediais', 'Cobertura na Bela Vista, Vila Yara e Km 18', 'Vedação segura em andares altos'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Osasco SP: Serviços de Alto Padrão',
      servicesSubtitle: 'Esquadrias de alumínio sob medida para apartamentos, casas e retrofit predial em Osasco, com isolamento acústico e vedação para a cidade verticalizada.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Osasco',
      linesSubtitle: 'Escolha a linha ideal para apartamentos e torres de Osasco, com atenção especial à vedação em andares altos.',
      casesTitle: 'Projetos de Esquadrias Entregues em Osasco',
      casesSubtitle: 'Obras residenciais e prediais executadas em Osasco com isolamento acústico e retrofit de fachada.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Osasco Aprova',
      testimonialsSubtitle: 'Moradores e síndicos de Osasco comentam a vedação e o conforto acústico.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Osasco',
      faqSubtitle: 'Respostas para obras residenciais e prediais em Osasco.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Osasco SP',
      contactSubtitle: 'Agende a medição do seu apartamento ou edifício em Osasco pelo WhatsApp.',
    },
    cases: [
      { title: 'Apartamento Alto - Bela Vista (Osasco)', region: 'Bela Vista - Osasco', description: 'Janelas de correr com vidro acústico e vedação reforçada para andar alto exposto ao vento e ao ruído da cidade.', image: IMG.esq, highlight: 'Vedação em Altura' },
      { title: 'Retrofit de Fachada - Centro (Osasco)', region: 'Centro - Osasco', description: 'Substituição das esquadrias de um edifício com caixilhos de alumínio novos, padronizando a fachada e melhorando o desempenho térmico.', image: IMG.facade, highlight: 'Retrofit Predial' },
      { title: 'Casa - Vila Yara (Osasco)', region: 'Vila Yara - Osasco', description: 'Portas e janelas de alumínio sob medida com persiana integrada, unindo privacidade e isolamento em bairro movimentado.', image: IMG.min, highlight: 'Persiana Integrada' },
    ],
    testimonials: [
      { author: 'Patrícia Gomes', role: 'Moradora da Bela Vista, Osasco', text: 'Meu apartamento é num andar alto e o vento fazia um barulho horrível nas janelas. Agora é silêncio total e nunca mais entrou água.' },
      { author: 'Eng. Roberto Dias', role: 'Síndico de edifício no Centro de Osasco', text: 'Fizeram o retrofit das esquadrias do prédio com organização e cronograma. A fachada ficou padronizada e os moradores elogiaram o conforto.' },
    ],
    faqs: [
      { question: 'Vocês fazem retrofit de esquadrias em prédios de Osasco?', answer: 'Sim. Somos especialistas em substituir esquadrias antigas de edifícios residenciais e comerciais em Osasco, padronizando a fachada e melhorando o desempenho acústico e térmico, com logística que respeita o condomínio.' },
      { question: 'As esquadrias vedam bem em apartamentos de andar alto?', answer: 'Sim. Dimensionamos os perfis para a maior pressão de vento dos andares altos de Osasco e usamos dupla vedação e drenos usinados para evitar assovios e infiltrações.' },
      { question: 'Atendem tanto casas quanto apartamentos em Osasco?', answer: 'Sim, atendemos casas, apartamentos e edifícios inteiros, dos bairros residenciais como Vila Yara às torres do centro e da Bela Vista.' },
      { question: 'Como é feito o orçamento em Osasco?', answer: 'Fale com o comercial pelo WhatsApp para uma estimativa inicial; em seguida agendamos a medição gratuita no local para o orçamento final com prazo garantido em contrato.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-embu-das-artes-sp',
    city: 'Embu das Artes',
    keyword: 'Esquadrias de Alumínio em Embu das Artes SP',
    metaTitle: 'Esquadrias de Alumínio em Embu das Artes SP | Portas e Janelas | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Embu das Artes SP sob medida para casas de campo e residências de charme. Design, vedação e instalação própria. Peça seu orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM EMBU DAS ARTES SP',
      description: 'Esquadrias de alumínio sob medida em Embu das Artes, unindo o charme artístico da cidade ao desempenho técnico: grandes vãos para o verde, vedação contra a umidade e acabamento sofisticado.',
      highlights: ['Design que valoriza a arquitetura', 'Vedação para clima ameno e úmido', 'Grandes vãos para casas de campo', 'Instalação própria e pontual'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM EMBU DAS ARTES',
      title: 'Esquadrias de Alumínio em Embu das Artes com Design e Desempenho',
      paragraphs: [
        'Conhecida pela vocação artística e pelo centro histórico do Largo dos Jesuítas, Embu das Artes reúne casas de campo, ateliês e residências de charme em meio a muito verde e clima ameno e úmido. Projetamos esquadrias de alumínio que respeitam a estética da cidade e, ao mesmo tempo, entregam vedação eficiente contra a umidade e a chuva da região serrana.',
        'Atendemos condomínios e casas em bairros como Jardim dos Manacás e Pinheirinho com medição no local e instalação por equipe própria. Dos grandes vãos voltados ao jardim às janelas de ateliês e varandas, unimos design, luz natural e o desempenho técnico do alumínio de alto padrão.',
      ],
      bullets: ['Design alinhado ao charme da cidade', 'Vedação para clima úmido e serrano', 'Grandes vãos voltados ao jardim', 'Cobertura em Jardim dos Manacás e região'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Embu das Artes SP: Sob Medida',
      servicesSubtitle: 'Esquadrias de alumínio sob medida para casas de campo e residências de charme em Embu das Artes, unindo design, luz natural e vedação para o clima úmido.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Embu das Artes',
      linesSubtitle: 'Escolha entre perfis minimalistas e linhas robustas para os grandes vãos e o clima ameno de Embu das Artes.',
      casesTitle: 'Projetos de Esquadrias Entregues em Embu das Artes',
      casesSubtitle: 'Casas de campo e residências de charme executadas em Embu das Artes com design e vedação impecáveis.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Embu das Artes Recomenda',
      testimonialsSubtitle: 'Moradores de Embu das Artes comentam o design e o conforto das esquadrias.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Embu das Artes',
      faqSubtitle: 'Respostas técnicas para casas e condomínios em Embu das Artes.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Embu das Artes SP',
      contactSubtitle: 'Agende a medição da sua casa em Embu das Artes pelo WhatsApp.',
    },
    cases: [
      { title: 'Casa de Campo - Jardim dos Manacás (Embu das Artes)', region: 'Jardim dos Manacás - Embu das Artes', description: 'Portas de correr amplas voltadas ao jardim, com vidros laminados e vedação reforçada contra a umidade da região.', image: IMG.villa, highlight: 'Vãos para o Verde' },
      { title: 'Ateliê Residencial - Centro Histórico (Embu das Artes)', region: 'Centro Histórico - Embu das Artes', description: 'Janelas de alumínio sob medida com máxima entrada de luz natural para o espaço de criação, com design discreto.', image: IMG.min, highlight: 'Luz Natural' },
      { title: 'Residência de Charme - Pinheirinho (Embu das Artes)', region: 'Pinheirinho - Embu das Artes', description: 'Fachada com esquadrias integradas e persianas, unindo estética contemporânea e proteção contra chuva e sol.', image: IMG.facade, highlight: 'Design Integrado' },
    ],
    testimonials: [
      { author: 'Luciana Amaral', role: 'Moradora do Jardim dos Manacás, Embu das Artes', text: 'Queria janelas grandes para aproveitar o verde sem abrir mão da vedação. Ficou lindo e nunca mais tivemos umidade nas esquadrias.' },
      { author: 'Rogério Bianchi', role: 'Artista plástico em Embu das Artes', text: 'Precisava de muita luz natural no ateliê. As esquadrias slim entregaram exatamente isso, com um acabamento que combinou com a casa.' },
    ],
    faqs: [
      { question: 'Vocês fazem grandes vãos para casas de campo em Embu das Artes?', answer: 'Sim. Projetamos portas de correr amplas e cantos de vidro voltados ao jardim, com perfis estruturais reforçados que suportam grandes panos de vidro mantendo vedação e segurança.' },
      { question: 'As esquadrias resistem à umidade e ao clima serrano de Embu das Artes?', answer: 'Sim. Usamos dupla vedação em EPDM, drenos usinados e, quando necessário, vidros duplos para evitar infiltração e condensação típicas do clima úmido e ameno da cidade.' },
      { question: 'O design das esquadrias combina com casas de estilo mais artístico?', answer: 'Sim. Oferecemos desde perfis minimalistas discretos até linhas mais marcantes, com diversas cores de pintura eletrostática, para harmonizar com a arquitetura de charme de Embu das Artes.' },
      { question: 'Vocês atendem os condomínios de Embu das Artes?', answer: 'Sim, atendemos casas e condomínios da cidade com medição no local e instalação por equipe própria, respeitando as regras de acesso e horário de obra.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-itapevi-sp',
    city: 'Itapevi',
    keyword: 'Esquadrias de Alumínio em Itapevi SP',
    metaTitle: 'Esquadrias de Alumínio em Itapevi SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Itapevi SP sob medida para obras novas e condomínios. Projeto, instalação e vedação garantida em contrato. Peça seu orçamento de fábrica no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM ITAPEVI SP',
      description: 'Esquadrias de alumínio sob medida em Itapevi para obras novas e condomínios em crescimento, com projeto desde a planta, vedação garantida e instalação por equipe própria.',
      highlights: ['Ideal para obra nova', 'Projeto desde a planta', 'Vedação garantida em contrato', 'Instalação própria e pontual'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM ITAPEVI',
      title: 'Esquadrias de Alumínio em Itapevi para Obra Nova e Condomínios',
      paragraphs: [
        'Itapevi vive um forte crescimento imobiliário, com novos condomínios residenciais e casas em construção por bairros como Cohab, Jardim Briquet e Vila Nova Itapevi. Entrar na fase de planta com o fornecedor certo evita retrabalho: projetamos as esquadrias junto com a obra, garantindo esquadro, contramarcos corretos e vedação desde o início.',
        'Fabricamos e instalamos esquadrias de alumínio de alto padrão em Itapevi com medição precisa e cronograma definido em contrato. Da casa em condomínio às obras novas, entregamos caixilhos com desempenho acústico, estanqueidade e acabamento que valorizam o imóvel novo.',
      ],
      bullets: ['Especialistas em obra nova', 'Compatibilização de contramarco na planta', 'Cobertura na Cohab, Jardim Briquet e região', 'Cronograma físico em contrato'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Itapevi SP: Serviços Sob Medida',
      servicesSubtitle: 'Esquadrias de alumínio sob medida para obras novas e condomínios de Itapevi, com projeto desde a planta e vedação garantida.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Itapevi',
      linesSubtitle: 'Compare as linhas ideais para casas novas e condomínios de Itapevi e escolha o melhor custo-benefício.',
      casesTitle: 'Projetos de Esquadrias Entregues em Itapevi',
      casesSubtitle: 'Obras novas e residências de condomínio executadas em Itapevi com esquadro perfeito.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Itapevi Recomenda',
      testimonialsSubtitle: 'Moradores e construtores de Itapevi comentam a pontualidade e a qualidade.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Itapevi',
      faqSubtitle: 'Respostas para obras novas e condomínios em Itapevi.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Itapevi SP',
      contactSubtitle: 'Agende a medição da sua obra em Itapevi pelo WhatsApp.',
    },
    cases: [
      { title: 'Casa Nova em Condomínio - Jardim Briquet (Itapevi)', region: 'Jardim Briquet - Itapevi', description: 'Esquadrias projetadas desde a planta, com portas de correr integradas e contramarcos compatibilizados com a alvenaria.', image: IMG.house, highlight: 'Projeto na Planta' },
      { title: 'Residência - Cohab (Itapevi)', region: 'Cohab - Itapevi', description: 'Janelas de correr Linha Suprema com ótimo custo-benefício, vedação de dupla borracha e acabamento impecável.', image: IMG.esq, highlight: 'Custo-Benefício' },
      { title: 'Sobrado Contemporâneo - Vila Nova (Itapevi)', region: 'Vila Nova - Itapevi', description: 'Fachada com esquadrias integradas e persiana motorizada, garantindo privacidade e desempenho na obra nova.', image: IMG.min, highlight: 'Fachada Integrada' },
    ],
    testimonials: [
      { author: 'Anderson Melo', role: 'Proprietário de casa nova em Itapevi', text: 'Chamei a Serra-Ferro ainda na obra e fez toda a diferença. Os vãos saíram certinhos e a instalação foi no prazo combinado.' },
      { author: 'Eng. Priscila Santos', role: 'Construtora em Itapevi', text: 'Compatibilizaram os contramarcos com a nossa alvenaria e não tivemos retrabalho. Entrega pontual e documentação em ordem.' },
    ],
    faqs: [
      { question: 'Vale a pena chamar vocês ainda na fase de obra em Itapevi?', answer: 'Sim. O ideal é entrar na fase de planta ou alvenaria, para que os contramarcos e vãos saiam nas medidas certas, evitando retrabalho e garantindo esquadro e vedação perfeitos.' },
      { question: 'Vocês têm opções de bom custo-benefício para Itapevi?', answer: 'Sim. A Linha Suprema oferece a qualidade, a vedação e o acabamento da Serra-Ferro com excelente custo-benefício, ideal para vãos tradicionais de casas novas e condomínios.' },
      { question: 'Atendem os condomínios em construção de Itapevi?', answer: 'Sim, atendemos obras novas e condomínios da cidade, com medição no local, cronograma físico em contrato e instalação por equipe própria.' },
      { question: 'Qual o prazo de entrega em Itapevi?', answer: 'Definido no contrato conforme a complexidade e a linha escolhida, sempre com cláusula de multa por atraso para garantir a sua obra.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-cajamar-sp',
    city: 'Cajamar',
    keyword: 'Esquadrias de Alumínio em Cajamar SP',
    metaTitle: 'Esquadrias de Alumínio em Cajamar SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Cajamar SP sob medida para condomínios de alto padrão em relevo. Reforço para vento, vedação garantida e instalação própria. Orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM CAJAMAR SP',
      description: 'Esquadrias de alumínio sob medida em Cajamar para condomínios de alto padrão em áreas de relevo e altitude, com perfis reforçados para o vento e vedação total contra a chuva.',
      highlights: ['Reforço estrutural para vento', 'Condomínios de alto padrão', 'Vedação total contra chuva', 'Instalação própria e pontual'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM CAJAMAR',
      title: 'Esquadrias de Alumínio em Cajamar para Condomínios em Relevo',
      paragraphs: [
        'Cajamar cresceu como polo logístico e, ao mesmo tempo, abriga condomínios de alto padrão como a Reserva Santa Maria, muitos deles em áreas de relevo acentuado e altitude, onde o vento é mais forte. Dimensionamos cada esquadria para essa realidade, com perfis e vidros calculados para resistir às rajadas sem assovios, vibrações ou infiltrações.',
        'Atendemos Cajamar, Polvilho e Jordanésia com medição no local e instalação por equipe própria. Das grandes aberturas voltadas à paisagem às janelas dos dormitórios, entregamos alumínio de alto padrão com esquadro milimétrico e vedação testada contra a chuva de vento típica das regiões elevadas.',
      ],
      bullets: ['Cálculo de vento para áreas altas', 'Cobertura em Polvilho e Jordanésia', 'Grandes vãos voltados à paisagem', 'Vedação testada contra chuva de vento'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Cajamar SP: Alto Padrão Sob Medida',
      servicesSubtitle: 'Esquadrias de alumínio sob medida para condomínios de alto padrão de Cajamar, com reforço estrutural para o vento das áreas de relevo e altitude.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Cajamar',
      linesSubtitle: 'Escolha a linha certa para grandes vãos expostos ao vento nos condomínios de Cajamar.',
      casesTitle: 'Projetos de Esquadrias Entregues em Cajamar',
      casesSubtitle: 'Residências de alto padrão executadas em condomínios de Cajamar com reforço de vento e vedação.',
      testimonialsTitle: 'Quem Instalou Esquadrias em Cajamar Recomenda',
      testimonialsSubtitle: 'Moradores dos condomínios de Cajamar comentam a resistência ao vento e a vedação.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Cajamar',
      faqSubtitle: 'Respostas técnicas para obras em condomínios de Cajamar, Polvilho e Jordanésia.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Cajamar SP',
      contactSubtitle: 'Agende a medição da sua casa em Cajamar pelo WhatsApp.',
    },
    cases: [
      { title: 'Casa em Condomínio - Reserva Santa Maria (Cajamar)', region: 'Reserva Santa Maria - Cajamar', description: 'Grandes vãos de correr voltados à paisagem, com perfis reforçados e vidros laminados para resistir ao vento da área elevada.', image: IMG.villa, highlight: 'Reforço de Vento' },
      { title: 'Residência - Polvilho (Cajamar)', region: 'Polvilho - Cajamar', description: 'Janelas de correr e maxim-ar com dupla vedação, eliminando infiltração e ruído em terreno alto e aberto.', image: IMG.esq, highlight: 'Vedação Total' },
      { title: 'Sobrado - Jordanésia (Cajamar)', region: 'Jordanésia - Cajamar', description: 'Fachada com pele de vidro e persianas integradas, unindo controle solar e privacidade em condomínio de relevo.', image: IMG.facade, highlight: 'Pele de Vidro' },
    ],
    testimonials: [
      { author: 'Vinícius Barros', role: 'Morador da Reserva Santa Maria, Cajamar', text: 'A casa fica no alto e o vento é forte. As esquadrias da Serra-Ferro não fazem nenhum barulho e seguraram bem as tempestades.' },
      { author: 'Arq. Renata Coelho', role: 'Arquiteta em Cajamar', text: 'Souberam calcular o reforço para o vento da região sem perder o visual dos grandes vãos. Entrega e acabamento impecáveis.' },
    ],
    faqs: [
      { question: 'As esquadrias suportam o vento forte das áreas altas de Cajamar?', answer: 'Sim. Calculamos a carga de vento de cada vão e reforçamos os perfis com ligas de alta resistência, eliminando assovios, vibrações e infiltrações mesmo nos condomínios em relevo mais exposto.' },
      { question: 'Vocês atendem a Reserva Santa Maria e outros condomínios de Cajamar?', answer: 'Sim, atendemos os condomínios de alto padrão de Cajamar, além de Polvilho e Jordanésia, com medição no local e respeito às regras de acesso e horário de obra.' },
      { question: 'Fazem grandes vãos voltados para a paisagem em Cajamar?', answer: 'Sim. Projetamos portas de correr amplas e cantos de vidro com reforço estrutural, aproveitando a vista dos condomínios de relevo com total segurança e vedação.' },
      { question: 'Qual o prazo de entrega em Cajamar?', answer: 'Definido em contrato com cláusula de multa por atraso, conforme a complexidade do projeto e a linha escolhida.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-jandira-sp',
    city: 'Jandira',
    keyword: 'Esquadrias de Alumínio em Jandira SP',
    metaTitle: 'Esquadrias de Alumínio em Jandira SP | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Jandira SP sob medida para casas, sobrados e reformas. Isolamento acústico, vedação garantida e ótimo custo-benefício. Peça seu orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM JANDIRA SP',
      description: 'Esquadrias de alumínio sob medida em Jandira para casas, sobrados e reformas, com isolamento acústico, vedação garantida e excelente custo-benefício, instaladas por equipe própria.',
      highlights: ['Ótimo custo-benefício', 'Ideal para reforma e obra nova', 'Isolamento acústico urbano', 'Instalação própria e pontual'],
    },
    localIntro: {
      tag: 'ATENDIMENTO LOCAL EM JANDIRA',
      title: 'Esquadrias de Alumínio em Jandira com Custo-Benefício e Qualidade',
      paragraphs: [
        'Cidade compacta e adensada do oeste da Grande São Paulo, Jandira reúne casas, sobrados e apartamentos em bairros como Jardim Sabará, Vila Eutália e o entorno da estação da CPTM. Entregamos esquadrias de alumínio com excelente custo-benefício, unindo vedação eficiente, isolamento acústico contra o ruído urbano e o acabamento de alto padrão da Serra-Ferro.',
        'Somos especialistas em reforma e substituição de esquadrias em Jandira, com medição precisa dos vãos existentes e instalação limpa em obra pronta. Da troca das janelas antigas às obras novas, garantimos esquadro, estanqueidade e prazo definido em contrato.',
      ],
      bullets: ['Excelente custo-benefício', 'Especialistas em troca de esquadrias', 'Cobertura no Jardim Sabará e Vila Eutália', 'Vedação e acústica garantidas'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Jandira SP: Serviços Sob Medida',
      servicesSubtitle: 'Esquadrias de alumínio sob medida para casas, sobrados e reformas em Jandira, com vedação, isolamento acústico e ótimo custo-benefício.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Jandira',
      linesSubtitle: 'Do custo-benefício da Linha Suprema às linhas mais robustas, escolha a melhor opção para o seu imóvel em Jandira.',
      casesTitle: 'Projetos de Esquadrias Entregues em Jandira',
      casesSubtitle: 'Reformas e obras residenciais executadas em Jandira com vedação e acabamento impecáveis.',
      testimonialsTitle: 'Quem Trocou as Esquadrias em Jandira Aprova',
      testimonialsSubtitle: 'Moradores de Jandira comentam o custo-benefício e o conforto das esquadrias.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Jandira',
      faqSubtitle: 'Respostas para quem vai reformar ou instalar esquadrias em Jandira.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Jandira SP',
      contactSubtitle: 'Agende a medição da sua casa ou sobrado em Jandira pelo WhatsApp.',
    },
    cases: [
      { title: 'Reforma de Casa - Jardim Sabará (Jandira)', region: 'Jardim Sabará - Jandira', description: 'Troca completa das esquadrias por janelas de correr com vidro laminado, melhorando o isolamento acústico e a vedação.', image: IMG.esq, highlight: 'Reforma Completa' },
      { title: 'Sobrado - Vila Eutália (Jandira)', region: 'Vila Eutália - Jandira', description: 'Janelas Linha Suprema com dupla vedação e ótimo custo-benefício, com acabamento premium no sobrado.', image: IMG.min, highlight: 'Custo-Benefício' },
      { title: 'Residência - Centro (Jandira)', region: 'Centro - Jandira', description: 'Porta de correr de alumínio integrando sala e quintal, com trilho reforçado e fechadura de alta segurança.', image: IMG.house, highlight: 'Integração Sala-Quintal' },
    ],
    testimonials: [
      { author: 'Juliana Freitas', role: 'Moradora do Jardim Sabará, Jandira', text: 'Troquei todas as janelas antigas e o resultado surpreendeu: mais silêncio, sem infiltração e um preço justo pela qualidade.' },
      { author: 'Marcos Aurélio', role: 'Proprietário de sobrado em Jandira', text: 'Instalação rápida e limpa, sem quebrar nada. As esquadrias ficaram com um acabamento muito acima do que eu esperava.' },
    ],
    faqs: [
      { question: 'As esquadrias da Serra-Ferro têm bom custo-benefício para Jandira?', answer: 'Sim. A Linha Suprema entrega a qualidade, a vedação e o acabamento da Serra-Ferro com excelente custo-benefício, ideal para casas e sobrados de Jandira.' },
      { question: 'Vocês fazem a troca das esquadrias antigas em Jandira?', answer: 'Sim, somos especialistas em reforma e retrofit. Medimos os vãos existentes, fabricamos sob medida e substituímos com instalação limpa, sem danificar o acabamento pronto.' },
      { question: 'As esquadrias ajudam no isolamento acústico em Jandira?', answer: 'Sim. Com vidros laminados e perfis de bom encaixe, reduzimos o ruído urbano, deixando os ambientes mais silenciosos e confortáveis.' },
      { question: 'Como funciona o orçamento em Jandira?', answer: 'Fale com o comercial pelo WhatsApp para uma estimativa inicial e agende a medição gratuita no local para o orçamento final, com prazo garantido em contrato.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-curitiba',
    city: 'Curitiba',
    keyword: 'Esquadrias de Alumínio em Curitiba',
    metaTitle: 'Esquadrias de Alumínio em Curitiba | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Curitiba sob medida com isolamento térmico e acústico para o frio: portas e janelas com vidro duplo e vedação total. Orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM CURITIBA',
      description: 'Esquadrias de alumínio sob medida em Curitiba com foco no conforto térmico do clima frio: portas e janelas com vidros duplos, isolamento acústico e vedação total contra chuva e vento.',
      highlights: ['Isolamento térmico para o frio', 'Vidros duplos anticondensação', 'Vedação total contra chuva e vento', 'Alto padrão em bairros nobres'],
    },
    localIntro: {
      tag: 'ATENDIMENTO EM CURITIBA',
      title: 'Esquadrias de Alumínio em Curitiba com Conforto Térmico',
      paragraphs: [
        'O clima frio e úmido de Curitiba, com invernos rigorosos e chuvas frequentes, torna o desempenho térmico das esquadrias tão importante quanto a estética. Projetamos portas e janelas de alumínio com vidros duplos (insulados) e vedação de alta densidade que reduzem a perda de calor, combatem a condensação e mantêm o ambiente aquecido e silencioso.',
        'Atendemos residências e empreendimentos de alto padrão em bairros como Batel, Ecoville, Água Verde, Cabral e Champagnat, com projeto sob medida, esquadro milimétrico e instalação por equipe própria — unindo a sofisticação da arquitetura curitibana ao alto desempenho do alumínio.',
      ],
      bullets: ['Vidros duplos para conforto térmico', 'Combate à condensação do clima frio', 'Cobertura no Batel, Ecoville e Água Verde', 'Isolamento acústico superior'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Curitiba: Serviços de Alto Padrão',
      servicesSubtitle: 'Portas e janelas de alumínio sob medida para o clima de Curitiba, com vidros duplos, isolamento térmico e acústico e vedação contra chuva e vento frio.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Obras em Curitiba',
      linesSubtitle: 'Compare as linhas ideais para o frio de Curitiba e escolha perfis e vidros com o melhor desempenho térmico e acústico.',
      casesTitle: 'Projetos de Esquadrias de Alumínio Entregues em Curitiba',
      casesSubtitle: 'Obras residenciais de alto padrão executadas em Curitiba com isolamento térmico e vedação impecável.',
      testimonialsTitle: 'Quem Instalou Esquadrias de Alumínio em Curitiba Recomenda',
      testimonialsSubtitle: 'Moradores de Curitiba comentam o conforto térmico e o silêncio das esquadrias.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Curitiba',
      faqSubtitle: 'Respostas técnicas para quem vai instalar ou trocar esquadrias no clima de Curitiba.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Curitiba',
      contactSubtitle: 'Agende a medição da sua obra em Curitiba e fale com o comercial técnico pelo WhatsApp.',
    },
    cases: [
      { title: 'Residência com Vidro Duplo - Ecoville (Curitiba)', region: 'Ecoville - Curitiba', description: 'Portas e janelas com vidros insulados (duplos) para máximo conforto térmico no inverno, eliminando a condensação e a perda de calor.', image: IMG.villa, highlight: 'Vidro Duplo' },
      { title: 'Apartamento de Alto Padrão - Batel (Curitiba)', region: 'Batel - Curitiba', description: 'Janelas acústicas com persiana integrada, garantindo silêncio e controle de luz em torre residencial no coração do Batel.', image: IMG.esq, highlight: 'Acústica + Persiana' },
      { title: 'Sobrado Contemporâneo - Champagnat (Curitiba)', region: 'Champagnat - Curitiba', description: 'Portas de correr amplas com perfis minimalistas e vedação reforçada contra a chuva e o vento frio da região.', image: IMG.min, highlight: 'Perfis Slim' },
    ],
    testimonials: [
      { author: 'Eduardo Kraus', role: 'Morador do Ecoville, Curitiba', text: 'O frio de Curitiba entrava pelas janelas antigas e dava condensação todo dia. Com os vidros duplos da Serra-Ferro, acabou a umidade e a casa fica muito mais quente.' },
      { author: 'Arq. Helena Vasconcelos', role: 'Arquiteta em Curitiba', text: 'Precisão de esquadro e desempenho térmico de primeira. Os perfis minimalistas valorizaram o projeto e a vedação está impecável mesmo nas chuvas fortes.' },
    ],
    faqs: [
      { question: 'As esquadrias ajudam contra o frio e a condensação em Curitiba?', answer: 'Sim. Usamos vidros duplos (insulados) com câmara de ar e vedação de alta densidade em EPDM, que reduzem drasticamente a perda de calor e a condensação, muito comuns no clima frio e úmido de Curitiba.' },
      { question: 'Vocês atendem os bairros de alto padrão de Curitiba?', answer: 'Sim, atendemos Batel, Ecoville, Água Verde, Cabral, Champagnat e demais regiões de Curitiba, com medição no local e instalação por equipe própria.' },
      { question: 'As janelas isolam o barulho além do frio?', answer: 'Sim. Os vidros laminados e duplos, somados ao bom encaixe dos perfis, garantem excelente isolamento acústico, deixando os ambientes silenciosos.' },
      { question: 'Qual o prazo de entrega para uma obra em Curitiba?', answer: 'O prazo é definido em contrato conforme a complexidade e a linha escolhida, com cláusula de multa por atraso, garantindo previsibilidade para a sua obra em Curitiba.' },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio-em-curitiba',
    city: 'Curitiba',
    keyword: 'Esquadrias de Alumínio em Curitiba',
    metaTitle: 'Esquadrias de Alumínio em Curitiba | Portas e Janelas de Alumínio | Serra Ferro',
    metaDescription: 'Esquadrias de alumínio em Curitiba sob medida com isolamento térmico e acústico para o frio: portas e janelas com vidro duplo e vedação total. Orçamento no WhatsApp.',
    hero: {
      tag: 'SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM CURITIBA',
      description: 'Esquadrias de alumínio sob medida em Curitiba com foco no conforto térmico do clima frio: portas e janelas com vidros duplos, isolamento acústico e vedação total contra chuva e vento.',
      highlights: ['Isolamento térmico para o frio', 'Vidros duplos anticondensação', 'Vedação total contra chuva e vento', 'Alto padrão em bairros nobres'],
    },
    localIntro: {
      tag: 'ATENDIMENTO EM CURITIBA',
      title: 'Esquadrias de Alumínio em Curitiba com Conforto Térmico',
      paragraphs: [
        'O clima frio e úmido de Curitiba, com invernos rigorosos e chuvas frequentes, torna o desempenho térmico das esquadrias tão importante quanto a estética. Projetamos portas e janelas de alumínio com vidros duplos (insulados) e vedação de alta densidade que reduzem a perda de calor, combatem a condensação e mantêm o ambiente aquecido e silencioso.',
        'Atendemos residências e empreendimentos de alto padrão em bairros como Batel, Ecoville, Água Verde, Cabral e Champagnat, com projeto sob medida, esquadro milimétrico e instalação por equipe própria — unindo a sofisticação da arquitetura curitibana ao alto desempenho do alumínio.',
      ],
      bullets: ['Vidros duplos para conforto térmico', 'Combate à condensação do clima frio', 'Cobertura no Batel, Ecoville e Água Verde', 'Isolamento acústico superior'],
    },
    headers: {
      servicesTitle: 'Esquadrias de Alumínio em Curitiba: Serviços de Alto Padrão',
      servicesSubtitle: 'Portas e janelas de alumínio sob medida para o clima de Curitiba, com vidros duplos, isolamento térmico e acústico e vedação contra chuva e vento frio.',
      linesTitle: 'Linhas de Esquadrias de Alumínio para Obras em Curitiba',
      linesSubtitle: 'Compare as linhas ideais para o frio de Curitiba e escolha perfis e vidros com o melhor desempenho térmico e acústico.',
      casesTitle: 'Projetos de Esquadrias de Alumínio Entregues em Curitiba',
      casesSubtitle: 'Obras residenciais de alto padrão executadas em Curitiba com isolamento térmico e vedação impecável.',
      testimonialsTitle: 'Quem Instalou Esquadrias de Alumínio em Curitiba Recomenda',
      testimonialsSubtitle: 'Moradores de Curitiba comentam o conforto térmico e o silêncio das esquadrias.',
      faqTitle: 'Dúvidas sobre Esquadrias de Alumínio em Curitiba',
      faqSubtitle: 'Respostas técnicas para quem vai instalar ou trocar esquadrias no clima de Curitiba.',
      contactTitle: 'Peça um Orçamento de Esquadrias de Alumínio em Curitiba',
      contactSubtitle: 'Agende a medição da sua obra em Curitiba e fale com o comercial técnico pelo WhatsApp.',
    },
    cases: [
      { title: 'Residência com Vidro Duplo - Ecoville (Curitiba)', region: 'Ecoville - Curitiba', description: 'Portas e janelas com vidros insulados (duplos) para máximo conforto térmico no inverno, eliminando a condensação e a perda de calor.', image: IMG.villa, highlight: 'Vidro Duplo' },
      { title: 'Apartamento de Alto Padrão - Batel (Curitiba)', region: 'Batel - Curitiba', description: 'Janelas acústicas com persiana integrada, garantindo silêncio e controle de luz em torre residencial no coração do Batel.', image: IMG.esq, highlight: 'Acústica + Persiana' },
      { title: 'Sobrado Contemporâneo - Champagnat (Curitiba)', region: 'Champagnat - Curitiba', description: 'Portas de correr amplas com perfis minimalistas e vedação reforçada contra a chuva e o vento frio da região.', image: IMG.min, highlight: 'Perfis Slim' },
    ],
    testimonials: [
      { author: 'Eduardo Kraus', role: 'Morador do Ecoville, Curitiba', text: 'O frio de Curitiba entrava pelas janelas antigas e dava condensação todo dia. Com os vidros duplos da Serra-Ferro, acabou a umidade e a casa fica muito mais quente.' },
      { author: 'Arq. Helena Vasconcelos', role: 'Arquiteta em Curitiba', text: 'Precisão de esquadro e desempenho térmico de primeira. Os perfis minimalistas valorizaram o projeto e a vedação está impecável mesmo nas chuvas fortes.' },
    ],
    faqs: [
      { question: 'As esquadrias ajudam contra o frio e a condensação em Curitiba?', answer: 'Sim. Usamos vidros duplos (insulados) com câmara de ar e vedação de alta densidade em EPDM, que reduzem drasticamente a perda de calor e a condensação, muito comuns no clima frio e úmido de Curitiba.' },
      { question: 'Vocês atendem os bairros de alto padrão de Curitiba?', answer: 'Sim, atendemos Batel, Ecoville, Água Verde, Cabral, Champagnat e demais regiões de Curitiba, com medição no local e instalação por equipe própria.' },
      { question: 'As janelas isolam o barulho além do frio?', answer: 'Sim. Os vidros laminados e duplos, somados ao bom encaixe dos perfis, garantem excelente isolamento acústico, deixando os ambientes silenciosos.' },
      { question: 'Qual o prazo de entrega para uma obra em Curitiba?', answer: 'O prazo é definido em contrato conforme a complexidade e a linha escolhida, com cláusula de multa por atraso, garantindo previsibilidade para a sua obra em Curitiba.' },
    ],
  },
];

export const ESQUADRIAS_REGION_BY_SLUG: Record<string, EsquadriasRegion> = Object.fromEntries(
  ESQUADRIAS_REGIONS.map((r) => [r.slug, r]),
);
