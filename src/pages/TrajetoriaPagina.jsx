import { Link } from 'react-router-dom'
import { preencher, useConteudo } from '../i18n/Lingua'
import { Reveal, TituloSecao } from '../components/ui'
import Video from '../components/Video'
import './TrajetoriaPagina.css'

// Página de trajetória reaproveitada por Estratégia e Produção.
export default function TrajetoriaPagina({ dados }) {
  const { trajetorias, ui } = useConteudo()
  const { intro, blocos } = dados
  const outra = trajetorias.find((t) => t.id !== dados.id)
  const num = (i) => String(i + 1).padStart(2, '0')

  const irPara = (e, i) => {
    e.preventDefault()
    document.getElementById(`bloco-${i}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="traj-intro">
        <div className="wrap">
          <Reveal>
            <TituloSecao eyebrow={intro.eyebrow} titulo={intro.titulo} />
            {intro.paragrafos.map((p, i) => <p key={i} className="traj-intro__texto">{p}</p>)}
          </Reveal>
          <nav className="traj-indice" aria-label={ui.trajetoria.indice}>
            {blocos.map((b, i) => (
              <a key={i} href={`#bloco-${i}`} onClick={(e) => irPara(e, i)}>
                <span>{num(i)}</span>{b.titulo}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="wrap traj-blocos">
        {blocos.map((b, i) => (
          <Reveal as="article" key={i} id={`bloco-${i}`} className="traj-bloco">
            <div className="traj-bloco__cabeca">
              <span className="traj-bloco__num">{num(i)}</span>
              <p className="traj-bloco__categoria">{b.cliente}</p>
              <h2 className="traj-bloco__titulo">{b.titulo}</h2>
            </div>
            <div className="traj-bloco__corpo">
              {/* "texto" pode ser uma frase só ou uma lista de parágrafos */}
              {[].concat(b.texto).map((p, j) => <p key={j} className="traj-bloco__texto">{p}</p>)}
              {b.funcao && (
                <p className="traj-bloco__funcao">
                  <span>{ui.trajetoria.funcao}</span> {b.funcao}
                </p>
              )}
              {b.video && (
                <Video id={b.video} titulo={preencher(ui.trajetoria.video, { titulo: b.titulo })} />
              )}
              {b.destaques && (
                <>
                  <p className="traj-bloco__rotulo">{ui.trajetoria.destaques}</p>
                  <ul className="traj-bloco__lista">
                    {b.destaques.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </>
              )}
              {b.frentes && (
                <ul className="traj-bloco__frentes" aria-label={ui.trajetoria.frentes}>
                  {b.frentes.map((f) => <li key={f}>{f}</li>)}
                </ul>
              )}
            </div>
          </Reveal>
        ))}

        {outra && (
          <Reveal className="traj-outra">
            <p>{ui.trajetoria.vejaTambem}</p>
            <Link to={outra.rota}>
              {outra.intro.titulo.antes}<span className="destaque">{outra.intro.titulo.destaque}</span>
              <span className="traj-outra__seta" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        )}
      </div>
    </>
  )
}
