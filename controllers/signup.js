const express = require('express');

const app = express.Router();

const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');

const personjwt = require('../models/userModeljwt');

// app.use(bodyParser.json())

const dotenv = require('dotenv');

dotenv.config();




app.post('/mainsignup', (req, res) => {
    console.log(req.body);
    const personjwtinst = new personjwt({
        name: req.body.name,
        username: req.body.username,
        jwt: jwt.sign({ username: req.body.username }, process.env.token_secret)
    });

    personjwtinst.save((err, doc) => {
        console.log(doc)
        res.status(200).json({ message: "check" })
    })

    // console.log(res);


})

app.post('/mainget', (req, res) => {

})

module.exports = app;