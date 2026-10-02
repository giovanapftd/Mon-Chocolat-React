import logo from '../../img/logo/Logotipo.png'

const links = [
  { id: 'inicio', texto: 'Início' },
  { id: 'cookies', texto: 'Cookies' },
  { id: 'brownies', texto: 'Brownies' },
  { id: 'donuts', texto: 'Donuts' },
  { id: 'bolos', texto: 'Bolos' },
  { id: 'contato', texto: 'Contato' },
]

function Navbar() {
  function fecharMenu() {
    const menu = document.getElementById('menuPrincipal')
    if (menu?.classList.contains('show')) {
      document.getElementById('menuToggle').click()
    }
  }

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-md mc-navbar" data-bs-theme="dark" aria-label="Menu principal">
        <div className="container-fluid flex-md-column px-3 px-md-4">
          <a className="navbar-brand" href="#inicio" onClick={fecharMenu}>
            <img className="logotipo" src={logo} alt="Mon Chocolat — início" width="56" height="56" />
          </a>
          <button id="menuToggle" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir ou fechar menu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="menuPrincipal">
            <ul className="navbar-nav flex-column flex-md-row gap-2 gap-md-4 py-2 px-2">
              {links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a className="nav-link" href={`#${link.id}`} onClick={fecharMenu}>{link.texto}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
