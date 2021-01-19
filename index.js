const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    name: "home page",
  });
});

app.get("/contact", (req, res) => {
  res.send({
    name: "contact page",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// const http = require("http");

// const fs = require("fs");

// const homePage = fs.readFileSync("index.html");
// const myassPage = fs.readFileSync("myass.html");
// const yourassPage = fs.readFileSync("yourass.html");
// const ourassPage = fs.readFileSync("ourass.html");

// const server = http.createServer((req, res) => {
//   if (req.url === "/myass") {
//     return res.end(myassPage);
//   } else if (req.url === "/yourass") {
//     return res.end(yourassPage);
//   } else if (req.url === "/ourass") {
//     return res.end(ourassPage);
//   } else if (req.url === "/") {
//     return res.end(homePage);
//   } else {
//     res.writeHead(404);

//     res.end("ASSES NOT FOUND");
//   }
// });

// server.listen(3000);
