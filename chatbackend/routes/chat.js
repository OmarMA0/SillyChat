import { Router } from "express";
const chatRouter = Router();

chatRouter.get('/users',(req,res)=>{
    res.send({title : 'get all users'})
})
chatRouter.get('/messeges/:id',(req,res)=>{
    res.send({title :'get all messages'})
})
chatRouter.post('/messeges',(req,res)=>{
    res.send({title :'new message'})
})

export default chatRouter