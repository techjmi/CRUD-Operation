const express= require("express")
const {GetUserData, Getcontact, deleteUser, UserByid, fetchByid, updateByid, deleteContactByid} = require("../controllers/adminController")
const authMiddle = require("../middleware/authMiddle")
const adminMiddleware = require("../middleware/adminMiddle")
const router=express.Router()

router.route("/users").get(authMiddle,adminMiddleware,GetUserData)
router.route("/users/delete/:id").delete(authMiddle,deleteUser)
router.route("/users/byid/:id").get(authMiddle,fetchByid)
router.route("/users/update/:id").patch(updateByid)
router.route("/users/contact").get(Getcontact)
router.route("/contact/delete/:id").delete(authMiddle,deleteContactByid)
module.exports= router