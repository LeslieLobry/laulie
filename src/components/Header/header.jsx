import Laulie from "../../assets/Laulie.png"
import NAV from "../Nav/nav"
import "../Header/header.css"

function Header (){
    return(
        <div className="header-contenant">
            <div className="header-logo">
            <img src={Laulie} alt="développeur web Tourcoing"></img>
            </div>
            <NAV />
        </div>
    )
}
export default Header