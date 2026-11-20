import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { trajetorias } from '../data/conteudo'
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
          hinara<span>.</span>
        </Link>

        <button
          className={`nav__burger ${aberto ? 'is-open' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <span /><span />
        </button>

        <ul className={`nav__links ${aberto ? 'is-open' : ''}`}>
          <li><NavLink to="/" end onClick={fechar}>home</NavLink></li>
          {trajetorias.map((t) => (
            <li key={t.rota}><NavLink to={t.rota} onClick={fechar}>{t.menu}</NavLink></li>
          ))}        </ul>
      </div>
    </nav>
  )
}
