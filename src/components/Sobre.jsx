import { Link } from 'react-router-dom'
import { sobre, trajetorias } from '../data/conteudo'
import { Destaque, Foto, Reveal, TituloSecao } from './ui'
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
          <p className="sobre__cargo">{sobre.cargo}</p>
          <blockquote className="sobre__citacao">
            <Destaque {...sobre.citacao} />
          </blockquote>
          {sobre.paragrafos.map((p, i) => <p key={i} className="sobre__p">{p}</p>)}

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
