var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');
const validaciones = require('../middlewares/validaciones');
var validations = require(path.join(__dirname,'..','middlewares','validaciones.js'));
var isLogged = require(path.join(__dirname,'..' ,'middlewares', 'isLogged.js'));



//Configuracion de multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/img/products');
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

//Controllers
var productsController = require(path.join(__dirname,'..','controllers','productsController'));

/* GET users listing. */
router.get('/', productsController.index);
router.get('/detail/:idProduct', productsController.detail);
router.get('/edit-form/:idProduct', productsController.edit);
router.get('/create',isLogged,productsController.create);
router.get('/edit/:idProduct',isLogged,productsController.edit);
router.post('/search', productsController.search);
router.get('/audio', productsController.audio);
router.get('/image', productsController.image);
router.get('/writing', productsController.writing);
router.get('/design', productsController.design);

//POST routes
router.post('/create',upload.single('product_img'),validations.product ,productsController.store);
router.put('/edit/:idProduct',upload.single('product_img'),validations.product,productsController.update);
router.delete('/delete/:idProduct', productsController.destroy); 

module.exports = router;