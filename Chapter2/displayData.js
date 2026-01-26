const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
        <head><title>Display Data</title></head>
        <body><h1>Hello World</h1></body>
        </html>
        `)
    res.end();
})

const Port = 4000;
server.listen(Port,()=>{
    console.log(`Server is live at : http://localhost:${Port}`);
})