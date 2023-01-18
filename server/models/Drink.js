const mongoose = require("mongoose");
const { Schema } = mongoose;
const drinkSchema = new Schema({
  drinkName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  category: {
    type: String,
    required: true,
  },
});
const Drink = mongoose.model("Drink", drinkSchema);
module.exports = Drink;
