import { createPost, delteUser, getUser, updateUser } from "../controller/user"

const router =  require('express').Router()
const { middaleWare } = require('../auth/middleWare')

router.get('/all',middaleWare,getUser)
router.post('/create',middaleWare,createPost)
router.delete('/delete/:id',middaleWare,delteUser)
router.patch('/update/:id',middaleWare,updateUser)

module.exports =router