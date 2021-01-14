var express = require('express');
var router = express.Router();
var path = require('path');
var cartController = require(path.join(__dirname,'..','controllers','cartController'));
var isLogged = require(path.join(__dirname,'..' ,'middlewares', 'isLogged.js'));

/* GET home page. */
router.get('/', isLogged,cartController.index);
router.get('/add',isLogged ,cartController.add);


router.post('/order', isLogged,cartController.order);


router.delete('/delete/:idProduct',isLogged,cartController.delete);


module.exports = router;
