let mongoose = require('mongoose');

let schema = mongoose.Schema;

let reportSchema = new schema({
    user: { type: schema.Types.ObjectId, ref: "" }
})