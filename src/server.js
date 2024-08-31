require('dotenv').config();
const express = require('express');
const connection = require('./config/database')
const webRoutes = require("./routes/web")
const configViewEngine = require('./config/viewEngine');
const { confirmDelete } = require('./controllers/homeController');
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//config req.body

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//khai bao route
app.use('/', webRoutes);

app.locals = require("./controllers/homeController")

// app.get("/", (req, res) => {
//   res.render("home", {
//     delete: "confirmDelete" // -> THIS PASS AS OBJECT/FUNCTION
//   });
// });


// connection.query(
//   'SELECT * FROM Users u',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server 
//   }
// );


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})