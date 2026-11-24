import { useEffect, useRef, useState } from 'react'
import './TrocaPaleta.css'
import './SeletorFonte.css'

// Conjuntos de fontes do site. Cada um troca títulos, textos e citações
// (as regras ficam em src/index.css, em "CONJUNTOS DE FONTES").
// `titulo` e `texto` desenham a prévia de cada opção na própria fonte.
export const FONTES = [
  {
    id: 'marcante',
    nome: 'Marcante',
    descricao: 'Larga e negrita. Forte, chama atenção.',
    titulo: { fontFamily: '"Archivo", sans-serif', fontWeight: 800, fontStretch: '125%' },
    texto: { fontFamily: '"Montserrat", sans-serif' },
  },
  {
    id: 'contida',
    nome: 'Contida',
    descricao: 'A mesma família da marcante, mais estreita e leve.',
    titulo: { fontFamily: '"Archivo", sans-serif', fontWeight: 600, fontStretch: '100%' },
    texto: { fontFamily: '"Archivo", sans-serif' },
  },
  {
    id: 'tight',
    nome: 'Inter Tight',
    descricao: 'Letras justas, com cara de Helvetica.',
    titulo: { fontFamily: '"Inter Tight", sans-serif', fontWeight: 600 },
    texto: { fontFamily: '"Inter", sans-serif' },
  },
  {
    id: 'neutra',
    nome: 'Neutra',
    descricao: 'Uma família só no site todo. Sóbria e limpa.',
    titulo: { fontFamily: '"Inter", sans-serif', fontWeight: 700 },
    texto: { fontFamily: '"Inter", sans-serif' },
  },
  {
    id: 'editorial',
    nome: 'Editorial',
    descricao: 'Tudo com serifa, com cara de revista.',
    titulo: { fontFamily: '"Fraunces", serif', fontWeight: 600 },
    texto: { fontFamily: '"Source Serif 4", serif' },
  },
  {
    id: 'geometrica',
    nome: 'Geométrica',
    descricao: 'Formas retas e modernas, com cara de tecnologia.',
    titulo: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    texto: { fontFamily: '"DM Sans", sans-serif' },
  },
  {
    id: 'ousada',
    nome: 'Ousada',
    descricao: 'Experimental e cheia de personalidade.',
    titulo: { fontFamily: '"Syne", sans-serif', fontWeight: 800 },
    texto: { fontFamily: '"Manrope", sans-serif' },
  },
  {
    id: 'elegante',
    nome: 'Elegante',
    descricao: 'Serifa de alto contraste, sofisticada.',
    titulo: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    texto: { fontFamily: '"Lora", serif' },
  },
  {
    id: 'condensada',
    nome: 'Condensada',
    descricao: 'Alta e estreita, com cara de pôster.',
    titulo: { fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 },
    texto: { fontFamily: '"Barlow", sans-serif' },
  },
  {
    id: 'retro',
    nome: 'Retrô',
    descricao: 'Serifa marcante de anúncio antigo.',
    titulo: { fontFamily: '"DM Serif Display", serif', fontWeight: 400 },
    texto: { fontFamily: '"DM Sans", sans-serif' },
  },
]
// A fonte padrão do site é definida no <html> do index.html (data-fonte="tight").
// "marcante" é a base do CSS (:root), por isso é a única sem atributo.
const BASE_CSS = 'marcante'
const CHAVE = 'fonte-escolhida'

function fonteInicial() {
  const f = document.documentElement.dataset.fonte
  if (!f) return BASE_CSS
  return FONTES.some((x) => x.id === f) ? f : BASE_CSS
}

// Botão "Aa" que abre um painel para escolher o conjunto de fontes.
// A escolha vale na hora (dá para comparar sem fechar) e fica salva neste navegador.
// Só é salva quando a pessoa clica numa opção; sem isso, vale a padrão do site.
export default function SeletorFonte() {
  const [fonte, setFonte] = useState(fonteInicial)
  const [aberto, setAberto] = useState(false)
  const raizRef = useRef(null)
  const atual = FONTES.find((f) => f.id === fonte)

  useEffect(() => {
    const raiz = document.documentElement
    if (fonte === BASE_CSS) raiz.removeAttribute('data-fonte')
    else raiz.dataset.fonte = fonte
  }, [fonte])

  const escolher = (id) => {
    setFonte(id)
    try { localStorage.setItem(CHAVE, id) } catch { /* navegação privada: só não salva */ }
  }

  // Fecha com Esc ou clicando fora do painel
  useEffect(() => {
    if (!aberto) return
    const aoClicar = (e) => { if (!raizRef.current?.contains(e.target)) setAberto(false) }
    const aoTeclar = (e) => { if (e.key === 'Escape') setAberto(false) }
    document.addEventListener('mousedown', aoClicar)
    document.addEventListener('keydown', aoTeclar)
    // leva o foco para a opção escolhida
    raizRef.current?.querySelector('[aria-checked="true"]')?.focus()
    return () => {
      document.removeEventListener('mousedown', aoClicar)
      document.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto])

  // Setas para cima/baixo navegam entre as opções
  const aoNavegar = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const i = FONTES.findIndex((f) => f.id === fonte)
    const passo = e.key === 'ArrowDown' ? 1 : -1
    const proxima = FONTES[(i + passo + FONTES.length) % FONTES.length]
    escolher(proxima.id)
    raizRef.current?.querySelector(`[data-id="${proxima.id}"]`)?.focus()
  }

  return (
    <div className="seletor-fonte" ref={raizRef}>
      <button
        type="button"
        className="troca-paleta troca-fonte"
        onClick={() => setAberto((v) => !v)}
        aria-haspopup="true"
        aria-expanded={aberto}
        aria-label={`Fontes: ${atual.nome}. Abrir painel de fontes`}
        title="Escolher fontes"
      >
        <span className="troca-fonte__amostra" aria-hidden="true" style={atual.titulo}>Aa</span>
        <span className="troca-paleta__nome">{atual.nome.toLowerCase()}</span>
      </button>

      {aberto && (
        <div className="seletor-fonte__painel" role="dialog" aria-label="Escolher fontes do site">
          <div className="seletor-fonte__topo">
            <p className="seletor-fonte__titulo">Fontes do site</p>
            <button type="button" className="seletor-fonte__fechar" onClick={() => setAberto(false)} aria-label="Fechar painel de fontes">×</button>
          </div>

          <div className="seletor-fonte__lista" role="radiogroup" aria-label="Conjuntos de fontes" onKeyDown={aoNavegar}>
            {FONTES.map((f) => {
              const escolhida = f.id === fonte
              return (
                <button
                  key={f.id}
                  type="button"
                  role="radio"
                  aria-checked={escolhida}
                  tabIndex={escolhida ? 0 : -1}
                  data-id={f.id}
                  className={`seletor-fonte__opcao ${escolhida ? 'is-escolhida' : ''}`}
                  onClick={() => escolher(f.id)}
                >
                  <span className="seletor-fonte__previa" style={f.titulo}>Inara Kelly</span>
                  <span className="seletor-fonte__nome" style={f.texto}>{f.nome}</span>
                  <span className="seletor-fonte__descricao" style={f.texto}>{f.descricao}</span>
                  <span className="seletor-fonte__marca" aria-hidden="true">{escolhida ? '✓' : ''}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
