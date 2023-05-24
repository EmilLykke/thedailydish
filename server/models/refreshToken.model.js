const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    refreshToken: {
        type: String,
        required: true,
        trim: true,
    },


}, {
    timestamps:true,
});

const RefreshTokenSchema = mongoose.model("RefreshTokenSchema", refreshTokenSchema, "Tokens");

module.exports = RefreshTokenSchema;