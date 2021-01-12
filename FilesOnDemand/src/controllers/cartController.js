const path = require('path')
const db = require(path.join('..','db','models'));

module.exports = {
    index: async function(req, res) {
        if(req.session.email){

          try{

            let items = await db.Item.findAll({
              where: {
                  user_id : req.session.userId,
                  state:1
              },
              include: {all:true}
            });

            res.render('cart',{items})
          }catch(e){
            res.send(e)
          }




        }else{
          res.redirect('/users/login')
        }
        
      },

      add: async function(req,res){
        if(req.session.email){
          try{

            let inCart = await db.Item.findOne({where:
              {product_id:req.query.productId,
              user_id: req.session.userId}})

            if(!inCart){

            let product = await db.Product.findByPk(req.query.productId);

            await db.Item.create({
              price: product.price,
              user_id: req.session.userId,
              product_id:req.query.productId,
              cart_id:null,
              state:1
            })


          }

          res.redirect('/products');

          }catch(error){
            res.send(error);
          }
          
        }else{
          res.redirect('/users/login')
        }
      },

      items: async function(req,res) {
        try{
          let items = await db.Item.findAll();

          res.json(items);
        }catch(e){
          res.send(e);
        }
      }
}