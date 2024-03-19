import Presentation from "../../components/Presentation/presentation"
import Diplomes from "../../components/Diplomes/diplomes"
import "../../pages/Compétences/compétences.css"
function Compétences (){
    return(
        <div className="competences-contenant">
        <Presentation />
        < Diplomes />
        </div>
        
    )
}
export default Compétences