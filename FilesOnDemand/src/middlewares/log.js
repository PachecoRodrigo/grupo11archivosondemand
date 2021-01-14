//Este middleware se encarga de revisar si el usario posee una cookie en su navegador de "recordarme"
//para que no tenga que volver a iniciar sesion
var path = require('path')
const db = require(path.join('..','db','models'));
module.exports = async (req,res,next)=>{
    res.locals.email = false;
    if(typeof req.session.email != 'undefined'){
        res.locals.email = req.session.email;
        res.locals.image = req.session.image;

        try{
            let items = await db.Item.findAll({
                where: {
                    user_id : req.session.userId,
                    state:1
                },
                include: {all:true}
              });
              res.locals.cartCount = items.length;
        }catch(e){
            res.send(e)
        }
    }else if(req.cookies.rememberMe && req.cookies.userId){
        req.session.email = req.cookies.rememberMe;
        req.session.userId = req.cookies.userId;
        res.locals.email = req.session.email;
    }


    next();

}