const Contact = require("../model/contactModel")
const User= require("../model/userModel")
const GetUserData= async(req, res)=>{
    try {
        const data= await User.find({},{password:0, confirmPassword:0})
        // res.status(200).json(data)
        if(!data ||data.length===0){
         return res.status(40).json({msg:"no data found"})   
        }
        console.log(data)
        return res.status(200).json(data)
        
    } catch (error) {
       console.log("Error during Getting the data is ", error.messagge) 
    }
}
const Getcontact= async(req, res)=>{
    try {
        const contact= await Contact.find()
        if(!contact||contact.length===0){
            return res.status(404).json({msg:"no message found"})
        }
        console.log(contact)
        return res.status(200).json(contact)
    } catch (error) {
        console.log("The error in getting the contact is ", error.messagge)
    }
}
const deleteUser= async(req, res)=>{
    try {
        const id= req.params.id
        const Delete=await User.deleteOne({_id : id})
        console.log("The delete user is", Delete)
        return res.status(200).json({msg:"delete sucessfully"})
        
    } catch (error) {
        console.log("The Error in deleting the user is", error.messagge)
    }
}
//fetch userByid
const fetchByid= async(req, res)=>{
    try {
        const id= req.params.id
        const UserByid=  await User.findById({_id:id}, {password:0, confirmPassword:0})
        console.log("the user Byid is", UserByid)
        return res.status(200).json(UserByid)
        // 
    } catch (error) {
       console.log("the error in getting the user by id is ", error.messagge) 
    }
   
}
//update the data
const updateByid = async (req, res) => {
    console.log('Update route hit');
    try {
        console.log('Update route hit');
      const _id = req.params.id;
      const updateData = req.body;
  
      console.log('Updating user with ID:', _id);
      console.log('Update data:', updateData);
  
      const updatedUser = await User.findByIdAndUpdate(_id, updateData, { new: true });
  
      if (updatedUser) {
        console.log('Updated user data:', updatedUser);
        res.json(updatedUser);
      } else {
        console.log('User not found');
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

// //update data
// const updateByid = async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const updateData = await Post.findByIdAndUpdate(_id, req.body, {
//         new: true
//       });
  
//       if (updateData) {
//         res.send(updateData);
//       } else {
//         // Handle the case where the document is not found
//         res.status(404).send("Document not found");
//       }
//     } catch (err) {
//       res.status(500).send(err); // Internal Server Error
//     }
//   };
  
const deleteContactByid= async(req, res)=>{
    try {
        const id= req.params.id
        const Delete=await Contact.deleteOne({_id : id})
        console.log("The delete user is", Delete)
        return res.status(200).json({msg:"delete sucessfully"})
        
    } catch (error) {
        console.log("The Error in deleting the contact is", error.messagge)
    }
}
module.exports= {GetUserData, Getcontact, deleteUser,fetchByid, updateByid, deleteContactByid}