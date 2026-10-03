import CategoriaProdutos from '../components/CategoriaProdutos.jsx'
import { produtos } from '../data/produtos.js'

function Donuts() {
  return <CategoriaProdutos id="donuts" titulo="Donuts" produtos={produtos.donuts} />
}

export default Donuts
