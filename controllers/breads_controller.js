const express = require('express')
const breads = express.Router()

//index
breads.get('/', (req, res) => {
    res.send('Index for /breads')
})

module.exports = breads