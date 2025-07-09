const express =  require('express')
const mongoose = require('mongoose')
const app =  express()
app.use(require('cors')())
app.use(express.json())
const userRoute = require('./router/user')

app.use('/user',userRoute)

mongoose.connect('mongodb://localhost:27017/classBasedCRUDinReact').then(()=>{
    console.log("Db Is Connected")
    app.listen(5000,()=>{
        console.log("Hello I Our Server is Runing on port 5000 ")
    })
}).catch((error:unknown)=>{
   if (error instanceof Error) {
        console.error("Failed to connect DB:", error.message);
    } else {
        console.error("Unknown DB connection error:", error);
    }
})
