const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({

  name: { type: String, required: true }, 

})
const City = mongoose.model("City", PostSchema);

module.exports = City;
