const {model} = require("mongoose");

const {watchListSchema} = require("../schemas/watchListSchema");

const watchListModel = new model("watchList" , watchListSchema);

module.exports ={watchListModel};