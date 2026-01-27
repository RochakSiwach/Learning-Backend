const http = require("http");
const { URLSearchParams } = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang="en">
        <head>
             <title>Document</title>
        </head>
        <body>
            <nav> 
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/calculator">Calculator</a></li>
                </ul>
            </nav>
        </body>
        </html>`);
        res.end();
  }
  else if(req.url === '/calculator' && req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <form action ='/calculator-result' method = 'POST' > 
        <input type='number' name='number1' placeholder='enter num1'>
        <input type='number' name='number2' placeholder='enter num2'>
        <button>SUM</button>
        `);
        res.end();
  }
  else if(req.url === '/calculator-result' &&  req.method === 'POST'){

    res.setHeader('Content-Type','text/html')

    let data = []
    req.on("data",(chunk)=>{
        data.push(chunk)
    })

    req.on("end",()=>{
        const parseBody = Buffer.concat(data).toString();
        console.log(parseBody)

        const params = new URLSearchParams(parseBody)
        const body = {}
        for( const [key,value] of params.entries()){
            body[key] = value;
        }

        const num = Number(body.number1)+ Number(body.number2);
        res.write(`<h1>SUM IS : ${num} </h1>`)
        res.end();     
    
    })

  }

});


const Port = 2000;
server.listen(Port, ()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})