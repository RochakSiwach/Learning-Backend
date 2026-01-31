const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/' ){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <h1> For topics fill the form!!
            <a href="/form">Men</a>
            `
        )
            res.end();
    }
    else if(req.url === '/form' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`<html>
            <head><title>userInput</title></head>
            <body>
            <h1>Fill the Login form</h1>
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
            res.end();
        }

        else if(req.url === '/submit-detail' && req.method === 'POST'){
            res.setHeader('Content-Type', 'text/html')

            res.write(`
                <H1> TOPICS COVERED ARE :-)</H1>
                <p>Installing the icon expension.</p>
                <p>npm init</p>
                <p>npm script</p>
                <p>Installing packages</p>
                <p>Installing Nodemon</p>
                <p>Some basic topics like syntax errors, runtime errors, logical error.
                `)

            let data = []

            req.on('data',(chunk)=>{
                data.push(chunk)
                console.log(chunk)
            })
            
            req.on('end',()=>{
                const param = Buffer.concat(data).toString();
                console.log(param);

                let body = {}
                const parseBody = new URLSearchParams(param)
                for( const [key,value] of parseBody.entries()){
                    body[key] = value;
            }

            console.log(body)

    })
    res.end();


}
})
    

const Port = 3000;
server.listen(Port, ()=>{
    console.log(`Port is running on : http://localhost:${Port}`)
})