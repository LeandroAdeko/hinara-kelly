import { comunidade } from '../data/conteudo'
import { Reveal, TituloSecao } from './ui'
import './Comunidade.css'

export default function Comunidade() {
  return (
    <section className="secao comunidade">
      <div className="wrap">
        <Reveal>
          <TituloSecao eyebrow={comunidade.eyebrow} titulo={comunidade.titulo} />
        </Reveal>
        <div className="comunidade__itens">
          {comunidade.itens.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 70} className="comunidade__item">
              <b>{c.titulo}</b>
              <p>{c.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
