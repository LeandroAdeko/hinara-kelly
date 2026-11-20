import { manifesto } from '../data/conteudo'
import { Destaque, Reveal } from './ui'
import './Manifesto.css'

export default function Manifesto() {
  return (
    <section className="manifesto">
      <Reveal className="wrap">
        <blockquote className="manifesto__frase">
          {manifesto.linha1}
          <br />
          <span className="destaque">{manifesto.linha2}</span>
        </blockquote>
        <p className="manifesto__apoio">
          <Destaque {...manifesto.apoio} />
        </p>
      </Reveal>
    </section>
  )
}
