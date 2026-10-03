import CategoriaProdutos from '../components/CategoriaProdutos.jsx'
import { produtos } from '../data/produtos.js'

function Brownies() {
  return <CategoriaProdutos id="brownies" titulo="Brownies" produtos={produtos.brownies} />
}

export default Brownies
