import React, {Fragment} from 'react'


function ProductList(props){
    return(
        <Fragment>


             <tr>
                <td>{props.title}</td>
                <td>{props.description}</td>
                <td className= "category">${props.price}</td>
                <td className= "category">{props.category_id === 1 && "Imagen"}{props.category_id === 2 && "Audio"}{props.category_id === 3 && "Escritura"}{props.category_id === 4 && "Diseño"}</td>            
                                    
            </tr>        

        </Fragment>
         )
        }
        
        
 export default ProductList;