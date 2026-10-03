import CardProduto from './CardProduto.jsx'

function CategoriaProdutos({ id, titulo, produtos }) {
  return (
    <section id={id} className="mc-categoria py-5" aria-labelledby={`titulo-${id}`}>
      <h2 id={`titulo-${id}`} className="display-4 text-center mb-4">{titulo}</h2>
      <div className="container-fluid px-3 px-md-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
          {produtos.map((produto) => (
            <div className="col" key={produto.titulo}>
              <CardProduto produto={produto} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriaProdutos
