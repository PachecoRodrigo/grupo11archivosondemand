var express = require('express');
var router = express.Router();
var path = require('path');


//Controllers
var apiSalesController = require(path.join(__dirname,'..','..','controllers','api','apiSalesController'));

/* GET products listing. */
router.get('/ventas', apiSalesController.index);




module.exports = router;