require('dotenv').config();
const express = require('express');
const connection = require('./config/database')
const webRoutes = require("./routes/web")
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);




// connection.query(
//   'SELECT * FROM Users u',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server 
//   }
// );


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})