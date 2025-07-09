import{Request,Response,NextFunction} from "express"
const middaleWare  = async (req:Request,res:Response,next:NextFunction)=>{
try{
    if(req.headers.authorization==="Test Token"){
        next()
    }else{
       res.status(403).json({message:"Access denied"})
    }
}catch (error){
    res.status(500).json({error:error,message:"Something went wrong...."})
}
}

module.exports = {middaleWare}