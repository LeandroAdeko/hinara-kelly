import { trajetoria } from '../data/conteudo'
import { Reveal, TituloSecao } from '../components/ui'
import './Trajetoria.css'

export default function Trajetoria() {
  const { intro, blocos } = trajetoria
  return (
    <>
      <section className="traj-intro">
        <div className="wrap">
          <Reveal>
            <TituloSecao eyebrow={intro.eyebrow} titulo={intro.titulo} />
            <p className="traj-intro__texto">{intro.texto}</p>
          </Reveal>
          <nav className="traj-indice" aria-label="Áreas da trajetória">
            {blocos.map((b, i) => (
              <a key={b.titulo} href={`#bloco-${i}`} onClick={(e) => {
                e.preventDefault()
                document.getElementById(`bloco-${i}`)?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <span>{String(i + 1).padStart(2, '0')}</span>{b.categoria}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="wrap traj-blocos">
        {blocos.map((b, i) => (
          <Reveal as="article" key={b.titulo} id={`bloco-${i}`} className="traj-bloco">
            <div className="traj-bloco__cabeca">
              <span className="traj-bloco__num">{String(i + 1).padStart(2, '0')}</span>
              <p className="traj-bloco__categoria">{b.categoria}</p>
              <h2 className="traj-bloco__titulo">{b.titulo}</h2>
            </div>
            <div className="traj-bloco__corpo">
              <p className="traj-bloco__texto">{b.texto}</p>
              <p className="traj-bloco__rotulo">Destaques:</p>
              <ul className="traj-bloco__lista">
                {b.destaques.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <p className="traj-bloco__verbos">{b.verbos}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
