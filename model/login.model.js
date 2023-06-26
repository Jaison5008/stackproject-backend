const mongoose=require('mongoose'); 
 //const validator=require('validator')

const login=mongoose.Schema({ 
  
email:{ 
type:String, 
required:true
}, 
password:{ 
    type:String, 
    required:true
}, phone:{ 
    type:String, 
    required:true
}, 

create:{ 
type:Date, 
default:Date.now() 
}, 
update:{ 
    type:Date, 
    default:Date.now()
}



}) 
module.exports=mongoose.model('login',login)