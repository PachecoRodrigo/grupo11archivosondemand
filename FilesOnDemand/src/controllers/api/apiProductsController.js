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
  }
}