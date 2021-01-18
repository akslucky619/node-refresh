const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/myass") {
    return res.end("MY ASS");
  } else if (req.url === "/yourass") {
    return res.end("YOUR ASS");
  } else if (req.url === "/ourass") {
    return res.end("OUR ASS");
  } else {
    res.writeHead(404);

    res.end("ASSES NOT FOUND");
  }
});

server.listen(3000);
