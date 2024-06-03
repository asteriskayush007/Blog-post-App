const { name } = require('ejs');
const mongoose = require('mongoose');
const { posts } = require('moongose/models');
const strictQuery = mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/authapp")

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts : [{type: mongoose.Schema.Types.ObjectId, ref: "post"}],
})

module.exports = mongoose.model('user',userSchema);