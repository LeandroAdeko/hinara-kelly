import { Link } from 'react-router-dom'
import { sobre, trajetorias } from '../data/conteudo'
import { Foto, Reveal, TituloSecao } from './ui'
import './Sobre.css'

export default function Sobre() {
  return (
    <section className="secao sobre" id="sobre">
      <div className="wrap sobre__inner">
        <Reveal className="sobre__foto-wrap">
          <Foto {...sobre.foto} className="sobre__foto" />
        </Reveal>

        <Reveal delay={150}>
          <TituloSecao eyebrow={sobre.eyebrow} titulo={sobre.titulo} />
          {sobre.paragrafos.map((p, i) => <p key={i} className="sobre__p">{p}</p>)}
          <div className="sobre__palavras">
            {sobre.palavras.map((p) => <span key={p}>{p}</span>)}
          </div>
          <p className="sobre__chamada">{sobre.link}</p>
          <div className="sobre__links">
            {trajetorias.map((t) => (
              <Link key={t.rota} to={t.rota} className="sobre__link">
                {t.menu} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
