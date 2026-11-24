import { useEffect, useState } from 'react'
import './TrocaPaleta.css'

// As paletas disponíveis. `cores` aparecem como bolinhas no botão.
const PALETAS = {
  classica: { nome: 'clássica', cores: ['#FFFFFF', '#DFA526', '#111111'], tema: '#DFA526' },
  terra: { nome: 'terra', cores: ['#EFE7D9', '#DA9F45', '#424D25'], tema: '#424D25' },
}
const CHAVE = 'paleta'

function paletaInicial() {
  return document.documentElement.dataset.paleta === 'terra' ? 'terra' : 'classica'
}

// Botão que alterna entre a paleta clássica e a paleta terra.
// A escolha fica salva neste navegador.
export default function TrocaPaleta() {
  const [paleta, setPaleta] = useState(paletaInicial)
  const proxima = paleta === 'terra' ? 'classica' : 'terra'

  useEffect(() => {
    const raiz = document.documentElement
    if (paleta === 'terra') raiz.dataset.paleta = 'terra'
    else delete raiz.dataset.paleta
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', PALETAS[paleta].tema)
    try { localStorage.setItem(CHAVE, paleta) } catch { /* navegação privada: só não salva */ }
  }, [paleta])

  return (
    <button
      type="button"
      className="troca-paleta"
      onClick={() => setPaleta(proxima)}
      aria-label={`Trocar para a paleta ${PALETAS[proxima].nome}`}
      title={`Trocar para a paleta ${PALETAS[proxima].nome}`}
    >
      <span className="troca-paleta__cores" aria-hidden="true">
        {PALETAS[proxima].cores.map((c) => <span key={c} style={{ background: c }} />)}
      </span>
      <span className="troca-paleta__nome">{PALETAS[proxima].nome}</span>
    </button>
  )
}
