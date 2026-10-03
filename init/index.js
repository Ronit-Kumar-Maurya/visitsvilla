const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/visitsvilla";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");

    await initDB();

    await mongoose.connection.close();
}

const initDB = async () => {
    await Listing.deleteMany({});

    const dataWithOwner = initData.data.map((obj) => ({
        ...obj,
        owner: "6a9cfe82427f5a2c3c19a697"
    }));

    await Listing.insertMany(dataWithOwner);

    console.log("data was initialized");
};

main().catch((err) => {
    console.log(err);
});