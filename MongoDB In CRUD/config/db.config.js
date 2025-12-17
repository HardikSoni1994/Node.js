const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/Book-management";

mongoose.connect(URI)
.then(() => {
    console.log("mongoDB is connected to Book-management database");
}).catch((error) => {
    console.log("MongoDB connection failed ", error);
}).finally(() => {
    console.log("MongoDB connection is Completed");
});