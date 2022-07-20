const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Department = require('./department')

const docterSchema = new Schema({
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    },
    fullname:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
      },
},{timestamps:true});

const Doctor =mongoose.model('Doctor',docterSchema);
module.exports =Doctor;