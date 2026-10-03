import CategoriaProdutos from '../components/CategoriaProdutos.jsx'
import { produtos } from '../data/produtos.js'

function Bolos() {
  return <CategoriaProdutos id="bolos" titulo="Bolos" produtos={produtos.bolos} />
}

export default Bolos
