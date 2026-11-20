import { useReveal } from '../hooks/useReveal'
import './ui.css'

// Texto com uma parte em amarelo: { antes, destaque, depois }
export function Destaque({ antes = '', destaque = '', depois = '' }) {
  return (
    <>
      {antes}
      <span className="destaque">{destaque}</span>
      {depois}
    </>
  )
}

// Foto real quando `src` existir; senão, espaço reservado com legenda.
export function Foto({ src, alt, legenda, posicao, className = '' }) {
  if (src) {
    // Caminhos como '/fotos/x.jpg' ganham a base do site (ex.: /hinara-kelly/fotos/x.jpg)
    const url = /^(https?:)?\/\//.test(src) ? src : import.meta.env.BASE_URL + src.replace(/^\//, '')
    return <img className={`foto ${className}`} src={url} alt={alt} loading="lazy" style={posicao ? { objectPosition: posicao } : undefined} />
  }
  return (
    <div className={`foto foto--vazia ${className}`} role="img" aria-label={alt}>
      <span>{legenda}</span>
    </div>
  )
}

// Cabeçalho padrão das seções.
export function TituloSecao({ eyebrow, titulo }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="titulo-secao"><Destaque {...titulo} /></h2>
    </>
  )
}

// Aparece suavemente quando entra na tela.
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visivel] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visivel ? 'reveal--on' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
