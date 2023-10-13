import './header.css';

function Header() {
    return (
        <header className="header">
            <div className='logo'>
                <img src='./images/Meubel House_Logos-05.png' alt="Logo do site"/>
            </div>
            <div className='nome'>
                <h1>Furniro</h1>
            </div>
            <div className='paginas'>
                <a className='home'>Home</a>
                <a className='shop'>Shop</a>
                <a className='about'>About</a>
                <a className='contact'>Contact</a>
            </div>
        </header>
    )
}

export default Header;