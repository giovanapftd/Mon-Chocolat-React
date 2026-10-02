import { useEffect, useRef } from 'react'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import cookie from '../../img/Cookie.png'
import brownie from '../../img/Brownie.png'
import bolo from '../../img/Bolo.png'
import donuts from '../../img/Donuts.png'

const imagens = [
  { src: cookie, alt: 'Cookie' },
  { src: brownie, alt: 'Brownie' },
  { src: bolo, alt: 'Bolo' },
  { src: donuts, alt: 'Donuts' },
]

function Hero() {
  const carrosselRef = useRef(null)

  useEffect(() => {
    const banner = carrosselRef.current.closest('section')
    let quadro = null

    // Mantém o fundo na altura da tela mesmo enquanto o slide se move de lado.
    function atualizarFundo() {
      quadro = null
      banner.style.setProperty('--mc-fundo-y', `${-banner.getBoundingClientRect().top}px`)
    }

    function agendarAtualizacao() {
      if (quadro === null) quadro = window.requestAnimationFrame(atualizarFundo)
    }

    atualizarFundo()
    window.addEventListener('scroll', agendarAtualizacao, { passive: true })
    window.addEventListener('resize', agendarAtualizacao)
    return () => {
      window.removeEventListener('scroll', agendarAtualizacao)
      window.removeEventListener('resize', agendarAtualizacao)
      if (quadro !== null) window.cancelAnimationFrame(quadro)
    }
  }, [])

  useEffect(() => {
    // O Bootstrap controla a troca das imagens; React cuida da montagem e limpeza.
    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const carrossel = new bootstrap.Carousel(carrosselRef.current, {
      interval: 4000,
      ride: movimentoReduzido ? false : 'carousel',
    })
    return () => carrossel.dispose()
  }, [])

  return (
    <section id="inicio" className="mc-hero" aria-labelledby="titulo-inicio">
      <div id="carouselBanner" ref={carrosselRef} className="carousel slide" aria-label="Imagens dos doces da Mon Chocolat">
        <div className="carousel-inner">
          {imagens.map((imagem, indice) => (
            <div className={`carousel-item${indice === 0 ? ' active' : ''}`} key={imagem.alt}>
              <div className="mc-slide-fundo" style={{ backgroundImage: `url(${imagem.src})` }} aria-hidden="true" />
              <img className="visually-hidden" src={imagem.src} alt={imagem.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="mc-hero-texto text-center px-4">
        <h1 id="titulo-inicio">Mon Chocolat</h1>
        <p>Chocolate não é só um sabor. É parte da nossa essência.</p>
        <p>Do cookie ao bolo, ele está presente em cada criação da nossa loja.</p>
        <p className="frase-final">Doçura • Sabor • Delicadeza</p>
        <div className="linha-fina" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
