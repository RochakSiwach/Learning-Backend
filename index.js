const http = require("http")


const server = http.createServer((req, res) => {

  // res.setHeader('Content-Type', 'text/html');
  res.write(`<h1> Hello World </h1>`)
  res.end("Hello Backend")
})

const Port = 5004
server.listen(Port, ()=>{
  console.log(`Port chal rha h http://localhost:${Port}`);


const buf = Buffer.from("hello")
console.log(buf);

console.log(buf.toString());

console.log(buf.length);
console.log(buf.write("hii"));

const arr = ["hello", "jii", 1234];
const body = Buffer.from(arr);
console.log(arr);
})





// fs
// os
// path
