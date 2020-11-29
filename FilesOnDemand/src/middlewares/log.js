//Este middleware se encarga de revisar si el usario posee una cookie en su navegador de "recordarme"
//para que no tenga que volver a iniciar sesion
module.exports = (req,res,next)=>{
    res.locals.email = false;
    if(typeof req.session.email != 'undefined'){
        res.locals.email = req.session.email;
    }else if(req.cookies.rememberMe && req.cookies.userId){
        req.session.email = req.cookies.rememberMe;
        req.session.userId = req.cookies.userId;
        res.locals.email = req.session.email;
    }


    next();

}