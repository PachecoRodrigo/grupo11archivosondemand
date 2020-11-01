const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let getDB = () => {
  let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data', 'usersDB.json')))
  return usuarios
}

let updateDB = (users) => {
  fs.writeFileSync(path.join(__dirname,'..','data', 'usersDB.json'),JSON.stringify(users,null,2));
}

module.exports = {
    login: (req, res, next) => {
      res.render('login');
    },

    register: (req, res, next) => {
      res.render('register');
    },
    processRegister(req,res,next){
      const errors = validationResult(req);

      if (!errors.isEmpty()) {

        return res.render('register', {errors: errors.array(), old: req.body})
      } 

      let newUser = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      }

      let users = getDB();
      updateDB([...users,newUser]);
      
      return res.redirect('/users/login');
    },

    processLogin: (req,res,next) =>{
      let userLogin = getDB().find(element => element.email == req.body.email);
      const errors = validationResult(req);

      if (!errors.isEmpty()){
        return res.render('login', {error:true, old: req.body})
      }

      if(userLogin == undefined){
        return res.render('login', {error:true, old: req.body})
      }

      if(bcrypt.compareSync(req.body.password, userLogin.password)){
        req.session.email = userLogin.email;

        if(req.body.rememberMe){
          res.cookie('rememberMe', userLogin.email, {maxAge: 1000*60*1*24*30} );
        }

        res.redirect('/');
      }

      return res.render('login', {error:true, old: req.body})

    },

    logout: (req,res)=>{
      req.session.destroy();
      res.clearCookie('rememberMe');

      res.redirect('/');
    }
    
}