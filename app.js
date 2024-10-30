const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing=require("./models/ListingModel")

MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Db connect");
  })
  .catch((error) => {
    console.log("Error is", error);
  });
async function main() {
  mongoose.connect(MONGO_URL);
}

app.get("/listing", async (req,res)=>{
  const samplelist=new Listing({
    title:"hotel",
    description:"chacha",
    price:2000,
    location:"bsb",
    country:"india"
  })
  await samplelist.save();
  console.log("sample saved");
  res.send("aagya bhai")
})

app.listen(8080, () => {
  console.log(`server started`);
});
