require("dotenv").config() //this will ensure that u can use dotenv in ur file
const express =require("express")
const app =express()
const router = require("./router/auth-router")
const serviceRoute= require("./router/server-router")
const getUser= require("./router/adminRoute")
const mongoDB = require("./db/db")

const cors= require("cors") 
const corsOption={ 
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT ,PATCH, DELETE, HEAD",
    crendetials:true
}
app.use(cors(corsOption))
app.use(express.json()) //to parse incomng express data
//mount the router
app.use("/api/auth", router)
app.use("/api/data", serviceRoute)
app.use("/admin",getUser)
app.get("/", (req,res)=>{
    res.status(200).send("welcome to our mern series")
})
// app.use(middlewareErr)
const PORT= 5000
mongoDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`our server is running at port no ${PORT}`)
    })
}) 
 