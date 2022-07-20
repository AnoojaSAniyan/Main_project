const mongoose = require('mongoose');
const Admin = require('../models/admin')

mongoose.connect('mongodb://localhost:27017/medChain', {useNewUrlParser:true, useUnifiedTopology:true})
.then(async()=>{
    const data= await  Admin.findOne({username:'admin'})
    if(data===null){
        Admin.create({username:'admin',password:'admin123'}).then((res)=>{
            console.log('Admin Created')
            console.log(res)
        }).catch((err)=>{
            console.log('some error')
        })
    }else{
        console.log('Admin already exists !!!')
    }
})
.catch((err)=>{
  console.log(err)
})


