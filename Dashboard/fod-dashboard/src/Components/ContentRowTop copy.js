import React, {Component} from 'react';
import SmallCard from './SmallCard copy'; 
import Totales from './Totales'; 



class ContentRowTop extends Component{    /*la clase el component y el render lo transforma en un estado*/
    constructor(){
        super();

        let productInDataBase = {
            color: "#d6b12b",
            titulo: "Productos en la Base de Datos",                         
            
        }
        let amount = {
            color: "#3366ff",
            titulo: "Cantidad de usuarios registrados",         
           
        }
        let ventas = {
            color: "#6abd6b",
            titulo: "Venta Total",         
           
        }

        this.state ={
            
            productos : [],//aca esta {cantidad: 25, status:200} que vienen de la api
            usuarios : [],
            ventas: [],
            cardProps: [productInDataBase, amount, ventas],   
            
            
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
            
            this.setState({productos: productos.metadata})

        })
        .catch(error => console.log(error))

        fetch('/api/users')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(usuarios =>{
        
            this.setState({usuarios: usuarios.metadata})

        })
        .catch(error => console.log(error))

        fetch('/api/ventas')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(ventas =>{
        
            this.setState({ventas: ventas.metadata})

        })
        .catch(error => console.log(error))
       
    }
    
    render(){

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
         {
                this.state.cardProps.map((producto, index)=>{
                    return <SmallCard {...producto} key= {index} />
                })
            }
        </div>
        <div className="row">
            

            {
                 this.state.productos.map((valor, index)=>{
                    return <Totales {...valor} key= {index} />
                })

            }
             {
                  this.state.usuarios.map((valor, index)=>{
                    return <Totales {...valor} key= {index} />
                })
             }
             {
                  this.state.ventas.map((valor, index)=>{
                    return <Totales {...valor} key= {index} />
                })
             }
            


        </div>
        </React.Fragment>
    )
}
}
export default ContentRowTop;