const express = require("express")
const app = express()
// DATABASE 
let users= [
    {
        id:0,
        name:"MARCO REUS",
        email:"marco@gmail.com"
    },
    {
        id:1,
        name:"PAULO DYBALA",
        email:"paulo@gmail.com"
    },
    {
        id:2,
        name:"PAUL POGBA",
        email:"paul@gmail.com"
    }
]
app.use(express.json())

//get all users
app.get("/users",(req,res)=> {
    res.send(users)
})
// add user
app.post("/add_user",(req,res)=>{
    const newUser = req.body
    console.log(newUser)
    newUser.id= Date.now()
    users = [...users,newUser]
    res.send({msg:"user added",users})
})
// edit user
app.put("/users/:userId",(req,res) => {

    userId = req.params.userId
    console.log(userId)
    const modification = req.body
    users = users.map(user => user.id == userId ? {...user,...modification}:user)
    //  {
    //     id:1,
    //     name:"PAULO DYBALA",
    //     email:"paulo@gmail.com"
    // }
    // modifiction ={
        // name:"ahmed"
    // }
    res.send({msg:"user edited",users})
})

// Delete USER
app.delete("/users/:userId",(req,res) => {
    const userId = req.params.userId 
    users = users.filter(user => user.id != userId)
    res.send({msg:"user deleted", users})
} )



const PORT=5000
app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT "+PORT)
})