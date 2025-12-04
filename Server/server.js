const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req === "/favicon.ico") {
        return;
    }

  const msg = `User visited at : ${new Date()} page : ${req.url} IP Address : ${
    req.socket.remoteAddress
  }\n`;
  fs.appendFile("./visitor.txt", msg, (err) => {});

  console.log(req.url);

  let fileName = "";

  switch (req.url) {
    case "/":
        fileName = "index.html";
      break;
    case "/about":
        fileName = "about.html";
        break;
    case "/contact":
        fileName = "contact.html";
        break;
    default:
        fileName = "404.html";
  }


  fs.readFile(fileName, (err, data) => {

    res.end(data);
  })

//   res.write("<h1>Most welcome for visiting my server..</h1>");
  // res.end();
});

server.listen(4000, (err) => {
  if (err) {
    console.log("server is not working", err);
    return false;
  }
  console.log("localhost:4000 Server is successfully working....");
});
