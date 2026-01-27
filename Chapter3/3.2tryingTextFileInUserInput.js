const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
            <head><title>userInput</title></head>
            <body>
            <h1> Home Page </h1>
            <ul>
            <li><a href="/form">For Form click here</a></li>
        </ul></body>
            </html>`);
        res.end();
  } else if (req.url === "/form" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
            <head><title>userInput</title></head>
            <body>
            <h1>user input</h1>
            <form action="/submit-detail" method="POST">
            <input type="text" placeholder="Enter something..." name="userName">
            <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="female">FeMale</label>
            <input type="radio" id="female" name="gender" value="female">

            <button>Submit</button>
            </form>
            </body>
            </html>`);
            res.end();
  } else if (req.url === "/submit-detail" && req.method === 'POST') {
    res.write(`<h1>Form Submitted!!</h1>`);
    fs.writeFileSync("user.txt","Trying text file in form file")
    res.end();
  } else{
    res.write(`<h1>404 Page not Found</h1>`);
    res.end();

  }
});

const Port = 4001;

server.listen(Port, () => {
  console.log(`Port : http://localhost:${Port}`);
});
