import { Fragment } from 'react'
import './Faixa.css'

// Faixa amarela com palavras correndo. O conteúdo é duplicado para o loop ser contínuo.
// As palavras vêm de "hero.faixa" nos JSONs de src/locales/: é só acrescentar uma na lista.
export default function Faixa({ palavras = [], invertida = false }) {
  const grupo = palavras.map((p, i) => (
    <Fragment key={i}>
      <span>{p}</span>
      <span className="faixa__sep">✦</span>
    </Fragment>
  ))
  return (
    <div className={`faixa ${invertida ? 'faixa--invertida' : ''}`} aria-hidden="true">
      <div className="faixa__track">
        {grupo}
        {grupo}
      </div>
    </div>
  )
}
