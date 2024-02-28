import profil from "../../assets/profil.jpg"
import "../Presentation/presentation.css"

function Presentation () {
return(
<div className="presentation-container">
    <div className="presentation-texte">
        <div className="presentation-title">
            <h1>Derrière Laulie Web se cache Leslie.</h1>
        </div>
        <div className="presentation-info">
            <p> rugby, envie ... </p>
        </div>
    </div>
    <div className="presentation-img">
        <img src={profil} alt="site internet tourcoing"></img>
    </div>
</div>
)
}
export default Presentation