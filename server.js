const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello me')
})

app.get('/hh', (req, res) => {
  res.send('Hello hh')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})