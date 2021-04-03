let express = require('express');

let app = express.Router();

let bodyparser = require('body-parser');

let posts = require('../models/postsModelmod');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/addpost', async (req, res) => {
    if (req.user && req.body.content) {
        let newposts = await posts.create({
            content: req.body.content,
            comments: [],
            reports: [],
            blocked: [],
            userId: req.user.id
        })

        newposts.save((err, doc) => {
            console.log(doc);
            req.user.posts.push(doc._id);
            res.status(200).json({ message: doc });
        })
    }
})

app.get('/addpost/:id', async (req, res) => {
    console.log(req.params.id);

    let findposts = await posts.findById(req.params.id).populate('userId');

    res.status(200).json({ mess1: findposts })
})

module.exports = app;
