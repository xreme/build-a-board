// import the express library
const express = require('express');

// import the request handlers from the skateboardController
const{
    createSkateboardBuild,
    getAllSkateboardBuilds,
    getSkateboard,
    deleteSkateboardBuild,
    updateSkateboardBuild
} = require('../controllers/skateboardController');

// create a router object - used to route requests
const router = express.Router();


// request handlers

// get all skateboard builds
router.get('/',getAllSkateboardBuilds);

// get a specific skateboard build
router.get('/:id',getSkateboard);

// create a new skateboard build
router.post('/',createSkateboardBuild);

// delete skatebaord build
router.delete('/:id',deleteSkateboardBuild);

// update a skateboard build
router.patch('/:id',updateSkateboardBuild);

// export the router object - allow other files to use it
module.exports = router;