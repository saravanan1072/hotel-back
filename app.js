
const express=require('express');
const bodyparser=require('body-parser');
const route=require('./router/routes');
const cors=require("cors")
const app=express();
const connect=require('./database/connect')

app.use(bodyparser.json())
app.use(cors())
 app.use(route)

app.listen(3001,()=>{
    connect()
    console.log("server running on port localhost:3001")
})