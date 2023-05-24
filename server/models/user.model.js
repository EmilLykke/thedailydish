const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        trim:true,
        minlength: 4
    },
    password:{
        type: String,
        required: true,
        trim:true,
        minlength: 15
    },
    useruid: {
        type: String,
        required: true,
        trim:true,
        minlength: 4
    },
}, {
    timestamps:true,
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;