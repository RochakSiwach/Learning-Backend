const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Trying </title></head>");
    res.write("<body><h1>hello Backend  Routing Request</h1>");
    res.write("</html>");
  } else if (req.url === "/about") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Trying </title></head>");
    res.write("<body><h1>ABout page</h1>");
    res.write("</html>");
  }
});

const Port = 2002;

server.listen(Port, () => {
  console.log(`chal rha h basically http://localhost:${Port}`);
});
