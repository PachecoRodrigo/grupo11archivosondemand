const path = require('path')
const db = require(path.join('..','db','models'));

module.exports = {
    index: async function(req, res) {

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

        
      },

      add: async function(req,res){
          try{

            let inCart = await db.Item.findOne({where:
              {product_id:req.query.productId,
              user_id: req.session.userId,
              state:1},
              })

            if(!inCart){

            let product = await db.Product.findByPk(req.query.productId);

            await db.Item.create({
              price: product.price,
              user_id: req.session.userId,
              product_id:req.query.productId,
              order_id:null,
              state:1
            })
          }

          res.redirect('/products');

          }catch(error){
            res.send(error);
          }
      },

      delete: async function(req,res){
        try{
          await db.Item.destroy({
            where: {
              product_id: req.params.idProduct,
              user_id: req.session.userId
            }
          });
        }catch(error){
          res.send(error);
        }

        res.redirect('/cart');
      },

      order: async function (req,res){
        try{
          let items = await db.Item.findAll({
            where: {
                user_id : req.session.userId,
                state:1
            },
            include: {all:true}
          });

          if(items.length != 0){

            //Calculate the total of the order
            let total = 0;
            items.forEach(element => {
              total += element.price;
            });

            let order = await db.Order.create({
              total: total,
              user_id: req.session.userId,
            })

            await db.Item.update({order_id: order.id, state:0},{where:{user_id:req.session.userId, state:1}});

            res.render('successOrder',{order})
          }else{
            res.redirect('/cart')
          }

        }catch(e){
          res.send(e);
        }
      }
}