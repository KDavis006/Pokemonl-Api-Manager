const users = require('../models/user');

const updateUser = async(req, res) => {
  try {
  
  const {email: email} = req.params
  let answer = await users.findOneAndUpdate({email: email}, req.body, {
    new: true, 
    runValidators: true
  })
  res.json(answer)
} catch (err) {}
}

const removeUserData = async (req, res) => {
  try {
    const { email } = req.params;
    const id = req.body[0].id;

    let currentUser = await users.findOne({ email: email });

    let newFavorites = [[]];
    currentUser.favorites.map((subArray) => {
      subArray.map((cards) => {
        if (cards.id !== id) {
          newFavorites.push([cards]);
        }
      });
    });

    let answer = await users.findOneAndUpdate(
      { email: email },
      {
        favorites: newFavorites,
      }
    );

    // Reload the page on success
    res.json(answer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};



module.exports = {updateUser, removeUserData}