module.exports = (req,res,next) =>{
    
    if(!req.session.email){
        res.redirect('/users/login');
    }else{
        next();
    }





}