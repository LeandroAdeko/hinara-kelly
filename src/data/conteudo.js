// Todo o texto do site fica aqui. Para trocar uma foto, coloque o arquivo em
// public/fotos/ e preencha o campo `src` (ex.: '/fotos/retrato.jpg').

export const perfil = {
  nome: ['HINARA', 'DO CARMO'],
  nomeCompleto: 'Hinara do Carmo',
  email: 'hinarakelly@gmail.com',
  instagram: 'hinarakelly',
  linkedin: '', // preencher com a URL do LinkedIn
  cidade: 'Salvador, Bahia — Brasil',
}

/* ---------- HOME ---------- */

export const hero = {
  // Características que aparecem em volta do nome, no estilo "chamada;"
  acima: 'comunicadora & produtora audiovisual;',
  abaixo: 'cria de Cajazeiras, Salvador — mulher negra afrocentrada;',
  // A frase que define a Hinara
  frase: { antes: 'Quando não existe oportunidade, ', destaque: 'eu crio.' },
  // Palavras que correm na faixa amarela
  faixa: ['comunicação', 'audiovisual', 'território', 'coragem', 'comunidade', 'propósito'],
}

export const sobre = {
  eyebrow: 'Prazer, Hinara',
  foto: {
    src: '/fotos/hinara-pensativa.png',
    alt: 'Hinara do Carmo, de óculos, olhando concentrada com a mão no queixo',
    legenda: 'foto da Hinara',
    posicao: '62% 35%', // enquadramento: centraliza o rosto
  },
  titulo: { antes: 'Quem vem de longe também pode ir ', destaque: 'muito longe.' },
  paragrafos: [
    'Nasci e cresci em Cajazeiras, Salvador, criada pela minha avó, Dona Nelice. Desde criança eu sabia que tinha nascido para me comunicar.',
    'Comecei no Marketing como social media, mas foi no audiovisual que encontrei meu lugar — liderando produções para marcas, artistas e projetos que transformam pessoas e territórios.',
  ],
  palavras: ['Comunicação', 'Produção', 'Coragem'],
  link: 'conheça minha trajetória',
}

/* ---------- TRAJETÓRIAS ----------
   Duas páginas com o mesmo formato. Cada bloco tem:
   titulo, subtitulo (linha pequena acima do título), texto,
   destaques (lista opcional) e frentes (etiquetas). */

export const estrategia = {
  rota: '/estrategia',
  menu: 'estratégia',
  intro: {
    eyebrow: 'Trajetória · Estratégia de comunicação',
    titulo: { antes: 'Cultura como ponto de partida. ', destaque: 'Estratégia como caminho.' },
    paragrafos: [
      'Meu olhar para estratégia começa pela observação. Busco entender comportamentos, identificar movimentos culturais e conectar diferentes informações para construir direcionamentos relevantes para marcas e negócios.',
      'Acredito que entender pessoas é tão importante quanto entender o mercado. É a partir desse encontro que surgem oportunidades, ideias e estratégias com propósito.',
    ],
  },
  blocos: [
    {
      titulo: 'Stone',
      subtitulo: 'Inteligência de mercado e cultura',
      texto: 'Atuação em estratégia, com pesquisas, análises de mercado e acompanhamento de movimentos culturais e competitivos.',
      destaques: [
        'Análise de concorrentes, bancos incumbentes e adquirentes',
        'Mapeamento de movimentos de mercado e comportamento',
        'Curadoria de notícias e tendências relevantes para a marca',
        'Identificação de oportunidades e pontos de observação',
      ],
      frentes: ['Estratégia', 'Pesquisa', 'Inteligência de mercado', 'Cultura'],
    },
    {
      titulo: 'Ton',
      subtitulo: 'Marca, presença digital e posicionamento',
      texto: 'Participação no desenvolvimento de caminhos estratégicos para a presença digital da marca, considerando reconhecimento, busca, credibilidade e conexão com o público.',
      frentes: ['Estratégia de marca', 'Benchmark', 'Presença digital', 'Cultura'],
    },
    {
      titulo: 'Coletivo Omi Ire',
      subtitulo: 'Comunicação para território e cultura',
      texto: 'Na assessoria de comunicação do coletivo, que atua com direitos humanos, justiça climática e economia criativa dentro de terreiros. Antes disso, comecei minha carreira como social media.',
      frentes: ['Comunicação', 'Social media', 'Território', 'Cultura'],
    },
  ],
}

export const producao = {
  rota: '/producao',
  menu: 'produção',
  intro: {
    eyebrow: 'Trajetória · Produção',
    titulo: { antes: 'Da ideia ', destaque: 'à realização.' },
    paragrafos: [
      'Antes de atuar em estratégia, construí minha trajetória na produção audiovisual e de eventos. Foi nesse caminho que desenvolvi meu olhar para o todo, a capacidade de conectar pessoas, organizar processos e transformar ideias em entregas.',
      'Aprendi a lidar com imprevistos sem perder de vista os objetivos. A produção continua fazendo parte de quem sou e da maneira como conduzo meu trabalho.',
    ],
  },
  blocos: [
    {
      titulo: 'Feira Preta 2025 e 2026',
      subtitulo: 'Produção executiva de cobertura',
      texto: 'Produção e coordenação de cobertura, articulação de equipes, contratação, logística e acompanhamento das entregas.',
      frentes: ['Produção executiva', 'Gestão de equipe', 'Logística', 'Relacionamento'],
    },
    {
      titulo: 'Molho Lambão',
      subtitulo: 'Produção audiovisual',
      texto: 'Experiência em produção audiovisual, conectando profissionais, processos e realização.',
      frentes: ['Produção audiovisual', 'Articulação', 'Realização'],
    },
    {
      titulo: 'Carnaval de Salvador',
      subtitulo: 'Produção de campo',
      texto: 'Produção audiovisual em campo, acompanhando gravações em meio à dinâmica dos trios, blocos e pipoca.',
      frentes: ['Produção de campo', 'Logística', 'Resolução de imprevistos'],
    },
    {
      titulo: 'Psirico',
      subtitulo: 'Música e cultura baiana',
      texto: 'Produção audiovisual em projetos ligados à música e à cultura baiana, incluindo a produção de clipe da banda.',
      frentes: ['Produção audiovisual', 'Música', 'Cultura'],
    },
    {
      titulo: 'Rádio Bahia FM',
      subtitulo: 'Comunicação e produção',
      texto: 'Produção geral de clipe para a rádio, em uma experiência que uniu comunicação e produção.', // A CONFIRMAR com a Hinara
      frentes: ['Comunicação', 'Produção'],
    },
    {
      titulo: 'Escola Rambam',
      subtitulo: 'Produção e articulação',
      texto: 'Experiência em produção e articulação de atividades e projetos.', // A CONFIRMAR com a Hinara
      frentes: ['Produção', 'Organização', 'Articulação'],
    },
    {
      titulo: 'Criativos da Favela',
      subtitulo: 'Favela Filmes + CUFA',
      texto: 'Produção audiovisual no projeto da Favela Filmes com a CUFA.',
      frentes: ['Produção audiovisual', 'Território'],
    },
    {
      titulo: 'Onde tudo começou',
      subtitulo: 'Produção de eventos e projetos comunitários',
      texto: 'Quando a oportunidade não existia, eu criava. Foi assim que aprendi a produzir, organizar gente e cuidar de território.',
      destaques: [
        'Produção da primeira feira, com mais de 15 expositores numa praça de periferia',
        'Aos 17, um brechó online em que cada peça levava uma carta contando sua história',
        'Aos 19, coordenadora da Biblioteca Comunitária Condor Literário',
      ],
      frentes: ['Eventos', 'Empreendedorismo', 'Comunidade'],
    },
  ],
}

export const trajetorias = [estrategia, producao]
