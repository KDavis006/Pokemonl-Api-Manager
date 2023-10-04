const express = require('express'), router = express.Router(), {readPokemon, readAllPokemon} = require('../controllers/pokemon')

router.get('/pokemon/:id', readPokemon);
router.get('/pokemon', readAllPokemon);

module.exports = router;