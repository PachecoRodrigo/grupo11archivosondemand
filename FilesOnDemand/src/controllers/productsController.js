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
        res.render('create-form');
    },
    edit: (req,res)=>{
        res.render('edit-form');
    }
}