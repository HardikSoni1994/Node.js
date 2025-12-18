const express = require("express");
const Book = require("./model/book.model");
const db = require("./config/db.config");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded());

// create root
app.get("/", async (req, res) => {

  // all Book fetch
  const allBooks = await Book.find();

  console.log(allBooks);

  return res.render("table", { allBooks });
});

  // Add Book root (form.ejs)
app.get("/addBookPage", (req, res) => {
  return res.render("form");
});

// Insert Book Logic
app.post("/addBook", async (req, res) => {
  console.log(req.body);

  // const BookData = req.body;

  // Book.create(BookData).then(() => {
  //     console.log("Book inserted Successfully...");
  // }).catch(error => {
  //     console.log("Book insertion Failed");
  //     console.log("Error", error);
  // });

  const bookAdded = await Book.create(req.body);

  console.log(bookAdded);

  if (bookAdded) {
    console.log("Book inserted successfully..");
    return res.redirect("/");
  } else {
    console.log("Book insertion faild..");
  }
});

// Edit Book root

app.get('/editBook/:bookId', async (req, res) => {
  console.log(req.params); // {bookId : 6942f1d68c4aff0a0f7bea34}

  // const allBooks = await Book.find();
 //  const book = allBooks.find((book) => book.id == req.params.bookId);

 const book = await Book.findById(req.params.bookId);

 console.log(book);

 if (book) {
  return res.render('edit', { book });
 }
 else{
  return res.redirect('/');
 }
  
});

// Update Book Logic
app.post('/updateBook', async (req, res) => {
  console.log(req.body);

  const updatedData = await Book.findByIdAndUpdate(req.body.id, req.body, { new: true});

  console.log("Update :", updatedData);
  
  return res.redirect('/');
  
})

// Delete Book

app.get("/deleteBook", async (req, res) => {
  console.log(req.query);
  const deletedBook = await Book.findByIdAndDelete(req.query.BookId);
  // console.log(deletedBook);
  if (deletedBook) {
    console.log("Book Deleted Successfully...");
  } else {
    console.log("Book Delation failed...");
  }
  return res.redirect("/");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error occured while starting the server:", error);
    return false;
  }
  console.log(`server is running on http://localhost:${PORT}`);
});
