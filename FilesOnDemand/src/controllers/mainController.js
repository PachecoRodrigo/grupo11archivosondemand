const path = require('path');
const { body, validationResult } = require('express-validator');

const db = require(path.join('..','db','models'));
const { Op, where } = require("sequelize");

module.exports = {
    index: async function(req, res, next) {
        try{
        let categories = await db.Category.findAll();        
        res.render('index',{categories});
        }catch(error){
            res.send(error);
        }
      },

    test: async (req, res)=> {
          try {
          const users = await User.findAll({include: {all: true}})        
          res.send(users)
          }catch(error){
              console.log(error)
          }
      },

      contacto:(req, res)=>{
          res.render('contacto')
      },
      
}