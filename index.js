const  express=require('express');
 
const app=require('./app'); 
 
const server=express();

require('./db');
server.use('/',app);




const PORT=5000;
server.listen(PORT,()=>{console.log(`server liserning: ${PORT}`)}); 


