// controllers/listingController.js

const Listing = require("../models/Listing");

exports.createListing = async (req, res) => {
  try {
    const { title, description, quantity, location } = req.body;
    const listing = await Listing.create({
      title,
      description,
      quantity,
      location,
      createdBy: req.user.userId,
    });
    res.status(201).json({ message: "Listing created", listing });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvailableListings = async (req, res) => {
  try {
    const listings = await Listing.find({ status: "available" });
    res.status(200).json({ listings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.claimListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing || listing.status === "claimed") {
      return res.status(404).json({ message: "Listing not found or already claimed" });
    }
    listing.status = "claimed";
    await listing.save();
    res.status(200).json({ message: "Listing claimed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) return res.status(404).json({ message: "Listing not found" });
    if (listing.createdBy.toString() !== req.user.userId)
      return res.status(403).json({ message: "Not your listing" });

    const updates = req.body;
    const updated = await Listing.findByIdAndUpdate(req.params.id, updates, { new: true });

    res.status(200).json({ message: "Listing updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    if (listing.createdBy.toString() !== req.user.userId)
      return res.status(403).json({ message: "Not your listing" });

    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

