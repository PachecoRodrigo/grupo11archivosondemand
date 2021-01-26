var express = require('express');
var router = express.Router();

/* Llamando a los controller */
const apiProductsController = require('../../controllers/api/apiProductsController')
const apiUsersController = require('../../controllers/api/apiUsersController')

/* API PRODUCTOS */
//Todos los productos
router.get('/products', apiProductsController.allProducts)
//Detalle de cada producto
router.get('/products/:id',apiProductsController.detailProducts);
//todos los productos con precio sin categoria
router.get('/productos', apiProductsController.index);
//ultimo producto publicado
router.get('/productos/ultimo', apiProductsController.last);
//categorias individuales 
router.get('/productos/categorias', apiProductsController.categories);


/* API USERS */
//Todos los usuarios
router.get('/users',apiUsersController.allUsers);
//Detalle de cada usuario
router.get('/users/:id',apiUsersController.detailUsers);

module.exports = router;