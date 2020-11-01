module.exports = (req,res,next)=>{
    res.locals.email = false;
    if(req.session.email){
        res.locals.email = req.session.email;
    }else if(req.cookies.rememberMe){
        req.session.email = req.cookies.rememberMe;
        res.locals.email = req.session.email;
    }


    next();

}