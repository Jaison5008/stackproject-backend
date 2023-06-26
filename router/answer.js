const express=require("express"); 
const anss=require("../model/answer.model");  
const ques=require('../model/question.model'); 
const { validate } = require("../common/bcrypt");

//const finds=require("../common/find")

//const { use } = require("./question"); 

const ans=express.Router();    
ans.get('/ansget/:id',validate,async(req,res,next)=>{ 
    try{  
   
       const findings=await ques.findOne({_id:req.params.id}) 
       const findone=await anss.find({id:req.params.id})
        res.status(200).json({msg1:findings,msg:findone}); 
    
    }catch(error){ 
        res.status(500).json({error:error}); 
        console.log(error)
    }
    })     
  
    ans.post("/anspost/:id",async(req,res,next)=>{    

try{  
     const num = await ques.findOne({_id:req.params.id})
          
            const{id}=req.params
            const{answer,userid}=req.body; 
            
            const item   =new anss({answer:answer,id:id,question:num.question,userid:userid}) 
           await item.save()
           res.status(200).json({msg:"answer posted sucess"})
        }catch(error){ 
            res.status(500).send({error:error}); 
            console.log(error)
        }
     
    }) 
    module.exports=ans;
  

