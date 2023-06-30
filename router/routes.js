const express=require('express')
const route=express();
const AdminController=require('../controller/Admin');
route.post('/adminlogin',AdminController.adminLoginController)
route.post('/adminRegister',AdminController.adminRegisterController)

const userController=require('../controller/User')
route.post('/userLogin',userController.loginController)
route.post('/userRegister',userController.RegisterController)

const ownerController=require('../controller/Owner')
route.post('/ownerLogin',ownerController.loginController)
route.post('/ownerRegister',ownerController.RegisterController)
route.get('/ownerinfo',ownerController.getinfoController)


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
// upload.single('file'),
route.post('/ownerdata',ownerController.OwnerData)
route.get('/getdata',ownerController.getData)

const order=require('../payment/payment')
route.post('/create/order',order.createOrder)
route.post("/api/payment/verify",order.orderVerify)


const reserve=require('../controller/Reservation')
route.post('/reservation',reserve.ReservationController)
route.post('/check',reserve.compareReserve)



module.exports=route;