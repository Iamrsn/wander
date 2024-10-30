const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/ListingModel.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected successfully");

    // Initialize the database only after successful connection
    await initDB();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (error) {
    console.error("Error initializing data:", error);
  }
};

// Call main to start the connection and initialize data
main();
