// const mongoose = require("mongoose");
const { Schema, model } = require('mongoose')
const dateFormat = require("../utils/dateFormat");

const tabSchema = new Schema({
  description: {
    type: String,
    required: "What kind of drinking are we doing tonight?",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  tabOwner: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  drinks: [
    {
      description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      Price: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Tab = model("Tab", tabSchema);

module.exports = Tab;
