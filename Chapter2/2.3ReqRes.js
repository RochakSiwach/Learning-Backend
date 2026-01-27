const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
            <head><title>Display Data</title></head>
            <body><h1>Hello World</h1></body>
            </html>
            `)
        res.end();    
    }
    else if(req.url === '/about'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
            <head><title>About Page</title></head>
            <body><h1>About Page</h1></body>
            </html>
            `)
        res.end();    
    }
})

const Port = 4000;
server.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})