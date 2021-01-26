import React, {Component} from 'react';
import Category from './Category'

class CategoryInDB extends Component{
    
    constructor(){
        super();

        this.state = {

            categorias : [],

        }
    }
    componentDidMount(){
                   
        fetch('/api/productos/categorias')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(categorias =>{
            
            this.setState({categorias: categorias.indice})
            console.log(categorias)

        })
        .catch(error => console.log(error))
    }

    render(){
    return (
        <React.Fragment>


{/*<!-- Categories in DB -->*/}
					
<div className="card card-category">
    
        <h3 className="h3 ">Categorias en la Base de Datos</h3>
        <hr className= "linea-big"/>
    
    <div className="card-body">
        <div className="row-categories">
            {this.state.categorias.map((categoria, i)=>{
                return < Category {...categoria} key={i} />

                
            })}
           
        </div>
        </div>
  
        </div>


        </React.Fragment>
    )}
}

export default CategoryInDB;