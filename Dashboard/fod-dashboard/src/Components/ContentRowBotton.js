import React, {Component} from 'react';
import LastProductInDB from './LastProductInDB';
import CategoryInDB from './CategoryInDB';


class ContentRowBotton extends Component{
    constructor(){
        super();

        this.state = {

            producto : [],

        }
    }
    componentDidMount(){
                   
        fetch('/api/productos/ultimo')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(producto =>{
            
            this.setState({producto: producto.resultados})
            console.log(producto)

        })
        .catch(error => console.log(error))
    }
    render(){

        return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row row-botton">

            {/*<!-- Last Product in DB -->*/}
            {
                 this.state.producto.map((valor, index)=>{
                    return <LastProductInDB {...valor} key= {index} />
                })

            }
            
            <CategoryInDB/>       

            </div>
            
         </React.Fragment>
        )
    }
}
export default ContentRowBotton;