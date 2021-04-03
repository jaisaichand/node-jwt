const express = require('express');

const app = express.Router();

const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');

const personjwt = require('../models/userjwtmod');

// app.use(bodyParser.json())

const dotenv = require('dotenv');

dotenv.config();




app.post('/mainsignup', async (req, res) => {
    console.log(req.body);
    const personjwtinst = await personjwt.create({
        name: req.body.name,
        username: req.body.username,
        jwt: '',
        posts: [],
        reports: [],
        blocked: []
    });

    console.log(personjwtinst);

    personjwtinst.jwt = jwt.sign({ id: personjwtinst._id }, process.env.token_secret)

    personjwtinst.save((err, doc) => {
        console.log(doc)
        res.status(200).json({ message: doc })
    })

    // console.log(res);


})

app.get('/mainsignup/:id', async (req, res) => {
    console.log(req.params);

    let resultt = await personjwt.findById(req.params.id);

    console.log(resultt);

    res.status(200).json({ message: resultt });



})

app.post('/mainget', (req, res) => {
    console.log(req.body.jwt);
    let userr = jwt.verify(req.body.jwt, process.env.token_secret);
    res.status(200).json({ user: userr })
})

module.exports = app;