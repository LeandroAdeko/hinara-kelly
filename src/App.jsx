import Nav from './components/Nav'
import Hero from './components/Hero'
import Faixa from './components/Faixa'
import Sobre from './components/Sobre'
import Manifesto from './components/Manifesto'
import Trajetoria from './components/Trajetoria'
import Producoes from './components/Producoes'
import Comunidade from './components/Comunidade'
import Fortalezas from './components/Fortalezas'
import Contato from './components/Contato'
import { perfil } from './data/conteudo'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Faixa />
        <Sobre />
        <Manifesto />
        <Trajetoria />
        <Producoes />
        <Comunidade />
        <Faixa invertida palavras={Array(4).fill('quando não existe oportunidade, eu crio')} />
        <Fortalezas />
        <Contato />
      </main>
      <footer className="rodape">© {new Date().getFullYear()} {perfil.nomeCompleto}</footer>
    </>
  )
}
