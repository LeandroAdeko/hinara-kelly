import { useState } from 'react'
import { perfil } from '../data/conteudo'
import './Footer.css'

export default function Footer() {
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
    <footer className="footer" id="contato">
      <div className="wrap">
        <div className="footer__topo">
          <div>
            <p className="footer__eyebrow">entre em <b>contato</b></p>
            <div className="footer__adupe">adupè<span>.</span></div>
          </div>

          <ul className="footer__contatos">
            <li>
              <span className="footer__rotulo">e-mail</span>
              <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
              <button type="button" className="footer__copiar" onClick={copiar}>
                {copiado ? 'copiado ✓' : 'copiar'}
              </button>
            </li>
            <li>
              <span className="footer__rotulo">instagram</span>
              <a href={`https://instagram.com/${perfil.instagram}`} target="_blank" rel="noopener noreferrer">
                @{perfil.instagram}
              </a>
            </li>
            {perfil.linkedin && (
              <li>
                <span className="footer__rotulo">linkedin</span>
                <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            )}
          </ul>
        </div>

        <p className="footer__credito">© {new Date().getFullYear()} {perfil.nomeCompleto}</p>
      </div>
    </footer>
  )
}
