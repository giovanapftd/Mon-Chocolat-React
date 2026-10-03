import CategoriaProdutos from '../components/CategoriaProdutos.jsx'
import { produtos } from '../data/produtos.js'

function Cookies() {
  return <CategoriaProdutos id="cookies" titulo="Cookies" produtos={produtos.cookies} />
}

export default Cookies
