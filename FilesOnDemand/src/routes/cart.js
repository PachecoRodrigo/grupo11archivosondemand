var express = require('express');
var router = express.Router();
var path = require('path');
var cartController = require(path.join(__dirname,'..','controllers','cartController'));

/* GET home page. */
router.get('/', cartController.index);

module.exports = router;
