const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `select * from Users`
    )
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        'select * from Users where id = ?', [userId]
    )
    // console.log(results);
    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

const updateUserById = async (name, email , city, userId) => {
    let [results , fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city =? 
        WHERE id = ? `, [email, name, city, userId] 
    );
    console.log(results);
    
    return results;
}

const createNewUser = async (name, email, city) => {
        
    let [results , fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log("check result", results);
    let user = [email, name, city];
    console.log(user);
    return user;
}

const deleteUserById = async (userId) => {
    let [results , fields] = await connection.query(
        `DELETE FROM Users WHERE id = ? `, [userId] 
    );
    console.log(results);
    
    return results;
}



module.exports = {
    getAllUsers,getUserById,
    updateUserById, createNewUser, deleteUserById
}