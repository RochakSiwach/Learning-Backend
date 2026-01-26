const http = require('http');
const { buffer } = require('stream/consumers');
const { URLSearchParams } = require('url');

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
            <head><title>Practice</title></head>
            <body>
            <a href="/form">Form</a>
            <h1>For form change the url</h1>
            </body>
            </html>`)
        res.end()
    }
    else if(req.url === '/form' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
                <head><title>userInput</title></head>
                <body>
                <h1>FORM</h1>
                <form action="/submit-detail" method="POST">
                <input type="text" placeholder="Enter something..." name="userName">
                <label for="male">Male</label>
                <input type="radio" id="male" name="gender" value="male">
                <label for="female">FeMale</label>
                <input type="radio" id="female" name="gender" value="female">
    
                <button>Submit</button>
                </form>
                </body>
                </html>`)
            res.end()
    }
    else if(req.url === '/submit-detail' && req.method === 'POST'){
        res.setHeader('Content-Type', 'text/html');

        let data = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            data.push(chunk);
        })

        req.on('end',()=>{
            const value = Buffer.concat(data).toString();
            // const value = Buffer
            console.log(value);
        

        const param = new URLSearchParams(value)
        const body = {}
        for(const[key,value] of param.entries()){
            body[key] = value;
        }
        console.log(body)
        res.write(`<h1> Form Input : Name:- ${body.userName} Gender:-${body.Gender}!!`);

        
        res.end();
    })
    }

})

const Port = 4000;
server.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})