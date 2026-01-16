const http = require('http')

const server = http.createServer((req,res)=>{

  res.write('<html>')
  res.write('<head><title>Trying </title></head>')
  res.write('<body><h1>hello Backend </h1>')
  res.write('</html>')

})

const Port = 2000

server.listen(Port,()=>{
    console.log(`local server par chala diya : http://localhost:${Port}`)
});