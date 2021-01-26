const db = require('../../db/models');
const {Category, Product, User} = require ('../../db/models');
//PARA ENVIAR UNA QUERY A MYSQL Y OBTENER EL RESUSLTADO
const sequelize = db.sequelize;

module.exports = {
  allProducts: async (req, res, next) => {    
    try{
      const sqlcount = 'SELECT categories.name, count(category_id) as total from products inner join categories on category_id = categories.id group by category_id order by categories.name'
      //Verificar el numero de puerto sea el correcto para que funcione el link
      const sqlall = 'SELECT id, title, description, concat("http://localhost:5000/api/products/", id) as detalle FROM products'
      let products = await sequelize.query(sqlall);
      let categories = await sequelize.query(sqlcount);
      if (products.length >0) {
        let respuesta = {
          metadata:{
            status: 200,
            cantidad: products[0].length,
            categoria: categories[0]
          },
          resultados: products[0]
        }
        res.json(respuesta)
      }
    }catch(error){
    res.send(error)
    }
  },
  
  //Detalle de cada producto
  detailProducts:async (req, res, next) => {
    try{
      let id = req.params.id;
      //Verificar el numero de puerto sea el correcto para que funcione el link
      const sqlOne = 'SELECT id, title, price, description, created_at, concat("http://localhost:5000/img/products/",image) as detail, category_id FROM products where id ='+id;
      let oneProduct = await sequelize.query(sqlOne);
      if(oneProduct == null){
        res.send("404 not found")
      }else{
        res.json (oneProduct[0]);
      }
    }catch(error){
      res.send(error);
    }
  },
  index: async (req, res, next) => {
    try{
        let products = await db.Product.findAll();

        if (products.length > 0){
            let respuesta = {
                metadata:[{
                    status: 200,
                    cantidad: products.length
                }],

                resultados: products

            }
            res.json(respuesta);
        }          


     

    }catch(error){
        res.send(error);
    }
    
  },
  last: async (req,res)=>{              
    try{
        let Product = await db.Product.findOne({order: [ [ 'createdAt', 'DESC' ]]});

        if(Product === null){
            console.log('not found')

        
        }else{
            let respuesta = {
                metadata:[{
                    status: 200,
                                            
                }],
                resultados: [Product]        
                                       
            }
        
        res.json( respuesta );
        }
    
        
    }catch(error){
        res.send(error);
    }

    },
    categories: async (req, res, next) => {
      try{
          let audio = await db.Product.findAll({where: {category_id: '2'}});
          let  imagen = await db.Product.findAll({where: {category_id: '1'}});
          let  escritura = await db.Product.findAll({where: {category_id: '3'}});
          let  diseño = await db.Product.findAll({where: {category_id: '4'}});


          if(audio === null){
              console.log('not found')

          
          }else{
              let respuesta = {
                  metadata:[{
                      status: 200,},                            
                                              
                  ],
                  indice: [
                      {categoria: "Audio",  cantidad: audio.length},
                      {categoria: "Imagen", cantidad: imagen.length},
                      {categoria: "Escritura", cantidad: escritura.length},
                      {categoria: "Diseño", cantidad: diseño.length},

                  ],

                  resultados: {audio, imagen, escritura, diseño}       
                                         
              }

          res.json(respuesta);
          }
      }catch(error){
          res.send(error);
      }
  }


}
