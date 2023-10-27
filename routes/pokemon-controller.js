const express = require('express')
const router = express.Router()
const {getPoke} = require('../controllers/pokemon')

router.get('/', getPoke)

module.exports = router;