import { useEffect, useState } from "react"


function useHookGetData() {
const [data,setData] = useState({status:false,data:[]}) 
const getDataofUser = async ()=>{
try{

    const rsponse =  await fetch(`http://localhost:5000/user/all`,{
    headers:{
       "Authorization":"24"
    }})
    if(rsponse.status===200){
        const data =await rsponse.json()
     setData({status:true,data})
    } 
}catch (error){
    setData({status:false,data:error})

}}
useEffect(()=>{
    getDataofUser()
},[])   
return {...data,getDataofUser} 
}

function useHookDeleteData() {
    const deleteDataofUser = async (id)=>{
    try{
        const rsponse =  await fetch(`http://localhost:5000/user/delete/${id}`,{
        headers:{
           "Authorization":"24"
        },
        method:"DELETE"
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
 
    return {deleteDataofUser}
}
function useHookPostData() {
    const createDataofUser = async (body)=>{
        console.log(JSON.stringify(body))
    try{
        const rsponse =  await fetch(`http://localhost:5000/user/create`,
            
       {
        body:JSON.stringify(body),
        headers:{
           "Authorization":"24",
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
    const updateDataofUser = async (id,data)=>{
        console.log("data",data)
    try{
        const rsponse =  await fetch(`http://localhost:5000/user/update/${id}`,    
       {
        body:JSON.stringify(data),
        headers:{
           "Authorization":"24",
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