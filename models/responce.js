const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Record = require('./record');
const User = require('./user');
const Docter = require("./doctor");


const responceSchema = new Schema({
    docter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    record:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Record'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    responce:{
        type:String,
        required: true
    },
    
},{timestamps:true});

const Responce =mongoose.model('Responce',responceSchema);
module.exports =Responce;