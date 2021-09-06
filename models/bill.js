const mongoose = require('mongoose');
const billSchema = mongoose.Schema({
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    items:[{
        itemsDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required: true
        },
        quantity: {
            type: Number,
            min:[1, "Quantity can not be less than 1"],
            default: 1
        },
        amount:{
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,

    }
}, {timeStamps: true});

module.exports = mongoose.model('Bill', billSchema)