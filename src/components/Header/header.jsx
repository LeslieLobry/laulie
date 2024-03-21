import Logo from "../../assets/Logo.png"
import NAV from "../Nav/nav"
import "../Header/header.css"
import { Link } from "react-router-dom";


function Header (){
    return(
        <div className="header-contenant">
            <div className="header-logo">
                <Link to="/"className="link"><img src={Logo} alt="développeur web Tourcoing"></img></Link> 
            </div>
                <NAV />
        </div>
    )
}
export default Header