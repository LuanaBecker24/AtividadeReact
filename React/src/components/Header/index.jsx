import { Link } from "react-router-dom";

import Shop from "../../pages/Shop";

import { User, Search, Heart, ShoppingCart } from 'lucide-react'

import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container_logo">
      <div className="logo">
        <img src="./images/Meubel House_Logos-05.png" alt="Logo do site" />
      </div>
      <div className="nome">
        <h1>Furniro</h1>
      </div>
      </div>
      <div className="paginas">
        <a className="home">Home</a>
        <a className="shop" to={"/shop"}>
          Shop
        </a>
        <a className="about">About</a>
        <a className="contact">Contact</a>
      </div>
      <div className="container_icones">
        <User />
        <Search />
        <Heart />
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Header;
