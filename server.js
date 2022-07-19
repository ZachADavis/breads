
//Required modules
const express = require('express')

//config
require('dotenv').config()
const PORT = process.env.PORT

//initializing app
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//listen
app.listen(PORT, () => {
    console.log(PORT);
})
