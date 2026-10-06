import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Sobre from '../sections/Sobre.jsx'
import Cartaz from '../sections/Cartaz.jsx'
import Favoritos from '../sections/Favoritos.jsx'
import Cookies from '../sections/Cookies.jsx'
import Brownies from '../sections/Brownies.jsx'
import Donuts from '../sections/Donuts.jsx'
import Bolos from '../sections/Bolos.jsx'
import Contato from '../sections/Contato.jsx'

// Reúne as seções do site em uma única página.
function LandingPage() {
  return (
    <>
      <a className="pular-conteudo" href="#conteudo-principal">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1}>
        {/* Conteúdo da página inicial original. */}
        <Hero />
        <Sobre />
        <Cartaz />
        <Favoritos />
        {/* Cardápios das antigas páginas de produtos. */}
        <Cookies />
        <Brownies />
        <Donuts />
        <Bolos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
