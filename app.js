const express = require('express');

const app = express();

app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }));

const PORT = 3000;

const messages = [ 
    {
        text: "Hi there!", 
        user: "Amando", 
        added: new Date()
    }, 
    {
        text: "Hello World!",
        user: "Charles", 
        added: new Date()
    } 
]; 

app.get('/',(req,res) => {   
    res.render('index', {title: "Mini Messageboard", messages })
})

app.get('/new',(req,res) => {
    res.render('form')
})

app.post('/new',(req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/')
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);