import { perfil } from '../data/conteudo'
import { Destaque } from './ui'
import './Hero.css'

export default function Hero() {
  const [linha1, linha2] = perfil.nome
  return (
    <header className="hero" id="topo">
      <div className="wrap hero__inner">
        <div>
          <small className="hero__cargo">{perfil.cargo}</small>
          <h1 className="hero__nome" aria-label={perfil.nomeCompleto}>
            <span className="hero__linha">{linha1}</span>
            <span className="hero__linha hero__linha--2">
              {linha2}<span className="destaque">.</span>
            </span>
          </h1>
          <p className="hero__origem">{perfil.origem}</p>
        </div>
        <p className="hero__frase">
          <Destaque {...perfil.frase} />
        </p>
      </div>
    </header>
  )
}
