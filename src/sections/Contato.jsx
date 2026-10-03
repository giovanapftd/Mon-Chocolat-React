import cookie from '../../img/icones/Cookies.png'

const canais = [
  { id: 'whatsapp', nome: 'WhatsApp', icone: 'whatsapp', descricao: 'Converse com a gente sobre sabores, disponibilidade e sua próxima encomenda.' },
  { id: 'instagram', nome: 'Instagram', icone: 'instagram', descricao: 'Acompanhe nossos doces, encontre inspiração e mande uma mensagem.' },
  { id: 'facebook', nome: 'Facebook', icone: 'facebook', descricao: 'Fique por perto e acompanhe as novidades da Mon Chocolat.' },
  { id: 'email', nome: 'E-mail', icone: 'envelope-heart', descricao: 'Conte sua ideia para uma ocasião especial, evento ou parceria.' },
]

function Contato() {
  return (
    <section id="contato" className="pagina-contato pb-5" aria-labelledby="contato-titulo">
      <div className="contato-abertura">
        <p className="contato-sobretitulo">UM POUQUINHO MAIS PERTO DE VOCÊ</p>
        <h2 id="contato-titulo" className="display-3">Vamos adoçar sua conversa?</h2>
        <p className="contato-sobretitulo-2">Será um prazer falar com você!</p>
      </div>
      <div className="contato-canais px-3 px-md-4 pt-4 pb-5">
        <h2 id="canais-titulo">Fale com a Mon Chocolat</h2>
        <p className="contato-subtitulo">Uma marca fictícia, feita para imaginar momentos mais doces.</p>
        <p id="contato-demo" className="contato-demo">Página demonstrativa: número fictício e canais sem atendimento.</p>
        <div className="contato-grade row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {canais.map((canal) => (
            <div className="col" key={canal.id}>
              <article className="contato-card h-100 w-100 mb-0">
                <span className="contato-icone" aria-hidden="true"><i className={`bi bi-${canal.icone}`} /></span>
                <h3>{canal.nome}</h3>
                <p>{canal.descricao}</p>
                <span className={`contato-acao contato-acao-${canal.id}`} aria-describedby="contato-demo">{canal.nome}</span>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="contato-encomenda p-4 p-md-5 mb-5">
        <div className="row align-items-center g-4 g-md-5">
          <div className="contato-encomenda-ilustracao col-12 col-md-4">
            <img src={cookie} alt="" loading="lazy" />
            <p>Feito com carinho.<br />Para momentos especiais.</p>
          </div>
          <div className="col-12 col-md-8">
            <p className="contato-sobretitulo-2">DO SEU JEITINHO</p>
            <h2 id="encomenda-titulo">Pensando em uma encomenda?</h2>
            <p>Escolha seus favoritos no cardápio e, ao entrar em contato, conte quais doces deseja, a quantidade e a data que tem em mente. Assim, podemos conversar sobre todos os detalhes.</p>
            <a className="contato-cardapio" href="#favoritos">Explorar o cardápio <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
