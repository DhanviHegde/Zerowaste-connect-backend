// routes/listingRoutes.js
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleCheck");
const { createListing, getAvailableListings, claimListing, updateListing, deleteListing } = require("../controllers/listingController");


// Create a new listing (Donor only)
router.post("/", verifyToken, allowRoles("donor"), createListing);

// Get all available listings (NGO only)
router.get("/", verifyToken, allowRoles("ngo"), getAvailableListings);

// Claim a listing (NGO only)
router.post("/:id/claim", verifyToken, allowRoles("ngo"), claimListing);

// Update a listing (Donor only)
router.patch("/:id", verifyToken, allowRoles("donor"), updateListing);

// Delete a listing (Donor only)
router.delete("/:id", verifyToken, allowRoles("donor"), deleteListing);

module.exports = router;


