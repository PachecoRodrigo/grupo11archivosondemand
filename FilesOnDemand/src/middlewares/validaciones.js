const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');



let getDB = () => {
    let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data', 'usersDB.json')))
    return usuarios
}
module.exports = {
    register: [
        body('email').custom(value =>{
            if (getDB().find(element => element.email == "nacho.tornati@gmail.com") !== undefined) {
                throw new Error('El correo ingresado ya se encuentra registrado');
              }
              return true;
        }),

        body('name')
        .isLength({ min: 2 })
        .withMessage("El campo de nombre no puede estar vacio"),

        body('surname').
        isLength({ min: 2 })
        .withMessage("El campo de apellido no puede estar vacio"),
        
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

    ]
}