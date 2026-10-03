import cookie from '../../img/icones/Cookies.png'
import brownie from '../../img/icones/Brownie.png'
import donuts from '../../img/icones/Donuts.png'
import bolo from '../../img/icones/Bolo.png'

const categorias = [
  { nome: 'Cookies', imagem: cookie, descricao: 'Crocantes por fora, macios por dentro.' },
  { nome: 'Brownies', imagem: brownie, descricao: 'Intensos, macios e cheios de chocolate.' },
  { nome: 'Donuts', imagem: donuts, descricao: 'Leves, macios e irresistivelmente doces.' },
  { nome: 'Bolos', imagem: bolo, descricao: 'Fofinhos, saborosos e feitos com carinho.' },
]

function Sobre() {
  return (
    <section id="sobre" className="px-3 px-md-4 py-5" aria-labelledby="titulo-sobre">
      <div id="sobre-produtos" className="p-4 p-lg-5">
        <h2 id="titulo-sobre" className="display-4">Sobre Nossos <span className="marcado-rosa">Produtos</span></h2>
        <p>Na <span className="marcado-rosa">Mon Chocolat</span>, cada doce é preparado para transformar pequenos momentos em experiências deliciosas. Nossos <span className="marcado-enfase">cookies, brownies, donuts e bolos </span>combinam sabor, carinho e ingredientes selecionados para criar doces irresistíveis.</p>
        <p>Do clássico ao mais especial, cada produto é feito pensando em quem acredita que todo dia merece um pouco mais de chocolate e felicidade.</p>
        <div id="cards-icones" className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {categorias.map((categoria) => (
            <div className="col" key={categoria.nome}>
              <div className="cards-icones" role="group" tabIndex="0" aria-label={`${categoria.nome}: ${categoria.descricao}`}>
                <div className="card-frente" aria-hidden="true">
                  <img src={categoria.imagem} alt={`Ícone de ${categoria.nome}`} className="icone" loading="lazy" />
                </div>
                <div className="card-verso" aria-hidden="true"><p>{categoria.descricao}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
