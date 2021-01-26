import React from 'react'


function SmallCard(props){
    return(
        <React.Fragment>

            <div className="card">
                <hr className= "linea-small" style={{color: props.color}}/>
                   
                                <div className= "h5" style={{color: props.color}}> {props.titulo}</div>
                                <div className="h5">{(props.moneda ? '$' + props.valor: props.valor)}</div> {/*if ternario es un if en una sola linea*/}
                            
                          
            </div>

        </React.Fragment>
    )
}


export default SmallCard;