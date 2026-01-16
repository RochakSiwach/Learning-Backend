
// Method 1

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>
//             <head><title>Practice Set</title></head>
//             <body>
//             <h1>Welcome to the home page</h1>
//             </body>
//             </html>
//             `)
//     }
//     else if(req.url.toLowerCase() === '/men'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>
//             <head><title>Men Page</title></head>
//             <body>
//             <h1>Welcome to the men page</h1>
//             </body>
//             </html>
//             `)
//     }
//     else if(req.url.toLowerCase() === '/women'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>
//             <head><title>women Page</title></head>
//             <body>
//             <h1>Welcome to the women page</h1>
//             </body>
//             </html>
//             `)
//     }
//     else if(req.url === '/kid'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>
//             <head><title>Kid Page</title></head>
//             <body>
//             <h1>Welcome to the kid page</h1>
//             </body>
//             </html>
//             `)
//     }
//     else if(req.url === '/cart'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>
//             <head><title>Cart Page</title></head>
//             <body>
//             <h1>Welcome to the Cart page</h1>
//             </body>
//             </html>
//             `)
//     }
//     else{
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>
//             <head><title>Practice Set</title></head>
//             <body>
//             <h1>Welcome to the Error page</h1>
//             </body>
//             </html>
//             `)

//     }
// })


// const Port = 3000;
// server.listen(Port,()=>{
//     console.log(`likh yha chale ga http://localhost:${Port}`)
// });



// method 2 
const http = require('http')

// const html = require('./PracticeSet.html')

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
    res.write(`<h1>Welcome to the Home page</h1>`)
}
else if(req.url === '/men'){
    res.write(`<h1>Welcome to the men page</h1>`)
}
else if(req.url === '/women'){
    res.write(`<h1>Welcome to the women page</h1>`)
}
else if(req.url === '/kids'){
    res.write(`<h1>Welcome to the kids page</h1>`)
}
else if(req.url === '/cart'){
    res.write(`<h1>Welcome to the cart page</h1>`)
}
else{
    res.setHeader(`<h1>Welcome to the error page</h1>`)

}
})


const Port = 3001;
server.listen(Port,()=>{
    console.log(`le tu url le phele http://localhost:${Port}`)
})