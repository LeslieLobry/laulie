import "../Banniere/banniere.css"
import banniere from "../../assets/banniere.png"

function Banniere (){
    return(
        <div className="banniere-contenant">
            <img src={banniere} alt="développeur web tourcoing"></img>
        </div>
    )
}
export default Banniere