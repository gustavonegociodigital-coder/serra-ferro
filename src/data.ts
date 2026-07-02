/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, Testimonial, BlogPost, FAQItem } from './types';

export const CITIES_LIST = [
  { slug: 'sao-paulo', name: 'São Paulo', initials: 'SP', region: 'Capital' },
  { slug: 'barueri', name: 'Barueri', initials: 'SP', region: 'Grande SP' },
  { slug: 'alphaville', name: 'Alphaville', initials: 'SP', region: 'Grande SP' },
  { slug: 'tambore', name: 'Tamboré', initials: 'SP', region: 'Grande SP' },
  { slug: 'granja-viana', name: 'Granja Viana', initials: 'SP', region: 'Grande SP' },
  { slug: 'santana-de-parnaiba', name: 'Santana de Parnaíba', initials: 'SP', region: 'Grande SP' },
  { slug: 'cotia', name: 'Cotia', initials: 'SP', region: 'Grande SP' },
  { slug: 'osasco', name: 'Osasco', initials: 'SP', region: 'Grande SP' },
  { slug: 'guarulhos', name: 'Guarulhos', initials: 'SP', region: 'Grande SP' },
];

export const SERVICES_CATEGORIES = {
  esquadrias: {
    title: 'Esquadrias de Alumínio',
    description: 'Projetos sob medida em alumínio de alta performance para vãos amplos, garantindo isolamento acústico, vedação e design contemporâneo.',
    subservices: [
      'Portas de Alumínio (Giro, Pivotante, de Correr)',
      'Janelas Acústicas e Integradas (Automatizadas)',
      'Fachadas Autoportantes e Pele de Vidro',
      'Coberturas de Alumínio e Vidro Herméticas',
      'Projetos Especiais sob Medida para Alto Padrão'
    ],
    norms: ['NBR 10821 (Esquadrias para edificações)', 'NBR 15575 (Desempenho térmico e acústico)']
  },
  vidracaria: {
    title: 'Vidraçaria em São Paulo',
    description: 'Sua vidraçaria em São Paulo de alto padrão. Oferecemos serviços de vidraçaria premium em São Paulo com vidros temperados, laminados de segurança e espelhos monumentais.',
    subservices: [
      'Guarda-Corpo de Vidro com Fixação por Botões de Inox ou Canalete Embutido',
      'Fechamento de Sacada Retrátil (Sistema Europeu sem Roldanas com Vedação Máxima)',
      'Box de Banheiro Premium (Roldanas Aparentes em Latão Cromado ou Preto Fosco)',
      'Espelhos de Cristal de Alta Definição (Bisotados, Lapidados e com Iluminação LED)',
      'Divisórias de Vidro Acústico para Ambientes Corporativos e Residenciais'
    ],
    norms: ['NBR 7199 (Vidros na construção civil)', 'NBR 14718 (Guarda-corpos para edificação)']
  },
  serralheria: {
    title: 'Serralheria em São Paulo',
    description: 'Sua serralheria em São Paulo de alto padrão. Serviços de serralheria fina em São Paulo com soldas 100% invisíveis ao toque, acabamento impecável e robustez estrutural.',
    subservices: [
      'Portões Automáticos e Manuais de Alto Padrão',
      'Escadas Metálicas Especiais (Helicoidais, Plissadas, Viga Central)',
      'Estruturas Metálicas e Mezaninos Residenciais/Comerciais',
      'Grades de Proteção e Corrimãos de Segurança',
      'Coberturas Metálicas com Telha Termoacústica ou Policarbonato'
    ],
    norms: ['NBR 8800 (Projeto de estruturas de aço)']
  }
};

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'obra-1',
    title: 'Residência Alpha III',
    category: 'esquadrias',
    serviceType: 'Esquadrias de Alumínio Linha Gold',
    location: 'Alphaville, Barueri',
    projectType: 'obra_nova',
    description: 'Projeto executado fielmente ao desenho do arquiteto, com portas de correr de 6 metros de largura integrando a sala de estar à área gourmet com trilhos embutidos.',
    details: [
      'Perfil Linha Gold com pintura eletrostática preta microtexturizada',
      'Vidros laminados de 10mm com isolamento acústico e proteção UV',
      'Roldanas de inox duplas com rolamento blindado para deslizamento ultra-suave',
      'Zero degrau: trilho inferior totalmente embutido no piso com sistema de drenagem oculto'
    ]
  },
  {
    id: 'obra-2',
    title: 'Cobertura Duplex Jardins',
    category: 'vidracaria',
    serviceType: 'Guarda-Corpo Autoportante e Fechamento',
    location: 'Jardins, São Paulo',
    projectType: 'reforma',
    description: 'Instalação de guarda-corpo autoportante em vidro laminado temperado fixado em perfil canal de alumínio embutido na viga, proporcionando total transparência.',
    details: [
      'Vidro Laminado Temperado 10+10mm com película de PVB estrutural',
      'Perfil canal com fixação mecânica de alta resistência homologada',
      'Acabamento em inox polido na borda superior',
      'Atendimento rigoroso à norma NBR 14718 para esforços horizontais'
    ]
  },
  {
    id: 'obra-3',
    title: 'Loft Industrial Pinheiros',
    category: 'serralheria',
    serviceType: 'Mezanino e Escada Plissada',
    location: 'Pinheiros, São Paulo',
    projectType: 'reforma',
    description: 'Mezanino com vigas metálicas aparentes e escada plissada com degraus em chapa de aço dobrada, com acabamento em pintura epóxi fosca.',
    details: [
      'Estrutura em perfil W de aço estrutural calculado para 350 kg/m²',
      'Escada plissada com solda robotizada e acabamento impecável, sem rebarbas',
      'Corrimão de aço redondo em preto fosco texturizado',
      'Piso em painel wall com revestimento acústico emborrachado'
    ]
  },
  {
    id: 'obra-4',
    title: 'Mansão Tamboré 10',
    category: 'esquadrias',
    serviceType: 'Fachada em Pele de Vidro e Janelas Integradas',
    location: 'Tamboré, Santana de Parnaíba',
    projectType: 'obra_nova',
    description: 'Fachada imponente de 9 metros de altura com sistema Structural Glazing e janelas de dormitórios com persiana integrada automatizada por controle remoto e Alexa.',
    details: [
      'Sistema Grid de pele de vidro com fixações estruturais ocultas',
      'Vidros refletivos de controle solar prata neutro minimizando ganho de calor',
      'Janelas com motores somfy integrados de alta durabilidade e baixo ruído',
      'Estanqueidade testada por aspersão de água pressurizada pós-instalação'
    ]
  },
  {
    id: 'obra-5',
    title: 'Apartamento Granja Viana',
    category: 'vidracaria',
    serviceType: 'Fechamento de Sacada Premium',
    location: 'Granja Viana, Cotia',
    projectType: 'reforma',
    description: 'Fechamento de área gourmet com sistema europeu retrátil de painéis de vidro independentes, sem roldanas suspensas, otimizando a vedação de chuvas fortes e ventos.',
    details: [
      'Sistema de pivotamento sobre trilhos de polímero autolubrificantes',
      'Vidros temperados de 10mm com película de segurança interna',
      'Perfis de alumínio anodizado inox',
      'Escorrimento interno de água direcionado por canaletas integradas'
    ]
  },
  {
    id: 'obra-6',
    title: 'Sede Corporativa Osasco',
    category: 'serralheria',
    serviceType: 'Portão Industrial Autoportante e Fachada Metálica',
    location: 'Centro, Osasco',
    projectType: 'comercial',
    description: 'Portão autoportante para entrada de carretas (sem trilho no piso) e fechamento de fachada com painéis expandidos de aço galvanizado.',
    details: [
      'Portão com comprimento de 8 metros suspenso com contrabalanço de precisão',
      'Motor industrial com abertura rápida em 6 segundos',
      'Painéis em chapa expandida galvanizada a fogo contra intempéries',
      'Estrutura dimensionada para ventos de até 120 km/h'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'dep-1',
    name: 'Roberto Camargo',
    role: 'Cliente Residencial',
    text: 'A Serra-Ferro salvou minha obra. Estávamos com a obra travada há dois meses porque outro fornecedor recebeu o sinal e sumiu. A equipe da Serra-Ferro fez a visita, emitiu contrato registrado, cronograma por escrito e entregou todas as esquadrias Linha Gold com 5 dias de antecedência. O acabamento de vedação nas chuvas de SP é espetacular.',
    location: 'Tamboré, Barueri',
    rating: 5,
    projectDescription: 'Esquadrias de Alumínio e Fechamentos de Vidro'
  },
  {
    id: 'dep-2',
    name: 'Mariana Vasconcellos',
    role: 'Arquiteto(a)',
    company: 'Vasconcellos Arquitetura',
    text: 'Como arquiteta, o meu maior pavor é desenhar um detalhe delicado e o fornecedor executar de qualquer jeito para economizar esforço. A Serra-Ferro executa exatamente o que desenhamos. Eles refinam as seções transversais e mandam amostras físicas dos perfis antes de fabricar. A solda da escada plissada do meu último projeto ficou perfeita, totalmente invisível.',
    location: 'Jardins, São Paulo',
    rating: 5,
    projectDescription: 'Escada Metálica Especial e Guarda-corpos'
  },
  {
    id: 'dep-3',
    name: 'Eng. Ricardo Guedes',
    role: 'Engenheiro(a)',
    company: 'R. Guedes Engenharia & Construções',
    text: 'Trabalho com a Serra-Ferro há 5 anos na execução de casas de alto padrão. É uma tranquilidade contratual gigante. Faturamento direto, emissão de Notas Fiscais corretas, documentação técnica (memórias de cálculo de vento e vidros) e, principalmente, pontualidade de canteiro. Instalação limpa, sem estragar as paredes já pintadas.',
    location: 'Alphaville, Santana de Parnaíba',
    rating: 5,
    projectDescription: 'Fachada Glazing e Esquadrias sob Medida'
  },
  {
    id: 'dep-4',
    name: 'Sandra de Oliveira',
    role: 'Síndico(a)',
    company: 'Condomínio Residencial Parque Real',
    text: 'Contratamos a Serra-Ferro para a reforma completa dos guarda-corpos da piscina e do mezanino social. Apresentaram o laudo técnico ART, seguiram rigorosamente as normas NBR 14718 e o cronograma foi apresentado em assembleia. A prestação de contas foi facilitada pela organização fiscal deles.',
    location: 'Morumbi, São Paulo',
    rating: 5,
    projectDescription: 'Reforma de Guarda-corpos de Vidro'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Norma NBR 10821: O que você precisa exigir do seu fornecedor de esquadrias de alumínio',
    slug: 'norma-nbr-10821-esquadrias-de-aluminio',
    excerpt: 'Entenda os ensaios de pressão de vento e estanqueidade que garantem que sua janela de alto padrão não vai vazar na próxima tempestade.',
    content: `Ao investir em esquadrias de alumínio de alto padrão em São Paulo, o proprietário muitas vezes foca exclusivamente na estética do perfil e na espessura do vidro. No entanto, o verdadeiro diferencial de qualidade reside no desempenho invisível regulado pela **NBR 10821**.

Esta norma técnica estabelece os requisitos mínimos de desempenho para esquadrias externas em edificações comerciais e residenciais, abrangendo:

1. **Resistência às cargas de vento:** Em regiões de alta altitude ou andares elevados, a pressão do vento exige perfis com momentos de inércia rigorosamente calculados. Esquadrias subdimensionadas empenam, geram ruídos e podem até colapsar.
2. **Estanqueidade à água:** A esquadria precisa conter a entrada de água sob chuvas torrenciais associadas a ventos fortes. Isso exige canais de drenagem generosos, guarnições de borracha EPDM de alta resiliência e escovas de vedação adequadas.
3. **Isolamento acústico:** Ambientes urbanos na Grande São Paulo exigem atenuação acústica para garantir o conforto interno, o que requer perfis de excelente encaixe mecânico e vidros laminados ou duplos.

**Como a Serra-Ferro garante a conformidade?**
Todos os nossos perfis são cortados e montados em nossa fábrica própria utilizando maquinários pneumáticos que garantem esquadro perfeito (90 graus exatos). Antes da entrega final em obra, realizamos testes práticos de estanqueidade por aspersão pressurizada nas nossas instalações e no canteiro para garantir vedação total. Não corra riscos com oficinas de fundo de quintal: exija laudo e o selo de conformidade NBR 10821.`,
    date: '2026-05-12',
    category: 'normas',
    readTime: '5 min de leitura'
  },
  {
    id: 'post-2',
    title: 'Diferenças essenciais entre Esquadrias de Alumínio e Esquadrias de PVC',
    slug: 'diferencas-esquadrias-aluminio-x-pvc',
    excerpt: 'Análise técnica comparativa de durabilidade, manutenção, resistência mecânica e flexibilidade estética para projetos de alto padrão.',
    content: `Na hora de definir o fechamento de grandes vãos na sua obra, a dúvida entre esquadrias de alumínio e PVC é recorrente entre arquitetos e proprietários. Ambas as tecnologias oferecem excelentes benefícios, mas possuem comportamentos técnicos muito distintos em projetos de alto padrão.

### 1. Resistência Mecânica e Grandes Vãos
O alumínio é um metal estrutural com altíssima relação resistência/peso. Isso significa que conseguimos fabricar portas de correr com folhas de 3 metros de altura e perfis esbeltos, maximizando a área envidraçada e a luminosidade. O PVC, mesmo reforçado com aço em seu interior, exige seções transversais muito mais robustas e largas para vencer as mesmas cargas de vento, o que pode comprometer a leveza visual do projeto de arquitetura contemporânea.

### 2. Estabilidade de Cor e Durabilidade no Clima de SP
O alumínio passa pelo processo de anodização ou pintura eletrostática a pó. Na Serra-Ferro, trabalhamos com tintas poliéster de alta resistência ao intemperismo (raios UV), garantindo que perfis pretos ou bronze microtexturizados mantenham o tom original por décadas sem desbotar. O PVC de alta qualidade possui aditivos contra UV, porém versões mais econômicas ou expostas a sol intenso podem sofrer leve amarelamento ou ressecamento superficial ao longo dos anos.

### 3. Isolamento Térmico e Acústico
O PVC é um excelente isolante térmico natural por não ser metal. No entanto, o alumínio moderno de alto padrão consegue resultados equivalentes ou superiores através de perfis com câmaras internas calibradas, borrachas de vedação vulcanizadas de alta densidade (EPDM) e vidros duplos com câmara de argônio.

### Conclusão: Qual escolher?
Para projetos modernos com vãos monumentais, fachadas limpas (pele de vidro) e linhas estéticas ultra-delgadas, o **alumínio** é a escolha ideal devido à sua flexibilidade construtiva e robustez estrutural.`,
    date: '2026-06-03',
    category: 'técnico',
    readTime: '6 min de leitura'
  },
  {
    id: 'post-3',
    title: 'Guarda-Corpo de Vidro: Como aliar segurança total e design invisível',
    slug: 'guarda-corpo-de-vidro-seguranca-design',
    excerpt: 'As regras da NBR 14718 para guarda-corpos e as técnicas de fixação invisível por canaletes embutidos no piso.',
    content: `O guarda-corpo de vidro tornou-se sinônimo de sofisticação em coberturas, escadas e sacadas integradas na Grande São Paulo. Ele protege contra quedas sem obstruir a vista urbana ou o paisagismo. No entanto, por se tratar de um item de segurança crítica, sua especificação não aceita amadorismos.

### A Escolha Crucial do Vidro: Temperado vs. Laminado
Segundo a **NBR 7199**, guarda-corpos **devem obrigatoriamente utilizar Vidro Laminado** (composto por duas ou mais chapas unidas por uma película plástica elástica de PVB ou ionômero) ou **Laminado Temperado**.
*   **Por que não usar apenas vidro temperado comum?** Se um vidro temperado comum quebrar, ele se estilhaça em milhares de pequenos pedaços e o vão fica totalmente aberto imediatamente.
*   **A segurança do laminado:** No caso de quebra de uma ou ambas as chapas do vidro laminado, os fragmentos continuam colados na película plástica intermediária, mantendo a barreira física estruturada até que a substituição seja executada.

### Métodos de Fixação que Valorizam a Arquitetura
Existem três formas principais de fixação de alto padrão:
1.  **Canalete de Alumínio Embutido (Invisível):** O perfil em formato de 'U' é chumbado diretamente dentro da viga de concreto ou sob o piso acabado. O vidro entra nesse trilho e é travado com calços de nylon e silicone de cura neutra de alta densidade. O resultado é um vidro que parece brotar diretamente do chão.
2.  **Botões Laterais de Aço Inox AISI 314/316:** Os botões cilíndricos sustentam o vidro pela face lateral da escada ou viga. Conferem um visual técnico, moderno e industrial.
3.  **Torres (Spigots) em Inox:** Pequenas pinças verticais chumbadas no chão seguram o vidro a cerca de 5cm do piso. Facilitam o escoamento de água em áreas de piscina.

Na Serra-Ferro, fornecemos ART (Anotação de Responsabilidade Técnica) assinada por engenheiro civil em todas as nossas instalações de guarda-corpos, garantindo que o sistema resista a impactos dinâmicos e estáticos em conformidade com a **NBR 14718**.`,
    date: '2026-06-18',
    category: 'decoração',
    readTime: '4 min de leitura'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Como funciona o processo de orçamento e quanto tempo demora?',
    answer: 'Nosso processo é consultivo e sob medida. Você entra em contato conosco pelo WhatsApp, descreve suas necessidades ou envia o projeto arquitetônico (se houver). Agendamos uma visita técnica gratuita no local da obra para conferência milimétrica dos vãos e compatibilização estrutural. Após a visita, enviamos um orçamento comercial detalhado com a descrição exata de perfis, vidros e cronograma em até 48 horas úteis.',
    category: 'Geral'
  },
  {
    question: 'Por que a Serra-Ferro solicita sinal/entrada na fabricação e como isso é seguro para mim?',
    answer: 'A fabricação de esquadrias, vidraçaria e serralheria de alto padrão é 100% personalizada por projeto: cada peça é cortada e usinada especificamente para as medidas da sua obra, inviabilizando sua reutilização em outros locais. O sinal de entrada é uma prática de mercado padrão usada para o provisionamento e compra dos perfis e vidros nobres junto aos extrudores. Para a sua total segurança, toda transação é blindada: emitimos Contrato de Prestação de Serviços registrado em cartório ou assinado digitalmente, Nota Fiscal de faturamento e um Cronograma Físico por escrito anexado com datas exatas de início e entrega.',
    category: 'Financeiro'
  },
  {
    question: 'Vocês possuem fábrica própria ou terceirizam a produção das esquadrias?',
    answer: 'Nós temos fábrica própria equipada com maquinário profissional pneumático de alta precisão para corte, usinagem e montagem de esquadrias e estruturas de aço. Toda a nossa verticalização (projeto técnico, fabricação e instalação) é realizada por nossa equipe interna de profissionais certificados. Isso nos permite controlar rigidamente a qualidade do acabamento, vedação e garantir o cumprimento exato do prazo combinado, sem depender de terceiros.',
    category: 'Fábrica'
  },
  {
    question: 'Qual é a garantia oferecida para os serviços prestados pela Serra-Ferro?',
    answer: 'Oferecemos garantia contratual robusta sobre a execução dos nossos serviços e funcionamento dos sistemas de esquadrias e vidraçaria. Isso cobre falhas de vedação (estanqueidade a água), infiltrações, desregulagem de roldanas e fechaduras, oxidação prematura de ferragens e falhas mecânicas sob condições normais de uso. Nossos componentes (perfis de alumínio, borrachas EPDM e vidros) são fornecidos pelos melhores produtores do Brasil e possuem certificações de durabilidade.',
    category: 'Garantia'
  },
  {
    question: 'Como vocês trabalham em parceria com arquitetos e engenheiros (rota B2B)?',
    answer: 'Temos um Programa de Parceria altamente qualificado para especificadores (B2B). Nós não "passamos por cima" do arquiteto: respeitamos fielmente o desenho conceitual do projeto, dando suporte técnico nas soluções de vãos, detalhes de encaixe de trilhos e indicação de vidros adequados por norma. Disponibilizamos amostras físicas de cores, perfis e ferragens para apresentação ao cliente final, além de comissionamento de parceria estruturado ou faturamento direto flexível conforme a preferência do escritório.',
    category: 'Parcerias'
  }
];
