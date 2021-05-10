const mongoose = require("mongoose");

const user = new mongoose.Schema({
    firstname : 
    {
        type: String,
        required: true
    },

    lastname : 
    {
        type: String,
        required: true
    },

    email : 
    {
        type: String,
        required: true,
        unique: true
    },

    phone : 
    {
        type: Number,
        required: true,
        unique: true
    },

    username : 
    {
        type: String,
        required: true,
        unique: true
    },

    password : 
    {
        type: String,
        required: true,
        unique: true
    },

    confirmpass : 
    {
        type: String,
        required: true,
    },

    age : 
    {
        type: String,
        required: true
    },

    gender : 
    {
        type: String,
        required: true
    }
})

// Collection Creation

module.exports = User = mongoose.model('user', user);