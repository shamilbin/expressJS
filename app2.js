import express from "express"

const app = express()

const PORT = 8888;

app.get("/shamil",(req,res)=>{
    try {
        
        res.send("HELLO FROM SHAMIL")
    } catch (error) {
        console.log(error)
    }
})

app.get("/new",(req,res)=>{
    try {
        res.send("THIS IS A NEW PAGE")
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log("severer is running ")
})