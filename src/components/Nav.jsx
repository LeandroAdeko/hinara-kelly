import { useEffect, useState } from 'react'
import { navegacao } from '../data/conteudo'
import { useSecaoAtiva } from '../hooks/useReveal'
import './Nav.css'

const IDS = navegacao.map((n) => n.id)

export default function Nav() {
  const ativa = useSecaoAtiva(IDS)
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

  return (
    <nav className={`nav ${rolou ? 'nav--rolou' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#topo" className="nav__logo" onClick={() => setAberto(false)}>
          hinara<span>.</span>
        </a>

        <button
          className={`nav__burger ${aberto ? 'is-open' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <span /><span />
        </button>

        <ul className={`nav__links ${aberto ? 'is-open' : ''}`}>
          {navegacao.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={ativa === item.id ? 'is-active' : ''}
                onClick={() => setAberto(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
