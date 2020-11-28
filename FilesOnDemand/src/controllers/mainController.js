const {Product, Category, User} = require("../db/models")
const {Op} = require('sequelize'); 


module.exports = {
    index: function(req, res, next) {
        res.render('index');
      },

    test: async (req, res)=> {
          try {
          const users = await User.findAll({include: {all: true}})        
          res.send(users)
          }catch(error){
              console.log(error)
          }
      },
      
}