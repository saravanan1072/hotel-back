const mongoose=require('mongoose');

const dataStructure=mongoose.Schema({
    name:String,
    hotelName:String,
   checkIn:String,
   checkOut:String,
   price:Number

  
})

const reservationModal=mongoose.model("reservation",dataStructure)
module.exports=reservationModal;