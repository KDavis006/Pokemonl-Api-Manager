const users = require('../models/user');

const updateUser = async(req, res) => {
  try {
    console.log(req.body)
  const {email: email} = req.params
  let answer = await users.findOneAndUpdate({email: email}, req.body, {
    new: true, 
    runValidators: true
  })
  readPeople()
  console.log(answer)
  res.json(answer)
} catch (err) {}
}

module.exports = {updateUser}