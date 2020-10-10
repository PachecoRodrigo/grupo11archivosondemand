var express = require('express');
var router = express.Router();
var path = require('path');

var usersController = require(path.join(__dirname,'..','controllers','usersController'));

/* GET users listing. */
router.get('/', usersController.index);

module.exports = router;
