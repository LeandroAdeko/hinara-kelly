import { LINGUAS, preencher, useLingua } from '../i18n/Lingua'
import './TrocaLingua.css'

// Seletor PT / EN / ES no menu. As opções vêm dos JSONs de src/locales/.
export default function TrocaLingua() {
  const { lingua, escolher, conteudo } = useLingua()
  const { rotulo, trocar } = conteudo.ui.idioma

  return (
    <div className="troca-lingua" role="group" aria-label={rotulo}>
      {LINGUAS.map((l) => (
        <button
          key={l.id}
          type="button"
          lang={l.codigo}
          className={l.id === lingua ? 'is-ativa' : ''}
          aria-pressed={l.id === lingua}
          aria-label={preencher(trocar, { lingua: l.nome })}
          title={l.nome}
          onClick={() => escolher(l.id)}
        >
          {l.sigla}
        </button>
      ))}
    </div>
  )
}
