const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

const db = require(path.join('..','..','db','models'));
const { Op, where } = require("sequelize");

module.exports = {

    index: async (req, res, next) => {
        try{
            let orders = await db.Order.findAll();   
            let cantidad =  await db.Order.sum('total');                    
            
            if (orders.length > 0){
                let respuesta = {
                    metadata:[{
                        status: 200,
                        cantidades: orders.length,
                         cantidad: '$ ' + cantidad
                           
                    }],

                    resultados: orders                   
                }
                res.json(respuesta);
              
            }                   

        }catch(error){
            res.send(error);
        }
        
      },
 
        
}