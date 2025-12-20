const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/Gym-Tracker"; 

mongoose.connect(URI)
.then(() => {
    console.log("mongoDB is connected to Gym-Tracker database");
}).catch((error) => {
    console.log("MongoDB connection failed ", error);
}).finally(() => {
    console.log("MongoDB connection is Completed");
});