const connection = require('../config/database')


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getHH = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const postCreateUser = (req,res) => {
    console.log(req.body.name);
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;

    let { email, name, city } = req.body;
    res.send("create new user");

    connection.query(
        `INSERT INTO
        Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
          console.log(results);
        }
      );
}

module.exports = {
    getHomepage,
    getHH,
    postCreateUser,getCreatePage
}