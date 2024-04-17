const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const StudentModel=require('./models/Student')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LoginRegister");

app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err=> res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})