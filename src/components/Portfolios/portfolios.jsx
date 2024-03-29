import "../Portfolios/portfolios.css";
import portfolio from "../../data/portfolio.json"

function Portfolio (){
    return(
    <section className="portfolio">
        { portfolio.map((product)=>{
    return(
    
        <div key={product.id}>
            <a href={product.liens} className="portfolio-contenant">
        <div className="portfolio-title">
            <h2>{product.nom}</h2>
        </div>
        <div className="portfolio-img">
        <img src={product.image} alt="dev web"></img>
        </div>
        <div className="portfolio-description">
            {product.description}
        </div>
        </a>
        </div>
    
    )
    })}
</section>)


}
export default Portfolio