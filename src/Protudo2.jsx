
import img from "./img/16078228-iphone-5051984.jpg"

function Produto2(props){

    return(

        <div className="Tudo2">

         <img src={img} alt="img" className="img2"/>

         <p>{props.preco}</p>

         <p className="Paragrafo2">{props.texto}</p>
         
         <button className="button1">{props.button}</button>

        </div>
    )
}

export default Produto2;