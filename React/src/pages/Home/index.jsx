import "./home.css";

function Home() {
  return (
    <div>
      <main className="header_home">
        <img src="./images/ImagemFundo.png" alt="imagem-de-fundo" />
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
        <div className="segunda_parte">
          <h2 className="subtitulo">Browse The Range</h2>
          <p className="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </main>
    </div>
  );
}
export default Home;
