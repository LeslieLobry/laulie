import Logo from "../../assets/Logo.png"
import "../Footer/footer.css"
import instagram from "../../assets/instagram.png"
import { Link } from "react-router-dom"


function Footer (){
return(
<div className="footer-contenant">

    <div className="logo">
        <img src={Logo} alt="site internet dans le nord"></img>
    </div>
    <div className="footer-coordonnée">
        <div className="footer-tel">

            📱<p>06.26.09.55.53</p>
        </div>
        
            <a href="mailto:contact@laulieweb.com"className="footer-mail">📧 <p>contact@laulieweb.com</p></a>
        
        <a href="https://www.instagram.com/laulieweb/" className="footer-insta"><img src={instagram}
                alt="développeur web Tourcoing"></img></a>
    </div>
    <div className="footer-mentions">
        <div className="mentions-copy"><p>© Laulie Web</p></div>
        <Link to={`mentions`}className="mentions-liens">Mentions Légales</Link> 
    </div>
    </div>
)
}
export default Footer