const mongoose = require("mongoose");
const serviceShema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
});
//create model
const Service= new mongoose.model("Service", serviceShema)
module.exports =Service
