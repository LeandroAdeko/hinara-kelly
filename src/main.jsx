import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { LinguaProvider } from './i18n/Lingua'

// HashRouter (URLs com #/trajetoria) funciona no GitHub Pages sem dar 404 ao recarregar a página.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LinguaProvider>
        <App />
      </LinguaProvider>
    </HashRouter>
  </StrictMode>
)
