const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const postSchema = new mongoose.Schema({

    post: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('Post', postSchema)