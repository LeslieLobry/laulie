import Banniere from "../../components/Banniere/banniere"
import Presentation from "../../components/Presentation/presentation"
import Portfolio from "../../components/Portfolio/portfolio"

function Home (){
    return(
        <div className="home">
            <Banniere />
            <Presentation />
            <Portfolio />
        </div>
    )
}
export default Home