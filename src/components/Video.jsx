import { useState } from 'react'
import './Video.css'

// Vídeo de um projeto. O campo "video" no JSON aceita dois formatos:
// - código do YouTube: o trecho depois de youtu.be/ no link
//   (ex.: https://youtu.be/9pB3RQ4dnV4 → "9pB3RQ4dnV4");
// - arquivo do próprio site: caminho a partir de public/ (ex.: "/videos/clipe.mp4").
// No YouTube, mostra só a capa até a pessoa clicar: a página fica leve e o
// YouTube só carrega quando alguém quer assistir.
export default function Video({ id, titulo }) {
  const [tocando, setTocando] = useState(false)
  const arquivo = id.startsWith('/') || /\.(mp4|webm|mov)$/i.test(id)

  if (arquivo) {
    const src = import.meta.env.BASE_URL + id.replace(/^\//, '')
    return (
      <div className="video">
        {/* #t=0.1 mostra o primeiro quadro como capa; preload="metadata" não baixa o vídeo todo */}
        <video src={`${src}#t=0.1`} controls playsInline preload="metadata" aria-label={titulo} />
      </div>
    )
  }

  return (
    <div className="video">
      {tocando ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__capa" onClick={() => setTocando(true)} aria-label={titulo}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
          </span>
        </button>
      )}
    </div>
  )
}
