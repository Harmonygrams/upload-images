const express = require('express') 
const cors = require('cors')
require('dotenv').config() 
const PORT = process.env.PORT 
const app = express() 
const route = require('./routes/index')

//middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(route)
app.listen(PORT, () => {
    console.log('server is listening to port ', PORT)
})