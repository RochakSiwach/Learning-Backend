const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type','text/html');
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
    }
    else if(req.url === '/submit-detail' && req.method == "POST"){
        res.write(`<h1>product</h2>`)
        fs.writeFileSync("submit.txt","sumit kra diya form")
        res.statusCode = 302 // yeah status code bta tah h ki redirecting 
        res.setHeader("Location",'/')
    }
})

const Port = 4001;

server.listen(Port,()=>{
    console.log(`port par cahl rha h http://localhost:${Port}`)
})