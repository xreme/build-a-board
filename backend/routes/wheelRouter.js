const express = require('express');

const router = express.Router();

const {addWheel,
    getAllWheels,
    getWheel,
    getWheelSet
} = require('../controllers/wheelController');
const { get } = require('mongoose');


router.post('/',addWheel);

router.get('/',getAllWheels)

router.get('/wheelSet',getWheelSet)

router.get('/:id',getWheel);

module.exports = router;