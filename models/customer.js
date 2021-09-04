const mongoose = require('mongoose');
const validator = require('validator');
const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
 
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
    }
});

module.exports = mongoose.model('Customer', customerSchema);