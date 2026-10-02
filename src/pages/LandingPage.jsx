import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

// Apenas os destinos das âncoras. O conteúdo original será migrado nas próximas etapas.
const secoes = [
  { id: 'sobre', titulo: 'Sobre Nossos Produtos' },
  { id: 'favoritos', titulo: 'Os Favoritos da Mon Chocolat' },
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
        <section id="inicio" className="mc-inicio py-5" aria-labelledby="titulo-inicio">
          <div className="container text-center">
            <h1 id="titulo-inicio">Mon Chocolat</h1>
            <p>Estrutura inicial da landing page.</p>
            <a className="btn mc-botao" href="#cookies">Ver Cardápio</a>
          </div>
        </section>
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
