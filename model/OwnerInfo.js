const mongoose=require('mongoose');

const dataStructure=mongoose.Schema({
    name:String,
    hotelName:String,
    price:Number,
    address:String,
    image:String

  
})

const dataModal=mongoose.model("data",dataStructure)
module.exports=dataModal;