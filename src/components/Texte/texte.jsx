import "./texte.css"
import Accordeon from "../Accordeon/accordeon"
import texte from "../../data/texte.json"
function Texte (){
return (
<div className="service-contenant">
    <div className="service-titre">
        <h1>Bienvenue chez Laulie Web,</h1>
    </div>
    <div className="service-entete">
        <p>votre partenaire numérique pour propulser votre présence en ligne vers de nouveaux
        sommets. Je suis passionnée et dévouée, spécialisée dans la création de sites web sur mesure, le développement
        d'e-commerce et l'optimisation de la visibilité en ligne.
        </p>
    </div>
    <div className="service-accordeon-contenant">
        {
            texte.map((product)=>{
                return(
                    <div className="service-accordeon">
                    <Accordeon title={product.titre} content={product.description}>
                    </Accordeon>
                  </div>
                )
            })
        }
          </div>
</div>
)
}
export default Texte