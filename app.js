let express = require('express');
//requiring express into express

let app = express();
//initializing express into app

let mongoose = require('mongoose');
//requiring mongoose

let bodyParser = require('body-parser');
//requiring body parser

let signup = require('./controllers/signup');

let dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.use(bodyParser.json());

app.use('/signup', signup)

mongoose.connect("mongodb+srv://jaisaichand:Jaithegreat1*@cluster0.ugcwg.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('db connected!!!!!!!!!');
}).catch((err) => {
    console.log(err)
})



app.listen(process.env.port, () => {
    console.log('App started running on port ' + process.env.port)
})

