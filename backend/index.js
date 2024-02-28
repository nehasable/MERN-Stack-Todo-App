const express=require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./database')
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
app.use(express.json())
app.use(cors)

app.post('/todo',async (req,res)=>{
const createPayload=req.body                //req.body input
const parsedPayload=createTodo.safeParse(createPayload)
if(!parsedPayload.success){
    res.status(411).json({
        msg:"you sent wrong input"
    })
    return
}
try{
const newTodo=await todo.create({
    title:createPayload.title,                //validate from zod
    description:createPayload.description,
    completed:false
})
res.json({
    msg:"todo created",
    todoId:newTodo._id
})
}catch(err){
    console.log(err)
}
})

app.get("/todo",async (req,res)=>{
    const findTodo=await todo.find({})
    res.json({
        findTodo
    })

})
app.put("/completed",async(req,res)=>{
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong input"
        })
        return
    }
await todo.update({
_id:req.body.id           //syntax for updating based on id
},{
    completed:true
})
res.json({
    msg:"task completed"
})
})
app.listen(4000, () => {
    console.log("Server running on port 4000");
});
