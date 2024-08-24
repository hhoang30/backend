const express = require('express')
const router = express.Router();
const {getHomepage, getHH} = require('../controllers/homeController')

// khai bao route
router.get('/', getHomepage);
router.get('/hh', getHH)

module.exports = router;