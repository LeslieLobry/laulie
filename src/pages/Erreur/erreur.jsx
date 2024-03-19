import { Link } from "react-router-dom";
import "../Erreur/erreur.css"

function Erreur (){
return(
<div className="container">
    <div className="code-error">404</div>
    <div className="text-error"><h2>Oups! La page que vous demandez n'existe pas.</h2></div>
    <Link to="/" className="return"><p>Retourner sur la page d'accueil</p></Link>
</div>
)
}
export default Erreur