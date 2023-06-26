const mongoose=require('mongoose'); 


const questions=mongoose.Schema({ 



catagory: {
    type: String,
    enum: ['history','geography','logical','reasoning','science','current affairs','maths','english','science','general'],
    default: 'general'
},
keys:{ 
    type:String, 
    required:true
},
 question:{ 
    type:String, 
    required:true
},
create:{ 
type:Date, 
default:Date.now() 
},update:{ 
    type:Date, 
    default:Date.now()
}



}) 
module.exports=mongoose.model('questions',questions)