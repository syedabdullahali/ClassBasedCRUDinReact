const middaleWare  = async (req,res,next)=>{
try{
    if(req.headers.authorization==="24"){
        next()
    }else{
       res.status(403).json({message:"Access denied"})
    }
}catch (error){
    res.status(500).json({error:error,message:"Something went wrong...."})
}
}

module.exports = {middaleWare}