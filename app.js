const express = require('express');
require('dotenv').config()
require('./db/connect')
const app = express();
const pokemon = require('./routes/pokemon-controller');
const auth = require('./routes/auth');
const connectDB = require('./db/connect');

// static assets
app.use(express.static('./public'))
// parse form data
app.use(express.urlencoded({ extended: false}));
// parse json data
app.use(express.json());

// Routes/router
app.use('/api/pokemon', pokemon)
app.use('/login', auth)

// Server listener

const initServer = async () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    app.listen(5000, () => {
     console.log("Server is listening on Port 5000")
    })
  } catch (err) {
    console.log(err)
  }
}

initServer()