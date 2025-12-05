const express = require("express");

const app = express();

app.get("/", (req, res) => {
    
        res.end("This is home page");    
});

app.get("/about", (req, res) => {
    res.end("This is about page");
});
app.listen(8000, (err) => {
    if (err) {
        console.log("failed to starting a server", err);
        return false;
    }
    console.log("server is stared..");
});