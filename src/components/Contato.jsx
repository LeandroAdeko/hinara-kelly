import { useState } from 'react'
import { perfil } from '../data/conteudo'
import { Reveal } from './ui'
import './Contato.css'

export default function Contato() {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      window.location.href = `mailto:${perfil.email}`
    }
  }

  return (
    <section className="contato" id="contato">
      <Reveal className="wrap">
        <div className="contato__adupe">adupè</div>
        <p className="contato__cidade">{perfil.cidade}</p>

        <div className="contato__acoes">
          <a className="btn" href={`mailto:${perfil.email}`}>{perfil.email}</a>
          <button className="btn btn--contorno" onClick={copiar}>
            {copiado ? 'copiado ✓' : 'copiar e-mail'}
          </button>
        </div>

        <div className="contato__redes">
          <a href={`https://instagram.com/${perfil.instagram}`} target="_blank" rel="noopener noreferrer">
            @{perfil.instagram}
          </a>
          {perfil.linkedin && (
            <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </div>
      </Reveal>
    </section>
  )
}
