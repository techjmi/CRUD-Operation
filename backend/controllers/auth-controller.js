const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
//home route logic
const home = async (req, res) => {
  try {
    res.send("Welcome to our first router this is home page by controller.js");
  } catch (err) {
    console.log(`An error occured ${err.message}`);
  }
};
//reandom logic
const random = async (req, res) => {
  try {
    res.send("welcome to our registeration page by controller.js");
  } catch (err) {
    console.log(err.message);
  }
};
//register logic
const register = async (req, res) => {
  try {
    const { email, username, phone, password, confirmPassword, image } = req.body;
    const userExit = await User.findOne({ email });
    if (userExit) {
      res.status(400).json({ msg: "user already exit" });
    }
    //password hashing method
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);
    if(password!= confirmPassword){
      res.status(400);
      throw new Error("Password and Confirm Password are not match");
    }
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
      confirmPassword,
      image
    });
    const token = await userCreated.generateToken();

    console.log(userCreated);
    console.log(token);
    res
      .status(200)
      .json({
        userCreated,
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    // res.send(userCreated);
  } catch (error) {
    console.log(error.message);
  }
};
//login logic
const login= async (req,res)=>{
    // console.log("this is login page")
    try {
        const {email, password} =req.body
        const userExit= await User.findOne({email})
        console.log(userExit) //to see the data
        if(!userExit){
            res.status(400).json({"message":"Invalid Credentail"})
        }
const user= await bcrypt.compare(password, userExit.password)
if(user){
    res
    .status(200)
    .json({
      message:"login sucessfull",
      token: await userExit.generateToken(),
      userId: userExit._id.toString(),
    });
}else{
    res.status(401).json({message:"Invalid Email or Password"})
}
    } catch (error) {
        console.log(error.message)
    }
}
//user logic....to get user data
const user= async(req, res)=>{
  try {
    const userData= req.user //this is from  middleware
    res.status(200).json({userData})
    console.log(userData)
  } catch (error) {

    console.log(`The error in the user logic is ${error.message}`)
  }
}
module.exports = { home, random, register, login, user };
