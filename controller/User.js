const bcrypt=require('bcrypt');
const signUpStructure=require('../model/User')

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
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                password:pass,
                mobile:data.mobile,
               })
               const result= await signDocument.save()
               console.log(result);
               res.send({msg:"user register sucessfull"})
              
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
        fetchname=item.firstName
    })
    if (email === fetchuser) {
        if (await bcrypt.compare(password, fetchpassword)) {
            res.send({ msg: "User login sucessfull",name:fetchname,result:true })
        }
        else res.send({msg:"username or password is not correct"})   
    }
    else res.send({msg:"User name does not exist"})  
  
}








module.exports={loginController,RegisterController}