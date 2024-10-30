const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");

MONGO_URL = "mongodb://270.0.0.1:27017/wanderlust";
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

app.listen(8080, () => {
  console.log(`server started`);
});
