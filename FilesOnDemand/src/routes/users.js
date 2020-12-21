var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');
const validaciones = require('../middlewares/validaciones');
var validations = require(path.join(__dirname,'..','middlewares','validaciones.js'));

//Configuracion de multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/img/users');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   //Aca configuramos para que no acepte cualquier tipo de archvios y acepte solamente esas extensiones
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });
//Fin de la configuracion de multer


var usersController = require(path.join(__dirname,'..','controllers','usersController'));

/* GET users listing. */
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.get('/myproducts',usersController.myproducts)

/*POST users listing */
router.post('/register', upload.single('user_img'),validations.register,usersController.processRegister);
router.post('/login',validations.login,usersController.processLogin);
router.post('/logout',usersController.logout);

module.exports = router;
