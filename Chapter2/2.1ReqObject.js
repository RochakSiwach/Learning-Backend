const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
})

const Port = 3000;
server.listen(Port,()=>{
    console.log(`Port : http://localhost:${Port} `)
})