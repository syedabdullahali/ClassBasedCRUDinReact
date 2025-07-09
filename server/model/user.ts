const {Schema,model} = require('mongoose')
const userModel = new Schema({
 name:{type:String,default:"random user"},
 email:{type:String,default:"random@gmail.com"},
 city:{type:String,default:"randomArea"}
},{timestamps:true})

module.exports =  model('user',userModel)