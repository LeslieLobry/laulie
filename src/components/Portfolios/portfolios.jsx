import "../Portfolios/portfolios.css";
import portfolio from "../../data/portfolio.json"

function Portfolio (){
    return(
    <section className="portfolio">
        { portfolio.map((product)=>{
    return(
    
        <div key={product.id}>
            <a href={product.liens} className="portfolio-contenant">
        <div className="portfolio-img">
        <img src={product.image} alt="dev web"></img>
        </div>
        </a>
        </div>
    
    )
    })}
</section>)


}
export default Portfolio