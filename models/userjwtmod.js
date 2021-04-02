let mongoose = require('mongoose');

let schema = mongoose.Schema;

let userjwtmod = new schema({
    name: String,
    username: String,
    posts: [{ type: schema.Types.ObjectId, ref: 'postsmodelnew' }],
    jwt: String
})

let userjwtmodnew = mongoose.model('userjwtmodnew', userjwtmod);

module.exports = userjwtmodnew;

