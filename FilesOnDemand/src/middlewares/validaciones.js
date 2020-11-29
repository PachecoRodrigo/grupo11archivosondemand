const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

let getDB = () => {
    let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data', 'usersDB.json')))
    return usuarios
}
module.exports = {
    register: [
        body('email').custom((value,{req}) =>{
            if (getDB().find(element => element.email == req.body.email) !== undefined) {
                throw new Error('El correo ingresado ya se encuentra registrado');
              }
              return true;
        }),

        body('first_name')
        .isLength({ min: 2 })
        .withMessage("El campo de nombre debe tener 2 caracteres como minimo"),

        body('last_name').
        isLength({ min: 2 })
        .withMessage("El campo de apellido debe tener 2 caracteres como minimo"),
        
        body('email')
        .isEmail()
        .withMessage("Ingrese un email valido"),
        
        body('password')
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener 8 caracteres como minimo"),

        body('passwordCheck').
        custom((value,{req}) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas no coinciden');
              }
              return true;
        })

    ],

    login:[

        body('email')
        .isEmail(),

        body('password')
        .isLength({ min: 8 })

    ],
    product:[
        body('title')
        .isLength({ min: 2 })
        .withMessage("El campo de nombre debe tener 2 caracteres como minimo"),

        body('price').custom((value) => !isNaN(value))
        .withMessage("Ingrese un precio valido"),

        body('description')
        .notEmpty()
        .withMessage("El campo de descripcion no puede estar vacio"),

        body('category')
        .notEmpty()
        .withMessage("Seleccione una categoria"),

        body('product_img')
        .custom((value,{req}) => req.file) //Si no existe req.file la verificacion no va a pasar
        .withMessage("La imagen no es valida o no se ha elegido ninguna")

    ]
}