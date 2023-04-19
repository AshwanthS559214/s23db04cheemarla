const mongoose = require("mongoose")
const nikeSchema = mongoose.Schema({
nike : String,
size: String,
cost: Number
})
module.exports = mongoose.model("nike",
nikeSchema)