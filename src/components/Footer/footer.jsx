import Logo from "../../assets/Logo.png"
import "../Footer/footer.css"


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
                <div className="footer-mail">
                    📧 <p>contact@laulieweb.com</p>
                </div>
            </div>
        </div>
        
    )
}
export default Footer 