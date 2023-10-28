import Card from "../../components/Card"

import "./home.css";

export default function Home() {
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
            <Card
              imagem={"../../public/images/images.png"}
              titulo={"Slytherine"}
              descricao={"Stylish cafe chair"}
              precoAtual={"Rp 2.500.000"}
              precoAntigo={"Rp 3.500.000"}
            />
            <Card 
              imagem={"../../public/images/image 2.png"}
              titulo={"Leviosa"}
              descricao={"Stylish cafe chair"}
              precoAtual={"Rp 2.500.000"}
            />
            <Card 
              imagem={"../../public/images/images (1).png"}
              titulo={"Lolito"}
              descricao={"Luxury big sofa"}
              precoAtual={"Rp 7.000.000"}
              precoAntigo={"Rp 14.000.000"}
            />
            <Card 
              imagem={"../../public/images/images (2).png"}
              titulo={"Respira"}
              descricao={"Outdoor bar table and stool"}
              precoAtual={"Rp 500.000"}
            />
            <Card 
              imagem={"../../public/images/images (3).png"}
              titulo={"Grifo"}
              descricao={"Night lamp"}
              precoAtual={"Rp 1.500.000"}
            />
            <Card 
              imagem={"../../public/images/images (4).png"}
              titulo={"Muggo"}
              descricao={"Small mug"}
              precoAtual={"Rp 150.000"}
            />
            <Card 
              imagem={"../../public/images/images (5).png"}
              titulo={"Pingky"}
              descricao={"Cute bed set"}
              precoAtual={"Rp 7.000.000"}
              precoAntigo={"Rp 14.000.000"}
            />
            <Card 
              imagem={"../../public/images/image 7.png"}
              titulo={"Potty"}
              descricao={"Minimalist flower pot"}
              precoAtual={"Rp 500.000"}
              precoAntigo={"Rp 3.500.000"}
            />
          </div>
          <div className="botao_veja_mais">
            <a>Show More</a>
          </div>
        </div>
      </main>
    </div>
  );
}