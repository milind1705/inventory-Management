const mongoose = require('mongoose');
const validator = require('validator');
const adminSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator:{
            isEmail: true,
        }
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
});

module.exports = mongoose.model('Admin', adminSchema);