const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

//Configuracion de sequelize
const db = require(path.join('..','db','models'));
const { Op, where } = require("sequelize");

module.exports = {
    login: (req, res, next) => {
      res.render('login');
    },

    register: (req, res, next) => {
      res.render('register');
    },
    processRegister:async (req,res,next)=>{
      const errors = validationResult(req);

      if (!errors.isEmpty()) {

        return res.render('register', {errors: errors.array(), old: req.body})
      } 
      try{
        await db.User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10)
        });
      }catch(error){
        res.send(error)
      }
      return res.redirect('/users/login');
    },

    processLogin: async (req,res,next) =>{
      const errors = validationResult(req);

      if (!errors.isEmpty()){
        return res.render('login', {error:true, old: req.body})
      }else{

        try{
          let users = await db.User.findAll();
          let userLogin = users.find(element => element.email === req.body.email);
          if(userLogin == undefined){
            return res.render('login', {error:true, old: req.body})
          }
    
          if(bcrypt.compareSync(req.body.password, userLogin.password)){
            req.session.email = userLogin.email;
            req.session.userId = userLogin.id;
    
            if(req.body.rememberMe){
              res.cookie('rememberMe', userLogin.email, {maxAge: 1000*60*1*24*30} );
            }
    
            res.redirect('/');
          }
    
          return res.render('login', {error:true, old: req.body})
        }catch(error){
          res.send(error)
        }

    }

    },

    logout: (req,res)=>{
      req.session.destroy();
      res.clearCookie('rememberMe');

      res.redirect('/');
    }
    
}