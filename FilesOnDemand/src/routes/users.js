var express = require('express');
var router = express.Router();
var path = require('path');

var validaciones = require(path.join(__dirname,'..','middlewares','validaciones.js'));
var usersController = require(path.join(__dirname,'..','controllers','usersController'));

/* GET users listing. */
router.get('/login', usersController.login)
router.get('/register', usersController.register)

/*POST users listing */
router.post('/register',validaciones.register,usersController.processRegister);
router.post('/login',validaciones.login,usersController.processLogin);
router.post('/logout',usersController.logout);

module.exports = router;
