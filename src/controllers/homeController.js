const connection = require('../config/database')
const {getAllUsers, getUserById} = require('../services/CRUDService')

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

const getUpdatePage = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    

    let user = await getUserById(userId);
    return res.render('update.ejs', {user: user})
}

const postUpdateUser = async (req,res) => {
    //  const userId = req.params.userId;
    // let { name, email , city, userId } = req.body;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.index;

    console.log(req.body);
    
    let [results , fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city =? WHERE id = ? `, [email, name, city, userId] 
    );
    console.log("check result", results);
    
    res.send("user updated");

}

const postCreateUser = async (req,res) => {

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
    getUpdatePage,
    postUpdateUser
}