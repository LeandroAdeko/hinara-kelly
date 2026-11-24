import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { trajetorias } from '../data/conteudo'
import TrocaPaleta from './TrocaPaleta'
import TrocaModo from './TrocaModo'
import './Nav.css'

export default function Nav() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
  }, [aberto])

  const fechar = () => setAberto(false)

  return (
    <nav className={`nav ${rolou ? 'nav--rolou' : ''}`}>
      <div className="wrap nav__inner">
        <Link to="/" className="nav__logo" onClick={fechar}>
          inara<span>.</span>
        </Link>

        <div className="nav__acoes">
          <ul className={`nav__links ${aberto ? 'is-open' : ''}`}>
            <li><NavLink to="/" end onClick={fechar}>home</NavLink></li>
            {trajetorias.map((t) => (
              <li key={t.rota}><NavLink to={t.rota} onClick={fechar}>{t.menu}</NavLink></li>
            ))}
          </ul>

          <div className="nav__preferencias">
            <TrocaModo />
            <TrocaPaleta />
          </div>

          <button
            className={`nav__burger ${aberto ? 'is-open' : ''}`}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            onClick={() => setAberto((v) => !v)}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
