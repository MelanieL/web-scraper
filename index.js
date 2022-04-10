const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

// Initialize express
const app = express()

// Pass through URL you want to work with
const url = ('https://melanie-phillips.com/over')

axios(url)
    // chaining
    // returns a promise
    .then(response => {
        // This will return the HTML
        const html = response.data
        // console.log(html)
        // This will break the HTML down for what we're looking for
        const $ = cheerio.load(html)
        // This empty array will become the list of data we've scraped
        const posts = []
        // For each element with the following class, get the title text
        $('.blog__date', html).each(function() {
            const title = $(this).text()
            posts.push(title)
        })
        console.log(posts)
    }).catch(err => console.log())
    // The above will catch the errors

// Listen to PORT with express
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))