import { useEffect, useState } from 'react'
import './TrocaPaleta.css'

const MODOS = {
  claro: { nome: 'claro', proximo: 'escuro' },
  escuro: { nome: 'escuro', proximo: 'claro' },
}

const consulta = () => window.matchMedia('(prefers-color-scheme: dark)')
const modoDoSistema = () => (consulta().matches ? 'escuro' : 'claro')

function Icone({ modo }) {
  const comum = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (modo === 'escuro') {
    return (
      <svg {...comum}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    )
  }
  return (
    <svg {...comum}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

// Botão claro/escuro. Começa sempre no modo do sistema; o clique alterna
// só durante a visita (ao abrir o site de novo, volta a seguir o sistema).
export default function TrocaModo() {
  const [modo, setModo] = useState(modoDoSistema)
  const [escolheu, setEscolheu] = useState(false)
  const proximo = MODOS[modo].proximo

  useEffect(() => {
    document.documentElement.dataset.modo = modo
  }, [modo])

  // Enquanto a pessoa não clicar, acompanha se o sistema mudar de tema
  useEffect(() => {
    if (escolheu) return
    const mq = consulta()
    const aoMudar = () => setModo(modoDoSistema())
    mq.addEventListener('change', aoMudar)
    return () => mq.removeEventListener('change', aoMudar)
  }, [escolheu])

  const trocar = () => {
    setEscolheu(true)
    setModo(proximo)
  }

  const descricao = `Modo ${MODOS[modo].nome}. Clique para mudar para o modo ${MODOS[proximo].nome}`

  return (
    <button
      type="button"
      className="troca-paleta troca-modo"
      onClick={trocar}
      aria-label={descricao}
      title={descricao}
    >
      <Icone modo={modo} />
      <span className="troca-paleta__nome">{MODOS[modo].nome}</span>
    </button>
  )
}
