const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

const db = require(path.join('..','db','models'));
const { Op, where } = require("sequelize");

module.exports = {
    index: async (req, res, next) => {
        try{
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
            try{
                let categories = await db.Category.findAll();
                return res.render('create-form',{categories:categories});
            }catch(error){
                res.send(error);
            }

    },
    edit: async (req,res)=>{
        let id = (req.params.idProduct);
                try{
                    product = await db.Product.findByPk(id)
                    if (product.created_user_id == req.session.userId){
                    categories = await db.Category.findAll();
                    res.render('edit-form',{ product, categories });
                }else{
                    res.redirect('/products/detail/'+id);
                }
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
            let items = await db.Item.destroy({
                where: {
                    product_id : req.params.idProduct,
                }
              });
            await db.Product.destroy({
                where: {id: req.params.idProduct}
            });
            res.redirect('/users/myproducts');
            
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
    },

    search: async (req, res) => {
        try {
            let produBuscado = req.body.products;
            let categories = req.body.categories;        
            let products = await db.Product.findAll({                  
            
               where: {
                 
                   [Op.and]: [
                    {
                        title: { [Op.like] : "%" + produBuscado +"%" }
                    },
                    {
                      category_id: {
                        [Op.like] : categories
                      }
                    }
                  ]
                }
                                               
            })
            console.log(req.body)             
            res.render("searchProducts",{products: products, categories})        
            }catch(error){
                console.log(error)
            }
        } ,
        audio: async (req, res, next) => {
            try{
                let products = await db.Product.findAll({
                    where: {
                        category_id: '2'
                    }
                });
                res.render('audioProducts', { products: products});
            }catch(error){
                res.send(error);
            }
            
          }, 
          image: async (req, res, next) => {
            try{
                let products = await db.Product.findAll({
                    where: {
                        category_id: '1'
                    }
                });
                res.render('imagenProducts', { products: products});
            }catch(error){
                res.send(error);
            }
            
          }, 
          writing: async (req, res, next) => {
            try{
                let products = await db.Product.findAll({
                    where: {
                        category_id: '3'
                    }
                });
                res.render('escrituraProducts', { products: products});
            }catch(error){
                res.send(error);
            }
            
          }, 
          design: async (req, res, next) => {
            try{
                let products = await db.Product.findAll({
                    where: {
                        category_id: '4'
                    }
                });
                res.render('designProducts', { products: products});
            }catch(error){
                res.send(error);
            }
            
          }, 
}