const express= require("express")
const service = require("../controllers/service-controller")
const router= express.Router()
router.route("/service").get(service)
module.exports= router