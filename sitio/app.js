const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=>{

    res.sendFile(__dirname + '/index.html');

});

app.get('/carrito',(req,res)=>{

    res.sendFile(__dirname + '/carrito.html');

});

app.get('/detalle',(req,res)=>{

    res.sendFile(__dirname + '/detalle.html');

});

app.get('/login',(req,res)=>{

    res.sendFile(__dirname + '/login.html');

});

app.get('/registro',(req,res)=>{

    res.sendFile(__dirname + '/registro.html');

});


app.listen(3000, ()=> {
    console.log('Servidor corriendo');
});