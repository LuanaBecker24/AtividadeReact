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
                className="img-pair"
                src="../../public/images/Frame 169.png"
                alt="primeira_imagem"
              />
              <h1 className="textos_imagens">Dining</h1>
            </div>
            <div className="container_segunda_imagem">
              <img
                className="img-pair"
                src="../../public/images/image-living room.png"
                alt="segunda_imagem"
              />
              <h1 className="textos_imagens">Living</h1>
            </div>
            <div className="container_terceira_imagem">
              <img
                className="img-pair"
                src="../../public/images/image 101.png"
                alt="terceira_imagem"
              />
              <h1 className="textos_imagens">Bedroom</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
