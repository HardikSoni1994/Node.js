const { error } = require('console');
const fs = require('fs');

// create a new file in sync way
fs.writeFileSync("./user.text", "Hello Hardik");

// create a new file in async way
fs.writeFile("./user1.text", "Hello Hardik Soni", (error) => {
    if (error) {
        console.log("Error occured while creating file", error);
    }
});

// Append data to a file in sync way
fs.appendFileSync("./user.text", "\nWelcome to Node.js");

fs.appendFileSync("./user.text", "\n" + new Date().toLocaleString());
fs.appendFileSync("./user1.text", "\n" + new Date().toLocaleString());

// Append data to a file in Async way
fs.appendFile("./user1.text", "\n", new Date().toLocaleString() + "\n", (error) => {
    if (error) {
        console.log(error);
    }
});

// Read data from a file in sync way
const ReadSync = fs.readFileSync("./user.text", "utf-8");
console.log(ReadSync);

// Read data from a file in async way
const ReadAsync = fs.readFile("./user1.text", "utf-8", (error, ReadSync) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(ReadSync);
    }
});
console.log(ReadAsync); // undefined

// Delete a file in sync way
fs.unlinkSync("./user1.text");
console.log("File deleted successfully");

// copy a file in sync way
fs.copyFileSync("./user.text", "./user2.text");
console.log("File copied successfully");
