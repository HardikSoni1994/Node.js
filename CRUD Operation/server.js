const express = require('express');
const PORT = 4000;
const app = express();

let allUsers = [
    {
        Id: "101",
        Name: "hardik soni",
        Email: "soni.hardik@gmail.com",
        Password: "hardik@123",
        Phone: 9875124365,
        Address: "Surat , Gujarat",
        Age: "23",
    },
    {
        Id: "102",
        Name: "Rohit Sharma",
        Email: "rohitsharma@gmail.com",
        Password: "Rohit@123",
        Phone: 9876578392,
        Address: "Mumbai , Maharastra",
        Age: "36",
    },
    {
        Id: "103",
        Name: "rahul dravid",
        Email: "rahuldravid@gmail.com",
        Password: "rahul@123",
        Phone: 8765432190,
        Address: "Ranchi, Jharkhand",
        Age: "55",
    },
    {
        Id: "104",
        Name: "Kane Williamson",
        Email: "kanewilliamson@gmail.com",
        Password: "Kane@123",
        Phone: 9696969696,
        Address: "Tauranga, New Zealand",
        Age: "65",
    },
    {
        Id: "105",
        Name: "Ben Stokes",
        Email: "benstokes@gmail.com",
        Password: "Stokes@123",
        Phone: 9595959595,
        Address: "Christchurch, New Zealand",
        Age: "46",
    },
]

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('home', {
        name: "Sujal",
        isAdmin: true,
        allUsers,
    });
})

let id = 106;
app.post('/addUser', (req, res) => {
    const user = req.body;

    user.Id = id;
    id++;
    console.log(req.query)
    console.log(user)

    allUsers.push(user);
    res.redirect('/');
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server Not Found!!!", err);
        return false;
    }
    console.log("Server IS Connected PORT Is (http://localhost:4000/)");
})