const connection = require('../config/database')
const {getAllUsers,
    getUserById,
    updateUserById,
    createNewUser} = require('../services/CRUDService')

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

    let user = await getUserById(userId);
    return res.render('update.ejs', {user: user})
}

const postUpdateUser = async (req,res) => {
    //  const userId = req.params.userId;
    let { name, email , city, userId } = req.body;
    let user = await updateUserById(name, email , city, userId)
    return res.redirect("/");
}

const postCreateUser = async (req,res) => {  
    let { email, name, city } = req.body;
    let user = await createNewUser(name, email, city);
    return res.redirect("/");
}

// const confirmDelete = async (req,res) => {
//     // return alert("delete");
//     await console.log("click me");
    
// }

module.exports = {
    getHomepage,
    getHH,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
}