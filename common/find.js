class finds{ 
    constructor(query,querystring){ 
       this.query=query; 
       this.querystring=querystring


    } 
    search(){ 
    let iditems=    this.querystring ?{  
        question:{ 
            $regex:this.querystring

        }

    }:{} 
    this.query.find({...iditems}) 
    return this
    }
} 
module.exports=finds