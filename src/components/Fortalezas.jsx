import { fortalezas } from '../data/conteudo'
import { Reveal, TituloSecao } from './ui'
import './Fortalezas.css'

export default function Fortalezas() {
  return (
    <section className="secao">
      <div className="wrap fortalezas__inner">
        <Reveal>
          <TituloSecao eyebrow={fortalezas.eyebrow} titulo={fortalezas.titulo} />
          <p>{fortalezas.texto}</p>
        </Reveal>
        <ol className="fortalezas__lista">
          {fortalezas.lista.map((f, i) => (
            <Reveal as="li" key={f} delay={i * 80}>
              <span className="fortalezas__num">{String(i + 1).padStart(2, '0')}</span>
              {f}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
