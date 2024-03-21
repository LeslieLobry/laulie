import Galerie from "../../components/Galerie/galerie"
import Banniere from "../../components/Banniere/banniere"
function Home (){
    return(
       
        <div className="home">
            <Banniere />
            <Galerie />
        </div>
    )
}
export default Home