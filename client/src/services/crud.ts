import { useEffect, useState } from "react"
import { CleanUser, UserFetchApi } from "../type/crud"

function useHookGetData():UserFetchApi {
const [data,setData] = useState({status:false,data:[]}) 
const getDataofUser = async ()=>{
try{

    const rsponse =  await fetch(`http://localhost:5000/user/all`,{
    headers:{
       "Authorization":"Test Token"
    }})
    if(rsponse.status===200){
        const data =await rsponse.json()
     setData({status:true,data:data.data})
    } 
}catch (error){
    setData({status:false,data:[]})

}}
useEffect(()=>{
    getDataofUser()
},[])   
return {
  status:data.status,
  data:{
    data:data?.data||[]
  },
  getDataofUser:getDataofUser
} 
}

function useHookDeleteData() {
    const deleteDataofUser = async (id:string)=>{
    try{
        const rsponse =  await fetch(`http://localhost:5000/user/delete/${id}`,{
        headers:{
           "Authorization":"Test Token"
        },
        method:"DELETE"
    })
        if(rsponse.status===200){
            const data =await rsponse.json()
           return {status:true,data:data.data}
        } else{
            return {status:false,data:{message:"Something went wrong....."}}
        }
    }catch (error){
           return {status:false,data:error}    
    }}
 
    return {deleteDataofUser}
}
function useHookPostData() {
    const createDataofUser = async (body:CleanUser)=>{
        console.log(JSON.stringify(body))
    try{
        const rsponse =  await fetch(`http://localhost:5000/user/create`,
            
       {
        body:JSON.stringify(body),
        headers:{
           "Authorization":"Test Token",
           "Content-type":"application/json"
        },
        method:"POST"
    })
        if(rsponse.status===200){
            const data =await rsponse.json()
           return {status:true,data}
        } else{
            return {status:false,data:{message:"Something went wrong....."}}
        }
    }catch (error){
           return {status:false,data:error}    
    }}
 
    return {createDataofUser}
}

function useHookUpdateData() {
    const updateDataofUser = async (id:string,data:CleanUser)=>{
        console.log("data",data)
    try{
        const rsponse =  await fetch(`http://localhost:5000/user/update/${id}`,    
       {
        body:JSON.stringify(data),
        headers:{
           "Authorization":"Test Token",
           "Content-type":"application/json"
        },
        method:"PATCH"
       })
        if(rsponse.status===200){
            const data =await rsponse.json()
           return {status:true,data}
        } else{
            return {status:false,data:{message:"Something went wrong....."}}
        }
    }catch (error){
           return {status:false,data:error}    
    }}
 
    return {updateDataofUser}
}
    

export {useHookGetData,useHookDeleteData,useHookPostData,useHookUpdateData}