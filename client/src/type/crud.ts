// User Crude Types 
type CleanUser ={
     name:string,
     email:string,
     city:string,
}

type User   = CleanUser& {
     createdAt:Date,
     _id:string
}

interface UserFetchApi {
  status:boolean,
  data:{
    data:User[];
  },
  getDataofUser:()=>void
}

export {CleanUser,User,UserFetchApi}