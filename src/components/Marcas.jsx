import { marcas } from '../data/conteudo'
import { Reveal } from './ui'
import './Marcas.css'

const url = (src) => import.meta.env.BASE_URL + src.replace(/^\//, '')

// Nuvem de logos. Cada logo ocupa mais ou menos a mesma área (largura × altura),
// então uma marca larga fica baixinha e uma quadrada fica mais alta, e todas
// parecem do mesmo tamanho. Os logos são pintados com a cor do texto (máscara CSS),
// assim combinam com a paleta e com o modo escuro.
export default function Marcas() {
  return (
    <section className="secao marcas" id="marcas">
      <div className="wrap">
        <Reveal className="marcas__topo">
          <h2 className="eyebrow marcas__titulo">{marcas.titulo}</h2>
        </Reveal>

        <ul className="marcas__nuvem">
          {marcas.lista.map((m, i) => (
            <Reveal as="li" key={m.src} delay={i * 80} className="marcas__item">
              <span
                className="marcas__logo"
                role="img"
                aria-label={m.nome}
                title={m.nome}
                style={{
                  '--raiz': Math.sqrt(m.proporcao),
                  '--escala': m.escala ?? 1,
                  '--logo': `url("${url(m.src)}")`,
                }}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
