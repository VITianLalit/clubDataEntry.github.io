const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const mongoDb = "mongodb://127.0.0.1:27017/lalitWebsite";
// const UserModel = require('../models/user.model')

mongoose.connect(mongoDb,(err)=>{
    if(err){
        console.log(`Unable to connect to the server : ${err}`);
    }else{
        console.log("successfully connected");
    }
})


