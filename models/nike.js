const mongoose = require("mongoose")
const nikeSchema = mongoose.Schema({
nike_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("nike",
nikeSchema)