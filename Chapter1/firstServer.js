const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Creating server");
})

const Port = 2000;
server.listen(Port,()=>{
    console.log(`Server is live :- http://localhost:${Port}`)
})