
const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type",'text/html')
    res.write(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav> 
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
</body>
</html>`)
if(req.url === '/'){
    res.write(`<h1>Welcome to the Home page</h1>`);
    res.end();
}
else if(req.url === '/men'){
    res.write(`<h1>Welcome to the men page</h1>`);
    res.end();
}
else if(req.url === '/women'){
    res.write(`<h1>Welcome to the women page</h1>`);
    res.end();
}
else if(req.url === '/kids'){
    res.write(`<h1>Welcome to the kids page</h1>`);
    res.end();
}
else if(req.url === '/cart'){
    res.write(`<h1>Welcome to the cart page</h1>`);
    res.end();
}
else{
    res.setHeader(`<h1>Welcome to the error page</h1>`);
    res.end();

}
})


const Port = 3001;
server.listen(Port,()=>{
    console.log(`le tu url le phele http://localhost:${Port}`)
})