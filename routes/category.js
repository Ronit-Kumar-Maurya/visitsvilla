const express = require("express");
const router = express.Router();
const listingController = require("../controllers/category");

router.get("/category/:category", listingController.renderCategory);
router.get("/search", listingController.searchCountry);
module.exports = router;