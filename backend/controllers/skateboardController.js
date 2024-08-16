const { request } = require("express");
const { skateboardModel, deckModel } = require("../models/skateboardModel");

// get all skateboard builds
const getAllSkateboardBuilds = async (request, response) => {
  try {
    const allSkateboardBuilds = await skateboardModel
      .find({})
      .sort({ createdAt: -1 });
    response.status(200).json(allSkateboardBuilds);
  } catch {
    console.log('an error occured while fetching all decks')
    response(400).json({error:"An error occured"})
  }
} 
;
// get a specific skateboard build
const getSkateboard = async (request, response) => {
  const { id } = request.params;  
  try{
    const skatebaord = await skateboardModel.findById(id);
    response.status(200).json(skatebaord);
    if (!skatebaord) {
        response.status (400).json({ error: "skateboard not found" });
    };
  } catch{
    response.status(400).json({error: 'error while fetching skateboard build'})
  }
};
// create a new skateboard build
const createSkateboardBuild = async (request, response) => {
  const { title, deckID, truckID, wheelsID, bearingsID } = request.body;
         
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  };
  if (!deckID) {
    emptyFields.push("deckID");
  };
  if (!truckID) {
    emptyFields.push("truckID");
  };
  if (!wheelsID) {
    emptyFields.pussh("wheelsID");
  };
  if (!bearingsID) {
    emptyFields.pushh("bearingsID");
  };
  if (emptyFields.length > 0) {
    response.status(400).json({ error: "Missing fields ", emptyFields });
    return;
  } ;
 
  try {
    // CREATE A NEW SKATEBOARD BUILD DOCUMENT
    const newSkateboardBuild = await skateboardModel.create({
      title,
      deckID,
      truckID,
      wheelsID,
      bearingsID,
    });
    response.status(200).json(newSkateboardBuild);
  } catch (error) {
    response.stats(400).json({ error: error.message });
  }   
};
// delete skatebaord build
const deleteSkateboardBuild = async (request, response) => {
  const { id } = request.params;   
  
  if (!skateboardModel) {
    response.status(404).json({ error: "skateboard not found" });
  };
  
  const skatebaord = await skateboardModel.findByIdAndDelete({ _id: id });
  
  if (!skatebaord) {
    response.statu (404).json({ error: "skateboard not found" });
  };
 
  response.status(200).json(skatebaord);
};
// udpate a skateboard build
const updateSkateboardBuild = async (request, response) => {
  const { id } = request.params;   
    
  if (!skateboardModel) {
    response.status(404).json({ error: "skateboard not found" });
  }
  
  const skatebaord = await skateboardModel.findByIdAndUpdate(
    { _id: id },
    { ...request.body}
  );
  if (!skatebaord) {
    response.statu (404).json({ error: "skateboard not found" });
  }
  response.status(200).json({ info: skatebaord + "skateboard updated" });
};

module.exports = {
  createSkateboardBuild,
  getAllSkateboardBuilds,
  getSkateboard,
  deleteSkateboardBuild,
  updateSkateboardBuild,
};
