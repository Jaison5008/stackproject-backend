const bcrypt=require('bcrypt');  
const jwt=require("jsonwebtoken"); 
const secretekey="admin"
const round=5;  


const hashpassword=async(password)=>{  
    try{
const salt= await bcrypt.genSalt(round); 
return await bcrypt.hash(password,salt); 
    }catch(error){console.log(error)}
}  
const hashphone=async(phone)=>{ 
    try{
        const salt= await bcrypt.genSalt(round); 
        return await bcrypt.hash(phone,salt); 
            }catch(error){console.log(error)}

}    


 const hashcompare =async(password,hashpassword)=>{  
    try{
          return  await bcrypt.compare(hashpassword,password);   
    }catch(error) { 
        return false
    }
    
    }    
    const token=async(payload)=>{ 
        return await jwt.sign(payload,secretekey,({expiresIn:"3m"})) 
    
     }    
     const validate = async(req,res,next)=>{
    
        if(req.headers.authorization)
        {
           
            let token = req.headers.authorization.split(" ")[1]
            let data = await jwt.decode(token) 
            
            if(Math.floor((+new Date())/1000) < data.exp)
                next()
            else
                res.status(401).send({message:"Token Expired"})
        }
        else
        {
            res.status(400).send({message:"Token Not Found"})
        }
    }
     
   
module.exports={hashphone,hashpassword,hashcompare,token,validate};