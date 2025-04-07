require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL ;

main()
  .then(() => {
    console.log("Connected to DB..");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  // // Update each listing so that the image field is only the URL string.
  // initData.data.forEach((listing) => {
  //     listing.image = listing.image.url;
  // });
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "67f41cd5f078da9a65e85973" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized..");
};

initDB();
