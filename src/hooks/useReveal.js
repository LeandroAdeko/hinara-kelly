import { useEffect, useRef, useState } from 'react'

// Retorna [ref, visivel]: vira true quando o elemento entra na tela (uma vez só).
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setVisivel(true); return }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisivel(true); obs.disconnect() }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visivel]
}

// Retorna o id da seção que está no meio da tela, para destacar no menu.
export function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(null)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAtiva(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])

  return ativa
}
