const mongoose = require('mongoose');
const { Schema } = mongoose;
const tabSchema = new Schema({
  tabDate: {
    type: Date,
    default: Date.now
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