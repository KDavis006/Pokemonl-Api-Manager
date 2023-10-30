const users = require('../models/user');

const updateUser = async(req, res) => {
  try {
  const {email: email} = req.params
  let answer = await users.findOneAndUpdate({email: email}, req.body, {
    favorites: [req.body]
  })
  console.log(answer)
  res.json(answer)
} catch (err) {}
}

module.exports = {updateUser}