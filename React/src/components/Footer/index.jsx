import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container_footer">
        <div className="container_primeira_coluna">
          <h1 className="texto_logo">Funiro.</h1>
          <p className="texto_primeira_coluna">
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </p>
        </div>
        <div className="container_segunda_coluna">
          <p className="link">Links</p>
          <div className="container_opcoes">
            <a className="home">Home</a>
            <a className="shop">Shop</a>
            <a className="about">About</a>
            <a className="contact">Contact</a>
          </div>
        </div>
        <div className="container_terceira_coluna">
          <p className="help">Help</p>
          <div className="container_opcoes">
            <a className="pagamentos">Payment Options</a>
            <a className="retornos">Returns</a>
            <a className="politica_privacidade">Privacy Policies</a>
          </div>
        </div>
        <div className="container_quarta_coluna">
          <p className="noticias">Newsletter</p>
          <div className="container_input_botao">
            <input
              className="input_noticias"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="botao_inscrever">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="container_bottom_pagina">
        <div className="linha" />
        <p className="creditos">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}

export default Footer;
