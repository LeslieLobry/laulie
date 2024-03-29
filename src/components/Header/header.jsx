import Logo from "../../assets/Logo.png"
import NAV from "../Nav/nav"
import "../Header/header.css"
import { Link } from "react-router-dom";
import Banniere from "../../components/Banniere/banniere"



function Header (){
    return(
        <div className="header-contenant">
            <div className="header-logo">
                <Link to="/"className="link"><img src={Logo} alt="développeur web Tourcoing"></img></Link> 
            </div>
            <Banniere />
                <NAV />
        </div>
    )
}
export default Header