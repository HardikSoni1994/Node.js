const fs = require('fs');

console.log("starting");

// Non-blocking(Async) way

const result = fs.readFile('test.txt', 'utf8', (err, result) => {
    console.log(result);
    
    });


    console.log("ending");

    console.log("starting new task");
