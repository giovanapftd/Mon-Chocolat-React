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

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cartaz />
        <Favoritos />
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
