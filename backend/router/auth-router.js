const express= require("express");
const { home, register, login, random, user } = require("../controllers/auth-controller");
const validate = require("../middleware/middleware");
// const signUpSchema = require("../validation/validator");
const contact = require("../controllers/contact-controller");
// const { validate } = require("../model/contactModel");
const signUpSchema = require("../validation/validator");
const authMiddle = require("../middleware/authMiddle");
// const { validate } = require("../model/contactModel");
const router= express.Router()
// router.get("/", (req,res)=>{
//     res.send("welcome to our first router")
// })
//another method
// router.route("/").get((req, res) => {
//     res.send("Welcome to our first router");
// });
router.route("/contact").post(contact)
router.route("/").get(home)
router.route("/register").post(validate(signUpSchema),register)
router.route("/login").post(login)
router.route("/random").get(random)
router.route("/user").get(authMiddle, user)
module.exports= router