const http = require('http')

const server = http.createServer((req,res)=>{
    let data = 'hello';
    console.log(Buffer.from(data));
})

const Port = 3000;
server.listen(Port,()=>{
    console.log(`Port : http://localhost:${Port}`)
})