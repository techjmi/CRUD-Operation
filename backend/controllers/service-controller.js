const Service = require("../model/serviceModal")

const service= async(req,res)=>{
    try {
        const response = await Service.find()
        if(!response){
            res.status(404).json({msg:"No Service found"})
            return
        }
res.status(200).json({msg:response})
    } catch (error) {
        console.log(`The error in service is ${error.message}`)
    }
}
module.exports= service