const mongoose = require('mongoose');
const Record=require('../models/record')

mongoose.connect('mongodb://localhost:27017/medChain', {useNewUrlParser:true, useUnifiedTopology:true})
.then(async()=>{
    const data= await Record.findOne({previoushash:0})
    if(data==null){
        Record.create({
            date: '2022-7-17',
            user: '62d39778434691459e290711',
            data: {
                department: '62d39778434691459e290711',
                docter: '62d39778434691459e290711',
                heading: 'dummy',
                age: 0,
                gender: 'dummy',
                bloodgroup: 'dummy',
                height: 0,
                weight: 0,
                allergy: 'dummy',
                sugar: 'dummy',
                cholestrol: 'dummy',
                pressure: 'dummy',
                description: 'This is the genisiblock'
            },
            previousHash: '0',
            hash: 'ab556136fa63f197ecf5a14579ce562836d87241e4b8d796ec1d217507ab096d',
            nounce: 25527
          })
        .then((res)=>{
            console.log('Genis Block Created')
            console.log(res)
        }).catch((err)=>{
            console.log('some error')
            console.log(err)
        })
    }else{
        console.log(data)
        console.log('Genis Block already exists !!!')
    }
})
.catch((err)=>{
  console.log(err)
})





