const express = require('express')
const router = express.Router()
const {updateUser} = require('../controllers/users')

console.log('Starting')

router.route('/:email').put(updateUser)

module.exports = router;