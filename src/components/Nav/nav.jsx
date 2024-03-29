import { Link } from "react-router-dom";
import 'animate.css';

import "../Nav/nav.css"
function Nav (){
    return(
        <div className="nav-contenant">
            <Link to="/" className="link"><p>Accueil</p></Link>
            <Link to="/Contact"><p>Contact</p></Link>
        </div>
    )
}
export default Nav