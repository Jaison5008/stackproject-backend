const express=require("express"); 
 const Login=require('./router/login') 
 const que=require('./router/question')  
 const ans=require('./router/answer')
const bodyParser=require('body-parser')  
const cookiParser=require('cookie-parser')

const cors =require('cors')
const app=express();  

app.use(cors()) 
app.use(cookiParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/login",Login) 
app.use("/que",que) 
app.use("/ans",ans)
module.exports=app; 
