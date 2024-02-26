const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/todo")
const todoSchema=mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
})
const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo:todo        //key:value
}
