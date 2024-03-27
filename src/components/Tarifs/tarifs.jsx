import "../Tarifs/tarifs.css"
import tarifs from "../../data/tarifs.json"
import React from "react";


function Tarifs (){
return(
<div className="tarifs-contenant">
    {tarifs.map((product=>{
    return(
    <div key={product.id} className="tarifs-base">
        <div className="tarifs-titre">
            <h2>{product.name}</h2>
        </div>
        <div className="tarifs-details">
            <li>{product.details[0]}</li>
            <li>{product.details[1]}</li>
            <li>{product.details[2]}</li>
            <li>{product.details[3]}</li>
            <li>{product.details[4]}</li>
            <li>{product.details[5]}</li>
            <li>{product.details[6]}</li>
            <li>{product.details[7]}</li>
        </div>
        <div className="tarifs-prix">
            <p>À partir de {product.Prix}</p>
        </div>
    </div>
    )
    }))}
</div>
)
}
export default Tarifs