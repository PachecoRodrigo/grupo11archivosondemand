var express = require('express');
var router = express.Router();
var path = require('path');

var validations = require(path.join(__dirname,'..','middlewares','validaciones.js'));
var usersController = require(path.join(__dirname,'..','controllers','usersController'));

/* GET users listing. */
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.get('/myproducts',usersController.myproducts)

/*POST users listing */
router.post('/register',validations.register,usersController.processRegister);
router.post('/login',validations.login,usersController.processLogin);
router.post('/logout',usersController.logout);

module.exports = router;
