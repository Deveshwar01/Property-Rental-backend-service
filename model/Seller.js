const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
    SellerUserName: {
        type: String,
        required: true,
        trim: true
    },
    SellerEmail: {
        type: String,
        required: true,
        trim: true
    },
    SellerPassword:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Seller", SellerSchema);
