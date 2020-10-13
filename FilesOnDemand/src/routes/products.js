var express = require('express');
var router = express.Router();
var path = require('path');

var productsController = require(path.join(__dirname,'..','controllers','productsController'));

/* GET users listing. */
router.get('/', productsController.index);
router.get('/detail', productsController.detail);

module.exports = router;