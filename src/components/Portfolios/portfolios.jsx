import "../Portfolios/portfolios.css";
import portfolio from "../../data/portfolio.json"

function Portfolio (){
    return(
    <section className="portfolio">
        { portfolio.map((product)=>{
    return(
    <div className="portfolio-contenant">
        <div key={product.id}>
        <div className="portfolio-title">
            {product.nom}
        </div>
        <div className="portfolio-img">
        <img src={product.image} alt="dev web"></img>
        </div>
        <div className="portfolio-descrition">
            {product.description}
        </div>
        </div>
    </div>
    )
    })}
</section>)


}
export default Portfolio