import { sobre } from '../data/conteudo'
import { Foto, Reveal, TituloSecao } from './ui'
import './Sobre.css'

export default function Sobre() {
  return (
    <section className="secao sobre" id="sobre">
      <div className="wrap sobre__inner">
        <Reveal>
          <TituloSecao eyebrow={sobre.eyebrow} titulo={sobre.titulo} />
          {sobre.paragrafos.map((p, i) => <p key={i} className="sobre__p">{p}</p>)}
          <div className="sobre__palavras">
            {sobre.palavras.map((p) => <span key={p}>{p}</span>)}
          </div>
        </Reveal>

        <Reveal className="sobre__fotos" delay={150}>
          {sobre.fotos.map((f, i) => <Foto key={i} {...f} className={i === 0 ? 'sobre__foto-grande' : ''} />)}
        </Reveal>
      </div>
    </section>
  )
}
