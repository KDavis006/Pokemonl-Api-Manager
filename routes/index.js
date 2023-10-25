const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

// homepage

router.get('/', (req,res) =>{
 res.render('pages/welcome')
})

// register page

// router.get('/register', (req, res) =>{
//  res.render('pages/register')
// })

// dashboard-Homepage Redirect
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
 console.log(req.user);
 res.render('pages/home', {
  user: req.user
 });
})

router.get('/pokedex', ensureAuthenticated, (req, res) => {
 console.log(req.user);
 res.render('pages/pokedex', {
   user: req.user
  });
})

module.exports = router

// this makes sure that the user is logged in before accessing any other pages
