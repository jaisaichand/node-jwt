
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userModelJwt = new Schema({
    name: String,
    username: String,
    jwt: String
})

const personjwt = mongoose.model('personjwt', userModelJwt);

module.exports = personjwt;