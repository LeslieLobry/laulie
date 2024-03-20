import { Link } from "react-router-dom";
import 'animate.css';

import "../Nav/nav.css"
function Nav (){
    return(
        <div className="nav-contenant">
            <Link to="/" className="link">Accueil</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}
export default Nav