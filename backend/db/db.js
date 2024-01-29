const mongoose =require("mongoose")
// const URI=  "mongodb://127.0.0.1:27017/MERN";
const URI=process.env.MONGO_URI
const mongoDB=async()=>{
    try {
        await mongoose.connect(URI) //connect with database
        console.log("connect is sucessfull with mongodb")
    } catch (error) {
        console.log("connection failed")
        console.log(error.message)
        process.exit(0) //if conncetion is failed then exit
        
    }
}
module.exports= mongoDB
