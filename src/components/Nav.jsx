import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MOSTRAR_BOTAO_LINGUA, useConteudo } from '../i18n/Lingua'
import TrocaPaleta from './TrocaPaleta'
import TrocaModo from './TrocaModo'
import TrocaLingua from './TrocaLingua'
import SeletorFonte from './SeletorFonte'

import './Nav.css'

// A paleta oficial é a terra. O botão de trocar paleta fica escondido, mas o código
// continua pronto: mude para true para mostrar o botão de novo.
const MOSTRAR_BOTAO_PALETA = false

// A fonte oficial é a Inter Tight. O painel de fontes ("Aa") fica escondido, mas o
// código continua pronto: mude para true para mostrar o botão de novo e siga o
// comentário do index.html para o site voltar a lembrar a escolha da visitante.
const MOSTRAR_BOTAO_FONTE = false

export default function Nav() {
  const { trajetorias, ui } = useConteudo()
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
            <li><NavLink to="/" end onClick={fechar}>{ui.menu.home}</NavLink></li>
            {trajetorias.map((t) => (
              <li key={t.rota}><NavLink to={t.rota} onClick={fechar}>{t.menu}</NavLink></li>
            ))}
          </ul>

          <div className="nav__preferencias">
            {MOSTRAR_BOTAO_LINGUA && <TrocaLingua />}
            <TrocaModo />
            {MOSTRAR_BOTAO_PALETA && <TrocaPaleta />}
            {MOSTRAR_BOTAO_FONTE && <SeletorFonte />}
          </div>

          <button
            className={`nav__burger ${aberto ? 'is-open' : ''}`}
            aria-label={aberto ? ui.menu.fechar : ui.menu.abrir}
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
