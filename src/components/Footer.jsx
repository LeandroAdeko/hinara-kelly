import { useState } from 'react'
import { contato, perfil } from '../data/conteudo'
import { Destaque } from './ui'
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
            <p className="footer__eyebrow">{contato.eyebrow}</p>
            <h2 className="footer__titulo"><Destaque {...contato.titulo} /></h2>
            <p className="footer__texto">{contato.texto}</p>
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
              <span className="footer__rotulo">linkedin</span>
              <a href={perfil.linkedin.url} target="_blank" rel="noopener noreferrer">{perfil.linkedin.rotulo}</a>
            </li>
            <li>
              <span className="footer__rotulo">instagram</span>
              <a href={`https://instagram.com/${perfil.instagram}`} target="_blank" rel="noopener noreferrer">
                @{perfil.instagram}
              </a>
            </li>
          </ul>
        </div>

        <p className="footer__credito">© {new Date().getFullYear()} {perfil.nomeCompleto}</p>
      </div>
    </footer>
  )
}
