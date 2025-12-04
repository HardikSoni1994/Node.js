const fs = require('fs');
const os = require('os');

console.log("CPUs : ", os.cpus().length);


console.log("starting");

// Non-blocking(Async) way

const result = fs.readFile('test.txt', 'utf8', (err, result) => {
    console.log(result);
    
    });


    console.log("ending");

    console.log("starting new task");
