const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//config static file
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.send('Hello me')
})

app.get('/hh', (req, res) => {
  // res.send('Hello hh')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})