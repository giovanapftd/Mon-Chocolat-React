import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Sobre from '../sections/Sobre.jsx'
import Cartaz from '../sections/Cartaz.jsx'
import Favoritos from '../sections/Favoritos.jsx'

// As páginas de categorias e contato serão migradas na Etapa 6.
const secoes = [
  { id: 'cookies', titulo: 'Cookies' },
  { id: 'brownies', titulo: 'Brownies' },
  { id: 'donuts', titulo: 'Donuts' },
  { id: 'bolos', titulo: 'Bolos' },
  { id: 'contato', titulo: 'Contato' },
]

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cartaz />
        <Favoritos />
        {secoes.map((secao) => (
          <section id={secao.id} className="mc-secao py-5" aria-labelledby={`titulo-${secao.id}`} key={secao.id}>
            <div className="container text-center">
              <h2 id={`titulo-${secao.id}`}>{secao.titulo}</h2>
              <p className="mb-0">Conteúdo desta seção será migrado nas próximas etapas.</p>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
