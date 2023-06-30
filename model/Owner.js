const mongoose=require('mongoose');

const signUpStructure=mongoose.Schema({
    hotelName:String,
    email:String,
    password:String,
    mobile:Number,
})

const signupModal=mongoose.model("owner",signUpStructure)
module.exports=signupModal;