const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

// LEENDO LOS DATOS DE LOS PRODUCTOS JSON
const productsFilePath = path.join(__dirname, '../data/productsDB.json');

let readDB = () => JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let writeDB = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));



module.exports = {
    index: (req, res, next) => {
        res.render('allProducts', { products: readDB() });
      },
 
    detail: (req,res)=>{
        let id = (req.params.idProduct);
        let products = readDB();
        let oneproduct = products.find(function(element){
            return element.idProduct == id;
            });
        res.render('detail',{ oneproduct });
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
        let products = readDB();       
        let product = products.find(function(element){
            return element.idProduct == id;
        });
        res.render('edit-form',{ product:product });
    },

    update: (req,res) =>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let old = {
                ...req.body,
                idProduct: req.params.idProduct
            }

            return res.render('edit-form', {errors: errors.array(), product: old})
        }else{
            let products = readDB();
            let product = products.find(function(element){
                return element.idProduct == req.params.idProduct;
            });
            let editedProduct = {
                idProduct: product.idProduct,
                ...req.body,
                image: req.file.filename
            }

            products[products.indexOf(product)] = editedProduct

            writeDB(products);

            res.redirect('/products/detail/' + req.params.idProduct);
        }
    },

    store: (req,res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('create-form', {errors: errors.array(), old: req.body})
        }else{
            let oldProducts = readDB();
            let newProduct = {
                idProduct: oldProducts[oldProducts.length-1].idProduct + 1,
                ...req.body,
                image: req.file.filename
            }

            writeDB([...oldProducts,newProduct]);

            res.redirect('/products');
        }
    }
}