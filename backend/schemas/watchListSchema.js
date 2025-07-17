const {Schema} =require("mongoose");

const watchListSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode : String,
});

module.exports = {watchListSchema};