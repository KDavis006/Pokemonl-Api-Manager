const users = require('../models/user');

const updateUser = async(req, res) => {
  try {
  console.log(req.body)
  
  const {email: email} = req.params
  let answer = await users.findOneAndUpdate({email: email}, req.body, {
    new: true, 
    runValidators: true
  })
  console.log(answer)
  res.json(answer)
} catch (err) {}
}

const removeUserData = async (req, res) => {
  try {
    const { email: email } = req.params;

    // const id = res.json(req.body)[0].id
    console.log(req.body)
    const id = req.body[0].id
    console.log(id)

    let currentUser = await users.findOne({email: email})
    console.log(currentUser)

    // console.log(id)
    
    

    let newFavorites = [[]];
    currentUser.favorites.map(subArray => {
      subArray.map(cards => {
        if(cards.id != id){
          console.log('found it')
          console.log(cards)
          newFavorites.push([cards]);
        }
      })
    })

    console.log(newFavorites)

    let answer = await users.findOneAndUpdate({email: email}, {
    favorites: newFavorites
    })

    console.log(answer)
    res.json(answer)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};


module.exports = {updateUser, removeUserData}