const express=require("express"); 
const ones=require("../model/question.model");
//const finder=require('../common/find')

const que=express.Router();   


{/*que.get('/qget',async(req,res,next)=>{ 
try{   
    
      //  const findings  = new finder(ones.find(),req.findstring).search().filter().pagination(pageitem)
    const findone= await ones.find(); 
    res.status(200).json({msg:findone}); 

}catch(error){ 
    res.status(500).json({error:error}); 
    console.log(error)
}
})   */}

que.get('/qget/',async(req,res,next)=>{ 
    try{   
        const search=req.query.search||'';
          const findings  = await ones.find( {question:{ 
            $regex:search, 
            $options:'i'

        }})

        
      res.status(200).json(findings)
    }catch(error){ 
        res.status(500).json({error:true,msg:"internal server error"}); 
        console.log(error)
    }
    })   

que.post("/qpost",async(req,res,next)=>{ 
    try{    
        const{catagory,keys,question}=req.body;
        const item   =new ones({catagory,keys,question})  
        if(item){
       await item.save()
       res.status(200).json({msg:"question posted sucess"}) 
        }else{ 
            res.status(200).json({msg:"login"}) 
        }
    }catch(error){ 
        res.status(500).send({error:error}); 
        console.log(error)
    }
    })    

module.exports=que;