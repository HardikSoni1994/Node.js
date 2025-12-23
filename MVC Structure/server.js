const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/', require('./routes/'));

app.listen(PORT, (error) => {
    if (error) {
        console.log("Server is not connected..😥");
        return;
    }
        console.log(`Server is connected to http://localhost:${PORT}`);
});