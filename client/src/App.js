import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import {  useHookGetData,useHookDeleteData, useHookPostData, useHookUpdateData } from './api/crud';

function App() {

  const {status,data,getDataofUser}= useHookGetData()
  const {deleteDataofUser} = useHookDeleteData()
  const {createDataofUser} = useHookPostData()
  const {updateDataofUser} = useHookUpdateData()

  const userObj = {
    name:"",
    email:"",
    city:"",
  }

  const [form,setForm] = useState({...userObj})
  const [isEditId,setEditId] = useState('')


  const handaledeleteuserData = async (id)=>{
    try{
      await deleteDataofUser(id)
      getDataofUser()
    }catch (error){
       console.log(error)
    }
  }

  const handaleUpdateUserData = async ()=>{
    try{
      console.log('isEditId',isEditId)
      await updateDataofUser(isEditId,form)
      setForm({...userObj})
      setEditId('')
    }catch (error){
      console.log(error)
    }
  }

  const handalesaveUsreData = async (e)=>{
    e.preventDefault()
   try{
    if(isEditId){
       await handaleUpdateUserData()
    }else{
      await createDataofUser(form)
    }
    await getDataofUser()

   }catch(error){
    console.log(error)
   }
  }



  const handaleUpdate = (obj)=>{
    setEditId(obj._id)
    setForm({name:obj.name,email:obj.email,city:obj.city})
  }

  const handaleChnage = (e)=>{
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <div className="container">
      <form className='input-box' onSubmit={handalesaveUsreData}>
      <input type='text' name="name" value={form.name} onChange={handaleChnage}/>
      <input type='email'name="email" value={form.email} onChange={handaleChnage}/>
      <input type='text' name="city" value={form.city} onChange={handaleChnage}/>
      {isEditId?
      <>
      <button type="submit" >Update User</button>
      <button type="button" onClick={()=>{
        setForm({...userObj})
        setEditId()}}>Reset Update</button>
      </>:
       
       <button type="submit" >Create User</button>}
      </form>

      <div className='center-dev'>
      {
        <table border={1} >
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Date</th>
            <th>Action</th>

          </thead>
          <tbody>
            {
                 status&&data.data.map((el)=>
                   <tr>
                     <td>{el.name}</td>
                     <td>{el.email}</td>
                     <td>{el.city}</td>
                     <td>{new Date(el.createdAt).toLocaleString()}</td>
                     <td>
                      <button onClick={()=>handaleUpdate(el)}>Edit</button>
                      <button onClick={()=>handaledeleteuserData(el._id)}>Delete</button>
                     </td>
                   </tr>
                 )
            }
          </tbody> 
        </table>
     
      }
    </div>
    
    </div>
  );
}

export default App;
