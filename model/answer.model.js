const mongoose=require('mongoose'); 


const answers=mongoose.Schema({ 
question:{type:String, 
    required:true},
answer:{ 
type:String, 
required:true
},  
id:{ 
    type:mongoose.Schema.Types.ObjectId, 
    required:true
    },  
    userid:{ 
        type:String,  
        default:"1"
        
    },
create:{ 
type:Date, 
default:Date.now() 
},update:{ 
    type:Date, 
    default:Date.now()
}



}) 
module.exports=mongoose.model('answer',answers)