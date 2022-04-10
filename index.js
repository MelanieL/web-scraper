const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

// Initialize express
const app = express()

// Listen to PORT with express
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))