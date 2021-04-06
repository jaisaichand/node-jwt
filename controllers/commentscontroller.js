let express = require('express');

let app = express.Router();

let bodyparser = require('body-parser');

let posts = require('../models/postsModelmod');

let comments = require('../models/commentsModelmod');

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.post('/addcomment', async (req, res) => {
    if (req.user && req.body.content) {
        let newposts = await comments.create({
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

app.get('/addcomment/:id', async (req, res) => {
    console.log(req.params.id);

    let findcomments = await comments.findById(req.params.id).populate('posts');

    res.status(200).json({ mess1: findcomments })
})

module.exports = app;