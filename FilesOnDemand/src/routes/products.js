var express = require('express');
var router = express.Router();
var path = require('path');

var productsController = require(path.join(__dirname,'..','controllers','productsController'));

/* GET users listing. */
router.get('/', productsController.index);
router.get('/detail/:idProduct', productsController.detail);
router.get('/create-form', productsController.create);
router.get('/:idProducto/edit-form', productsController.edit);

module.exports = router;