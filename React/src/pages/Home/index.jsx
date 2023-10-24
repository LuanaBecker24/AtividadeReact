import "./home.css";

function Home() {
  return (
    <div>
      <main className="header_home">
        <div className="container_banner">
          <div className="container_primeira_parte">
            <div className="primeira_parte">
              <p className="pequeno-texto">New Arrival</p>
              <h1 className="titulo">Discover Our New Collection</h1>
              <p className="especificacao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <div className="mudar-pagina">
                <a className="botao">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className="segunda_parte">
          <div className="container_escritas">
            <h2 className="subtitulo">Browse The Range</h2>
            <p className="frase">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="container_imagens">
            <div className="container_primeira_imagem">
              <img
                className="img_pair"
                src="../../public/images/Frame 169.png"
                alt="primeira_imagem"
              />
              <h1 className="textos_imagens">Dining</h1>
            </div>
            <div className="container_segunda_imagem">
              <img
                className="img_pair"
                src="../../public/images/image-living room.png"
                alt="segunda_imagem"
              />
              <h1 className="textos_imagens">Living</h1>
            </div>
            <div className="container_terceira_imagem">
              <img
                className="img_pair"
                src="../../public/images/image 101.png"
                alt="terceira_imagem"
              />
              <h1 className="textos_imagens">Bedroom</h1>
            </div>
          </div>
        </div>
        <div className="terceira_parte">
          <h1 className="titulo_terceira_parte">Our Products</h1>
          <div className="cards">
            <div className="imagens_primeira_coluna">
              <div className="card">
                <img src="../../public/images/images.png" alt="primeira_imagem" />
                <div className="textos_card">
                  <h1>Syltherine</h1>
                  <p>Stylish cafe chair</p>
                  <div className="rp">
                    <h2>Rp 2.500.000</h2>
                    <p className="texto_rp">Rp 3.500.000</p>
                  </div>
                </div>
              </div>
              <div className="card" >
                <img src="../../public/images/image 2.png" alt="segunda_imagem" />
                <div className="textos_card">
                  <h1>Leviosa</h1>
                  <p>Stylish cafe chair</p>
                  <h2>Rp 2.500.000</h2>
                </div>
              </div>
              <div className="card" >
                <img src="../../public/images/images (1).png" alt="terceira_imagem" />
                <div className="textos_card">
                  <h1>Lolito</h1>
                  <p>Luxury big sofa</p>
                  <div className="rp">
                    <h2>Rp 7.000.000</h2>
                    <p>Rp 14.000.000</p>
                  </div>
                </div>
              </div>
              <div className="card" >
                <img src="../../public/images/images (2).png" alt="quarta_imagem" />
                <div className="textos_card">
                  <h1>Respira</h1>
                  <p>Outdoor bar table and stool</p>
                  <h2>Rp 500.000</h2>
                </div>
              </div>
            </div>
            <div className="imagens_segunda_coluna">
              <div className="card">
                <img src="../../public/images/images (3).png" alt="quinta_imagem" />
                <div className="textos_card">
                  <h1>Grifo</h1>
                  <p>Night lamp</p>
                  <h2>Rp 1.500.000</h2>
                </div>
              </div>
              <div className="card" >
                <img src="../../public/images/images (4).png" alt="sexta_imagem" />
                <div className="textos_card">
                  <h1>Muggo</h1>
                  <p>Small mug</p>
                  <h2>Rp 150.000</h2>
                </div>
              </div>
              <div className="card" >
                <img src="../../public/images/images (5).png" alt="setima_imagem" />
                <div className="textos_card">
                  <h1>Pingky</h1>
                  <p>Cute bed set</p>
                  <div className="rp">
                    <h2>Rp 7.000.000</h2>
                    <p>Rp 14.000.000</p>
                  </div>
                </div>
              </div>
              <div className="card" >
                <img src="../../public/images/image 7.png" alt="oitava_imagem" />
                <div className="textos_card">
                  <h1>Potty</h1>
                  <p>Minimalist flower pot</p>
                  <h2>Rp 500.000</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="botao_veja_mais">
            <a href="">Show More</a>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
