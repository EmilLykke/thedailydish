const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const qrSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    item: { type: String, required: true,},
    uid: { type: String, required: true,},
    qr: { type: String, required: true,},
    description: { type: String, required: true,},
    lastStatus: { type: Date, required: true,},

}, {
    timestamps:true,
});

const QrCode = mongoose.model("QrCode", qrSchema, "Items");

module.exports = QrCode;