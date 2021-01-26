import React from 'react';
import SmallCard from './SmallCard'; 


let productInDataBase = {
    color: "#d6b12b",
    titulo: "Products in Data Base",
    valor: 20000,    
    moneda: false,
}

let amount = {
    color: "#6abd6b",
    titulo: "Amount in products",
    valor: 546,   
    moneda: true,
}

let user = {
    color: "#2b86d6",
    titulo: "Users quantity",
    valor: 38,   
    moneda: false,
}

let cardProps = [productInDataBase, amount, user]



function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">

            {
                cardProps.map((producto, index)=>{
                    return <SmallCard {...producto} key= {index} />
                })
            }

        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;