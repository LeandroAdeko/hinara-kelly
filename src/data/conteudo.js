// Os TEXTOS do site ficam em src/locales/ (um JSON por língua: pt.json, en.json, es.json).
// Aqui fica só o que é igual em todas as línguas (nome, contatos, fotos, logos, endereços
// das páginas) e a função que junta essas informações com os textos da língua escolhida.
//
// Listas (palavras da faixa, projetos das páginas de trabalhos, parágrafos) são lidas
// direto do JSON: para incluir um item, basta adicioná-lo à lista em cada língua.
// A numeração (01, 02...) e o índice da página se ajustam sozinhos.

export const perfil = {
  nome: ['INARA KELLY', 'DO CARMO'],
  nomeCompleto: 'Inara Kelly do Carmo',
  email: 'inarissima@gmail.com',
  instagram: 'inarissima',
  linkedin: { url: 'https://www.linkedin.com/in/inarissima/', rotulo: '/in/inarissima/' },
}

// Foto da seção sobre. Para trocar, coloque o arquivo em public/fotos/.
const foto = {
  src: '/fotos/inara-retrato.jpg',
  posicao: '52% 30%', // enquadramento: centraliza o rosto
}

// Nuvem de marcas (abaixo da seção sobre). Os arquivos ficam em public/marcas/
// e precisam ter fundo transparente: o site pinta todos na cor do texto.
// `proporcao` = largura ÷ altura do arquivo; serve para deixar todas com tamanho
// visual parecido. `escala` (opcional) ajusta à mão uma marca que pareça grande demais.
const logos = [
  { nome: 'VML', src: '/marcas/vml.svg', proporcao: 3.26 },
  { nome: 'Favela Filmes', src: '/marcas/favela-filmes-original-transparente.png', proporcao: 1.82, escala: 1.1 },
  { nome: 'Wieden+Kennedy', src: '/marcas/wieden-kennedy.svg', proporcao: 2.24 },
  { nome: 'Wakanda Educação Empreendedora', src: '/marcas/wakanda-simbolo.png', proporcao: 1, escala: 0.8 },
  { nome: 'YouPix', src: '/marcas/youpix.png', proporcao: 2.97 },
  { nome: 'mmova', src: '/marcas/mmova.svg', proporcao: 6, escala: 1.1 },
]

// Endereços das páginas de trabalhos (iguais em todas as línguas)
export const rotas = { estrategia: '/estrategia', producao: '/producao' }

// Junta os textos de uma língua (o JSON) com os dados fixos acima.
export function montarConteudo(t) {
  const estrategia = { ...t.estrategia, id: 'estrategia', rota: rotas.estrategia }
  const producao = { ...t.producao, id: 'producao', rota: rotas.producao }
  return {
    ui: t.ui,
    perfil: { ...perfil, cargo: t.cargo },
    hero: { acima: t.cargo, abaixo: t.hero.abaixo, frase: t.citacao, faixa: t.hero.faixa },
    sobre: {
      ...t.sobre,
      foto: { ...foto, alt: t.sobre.fotoAlt, legenda: t.sobre.fotoAlt },
      cargo: t.cargo,
      citacao: t.citacao,
    },
    marcas: { titulo: t.marcas.titulo, lista: logos },
    contato: t.contato,
    estrategia,
    producao,
    trajetorias: [estrategia, producao],
  }
}
