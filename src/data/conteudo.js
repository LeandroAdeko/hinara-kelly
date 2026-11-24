// Todo o texto do site fica aqui. Para trocar uma foto, coloque o arquivo em
// public/fotos/ e preencha o campo `src` (ex.: '/fotos/retrato.jpg').

export const perfil = {
  nome: ['INARA KELLY', 'DO CARMO'],
  nomeCompleto: 'Inara Kelly do Carmo',
  cargo: 'Assistente de Estratégia | Produtora Audiovisual',
  email: 'inarissima@gmail.com',
  instagram: 'inarissima',
  linkedin: { url: 'https://www.linkedin.com/in/inarissima/', rotulo: '/in/inarissima/' },
}

// Citação usada na home (hero e sobre)
export const citacao = {
  antes: '“Quando um rio encontra um outro rio, ele não deixa de ser rio, ',
  destaque: 'ele se torna um rio maior.”',
}

/* ---------- HOME ---------- */

export const hero = {
  acima: perfil.cargo,
  abaixo: 'Estratégia, cultura e produção. De Salvador para onde as ideias me levarem.',
  frase: citacao,
  // Palavras que correm na faixa amarela
  faixa: ['estratégia', 'cultura', 'produção', 'investigação', 'pessoas', 'território'],
}

export const sobre = {
  eyebrow: 'Sobre',
  foto: {
    src: '/fotos/inara-retrato.jpg',
    alt: 'Inara Kelly do Carmo sorrindo, de brincos de argola, em frente a uma parede de tijolos',
    legenda: 'foto da Inara',
    posicao: '52% 30%', // enquadramento: centraliza o rosto
  },
  titulo: { antes: 'Inara Kelly ', destaque: 'do Carmo' },
  cargo: perfil.cargo,
  citacao,
  paragrafos: [
    'Sou Inara, de Salvador, Bahia. Minha trajetória passa pela produção audiovisual e hoje se encontra na estratégia. Gosto de investigar, observar pessoas, entender movimentos culturais e conectar diferentes referências para encontrar novas possibilidades para marcas e negócios.',
  ],
  link: 'conheça meus trabalhos',
}

export const contato = {
  eyebrow: 'contato',
  titulo: { antes: 'Vamos construir algo ', destaque: 'juntos?' },
  texto: 'Boas ideias começam com encontros, trocas e curiosidade.',
}

/* ---------- TRABALHOS ----------
   Duas páginas com o mesmo formato. Cada bloco tem:
   cliente (linha pequena acima do título), titulo e texto.
   Opcionais: destaques (lista) e frentes (etiquetas). */

export const estrategia = {
  rota: '/estrategia',
  menu: 'estratégia',
  intro: {
    eyebrow: 'Trabalhos · Estratégia',
    titulo: { antes: 'Toda grande estratégia começa por ', destaque: 'uma boa investigação.' },
    paragrafos: [
      'Mais do que trajetória profissional, os projetos a seguir materializam a evolução do meu jeito de pensar, conduzir, e traduzir estratégia em resultado de negócio.',
    ],
  },
  blocos: [
    {
      cliente: 'Stone',
      titulo: 'FAMPE',
      texto: 'Pesquisa qualitativa, grupo focal e investigação da realidade de empreendedoras.',
    },
    {
      cliente: 'Stone',
      titulo: 'Pulso Stone',
      texto: 'Curadoria de notícias, tendências e movimentos da indústria.',
    },
    {
      cliente: 'Old Spice',
      titulo: 'Body Wash',
      texto: 'Pesquisa sobre hábitos, cultura e comportamento masculino em relação ao banho.',
    },
    {
      cliente: 'Ford',
      titulo: 'Curadoria Agro',
      texto: 'Curadoria de formadores de opinião e referências do agronegócio.',
    },
    {
      cliente: 'Centauro',
      titulo: 'Concorrência',
      texto: 'Cliente oculto e investigação da experiência de compra e diferenciais de loja.',
    },
  ],
}

export const producao = {
  rota: '/producao',
  menu: 'produção',
  intro: {
    eyebrow: 'Trabalhos · Produção audiovisual',
    titulo: { antes: 'Da ideia ', destaque: 'à realização.' },
    paragrafos: [
      'Antes de atuar em estratégia, construí minha trajetória na produção audiovisual e de eventos. Foi nesse caminho que desenvolvi meu olhar para o todo, a capacidade de conectar pessoas, organizar processos e transformar ideias em entregas.',
    ],
  },
  blocos: [
    {
      cliente: 'Festival',
      titulo: 'Feira Preta 2025',
      texto: 'Liderança de produção, equipe, comunicação e processos.',
    },
    {
      cliente: 'Lambão',
      titulo: 'Lambão Weekend 2025',
      texto: 'Produção de campo, agilidade, atenção aos processos e adaptabilidade.',
    },
  ],
}

export const trajetorias = [estrategia, producao]
