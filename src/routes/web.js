const express = require('express')
const router = express.Router();
const {getHomepage, getHH, postCreateUser, getCreatePage, getUpdatePage,postUpdateUser} = require('../controllers/homeController')

// khai bao route
router.get('/', getHomepage);
router.get('/hh', getHH)
router.get('/create', getCreatePage)
router.get('/update/:userId', getUpdatePage)


router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)


module.exports = router;