const db = require('../../db/models');
//PARA ENVIAR UNA QUERY A MYSQL Y OBTENER EL RESUSLTADO
const sequelize = db.sequelize;

module.exports = {
  allUsers: async (req, res, next) => {
    try{
      //Verificar el numero de puerto sea el correcto para que funcione el link
      const sqlAll = 'SELECT id, first_name, email, concat("http://localhost:5000/api/users/", id) as detail FROM users'
      let users = await sequelize.query(sqlAll);
      if(users[0].length>0){
        let respuesta = {
          metadata:[{
            status:200,
            cantidad:users[0].length,
          }],
          resultados:users[0]
        }
        res.json (respuesta);
      };
    }catch(error){
      res.send(error);
    }
  },
  detailUsers:async (req, res, next) => {
    try{
      let id = (req.params.id);
      const sqlOne = ('SELECT id, first_name, last_name, email, created_at, concat("http://localhost:5000/img/users/",image) as detail FROM users where id ='+id)
      let oneUser = await sequelize.query(sqlOne);
      if(oneUser == null){
        res.send("404 not found")
      }else{
        res.json (oneUser[0]);
      }
    }catch(error){
      res.send(error);
    }
  }
}