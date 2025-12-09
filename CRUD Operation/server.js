const express = require('express');
const PORT = 4000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

// Read
let allUsers = [
    {
        id: 1,
        name: "Hardik",
        email: "soni.hardik@gmail.com",
        password: "hardik@123",
        phone: 9875214514,
        address: "Surat",
    },
    {
        id: 2,
        name: "Raj",
        email: "Raj45@gmail.com",
        password: "raj@87",
        phone: 9874100254,
        address: "Ahmedabad",
    },
     {
        id: 3,
        name: "kevin",
        email: "kevin@gmail.com",
        password: "kevin@89",
        phone: 9874106540,
        address: "Bardoli",
    }
];

let id = 4;

app.get('/', (req, res) => {
    res.render('table', {
        name: "Hardik",
        users: allUsers
    });
});

app.get("/addUser", (req, res) => {
    res.render("form")
});

// app.get("/about", (req, res) => {
//     res.render('about');
// });

app.post("/addUser", (req, res) => {
    // console.log(req.body);    
    const user = req.query;

    // user.id = Math.floor(Math.random() * 1000);
    user.id = id;
    id++;
 
    allUsers.push(user);
    res.redirect('/');
});

app.get("/editPage", (req, res) => {
    console.log(req.query);

    const user = allUsers.find((user) => user.id == req.query.userId);

    if (!user) {
        return res.redirect('/not-found');
    }

    return res.render('edit', {
        user
    });
    
});

app.post("updateUser", (req, res) => {
    console.log(req.body);

    allUsers = allUsers.map((user) => {
        if (user.id == req.body.id) {
            return req.body;
        }
        else{
            return user;
        }
    })
    return res.redirect('/');
});

app.get("/deleteUser", (req, res) => {
    console.log(req.query); // queryString
    const userId = req.query.userId;

    allUsers = allUsers.filter((user) => user.id != userId);

    console.log(allUsers);

    return res.redirect('/');
});

app.get('/not-found', (req, res) => {
    return res.render('not_found');
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server Not Found!!!", err);
        return false;
    }
    console.log("Server is Connected PORT Is (http://localhost:4000/)");
})