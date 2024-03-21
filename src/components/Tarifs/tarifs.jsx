import { useParams } from "react-router-dom"
import "../Tarifs/tarifs.css"
import tarifs from "../../data/tarifs.json"
import React from "react";


function Tarifs (){
    const { id } = useParams();
    const product = tarifs.find((item) => item.id === id)
    const listEquipments = product?.details.map((details, list)=>
    {
     return <li key={list}>{details}</li>
        })
        return(
             <div className="tarifs-contenant">
                {tarifs.map((product=>{
                    return(
                        <div key={product.id} className="tarfis-base">
                            <div className="tarifs-titre">
                                <h2>{product.name}</h2>
                            </div>
                            <div className="tarifs-details">
                                <p>{listEquipments}</p>
                            </div>
                            <div className="tarifs-prix">
                                <p>{product.Prix}</p>
                            </div>
                        </div>
                    )
                }))}
            </div>
        )
}
export default Tarifs