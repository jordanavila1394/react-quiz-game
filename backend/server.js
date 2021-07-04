const express = require ('express'); // import he package

const app = express(); //  use library

//Middlewares
app.use('/posts', () =>{
    console.log("This is a middleware running");
});

//ROUTES
//create ruotes
app.get('/home', (req, res) =>{
    res.send("We are home");
});

app.get('/pots', (req, res) =>{
    res.send("We are pots");
});

//How DO WE START LISTENING TO THE SERVER
app.listen(3001);