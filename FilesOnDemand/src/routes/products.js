var express = require('express');
var router = express.Router();
var path = require('path');

var productsController = require(path.join(__dirname,'..','controllers','productsController'));

/* GET users listing. */
router.get('/', productsController.index);
router.get('/detail/:idProduct', productsController.detail);
router.get('/create-form', productsController.create);
router.get('/edit-form/:idProduct', productsController.edit);
router.delete('/:idProduct', productsController.destroy); 

module.exports = router;