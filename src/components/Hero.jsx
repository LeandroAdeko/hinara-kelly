import Faixa from './Faixa'
import { Destaque } from './ui'
import { useConteudo } from '../i18n/Lingua'
import './Hero.css'

export default function Hero() {
  const { hero, perfil } = useConteudo()
  const [linha1, linha2] = perfil.nome
  return (
    <header className="hero">
      <div className="wrap hero__inner">
        <div className="hero__nome-bloco">
          <small className="hero__chamada">{hero.acima}</small>
          <h1 className="hero__nome" aria-label={perfil.nomeCompleto}>
            <span className="hero__linha">{linha1}</span>
            <span className="hero__linha hero__linha--2">
              {linha2}<span className="destaque">.</span>
            </span>
          </h1>
          <small className="hero__chamada hero__chamada--baixo">{hero.abaixo}</small>
        </div>
        <p className="hero__frase">
          <Destaque {...hero.frase} />
        </p>
      </div>
      <Faixa palavras={hero.faixa} />
    </header>
  )
}
