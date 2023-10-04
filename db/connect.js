const mongoose = require('mongoose');


const conectDB = (url) => {
 // remember this is temporary and needs to be replaced
 console.log('DB connection successfully');
 return mongoose.connect(url, {
 })
}
module.exports = conectDB