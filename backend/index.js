const express=require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./database')
const app=express()
const mongoose=require("mongoose")
app.use(express.json())


app.post('/todo',async (req,res)=>{
const createPayload=req.body                //req.body input
const parsedPayload=createTodo.safeParse(createPayload)
if(!parsedPayload.success){
    res.status(411).json({
        msg:"you sent wrong input"
    })
    return
}
await todo.create({
    title:createPayload.title,                //validate from zod
    description:createPayload.description
})
})
app.get("/todo",(req,res)=>{

})
app.put("/completed",(req,res)=>{
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong input"
        })
        return
    }
})