const express = require('express');

const router = express.Router();

const {getAllTrucks,
    getTruck,
    addTruck,
    getTruckSet
} = require('../controllers/truckController');


router.post('/',addTruck);

router.get('/',getAllTrucks)

router.get('/truckSet', getTruckSet)
router.get('/:id',getTruck);

module.exports = router;