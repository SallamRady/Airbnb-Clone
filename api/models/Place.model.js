const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: [String],
  description: {
    type: String,
    required: true,
  },
  perks: [String],
  extraInfo: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Place", placeSchema);
