const mongoose = require('mongoose');

const mongoConnection = (uri,app) =>{

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
  app.listen(3000, () => {
    console.log('DB connected')
    console.log(`server started on ${3000}`);
    console.log('http://localhost:3000')
  });
})
.catch((err)=>{
  console.log(err)
})
}

module.exports = mongoConnection;