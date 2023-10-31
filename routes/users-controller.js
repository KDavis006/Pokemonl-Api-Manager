const express = require('express')
const router = express.Router()
const {updateUser, removeUserData} = require('../controllers/users')

console.log('Starting')

router.route('/:email').put(updateUser).delete(removeUserData)

module.exports = router;