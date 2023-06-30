

const bcrypt=require('bcrypt');
const signUpStructure=require('../model/Owner')
const RegisterController=async(req,res)=>{
   const data=req.body;
   console.log(data);
   const querey = { email: data.email }
    let fetchuser;
   const fetchData = await signUpStructure.find(querey)
   fetchData.map((item) => {
       fetchuser = item.email;  
   })

if(fetchuser===data.email){
     res.send({msg:"email already exist in our database"})  

}else{

   const pass= await bcrypt.hash(data.password,10)    
            const signDocument= new signUpStructure({
                hotelName:data.hotelName,
                email:data.email,
                password:pass,
                mobile:data.mobile,
               })
               const result= await signDocument.save()
               console.log(result);
               res.send({msg:"Owner login sucessfull"})
              
        } 
    

}

 






const loginController=async(req,res)=>{
    let fetchuser;
    let fetchpassword;
    let fetchname;
    const { email, password } = req.body;
    console.log(email, password);
    const querey = { email: email }

    const fetchData = await signUpStructure.find(querey)
    fetchData.map((item) => {
        fetchpassword = item.password;
        fetchuser = item.email;
        fetchname=item.hotelName
    })
    if (email === fetchuser) {
        if (await bcrypt.compare(password, fetchpassword)) {
            res.send({ msg: "Owner login sucessfull",name:fetchname,result:true })
        }
        else res.send({msg:"username or password is not correct"})   
    }
    else res.send({msg:"User name does not exist"})  
  
}


// const multer=require('multer')
// const path=require('path')
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'public/Images')

//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname +"_" +Date.now() + path.extname(file.originalname))
//     }
// })
// const upload=multer({storage:storage})

const dataModel=require("../model/OwnerInfo")
const OwnerData=async(req,res)=>{
    const {data,file,name}=req.body;
        // const {hotelName,address,image,price,name}=req.body;
         console.log(req.body);
            const signDocument= new dataModel({
                name:name,
                hotelName:data.hotelName,
                address:data.address,
                price:data.price,
                image:file,
               })
            // const signDocument= new dataModel({
            //     name:name,
            //     hotelName:hotelName,
            //     address:address,
            //     price:price,
            //     image:image,
            //    })
               const result= await signDocument.save()
               console.log(result);
               res.send({msg:" hjhb"})
              
        } 
const getinfoController=async(req,res)=>{
    const fetchData = await signUpStructure.find()
    console.log(fetchData);
    res.send({msg:"",result:fetchData})

}

const getData=async(req,res)=>{
    const fetchData = await dataModel.find()
    console.log(fetchData);
    res.send({msg:"",result:fetchData})

}

module.exports={loginController,RegisterController,OwnerData,getinfoController,getData}