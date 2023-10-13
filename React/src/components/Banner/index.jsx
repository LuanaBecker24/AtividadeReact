import './banner.css';

function Banner() {
    return (
        <header className="header">
            <img src='./images/ImagemFundo.png' alt="imagem-de-fundo"/>
            <div className="escritas">
                <p className='pequeno-texto'>New Arrival</p>
                <h1 className='titulo'>Discover Our New Collection</h1>
                <p className='especificacao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className='mudar-pagina'>
                    <a className='botao'>BUY NOW</a>
                </div>
            </div>
        </header>
    )
}
export default Banner;