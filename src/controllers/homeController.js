const connection = require('../config/database')


const getHomepage = (req, res) => {
    // res.send('Hello me')

    let users = [];
    
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results
            console.log(results); // results contains rows returned by server 
            
            res.send(JSON.stringify(users))
        }
      );
}

const getHH = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getHH
}