import { Fragment } from 'react'
import { hero } from '../data/conteudo'
import './Faixa.css'

// Faixa amarela com palavras correndo. O conteúdo é duplicado para o loop ser contínuo.
export default function Faixa({ palavras = hero.faixa, invertida = false }) {
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
