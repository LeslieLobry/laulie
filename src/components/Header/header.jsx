import Logo from "../../assets/Logo.png"
import NAV from "../Nav/nav"
import "../Header/header.css"

function Header (){
    return(
        <div className="header-contenant">
            <div className="header-logo">
            <img src={Logo} alt="développeur web Tourcoing"></img>
            </div>
            <div className="header-titre">
                <h1>Développons ensemble votre visibilité</h1>
            </div>
            <NAV />
        </div>
    )
}
export default Header