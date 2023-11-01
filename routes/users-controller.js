const express = require('express')
const router = express.Router()
const {updateUser, removeUserData} = require('../controllers/users')

router.put('/:email', updateUser)
router.delete('/:email', removeUserData)

module.exports = router;