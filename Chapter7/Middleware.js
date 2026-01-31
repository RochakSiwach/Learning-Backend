const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
    res.send("Hello duniya")
})

const Port = 2000
app.listen(Port, () => {
    console.log(`Port is running on : http://localhost:${Port}`)
})
