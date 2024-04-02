import "../Galerie/galerie.css"
import galerie from "../../data/galerie.json"
import { Link } from "react-router-dom"

function Galerie (){
return(
<section className="galerie">

    {galerie.map((product)=>{
    return(<Link to={product.liens} className="galerie-liens">
        <div key={product.id} className="galerie-contenant">
            <div className="galerie-titre">
                <h2>{product.titre}</h2>
            </div>
            <div className="galerie-img">
                <img src={product.photo} alt="site internet tourcoing"></img>
            </div>
        </div>
    </Link>
    )
    })}
</section>
)
}
export default Galerie