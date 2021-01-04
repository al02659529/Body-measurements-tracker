const express = require('express')
const app = express()
const userRouters = require('./routes/index.js')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.use('/users', userRouters)

app.listen(5000)
console.log("Server on port 5000")