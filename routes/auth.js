const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
 console.log(req.body);
 const {name} = req.body
 if(name.includes('Kyle')){
  return res.json({status:200, data:name})
 }
 res.send('please provide proper credentials')
})

module.exports = router