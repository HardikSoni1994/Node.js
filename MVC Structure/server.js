const express = require('express');
const db = require('./config/db.config');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use('/', require('./routes/'));

app.listen(PORT, (error) => {
    if (error) {
        console.log("Server is not connected..😥");
        return;
    }
        console.log(`Server is connected to http://localhost:${PORT}`);
});