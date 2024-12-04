const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Welcom to Hell!')
})

app.get('/twitter', (req, res) => {
    res.send("Sandeepmauryaaa_")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login first</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})