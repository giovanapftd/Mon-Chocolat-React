import { favoritos } from '../data/favoritos.js'

function Favoritos() {
  return (
    <section id="favoritos" className="px-2 px-md-4 py-5" aria-labelledby="titulo-favoritos">
      <h2 id="titulo-favoritos" className="display-4">Os Favoritos da <span className="marcado-rosa">Mon Chocolat</span></h2>
      <p className="favoritos-subtitulo">Os queridinhos de quem ama um bom doce!</p>
      <div className="favoritos row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mx-auto px-3 px-md-4">
        {favoritos.map((produto) => (
          <div className="col" key={produto.id}>
            <article className="cards-cardapio h-100">
              <div className="cardapio-img"><img src={produto.imagem} alt={produto.titulo} loading="lazy" /></div>
              <div className="cardapio-corpo">
                <h3 className="titulo-produto">{produto.titulo}</h3>
                <p className="descricao-produto">{produto.descricao}</p>
                <p className="preco-produto">{produto.preco}</p>
                <a className="botao" href={produto.destino} aria-label={`Ver cardápio de ${produto.categoria}`}>Ver Cardápio</a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Favoritos
