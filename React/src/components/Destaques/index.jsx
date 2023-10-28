import "./destaques.css";

import { Trophy, BadgeCheck, Package, Speech } from 'lucide-react';

export default function Destaques() {
    return (
        <main>
            <div className="destaques">
                <div className="container_destaques">
                    <div className="conteudo_destaques">
                        <div className="icone">
                            <Trophy style={{width: 60, height: 60}} />
                        </div>
                        <div className="texto_destaque">
                            <h1>High Quality</h1>
                            <p>crafted from top materials</p>
                        </div>
                    </div>
                    <div className="conteudo_destaques">
                        <div className="icone">
                            <BadgeCheck style={{width: 60, height: 60}} />
                        </div>
                        <div className="texto_destaque">
                            <h1>Warranty Protection</h1>
                            <p>Over 2 years</p>
                        </div>
                    </div>
                    <div className="conteudo_destaques">
                        <div className="icone">
                            <Package style={{width: 60, height: 60}} />
                        </div>
                        <div className="texto_destaque">
                            <h1>Free Shipping</h1>
                            <p>Order over 150 $</p>
                        </div>
                    </div>
                    <div className="conteudo_destaques">
                        <div className="icone">
                            <Speech style={{width: 60, height: 60}} />
                        </div>
                        <div className="texto_destaque">
                            <h1>24 / 7 Support</h1>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}