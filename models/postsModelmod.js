let mongoose = require('mongoose');

let schema = mongoose.Schema;

let postsmodelmod = new schema({
    content: String,
    comments: [{ type: schema.Types.ObjectId, ref: 'comments' }],
    userId: [{ type: schema.Types.ObjectId, ref: 'userjwtmodnew' }]
})

let postsmodelnew = mongoose.model('postsmodelnew', postsmodelmod);

module.exports = postsmodelnew;