let mongoose = require('mongoose');

let schema = mongoose.Schema;

let comments = new schema({
    content: String,
    user: { type: schema.Types.ObjectId, ref: 'userjwtmodnew' }
})

let commentmod = mongoose.model('commentmod', comments)