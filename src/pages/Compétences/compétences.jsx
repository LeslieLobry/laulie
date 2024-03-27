import Presentation from "../../components/Presentation/presentation"
import Diplomes from "../../components/Diplomes/diplomes"
import "../../pages/Compétences/compétences.css"
function Compétences (){
    return(
        <div className="competences-contenant">
        <Presentation />
        < Diplomes />
        <div className="bg"><img src="https://i.postimg.cc/vBDFqfTG/pexels-olia-danilevich-8093033.jpg"alt="développeur web tourcoing"></img></div>
        </div>
        
    )
}
export default Compétences