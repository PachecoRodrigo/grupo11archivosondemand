const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

// LEENDO LOS DATOS DE LOS PRODUCTOS JSON
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res, next) => {
        res.render('allProducts', { products });
      },
 
    detail: (req,res)=>{
        let id = (req.params.idProduct);
        let oneProduct = products.filter(function(element){
            return element.idProduct == id;
            });
        res.render('detail',{ oneProduct });
        },
    create: (req,res)=>{
        if(req.session.email){
            return res.render('create-form');
        }else{
            return res.redirect('/users/login');
        }

    },
    edit: (req,res)=>{
        let id = (req.params.idProduct);        
        let oneproduct = products.filter(function(element){
            return element.idProduct == id;
        });
        res.render('edit-form',{ oneproduct });
    },

    destroy: (req,res)=> {

        products= products.filter(producto => producto.idProduct != req.params.idProduct)

		let baseActualizada = JSON.stringify(products, null, 2);
		fs.writeFileSync (productsFilePath, baseActualizada);

        res.redirect('/products')
    },

    store: (req,res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('create-form', {errors: errors.array(), old: req.body})
        }else{
            console.log(req.file)
        }
    }
}