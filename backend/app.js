const express = require('express') 
const route = require('./routes/index')
const cors = require('cors')
require('dotenv').config() 
const PORT = process.env.PORT 
const app = express() 

//middleware 
app.use(cors())
app.use(route)

app.listen(PORT, () => {
    console.log('server is listening to port ', PORT)
})