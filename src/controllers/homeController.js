const connection = require('../config/database')


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getHH = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req,res) => {
    console.log(req.body.name);
    
    res.send("create new user")
}

module.exports = {
    getHomepage,
    getHH,
    postCreateUser
}