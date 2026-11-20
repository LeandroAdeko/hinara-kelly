import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import TrajetoriaPagina from './pages/TrajetoriaPagina'
import { estrategia, producao } from './data/conteudo'

// Volta ao topo sempre que muda de página.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={estrategia.rota} element={<TrajetoriaPagina key="estrategia" dados={estrategia} />} />
          <Route path={producao.rota} element={<TrajetoriaPagina key="producao" dados={producao} />} />
          {/* link antigo continua funcionando */}
          <Route path="/trajetoria" element={<Navigate to={estrategia.rota} replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
