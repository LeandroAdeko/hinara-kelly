import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { montarConteudo } from '../data/conteudo'

// Carrega todos os JSONs de src/locales/. Para criar uma língua nova, basta
// copiar um JSON (ex.: pt.json → fr.json), traduzir e ajustar o bloco "lingua":
// ela aparece sozinha no seletor do menu, na posição definida por "ordem".
const arquivos = import.meta.glob('../locales/*.json', { eager: true, import: 'default' })

export const LINGUAS = Object.entries(arquivos)
  .map(([caminho, textos]) => ({ id: caminho.match(/([\w-]+)\.json$/)[1], ...textos.lingua, textos }))
  .sort((a, b) => (a.ordem ?? 99) - (b.ordem ?? 99))

const PADRAO = 'pt'
const CHAVE = 'lingua'

// O botão de língua (PT · EN · ES) está escondido: o site abre sempre em português.
// Mude para true para mostrar o botão no menu de novo; aí o site volta a usar a
// língua do navegador da visitante e a lembrar a escolha dela.
export const MOSTRAR_BOTAO_LINGUA = false

// Escolha salva > língua do navegador (pt, en, es...) > português
function linguaInicial() {
  if (!MOSTRAR_BOTAO_LINGUA) return PADRAO
  const existe = (id) => LINGUAS.some((l) => l.id === id)
  try {
    const salva = localStorage.getItem(CHAVE)
    if (salva && existe(salva)) return salva
  } catch { /* navegação privada */ }
  for (const pref of navigator.languages ?? [navigator.language]) {
    const id = String(pref).toLowerCase().split('-')[0]
    if (existe(id)) return id
  }
  return PADRAO
}

// Troca {chave} pelos valores: preencher('Ver em {lingua}', { lingua: 'English' })
export const preencher = (texto, valores) => texto.replace(/\{(\w+)\}/g, (_, k) => valores[k] ?? '')

const Contexto = createContext(null)

export function LinguaProvider({ children }) {
  const [lingua, setLingua] = useState(linguaInicial)
  const atual = LINGUAS.find((l) => l.id === lingua) ?? LINGUAS[0]
  const conteudo = useMemo(() => montarConteudo(atual.textos), [atual])

  useEffect(() => {
    document.documentElement.lang = atual.codigo
    document.querySelector('meta[name="description"]')?.setAttribute('content', conteudo.ui.descricao)
  }, [atual, conteudo])

  const escolher = (id) => {
    setLingua(id)
    try { localStorage.setItem(CHAVE, id) } catch { /* navegação privada: só não salva */ }
  }

  return (
    <Contexto.Provider value={{ lingua: atual.id, escolher, conteudo }}>
      {children}
    </Contexto.Provider>
  )
}

export function useLingua() {
  return useContext(Contexto)
}

// Atalho: const { hero, perfil } = useConteudo()
export function useConteudo() {
  return useContext(Contexto).conteudo
}
