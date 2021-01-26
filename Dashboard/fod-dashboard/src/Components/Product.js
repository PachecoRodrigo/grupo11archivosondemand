
import React, {Component} from 'react';
import ProductList from './ProductList';


class Product extends Component{    /*la clase el component y el render lo transforma en un estado*/
    constructor(){
        super();
        this.state ={
            productos : []
        }
    }
  
    
    
    //componentes ciclo de vida - Monto - actualizo - desmonto 
    //montaje
    componentDidMount(){
                   
        fetch('/api/productos')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos =>{
            //console.log(productos)
            this.setState({productos: productos.resultados})

        })
        .catch(error => console.log(error))
    }

    render(){

        return (
            <React.Fragment>
            {/*<!-- PRODUCTS LIST -->*/}
            <h1 className="h3">Todos los productos publicados</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card card2">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Category</th>  
                                                                    
                                </tr>
                            </thead>
                            
                            <tbody>
                                    {
                                        this.state.productos.map((producto, index)=>{
                                            return <ProductList {...producto} key={index}
                                            />                       
                                         })
                                    }            
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        
        </React.Fragment>
        )
    }
}
export default Product;
