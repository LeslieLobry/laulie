import Banniere from "../../components/Banniere/banniere"
import Presentation from "../../components/Presentation/presentation"
import Galerie from "../../components/Galerie/galerie"

function Home (){
    return(
        <div className="home">
            <Banniere />
            <Presentation />
            <Galerie />
        </div>
    )
}
export default Home