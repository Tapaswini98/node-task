const mongoose = require("mongoose");

let offerSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    count:{
        type:Number,
        required:true
    }
})

module.exports  = mongoose.model("Offer",offerSchema);