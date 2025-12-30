const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/Employee_Management";

mongoose.connect(URI).then(() => {
    console.log("database is Connected..");
  }).catch((error) => {
    console.log("Database is not connected..", error);
  });
