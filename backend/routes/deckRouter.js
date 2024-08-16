const express = require('express');

const router = express.Router();

const {addDeck,
    getAllDecks,
    getDeck ,
    getDeckSet
} = require('../controllers/deckController');
const { get } = require('mongoose');


router.post('/',addDeck);

router.get('/',getAllDecks)

router.get('/deckSet', getDeckSet)

router.get('/:id',getDeck);

module.exports = router;