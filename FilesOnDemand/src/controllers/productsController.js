const fs = require('fs');
const path = require('path');

// LEENDO LOS DATOS DE LOS PRODUCTOS JSON
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res, next) => {
        res.render('allProducts', { products });
      },
 
    detail: (req,res)=>{
        let id = (req.params.idProduct);
        let oneproduct = products.filter(function(element){
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
        let oneproduct = products.filter(function(element){
            return element.idProduct == id;
        });
        res.render('edit-form',{ oneproduct });
    }
}