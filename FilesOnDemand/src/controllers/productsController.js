module.exports = {
    index: (req, res, next) => {
        res.send('Vista de productos');
      },
    detail: (req,res)=>{
        res.render('detail');
    },
    create: (req,res)=>{
        res.render('create-form');
    },
    edit: (req,res)=>{
        res.render('edit-form');
    }
}