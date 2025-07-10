import express, {Request,Response} from "express"
const curdModel = require('../model/user')

const getUser = async (req:Request,res:Response)=>{
try{
    const response  = await curdModel.find()
    res.status(200).json({success:true,data: response,message:"Successfully Fetch"})
}catch (error){
    res.status(500).json({error:error,success:false,message:"Somthing Went Worong..."})
}
}

const createPost = async (req:Request,res:Response)=>{
try{
const temp =  new curdModel(req.body)    
const response=  await temp.save() 
res.status(200).json({data:response,success:true,message:"Successfully Save"})
}catch (error){
res.status(500).json({error:error,success:false,message:"Somthing Went Worong..."})
}
}

const delteUser = async (req:Request,res:Response)=>{
try{
const response = await  curdModel.findByIdAndDelete(req.params.id)
res.status(200).json({data:response,message:"Deleted Successfully",success:true})
}catch(error){
res.status(500).json({error:error,message:"Somting Went Worng While Delating",success:false})
}}

const updateUser = async(req:Request,res:Response)=>{
try{
const response =  await curdModel.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
res.status(200).json({data:response,message:"Update collection successfully"})
}catch(error){
res.status(500).json({error:error,message:"Somthing went wrong while updating..."})
}}

export {getUser,createPost,delteUser,updateUser}