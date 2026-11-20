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

/* ---------- TRAJETÓRIA ---------- */

export const trajetoria = {
  intro: {
    eyebrow: 'Trajetória',
    titulo: { antes: 'Mais do que um currículo, ', destaque: 'um caminho construído.' },
    texto: 'Os projetos a seguir contam como aprendi a transformar ideias em realidade — da periferia de Salvador aos sets de audiovisual, sempre com comunidade e propósito.',
  },
  blocos: [
    {
      categoria: 'audiovisual',
      titulo: 'Produção audiovisual',
      texto: 'Foi no audiovisual que encontrei meu lugar. Em seis meses, uma nova profissão e uma nova perspectiva de vida: hoje coordeno equipes, organizo sets e cuido para que cada ideia saia do papel do jeito que foi sonhada.',
      destaques: [
        'Criativos da Favela — Favela Filmes + CUFA',
        'Produção do clipe do Psirico',
        'Produção geral do clipe da Bahia FM',
        'Liderança da produção audiovisual da Feira Preta Salvador 2025',
      ],
      verbos: 'planejar; liderar; realizar;',
    },
    {
      categoria: 'comunicação',
      titulo: 'Comunicação & social media',
      texto: 'Entrei na faculdade de Marketing e comecei trabalhando como social media. Hoje levo essa bagagem para a comunicação de coletivos que atuam com cultura, território e direitos.',
      destaques: [
        'Social media no início da carreira',
        'ASCOM do Coletivo Omi Ire — direitos humanos, justiça climática e economia criativa em terreiros',
      ],
      verbos: 'escutar; traduzir; comunicar;',
    },
    {
      categoria: 'formação',
      titulo: 'Formação',
      texto: 'Uma trajetória de aprendizado contínuo, porque acredito que evolução constante faz parte de qualquer caminho de excelência.',
      destaques: [
        'Graduação em Marketing',
        'Bolsista do Programa Sementes — PUC-RS',
      ],
      verbos: 'aprender; trocar; evoluir;',
    },
    {
      categoria: 'empreendedorismo & comunidade',
      titulo: 'Onde tudo começou',
      texto: 'Cria de projetos sociais desde a infância. Quando a oportunidade não existia, eu criava: foi assim que aprendi a produzir, vender, organizar gente e cuidar de território.',
      destaques: [
        'Aos 17, um brechó online em que cada peça levava uma carta contando sua história',
        'Produção da primeira feira, com mais de 15 expositores numa praça de periferia',
        'Delícia de Miudeza: palha italiana para pagar o transporte do cursinho',
        'Aos 19, coordenadora da Biblioteca Comunitária Condor Literário',
        'Coletivo PerifaYoga, levando a prática às periferias de Salvador',
      ],
      verbos: 'criar; organizar; transformar;',
    },
  ],
}
