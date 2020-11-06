const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let key = new Schema({
    id: {
        type: Number
    },
    text: {
        type: String
    },
    key: {
        type: String
    },
});

module.exports = mongoose.model("key", key);