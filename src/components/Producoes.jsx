import { producoes } from '../data/conteudo'
import { Foto, Reveal, TituloSecao } from './ui'
import './Producoes.css'

export default function Producoes() {
  return (
    <section className="secao producoes" id="producoes">
      <div className="wrap">
        <Reveal>
          <TituloSecao eyebrow={producoes.eyebrow} titulo={producoes.titulo} />
        </Reveal>

        <div className="producoes__cards">
          {producoes.itens.map((p, i) => (
            <Reveal as="article" key={p.titulo} delay={i * 90} className="card">
              <Foto {...p.foto} className="card__foto" />
              <div className="card__corpo">
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
                <p className="card__verbos">{p.verbos}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
