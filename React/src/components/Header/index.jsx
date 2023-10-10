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
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </header>
    )
}

export default Header;