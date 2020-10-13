module.exports = {
    index: (req, res, next) => {
        res.send('Vista de productos');
      },
    detail: (req,res)=>{
        res.render('detail');
    }
}