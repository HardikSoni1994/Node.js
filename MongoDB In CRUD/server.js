const express = require('express');
const Book = require("./model/book.model");
const db = require('./config/db.config');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('form');
});



// Insert Book
app.post('/addBook', async(req, res) => {
    console.log(req.body);
    
    const BookData = req.body;

    // Book.create(BookData).then(() => {
    //     console.log("Book inserted Successfully...");
    // }).catch(error => {
    //     console.log("Book insertion Failed");
    //     console.log("Error", error);
    // });

    const bookAdded = await Book.create(req.body);

    console.log(bookAdded);

    if(bookAdded) {
        console.log("Book inserted successfully..");
        return res.redirect('/');
    }
    else{
        console.log("Book insertion faild..");
    }
});

app.listen(PORT, (error) => {
    if (error) {
        console.log('Error occured while starting the server:', error);
        return false;
    }
    console.log(`server is running on http://localhost:${PORT}`);
})