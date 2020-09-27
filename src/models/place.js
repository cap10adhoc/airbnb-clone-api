const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  
  name: { type: String, ref:"name",required: true },
  description: { type: String, ref:"description",required: true },
  rooms: {type: Number, required: true, ref:'rooms'},
  bathrooms: {type: Number, required: true, ref:'bathrooms'},
  max_guests: {type: Number, required: true, ref:'max_guests'},
  price_by_night: {type: Number, required: true, ref:'price_by_night'},
  user: {type: Schema.Types.ObjectId, ref:"user"},
  city_id:{type: Schema.Types.ObjectId, ref:"city"},
});

const Place = mongoose.model("Place", PostSchema);

module.exports = Post;
