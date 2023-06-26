const express=require("express"); 
const ones=require("../model/login.model") 

const {hashpassword,hashphone,hashcompare,token}=require("../common/bcrypt");


const log=express.Router();   


log.get('/signupget', async(req,res,next)=>{ 
try{ 
    const findone= await ones.find(); 
    res.status(200).json({msg:findone}); 

}catch(error){ 
    res.status(500).json({error:error}); 
    console.log(error)
}
})   



log.post("/signuppost",async(req,res)=>{ 
    try{   
        
        const findone= await ones.findOne({email:req.body.email}); 
        if(!findone){
          
          const hasingphone= await hashphone(req.body.phone); 
          const hasingpassword=await hashpassword(req.body.password);
          
        const oness= new ones({email:req.body.email,password:hasingpassword,phone:hasingphone});
        if(oness){
       await oness.save(); 
       res.status(200).json({msg:"sucess"}); 
        }else{ 
            res.status(401).json({msg:'enter email and password'})
        }
    }else{res.status(401).json({msg:'already registerd'})}
    }catch(error){ 
        res.status(500).send({error:error}); 
        console.log(error)
    }
    })    



log.post("/signinpost", async (req,res)=>{ 

  try{  
    const verfy=await ones.findOne({email:req.body.email});  
  
    if(!verfy){ 
        res.status(400).json({msg:"enter corect mail"}); 
    }else{  
        if(await hashcompare(verfy.password,req.body.password)){    
            // const id= verfy._id; 
           
              

            let tokens= await token({email:verfy.email,_id:verfy._id}) 
              
            res.status(200).json({msg:"login sucess",id:verfy._id,tokens});   
           
            
        }else{ res.status(401).json({msg:"enter correct password"}); }
    }
  
} catch(error){ 

    res.status(500).json({error:error}); 
            
}


})


    log.patch('/signuppatch',async(req,res)=>{ 
        try{ 
            const {phone,password,email,_id}=req.body
       const findone= await ones.findOne({_id:_id}); 
       const hasingphone= await hashphone(phone);
          const hasingpassword=await hashpassword(password);
    const updateone   =await findone.updateOne({email:email,phone:hasingphone,password:hasingpassword,update:Date.now()})
            res.status(200).json({msg:"update sucess",msg1:updateone}); 
        
        }catch(error){ 
            res.status(500).json({error:error}); 
            console.log(error)
        }
        })   




        log.delete('/signupdelete',async(req,res)=>{ 
            try{ 
                
           const findone= await ones.findOne({email:req.body.email}); 
           if(findone){
        await findone.deleteOne();
                res.status(200).json({msg:'delete sucess'}); 
           }else{res.status(401).send({msg:"no data match"})}
            }catch(error){ 
                res.status(500).send({error:error}) 
                console.log(error)
            }
            })  

module.exports=log;