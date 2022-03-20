const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String, // Email is a string
    password: String // Password is a string
})

module.exports = mongoose.model('user', userSchema, 'users')
