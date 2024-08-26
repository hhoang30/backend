const express = require('express')
const router = express.Router();
const {getHomepage, getHH, postCreateUser, getCreatePage} = require('../controllers/homeController')

// khai bao route
router.get('/', getHomepage);
router.get('/hh', getHH)
router.get('/create', getCreatePage)


router.post('/create-user', postCreateUser)


module.exports = router;