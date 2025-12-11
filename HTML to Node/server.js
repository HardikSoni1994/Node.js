const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/', express.static('public'));

// Middleware function to check 'name' query parameter
const middleware = (req, res, next) => {
    console.log("middleware");
    if (!req.query.name) {
        return res.render("checkpage");
    }
    if (req.query.name.length > 3) {
        return next();
    }
    else {
        return res.render("notAccess")
    }
    
}

// call middleware
app.use(middleware);

app.get("/", (req, res) => {
    res.render("Homepage", {
        name: req.query.name || '' });
})

app.get("/404", (req, res) => {
    res.render("404");
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error occurred: ${error}`);
        return false;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
})