function CardProduto({ produto }) {
  return (
    <article className="cards-cardapio h-100 w-100 mb-0">
      <div className="cardapio-img">
        <img src={produto.img} alt={produto.titulo} loading="lazy" />
      </div>
      <div className="cardapio-corpo">
        <h3 className="titulo-produto">{produto.titulo}</h3>
        <p className="descricao-produto">{produto.descricao}</p>
        <p className="preco-produto">{produto.preco}</p>
        <a className="botao botao-comprar" href="#contato" aria-label={`Comprar ${produto.titulo}: ir para contato`}>Comprar</a>
      </div>
    </article>
  )
}

export default CardProduto
