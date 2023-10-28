import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt="imagem" />
      <div className="textos_card">
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
        <div className="rp">
          <h2>{props.precoAtual}</h2>
          <p>{props.precoAntigo}</p>
        </div>
      </div>
    </div>
  );
}
