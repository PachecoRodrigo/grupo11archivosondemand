import React from 'react';

function LastProductInDB(props) {
    return(

        <React.Fragment>


    {/*<!-- Last Product in DB -->*/}
    
    <div className="card  card-product">
        
            <h3 className="h3 titulo">Ultimo Archivo publicado</h3>
            <hr className= "linea-big"/>
        
        <div className="card-body">
            <div className="text-center">
                <img className="image-product" style={{width: 98+'%'}} src={'http://localhost:5000/img/products/'+ props.image} alt="lastProduct"/>
            </div>
            <p>{props.description}</p>
            <h5>Titulo: {props.title}</h5>
            <h5>Precio: ${props.price}</h5>
        </div>
    </div>
    

    </React.Fragment>


)
    
}

export default LastProductInDB; 
