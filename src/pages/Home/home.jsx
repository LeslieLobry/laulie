import Banniere from "../../components/Banniere/banniere"
import Galerie from "../../components/Galerie/galerie"

function Home (){
    return(
        <div className="home">
            <Banniere />
            <Galerie />
        </div>
    )
}
export default Home