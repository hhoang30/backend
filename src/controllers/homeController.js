const connection = require('../config/database')
const {getAllUsers} = require('../services/CRUDService')

const getHomepage = async (req, res) => {

    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getHH = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    let userId = req.params.userId;
    console.log(req.params, userId);
    
    return res.render('update.ejs')
}

const postCreateUser = async (req,res) => {
    // console.log(req.body.name);
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;

    let { email, name, city } = req.body;
    
    let [results , fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log("check result", results);
    
    res.send("create new user");
}

module.exports = {
    getHomepage,
    getHH,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}