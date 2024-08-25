const connection = require('../config/database')


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getHH = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getHH
}