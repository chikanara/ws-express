const express = require("express");
const app = express()
// console.log(app)

// app.get("/",(req,res)=>{
//     console.log("method",req.method)
//     console.log("url",req.url)
//     res.send("<h1 style='color:red'>HOME Page</h1>")
// })

// app.get("/services",(req,res)=>{
//     console.log("method",req.method)
//     console.log("url",req.url)
//     res.send("<h1 style='color:red'>SERVCES PAGE</h1>")
// })
const logger = (req,res,next)=> {
    // console.log("method",req.method)
    // console.log("url",req.url)
    console.table({"method":req.method,"url":req.url})
    next()
    // if(5<4){
    //     next()
    // }
}

app.use(logger);


app.get("/css/style.css",(req,res)=> {
    // console.log("method",req.method)
    // console.log("url",req.url)
    res.sendFile(__dirname+"/public/css/style.css")
})

app.get("/",(req,res)=> {
    // console.log("method",req.method)
    // console.log("url",req.url)
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/services",(req,res)=> {
    // console.log("method",req.method)
    // console.log("url",req.url)
    res.sendFile(__dirname+"/public/services.html")
})

const PORT=5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})