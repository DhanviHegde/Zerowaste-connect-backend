// models/Listing.js
const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  quantity: Number,
  location: String,
  status: {
    type: String,
    enum: ["available", "claimed"],
    default: "available"
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Listing", listingSchema);
