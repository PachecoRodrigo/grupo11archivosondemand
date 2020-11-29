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
    index: async (req, res, next) => {
        try{
            // res.render('allProducts', { products: readDB() });
            let products = await db.Product.findAll();
            res.render('allProducts', { products: products});
        }catch(error){
            res.send(error);
        }
        
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
    create: async (req,res)=>{
        if(req.session.email){
            try{
                let categories = await db.Category.findAll();
                return res.render('create-form',{categories:categories});
            }catch(error){
                res.send(error);
            }
        }else{
            return res.redirect('/users/login');
        }

    },
    edit: async (req,res)=>{
        let id = (req.params.idProduct);
        try{
        product = await db.Product.findByPk(id)
        categories = await db.Category.findAll();
        res.render('edit-form',{ product, categories });
        }catch(error){
            res.send(error);
        }
    },

    update: async (req,res) =>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let old = {
                ...req.body,
                id: req.params.idProduct
            }

            return res.render('edit-form', {errors: errors.array(), product: old})
        }else{
            let editedProduct = {
                ...req.body,
                image: req.file.filename,
            }

            try{
                await db.Product.update(editedProduct,{where:{id: req.params.idProduct}})
            }catch(error){
                res.send(error);
            }

            res.redirect('/products/detail/' + req.params.idProduct);
        }
    },

    destroy: async (req,res)=> {

        try{
            await db.Product.destroy({
                where: {id: req.params.idProduct}
            });
            res.redirect('/products');
            
        }catch(error){
            res.send(error);
        }

        
    },

    store: async (req,res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            try{
            let categories = await db.Category.findAll();
            return res.render('create-form', {  errors: errors.array(), 
                                                old: req.body,
                                                categories: categories,
                                                })
            }catch(error){
                res.send(error);
            }
        }else{
            try{
                await db.Product.create({
                    ...req.body,
                    image: req.file.filename,
                    created_user_id : req.session.userId
                });
            res.redirect('/products');
            }catch(error){
                res.send(error);
            }
            
        }
    }
}