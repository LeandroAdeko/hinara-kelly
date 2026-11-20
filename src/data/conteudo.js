// Todo o texto do site fica aqui. Para trocar uma foto, coloque o arquivo em
// public/fotos/ e preencha o campo `src` (ex.: '/fotos/retrato.jpg').

export const perfil = {
  nome: ['HINARA', 'KELLY'],
  nomeCompleto: 'Hinara Kelly do Carmo',
  cargo: 'comunicadora & produtora audiovisual;',
  origem: 'cria de Cajazeiras — Salvador, Bahia;',
  frase: { antes: '“Quando não existe oportunidade, ', destaque: 'eu crio.', depois: ' É transformando ideias em realidade que eu me sinto viva.”' },
  email: 'hinarakelly@gmail.com',
  instagram: 'hinarakelly',
  linkedin: '', // preencher com a URL do LinkedIn
  cidade: 'Salvador, Bahia — Brasil',
}

export const navegacao = [
  { id: 'sobre', label: 'sobre' },
  { id: 'trajetoria', label: 'trajetória' },
  { id: 'producoes', label: 'produções' },
  { id: 'contato', label: 'contato' },
]

export const faixa = ['adupè', 'coragem', 'persistência', 'propósito', 'comunidade', 'território']

export const sobre = {
  eyebrow: 'Prazer, Hinara',
  titulo: { antes: 'Quem vem de longe também pode ir ', destaque: 'muito longe.' },
  paragrafos: [
    'Filha de Gleide Letícia e Antônio Purificação, criada por minha avó, Dona Nelice. Nasci e cresci em Cajazeiras, Salvador — um território que me ensinou sobre resistência e comunidade.',
    'Desde criança eu sabia que tinha nascido para me comunicar: prefeita da escola primária, líder de sala, gremista, e depois na rua lutando por direitos.',
    'Sou uma mulher negra afrocentrada, mãe, observadora do mundo e profundamente comprometida em dar certo.',
  ],
  palavras: ['Comunicação', 'Território', 'Coragem'],
  fotos: [
    { src: '', alt: 'Retrato da Hinara', legenda: 'foto principal — retrato da Hinara' },
    { src: '', alt: 'Hinara na infância', legenda: 'foto — infância' },
    { src: '', alt: 'Família da Hinara', legenda: 'foto — família / Dona Nelice' },
  ],
}

export const manifesto = {
  linha1: 'Liberdade é',
  linha2: 'não ter medo.',
  apoio: { antes: 'Aprendi cedo: ', destaque: 'resistir também é imaginar futuros.' },
}

export const trajetoria = {
  eyebrow: 'Trajetória',
  titulo: { antes: 'Minha jornada ', destaque: 'começou cedo.' },
  marcos: [
    { quando: 'aos 17', titulo: 'Brechó online', texto: 'Cada roupa vendida levava uma carta contando a sua história.' },
    { quando: 'feira na periferia', titulo: 'Primeira feira produzida', texto: 'Mais de 15 expositores em uma praça de periferia.' },
    { quando: 'cursinho', titulo: 'Delícia de Miudeza', texto: 'Vendia palha italiana para pagar o transporte do cursinho.' },
    { quando: 'aos 19', titulo: 'Biblioteca Comunitária Condor Literário', texto: 'Coordenadora da biblioteca comunitária.' },
    { quando: 'marketing', titulo: 'Social media', texto: 'Entrei na faculdade de Marketing e comecei como social media.' },
    { quando: 'hoje', titulo: 'Audiovisual', texto: 'Foi no audiovisual que encontrei meu lugar — em 6 meses, uma nova profissão e uma nova perspectiva de vida.' },
  ],
  conclusao: { antes: 'Quando não existe oportunidade, ', destaque: 'eu crio.' },
}

export const producoes = {
  eyebrow: 'Produções',
  titulo: { antes: 'Transformando ideias ', destaque: 'em realidade.' },
  itens: [
    { titulo: 'Criativos da Favela', texto: 'Favela Filmes + CUFA. Produção audiovisual.', verbos: 'criar; produzir; conectar;', foto: { src: '', alt: 'Set do Criativos da Favela', legenda: 'foto — set Criativos da Favela' } },
    { titulo: 'Clipe do Psirico', texto: 'Produção do videoclipe.', verbos: 'organizar; executar; entregar;', foto: { src: '', alt: 'Bastidores do clipe do Psirico', legenda: 'foto — bastidores do clipe' } },
    { titulo: 'Clipe da Bahia FM', texto: 'Produção geral.', verbos: 'planejar; liderar; realizar;', foto: { src: '', alt: 'Clipe da Bahia FM', legenda: 'foto — clipe Bahia FM' } },
    { titulo: 'Feira Preta Salvador 2025', texto: 'Liderança da produção audiovisual.', verbos: 'liderar; registrar; amplificar;', foto: { src: '', alt: 'Feira Preta Salvador 2025', legenda: 'foto — Feira Preta' } },
  ],
}

export const comunidade = {
  eyebrow: 'Comunidade',
  titulo: { antes: 'Cria de projetos sociais ', destaque: 'desde a infância.' },
  itens: [
    { titulo: 'Coletivo PerifaYoga', texto: 'Democratizando o acesso ao yoga nas periferias de Salvador.' },
    { titulo: 'Coletivo Omi Ire — ASCOM', texto: 'Direitos humanos, justiça climática e economia criativa dentro de terreiros.' },
    { titulo: 'Programa Sementes — PUC-RS', texto: 'Bolsista do programa.' },
    { titulo: 'Condor Literário', texto: 'Coordenação da biblioteca comunitária aos 19 anos.' },
  ],
}

export const fortalezas = {
  eyebrow: 'Fortalezas',
  titulo: { antes: 'Movida por ', destaque: 'amar.' },
  texto: 'Minha espiritualidade no Candomblé, a potência cultural do Ilê Aiyê, o amor pelo cinema brasileiro, meu filho, minha família — e a paixão por criar projetos que transformam pessoas e territórios.',
  lista: ['Ser mãe — meu superpoder', 'Determinação', 'Adaptabilidade e flexibilidade', 'Leitura de ambiente', 'Proatividade e planejamento'],
}
