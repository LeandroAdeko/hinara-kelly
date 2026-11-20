import { trajetoria } from '../data/conteudo'
import { Destaque, Reveal, TituloSecao } from './ui'
import './Trajetoria.css'

export default function Trajetoria() {
  return (
    <section className="secao" id="trajetoria">
      <div className="wrap">
        <Reveal>
          <TituloSecao eyebrow={trajetoria.eyebrow} titulo={trajetoria.titulo} />
        </Reveal>

        <ol className="linha-tempo">
          {trajetoria.marcos.map((m, i) => (
            <Reveal as="li" key={m.titulo} delay={i * 60} className="linha-tempo__item">
              <span className="linha-tempo__quando">{m.quando}</span>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal as="p" className="trajetoria__conclusao">
          <Destaque {...trajetoria.conclusao} />
        </Reveal>
      </div>
    </section>
  )
}
