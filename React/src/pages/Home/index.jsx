import Card from "../../components/Card"

import { ArrowRight, ChevronRight, Minus } from 'lucide-react'

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
        <div className="quarta_parte">
          <div className="separacao">
            <div className="parte_inicial">
              <div className="escritas">
                <h1>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <div className="botao_explorar">
                  <a>Explore More</a>
                </div>
              </div>
              <div className="segundo_banner">
                <div className="container_elementos">
                  <div className="conteudo_total">
                    <div className="escrita_total">
                      <div className="banner_escritas">
                        <div className="primeira_escrita">
                          <p>01</p>
                          <Minus />
                          <p>Bed Room</p>
                        </div>
                        <h2>Inner Peace</h2>
                      </div>
                    </div>
                    <div className="botao_proximo">
                      <a><ArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carrossel_imagens">
              <img src="../../public/images/Rectangle 25.png" alt="primeira_imagem_carrossel" className="primeira_imagem_carrossel" />
              <img src="../../public/images/Rectangle 26.png" alt="segunda_imagem_carrossel" className="segunda_imagem_carrossel" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}