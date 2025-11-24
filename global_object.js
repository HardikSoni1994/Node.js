// console.log(__filename); // used to get the current file path
// console.log(__dirname); // used to get the current folder path

let isloader = true;
let totalsecond = 60;

// setTimeout(() => {
//     console.log("welcome to NodeJs");
//     isloader = false;
// }, 3000);

setInterval(() => {
    if (totalsecond == 0) {
        return;
    }
    totalsecond++;

    let hours = Math.floor(totalsecond / 3600);
    let minutes = Math.floor(totalsecond / 120);
    let second = totalsecond % 60;

    console.log(`${hours} : ${minutes} : ${second}`);
    
}, 1000);



