const mongoose = require('mongoose');
const { Schema } = mongoose;
const tabSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  tabOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Drink'
    }
  ]
});
const Tab = mongoose.model('Tab', tabSchema);
module.exports = Tab;