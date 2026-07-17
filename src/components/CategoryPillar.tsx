/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  MapPin, 
  Clock, 
  CheckSquare, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { AppView } from '../types';
import { SERVICES_CATEGORIES } from '../data';
import { EsquadriasRegion, ESQUADRIAS_REGIONS } from '../regionsEsquadrias';
import { SERRALHERIA_REGIONS, SERRALHERIA_SP_SLUG } from '../regionsSerralheria';
import { VIDRACARIA_REGIONS, VIDRACARIA_SP_SLUG } from '../regionsVidracaria';
import { ESQUADRIAS_SP_SLUG } from '../seo';

interface CategoryPillarProps {
  category: 'esquadrias' | 'vidracaria' | 'serralheria';
  setView: (view: AppView) => void;
  region?: EsquadriasRegion;
}

export default function CategoryPillar({ category, setView, region }: CategoryPillarProps) {
  const currentCategoryData = SERVICES_CATEGORIES[category];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Rótulos localizados: em páginas regionais usamos a cidade e a palavra-chave da região.
  const cityLabel = region?.city ?? 'São Paulo';
  const serviceLabel = region?.keyword ?? currentCategoryData.title;

  const getWhatsAppLink = (messageText?: string) => {
    const defaultText = `Olá! Gostaria de falar com o comercial técnico da Serra-Ferro para solicitar um orçamento de ${serviceLabel} para minha obra.`;
    const textToUse = messageText || defaultText;
    return `https://wa.me/5511913243623?text=${encodeURIComponent(textToUse)}`;
  };

  // BANNER CONFIGURATION (FIRST FOLD) FOR THE THREE SERVICES
  const bannerConfig = {
    esquadrias: {
      tag: "SERRA-FERRO • ESQUADRIAS DE ALUMÍNIO EM SP",
      titleNormal: "",
      titleHighlight: "Esquadrias de Alumínio em SP",
      titleSuffix: " de Alto Padrão",
      description: "Esquadrias Premium projetadas com excelência acústica, vedação termoacústica absoluta e esquadro perfeito. Proteja o seu investimento com prazos de entrega rigorosamente garantidos em contrato físico.",
      image: "/assets/images/luxury_villa_glazing_1782306007983.jpg",
      highlights: [
        "Entrega no prazo (com multa em contrato)",
        "Garantia de vedação total por escrito",
        "Conformidade integral com normas ABNT",
        "Especialistas em projetos de alto padrão"
      ]
    },
    vidracaria: {
      tag: "SERRA-FERRO • VIDRAÇARIA EM SÃO PAULO",
      titleNormal: "Serviços de ",
      titleHighlight: "Vidraçaria em São Paulo",
      titleSuffix: " de Alto Padrão",
      description: "Procurando por um vidraceiro em São Paulo de confiança? Na nossa vidraçaria em São Paulo, projetamos guarda-corpos autoportantes, fechamentos de sacadas panorâmicas e espelhos monumentais de cristal. Soluções exclusivas instaladas com perfeição por equipe técnica própria.",
      image: "/assets/images/modern_facade_glass_1782306036555.jpg",
      highlights: [
        "Vidros laminados de alta segurança",
        "Instalação cuidadosa por técnicos próprios",
        "Garantia de estanqueidade contra chuvas",
        "Faturamento facilitado com nota fiscal"
      ]
    },
    serralheria: {
      tag: "SERRA-FERRO • SERRALHERIA EM SÃO PAULO",
      titleNormal: "Serviços de ",
      titleHighlight: "Serralheria em São Paulo",
      titleSuffix: " de Alto Padrão",
      description: "Se você procura por um serralheiro em São Paulo experiente, nossa serralheria em São Paulo projeta escadas plissadas com solda invisível, portas pivotantes monumentais de aço e mezaninos calculados por engenharia aplicada.",
      image: "/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg",
      highlights: [
        "Acabamento fino sem soldas aparentes",
        "Pintura eletrostática especial duradoura",
        "Cálculo de cargas por engenheiros",
        "Cronograma rigoroso de entrega"
      ]
    }
  };

  const currentBanner = region
    ? {
        tag: region.hero.tag,
        titleNormal: '',
        titleHighlight: region.keyword,
        titleSuffix: '',
        description: region.hero.description,
        image: bannerConfig.esquadrias.image,
        highlights: region.hero.highlights,
      }
    : bannerConfig[category];

  // SERVICES DETAILED FOR EACH CATEGORY (SESSION 2)
  const servicesMap = {
    esquadrias: [
      {
        title: "Portas de Alumínio de Alto Padrão",
        description: "Portas pivotantes monumentais, portas de correr integradas de grandes vãos e portas de giro. Perfis robustos, fechaduras de alta segurança e deslizamento extremamente leve e silencioso.",
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg"
      },
      {
        title: "Janelas Acústicas e com Persiana Integrada",
        description: "Janelas de correr, maxim-ar e integradas com persianas motorizadas por controle ou automação. Máximo bloqueio de luz (blackout) e atenuação acústica para garantir noites tranquilas de sono.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg"
      },
      {
        title: "Guarda-Corpos de Alta Segurança",
        description: "Projetados em alumínio estrutural e vidros temperados laminados de alta resistência. Soluções autoportantes com fixação oculta ou canaletes embutidos para sacadas, mezaninos e escadas.",
        image: "/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg"
      },
      {
        title: "Fachadas Integradas e Pele de Vidro",
        description: "Peles de vidro (Structural Glazing) contínuas onde a estrutura de alumínio fica oculta no exterior. Visual limpo e imponente com excelente controle térmico e proteção solar contra raios UV.",
        image: "/assets/images/modern_facade_glass_1782306036555.jpg"
      },
      {
        title: "Coberturas de Alumínio e Vidro Herméticas",
        description: "Coberturas fixas ou retráteis projetadas para receber vidros laminados de controle térmico. Vedação dupla e sistema de calhas integradas que evitam goteiras ou infiltrações em dias de chuva forte.",
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
      },
      {
        title: "Projetos Especiais Sob Medida",
        description: "Engenharia dedicada a solucionar grandes vãos arquitetônicos, como cantos de vidro sem coluna estrutural, painéis de correr jumbo e portas de entrada gigantescas de alumínio composto.",
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg"
      }
    ],
    vidracaria: [
      {
        title: "Guarda-Corpos Autoportantes em Vidro (Vidraçaria em São Paulo)",
        description: "Projetados pela nossa vidraçaria de alto padrão em São Paulo com vidros temperados laminados de alta resistência mecânica e perfis embutidos de alumínio estrutural para máxima transparência.",
        image: "/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg"
      },
      {
        title: "Fechamento de Sacadas e Vidraçaria Premium em São Paulo",
        description: "Instalação executada por experientes vidraceiros em São Paulo com sistema de roldanas ocultas, abertura total das folhas de vidro e vedação de alta densidade contra chuvas.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg"
      },
      {
        title: "Espelhos Monumentais e Revestimentos de Luxo",
        description: "Serviços de vidraçaria em São Paulo para colagem e instalação de espelhos de cristal de alta definição com corte bizotê e lapidação impecável para salas de jantar e closets.",
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg"
      },
      {
        title: "Pele de Vidro e Fachadas Glazing",
        description: "Projetos de fachadas contínuas com vidros especiais de controle térmico sob medida, executados com total segurança e estanqueidade pela nossa vidraçaria.",
        image: "/assets/images/modern_facade_glass_1782306036555.jpg"
      },
      {
        title: "Divisórias e Portas de Vidro Temperado",
        description: "Divisórias acústicas elegantes e portas de correr gigantescas planejadas com vidros temperados de segurança de alta espessura e ferragens de alta performance.",
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg"
      },
      {
        title: "Coberturas de Vidro com Controle Solar",
        description: "Estruturas modernas com vidros laminados especiais de controle térmico instalados com vedação dupla absoluta contra infiltrações e goteiras em São Paulo.",
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
      }
    ],
    serralheria: [
      {
        title: "Escadas Plissadas de Design (Serralheria em São Paulo)",
        description: "Desenvolvidas por nossa renomada serralheria de alto padrão em São Paulo com soldas 100% invisíveis ao toque, vigas estruturais reforçadas e degraus metálicos perfeitos.",
        image: "/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg"
      },
      {
        title: "Portas Pivotantes e Serviços de Serralheria em São Paulo",
        description: "Portas monumentais de entrada sob medida de aço executadas por serralheiros em São Paulo especializados em grandes vãos, folhas estruturadas e fechaduras de alta segurança.",
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg"
      },
      {
        title: "Mezaninos e Estruturas Metálicas (Serralheria Fina em São Paulo)",
        description: "Cálculo técnico e montagem de mezaninos robustos. Projetos de serralheria em São Paulo com vigas de aço laminadas e laudos assinados com ART por equipe de engenharia.",
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg"
      },
      {
        title: "Portões Rápidos e de Alta Segurança",
        description: "Portões basculantes e deslizantes rápidos fabricados pela nossa serralheria fina em chapa de aço estrutural cortada a laser em CNC para um visual moderno e seguro.",
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
      },
      {
        title: "Pérgolas e Coberturas de Aço Corten",
        description: "Estruturas contemporâneas com vigamento em aço corten oxidado de forma natural controlada ou aço carbono com pintura eletrostática anticorrosiva de alto desempenho.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg"
      },
      {
        title: "Brises e Painéis Pantográficos Metálicos",
        description: "Painéis móveis de privacidade e brises de sombreamento produzidos com cortes a laser micrométricos sob medida em chapas de aço resistentes.",
        image: "/assets/images/modern_facade_glass_1782306036555.jpg"
      }
    ]
  };

  // PRODUCT LINES FOR EACH CATEGORY (SESSION 3)
  const linesMap = {
    esquadrias: [
      {
        name: "Linha Suprema",
        badge: "Excelente Custo-Benefício",
        description: "Ideal para vãos de tamanhos tradicionais e médios. Garante a qualidade, a vedação acústica e a resistência mecânica padrão da Serra-Ferro com excelente custo-benefício.",
        features: ["Perfis compactos e discretos", "Deslizamento suave", "Vedação de alta densidade", "Acabamento impecável"],
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg"
      },
      {
        name: "Linha Gold",
        badge: "O Padrão Mais Procurado",
        description: "A linha mais especificada por arquitetos para grandes vãos residenciais. Perfis robustos que suportam vidros mais espessos, garantindo excelente estabilidade estrutural e atenuação de ruídos.",
        features: ["Ideal para vãos gigantes", "Suporta vidros acústicos ou duplos", "Fechamentos de alta segurança", "Estética moderna e marcante"],
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg"
      },
      {
        name: "Linha Minimalista (Slim)",
        badge: "Arquitetura e Luz Natural",
        description: "Perfis de alumínio ultra finos que maximizam a passagem de luz e integram o ambiente interno à área de lazer. O caixilho de alumínio quase desaparece, mantendo total estabilidade estrutural.",
        features: ["Trilhos embutidos no piso", "Perfis verticais super estreitos", "Vista limpa panorâmica", "Máxima sofisticação arquitetônica"],
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg"
      }
    ],
    vidracaria: [
      {
        name: "Linha Crystal Clear (Extra Clear)",
        badge: "Transparência Absoluta",
        description: "Vidros especiais com baixo teor de ferro lapidados por nossa vidraçaria de alto padrão em São Paulo para eliminação do tom verde das bordas, trazendo pureza máxima.",
        features: ["Totalmente transparente e puro", "Sem distorções cromáticas", "Lapidação fina a laser", "Ideal para espelhos premium e vitrines"],
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg"
      },
      {
        name: "Linha SafeTemp (Laminados e Temperados)",
        badge: "Máxima Segurança Física",
        description: "Junção de têmpera térmica de alta resistência com películas PVB ou SentryGlas estruturais de alta aderência. Solução de vidraçaria em São Paulo recomendada para guarda-corpos.",
        features: ["Proteção contra quedas e impactos", "Conformidade integral com NBR 14718", "Isolamento acústico otimizado", "Ideal para guarda-corpos e vãos livres"],
        image: "/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg"
      },
      {
        name: "Linha SolarControl (Vidros Inteligentes)",
        badge: "Conforto Térmico Avançado",
        description: "Vidros de alta performance em São Paulo com deposição de óxidos metálicos que bloqueiam até 70% da energia solar térmica sem escurecer o ambiente, poupando energia.",
        features: ["Bloqueia até 99% de raios UV", "Redução perceptível de calor", "Estética neutra ou refletiva", "Economia real de ar condicionado"],
        image: "/assets/images/modern_facade_glass_1782306036555.jpg"
      }
    ],
    serralheria: [
      {
        name: "Linha Serralheria Fina",
        badge: "Acabamento Artesanal de Luxo",
        description: "Peças autorais criadas por nossa serralheria fina em São Paulo com soldas completamente lixadas e invisíveis ao toque, cantos alinhados e pintura microtexturizada.",
        features: ["Sem vestígios ou rebarbas de solda", "Tubos e perfis metálicos finos", "Foco em móveis e divisórias", "Elegância industrial geométrica"],
        image: "/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg"
      },
      {
        name: "Linha Heavy Duty (Serralheria Estrutural)",
        badge: "Robustez e Cálculo Civil",
        description: "Estruturas e mezaninos robustos calculados e certificados pela nossa equipe de serralheria de alto padrão em São Paulo, com laudos de engenharia aplicados.",
        features: ["Suporta toneladas de carga estática", "Projetos em conformidade com NBR 8800", "Galvanização total anti-ferrugem", "Projetos dimensionados contra fadiga"],
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg"
      },
      {
        name: "Linha Corten & Design Laser CNC",
        badge: "Arquitetura Monumental Autoral",
        description: "Criação de brises, portões e painéis decorativos por experientes serralheiros em São Paulo utilizando aço corten legítimo oxidado naturalmente ou chapas sob alta precisão laser.",
        features: ["Oxidação protetora natural (pátina)", "Corte sob desenho customizado", "Longevidade temporal insuperável", "Brises funcionais autônomos"],
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg"
      }
    ]
  };

  // LOCALIZED AND REALISTIC CASES (SESSION 4)
  const casesMap = {
    esquadrias: [
      {
        title: "Residência Minimalista - Jardins (São Paulo)",
        region: "Zona Oeste - Capital",
        description: "Substituição completa de esquadrias antigas por painéis minimalistas integrados com vãos livres de 8 metros. Vidros acústicos laminados para isolamento total contra o ruído urbano.",
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg",
        highlight: "Integração Total"
      },
      {
        title: "Mansão Contemporânea - Alphaville (Barueri)",
        region: "Região Metropolitana",
        description: "Projeto de esquadrias Linha Gold com acabamento em pintura eletrostática preta fosca. Inclui uma imponente porta pivotante de alumínio de 6 metros de altura no hall de entrada.",
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg",
        highlight: "Porta Monumental"
      },
      {
        title: "Cobertura Duplex - Morumbi (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Fechamento panorâmico com pele de vidro acústica de alto desempenho e guarda-corpos autoportantes de alumínio estrutural, garantindo segurança total contra a força do vento em altura.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg",
        highlight: "Segurança de Ventos"
      },
      {
        title: "Residência de Alto Padrão - Pinheiros (São Paulo)",
        region: "Zona Oeste - Capital",
        description: "Esquadrias de correr integradas com persianas blackout motorizadas. Esquadros perfeitos compatibilizados milimetricamente com o contramarco e acabamento em gesso da obra.",
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg",
        highlight: "Persianas Integradas"
      },
      {
        title: "Espaço Corporativo Premium - Itaim Bibi (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Fachada cortina contínua (Pele de Vidro / Structural Glazing) instalada em sede corporativa, utilizando vidros refletivos de controle térmico para redução do uso de ar condicionado.",
        image: "/assets/images/modern_facade_glass_1782306036555.jpg",
        highlight: "Controle Térmico"
      },
      {
        title: "Casa de Alto Padrão - Moema (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Janelas e portas de correr sob medida projetadas com tratamento de atenuação acústica especial, bloqueando o ruído de tráfego urbano e trazendo silêncio e conforto absoluto para a área íntima.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg",
        highlight: "Atenuação Acústica"
      }
    ],
    vidracaria: [
      {
        title: "Cobertura Duplex - Morumbi (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Instalação de guarda-corpos autoportantes de vidro temperado laminado de alta segurança realizada por nossa equipe de vidraçaria em São Paulo, garantindo sofisticação e total estanqueidade.",
        image: "/assets/images/vidracaria_balcony_luxury_card_1782740008784.jpg",
        highlight: "Guarda-Corpo Clean"
      },
      {
        title: "Mansão Contemporânea - Alphaville (Barueri)",
        region: "Região Metropolitana",
        description: "Fechamento de fachada monumental de grandes dimensões sob medida. Serviços de vidraçaria em São Paulo utilizando painéis Extra Clear com fixação structural glazing oculta e alinhamento a laser.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg",
        highlight: "Pele de Vidro Jumbo"
      },
      {
        title: "Apartamento de Luxo - Jardins (São Paulo)",
        region: "Zona Oeste - Capital",
        description: "Instalação de espelhos de cristal de alta definição monumentais com corte bisotê fino, colados por nosso vidraceiro em São Paulo experiente e integrado à marcenaria clássica de alto padrão.",
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg",
        highlight: "Espelhos Monumentais"
      },
      {
        title: "Residência Minimalista - Pinheiros (São Paulo)",
        region: "Zona Oeste - Capital",
        description: "Divisórias acústicas internas de vidro laminado acústico com caixilhos de alumínio pretos embutidos, separando com elegância e luz a cozinha e a sala de jantar.",
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg",
        highlight: "Divisórias Acústicas"
      },
      {
        title: "Sede Corporativa Premium - Itaim Bibi (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Coberturas de vidro plano de alta tecnologia de controle térmico e solar, garantindo proteção contra raios UV e reduzindo significativamente o calor na recepção.",
        image: "/assets/images/modern_facade_glass_1782306036555.jpg",
        highlight: "Cobertura de Vidro"
      },
      {
        title: "Apartamento Gourmet - Granja Viana (Cotia)",
        region: "Região Metropolitana",
        description: "Fechamento de sacada panorâmico retrátil de alta performance com trilhos embutidos, escovas de alta densidade contra chuvas e roldanas super resistentes de aço inoxidável.",
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg",
        highlight: "Sacada Panorâmica"
      }
    ],
    serralheria: [
      {
        title: "Residência de Design - Jardins (São Paulo)",
        region: "Zona Oeste - Capital",
        description: "Fabricação de escada helicoidal metálica sob medida realizada por nossa serralheria em São Paulo com soldas 100% invisíveis ao toque e pintura eletrostática microtexturizada de extrema durabilidade.",
        image: "/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg",
        highlight: "Escada Helicoidal"
      },
      {
        title: "Loft Industrial - Vila Olímpia (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Execução rápida de mezanino metálico estrutural sob medida por nossa equipe de serralharia em São Paulo, dobrando a área com total segurança.",
        image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg",
        highlight: "Mezanino Industrial"
      },
      {
        title: "Mansão Contemporânea - Alphaville (Barueri)",
        region: "Região Metropolitana",
        description: "Instalação de imponente porta de entrada pivotante monumental revestida em chapas de aço corten genuíno, fabricada sob medida por nosso serralheiro em São Paulo altamente capacitado.",
        image: "/assets/images/portfolio_house_luxury_card_1782740031450.jpg",
        highlight: "Porta Monumental"
      },
      {
        title: "Apartamento Contemporâneo - Pinheiros (São Paulo)",
        region: "Zona Oeste - Capital",
        description: "Instalação de divisórias de metal pretas em formato de serralheria fina clássica industrial com vidros aramados e batentes com vedação de borracha acústica.",
        image: "/assets/images/esquadrias_aluminio_luxury_card_1782739998198.jpg",
        highlight: "Divisória Estilo Industrial"
      },
      {
        title: "Edifício Comercial - Itaim Bibi (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Fachada ornamentada com painéis metálicos pantográficos em chapas de aço cortadas milimetricamente com tecnologia a laser CNC para controle dinâmico da luz solar.",
        image: "/assets/images/modern_facade_glass_1782306036555.jpg",
        highlight: "Fachada Laser CNC"
      },
      {
        title: "Residência Alto Padrão - Morumbi (São Paulo)",
        region: "Zona Sul - Capital",
        description: "Execução de pérgola externa de design de grande porte estruturada em aço galvanizado e pintura eletrostática preta fosca, suportando vidros autolimpantes.",
        image: "/assets/images/luxury_villa_glazing_1782306007983.jpg",
        highlight: "Pérgola Estrutural"
      }
    ]
  };

  // LOCAL TESTIMONIALS (SESSION 5)
  const testimonialsMap = {
    esquadrias: [
      {
        author: "Arq. Mariana Vasconcellos",
        role: "Escritório de Arquitetura nos Jardins, SP",
        text: "Especificar esquadrias em São Paulo sempre foi um teste de paciência com atrasos. Com a Serra-Ferro, as medições e esquadros estavam milimétricos, e a entrega ocorreu exatamente no dia agendado. Recomendo para todos os meus clientes de alto padrão."
      },
      {
        author: "Roberto Albuquerque",
        role: "Proprietário de Residência em Alphaville",
        text: "Eu tinha muito receio com infiltração e barulho de vento por conta do tamanho dos vãos da minha sala. A equipe da Serra-Ferro instalou a Linha Gold com vedação impecável. Passamos pelas tempestades de verão sem uma única gota de água ou assovio."
      },
      {
        author: "Eng. Carlos Eduardo Ramos",
        role: "Construtora Premium no Itaim Bibi, SP",
        text: "A equipe técnica deles fala a língua da engenharia de canteiro. Os perfis minimalistas vieram muito protegidos contra riscos, e os instaladores próprios se mostraram extremamente profissionais, limpos e integrados com o cronograma."
      }
    ],
    vidracaria: [
      {
        author: "Arq. Letícia Padilha",
        role: "Escritório de Arquitetura de Alto Padrão nos Jardins, SP",
        text: "Trabalhar com vidros de grande formato em São Paulo exige muita precisão logística. A equipe de vidraçaria da Serra-Ferro realizou o içamento e a colagem estrutural com silicone neutro com maestria. Acabamento impecável."
      },
      {
        author: "Guilherme Novaes",
        role: "Proprietário de Residência no Morumbi, SP",
        text: "Meus guarda-corpos autoportantes de vidro temperado laminado ficaram maravilhosos. O perfil canalete embutido na viga esconde totalmente as fixações e sinto total segurança com a robustez dos vidros na minha sacada."
      },
      {
        author: "Eng. Marcos Vinícius",
        role: "Construtora de Alto Padrão em São Paulo",
        text: "Eles têm equipe técnica própria altamente qualificada. Nada de terceirização descuidada. Cuidaram de cada detalhe de vedação com poliuretano de alto desempenho e respeitaram rigidamente o cronograma que definimos."
      }
    ],
    serralheria: [
      {
        author: "Arq. Renato Gouveia",
        role: "Estúdio de Design em Pinheiros, SP",
        text: "Encontrar serralheria fina de verdade em São Paulo que consiga sumir com a solda e entregar peças sem rebarbas é raríssimo. O corrimão e a escada helicoidal da Serra-Ferro têm o acabamento perfeito de um verdadeiro artesão."
      },
      {
        author: "Cláudia Menezes",
        role: "Proprietária de Residência em Alphaville",
        text: "Nosso portão de entrada monumental em aço oxidado ficou incrível e idêntico ao projeto em 3D. É robusto, mas desliza muito levemente. O tratamento anticorrosivo deles é diferenciado."
      },
      {
        author: "Eng. Gustavo Mendes",
        role: "Construtora Comercial em São Paulo",
        text: "Contratamos a fabricação e cálculo técnico de mezaninos estruturais para nossa nova sede. O projeto executivo veio assinado com ART por engenheiro calculista próprio, trazendo rapidez, segurança e aprovação garantida no CREA."
      }
    ]
  };

  // TECHNICAL FAQ (SESSION 7)
  const faqMap = {
    esquadrias: [
      {
        question: "Como funciona a garantia de vedação contra chuvas fortes em São Paulo?",
        answer: "Todos os nossos projetos de esquadrias de alumínio sob medida em SP passam por um planejamento de engenharia minucioso. Utilizamos borrachas de dupla vedação em EPDM, escovas de alta densidade e drenos usinados para garantir que mesmo sob tempestades intensas e ventos fortes, a água seja canalizada para o exterior e as janelas não assoviem. A estanqueidade técnica é garantida em contrato por escrito."
      },
      {
        question: "É possível embutir o trilho da porta de correr no nível do piso?",
        answer: "Sim. Em projetos de alto padrão, nós trabalhamos em conjunto com a sua equipe de engenharia civil para rebaixar a viga de contrapiso. Assim, o trilho de alumínio fica totalmente embutido, eliminando degraus e integrando o ambiente interno com a varanda ou quintal de maneira contínua, elegante e segura."
      },
      {
        question: "Qual é o prazo médio de entrega após a medição no local?",
        answer: "O cronograma exato é definido no momento do fechamento do contrato, baseado na complexidade dos vãos e na linha escolhida. O diferencial da Serra-Ferro é que nós assumimos um cronograma físico-financeiro rigoroso em contrato registrado com cláusula de multa por atraso, eliminando o risco de surpresas ou esticar o prazo da sua obra."
      },
      {
        question: "Vocês fornecem e instalam os vidros junto com as esquadrias de alumínio?",
        answer: "Sim. Entregamos a solução completa 'chave na mão' (turnkey). Nós dimensionamos, fornecemos e instalamos as esquadrias de alumínio já integradas com os vidros ideais para o seu projeto (sejam vidros laminados, temperados, térmicos ou acústicos), assumindo total responsabilidade pelo desempenho acústico e estanqueidade mecânica."
      },
      {
        question: "Como as esquadrias minimalistas suportam grandes pressões de vento?",
        answer: "Nossos perfis minimalistas e slim de alta tecnologia são fabricados com ligas de alumínio de alta resistência mecânica e reforços estruturais internos em pontos estratégicos. Isso permite receber panos de vidro gigantescos sem comprometer a estabilidade do caixilho, garantindo total segurança estrutural."
      }
    ],
    vidracaria: [
      {
        question: "Qual é a diferença entre vidro temperado, laminado e laminado temperado?",
        answer: "O vidro temperado passa por um tratamento térmico que o torna 5 vezes mais resistente que o vidro comum e, se quebrar, se estilhaça em pequenos fragmentos arredondados e seguros. O vidro laminado une duas chapas de vidro por uma película interna de plástico (PVB), retendo todos os fragmentos em caso de quebra. O laminado temperado combina ambas as características, sendo o topo de linha em segurança para guarda-corpos, coberturas e fachadas residenciais."
      },
      {
        question: "Como a Serra-Ferro garante a estanqueidade em fechamentos de sacadas?",
        answer: "Nosso sistema conta com perfis de vedação de silicone maciço nas junções, escovas hidrófugas de alta densidade e canais de drenagem esculpidos na própria estrutura de alumínio para guiar a água da chuva acumulada com vento forte para o exterior do edifício. A estanqueidade absoluta é garantida por nós em contrato físico registrado."
      },
      {
        question: "Quais são os cuidados tomados no içamento de vidros de grande formato?",
        answer: "Nossa equipe realiza uma vistoria técnica prévia no local, medindo as condições de vento e espaço para içamento. Utilizamos equipamentos modernos de sucção a vácuo (ventosas pneumáticas), cabos de altíssima resistência e profissionais especializados com EPIs completos de segurança, eliminando qualquer risco para o seu imóvel ou vizinhos."
      },
      {
        question: "Os espelhos de cristal da Serra-Ferro mancham ou oxidam com o tempo?",
        answer: "Não. Nós trabalhamos exclusivamente com espelhos de cristal de fabricantes globais que possuem camadas de proteção contra umidade, incluindo fundo de prata com camada de cobre protetora e pintura anticorrosiva. A instalação é feita usando apenas colas de poliuretano de cura neutra, impedindo reações químicas."
      },
      {
        question: "Qual é a garantia oferecida para os serviços e vedações de vidraçaria?",
        answer: "Oferecemos garantia de até 5 anos para todos os nossos serviços e instalações de vidraçaria premium (como guarda-corpos e fechamentos), o que engloba eventuais vazamentos, ressecamento de borrachas de vedação e folgas de funcionamento das ferragens estruturais."
      }
    ],
    serralheria: [
      {
        question: "Quais tratamentos anticorrosivos a Serra-Ferro aplica no aço para evitar ferrugem?",
        answer: "Todas as nossas estruturas de aço passam por tratamentos industriais severos. Aplicamos camadas de galvanização protetora por imersão a frio ou a quente (conforme o local do projeto) e finalizamos com primer especial e pintura eletrostática a pó curada em forno a 200°C. Isso impede a progressão de ferrugem por décadas, mesmo em áreas externas úmidas."
      },
      {
        question: "As escadas de aço monumentais ou plissadas costumam balançar ou vibrar?",
        answer: "Não. Nossas escadas de design passam por cálculos de fadiga mecânica e deflexão de carga pela nossa engenharia mecânica. Dimensionamos perfis estruturais ocultos internos e espessuras de chapa corretas para anular qualquer vibração elástica, garantindo estabilidade milimétrica, silêncio e conforto absoluto."
      },
      {
        question: "O que é o aço corten e como funciona seu acabamento natural?",
        answer: "O aço corten é uma liga metálica especial que desenvolve sob exposição climática uma película autoportante de pátina (óxido avermelhado) que impede a degradação interna do metal. Ele cria um visual rústico, contemporâneo e autoral de luxo, dispensando pinturas ou manutenções periódicas."
      },
      {
        question: "Como é garantido o esquadro e facilidade de giro em portas pivotantes gigantes?",
        answer: "Para portas de entrada gigantescas (padrão de 4 a 6 metros), nós soldamos uma treliça estrutural de aço reforçada dentro da folha que anula empenamentos induzidos pelo vento ou dilatação térmica. O giro é assegurado por pivots sob medida com rolamentos axiais blindados, tornando a abertura incrivelmente leve."
      },
      {
        question: "Vocês ememitam projeto executivo detalhado e ART assinado por engenheiro?",
        answer: "Sim. Todas as nossas escadas monumentais, mezaninos comerciais e coberturas metálicas pesadas contam com projeto executivo calculado digitalmente e emissão de ART (Anotação de Responsabilidade Técnica) por engenheiro civil habilitado junto ao CREA, certificando a estabilidade estrutural da obra."
      }
    ]
  };

  // B2B PARTNERSHIP SECTIONS CONFIGURATION (SESSION 6)
  const b2bMap = {
    esquadrias: {
      title: "Parceria Técnica de Esquadrias para Profissionais",
      description: "Oferecemos assessoria técnica minuciosa em todas as fases da sua obra, desde a fase de planta baixa para evitar retrabalhos de esquadro até a compatibilização cuidosa de trilhos e contramarcos.",
      points: [
        { title: "Condições Diferenciadas", description: "Tabela especial e faturamento direto de fábrica para escritórios de arquitetura e construtoras de luxo." },
        { title: "Compatibilização Ativa", description: "Nossos engenheiros validam vãos e trilhos junto às equipes civis para garantir vedação e esquadro perfeito." },
        { title: "Garantia e NFe", description: "Contrato formal e nota fiscal de faturamento integral de todos os componentes fornecidos." }
      ],
      buttonText: "Cadastrar Escritório via WhatsApp",
      image: "/assets/images/minimal_aluminum_frames_1782306022668.jpg"
    },
    vidracaria: {
      title: "Parceria Técnica de Vidraçaria para Profissionais",
      description: "Apoio consultivo especializado para arquitetos e construtoras de alto padrão. Dimensionamos vidros laminados temperados seguindo rigidamente a NBR 7199 e NBR 14718.",
      points: [
        { title: "Condições Comerciais Exclusivas", description: "Tabela especial com possibilidade de faturamento corporativo para construtores e designers em São Paulo." },
        { title: "Projeto Executivo e Memorial", description: "Cálculos de cargas horizontais de vento e dimensionamento preciso da espessura de vidros de segurança." },
        { title: "Instalação com Equipe Própria", description: "Instaladores próprios treinados e certificados nas NR-35 (Trabalho em Altura) com logística de içamento completa." }
      ],
      buttonText: "Cadastrar Escritório via WhatsApp",
      image: "/assets/images/modern_facade_glass_1782306036555.jpg"
    },
    serralheria: {
      title: "Parceria Técnica de Serralheria para Profissionais",
      description: "Facilitamos a execução de projetos de aço de alta complexidade. Detalhamos em CAD 2D/3D suas escadas helicoidais, mezaninos de carga e portas monumentais de design.",
      points: [
        { title: "Comissionamento & Faturamento", description: "Excelente comissionamento B2B e facilidade de faturamento direto com pagamento parcelado de fábrica." },
        { title: "Laudos de Carga e ART", description: "Projetos validados por software de análise de esforços com fornecimento obrigatório de ART assinada." },
        { title: "Qualidade de Soldagem e Pintura", description: "Tratamento galvânico anticorrosivo severo e pintura com acabamento liso e livre de soldas aparentes." }
      ],
      buttonText: "Cadastrar Escritório via WhatsApp",
      image: "/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg"
    }
  };

  // LOCAL SECTIONS METADATA AND TITLES (SEO-OPTIMIZED)
  const headerMap = {
    esquadrias: {
      servicesTag: "SOLUÇÕES SOB MEDIDA",
      servicesTitle: "Esquadrias de Alumínio em SP: Serviços de Alto Padrão",
      servicesSubtitle: "Desenvolvemos projetos de esquadrias de alumínio estruturadas sob medida para atender às demandas arquitetônicas mais exigentes do mercado de luxo.",
      linesTag: "LINHAS TECNOLÓGICAS",
      linesTitle: "Linhas de Esquadrias de Alumínio: Escolha o Padrão do seu Projeto",
      linesSubtitle: "Compreenda de forma simples as principais linhas do mercado e escolha a opção técnica mais compatível com o design e tamanho dos vãos da sua obra.",
      casesTag: "CASES REAIS DE SUCESSO",
      casesTitle: "Projetos de Esquadrias de Alumínio Entregues em São Paulo",
      casesSubtitle: "Veja as obras residenciais e corporativas de alto padrão de esquadrias que executamos com perfeição matemática de esquadro na capital paulista e arredores.",
      testimonialsTag: "SATISFAÇÃO DE VERDADE",
      testimonialsTitle: "Depoimentos de Quem Escolheu Nossas Esquadrias em São Paulo",
      testimonialsSubtitle: "A opinião de quem vive a experiência técnica e de bem-estar das nossas esquadrias no dia a dia.",
      faqTag: "DÚVIDAS TÉCNICAS E DE CRONOGRAMA",
      faqTitle: "Esclarecimentos Técnicos e Dúvidas Frequentes",
      faqSubtitle: "Clique nas perguntas abaixo para expandir e ler as respostas completas de engenharia elaboradas pela nossa equipe técnica.",
      contactTitle: "Gostaria de um Orçamento de Esquadrias de Alumínio em São Paulo?",
      contactSubtitle: "Atendimento técnico ágil e faturamento facilitado. Chame agora no WhatsApp para falar diretamente com nosso comercial técnico ou agendar uma medição gratuita in loco."
    },
    vidracaria: {
      servicesTag: "SOLUÇÕES EM VIDRO PREMIUM",
      servicesTitle: "Vidraçaria em São Paulo: Serviços e Vidros de Alto Padrão",
      servicesSubtitle: "Buscando por uma vidraçaria em São Paulo de confiança? Projetamos guarda-corpos autoportantes, fechamentos de sacadas panorâmicas, coberturas de vidro e espelhos de cristal de alta definição sob medida.",
      linesTag: "SOLUÇÕES TECNOLÓGICAS EM VIDRO",
      linesTitle: "Tipos de Vidro Premium: Escolha a Tecnologia do seu Projeto",
      linesSubtitle: "Diferencie com clareza os nossos tipos e linhas de vidros estruturais para decidir pela melhor opção de segurança, transparência e controle térmico.",
      casesTag: "CASES DE VIDRAÇARIA PREMIUM",
      casesTitle: "Projetos de Vidraçaria de Alto Padrão Entregues em São Paulo",
      casesSubtitle: "Explore as instalações de alto luxo da nossa vidraçaria em São Paulo, incluindo vedações contra ventos e chuvas na capital paulista e Grande SP.",
      testimonialsTag: "DEPOIMENTOS DE VERDADE",
      testimonialsTitle: "Depoimentos sobre nossa Vidraçaria em São Paulo",
      testimonialsSubtitle: "Quem contratou nossa vidraçaria em São Paulo para espelhos monumentais, fechamentos de sacada e guarda-corpos recomenda nosso atendimento e precisão técnica.",
      faqTag: "DÚVIDAS TÉCNICAS E DE SEGURANÇA",
      faqTitle: "Dúvidas Frequentes e Esclarecimentos sobre Vidraçaria",
      faqSubtitle: "Saiba mais sobre as especificações de espessuras, métodos de fixação e normas da ABNT para vidros de engenharia.",
      contactTitle: "Solicite Orçamento de Vidraçaria em São Paulo com a Serra-Ferro",
      contactSubtitle: "Envie-nos suas medidas ou projeto em PDF e tenha uma resposta técnica ágil com faturamento direto. Fale conosco pelo WhatsApp agora."
    },
    serralheria: {
      servicesTag: "SERRALHERIA DE DESIGN",
      servicesTitle: "Serralheria em São Paulo: Estruturas Metálicas e Serralheria Fina",
      servicesSubtitle: "A Serra-Ferro é sua serralheria em São Paulo de referência para escadas plissadas esculturais, mezaninos industriais calculados, brises em laser CNC e portas pivotantes monumentais sob medida.",
      linesTag: "LINHAS E ESTILOS METÁLICOS",
      linesTitle: "Linhas de Serralheria e Estruturas: Escolha a Força e a Estética",
      linesSubtitle: "Conheça nossas linhas que unem a resistência mecânica impecável ao acabamento fino totalmente lixado e invisível ao toque.",
      casesTag: "CASES DE SERRALHERIA FINA",
      casesTitle: "Projetos de Serralheria em São Paulo de Alto Padrão",
      casesSubtitle: "Confira as escadas plissadas e mezaninos calculados de nossa serralheria em São Paulo executados com excelência na capital e arredores.",
      testimonialsTag: "SATISFAÇÃO DO CLIENTE",
      testimonialsTitle: "Depoimentos sobre nossa Serralheria em São Paulo",
      testimonialsSubtitle: "Arquitetos e construtores de luxo recomendam os serviços de serralheria em São Paulo da Serra-Ferro pelo acabamento fino e pontualidade física garantida.",
      faqTag: "LAUDOS, TRATAMENTOS E ENGENHARIA",
      faqTitle: "Dúvidas Técnicas Frequentes sobre Serralheria de Design",
      faqSubtitle: "Esclareça suas dúvidas sobre tratamentos contra ferrugem, cálculo estrutural de mezaninos e emissão de ART de CREA.",
      contactTitle: "Fale com nossa Serralheria em São Paulo e Peça um Orçamento",
      contactSubtitle: "Tire sua escada monumental ou mezanino do papel de forma segura. Fale diretamente com o nosso engenheiro comercial e solicite sua cotação por WhatsApp."
    }
  };

  const currentServices = servicesMap[category];
  const currentLines = linesMap[category];
  const currentCases = region ? region.cases : casesMap[category];
  const currentTestimonials = region ? region.testimonials : testimonialsMap[category];
  const currentFAQ = region ? region.faqs : faqMap[category];
  const currentB2B = b2bMap[category];
  const currentHeaders = region ? { ...headerMap[category], ...region.headers } : headerMap[category];

  // Configuração do bloco de links internos entre as páginas da categoria (link building local).
  const regionLinkMap = {
    esquadrias: { spSlug: ESQUADRIAS_SP_SLUG, regions: ESQUADRIAS_REGIONS, label: 'Esquadrias de Alumínio' },
    vidracaria: { spSlug: VIDRACARIA_SP_SLUG, regions: VIDRACARIA_REGIONS, label: 'Vidraçaria' },
    serralheria: { spSlug: SERRALHERIA_SP_SLUG, regions: SERRALHERIA_REGIONS, label: 'Serralheria' },
  };
  const regionLinks = regionLinkMap[category];
  const currentRegionSlug = region ? region.slug : regionLinks.spSlug;

  return (
    <div className="space-y-20 pb-20 animate-fade-in" id={`category-pillar-${category}`}>
      
      {/* SESSÃO 1: HERO BANNER (FORMATO EXATAMENTE IGUAL AO BANNER DA HOME, SEM SER ROTATIVO) */}
      <section className="relative w-full h-[500px] sm:h-[540px] md:h-[580px] lg:h-[620px] overflow-hidden border-b border-neutral-200 bg-neutral-950 flex items-center" id="hero-section">
        
        {/* Static Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentBanner.image}
            alt={`${(currentBanner.titleNormal + currentBanner.titleHighlight + currentBanner.titleSuffix).trim()} — Serra Ferro`}
            title={`${currentCategoryData.title} | Serra Ferro`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-neutral-950/40 pointer-events-none" />
        </div>

        {/* Decorative Grid Mesh overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-8 sm:pt-12">
          <div className="max-w-2xl space-y-4">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>{currentBanner.tag}</span>
            </div>
            
            {/* Title with dynamic text */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight">
              {currentBanner.titleNormal}
              <span className="text-brand-orange relative inline-block">{currentBanner.titleHighlight}</span>
              {currentBanner.titleSuffix}
            </h1>
            
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-xl">
              {currentBanner.description}
            </p>

            {/* Pulsating CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-lg font-display text-[11px] sm:text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-orange/20 cursor-pointer animate-pulse-orange"
                id="hero-cta-primary"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                Falar com Comercial Técnico
              </a>
              <button
                onClick={() => {
                  const targetEl = document.getElementById("proximas-secoes");
                  if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white text-white backdrop-blur-sm rounded-lg font-display text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/10"
                id="hero-cta-secondary"
              >
                Ver Detalhes do Serviço
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
            </div>

            {/* Bottom highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-5 pt-6 border-t border-white/10 max-w-2xl text-left text-neutral-300">
              {currentBanner.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold">
                  <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ANCORAGEM DE CONTEÚDO */}
      <div id="proximas-secoes" />

      {/* SESSÃO LOCAL: CONTEXTO DA REGIÃO (apenas em páginas regionais) */}
      {region && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                {region.localIntro.tag}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
                {region.localIntro.title}
              </h2>
              {region.localIntro.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="md:col-span-5">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-widest block">
                  POR QUE A SERRA-FERRO EM {cityLabel.toUpperCase()}
                </span>
                <ul className="space-y-2.5">
                  {region.localIntro.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-xs text-brand-charcoal font-medium">
                      <Check className="w-4 h-4 text-brand-orange mr-2 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SESSÃO 2: PRODUTOS E SERVIÇOS ATENDIDOS (ALTO PADRÃO COM IMAGENS REAIS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
            {currentHeaders.servicesTag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
            {currentHeaders.servicesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed max-w-xl mx-auto font-medium">
            {currentHeaders.servicesSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={`${service.title} — ${currentCategoryData.title} em ${cityLabel}`}
                  title={`${service.title} | ${currentCategoryData.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-brand-orange uppercase bg-neutral-900/90 px-2 py-1 rounded">
                  SERVIÇO ESPECIALIZADO 0{idx + 1}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-base sm:text-lg font-bold text-brand-charcoal">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de consultar um orçamento para o serviço de ${service.title} sob medida para a minha obra.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-orange hover:text-brand-orange/85 transition-colors group/link cursor-pointer"
                  >
                    Consultar Orçamento Técnico
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button for Sessão 2 */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink(`Olá! Gostaria de falar com o comercial técnico da Serra-Ferro para solicitar um orçamento de ${currentCategoryData.title} de alto padrão sob medida.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-lg font-display text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-brand-orange/20 cursor-pointer"
          >
            <Phone className="w-4 h-4 mr-2" />
            Orçar Meus Serviços Sob Medida de Alto Padrão
          </a>
        </div>
      </section>

      {/* SESSÃO 3: LINHAS DE PRODUTOS / SOLUÇÕES TECNOLÓGICAS (FOTOS EXCLUSIVAS) */}
      <section className="bg-neutral-950 text-white py-16 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              {currentHeaders.linesTag}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentHeaders.linesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed max-w-xl mx-auto font-medium">
              {currentHeaders.linesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentLines.map((line, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-orange/40 transition-all group">
                <div className="h-48 overflow-hidden bg-neutral-800 relative">
                  <img
                    src={line.image}
                    alt={`${line.name} — ${currentCategoryData.title} sob medida em ${cityLabel}`}
                    title={`${line.name} | ${currentCategoryData.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-85" />
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                        {line.name}
                      </h3>
                      <span className="inline-block px-2 py-0.5 bg-brand-orange/10 border border-brand-orange/30 rounded text-brand-orange font-mono text-[9px] font-bold uppercase shrink-0 ml-2">
                        {line.badge}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                      {line.description}
                    </p>
                    
                    <div className="border-t border-neutral-800/80 pt-4">
                      <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">DIFERENCIAIS EXCLUSIVOS:</span>
                      <ul className="space-y-2">
                        {line.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center text-xs text-neutral-200 font-medium">
                            <Check className="w-4 h-4 text-brand-orange mr-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de obter mais informações técnicas e orçar projetos utilizando a linha ${line.name} para a minha obra.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-neutral-800 hover:bg-brand-orange text-white text-center font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    Especificar esta Linha
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÃO 4: 6 CASES ESPECÍFICOS EM SÃO PAULO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
            {currentHeaders.casesTag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
            {currentHeaders.casesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed max-w-xl mx-auto font-medium">
            {currentHeaders.casesSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCases.map((project, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={`${project.title} — obra de ${currentCategoryData.title} em ${cityLabel} | Serra Ferro`}
                  title={`${project.title} | ${currentCategoryData.title} em ${cityLabel}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-neutral-900/90 text-brand-orange font-mono text-[9px] font-bold uppercase rounded border border-brand-orange/30">
                  {project.highlight}
                </span>
                <span className="absolute bottom-3 left-4 text-[10px] font-mono font-bold text-white flex items-center">
                  <MapPin className="w-3 h-3 text-brand-orange mr-1 shrink-0" />
                  {project.region}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-sm sm:text-base font-bold text-brand-charcoal line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100">
                  <a
                    href={getWhatsAppLink(`Olá! Vi o case de sucesso "${project.title}" em ${cityLabel} e gostaria de obter um orçamento de alto padrão semelhante sob medida para minha obra.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-orange hover:text-brand-orange/85 transition-colors group/link cursor-pointer"
                  >
                    Orçar Projeto Semelhante
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button for Sessão 4 */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink(`Olá! Vi os cases técnicos de ${currentCategoryData.title} em ${cityLabel} e gostaria de obter um orçamento técnico sob medida para o meu projeto de arquitetura.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-lg font-display text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-brand-orange/20 cursor-pointer animate-pulse-orange"
          >
            <Phone className="w-4 h-4 mr-2" />
            Iniciar Meu Projeto Sob Medida com a Serra-Ferro
          </a>
        </div>
      </section>

      {/* SESSÃO 5: DEPOIMENTOS REALISTAS DE CLIENTES */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              {currentHeaders.testimonialsTag}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
              {currentHeaders.testimonialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed max-w-xl mx-auto font-medium">
              {currentHeaders.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm space-y-6">
                <p className="text-xs sm:text-sm text-brand-muted italic leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3.5 border-t border-neutral-100 pt-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold font-display text-sm shrink-0">
                    {testimonial.author.split(' ')[1]?.[0] || 'SF'}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-charcoal">{testimonial.author}</span>
                    <span className="block text-[10px] text-brand-muted font-mono">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button for Sessão 5 */}
          <div className="text-center mt-12">
            <a
              href={getWhatsAppLink(`Olá! Gostaria de conversar com o comercial técnico e ter a entrega no prazo e a qualidade técnica da Serra-Ferro garantidas no meu projeto de ${currentCategoryData.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-lg font-display text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-brand-orange/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Garantir Minha Entrega no Prazo por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SESSÃO 6: PARCERIAS B2B (ARQUITETOS, ENGENHEIROS, CONSTRUTORAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 space-y-4 text-left">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              CANAL DE ESPECIFICADORES B2B
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
              {currentB2B.title}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
              {currentB2B.description}
            </p>
            <div className="space-y-3.5 pt-2">
              {currentB2B.points.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-brand-orange mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-brand-charcoal block">{point.title}</span>
                    <p className="text-[11px] text-brand-muted mt-0.5 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-2">
              <a
                href={getWhatsAppLink(`Olá! Gostaria de falar com o comercial técnico da Serra-Ferro sobre o nosso canal de parcerias B2B para arquitetos/construtores de ${currentCategoryData.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-sm cursor-pointer"
              >
                {currentB2B.buttonText}
              </a>
            </div>
          </div>

          {/* Lado Direito: Imagem representativa de Engenharia e Parceria */}
          <div className="md:col-span-7">
            <img
              src={currentB2B.image}
              alt={`Parceria B2B em ${currentCategoryData.title} para arquitetos e construtoras em ${cityLabel} — Serra Ferro`}
              title={`Parceria B2B — ${currentCategoryData.title} | Serra Ferro`}
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* SESSÃO 7: FAQ TOGGLE / ACORDEOM DE OBJEÇÕES TÉCNICAS */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
              {currentHeaders.faqTag}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
              {currentHeaders.faqTitle}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-lg mx-auto leading-relaxed">
              {currentHeaders.faqSubtitle}
            </p>
          </div>

          {/* Accordion Component */}
          <div className="space-y-4">
            {currentFAQ.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between font-display font-bold text-brand-charcoal text-sm sm:text-base focus:outline-none select-none cursor-pointer"
                  >
                    <span className="flex items-center space-x-3 text-left">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4.5 h-4.5 text-brand-orange shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4.5 h-4.5 text-brand-muted shrink-0 ml-2" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed pl-7 border-t border-neutral-100/60 bg-neutral-50/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button for Sessão 7 */}
          <div className="text-center mt-12 border-t border-neutral-200/50 pt-10">
            <p className="text-xs text-brand-muted mb-4 font-semibold">Ainda tem dúvidas técnicas ou de prazos sobre a sua obra?</p>
            <a
              href={getWhatsAppLink(`Olá! Tenho uma dúvida técnica específica sobre meu projeto de ${currentCategoryData.title} e gostaria de falar com um engenheiro de soluções da Serra-Ferro.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg font-display text-xs font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              Tirar Dúvidas Técnicas via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SESSÃO DE REGIÕES: LINK BUILDING INTERNO ENTRE AS PÁGINAS DA CATEGORIA */}
      {regionLinks && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                ATENDIMENTO POR REGIÃO
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-brand-charcoal tracking-tight mt-1">
                {regionLinks.label} por Cidade e Região
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Fabricação e instalação sob medida com equipe própria. Veja a página da sua cidade:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[{ slug: regionLinks.spSlug, city: 'São Paulo' }, ...regionLinks.regions].map((item) => {
                const isCurrent = item.slug === currentRegionSlug;
                if (isCurrent) {
                  return (
                    <span
                      key={item.slug}
                      className="inline-flex items-center px-3.5 py-2 rounded-lg bg-brand-orange text-white text-xs font-bold cursor-default"
                      aria-current="page"
                    >
                      <MapPin className="w-3.5 h-3.5 mr-1.5" />
                      {item.city}
                    </span>
                  );
                }
                return (
                  <a
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setView(item.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center px-3.5 py-2 rounded-lg bg-white border border-neutral-200 text-brand-charcoal hover:border-brand-orange hover:text-brand-orange text-xs font-semibold transition-colors"
                    title={`Esquadrias de Alumínio em ${item.city}`}
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                    {item.city}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SESSÃO 8: CONTATO (REPLICADO EXATAMENTE IGUAL À PAGINA HOME COM DIRECIONAMENTO EXCLUSIVO WHATSAPP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="contato-secao-categoria">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
            FALE CONOSCO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight mt-1">
            {currentHeaders.contactTitle}
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl mx-auto leading-relaxed font-medium">
            {currentHeaders.contactSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card de Informações */}
          <div className="md:col-span-5 bg-brand-charcoal text-white rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block">PROJETOS EXCLUSIVOS</span>
              <h3 className="font-display text-base font-bold text-white">Sede Operacional e Comercial</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Trabalhamos exclusivamente sob medida. Fale com os nossos engenheiros de projetos para detalhar os itens da sua obra.
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
              href={getWhatsAppLink(`Olá! Gostaria de falar com o comercial técnico da Serra-Ferro para solicitar um orçamento de ${currentCategoryData.title} para minha obra.`)}
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

    </div>
  );
}
