import { useEffect, useRef, useState } from 'react'
import { useConteudo } from '../i18n/Lingua'
import './Galeria.css'

// Grade de imagens de um projeto. Clicar numa imagem abre um modal com ela grande.
// O modal fecha com ESC, clicando fora da imagem ou no X; com mais de uma
// imagem, dá para navegar pelas setas na tela ou no teclado.
// "imagens": lista de { src (caminho a partir de public/), alt }.
export default function Galeria({ imagens }) {
  const { ui } = useConteudo()
  const textos = ui.trajetoria.galeria
  const [aberta, setAberta] = useState(null) // índice da imagem no modal
  const dialogo = useRef(null)
  const caminho = (src) => import.meta.env.BASE_URL + src.replace(/^\//, '')
  const varias = imagens.length > 1

  useEffect(() => {
    const d = dialogo.current
    if (!d) return
    if (aberta !== null && !d.open) d.showModal()
    if (aberta === null && d.open) d.close()
  }, [aberta])

  const mover = (passo) => setAberta((i) => (i + passo + imagens.length) % imagens.length)

  const teclado = (e) => {
    if (!varias) return
    if (e.key === 'ArrowRight') mover(1)
    if (e.key === 'ArrowLeft') mover(-1)
  }

  const atual = aberta !== null ? imagens[aberta] : null

  return (
    <>
      <div className={`galeria galeria--${Math.min(imagens.length, 2)}`}>
        {imagens.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`galeria__item${img.recorte ? ' galeria__item--recorte' : ''}`}
            onClick={() => setAberta(i)}
            aria-label={`${textos.ampliar}: ${img.alt}`}
          >
            {/* "recorte" (opcional): mostra só um trecho 16:9 na página, ex. "50% 0%" = topo;
                no modal a imagem aparece inteira */}
            <img src={caminho(img.src)} alt="" loading="lazy" style={img.recorte ? { objectPosition: img.recorte } : undefined} />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogo}
        className="galeria__modal"
        aria-label={atual?.alt}
        onClose={() => setAberta(null)}
        onKeyDown={teclado}
        // clique no fundo (fora da imagem e dos botões) fecha
        onClick={(e) => { if (e.target === e.currentTarget || e.target.classList.contains('galeria__palco')) setAberta(null) }}
      >
        {atual && (
          <div className="galeria__palco">
            <img src={caminho(atual.src)} alt={atual.alt} />
            {varias && (
              <>
                <button type="button" className="galeria__seta galeria__seta--anterior" onClick={() => mover(-1)} aria-label={textos.anterior}>‹</button>
                <button type="button" className="galeria__seta galeria__seta--proxima" onClick={() => mover(1)} aria-label={textos.proxima}>›</button>
                <p className="galeria__contador">{aberta + 1} / {imagens.length}</p>
              </>
            )}
            <button type="button" className="galeria__fechar" onClick={() => setAberta(null)} aria-label={textos.fechar} autoFocus>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
