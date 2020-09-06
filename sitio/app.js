const express = require('express');
const app = express();
app.use('/public', express.static(__dirname + "/public"));

app.get('/',(req,res)=>{

    res.sendFile(__dirname + '/public/index.html');

});

app.get('/carrito',(req,res)=>{

    res.sendFile(__dirname + '/public/carrito.html');

});

app.get('/detalle',(req,res)=>{

    res.sendFile(__dirname + '/public/detalle.html');

});

app.get('/login',(req,res)=>{

    res.sendFile(__dirname + '/public/login.html');

});

app.get('/registro',(req,res)=>{

    res.sendFile(__dirname + '/public/registro.html');

});


app.listen(8080, ()=> {
    console.log('Servidor corriendo');
});