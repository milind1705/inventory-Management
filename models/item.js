const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    itemName:{
        type: String,
        required: true
    },
    weight:{
        type: String,
    },
    batchNo:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }


});

module.exports = mongoose.model("Item", itemSchema);

