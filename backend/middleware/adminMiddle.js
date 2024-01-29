const adminMiddleware= async(req, res, next)=>{
    try {
        console.log(req.user)
        const adminRole= req.user.isAdmin
        if(!adminRole){
            return res.status(403).json({msg:"Not Athorised"})
        }
        // res.status(200).json({msg:req.user.isAdmin})
        next() // to fetch next data
    } catch (error) {
        console.log('the error in middlle admin is')
    }
}
module.exports =adminMiddleware