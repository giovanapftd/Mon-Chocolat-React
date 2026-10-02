import logo from '../../img/logo/Logotipo.png'

function Footer() {
  return (
    <footer id="footer" className="mc-footer">
      <div className="container d-flex flex-column flex-lg-row justify-content-evenly gap-4 gap-lg-5 px-3 py-5">
        <div className="footer-logotipo text-center">
          <img className="logotipo" src={logo} alt="Logotipo da Mon Chocolat" width="112" height="112" />
          <p className="mt-3">Feito com amor e muito chocolate.</p>
        </div>
        <nav className="footer-links text-center" aria-label="Cardápio no rodapé">
          <h2>Cardápio</h2>
          <ul className="list-unstyled mb-0">
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#brownies">Brownie</a></li>
            <li><a href="#donuts">Donuts</a></li>
            <li><a href="#bolos">Bolos</a></li>
          </ul>
        </nav>
        <div className="redes-sociais text-center">
          <h2>Redes Sociais</h2>
          <div className="redes-icones d-flex flex-column align-items-center gap-2">
            <a href="#contato" className="whatsapp"><i className="bi bi-whatsapp" aria-hidden="true" /> WhatsApp</a>
            <a href="#contato" className="instagram"><i className="bi bi-instagram" aria-hidden="true" /> Instagram</a>
            <a href="#contato" className="facebook"><i className="bi bi-facebook" aria-hidden="true" /> Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-rodape text-center py-3">
        <p className="mb-0">© 2026 Mon Chocolat. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
