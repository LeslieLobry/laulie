import "../Diplomes/diplomes.css"
import diplome from "../../data/diplome.json"


function Diplomes (){
    return(
        <section className="diplome">
            <div className="diplome-text">
                <p>Mes différentes Compétences :</p>
            </div>
            {diplome.map((product)=>{
            return(
                <div key={product.id} className="diplome-contenant">
                    <div className="diplome-img">
                        <img src={product.img} alt="site internet tourcoing"></img>
                    </div>
                </div>
            )
            })}
        </section>
        )
}
export default Diplomes