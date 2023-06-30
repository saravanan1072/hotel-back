const mongoose=require('mongoose');

const RegisterStructure=mongoose.Schema({
    name:String,
    password:String,
})

const registerModal=mongoose.model("Admin",RegisterStructure)
module.exports=registerModal;