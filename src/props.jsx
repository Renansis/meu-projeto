import img from "./img/iqbalstock-business-7304257_1920.jpg"
function Name (props){
    return(
        <div className="Tudo">
        <div className="Produto1">
        <h3 className="TituloIphone">{props.tilte}</h3>
        <img src={img} className="img1"/>
        <p>{props.preco}</p>
        </div>
        <p className="Paragrafo">{props.texto}</p>
        <button className="Acao">{props.button}</button>
        </div>
    )
}

export default Name;

