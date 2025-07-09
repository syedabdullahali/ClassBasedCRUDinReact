const express =  require('express')
const mongoose = require('mongoose')
const app =  express()
app.use(require('cors')())
app.use(express.json())
const userRoute = require('./router/user')

app.use('/user',userRoute)

mongoose.connect('mongodb://localhost:27017/').then(()=>{
    console.log("Db Is Connected")
    app.listen(5000,()=>{
        console.log("Hello I Our Server is Runing ")
    })
}).catch((error)=>{
    console.error("Hello I Our Server is Runing ",error)
})
