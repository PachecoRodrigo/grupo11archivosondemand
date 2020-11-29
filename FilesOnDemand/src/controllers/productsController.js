const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

const db = require(path.join('..','db','models'));
const { Op, where } = require("sequelize");

// LEENDO LOS DATOS DE LOS PRODUCTOS JSON
const productsFilePath = path.join(__dirname, '../data/productsDB.json');

let readDB = () => JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let writeDB = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));



module.exports = {
    index: (req, res, next) => {
        res.render('allProducts', { products: readDB() });
      },
 
    detail: async (req,res)=>{
        let id = (req.params.idProduct);
        try{
            let oneproduct = await db.Product.findByPk(id);
            if(oneproduct == null){
                res.send("404 not found")
            }else{
            res.render('detail',{ oneproduct });
            }
        }catch(error){
            res.send(error);
        }

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
        res.render('edit-form',{ product });
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
                image: req.file.filename,
            }

            products[products.indexOf(product)] = editedProduct

            writeDB(products);

            res.redirect('/products/detail/' + req.params.idProduct);
        }
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
            let oldProducts = readDB();
            let newProduct = {
                ...req.body,
                image: req.file.filename,
                user_id : req.session.userId
            }

            writeDB([...oldProducts,newProduct]);

            res.redirect('/products');
        }
    }
}