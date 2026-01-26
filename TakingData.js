const http = require('http');
const fs = require('fs');

const { URLSearchParams } = require('url');

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

            res.end();
    }
    else if (req.url === '/submit-detail' && req.method === 'POST'){
        res.setHeader('Content-Type','text/html')
        res.write('<h1>Form Submitted</h1>')

        let body = [];
        req.on("data",(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
                const parsebody = Buffer.concat(body).toString();
                console.log("Form Detail: "+ parsebody);

            // parse kri input 
            const params = new URLSearchParams(parsebody);
            const bodydata = {};
            for( const [key,value] of params.entries()){
                bodydata[key] = value;
            }
            console.log(bodydata)

            // file mai data store kr diya 
            fs.writeFileSync("TakingData.txt", JSON.stringify(bodydata))

            res.end();
        })
    }
    })

const Port = 4001;

server.listen(Port,()=>{
    console.log(`port par cahl rha h http://localhost:${Port}`)
})