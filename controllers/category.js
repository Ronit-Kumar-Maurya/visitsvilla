const Listing = require("../models/listing");

module.exports.renderCategory = async (req, res) => {

    const category = req.params.category;

    const alisting = await Listing.find({
        category: { $regex: `^${category}$`, $options: "i" }
    });

    res.render("listings/category.ejs", {
        category,
        alisting
    });
};

module.exports.searchCountry = async (req, res) => {

    const search = req.query.country;
    // console.log("SEARCH:", search);
    const listings = await Listing.find({
        country: { $regex: search, $options: "i" }
    });

    res.render("listings/search.ejs", {
        listings,
        search
    });
};